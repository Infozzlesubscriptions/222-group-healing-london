import { motion } from "framer-motion";
import { Link } from "wouter";
import card4Img from "@assets/generated_images/feature_compressing_time.png";
import spiritualWarriorImg from "@assets/generated_images/feature_safety.png";
import card6Img from "@assets/generated_images/feature_dissolve_programming.png";
import card7Img from "@assets/generated_images/feature_group_power.png";
import card5Img from "@assets/generated_images/feature_health_abundance.png";
import day3Img from "@assets/generated_images/feature_planetary_gridwork.png";
import spiritualActivationImg from "@assets/jerry-sargeant-group-healing-workshop_1777276863181.png";
import healingPhoto2 from "@assets/image_1777277164144.png";
import healingPhoto3 from "@assets/image_1777277168745.png";
import { goldBtn } from "@/lib/shared";

const features = [
  { img: card4Img, title: "Compressing Time", body: "Years of personal healing can be compressed into a single 5-hour session. The group field amplifies every transmission Jerry delivers, accelerating shifts that would otherwise take years of solo practice." },
  { img: spiritualWarriorImg, title: "Safety & Support", body: "Jerry and the Star Magic team hold a deeply safe, nurturing container throughout the entire session. You are free to feel, release, and expand — fully supported at every step." },
  { img: card6Img, title: "Dissolve Old Programming", body: "Subconscious blocks, inherited trauma, and outdated belief systems are brought to the surface and released — not suppressed — creating real, lasting change at the root level." },
  { img: card7Img, title: "The Power of the Group", body: "When many hearts and minds focus together, the field exponentially amplifies. The healing that happens in a group of 100+ people is far more powerful than anything possible alone." },
  { img: card5Img, title: "Key to Health and Abundance", body: "As energetic blocks dissolve, the body naturally begins to heal. Reports of pain reduction, emotional freedom, improved health, and increased abundance flow consistently follow every event." },
  { img: day3Img, title: "Planetary Gridwork", body: "Every 222 Group Healing is not just personal — it's planetary. Your healing ripples outward, contributing to the collective frequency shift happening across the globe right now." },
];

const timeline = [
  { time: "11:00 AM", title: "Doors Open & Sacred Space Creation", body: "The room is energetically prepared. Jerry and the team open the field, ground the space, and welcome everyone into the healing container. You arrive and begin to settle into a state of presence." },
  { time: "11:30 AM", title: "Opening Transmission & Intention Setting", body: "Jerry opens the session with a powerful frequency transmission. The collective field is activated. You set your personal intention for healing and what you wish to release." },
  { time: "12:00 PM", title: "Deep Group Healing — Phase One", body: "The first round of deep healing begins. Using Star Magic techniques — including light language, breathwork, and quantum field work — Jerry works across the entire room simultaneously. Emotional releases, physical shifts, and profound moments of peace are common." },
  { time: "1:30 PM", title: "Integration Break", body: "A short break to drink water, breathe, and let the first wave of healing integrate. Team members are available to support anyone processing something strong." },
  { time: "2:00 PM", title: "5D Abundance Code Transmission", body: "A dedicated transmission of 5D Abundance Codes — energetic frequencies woven directly into the healing field that dissolve scarcity programming and activate your natural state of flow, wealth, and abundance." },
  { time: "3:00 PM", title: "Deep Group Healing — Phase Two", body: "The second and deepest phase of the healing. With the field now fully activated, this round goes to the core. Trauma held in the body, emotional pain from childhood, and deep limiting beliefs are released. Many experience profound physical sensations and emotional liberation." },
  { time: "5:00 PM", title: "Planetary Gridwork Activation", body: "The group collectively contributes to the planetary grid — sending healing frequencies out to the Earth and all of humanity. An extraordinary and powerful closing practice." },
  { time: "5:30 PM", title: "Closing Circle & Integration", body: "Jerry closes the session with a final transmission of love and light. Participants are invited to share, reflect, and begin the integration process. Support resources are shared." },
  { time: "6:00 PM", title: "Close", body: "The event closes. You leave changed." },
];

const forList = [
  "Anyone who has tried many healing modalities and still feels stuck",
  "People carrying emotional pain, grief, anxiety, fear, or trauma",
  "Those experiencing physical challenges looking for a complementary approach",
  "Anyone who wants to accelerate their spiritual growth exponentially",
  "People ready to release limiting beliefs around money, relationships, or self-worth",
  "Anyone who wants to experience something profoundly real and transformative",
  "Those called to contribute to the healing of the planet",
];

const notForList = [
  "People looking for a passive self-help talk or lecture",
  "Those not open to energy, frequency, or consciousness work",
  "Anyone who is not willing to feel and release emotional content",
  "People looking for a medical treatment or cure (this is a complementary experience)",
  "Anyone who is not ready to take responsibility for their own transformation",
];

export default function Experience() {
  return (
    <div className="min-h-screen bg-background w-full">

      {/* ─── PAGE HERO ─── */}
      <section className="pt-40 pb-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">The Experience</span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight mb-6">What Is a 222 Group Healing?</h1>
            <div className="h-px w-20 bg-primary mx-auto mb-8" />
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              A full breakdown of what happens, what to expect, and exactly why this works when nothing else has.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── WHAT IS IT ─── */}
      <section className="py-20 px-4" style={{ backgroundColor: "#FDF6E9" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">The Foundation</span>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6" style={{ color: "#1a1208" }}>What Happens Inside the Room</h2>
              <div className="h-px w-16 bg-primary mb-8" />
              <p className="text-base md:text-lg leading-relaxed mb-5" style={{ color: "#5a4a30" }}>
                The 222 Group Healing is not a workshop. It is not a seminar. It is a direct, live healing experience where Jerry Sargeant facilitates a quantum field of energy that washes through every person in the room simultaneously.
              </p>
              <p className="text-base md:text-lg leading-relaxed mb-5" style={{ color: "#5a4a30" }}>
                Using Star Magic — a multidimensional healing technology that combines light language, sacred geometry, quantum field work, and conscious breath — Jerry works at the level of your DNA, your nervous system, and your energetic body.
              </p>
              <p className="font-semibold text-base md:text-lg leading-relaxed" style={{ color: "#1a1208" }}>
                You don't have to do anything except show up and be open. Everything else happens through the field.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden aspect-[4/5] col-span-1" style={{ border: "1px solid rgba(211,146,34,0.3)" }}>
                  <img src={healingPhoto2} alt="Jerry healing" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col gap-4">
                  <div className="rounded-2xl overflow-hidden flex-1" style={{ border: "1px solid rgba(211,146,34,0.3)" }}>
                    <img src={healingPhoto3} alt="Group healing" className="w-full h-full object-cover" />
                  </div>
                  <div className="rounded-2xl overflow-hidden flex-1" style={{ border: "1px solid rgba(211,146,34,0.3)" }}>
                    <img src={spiritualActivationImg} alt="Star Magic healing" className="w-full h-full object-cover object-top" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── BREATHWORK / HEALING / FREQUENCY ─── */}
      <section className="py-24 md:py-32 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">The Methods</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">What Jerry Uses to Facilitate Healing</h2>
            <div className="h-px w-20 bg-primary mx-auto mt-6" />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "🌬️", title: "Conscious Breathwork", body: "Specific breathing patterns are used to open the body, calm the nervous system, and create space for deep energetic clearing. The breath is one of the most powerful healing tools available to us." },
              { icon: "✨", title: "Star Magic Frequency", body: "Jerry transmits a precise healing frequency that penetrates the quantum field — working at the level of your cells, your emotional body, and your energetic blueprint simultaneously." },
              { icon: "🔊", title: "Light Language", body: "A multidimensional language of light and sound that bypasses the conscious mind and speaks directly to the soul, the DNA, and the field. It activates deep remembering and release." },
              { icon: "📐", title: "Sacred Geometry", body: "Ancient geometric codes are projected into the field, creating sacred containers that amplify healing and open portals for transformation at the quantum level." },
              { icon: "🌊", title: "Group Coherence", body: "As the session deepens, the group enters a state of collective coherence — a shared field of resonance where healing transmits between participants, compounding and amplifying exponentially." },
              { icon: "💛", title: "Heart-Centred Presence", body: "Everything is held in a field of unconditional love. Jerry's own energetic presence — built over 20 years of deep spiritual practice — creates a field of safety that allows profound release." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="rounded-2xl p-6 flex flex-col gap-3"
                style={{ border: "1px solid rgba(211,146,34,0.25)", background: "rgba(211,146,34,0.04)" }}
              >
                <h3 className="font-bold text-base text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TIMELINE ─── */}
      <section className="py-24 md:py-32 px-4 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">The Day</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">What Happens During the Day</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">A rough guide to the flow of a 222 Group Healing. Exact timings may vary.</p>
            <div className="h-px w-20 bg-primary mx-auto mt-8" />
          </motion.div>
          <div className="relative">
            <div className="absolute left-[80px] top-0 bottom-0 w-px bg-primary/20 hidden md:block" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.06 }}
                  className="flex gap-6 items-start"
                >
                  <div className="shrink-0 w-20 text-right hidden md:block">
                    <span className="text-xs font-bold tracking-wide" style={{ color: "#d39222" }}>{item.time}</span>
                  </div>
                  <div className="hidden md:flex shrink-0 items-center justify-center w-6 h-6 rounded-full mt-0.5 relative z-10" style={{ background: "linear-gradient(135deg, #d39222, #FFECBA)", border: "2px solid rgba(211,146,34,0.5)" }}>
                    <div className="w-2 h-2 rounded-full bg-background" />
                  </div>
                  <div className="rounded-2xl p-5 flex-1" style={{ border: "1px solid rgba(211,146,34,0.2)", background: "rgba(211,146,34,0.04)" }}>
                    <div className="md:hidden text-xs font-bold mb-1" style={{ color: "#d39222" }}>{item.time}</div>
                    <h3 className="font-bold text-base text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5D ABUNDANCE CODES ─── */}
      <section className="py-24 md:py-32 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">Frequency Work</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-6">5D Abundance Codes</h2>
              <div className="h-px w-16 bg-primary mb-8" />
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-5">
                Woven throughout every 222 Group Healing are what Jerry calls 5D Abundance Codes — energetic transmissions embedded within the healing field that work at the quantum level to dissolve scarcity programming and activate your natural state of abundance.
              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-5">
                These codes work across all dimensions of your life — health, relationships, finances, purpose, and spiritual connection. They don't just shift how you feel, they shift what you are able to receive.
              </p>
              <p className="text-foreground font-semibold text-base md:text-lg leading-relaxed mb-8">
                Participants consistently report unexpected financial windfalls, relationship breakthroughs, health improvements, and a feeling of doors opening in the days and weeks following the event.
              </p>
              <div className="space-y-3">
                {[
                  "Dissolve deep-rooted scarcity and lack programming",
                  "Activate your natural frequency of abundance and flow",
                  "Shift your electromagnetic field to attract greater opportunities",
                  "Open your heart to receive at a level you haven't accessed before",
                  "Experience the compounding effect of group healing amplification",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span style={{ color: "#d39222" }} className="text-sm mt-1 shrink-0">✦</span>
                    <span className="text-muted-foreground text-sm leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
              <div className="absolute -inset-1 rounded-3xl blur-xl opacity-20 pointer-events-none" style={{ background: "linear-gradient(135deg, #d39222, #F3D696, #d39222)" }} />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
                <img src={spiritualActivationImg} alt="5D Abundance codes healing activation" className="w-full h-full object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-bold text-lg drop-shadow-lg">5th–6th September 2026</p>
                  <p className="text-white/70 text-sm">London, UK · 5 Hours · Limited Places</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── FEATURES GRID ─── */}
      <section className="py-24 md:py-32 px-4" style={{ backgroundColor: "#FDF6E9" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">Inside the Room</span>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4" style={{ color: "#1a1208" }}>Six Forces That Create Rapid Transformation</h2>
            <div className="h-px w-20 bg-primary mx-auto mt-8" />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex flex-col rounded-3xl border border-primary/20 bg-card shadow-md hover:shadow-xl hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="w-full aspect-[16/9] overflow-hidden">
                  <img src={feature.img} alt={feature.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-3 leading-snug">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHO IT'S FOR / NOT FOR ─── */}
      <section className="py-24 md:py-32 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">Clarity</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">Is This Right For You?</h2>
            <div className="h-px w-20 bg-primary mx-auto mt-6" />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="rounded-2xl p-7 h-full" style={{ border: "1px solid rgba(211,146,34,0.4)", background: "rgba(211,146,34,0.05)" }}>
                <h3 className="text-xl font-bold mb-6" style={{ color: "#d39222" }}>✓ This IS for you if...</h3>
                <ul className="space-y-4">
                  {forList.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm leading-snug text-muted-foreground">
                      <span className="text-primary mt-0.5 shrink-0">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
              <div className="rounded-2xl p-7 h-full" style={{ border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.03)" }}>
                <h3 className="text-xl font-bold mb-6 text-foreground/60">✗ This is NOT for you if...</h3>
                <ul className="space-y-4">
                  {notForList.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm leading-snug text-muted-foreground">
                      <span className="text-muted-foreground mt-0.5 shrink-0">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground text-xs leading-relaxed mt-6 pt-4 border-t border-border/30">
                  We say this with love — this experience asks something of you. Those who come open, willing, and ready are the ones who transform.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── EXPERIENCE CTA ─── */}
      <section className="py-20 px-4" style={{ background: "linear-gradient(135deg, #0a0e1a 0%, #1a1208 50%, #0a0e1a 100%)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="text-primary text-3xl mb-6">✦</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">Ready to Experience This?</h2>
            <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Reading about it is one thing. Being inside the room is another entirely. Come and find out for yourself.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Link href="/stories">
                <button className="text-base font-bold px-10 py-4 rounded-lg tracking-wide transition-all duration-200 hover:scale-[1.03] cursor-pointer" style={{ background: "transparent", color: "#ffffff", border: "2px solid rgba(211,146,34,0.8)" }}>
                  See Real Stories
                </button>
              </Link>
              <Link href="/book">
                <button className="text-base font-bold px-10 py-4 rounded-lg tracking-wide transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97] cursor-pointer shadow-2xl" style={goldBtn}>
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
