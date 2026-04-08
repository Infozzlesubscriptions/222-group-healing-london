import { Router } from "express";
import { db } from "@workspace/db";
import { conversations, messages } from "@workspace/db";
import { eq } from "drizzle-orm";
import { openai } from "@workspace/integrations-openai-ai-server";

const router = Router();

const SYSTEM_PROMPT = `You are a concise, warm assistant for the Cosmic Ascension Tour of Egypt — a 15-day sacred pilgrimage led by Jerry Sargeant (Star Magic), 16th–30th March 2027.

RESPONSE RULES (follow strictly):
- Answer in 1–3 short sentences OR a tight bullet list (3–5 bullets max).
- Never write long paragraphs. Be direct and clear.
- Warm, heart-centred tone — never salesy.
- If asked to book: direct to "Reserve Your Place" or "Book a Discovery Call" on the site.

Key facts:
- Dates: 16–30 March 2027 (15 days)
- Price: £8,444 pp · Deposit: £1,500 · Balance in flexible instalments
- Group: 25–40 people max
- Included: 7 private-access site tours, 7-day Nile cruise, 4★/5★ hotels, all meals, internal flights, transfers
- Not included: international flights, travel insurance, visa, €150 gratuity, personal expenses
- Rooms: shared (15 private upgrades available — sell fast)
- Sites: Great Pyramid (4 hrs private), Sphinx, Karnak, Luxor, Abu Simbel, Isis & Horus Temples, Valley of the Kings, Saqqara, Egyptian Museum & more
- Daily: breathwork, Qigong, group activations, meditations, sharing circles
- Led by Jerry Sargeant — present all 15 days
- Optional: Sinai extension (extra cost), hot air balloon over Valley of the Kings`;

router.post("/conversations", async (req, res) => {
  try {
    const { title } = req.body as { title?: string };
    const [conv] = await db
      .insert(conversations)
      .values({ title: title || "Egypt 2027 Enquiry" })
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
