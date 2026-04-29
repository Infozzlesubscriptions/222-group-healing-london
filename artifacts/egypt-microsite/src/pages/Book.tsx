import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { goldBtn, faqItems } from "@/lib/shared";
import { FAQAccordion } from "@/components/FAQAccordion";

const shortFAQ = faqItems.slice(0, 6);

export default function Book() {
  const [openFaq, setOpenFaq] = useState<Record<number, boolean>>({});
  const toggleFaq = (i: number) => setOpenFaq((prev) => ({ ...prev, [i]: !prev[i] }));

  return (
    <div className="min-h-screen bg-background w-full">

      {/* ─── PAGE HERO ─── */}
      <section className="pt-28 sm:pt-32 md:pt-40 pb-12 md:pb-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">Secure Your Place</span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-foreground leading-tight mb-6">222 Group Healing — London</h1>
            <div className="h-px w-20 bg-primary mx-auto mb-8" />
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Two dates. One experience. A full 5 hours of deep group healing, frequency work, and transformation. Places are strictly limited.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── DATE & VENUE ─── */}
      <section className="py-14 px-4" style={{ backgroundColor: "#FDF6E9" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="rounded-2xl p-7 flex flex-col gap-4" style={{ border: "1px solid rgba(211,146,34,0.35)", background: "rgba(211,146,34,0.06)" }}>
              <div className="flex items-center gap-3 mb-1">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: "linear-gradient(135deg, rgba(211,146,34,0.25), rgba(243,214,150,0.1))", border: "1px solid rgba(211,146,34,0.4)" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d39222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                </div>
                <h3 className="text-base font-bold tracking-wide uppercase" style={{ color: "#d39222" }}>Dates & Times</h3>
              </div>
              <div>
                <p className="text-foreground text-base font-semibold mb-1">Saturday 5th September 2026</p>
                <p className="text-foreground text-base font-semibold mb-3">Sunday 6th September 2026</p>
                <p className="text-muted-foreground text-sm">11:00 AM — 6:00 PM (Local Time)</p>
                <p className="text-sm font-semibold mt-3" style={{ color: "#d39222" }}>Food &amp; Accommodation is not included</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="rounded-2xl p-7 flex flex-col gap-4" style={{ border: "1px solid rgba(211,146,34,0.35)", background: "rgba(211,146,34,0.06)" }}>
              <div className="flex items-center gap-3 mb-1">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: "linear-gradient(135deg, rgba(211,146,34,0.25), rgba(243,214,150,0.1))", border: "1px solid rgba(211,146,34,0.4)" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d39222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <h3 className="text-base font-bold tracking-wide uppercase" style={{ color: "#d39222" }}>Venue</h3>
              </div>
              <div>
                <p className="text-foreground text-base font-semibold mb-1">Radisson Blu Hotel, London Heathrow</p>
                <p className="text-muted-foreground text-sm mb-1">140 Bath Road, Hayes, Middlesex, UB3 5AW</p>
                <p className="text-muted-foreground text-xs mb-3">1 mile from London Heathrow Airport</p>
                <a
                  href="https://maps.google.com/?q=Radisson+Blu+Hotel+London+Heathrow+140+Bath+Road+Hayes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold underline underline-offset-2 transition-colors hover:opacity-80"
                  style={{ color: "#d39222" }}
                >
                  View on Google Maps →
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
            <p className="text-muted-foreground text-sm">
              Please see our{" "}
              <a href="https://starmagichealing.com/cancellation-policy" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-80 transition-colors" style={{ color: "#d39222" }}>
                Cancellation Policy here
              </a>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section className="py-20 md:py-28 px-4" style={{ backgroundColor: "#F5F0E8" }}>
        <div className="max-w-3xl mx-auto">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">Pricing</span>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight" style={{ color: "#1a1208" }}>Choose Your Date</h2>
            <p className="text-sm mt-4" style={{ color: "#7a6040" }}>Same powerful experience. Saturday or Sunday — your choice.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col px-7 py-9 rounded-3xl"
            style={{ border: "1px solid #d39222", backgroundColor: "#EDE5D5" }}
          >
            <p className="text-xs font-bold tracking-[0.2em] uppercase mb-2 text-center" style={{ color: "#d39222" }}>London, UK</p>
            <h3 className="text-lg font-bold mb-2 text-center" style={{ color: "#1a1208" }}>5th &amp; 6th September 2026</h3>
            <p className="text-sm text-center mb-6" style={{ color: "#7a6040" }}>Choose Saturday or Sunday — same experience, same price</p>
            <div className="text-center mb-8">
              <div className="line-through text-sm mb-1" style={{ color: "#aaa" }}>£999</div>
              <div className="text-5xl font-extrabold" style={{ color: "#d39222" }}>£888</div>
              <div className="text-[10px] tracking-[0.2em] uppercase font-semibold mt-2" style={{ color: "#b8a080" }}>London · 5 Hours</div>
            </div>
            <ul className="space-y-3 mb-8">
              {[
                "Full 5-hour live group healing with Jerry Sargeant",
                "5D Abundance Code transmissions",
                "Breathwork and frequency healing sessions",
                "Planetary gridwork activation",
                "Star Magic community connection",
                "Post-event integration guidance",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-snug" style={{ color: "#3d2f1a" }}>
                  <svg className="shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7.5" stroke="#d39222" strokeWidth="1" />
                    <path d="M5 8.5l2 2 4-4" stroke="#d39222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a href="https://buy.stripe.com/28E4gzbCU8pT8obd6L9Zm1a" target="_blank" rel="noopener noreferrer">
                <button className="w-full py-3.5 rounded-lg text-sm font-bold tracking-wide transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-md" style={goldBtn}>
                  Book Saturday 5th Sept
                </button>
              </a>
              <a href="https://buy.stripe.com/eVq4gz0Yg5dHawj3wb9Zm1b" target="_blank" rel="noopener noreferrer">
                <button className="w-full py-3.5 rounded-lg text-sm font-bold tracking-wide transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-md" style={goldBtn}>
                  Book Sunday 6th Sept
                </button>
              </a>
            </div>
          </motion.div>

          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="text-center text-xs mt-5" style={{ color: "#7a6040" }}>
            Payments processed securely via Stripe. All major cards accepted.
          </motion.p>
        </div>
      </section>

      {/* ─── WHAT'S INCLUDED ─── */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">What You Get</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">Everything That's Included</h2>
            <div className="h-px w-20 bg-primary mx-auto mt-8" />
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { icon: "⚡", title: "5-Hour Live Healing Session", body: "A full day with Jerry Sargeant — working the entire group field simultaneously with Star Magic frequency healing techniques." },
              { icon: "💛", title: "5D Abundance Code Activations", body: "Multiple dedicated transmissions of 5D Abundance Codes woven throughout the day to dissolve scarcity and activate abundance." },
              { icon: "🌬️", title: "Guided Breathwork", body: "Specific conscious breathing practices to open your body, calm your nervous system, and prepare you to receive deep healing." },
              { icon: "✨", title: "Light Language Transmissions", body: "Jerry's signature light language — a multidimensional healing frequency that speaks directly to your soul and your DNA." },
              { icon: "🌍", title: "Planetary Gridwork", body: "A collective healing practice that sends the energy generated in the room outward to the Earth and all beings. Extraordinary." },
              { icon: "🤝", title: "Star Magic Community", body: "You join a global family of 85+ countries. Connection with other attendees before, during, and after the event is part of the experience." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl p-6 flex gap-4"
                style={{ border: "1px solid rgba(211,146,34,0.25)", background: "rgba(211,146,34,0.04)" }}
              >
                <div className="text-2xl shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-base text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GUARANTEE ─── */}
      <section className="py-20 px-4" style={{ backgroundColor: "#FDF6E9" }}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="rounded-3xl border-2 overflow-hidden shadow-xl"
            style={{ borderColor: "#d39222" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="px-8 py-10 md:px-14 md:py-12 text-center" style={{ background: "rgba(211,146,34,0.08)" }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center shadow-xl" style={{ background: "linear-gradient(135deg, #d39222 0%, #FFECBA 50%, #d39222 100%)" }}>
                <span className="text-[#1a1208] font-bold text-[9px] uppercase tracking-widest leading-tight text-center px-1">100%<br />Money<br />Back</span>
              </div>
              <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">Zero Risk Guarantee</span>
              <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-6" style={{ color: "#1a1208" }}>Come. Experience it. Then decide.</h2>
              <p className="text-base leading-relaxed mb-4 max-w-2xl mx-auto" style={{ color: "#5a4a30" }}>
                If by the midway point of the session this isn't everything you hoped for — tell a team member and we will refund you in full. Right there and then.
              </p>
              <p className="text-base leading-relaxed mb-4 max-w-2xl mx-auto" style={{ color: "#5a4a30" }}>
                No forms. No waiting period. No questions asked. You get your money back and you are free to leave.
              </p>
              <p className="font-bold text-base italic mb-8" style={{ color: "#1a1208" }}>The only risk is not showing up.</p>
              <div className="flex justify-center">
                <a href="https://buy.stripe.com/28E4gzbCU8pT8obd6L9Zm1a" target="_blank" rel="noopener noreferrer">
                  <button className="px-10 py-3.5 rounded-lg text-sm font-bold tracking-wide transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-md" style={goldBtn}>
                    Book Your Place — 5th &amp; 6th September
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── SHORT FAQ ─── */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-3xl mx-auto">
          <motion.div className="text-center mb-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">Common Questions</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Quick Answers Before You Book</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="rounded-3xl border border-border/50 bg-card shadow-sm overflow-hidden mb-8">
            {shortFAQ.map((item, i) => (
              <FAQAccordion key={i} item={item} isOpen={!!openFaq[i]} onToggle={() => toggleFaq(i)} />
            ))}
          </motion.div>
          <div className="text-center">
            <Link href="/faq">
              <button className="text-sm font-semibold px-8 py-3 rounded-lg tracking-wide transition-all duration-200 hover:scale-[1.02] cursor-pointer" style={{ background: "transparent", border: "1px solid rgba(211,146,34,0.5)", color: "#d39222" }}>
                See All FAQs →
              </button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
