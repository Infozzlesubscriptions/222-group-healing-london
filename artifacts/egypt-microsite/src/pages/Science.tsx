import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import card1Img from "@assets/Brain-Scan-1-scaled_1776168428464.webp";
import day2Img from "@assets/Program-and-step-3-scaled_1776166006733.webp";
import { goldBtn } from "@/lib/shared";

export default function Science() {
  const [scienceVideoPlaying, setScienceVideoPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-background w-full">

      {/* ─── PAGE HERO ─── */}
      <section className="pt-40 pb-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">Backed by Data</span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight mb-6">What the Science is Showing Us</h1>
            <div className="h-px w-20 bg-primary mx-auto mb-8" />
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              We're not asking you to take this on faith alone. We've brought in scientists and neuroscientists to measure what is actually happening inside these sessions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── BRAIN SCAN SECTION ─── */}
      <section className="py-20 px-4" style={{ backgroundColor: "#FDF6E9" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                img: card1Img,
                title: "We've Conducted Live Brain Scans",
                body: "After just hours of this work, participants showed measurable decreases in beta brainwaves associated with stress and overthinking, alongside significant increases in theta and delta brainwaves linked to healing, intuition, and deep nervous system regulation.",
              },
              {
                img: day2Img,
                title: "The Impact Is Real and Measurable",
                body: "These shifts create a stable internal foundation — emotional resilience, clearer thinking, faster recovery, and a stronger sense of presence. The brain, heart, and energy field enter coherence. From that state, everything you want to create flows ten times more easily.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="rounded-3xl overflow-hidden border border-border/40 bg-card shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="w-full aspect-[16/9] overflow-hidden">
                  <img src={card.img} alt={card.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                <div className="p-7 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold italic mb-4" style={{ color: "#d39222" }}>{card.title}</h3>
                  <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">{card.body}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="max-w-4xl mx-auto">
            <div className="mb-4 text-center">
              <span className="text-primary tracking-[0.25em] text-xs font-bold uppercase">Watch the Evidence</span>
            </div>
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
              style={{ border: "1px solid rgba(243,214,150,0.35)", aspectRatio: "16/9" }}
              onClick={() => setScienceVideoPlaying(true)}
            >
              {scienceVideoPlaying ? (
                <iframe
                  src="https://player.vimeo.com/video/1099884785?badge=0&autopause=0&quality_selector=1&player_id=0&app_id=58479&autoplay=1"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  className="absolute inset-0 w-full h-full"
                  title="The Science Behind It All"
                  style={{ border: 0 }}
                />
              ) : (
                <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #1a1208 0%, #2a1f10 50%, #0a0e1a 100%)" }}>
                  <img src="https://i.vimeocdn.com/video/2034952591-c2b53df80aaa16561cdadff839e197e40faf32d27c3e63bd953b65eecc0b967d-d_1280" alt="The Science Behind It All" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center shadow-2xl" style={{ background: "linear-gradient(135deg, #d39222 0%, #FFECBA 50%, #d39222 100%)" }}>
                      <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10 ml-1" fill="#1a1208"><path d="M8 5v14l11-7z" /></svg>
                    </motion.div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── STRESS REDUCTION ─── */}
      <section className="py-24 md:py-32 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">The Mechanisms</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">Why This Works: The Science</h2>
            <div className="h-px w-20 bg-primary mx-auto mt-6" />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Brainwave Entrainment",
                icon: "🧠",
                body: "The frequencies used in Star Magic healing create measurable changes in brainwave activity. EEG readings during sessions show a rapid shift from high-stress beta states (14–40Hz) into healing theta states (4–8Hz) — the same states associated with deep meditation, creativity, and accelerated learning.",
              },
              {
                title: "Nervous System Regulation",
                icon: "⚡",
                body: "Chronic stress keeps the nervous system locked in sympathetic (fight-or-flight) activation. The healing field created by Jerry's work consistently brings participants into parasympathetic dominance — the rest-and-repair state where all genuine healing takes place.",
              },
              {
                title: "Heart Rate Variability (HRV)",
                icon: "💗",
                body: "Participants in group healing environments show marked improvements in HRV — a key marker of nervous system health, emotional resilience, and overall wellbeing. Higher HRV is associated with better health outcomes across nearly every measured dimension.",
              },
              {
                title: "Group Coherence & Morphic Fields",
                icon: "🌐",
                body: "Research into group consciousness (including the Global Consciousness Project) shows that large groups of people focusing their attention together create measurable deviations in random number generators — evidence of a shared field that affects physical reality.",
              },
              {
                title: "Epigenetic Shifts",
                icon: "🔬",
                body: "Emerging epigenetic research shows that deep emotional states can create measurable changes in gene expression — switching healing genes on and stress genes off. Energy healing work creates the precise internal conditions for positive epigenetic shifts.",
              },
              {
                title: "Quantum Field Healing",
                icon: "✨",
                body: "Quantum mechanics shows us that at the subatomic level, observation itself changes reality. The focused, intentional awareness Jerry brings into the healing field works at this quantum level — shifting probabilities in the body's field toward health and wholeness.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="rounded-2xl p-7 flex flex-col gap-3"
                style={{ border: "1px solid rgba(211,146,34,0.25)", background: "rgba(211,146,34,0.04)" }}
              >
                <div className="text-3xl">{item.icon}</div>
                <h3 className="font-bold text-lg text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT WE'VE OBSERVED ─── */}
      <section className="py-24 px-4 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">Observations</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">What We've Observed Across Events</h2>
            <div className="h-px w-20 bg-primary mx-auto mt-8" />
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {[
              "Participants reporting immediate relief from chronic physical pain during or after the session",
              "People who couldn't walk unaided walking freely after a single session",
              "Measurable shifts in brainwave patterns within 30 minutes of the healing beginning",
              "Spontaneous emotional releases followed by profound peace and clarity",
              "Reports of improved vision, hearing, and physical sensation following events",
              "Shifts in relationship dynamics noticed by participants within days",
              "Financial and professional breakthroughs reported within weeks of attending",
              "Deep spiritual experiences including vivid visions, feelings of expansion, and unity consciousness",
              "Participants waking the morning after events with significantly higher energy levels",
              "Long-standing fears, phobias, and anxieties dissolving within a single session",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="flex items-start gap-3 p-4 rounded-xl"
                style={{ border: "1px solid rgba(211,146,34,0.2)", background: "rgba(211,146,34,0.04)" }}
              >
                <span style={{ color: "#d39222" }} className="shrink-0 mt-0.5">✦</span>
                <span className="text-muted-foreground text-sm leading-snug">{item}</span>
              </motion.div>
            ))}
          </div>

          {/* Soft disclaimer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl p-7"
            style={{ border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.03)" }}
          >
            <h3 className="text-base font-bold text-muted-foreground mb-3 uppercase tracking-widest">A Note on Expectations</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-3">
              The 222 Group Healing is a complementary healing experience. It is not a medical treatment, and we make no claim to diagnose, treat, or cure any physical or mental health condition.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-3">
              Every experience is unique. While the observations above are consistent and reported frequently, individual results will vary. What we can say with confidence is that people who arrive open and willing consistently report powerful shifts — often beyond what they expected.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              If you are under medical care, please continue your treatment plan and consult your healthcare provider. Star Magic Group Healing works most powerfully alongside, not instead of, professional medical care where needed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── SCIENCE CTA ─── */}
      <section className="py-20 px-4" style={{ background: "linear-gradient(135deg, #0a0e1a 0%, #1a1208 50%, #0a0e1a 100%)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="text-primary text-3xl mb-6">✦</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">Experience It Yourself</h2>
            <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              No amount of reading about it compares to being inside the room. Your nervous system, your brain, your body — they will tell you in real time what this does.
            </p>
            <Link href="/book">
              <button className="text-base font-bold px-12 py-4 rounded-lg tracking-wide transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97] cursor-pointer shadow-2xl" style={goldBtn}>
                Book Your Place — 5th or 6th September
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
