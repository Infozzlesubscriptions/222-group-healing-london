import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const writtenTestimonials = [
  {
    name: "Barcelona Group Healing",
    loc: "Barcelona",
    quote:
      "This was the most powerful two days I have ever experienced. Jerry was the facilitator along with his SM team provided a safe container which allowed me to be open to the healing energy that the group generated which can only be described as magical. I highly recommend doing a star magic group healing session especially if you have been working on long unresolved issues as I have and now they are resolved. Thanks Jerry",
  },
  {
    name: "Jill Johnston",
    loc: "Star Magic Member",
    quote:
      "The meditations are phenomenal. I was going through a very traumatic grief process with anxiety and restless nights. Sedatives aren't a long term solution! No other recordings helped with not only relaxation and sleep but also calm and peaceful at daytime. The downloads are so powerful and I progressed to a lifestyle of knowing what my mind and body needs to heal. It extends out to my family and friends. This heart healing expands to the world. One love, one heart, one human family!",
  },
  {
    name: "Star Magic Review",
    loc: "Star Magic Member",
    quote:
      "Star Magic is the best healing modality I experienced. I tried so many other modalities, but could not feel from my heart centre due to childhood traumas. Only one live group healing session has opened my heart centre and healed my lower back pain. My intuition and psyche abilities have improved considerably. Deep gratitude to Jerry and the Star magic team. So worth it. Thank you so much.",
  },
  {
    name: "Amandalynn Family of Adams",
    loc: "Star Magic Member",
    quote:
      "I have been with Star Magic for 3 months now and I am so very grateful to be a part of this amazing tribe. Jerry and the tribe have created space for everyone to experience and become the most powerful being that they are meant to be, with love, integrity and from the heart. I absolutely love Star Magic and everything it embodies. Thank you Jerry, thank you to everyone of you amazing beautiful souls.",
  },
  {
    name: "Deborah Bevard",
    loc: "Star Magic Member",
    quote:
      "Star Magic is beyond written description. Literally can't imagine it unless you've been there. Every single area of my life has improved since starting 1.5 years ago and the change has been extraordinary.",
  },
  {
    name: "Lillie Thornton",
    loc: "Star Magic Member",
    quote:
      "My heart led me to StarMagic Healing. This has been the most incredible experience of my life. After a group healing my physical pain has gone. I followed up with joining Infinity and it has completely transformed my life.",
  },
  {
    name: "Linda",
    loc: "Star Magic Member",
    quote:
      "Star Magic Healing gave me a fresh perspective on wellness. It's not about chasing quick fixes but about creating lasting change. The meditations are powerful, and the teachings have transformed how I approach my health and wellbeing.",
  },
];

function useCardWidth() {
  const [width, setWidth] = useState(() => {
    if (typeof window === 'undefined') return 380;
    return window.innerWidth < 640 ? Math.min(300, window.innerWidth - 48) : 380;
  });
  useEffect(() => {
    const update = () => {
      setWidth(window.innerWidth < 640 ? Math.min(300, window.innerWidth - 48) : 380);
    };
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return width;
}

function WrittenCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const total = writtenTestimonials.length;
  const CARD_WIDTH = useCardWidth();
  const GAP = 24;

  const scrollTo = (idx: number) => {
    const next = Math.max(0, Math.min(idx, total - 1));
    setActiveIdx(next);
    scrollRef.current?.scrollTo({ left: next * (CARD_WIDTH + GAP), behavior: "smooth" });
  };

  return (
    <>
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onScroll={() => {
          if (scrollRef.current) {
            const idx = Math.round(scrollRef.current.scrollLeft / (CARD_WIDTH + GAP));
            setActiveIdx(idx);
          }
        }}
      >
        {writtenTestimonials.map((t, i) => (
          <div
            key={i}
            className="rounded-2xl border border-border/50 bg-card p-5 sm:p-7 flex flex-col shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 shrink-0"
            style={{ width: CARD_WIDTH }}
          >
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, s) => (
                <span key={s} className="text-primary text-sm">★</span>
              ))}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed italic flex-1 mb-5">
              "{t.quote}"
            </p>
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                style={{
                  background: "linear-gradient(135deg, rgba(184,151,92,0.3), rgba(243,214,150,0.15))",
                  border: "1px solid rgba(184,151,92,0.35)",
                  color: "#d39222",
                }}
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
          aria-label="Previous"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <span className="text-muted-foreground text-xs tabular-nums">
          {activeIdx + 1} / {total}
        </span>
        <button
          onClick={() => scrollTo(activeIdx + 1)}
          disabled={activeIdx === total - 1}
          className="w-11 h-11 rounded-full border border-border/60 flex items-center justify-center text-foreground/60 hover:border-primary hover:text-primary transition-all duration-200 disabled:opacity-25 disabled:cursor-not-allowed"
          aria-label="Next"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </>
  );
}

export default function Gallery() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-0">

      {/* Hero */}
      <motion.div
        className="text-center px-4 mb-20 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">Real People. Real Results.</span>
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-foreground leading-tight mb-6">
          Transformation Stories
        </h1>
        <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
          These are not curated success stories. These are the real, lived experiences of people who showed up — and left changed.
        </p>
        <div className="h-px w-20 bg-primary mx-auto mt-10" />
      </motion.div>

      {/* Transformation Videos */}
      <section className="px-4 max-w-7xl mx-auto mb-24">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary tracking-[0.3em] text-xs font-bold uppercase">Inside the Room</span>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { id: "1161766582", title: "Transformation Story 1" },
            { id: "1161766314", title: "Transformation Story 2" },
            { id: "1161766538", title: "Transformation Story 3" },
            { id: "1161766020", title: "Transformation Story 4" },
            { id: "1161765970", title: "Transformation Story 5" },
            { id: "1161766248", title: "Transformation Story 6" },
          ].map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl overflow-hidden shadow-lg border border-border/30"
              style={{ aspectRatio: "16/9" }}
            >
              <iframe
                src={`https://player.vimeo.com/video/${video.id}?badge=0&autopause=0&player_id=0&app_id=58479`}
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                className="w-full h-full"
                title={video.title}
                style={{ border: 0 }}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Written Testimonials */}
      <section className="px-4 max-w-7xl mx-auto mb-24">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary tracking-[0.3em] text-xs font-bold uppercase">More Voices</span>
        </motion.div>
        <WrittenCarousel />
      </section>

      {/* CTA */}
      <section className="py-28 px-4 bg-secondary text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />
        <motion.div
          className="max-w-7xl mx-auto relative z-10"
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
            <Link href="/#pricing">
              <Button size="lg" className="bg-primary text-primary-foreground font-bold text-lg px-10 py-2">
                Reserve Your Seat
              </Button>
            </Link>
            <Link href="/programme">
              <Button size="lg" variant="outline" className="border-primary text-primary font-semibold text-lg px-10 py-2">
                View the Programme
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
