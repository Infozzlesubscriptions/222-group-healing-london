import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import groupPyramidsImage from "@assets/freepik_wide-cinematic-banner-of-_2791068153_1776265285999.jpeg";
import spiritualActivationImg from "@assets/image_1776160809528.png";
import card1Img from "@assets/Brain-Scan-1-scaled_1776168428464.webp";
import card3Img from "@assets/Program-and-step-5-scaled_1776169771253.webp";
import card4Img from "@assets/Elite_Be_Superhuman_11-scaled_1776168428466.webp";
import card5Img from "@assets/event-overview_1776168428467.webp";
import spiritualWarriorImg from "@assets/Spiritual-Warrior-Protocol-scaled_1776176043760.webp";
import whoThisIsForImg from "@assets/generated_images/who-this-is-for-illustration.png";
import guaranteeImg from "@assets/Elite_Be_Superhuman_11-scaled_1776177221392.webp";
import card6Img from "@assets/Superhuman-Blueprint-scaled_1776169771254.webp";
import card7Img from "@assets/Program-and-step-3-scaled_1776166006733.webp";
import card8Img from "@assets/Elite_Be_Superhuman_13-scaled_1776168740417.webp";
import jerrySargeantImg from "@assets/jerry-sargeant-RqwmxHoJ_1776320363143.jpeg";
import mobileHeroBanner from "@assets/freepik_wide-cinematic-banner-cal_2792714935_1776273619553.jpeg";
import day1Img from "@assets/Program-and-step-2-scaled_1776165893158.webp";
import day2Img from "@assets/Program-and-step-3-scaled_1776166006733.webp";
import day3Img from "@assets/Program-and-step-4-scaled_1776166120113.webp";

const stats = [
  { value: "3", label: "Transformative Days" },
  { value: "85+", label: "Countries Reached" },
  { value: "500,000+", label: "Lives Changed" },
  { value: "100%", label: "Practical. Real. Results." },
];

const walkAwayItems = [
  { img: card1Img, title: "Reset Nervous System", text: "A completely reset nervous system, no longer running on stress and survival" },
  { img: spiritualWarriorImg, title: "Unshakeable Clarity", text: "Unshakeable clarity on who you are and what you're here to do" },
  { img: card3Img, title: "Coherent Energy", text: "A coherent signal — no more leaking energy, no more running on empty" },
  { img: card4Img, title: "Sustained Expansion", text: "The capacity to hold and sustain real expansion in every area of life" },
  { img: card5Img, title: "Elevated Relationships", text: "Relationships that reflect your new level back to you" },
  { img: card6Img, title: "Upgraded Body", text: "A body that's been cleared, activated, and upgraded from the inside out" },
  { img: card7Img, title: "Lifelong Tools", text: "Tools and practices you'll use every single day for the rest of your life" },
  { img: card8Img, title: "Your Tribe", text: "A community of people operating at the same frequency as you" },
];

const forYouItems = [
  "You know there's more available to you but can't seem to access it",
  "You're high-functioning but quietly exhausted and running on fumes",
  "You've done the personal development work but something still feels stuck",
  "Your health, relationships, or business aren't reflecting who you know yourself to be",
  "You're ready to stop managing your life and start leading it",
  "You want practical tools that work — not just inspiration that fades by Monday",
];

const days = [
  {
    number: "01",
    img: day1Img,
    imgAlt: "Quantum meditation and frequency activation session",
    title: "Rewire Your Foundation",
    summary: "Day one breaks you down and rebuilds you from within. You'll learn to trust your inner guidance, take full ownership of your life, and become mentally unshakeable.",
    detail: "Through powerful practices, you reset your nervous system, rewire stress patterns, and step into calm, focused power.",
    outcome: "By the end of Day 1: You are grounded, clear, and unshakeable.",
    topics: ["Quantum meditation & frequency activation", "Transformational breathwork (Star Magic)", "The 4 Pillars of Impact", "Recode your biological system", "Krystal Spiral vs Fibonacci", "Build your new internal operating system"],
  },
  {
    number: "02",
    img: day2Img,
    imgAlt: "Body upgrade and energy activation",
    title: "Build Your Superhuman State",
    summary: "Day two upgrades your body and expands your capacity. You'll learn how to align your lifestyle, energy, and performance so your system works for you — not against you.",
    detail: "Through deep activation practices, you elevate your physical, mental, and emotional baseline, operating from clarity, strength, and higher awareness.",
    outcome: "By the end of Day 2: You are stronger, sharper, and in control.",
    topics: ["Breathwork & meditation activation", "Discipline, ownership & warrior mindset", "Upgrade energetic hygiene", "Train resilience & emotional control", "Daily optimization: nutrition, movement, recovery", "Expanded awareness"],
  },
  {
    number: "03",
    img: day3Img,
    imgAlt: "Full system upgrade and transformation",
    title: "Lock In Your Transformation",
    summary: "Day three seals the transformation. You integrate everything at a deep level — mentally, physically, and energetically.",
    detail: "Through powerful alignment and activation practices, you clear what's blocking you and fully step into your highest state.",
    outcome: "By the end of Day 3: You are fully upgraded, aligned, and ready.",
    topics: ["Qigong, movement & integration", "Fear vs Love mastery", "Sexual energy alignment", "Heart & higher energy activation", "Reality optimization (Star Magic method)", "Personal daily protocol"],
  },
];

const writtenTestimonials = [
  { name: "Barcelona Group Healing", loc: "Barcelona", quote: "This was the most powerful two days I have ever experienced. Jerry was the facilitator along with his SM team provided a safe container which allowed me to be open to the healing energy that the group generated which can only be described as magical. I highly recommend doing a star magic group healing session especially if you have been working on long unresolved issues as I have and now they are resolved. Thanks Jerry" },
  { name: "Jill Johnston", loc: "Star Magic Member", quote: "The meditations are phenomenal. I was going through a very traumatic grief process with anxiety and restless nights. Sedatives aren't a long term solution! No other recordings helped with not only relaxation and sleep but also calm and peaceful at daytime. The downloads are so powerful and I progressed to a lifestyle of knowing what my mind and body needs to heal." },
  { name: "Star Magic Review", loc: "Star Magic Member", quote: "Star Magic is the best healing modality I experienced. I tried so many other modalities, but could not feel from my heart centre due to childhood traumas. Only one live group healing session has opened my heart centre and healed my lower back pain. My intuition and psyche abilities have improved considerably. Deep gratitude to Jerry and the Star magic team." },
  { name: "Amandalynn Family of Adams", loc: "Star Magic Member", quote: "I have been with Star Magic for 3 months now and I am so very grateful to be a part of this amazing tribe. Jerry and the tribe have created space for everyone to experience and become the most powerful being that they are meant to be, with love, integrity and from the heart. I absolutely love Star Magic and everything it embodies." },
  { name: "Deborah Bevard", loc: "Star Magic Member", quote: "Star Magic is beyond written description. Literally can't imagine it unless you've been there. Every single area of my life has improved since starting 1.5 years ago and the change has been extraordinary." },
  { name: "Lillie Thornton", loc: "Star Magic Member", quote: "My heart led me to StarMagic Healing. This has been the most incredible experience of my life. After a group healing my physical pain has gone. I followed up with joining Infinity and it has completely transformed my life." },
  { name: "Linda", loc: "Star Magic Member", quote: "Star Magic Healing gave me a fresh perspective on wellness. It's not about chasing quick fixes but about creating lasting change. The meditations are powerful, and the teachings have transformed how I approach my health and wellbeing." },
];

const faqCategories = [
  {
    label: "General",
    items: [
      { q: "Who is this event for?", a: "This experience is for individuals ready to break limitations, elevate their mindset, and step into higher levels of performance, clarity, and purpose." },
      { q: "What makes this different from other workshops or seminars?", a: "This is not theory-based learning — it's a fully immersive, hands-on transformation experience where real change happens in real time." },
      { q: "What kind of results can I expect?", a: "Participants often experience greater clarity, emotional balance, confidence, improved health, and a stronger sense of purpose." },
    ],
  },
  {
    label: "Experience",
    items: [
      { q: "Do I need prior experience in meditation or breathwork?", a: "No. Everything is guided step-by-step, making it accessible for both beginners and experienced individuals." },
      { q: "Will there be physical activities involved?", a: "Yes. The event includes breathwork, movement, and energy practices, all adaptable to your comfort level." },
      { q: "Can I attend if I'm going through a difficult phase in life?", a: "Absolutely. Many participants join during challenging times and find the experience deeply supportive and transformative." },
    ],
  },
  {
    label: "Booking",
    items: [
      { q: "Is there a payment plan?", a: "Yes. Options are available at checkout. We want this experience to be accessible and we'll do everything we can to make it work for you." },
      { q: "What if I can't make it after booking?", a: "Contact our team and we'll do everything we can to accommodate you." },
      { q: "What is the money-back guarantee?", a: "If you attend day one and feel it isn't right for you, simply speak to a team member before lunch and you'll receive a full refund on the spot. No forms. No waiting. No questions asked." },
    ],
  },
  {
    label: "Event",
    items: [
      { q: "Where is the event held?", a: "Elite Be Superhuman takes place in London, UK in May 2026. Full venue details are sent to all confirmed attendees." },
      { q: "How many people will be in the room?", a: "Places are strictly limited to ensure every person gets the full experience. Jerry works in an intentionally small, contained group. When the room is full, that's it." },
      { q: "What should I bring to the event?", a: "Comfortable clothing, a water bottle, a journal, and an open mind. Any additional instructions will be shared before the event." },
    ],
  },
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
  const [caesarVideoPlaying, setCaesarVideoPlaying] = useState(false);
  const [openFaq, setOpenFaq] = useState<Record<string, boolean>>({});
  const [activeFaqTab, setActiveFaqTab] = useState(-1);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const toggleFaq = (key: string) => setOpenFaq((prev) => ({ ...prev, [key]: !prev[key] }));

  const visibleFaqs = activeFaqTab === -1 ? faqCategories : [faqCategories[activeFaqTab]];

  return (
    <div className="min-h-screen bg-background w-full overflow-hidden">

      {/* ─── HERO ─── */}
      <section id="hero" className="relative overflow-hidden" style={{ backgroundColor: "#0a0e1a" }}>
        <motion.div className="absolute inset-0 z-0" style={{ y: y1, opacity }}>
          <img src={mobileHeroBanner} alt="Elite Be Superhuman event" className="w-full h-full object-cover object-bottom block md:hidden" />
          <img src={groupPyramidsImage} alt="Elite Be Superhuman event" className="hidden md:block w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent md:hidden" />
          <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </motion.div>

        <div className="relative z-10 text-center md:text-left px-6 sm:px-10 md:px-16 md:max-w-3xl min-h-[85vh] flex items-center pb-16 pt-20 md:pb-0 md:pt-0 md:py-32 md:min-h-[90vh]">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}>
            <span className="text-sm sm:text-base md:text-lg font-sans tracking-[0.2em] sm:tracking-[0.35em] mb-4 block uppercase text-white font-bold">
              Jerry Sargeant Presents
            </span>
            <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-sans text-white font-bold mb-4 drop-shadow-2xl leading-tight">
              ELITE BE<br />SUPERHUMAN
            </h1>
            <p className="text-sm sm:text-base md:text-xl text-white/90 mb-4 max-w-xl md:max-w-xl mx-auto md:mx-0 leading-relaxed drop-shadow-md">
              A 3-day live experience that rewires your mind, rebuilds your body, and unlocks the version of you the world has been waiting for.
            </p>
            <p className="text-xs sm:text-sm md:text-base font-semibold tracking-wider sm:tracking-widest uppercase mb-8 md:mb-10 text-white">
              London, UK · May 15–17, 2026 · 3 Days · Limited Places
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start justify-center md:justify-start">
              <button
                onClick={() => scrollTo("pricing")}
                className="w-full sm:w-auto text-base font-bold px-8 py-3 rounded-lg tracking-wide transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97] cursor-pointer shadow-lg"
                style={goldBtn}
              >
                Reserve Your Seat Now
              </button>
              <button
                onClick={() => scrollTo("programme")}
                className="w-full sm:w-auto text-base font-bold px-8 py-3 rounded-lg tracking-wide transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97] cursor-pointer"
                style={{ background: "transparent", color: "#ffffff", border: "2px solid rgba(211,146,34,0.8)" }}
              >
                See What's Inside
              </button>
            </div>
          </motion.div>
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

      {/* ─── PROMISE / INTRO ─── */}
      <section className="py-24 md:py-32 px-4 bg-background">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}>
            <div className="text-primary text-4xl mb-8">✦</div>
            <p className="text-xl md:text-2xl text-foreground italic leading-relaxed mb-10 font-semibold">
              Most people live far below their true potential — this three-day experience changes that for good.
            </p>
            <div className="h-px w-20 bg-border mx-auto mb-10" />
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-6">
              Elite Be Superhuman is a fully immersive, hands-on event focused on real transformation. No theory or passive learning — just powerful practices combining breathwork, energy medicine, performance psychology, and consciousness work in a structured journey.
            </p>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-6">
              You won't leave with temporary motivation — you'll leave transformed, ready to step into a higher, more abundant version of your life.
            </p>
            <p className="text-foreground font-semibold text-base md:text-lg leading-relaxed">
              With 20+ years of experience across 85+ countries, Jerry Sargeant has helped people break limitations, rewire their inner world, and unlock new levels of clarity, health, and success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── JERRY VIDEO ─── */}
      <section className="pb-24 md:pb-32 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">What This Event Is</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-4">Hear It From Jerry</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto font-light">What this event is, what happens, what's possible — direct from Jerry.</p>
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
                  title="Hear It From Jerry"
                  style={{ border: 0 }}
                />
              ) : (
                <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #1a1208 0%, #2a1f10 50%, #0a0e1a 100%)" }}>
                  <img src="https://i.vimeocdn.com/video/2145700151-3ab93ca3bba871ba91a5f5dc4c2bbcbab8229fd73c448e654473c74f69cd71a9-d_1280" alt="Hear It From Jerry" className="absolute inset-0 w-full h-full object-cover" />
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

      {/* ─── THREE PILLARS ─── */}
      <section className="py-24 md:py-32 px-4 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">Why This Works</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-4">Built on Three Unbreakable Principles</h2>
            <div className="h-px w-20 bg-primary mx-auto mt-6" />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: spiritualWarriorImg, alt: "Full immersion event experience", heading: "Full Immersion", subtitle: "No theory. Only transformation.", body: "Every session is hands-on. Every practice is designed to create a real, felt shift — not just understanding." },
              { img: card4Img, alt: "Lasting personal change", heading: "Lasting Change", subtitle: "You leave a different person.", body: "Not motivated for a week. The change is structural — wired into your nervous system, your energy, your way of being." },
              { img: card6Img, alt: "Proven global results", heading: "Proven Results", subtitle: "500,000+ lives. 85+ countries.", body: "Jerry has spent two decades delivering these results globally. This event is the concentrated best of everything he does." },
            ].map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="flex flex-col rounded-3xl border border-primary/20 bg-card shadow-md hover:shadow-lg hover:border-primary/40 transition-all duration-300 overflow-hidden"
              >
                <div className="w-full aspect-[4/3] overflow-hidden">
                  <img src={pillar.img} alt={pillar.alt} className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105" />
                </div>
                <div className="p-8 text-center flex flex-col flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 leading-snug">{pillar.heading}</h3>
                  <p className="text-base font-semibold mb-4 italic" style={{ color: "#d39222" }}>{pillar.subtitle}</p>
                  <p className="text-muted-foreground text-base leading-relaxed">{pillar.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── THE CORE OF EVERYTHING ─── */}
      <section className="py-24 md:py-32 px-4" style={{ backgroundColor: "#FDF6E9" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7 }}>
              <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">The Core of Everything</span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                Stop Leaking Energy.<br className="hidden md:block" />Start Operating from Wholeness.
              </h2>
              <div className="h-px w-16 bg-primary mb-8" />
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-5">
                Most people are unknowingly leaking energy every single day. Through stress. Through unresolved emotion. Through relationships that drain rather than fuel. Through a nervous system that's stuck in survival mode.
              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-5">
                The result? A signal that's scattered. A life that feels like it's constantly running uphill.
              </p>
              <p className="text-foreground font-semibold text-base md:text-lg leading-relaxed mb-8">
                Elite Be Superhuman changes that at the root. Over three days, every practice, every session, every experience is built around one outcome: <span style={{ color: "#d39222" }} className="italic">you leave operating from a state of complete wholeness.</span>
              </p>
              <div className="space-y-3 mb-8">
                {["Your relationships deepen and align", "Your health responds and regenerates", "Your business and finances move with less resistance", "Your decisions come from clarity, not fear", "You hold the capacity to sustain that expansion — not just feel it for a week"].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span style={{ color: "#d39222" }} className="text-sm mt-1 shrink-0">✦</span>
                    <span className="text-muted-foreground text-sm leading-snug">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-foreground/60 text-sm leading-relaxed italic">
                This isn't about getting a temporary high from a live event. It's about upgrading the frequency you carry so that wholeness becomes your new normal.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
              <div className="absolute -inset-1 rounded-3xl blur-xl opacity-20 pointer-events-none" style={{ background: "linear-gradient(135deg, #d39222, #F3D696, #d39222)" }} />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
                <img src={spiritualActivationImg} alt="Energy work" className="w-full h-full object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── 3-DAY PROGRAMME ─── */}
      <section id="programme" className="py-24 md:py-32 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">Elite Be Superhuman</span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Three Days.<br />One Complete Transformation.
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
              Every practice, every session, every experience over these three days is built around one outcome: you leave operating from a state of complete wholeness.
            </p>
            <div className="h-px w-20 bg-primary mx-auto mt-10" />
          </motion.div>

          <div className="space-y-10">
            {days.map((day, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="rounded-3xl border border-primary/20 bg-card shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2"
              >
                <div className={`relative w-full min-h-[280px] lg:min-h-[460px] overflow-hidden ${i % 2 !== 0 ? "lg:order-2" : ""}`}>
                  <img src={day.img} alt={day.imgAlt} className="absolute inset-0 w-full h-full object-cover object-center" />
                  <div className="absolute top-6 left-6">
                    <div className="w-16 h-16 rounded-2xl flex flex-col items-center justify-center shadow-lg" style={{ background: "linear-gradient(135deg, #d39222 0%, #FFECBA 50%, #d39222 100%)", color: "#1a1208" }}>
                      <span className="text-[10px] font-bold uppercase tracking-widest leading-none">Day</span>
                      <span className="text-2xl font-bold leading-none mt-0.5">{parseInt(day.number)}</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 lg:block hidden" />
                </div>
                <div className={`p-8 md:p-10 flex flex-col justify-center ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                  <p className="text-primary text-xs font-bold uppercase tracking-[0.35em] mb-3">Day {parseInt(day.number)}</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-snug mb-6">{day.title}</h3>
                  <div className="h-px w-12 mb-6" style={{ background: "#d39222" }} />
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-3">{day.summary}</p>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4">{day.detail}</p>
                  <p className="text-foreground font-semibold text-sm leading-relaxed italic mb-6">"{day.outcome}"</p>
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">What's Covered</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {day.topics.map((topic, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <span style={{ color: "#d39222" }} className="text-xs shrink-0">✦</span>
                        <span className="text-foreground/80 text-sm leading-snug">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="text-center mt-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <button
              onClick={() => scrollTo("pricing")}
              className="text-base font-bold px-10 py-3 rounded-lg tracking-wide transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97] cursor-pointer shadow-lg"
              style={goldBtn}
            >
              Secure Your Seat Now
            </button>
          </motion.div>
        </div>
      </section>

      {/* ─── WHAT YOU'LL WALK AWAY WITH ─── */}
      <section className="py-24 md:py-32 px-4 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-8" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">The Real Outcome</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-4">
              This Isn't a List of Things You'll Learn.<br className="hidden md:block" /> This Is Who You'll Be.
            </h2>
            <div className="h-px w-20 bg-primary mx-auto mt-6 mb-8" />
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Most events leave you inspired for a week. Elite Be Superhuman leaves you fundamentally different. Every shift you experience in that room is permanent — because it happens at the level of who you actually are, not just how you think or behave.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {walkAwayItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="rounded-2xl border border-primary/15 bg-card overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="h-44 overflow-hidden shrink-0">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-sm uppercase tracking-[0.2em] mb-2" style={{ color: "#d39222" }}>✦ {item.title}</h3>
                  <p className="text-foreground/75 text-sm leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHO THIS IS FOR ─── */}
      <section id="about" className="py-16 sm:py-24 md:py-32 px-4" style={{ backgroundColor: "#FDF6E9" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7 }}>
              <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">Is This For You?</span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground leading-tight mb-8">This Is for You If:</h2>
              <div className="space-y-4">
                {forYouItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div
                      className="w-8 h-8 rounded-lg shrink-0 flex items-center justify-center text-sm mt-0.5"
                      style={{ background: "linear-gradient(135deg, rgba(184,151,92,0.3), rgba(243,214,150,0.15))", border: "1px solid rgba(184,151,92,0.35)", color: "#d39222" }}
                    >
                      ✦
                    </div>
                    <p className="text-muted-foreground text-base leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10 p-6 rounded-2xl border border-border/50 bg-secondary/40">
                <p className="text-foreground/70 text-sm leading-relaxed italic">
                  This is not for you if you're looking for a passive weekend. This is an active, full-participation experience. You get out exactly what you put in.
                </p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
              <div className="absolute -inset-1 rounded-3xl blur-xl opacity-20 pointer-events-none" style={{ background: "linear-gradient(135deg, #d39222, #F3D696, #d39222)" }} />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
                <img src={whoThisIsForImg} alt="Personal transformation energy illustration" className="w-full h-full object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-bold text-lg leading-snug drop-shadow-lg">May 15–17, 2026 · London, UK</p>
                  <p className="text-white/70 text-sm">3 Days · 9am–6pm · Limited Places</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── ABOUT JERRY ─── */}
      <section className="py-16 sm:py-24 md:py-32 px-4" style={{ backgroundColor: "#FDF6E9" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7 }} className="relative">
              <div className="absolute -inset-1 rounded-3xl blur-xl opacity-20 pointer-events-none" style={{ background: "linear-gradient(135deg, #d39222, #F3D696, #d39222)" }} />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img src={jerrySargeantImg} alt="Jerry Sargeant" className="w-full h-auto block" />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, delay: 0.1 }}>
              <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">Your Guide</span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6">Jerry Sargeant</h2>
              <div className="h-px w-16 bg-primary mb-8" />
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-5">
                Jerry Sargeant is a global healing facilitator, author, and consciousness teacher — and the founder of Star Magic, one of the world's fastest-growing healing and human performance communities.
              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-5">
                Over the past two decades Jerry has worked with hundreds of thousands of people across more than 85 countries — from CEOs and elite athletes to people who had been told by doctors there was nothing more that could be done.
              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
                His approach is direct, practical, and it works at a level most personal development never reaches — the deep root of why people stay stuck, get sick, and self-sabotage — and he dismantles it, live, in the room.
              </p>
              <p className="text-foreground font-semibold text-base leading-relaxed">
                Elite Be Superhuman is the most powerful live experience he delivers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── EXPERT ENDORSEMENTS ─── */}
      <section className="py-24 md:py-32 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">Peer Endorsements</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-4">What the Experts Say</h2>
            <div className="h-px w-20 bg-primary mx-auto mt-6" />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Dr. Merlin", id: "1161753909", thumbnail: "https://i.vimeocdn.com/video/2117255887-e8f0ee91b1183ee41f4960225142a4ac0a5464ecbfc081d845f6226bd0c73dc6-d_640" },
              { name: "Dr. Maher", id: "1161753427", thumbnail: "https://i.vimeocdn.com/video/2146327509-1c1528a5b386a647f534718a5ffa66336d5d3b20bb9d0ce0821be18ecc525fe4-d_640" },
              { name: "Dr. Angela", id: "1161753289", thumbnail: "https://i.vimeocdn.com/video/2117253821-40dc7c9a4e00c76988bde58e3fad116d301c7c26f7752390aab98a63b85e6a9c-d_640" },
            ].map((expert, i) => (
              <motion.div key={expert.name} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.12 }} className="flex flex-col">
                <VideoCard vimeoId={expert.id} title={`${expert.name} testimonial`} thumbnail={expert.thumbnail} />
                <p className="text-center text-foreground font-semibold mt-4 tracking-wide">{expert.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── THE SCIENCE BEHIND IT ─── */}
      <section className="py-24 md:py-32 px-4" style={{ backgroundColor: "#FDF6E9" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">Backed by Data</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-4">The Science Behind It All…</h2>
            <div className="h-px w-20 bg-primary mx-auto mt-6" />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {[
              { title: "We've Conducted Live Brain Scans", body: "After just hours of this work, participants showed measurable decreases in beta brainwaves associated with stress and overthinking, along with significant increases in theta and delta brainwaves linked to healing, intuition, and deep nervous system regulation." },
              { title: "The Impact", body: "These shifts create a stable internal foundation for emotional resilience, clearer thinking, faster recovery, and a stronger sense of presence. The brain, heart & energy enter coherence, your body self-regulates. From that state anything you want to create happens ten fold." },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="rounded-3xl p-8 sm:p-10"
                style={{ backgroundColor: "#FFF8EE", border: "1px solid rgba(211,146,34,0.25)" }}
              >
                <h3 className="text-xl sm:text-2xl font-bold italic mb-4" style={{ color: "#d39222" }}>{card.title}</h3>
                <p className="text-sm sm:text-base leading-relaxed" style={{ color: "#3d2f1a" }}>{card.body}</p>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <VideoCard
              vimeoId="1099884785"
              title="The Science Behind It All"
              thumbnail="https://i.vimeocdn.com/video/2034952591-c2b53df80aaa16561cdadff839e197e40faf32d27c3e63bd953b65eecc0b967d-d_640"
            />
          </motion.div>
        </div>
      </section>

      {/* ─── TRANSFORMATION VIDEO TESTIMONIALS ─── */}
      <section id="testimonials" className="py-24 md:py-32 px-4 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">Real People. Real Results.</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-4">Transformation Stories</h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto mt-4">
              These are not curated success stories. These are the real, lived experiences of people who showed up — and left changed.
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

          {/* Caesar's testimonial */}
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">Real Results. Real People.</span>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground leading-tight mb-4">Hear It From Someone Who Was There</h2>
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
                  title="Caesar's Story"
                  style={{ border: 0 }}
                />
              ) : (
                <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #1a1208 0%, #2a1f10 50%, #0a0e1a 100%)" }}>
                  <img src="https://i.vimeocdn.com/video/2141347193-0b89a5c7091846589d4b5fa8b7c2a911df26a2a24cc532bb51d5fb4fd5f84939-d_1280" alt="Caesar's Story" className="absolute inset-0 w-full h-full object-cover" />
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

          {/* Written testimonials */}
          <div className="mt-24">
            <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="text-primary tracking-[0.3em] text-xs font-bold uppercase block mb-4">More Voices</span>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">What People Are Saying</h3>
            </motion.div>
            <WrittenCarousel />
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section id="pricing" className="py-16 sm:py-24 md:py-32 px-4" style={{ backgroundColor: "#F5F0E8" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4" style={{ color: "#1a1208" }}>Choose Your Experience</h2>
            <div className="flex items-center justify-center gap-1.5 mt-4">
              <span className="w-6 h-0.5 rounded-full" style={{ backgroundColor: "#d39222" }} />
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#d39222" }} />
              <span className="w-6 h-0.5 rounded-full" style={{ backgroundColor: "#d39222" }} />
            </div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {[
              {
                label: "General Admission",
                originalPrice: "£444",
                price: "£366",
                featured: false,
                link: "https://buy.stripe.com/28E4gzbCU8pT8obd6L9Zm1a",
                btnText: "Sign Up Now",
                features: ["Full 3-day in-person training", "Access to all workshops, activations, and practices", "Breathwork, energy tools, and embodiment sessions", "Connect with a high-frequency global community"],
              },
              {
                label: "VIP Access",
                originalPrice: "£999",
                price: "£799",
                featured: true,
                link: "https://buy.stripe.com/eVq4gz0Yg5dHawj3wb9Zm1b",
                btnText: "Get VIP Access",
                features: ["Everything in GA AND", "Exclusive Q&A with Jerry & Team", "Premium Seating", "Swag Bag: Tote, Notebook, Sticker"],
              },
              {
                label: "Elite Package",
                originalPrice: "£1,555",
                price: "£1,222",
                featured: false,
                link: "https://buy.stripe.com/6oU6oH6iAdKd5bZ6In9Zm1c",
                btnText: "Go Elite",
                features: ["Everything in GA, VIP AND", "Upgraded Swag Bag: Water Bottle, Signed Book, \"Elite\" T-Shirt", "Front Row Seating", "Private Dinner with Jerry & Team"],
              },
            ].map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="flex flex-col px-5 py-7 sm:px-6 sm:py-8 md:px-8 md:py-10 rounded-3xl cursor-default"
                style={tier.featured ? { backgroundColor: "#EDE5D5", boxShadow: "0 8px 40px rgba(211,146,34,0.15)" } : { border: "1px solid #d39222" }}
              >
                <div className="flex justify-center mb-5">
                  {tier.featured ? (
                    <span className="text-[10px] font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full" style={{ backgroundColor: "#F5F0E8", color: "#d39222", border: "1px solid #d39222" }}>Most Popular</span>
                  ) : (
                    <span className="invisible text-[10px] px-4 py-1.5">.</span>
                  )}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-center" style={{ color: "#1a1208" }}>{tier.label}</h3>
                <div className="text-center mb-6">
                  <div className="line-through text-sm mb-1" style={{ color: "#aaa" }}>{tier.originalPrice}</div>
                  <div className="text-4xl sm:text-5xl font-extrabold" style={{ color: "#d39222" }}>{tier.price}</div>
                  <div className="text-[10px] tracking-[0.2em] uppercase font-semibold mt-2" style={{ color: "#b8a080" }}>Early Bird Price</div>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-snug" style={{ color: "#3d2f1a" }}>
                      <svg className="shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7.5" stroke="#d39222" strokeWidth="1" />
                        <path d="M5 8.5l2 2 4-4" stroke="#d39222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href={tier.link} target="_blank" rel="noopener noreferrer">
                  <button className="w-full py-3.5 rounded-lg text-sm font-bold tracking-wide transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-md bg-primary">
                    {tier.btnText}
                  </button>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GUARANTEE ─── */}
      <section className="py-16 sm:py-24 md:py-32 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="rounded-3xl border border-primary/30 bg-card shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
              <div className="relative overflow-hidden rounded-t-3xl md:rounded-t-none md:rounded-tl-3xl md:rounded-bl-3xl min-h-[240px] md:min-h-[320px]">
                <img src={guaranteeImg} alt="Guarantee" className="w-full h-full object-cover object-center" />
                <div className="absolute inset-0 bg-black/20" />
              </div>
              <div className="px-6 py-8 md:px-14 md:py-14 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 shrink-0 rounded-full flex flex-col items-center justify-center shadow-xl" style={{ background: "linear-gradient(135deg, #d39222 0%, #FFECBA 50%, #d39222 100%)" }}>
                    <span className="text-[#1a1208] font-bold text-[8px] uppercase tracking-widest leading-tight text-center px-1">100%<br />Money<br />Back</span>
                  </div>
                  <p className="text-muted-foreground text-xs uppercase tracking-widest">Our Promise to You</p>
                </div>
                <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">Zero Risk</span>
                <h2 className="text-2xl md:text-4xl font-bold text-foreground leading-tight mb-6">Turn up. Give it a morning.</h2>
                <p className="text-muted-foreground text-base leading-relaxed mb-4">
                  If by lunchtime on day one this isn't everything you expected — tell a member of our team and we will refund you in full. Right there and then. No forms. No waiting. No questions asked.
                </p>
                <p className="text-muted-foreground text-base leading-relaxed mb-8">
                  We make this promise because we've seen what happens inside that room thousands of times. We're not worried.
                </p>
                <p className="text-foreground font-semibold text-sm italic mb-8">The only risk here is not showing up.</p>
                <button
                  onClick={() => scrollTo("pricing")}
                  className="text-sm font-bold px-8 py-3 rounded-lg tracking-wide transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97] cursor-pointer self-start"
                  style={goldBtn}
                >
                  Reserve Your Seat — Risk Free
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section id="faq" className="py-24 md:py-32 px-4 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">Everything You Need to Know</span>
            <h2 className="text-3xl sm:text-5xl font-bold text-foreground leading-tight mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-xl mx-auto">
              We know this is a decision that matters. Here are honest answers to the most common questions.
            </p>
            <div className="h-px w-20 bg-primary mx-auto mt-10" />
          </motion.div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {[{ label: "All", idx: -1 }, ...faqCategories.map((cat, ci) => ({ label: cat.label, idx: ci }))].map(({ label, idx }) => (
              <button
                key={idx}
                onClick={() => { setActiveFaqTab(idx); setOpenFaq({}); }}
                className="px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer"
                style={activeFaqTab === idx ? goldBtn : { background: "hsl(var(--card))", color: "hsl(var(--muted-foreground))", border: "1px solid hsl(var(--border))" }}
              >
                {label}
              </button>
            ))}
          </div>

          <motion.div key={activeFaqTab} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <div className="space-y-8">
              {visibleFaqs.map((cat, catIdx) => {
                const realIdx = activeFaqTab === -1 ? catIdx : activeFaqTab;
                return (
                  <div key={catIdx}>
                    {activeFaqTab === -1 && (
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">{cat.label}</span>
                        <div className="flex-1 h-px bg-border/50" />
                      </div>
                    )}
                    <div className="rounded-2xl border border-border/50 overflow-hidden bg-card shadow-sm">
                      {cat.items.map((item, ii) => (
                        <FAQAccordion
                          key={ii}
                          item={item}
                          isOpen={!!openFaq[`${realIdx}-${ii}`]}
                          onToggle={() => toggleFaq(`${realIdx}-${ii}`)}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-28 px-4 bg-secondary text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />
        <motion.div
          className="max-w-3xl mx-auto relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary tracking-[0.3em] text-xs font-bold uppercase block mb-6">Limited Places Remaining</span>
          <h2 className="text-4xl md:text-6xl font-bold font-sans text-foreground mb-6 leading-snug">
            Your story belongs<br />in this room.
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Elite Be Superhuman — London, UK · May 2026. A 3-day live experience that changes everything.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollTo("pricing")}
              className="text-base font-bold px-10 py-3 rounded-lg tracking-wide transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97] cursor-pointer shadow-lg"
              style={goldBtn}
            >
              Reserve Your Seat
            </button>
            <a href="mailto:info@starmagichealing.com">
              <button
                className="text-base font-semibold px-10 py-3 rounded-lg tracking-wide transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97] cursor-pointer"
                style={{ background: "transparent", color: "hsl(var(--primary))", border: "2px solid rgba(211,146,34,0.8)" }}
              >
                Contact Our Team
              </button>
            </a>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
