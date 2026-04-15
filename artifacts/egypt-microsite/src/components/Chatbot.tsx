import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, MessageCircle, Loader2 } from "lucide-react";

type Message = { role: "user" | "assistant"; content: string };

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");
const API = `${BASE}/api`;

const SUGGESTED = [
  "What's included in each ticket?",
  "How do I secure my place?",
  "Do I need prior experience?",
  "Is there a money-back guarantee?",
];

async function createConversation(): Promise<number> {
  const res = await fetch(`${API}/openai/conversations`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: "Elite Be Superhuman Chatbot" }),
  });
  const data = await res.json();
  return data.id;
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [convId, setConvId] = useState<number | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const [showSuggested, setShowSuggested] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, streaming]);

  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  const send = async (text: string) => {
    if (!text.trim() || streaming) return;
    setShowSuggested(false);
    setInput("");

    let id = convId;
    if (!id) {
      id = await createConversation();
      setConvId(id);
    }

    setMessages((prev) => [...prev, { role: "user", content: text }]);
    setStreaming(true);
    setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

    try {
      const res = await fetch(`${API}/openai/conversations/${id}/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: text }),
      });

      const reader = res.body!.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() ?? "";

        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          try {
            const json = JSON.parse(line.slice(6));
            if (json.done) break;
            if (json.content) {
              setMessages((prev) => {
                const updated = [...prev];
                updated[updated.length - 1] = {
                  role: "assistant",
                  content: updated[updated.length - 1].content + json.content,
                };
                return updated;
              });
            }
          } catch {}
        }
      }
    } catch {
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "assistant",
          content: "I'm sorry, something went wrong. Please try again.",
        };
        return updated;
      });
    } finally {
      setStreaming(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    send(input);
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center"
        style={{
          background: "linear-gradient(135deg, #d39222, #F3D696, #d39222)",
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open chat"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <X className="w-6 h-6 text-[#1a1208]" />
            </motion.div>
          ) : (
            <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <MessageCircle className="w-6 h-6 text-[#1a1208]" />
            </motion.div>
          )}
        </AnimatePresence>
        {/* Pulse ring */}
        {!open && (
          <motion.span
            className="absolute inset-0 rounded-full"
            style={{ border: "2px solid rgba(243,214,150,0.6)" }}
            animate={{ scale: [1, 1.5], opacity: [0.7, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-1.5rem)] flex flex-col rounded-2xl overflow-hidden shadow-2xl"
            style={{
              height: "520px",
              background: "hsl(var(--background))",
              border: "1px solid rgba(243,214,150,0.3)",
              boxShadow: "0 25px 60px rgba(0,0,0,0.2), 0 0 0 1px rgba(243,214,150,0.15)",
            }}
          >
            {/* Header */}
            <div
              className="px-5 py-4 flex items-center gap-3 shrink-0"
              style={{ background: "linear-gradient(135deg, #d39222, #F3D696, #d39222)" }}
            >
              <div className="w-9 h-9 rounded-full bg-[#1a1208]/20 flex items-center justify-center text-lg shrink-0">✦</div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-[#1a1208] text-sm leading-none">Elite Be Superhuman</p>
                <p className="text-[#1a1208]/70 text-xs mt-0.5">Ask me anything about the event</p>
              </div>
              <div className="w-2 h-2 rounded-full bg-green-600 shrink-0" title="Online" />
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 min-h-0">
              {messages.length === 0 && (
                <div className="text-center py-4">
                  <div className="text-primary text-3xl mb-3">✦</div>
                  <p className="text-foreground font-semibold text-sm mb-1">Welcome to Elite Be Superhuman</p>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    I'm here to answer your questions about the 3-day live transformation event in London.
                  </p>
                </div>
              )}

              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  {msg.role === "assistant" && (
                    <div className="w-6 h-6 rounded-full shrink-0 mt-0.5 mr-2 flex items-center justify-center text-xs"
                      style={{ background: "linear-gradient(135deg, #d39222, #F3D696)" }}>
                      ✦
                    </div>
                  )}
                  <div
                    className={`max-w-[82%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "text-[#1a1208] rounded-br-sm"
                        : "bg-secondary/60 text-foreground rounded-bl-sm"
                    }`}
                    style={msg.role === "user" ? { background: "linear-gradient(135deg, #d39222, #F3D696, #d39222)" } : {}}
                  >
                    {msg.content || (
                      <span className="flex items-center gap-1.5">
                        <Loader2 className="w-3 h-3 animate-spin text-primary" />
                        <span className="text-muted-foreground text-xs">Thinking…</span>
                      </span>
                    )}
                  </div>
                </div>
              ))}

              <div ref={bottomRef} />
            </div>

            {/* Suggested questions */}
            <AnimatePresence>
              {showSuggested && messages.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="px-4 pb-3 flex flex-col gap-2 shrink-0"
                >
                  <p className="text-muted-foreground text-xs mb-1">Suggested questions:</p>
                  {SUGGESTED.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => send(q)}
                      className="text-left text-xs px-3 py-2 rounded-xl border border-primary/30 text-foreground/80 hover:border-primary hover:text-primary transition-colors duration-150 bg-secondary/30"
                    >
                      {q}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 px-4 py-3 border-t border-border/50 shrink-0 bg-background"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about the event…"
                disabled={streaming}
                className="flex-1 bg-secondary/40 border border-border/50 rounded-xl px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/50 disabled:opacity-50 transition-colors"
              />
              <button
                type="submit"
                disabled={!input.trim() || streaming}
                className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 disabled:opacity-40 transition-all hover:scale-105 active:scale-95"
                style={{ background: "linear-gradient(135deg, #d39222, #F3D696, #d39222)" }}
              >
                {streaming ? (
                  <Loader2 className="w-4 h-4 text-[#1a1208] animate-spin" />
                ) : (
                  <Send className="w-4 h-4 text-[#1a1208]" />
                )}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
