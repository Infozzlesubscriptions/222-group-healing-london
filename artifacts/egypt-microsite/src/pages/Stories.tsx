import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { VideoCard } from "@/components/VideoCard";
import { goldBtn, testimonialVideos, writtenTestimonials } from "@/lib/shared";

const categories = ["All", "Physical Shifts", "Emotional Healing", "Life Breakthroughs"];

function WrittenCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const total = writtenTestimonials.length;

  const getCardWidth = () => {
    const card = scrollRef.current?.children[0] as HTMLElement | undefined;
    return card ? card.offsetWidth + 24 : 404;
  };

  const scrollTo = (idx: number) => {
    const next = Math.max(0, Math.min(idx, total - 1));
    setActiveIdx(next);
    scrollRef.current?.scrollTo({ left: next * getCardWidth(), behavior: "smooth" });
  };

  return (
    <>
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onScroll={() => {
          if (scrollRef.current) {
            const idx = Math.round(scrollRef.current.scrollLeft / getCardWidth());
            setActiveIdx(idx);
          }
        }}
      >
        {writtenTestimonials.map((t, i) => (
          <div
            key={i}
            className="rounded-2xl border border-border/50 bg-card p-6 sm:p-7 flex flex-col shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 shrink-0"
            style={{ width: "min(380px, 82vw)" }}
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
        <button onClick={() => scrollTo(activeIdx - 1)} disabled={activeIdx === 0} className="w-11 h-11 rounded-full border border-border/60 flex items-center justify-center text-foreground/60 hover:border-primary hover:text-primary transition-all duration-200 disabled:opacity-25 disabled:cursor-not-allowed">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
        <span className="text-muted-foreground text-xs tabular-nums">{activeIdx + 1} / {total}</span>
        <button onClick={() => scrollTo(activeIdx + 1)} disabled={activeIdx === total - 1} className="w-11 h-11 rounded-full border border-border/60 flex items-center justify-center text-foreground/60 hover:border-primary hover:text-primary transition-all duration-200 disabled:opacity-25 disabled:cursor-not-allowed">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
        </button>
      </div>
    </>
  );
}

export default function Stories() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? testimonialVideos
    : testimonialVideos.filter(v => v.category === activeCategory);

  return (
    <div className="min-h-screen bg-background w-full">
      {/* ─── PAGE HERO ─── */}
      <section className="pt-28 sm:pt-32 md:pt-40 pb-16 md:pb-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">Real People. Real Results.</span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-foreground leading-tight mb-6">This Changed Everything</h1>
            <div className="h-px w-20 bg-primary mx-auto mb-8" />
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              These are not curated success stories. These are the real, lived experiences of people who showed up — and left transformed. Watch, listen, and feel what's possible.
            </p>
          </motion.div>
        </div>
      </section>
      {/* ─── VIDEO TESTIMONIALS ─── */}
      <section className="py-16 px-4" style={{ backgroundColor: "#FDF6E9" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: "#1a1208" }}>Video Transformations</h2>
            <p className="text-sm" style={{ color: "#7a6040" }}>Click any video to watch the full story</p>
          </motion.div>

          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="text-sm font-semibold px-5 py-2 rounded-full tracking-wide transition-all duration-200"
                style={activeCategory === cat
                  ? goldBtn
                  : { background: "transparent", border: "1px solid rgba(211,146,34,0.5)", color: "#d39222" }
                }
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((video, i) => (
              <motion.div key={video.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}>
                <div className="mb-2">
                  <span className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full" style={{ background: "rgba(211,146,34,0.12)", color: "#d39222" }}>
                    {video.category}
                  </span>
                </div>
                <VideoCard vimeoId={video.id} title={video.title} thumbnail={video.thumb} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* ─── TRANSFORMATION CATEGORIES ─── */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">What People Experience</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">The Breadth of Transformation</h2>
            <div className="h-px w-20 bg-primary mx-auto mt-6" />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Physical Shifts",
                icon: "💫",
                items: [
                  "Pain reduction and elimination",
                  "Increased mobility and physical freedom",
                  "Relief from chronic conditions",
                  "Deep nervous system reset",
                  "Profound physical lightness",
                  "Restored energy and vitality",
                ],
              },
              {
                title: "Emotional Healing",
                icon: "💛",
                items: [
                  "Release of grief, loss, and heartbreak",
                  "Freedom from anxiety and fear",
                  "Healing of childhood trauma",
                  "Breaking of depression cycles",
                  "Deep forgiveness — self and others",
                  "Reconnection to joy and aliveness",
                ],
              },
              {
                title: "Life Breakthroughs",
                icon: "🌟",
                items: [
                  "Financial windfalls and new opportunities",
                  "Relationship breakthroughs",
                  "Career and purpose clarity",
                  "Spiritual awakening and gifts",
                  "Improved relationships and communication",
                  "A total shift in life direction",
                ],
              },
            ].map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-2xl p-7"
                style={{ border: "1px solid rgba(211,146,34,0.3)", background: "rgba(211,146,34,0.04)" }}
              >
                <div className="text-3xl mb-3">{cat.icon}</div>
                <h3 className="font-bold text-lg text-foreground mb-5">{cat.title}</h3>
                <ul className="space-y-3">
                  {cat.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm leading-snug text-muted-foreground">
                      <span style={{ color: "#d39222" }} className="mt-0.5 shrink-0">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* ─── BEFORE / AFTER ─── */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">The Shift</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">Before & After — What People Say</h2>
            <div className="h-px w-20 bg-primary mx-auto mt-8" />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="rounded-2xl p-7" style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)" }}>
              <h3 className="font-bold text-base text-muted-foreground mb-5 uppercase tracking-widest">Before They Came</h3>
              {["\"I felt stuck for years — like something was holding me back and I had no idea what it was.\"", "\"I carried grief and anxiety every single day. I'd tried everything and nothing worked.\"", "\"I'd been in chronic pain for over a decade and had given up hope of it ever changing.\"", "\"I felt disconnected — from life, from myself, from any sense of purpose.\""].map((q, i) => (
                <p key={i} className="text-muted-foreground/70 text-sm italic mb-3 pb-3 border-b border-border/20 last:border-0 last:mb-0 last:pb-0">{q}</p>
              ))}
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="rounded-2xl p-7" style={{ border: "1px solid rgba(211,146,34,0.35)", background: "rgba(211,146,34,0.06)" }}>
              <h3 className="font-bold text-base mb-5 uppercase tracking-widest" style={{ color: "#d39222" }}>After the Healing</h3>
              {["\"I walked out feeling lighter than I have since I was a child. Like something enormous had been lifted from me.\"", "\"The anxiety just... wasn't there anymore. I have no other way to explain it.\"", "\"I moved my arm above my head for the first time in years. I was in shock.\"", "\"I came back to myself. That's the only way I can describe it.\""].map((q, i) => (
                <p key={i} className="text-foreground/80 text-sm italic mb-3 pb-3 border-b border-primary/10 last:border-0 last:mb-0 last:pb-0">{q}</p>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      {/* ─── WRITTEN TESTIMONIALS ─── */}
      <section className="py-24 px-4" style={{ backgroundColor: "#FDF6E9" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-primary tracking-[0.3em] text-xs font-bold uppercase block mb-4">More Voices</span>
            <h3 className="text-2xl md:text-3xl font-bold" style={{ color: "#1a1208" }}>What People Are Saying</h3>
          </motion.div>
          <WrittenCarousel />
        </div>
      </section>
      {/* ─── STORIES CTA ─── */}
      <section className="py-20 px-4" style={{ backgroundColor: "#FDF6E9" }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="text-primary text-3xl mb-6">✦</div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6" style={{ color: "#1a1208" }}>I Want This Experience</h2>
            <p className="text-lg leading-relaxed mb-10 max-w-2xl mx-auto" style={{ color: "#5a4a30" }}>
              Every person in those videos was once sitting where you are now. The only difference between them and you is that they chose to show up.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Link href="/experience">
                <button className="text-base font-bold px-10 py-4 rounded-lg tracking-wide transition-all duration-200 hover:scale-[1.03] cursor-pointer" style={{ background: "transparent", color: "#d39222", border: "2px solid #d39222" }}>
                  Explore The Experience
                </button>
              </Link>
              <Link href="/book">
                <button className="text-base font-bold px-10 py-4 rounded-lg tracking-wide transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97] cursor-pointer shadow-2xl" style={goldBtn}>
                  Reserve My Place
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
