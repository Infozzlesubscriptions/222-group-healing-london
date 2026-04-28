import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { FAQAccordion } from "@/components/FAQAccordion";
import { goldBtn, faqItems } from "@/lib/shared";

const extraFAQ = [
  { q: "Does Jerry personally facilitate every session?", a: "Yes. Jerry Sargeant personally facilitates every 222 Group Healing. This is not a franchise or a trained facilitator running someone else's method — it is Jerry, in person, working directly with the room." },
  { q: "What if I feel overwhelmed during the session?", a: "The Star Magic team are trained to hold you through strong releases. If you feel overwhelmed, simply breathe and allow — or signal to a team member. You will never be left alone in a difficult moment. The container is deeply held and deeply safe." },
  { q: "How do I prepare for the event?", a: "Drink plenty of water in the days leading up. Eat lightly on the day of the event. Wear comfortable clothing. Set an intention for what you wish to release or receive. Come with an open mind and an open heart — that is all that is required." },
  { q: "Is this connected to any religion or belief system?", a: "No. Star Magic is a non-denominational healing modality. It draws on universal principles of energy, consciousness, and love — not any religious tradition. People from all faiths and none attend and benefit fully." },
  { q: "How quickly will I feel the effects?", a: "Many people feel shifts during the session itself. Others notice changes in the hours, days, or weeks that follow. Integration is a process — the healing continues to unfold after the event. Some of the most profound shifts are reported weeks after attending." },
  { q: "Can I bring a friend or family member?", a: "Absolutely. In fact, attending with someone you love can amplify the experience for both of you. Note that separate tickets are required for each person." },
];

const allFAQ = [...faqItems, ...extraFAQ];

const categories = [
  { label: "About the Experience", items: allFAQ.slice(0, 5) },
  { label: "Preparation & Logistics", items: allFAQ.slice(5, 9) },
  { label: "After the Event", items: allFAQ.slice(9, 12) },
  { label: "About Jerry & Star Magic", items: allFAQ.slice(12) },
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const toggle = (key: string) => setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="min-h-screen bg-background w-full">

      {/* ─── PAGE HERO ─── */}
      <section className="pt-28 sm:pt-32 md:pt-40 pb-16 md:pb-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">Got Questions?</span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-foreground leading-tight mb-6">222 Group Healing FAQs</h1>
            <div className="h-px w-20 bg-primary mx-auto mb-8" />
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Everything you need to know before booking — answered honestly and in full.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── FAQ CATEGORIES ─── */}
      <section className="py-16 px-4" style={{ backgroundColor: "#FDF6E9" }}>
        <div className="max-w-4xl mx-auto space-y-12">
          {categories.map((cat, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: ci * 0.08 }}
            >
              <h2 className="text-xl font-bold mb-5 pb-4 border-b" style={{ color: "#1a1208", borderColor: "rgba(211,146,34,0.3)" }}>
                <span style={{ color: "#d39222" }}>✦ </span>{cat.label}
              </h2>
              <div className="rounded-2xl border border-border/40 bg-card overflow-hidden shadow-sm">
                {cat.items.map((item, i) => {
                  const key = `${ci}-${i}`;
                  return (
                    <FAQAccordion
                      key={key}
                      item={item}
                      isOpen={!!openItems[key]}
                      onToggle={() => toggle(key)}
                    />
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── STILL HAVE QUESTIONS ─── */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl p-10 text-center"
            style={{ border: "1px solid rgba(211,146,34,0.35)", background: "rgba(211,146,34,0.05)" }}
          >
            <div className="text-primary text-3xl mb-4">✦</div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Still Have a Question?</h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-xl mx-auto">
              We're here to help. Reach out to the Star Magic team directly and we'll get back to you as soon as we can.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
              <a href="mailto:info@starmagichealing.com">
                <button className="text-base font-bold px-8 py-3.5 rounded-lg tracking-wide transition-all duration-200 hover:scale-[1.02] cursor-pointer" style={{ background: "transparent", border: "2px solid rgba(211,146,34,0.7)", color: "#d39222" }}>
                  Email Us
                </button>
              </a>
              <Link href="/book">
                <button className="text-base font-bold px-8 py-3.5 rounded-lg tracking-wide transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97] cursor-pointer shadow-lg" style={goldBtn}>
                  Book Your Place
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
