import { Router } from "express";
import { db } from "@workspace/db";
import { conversations, messages } from "@workspace/db";
import { eq } from "drizzle-orm";
import { openai } from "@workspace/integrations-openai-ai-server";

const router = Router();

const SYSTEM_PROMPT = `You are a concise, warm assistant for Elite Be Superhuman — a 3-day live personal transformation event led by Jerry Sargeant (Star Magic) in London, UK, May 15–17, 2026.

RESPONSE RULES (follow strictly):
- Answer in 1–3 short sentences OR a tight bullet list (3–5 bullets max).
- Never write long paragraphs. Be direct and clear.
- Warm, confident, heart-centred tone — never salesy.
- If asked to book: direct to "Secure Your Place" or the Booking page on the site.
- If asked about refunds: mention the 100% money-back guarantee — if by lunchtime on day one it's not what they expected, they get a full refund on the spot, no questions asked.

Key facts:
- Event: Elite Be Superhuman — 3-day live transformation experience
- Dates: May 15–17, 2026 (3 days, 9am–6pm each day with 1 hour lunch break)
- Location: Radisson Blu Hotel, London Heathrow, 140 Bath Road, Hayes, Middlesex, UB3 5AW
- Accommodation & food: NOT included
- Led by Jerry Sargeant — 20+ years experience, 500,000+ lives transformed across 85+ countries
- Pricing (Early Bird):
  • General Admission: £366 (was £444) — full 3-day access, breathwork & energy sessions, take-home protocol
  • VIP Access: £799 (was £999) — everything in GA + priority seating, VIP networking, bonus materials, post-event integration call
  • Elite Package: £1,222 (was £1,555) — everything in VIP + 1-on-1 session with Jerry, lifetime community access, personal roadmap session
- Payment plans available at checkout
- What happens: breathwork, Qigong, energy work, nervous system recalibration, meditations, activations, performance psychology, consciousness work
- What you walk away with: personalised Superhuman protocol, state-shifting breathwork techniques, nervous system reset tools, alignment of health/wealth/relationships
- Expert speakers: Dr. Merlin Sheldrake, Dr. Maher, Dr. Angela
- No prior experience in meditation or breathwork needed — everything is guided
- Guarantee: 100% money back if not satisfied by lunchtime on day one
- Contact: admin@starmagichealing.org`;

router.post("/conversations", async (req, res) => {
  try {
    const { title } = req.body as { title?: string };
    const [conv] = await db
      .insert(conversations)
      .values({ title: title || "Elite Be Superhuman Enquiry" })
      .returning();
    res.status(201).json(conv);
  } catch {
    res.status(500).json({ error: "Failed to create conversation" });
  }
});

router.post("/conversations/:id/messages", async (req, res) => {
  const id = parseInt(req.params.id);
  const { content } = req.body as { content: string };

  if (!content?.trim()) {
    return res.status(400).json({ error: "content is required" });
  }

  try {
    await db.insert(messages).values({ conversationId: id, role: "user", content });

    const history = await db
      .select()
      .from(messages)
      .where(eq(messages.conversationId, id))
      .orderBy(messages.createdAt);

    const chatMessages = [
      { role: "system" as const, content: SYSTEM_PROMPT },
      ...history.map((m) => ({ role: m.role as "user" | "assistant", content: m.content })),
    ];

    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    let fullResponse = "";

    const stream = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: chatMessages,
      stream: true,
    });

    for await (const chunk of stream) {
      const text = chunk.choices[0]?.delta?.content;
      if (text) {
        fullResponse += text;
        res.write(`data: ${JSON.stringify({ content: text })}\n\n`);
      }
    }

    await db.insert(messages).values({
      conversationId: id,
      role: "assistant",
      content: fullResponse,
    });

    res.write(`data: ${JSON.stringify({ done: true })}\n\n`);
    res.end();
  } catch (err) {
    console.error("Chat error:", err);
    res.write(`data: ${JSON.stringify({ error: "Something went wrong" })}\n\n`);
    res.end();
  }
});

export default router;
