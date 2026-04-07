import { Router } from "express";
import { db } from "@workspace/db";
import { conversations, messages } from "@workspace/db";
import { eq } from "drizzle-orm";
import { openai } from "@workspace/integrations-openai-ai-server";

const router = Router();

const SYSTEM_PROMPT = `You are a warm, knowledgeable assistant for the Cosmic Ascension Tour of Egypt — a premium 15-day sacred pilgrimage led by Jerry Sargeant (Star Magic) taking place 16th–30th March 2027.

Your role is to help potential participants feel excited, informed, and guided toward booking their spot.

Key facts you know:
- The tour runs 16th–30th March 2027
- Total price: £8,444 per person
- Deposit to secure a place: £1,500 (balance paid in flexible instalments)
- Group size: 25–40 people maximum (intimate and intentional)
- Includes: 7 private-access guided tours, 7-day Nile River cruise, 4★/5★ accommodation, all meals (breakfast, lunch, dinner + unlimited water, snacks & fruit), internal flights, ground transport, airport transfers on designated dates
- Not included: international flights, travel insurance, entry visa, €150 mandatory gratuity, two optional site tours, personal expenses
- Accommodation: 4★/5★ hotels + Nile cruise ship. Shared rooms (15 private room upgrades available at extra cost — these sell out fast)
- Key sites: Great Pyramid (4 hours private access), Sphinx, Karnak, Luxor Temple, Abu Simbel, Temples of Isis and Horus, Valley of the Kings, Hathor Temple at Dandara, Egyptian Museum, Saqqara, and more
- Daily activities include breathwork, Qigong, group activations, meditations, and sharing circles
- Led by Jerry Sargeant — present for the entire 15 days
- Optional extension: Sinai Peninsula (4–5 days, extra cost)
- Optional activity: hot air balloon over the Valley of the Kings

Tone: Warm, spiritually attuned, professional. You speak to conscious, heart-centred people. Avoid being salesy — be genuinely helpful. If someone asks to book, direct them to click "Reserve Your Place" or "Book a Discovery Call". Keep responses concise (2–4 short paragraphs max) unless more detail is clearly needed.`;

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
