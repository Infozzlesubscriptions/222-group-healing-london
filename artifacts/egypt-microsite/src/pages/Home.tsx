import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import spiritualActivationImg from "@assets/image_1776160809528.png";
import card1Img from "@assets/Brain-Scan-1-scaled_1776168428464.webp";
import card4Img from "@assets/Elite_Be_Superhuman_11-scaled_1776168428466.webp";
import card5Img from "@assets/event-overview_1776168428467.webp";
import spiritualWarriorImg from "@assets/Spiritual-Warrior-Protocol-scaled_1776176043760.webp";
import guaranteeImg from "@assets/Elite_Be_Superhuman_11-scaled_1776177221392.webp";
import card6Img from "@assets/Superhuman-Blueprint-scaled_1776169771254.webp";
import card7Img from "@assets/Program-and-step-3-scaled_1776166006733.webp";
import card8Img from "@assets/Elite_Be_Superhuman_13-scaled_1776168740417.webp";
import mobileHeroBanner from "@assets/freepik_wide-cinematic-banner-cal_2792714935_1776273619553.jpeg";
import day2Img from "@assets/Program-and-step-3-scaled_1776166006733.webp";
import day3Img from "@assets/Program-and-step-4-scaled_1776166120113.webp";

const stats = [
  { value: "5 Hrs", label: "Radical Transformation" },
  { value: "85+", label: "Countries Reached" },
  { value: "500,000+", label: "Lives Healed" },
  { value: "2 Dates", label: "September 2026" },
];

const experienceItems = [
  { col: "left", items: [
    "Deep emotional release and immediate relief",
    "Physical healing — relief from pain, tension, and fatigue",
    "Removal of energetic blocks held for years",
    "Increased energy, vitality, and mental clarity",
    "Release of grief, trauma, anxiety, and fear",
    "A profound sense of peace and inner stillness",
  ]},
  { col: "right", items: [
    "Connection to your higher self and Source",
    "Awakening of intuition and spiritual gifts",
    "Transformation of deep-rooted limiting beliefs",
    "Amplified manifestation and abundance flow",
    "Improved relationships and communication",
    "A feeling of total lightness and liberation",
  ]},
];

const features = [
  {
    img: card4Img,
    title: "Compressing Time",
    body: "Years of personal healing can be compressed into a single 5-hour session. The group field amplifies every transmission Jerry delivers, accelerating shifts that would otherwise take years.",
  },
  {
    img: spiritualWarriorImg,
    title: "Safety",
    body: "Jerry and the Star Magic team hold a deeply safe, nurturing container throughout the entire session. You are free to feel, release, and expand — fully supported at every step.",
  },
  {
    img: card6Img,
    title: "Dissolve Old Programming",
    body: "Subconscious blocks, inherited trauma, and outdated belief systems are brought to the surface and released — not suppressed — creating real, lasting change at the root level.",
  },
  {
    img: card7Img,
    title: "The Power of the Group",
    body: "When many hearts and minds focus together, the field exponentially amplifies. The healing that happens in a group of 100+ people is far more powerful than anything possible alone.",
  },
  {
    img: card5Img,
    title: "Key to Health and Abundance",
    body: "As energetic blocks dissolve, the body naturally begins to heal. Reports of pain reduction, emotional freedom, improved health, and increased abundance flow consistently follow every event.",
  },
  {
    img: day3Img,
    title: "Planetary Gridwork",
    body: "Every 222 Group Healing is not just personal — it's planetary. Your healing ripples outward, contributing to the collective frequency shift happening across the globe right now.",
  },
];

const writtenTestimonials = [
  { name: "Barcelona Group Healing", loc: "Barcelona", quote: "This was the most powerful event I have ever experienced. Jerry and his SM team provided a safe container which allowed me to be open to the healing energy the group generated — which can only be described as magical. Long-unresolved issues are now resolved. I highly recommend." },
  { name: "Jill Johnston", loc: "Star Magic Member", quote: "The meditations are phenomenal. I was going through a very traumatic grief process with anxiety and restless nights. No other recordings helped with not only relaxation and sleep but also calm and peace during the day. The downloads are so powerful and my life has transformed." },
  { name: "Star Magic Review", loc: "Star Magic Member", quote: "Star Magic is the best healing modality I have ever experienced. Only one live group healing session opened my heart centre and healed my lower back pain. My intuition and psychic abilities have improved considerably. Deep gratitude to Jerry and the Star Magic team." },
  { name: "Amandalynn Family of Adams", loc: "Star Magic Member", quote: "I have been with Star Magic for 3 months and I am so very grateful. Jerry and the tribe have created space for everyone to experience and become the most powerful being they are meant to be — with love, integrity, and from the heart." },
  { name: "Deborah Bevard", loc: "Star Magic Member", quote: "Star Magic is beyond written description. Literally can't imagine it unless you've been there. Every single area of my life has improved since starting 1.5 years ago and the change has been extraordinary." },
  { name: "Lillie Thornton", loc: "Star Magic Member", quote: "My heart led me to Star Magic Healing. This has been the most incredible experience of my life. After a group healing my physical pain has gone. I followed up by joining Infinity and it has completely transformed my life." },
  { name: "Linda", loc: "Star Magic Member", quote: "Star Magic Healing gave me a fresh perspective on wellness. It's not about chasing quick fixes but about creating lasting change. The meditations are powerful, and the teachings have transformed how I approach my health and wellbeing." },
];

const faqItems = [
  { q: "What can I expect to experience in a 222 Group Healing?", a: "Participants commonly experience deep emotional release, physical sensations of healing (warmth, tingling, lightness), removal of long-held energetic blocks, clarity of mind, and a profound sense of peace. Every experience is unique and exactly right for you." },
  { q: "Who is this healing session for?", a: "The 222 Group Healing is for anyone who is ready to release what no longer serves them — emotional pain, physical discomfort, limiting beliefs, anxiety, grief, or simply a sense of being stuck. No prior experience is needed." },
  { q: "Is group healing safe?", a: "Absolutely. Jerry and the Star Magic team hold a deeply safe, professional, and nurturing container throughout the entire session. Hundreds of thousands of people across the world have experienced these healings safely." },
  { q: "Do I need any experience in meditation or energy work?", a: "No. Everything is guided. Whether you are completely new to this work or have years of experience, you will be held and supported every step of the way." },
  { q: "How long is the session?", a: "The 222 Group Healing runs for approximately 5 hours. This allows enough time to go deep, release fully, and integrate before you leave." },
  { q: "What is the refund policy?", a: "If you attend the event and feel by midway through that it is not right for you, speak to a team member and we will fully refund your ticket — no forms, no waiting, no questions asked." },
  { q: "How many people attend?", a: "Places are limited to maintain the quality and depth of the healing container. When the event sells out, no additional places will be offered. Book early to secure your seat." },
  { q: "What should I bring?", a: "Wear comfortable clothing, bring a blanket if you like to feel cosy, and a water bottle. Come with an open heart and a willingness to receive. Everything else will be provided." },
];

function VideoCard({ vimeoId, title, thumbnail }: { vimeoId: string; title: string; thumbnail?: string }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div
      className="relative rounded-2xl overflow-hidden shadow-xl cursor-pointer"
      style={{ border: "1px solid rgba(211,146,34,0.4)", aspectRatio: "16/9", background: "linear-gradient(135deg, #1a1208 0%, #2a1f10 50%, #0a0e1a 100%)" }}
      onClick={() => setPlaying(true)}
    >
      {playing ? (
        <iframe
          src={`https://player.vimeo.com/video/${vimeoId}?badge=0&autopause=0&quality_selector=1&player_id=0&app_id=58479&autoplay=1`}
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          className="absolute inset-0 w-full h-full"
          title={title}
          style={{ border: 0 }}
        />
      ) : (
        <>
          {thumbnail && <img src={thumbnail} alt={title} className="absolute inset-0 w-full h-full object-cover" />}
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-2xl"
              style={{ background: "linear-gradient(135deg, #d39222 0%, #FFECBA 50%, #d39222 100%)" }}
            >
              <svg viewBox="0 0 24 24" className="w-7 h-7 md:w-8 md:h-8 ml-1" fill="#1a1208">
                <path d="M8 5v14l11-7z" />
              </svg>
            </motion.div>
          </div>
          <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-white/80 text-[10px] font-medium uppercase tracking-wider">Video</span>
          </div>
        </>
      )}
    </div>
  );
}

function FAQAccordion({ item, isOpen, onToggle }: { item: { q: string; a: string }; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className={`border-b border-border/50 last:border-b-0 transition-colors duration-200 ${isOpen ? "bg-secondary/30" : ""}`}>
      <button className="w-full text-left flex items-start justify-between gap-4 py-5 px-6 group" onClick={onToggle}>
        <span className={`text-base font-semibold leading-snug transition-colors duration-200 ${isOpen ? "text-primary" : "text-foreground group-hover:text-primary"}`}>
          {item.q}
        </span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }} className="shrink-0 mt-0.5">
          <ChevronDown className={`w-5 h-5 transition-colors duration-200 ${isOpen ? "text-primary" : "text-muted-foreground"}`} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-muted-foreground leading-relaxed text-[15px]">{item.a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function WrittenCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const total = writtenTestimonials.length;

  const scrollTo = (idx: number) => {
    const next = Math.max(0, Math.min(idx, total - 1));
    setActiveIdx(next);
    scrollRef.current?.scrollTo({ left: next * 404, behavior: "smooth" });
  };

  return (
    <>
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onScroll={() => {
          if (scrollRef.current) {
            const idx = Math.round(scrollRef.current.scrollLeft / 404);
            setActiveIdx(idx);
          }
        }}
      >
        {writtenTestimonials.map((t, i) => (
          <div
            key={i}
            className="rounded-2xl border border-border/50 bg-card p-6 sm:p-7 flex flex-col shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 shrink-0"
            style={{ width: 380 }}
          >
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, s) => <span key={s} className="text-primary text-sm">★</span>)}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed italic flex-1 mb-5">"{t.quote}"</p>
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                style={{ background: "linear-gradient(135deg, rgba(184,151,92,0.3), rgba(243,214,150,0.15))", border: "1px solid rgba(184,151,92,0.35)", color: "#d39222" }}
              >
                {t.name.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.loc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-6 mt-8">
        <button
          onClick={() => scrollTo(activeIdx - 1)}
          disabled={activeIdx === 0}
          className="w-11 h-11 rounded-full border border-border/60 flex items-center justify-center text-foreground/60 hover:border-primary hover:text-primary transition-all duration-200 disabled:opacity-25 disabled:cursor-not-allowed"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
        <span className="text-muted-foreground text-xs tabular-nums">{activeIdx + 1} / {total}</span>
        <button
          onClick={() => scrollTo(activeIdx + 1)}
          disabled={activeIdx === total - 1}
          className="w-11 h-11 rounded-full border border-border/60 flex items-center justify-center text-foreground/60 hover:border-primary hover:text-primary transition-all duration-200 disabled:opacity-25 disabled:cursor-not-allowed"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
        </button>
      </div>
    </>
  );
}

const goldBtn = {
  background: "linear-gradient(90deg, #d39222 0%, #FFECBA 24.52%, #F3D696 51.93%, #FFECBA 76.93%, #d39222 100%)",
  color: "#1a1208",
  border: "none",
} as React.CSSProperties;

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Home() {
  const [jerryVideoPlaying, setJerryVideoPlaying] = useState(false);
  const [scienceVideoPlaying, setScienceVideoPlaying] = useState(false);
  const [caesarVideoPlaying, setCaesarVideoPlaying] = useState(false);
  const [openFaq, setOpenFaq] = useState<Record<number, boolean>>({});
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const toggleFaq = (idx: number) => setOpenFaq((prev) => ({ ...prev, [idx]: !prev[idx] }));

  return (
    <div className="min-h-screen bg-background w-full overflow-hidden">

      {/* ─── HERO ─── */}
      <section id="hero" className="relative overflow-hidden" style={{ backgroundColor: "#0a0e1a" }}>
        <motion.div className="absolute inset-0 z-0" style={{ y: y1, opacity }}>
          <img src={mobileHeroBanner} alt="222 Group Healing" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(10,14,26,0.85) 0%, rgba(10,14,26,0.5) 60%, rgba(10,14,26,0.2) 100%)" }} />
        </motion.div>

        <div className="relative z-10 px-6 sm:px-10 md:px-16 min-h-[90vh] flex items-center">
          <div className="max-w-7xl mx-auto w-full py-32">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}>
              <span className="text-sm sm:text-base font-sans tracking-[0.2em] sm:tracking-[0.3em] mb-4 block uppercase font-bold" style={{ color: "#d39222" }}>
                Jerry Sargeant Presents
              </span>
              <h1 className="text-[clamp(2rem,5.5vw,5rem)] font-sans text-white font-bold mb-4 drop-shadow-2xl leading-tight whitespace-nowrap">
                222 GROUP HEALING
              </h1>
              <p className="text-sm sm:text-base md:text-xl text-white/90 mb-4 max-w-xl leading-relaxed drop-shadow-md">
                A 5-hour live group healing experience that dissolves years of blocks, rewires your frequency, and unlocks a level of freedom you may never have felt before.
              </p>
              <p className="text-xs sm:text-sm md:text-base font-semibold tracking-wider uppercase mb-8 md:mb-10 text-white/80">
                London, UK · 5th &amp; 6th September 2026 · 5 Hours · Limited Places
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <button
                  onClick={() => scrollTo("pricing")}
                  className="w-full sm:w-auto text-base font-bold px-8 py-3 rounded-lg tracking-wide transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97] cursor-pointer shadow-lg"
                  style={goldBtn}
                >
                  Book Your Place Now
                </button>
                <button
                  onClick={() => scrollTo("science")}
                  className="w-full sm:w-auto text-base font-bold px-8 py-3 rounded-lg tracking-wide transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97] cursor-pointer"
                  style={{ background: "transparent", color: "#ffffff", border: "2px solid rgba(211,146,34,0.8)" }}
                >
                  See What Happens Inside
                </button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section className="py-10 sm:py-14 px-4 bg-secondary/30 border-y border-border/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center rounded-xl sm:rounded-2xl px-3 sm:px-4 py-4 sm:py-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-default"
                style={{ border: "1px solid rgba(211,146,34,0.3)" }}
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2" style={{ color: "#d39222" }}>{stat.value}</div>
                <div className="text-muted-foreground text-xs sm:text-sm font-medium tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── JERRY VIDEO ─── */}
      <section className="py-24 md:py-32 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">Hear It From Jerry</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-4">What Is a 222 Group Healing?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">What happens inside the room, why it works, and what's possible for you — direct from Jerry.</p>
            <div className="h-px w-20 bg-primary mx-auto mt-8" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 40, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.9 }} className="relative">
            <div className="absolute -inset-1 rounded-3xl blur-2xl opacity-30 pointer-events-none" style={{ background: "linear-gradient(135deg, #d39222, #F3D696, #d39222)" }} />
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
              style={{ border: "1px solid rgba(243,214,150,0.35)", aspectRatio: "16/9" }}
              onClick={() => setJerryVideoPlaying(true)}
            >
              {jerryVideoPlaying ? (
                <iframe
                  src="https://player.vimeo.com/video/1182092823?badge=0&autopause=0&quality_selector=1&player_id=0&app_id=58479&autoplay=1"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  className="absolute inset-0 w-full h-full"
                  title="What Is a 222 Group Healing"
                  style={{ border: 0 }}
                />
              ) : (
                <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #1a1208 0%, #2a1f10 50%, #0a0e1a 100%)" }}>
                  <img src="https://i.vimeocdn.com/video/2145700151-3ab93ca3bba871ba91a5f5dc4c2bbcbab8229fd73c448e654473c74f69cd71a9-d_1280" alt="What Is a 222 Group Healing" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center shadow-2xl"
                      style={{ background: "linear-gradient(135deg, #d39222 0%, #FFECBA 50%, #d39222 100%)" }}
                    >
                      <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10 ml-1" fill="#1a1208"><path d="M8 5v14l11-7z" /></svg>
                    </motion.div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── PART OF SOMETHING BIGGER ─── */}
      <section className="py-24 md:py-32 px-4 bg-secondary/20">
        <div className="max-w-5xl mx-auto">
          <motion.div className="text-center" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}>
            <div className="text-primary text-4xl mb-6">✦</div>
            <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-5">OHANA</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-8">Part of Something Bigger</h2>
            <div className="h-px w-20 bg-primary mx-auto mb-10" />
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-6 max-w-3xl mx-auto">
              When you attend a 222 Group Healing, you're not just healing yourself — you're stepping into a global family of awakened, heart-centred human beings who are committed to raising the frequency of this planet together.
            </p>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-6 max-w-3xl mx-auto">
              Star Magic is one of the world's fastest-growing healing and consciousness communities, spanning 85+ countries. The 222 Group Healing is the beating heart of that movement — a living, breathing, collective transmission of love, light, and transformation.
            </p>
            <p className="text-foreground font-semibold text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              When one of us heals, all of us heal. This is the power of OHANA — no one gets left behind.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── WHAT THE SCIENCE IS SHOWING US ─── */}
      <section id="science" className="py-24 md:py-32 px-4" style={{ backgroundColor: "#FDF6E9" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">Backed by Data</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-4">What the Science is Showing Us</h2>
            <div className="h-px w-20 bg-primary mx-auto mt-6" />
          </motion.div>

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

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
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
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center shadow-2xl"
                      style={{ background: "linear-gradient(135deg, #d39222 0%, #FFECBA 50%, #d39222 100%)" }}
                    >
                      <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10 ml-1" fill="#1a1208"><path d="M8 5v14l11-7z" /></svg>
                    </motion.div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 5D ABUNDANCE CODES ─── */}
      <section className="py-24 md:py-32 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7 }}>
              <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">Frequency Work</span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                5D Abundance Codes
              </h2>
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

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
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

      {/* ─── CTA BANNER ─── */}
      <section className="py-20 md:py-28 px-4" style={{ background: "linear-gradient(135deg, #1a1208 0%, #0a0e1a 50%, #1a1208 100%)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="text-primary text-3xl mb-6">✦</div>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
              Can you radically shift your entire life in 5 hours?
            </h2>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
              Thousands of people have walked out of this room feeling lighter, freer, and more alive than they have in years — often after carrying pain, trauma, or blocks for decades. The answer is yes. And it starts here.
            </p>
            <button
              onClick={() => scrollTo("pricing")}
              className="text-base font-bold px-10 py-4 rounded-lg tracking-wide transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97] cursor-pointer shadow-2xl"
              style={goldBtn}
            >
              Reserve Your Place — 5th or 6th September
            </button>
          </motion.div>
        </div>
      </section>

      {/* ─── THIS CHANGED EVERYTHING — VIDEO TESTIMONIALS ─── */}
      <section id="testimonials" className="py-24 md:py-32 px-4 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">Real People. Real Results.</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-4">This Changed Everything</h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto mt-4">
              These are not curated success stories. These are the real, lived experiences of people who showed up — and left transformed.
            </p>
            <div className="h-px w-20 bg-primary mx-auto mt-10" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {[
              { id: "1161766582", title: "Transformation Story 1", thumb: "https://i.vimeocdn.com/video/2117272081-d3a83b8ce1886924da8b879a25d7846c3aba8789322839650ee795ea7d36e563-d_640" },
              { id: "1161766314", title: "Transformation Story 2", thumb: "https://i.vimeocdn.com/video/2118346175-eebec97fd64505d46d4f3d3368fd775d7141a71f58cf756faad9a0d173d2686c-d_640" },
              { id: "1161766538", title: "Transformation Story 3", thumb: "https://i.vimeocdn.com/video/2117272103-83769dc126ddeb04de74cc07d79b12eacb4f3c026e0eedab35866eb5f0d6224f-d_640" },
              { id: "1161766020", title: "Transformation Story 4", thumb: "https://i.vimeocdn.com/video/2118346301-9c69ba699141743126f2f97894b86c98aae46b7d949e2d285f5e7e9a5b299398-d_640" },
              { id: "1161765970", title: "Transformation Story 5", thumb: "https://i.vimeocdn.com/video/2118346745-f63f1f7f20897c7b9cbe25e1d1f73dbbcaf535d611c6592bec16aeccecc9d73c-d_640" },
              { id: "1161766248", title: "Transformation Story 6", thumb: "https://i.vimeocdn.com/video/2118346583-33e6a1ef376834a2b22629ffcb489bbc32cee2e12579608a92d044f832c6112b-d_640" },
            ].map((video, i) => (
              <motion.div key={video.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <VideoCard vimeoId={video.id} title={video.title} thumbnail={video.thumb} />
              </motion.div>
            ))}
          </div>

          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">Hear It First Hand</span>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground leading-tight mb-4">One Person's Journey</h2>
            <div className="h-px w-20 bg-primary mx-auto mt-6" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 40, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.9 }} className="relative max-w-4xl mx-auto">
            <div className="absolute -inset-1 rounded-3xl blur-2xl opacity-25 pointer-events-none" style={{ background: "linear-gradient(135deg, #d39222, #F3D696, #d39222)" }} />
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
              style={{ border: "1px solid rgba(243,214,150,0.35)", aspectRatio: "16/9" }}
              onClick={() => setCaesarVideoPlaying(true)}
            >
              {caesarVideoPlaying ? (
                <iframe
                  src="https://player.vimeo.com/video/1156009467?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  className="absolute inset-0 w-full h-full"
                  title="Group Healing Testimonial"
                  style={{ border: 0 }}
                />
              ) : (
                <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #1a1208 0%, #2a1f10 50%, #0a0e1a 100%)" }}>
                  <img src="https://i.vimeocdn.com/video/2141347193-0b89a5c7091846589d4b5fa8b7c2a911df26a2a24cc532bb51d5fb4fd5f84939-d_1280" alt="Group Healing Testimonial" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center shadow-2xl"
                      style={{ background: "linear-gradient(135deg, #d39222 0%, #FFECBA 50%, #d39222 100%)" }}
                    >
                      <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10 ml-1" fill="#1a1208"><path d="M8 5v14l11-7z" /></svg>
                    </motion.div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          <div className="mt-24">
            <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="text-primary tracking-[0.3em] text-xs font-bold uppercase block mb-4">More Voices</span>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">What People Are Saying</h3>
            </motion.div>
            <WrittenCarousel />
          </div>
        </div>
      </section>

      {/* ─── RAPID TRANSFORMATION + FEATURES ─── */}
      <section className="py-24 md:py-32 px-4" style={{ backgroundColor: "#FDF6E9" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">Inside the Room</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-4">Rapid Transformation and Healing</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Six powerful forces come together inside a 222 Group Healing to create shifts that would be impossible to achieve on your own.
            </p>
            <div className="h-px w-20 bg-primary mx-auto mt-8" />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
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

      {/* ─── PRICING ─── */}
      <section id="pricing" className="py-16 sm:py-24 md:py-32 px-4" style={{ backgroundColor: "#F5F0E8" }}>
        <div className="max-w-3xl mx-auto">
          <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">Secure Your Place</span>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4" style={{ color: "#1a1208" }}>222 Group Healing — London</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">5th &amp; 6th September 2026 · Two separate dates, choose yours</p>
            <div className="flex items-center justify-center gap-1.5 mt-6">
              <span className="w-6 h-0.5 rounded-full" style={{ backgroundColor: "#d39222" }} />
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#d39222" }} />
              <span className="w-6 h-0.5 rounded-full" style={{ backgroundColor: "#d39222" }} />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                date: "5th September 2026",
                day: "Saturday",
                link: "https://buy.stripe.com/28E4gzbCU8pT8obd6L9Zm1a",
              },
              {
                date: "6th September 2026",
                day: "Sunday",
                link: "https://buy.stripe.com/eVq4gz0Yg5dHawj3wb9Zm1b",
              },
            ].map((session, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="flex flex-col px-7 py-9 rounded-3xl cursor-default"
                style={{ border: "1px solid #d39222", backgroundColor: "#EDE5D5" }}
              >
                <p className="text-xs font-bold tracking-[0.2em] uppercase mb-2 text-center" style={{ color: "#d39222" }}>{session.day}</p>
                <h3 className="text-lg font-bold mb-6 text-center" style={{ color: "#1a1208" }}>{session.date}</h3>
                <div className="text-center mb-8">
                  <div className="line-through text-sm mb-1" style={{ color: "#aaa" }}>£999</div>
                  <div className="text-5xl font-extrabold" style={{ color: "#d39222" }}>£888</div>
                  <div className="text-[10px] tracking-[0.2em] uppercase font-semibold mt-2" style={{ color: "#b8a080" }}>London · 5 Hours</div>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {[
                    "Full 5-hour live group healing with Jerry",
                    "5D Abundance Code transmissions",
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
                <a href={session.link} target="_blank" rel="noopener noreferrer">
                  <button className="w-full py-3.5 rounded-lg text-sm font-bold tracking-wide transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-md" style={goldBtn}>
                    Book {session.day}'s Session
                  </button>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT DO PEOPLE EXPERIENCE ─── */}
      <section className="py-24 md:py-32 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">Common Outcomes</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-4">What Do People Experience?</h2>
            <div className="h-px w-20 bg-primary mx-auto mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {experienceItems.map((col, ci) => (
              <motion.div
                key={ci}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: ci * 0.15 }}
                className="rounded-3xl p-8 border border-border/40 bg-card shadow-sm"
              >
                <div className="space-y-4">
                  {col.items.map((item, ii) => (
                    <div key={ii} className="flex items-start gap-3">
                      <div
                        className="w-7 h-7 rounded-lg shrink-0 flex items-center justify-center text-xs mt-0.5"
                        style={{ background: "linear-gradient(135deg, rgba(184,151,92,0.3), rgba(243,214,150,0.15))", border: "1px solid rgba(184,151,92,0.35)", color: "#d39222" }}
                      >
                        ✦
                      </div>
                      <p className="text-muted-foreground text-base leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[card5Img, card8Img, spiritualWarriorImg, guaranteeImg].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-2xl overflow-hidden shadow-md aspect-square"
                style={{ border: "1px solid rgba(211,146,34,0.25)" }}
              >
                <img src={img} alt="Group healing experience" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GUARANTEE ─── */}
      <section className="py-16 sm:py-24 px-4 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="rounded-3xl border border-primary/30 bg-card shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="px-8 py-10 md:px-14 md:py-12 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center shadow-xl" style={{ background: "linear-gradient(135deg, #d39222 0%, #FFECBA 50%, #d39222 100%)" }}>
                <span className="text-[#1a1208] font-bold text-[8px] uppercase tracking-widest leading-tight text-center px-1">100%<br />Money<br />Back</span>
              </div>
              <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">Zero Risk</span>
              <h2 className="text-2xl md:text-4xl font-bold text-foreground leading-tight mb-6">Come. Experience it. Then decide.</h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-4 max-w-2xl mx-auto">
                If by the midway point of the session this isn't everything you hoped for — tell a team member and we will refund you in full. Right there and then. No forms. No waiting. No questions asked.
              </p>
              <p className="text-foreground font-semibold text-sm italic mb-8">The only risk is not showing up.</p>
              <button
                onClick={() => scrollTo("pricing")}
                className="text-sm font-bold px-8 py-3 rounded-lg tracking-wide transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97] cursor-pointer"
                style={goldBtn}
              >
                Book Your Place — Risk Free
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section id="faq" className="py-24 md:py-32 px-4" style={{ backgroundColor: "#FDF6E9" }}>
        <div className="max-w-4xl mx-auto">
          <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">Got Questions?</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-4">222 Group Healing FAQs</h2>
            <div className="h-px w-20 bg-primary mx-auto mt-6" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-border/50 bg-card shadow-sm overflow-hidden"
          >
            {faqItems.map((item, i) => (
              <FAQAccordion
                key={i}
                item={item}
                isOpen={!!openFaq[i]}
                onToggle={() => toggleFaq(i)}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-24 md:py-32 px-4" style={{ background: "linear-gradient(135deg, #0a0e1a 0%, #1a1208 50%, #0a0e1a 100%)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="text-primary text-3xl mb-6">✦ ✦ ✦</div>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
              Your Healing Starts on 5th September
            </h2>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-4 max-w-2xl mx-auto">
              Two dates. London. A 5-hour experience that can shift what years of therapy, personal development, and self-work haven't been able to move.
            </p>
            <p className="text-white/50 text-base mb-10">
              Places are strictly limited. When the event is full, it's full.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <button
                onClick={() => scrollTo("pricing")}
                className="text-base font-bold px-10 py-4 rounded-lg tracking-wide transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97] cursor-pointer shadow-2xl"
                style={goldBtn}
              >
                Book Now — Choose Your Date
              </button>
              <a
                href="mailto:info@starmagichealing.com"
                className="text-base font-bold px-10 py-4 rounded-lg tracking-wide transition-all duration-200 hover:scale-[1.03] cursor-pointer"
                style={{ background: "transparent", color: "#ffffff", border: "2px solid rgba(211,146,34,0.8)" }}
              >
                Have a Question? Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
