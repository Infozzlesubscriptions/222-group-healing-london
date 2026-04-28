import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import mobileHeroBanner from "@assets/spiritual-enlightenment-through-meditation-awakening-ones-inne_1777277040113.jpg";
import jerrySargeantImg from "@assets/StarMagicHealing-S2H09403-Jerry-Sargeant_1777275463000.webp";
import healingPhoto2 from "@assets/image_1777277164144.png";
import healingPhoto3 from "@assets/image_1777277168745.png";
import healingPhoto4 from "@assets/image_1777277173772.png";
import spiritualActivationImg from "@assets/jerry-sargeant-group-healing-workshop_1777276863181.png";
import groupEnergyImg1 from "@assets/community-group-ORD4DYoj_1776168740414.jpg";
import groupEnergyImg2 from "@assets/Brain-Scan-1-scaled_1776168740415.webp";
import groupEnergyImg3 from "@assets/Elite_Be_Superhuman_11-scaled_1776168428466.webp";
import groupEnergyImg4 from "@assets/Copy_of_BCAM4866_1777383317799.jpg";
import { goldBtn, testimonialVideos, writtenTestimonials } from "@/lib/shared";
import { VideoCard } from "@/components/VideoCard";

const stats = [
  { value: "5 Hrs", label: "Radical Transformation" },
  { value: "85+", label: "Countries Reached" },
  { value: "500,000+", label: "Lives Healed" },
];

export default function Home() {
  const [jerryVideoPlaying, setJerryVideoPlaying] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const miniTestimonials = writtenTestimonials.slice(0, 3);

  return (
    <div className="min-h-screen bg-background w-full overflow-hidden">
      {/* ─── HERO ─── */}
      <section id="hero" className="relative overflow-hidden min-h-[70svh] flex items-center">
        <motion.div className="absolute inset-0 z-0" style={{ y: y1, opacity }}>
          <img src={mobileHeroBanner} alt="222 Group Healing" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(10,14,26,0.92) 0%, rgba(10,14,26,0.6) 60%, rgba(10,14,26,0.3) 100%)" }} />
        </motion.div>

        <div className="relative z-10 px-6 sm:px-10 md:px-16 w-full">
          <div className="max-w-7xl mx-auto w-full py-20">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}>
              <span className="text-sm sm:text-base font-sans tracking-[0.2em] sm:tracking-[0.3em] mb-4 block uppercase font-bold text-[#f7e7cb]" style={{ color: "#d39222" }}>
                Jerry Sargeant Presents
              </span>
              <h1 className="text-[clamp(2rem,5.5vw,5rem)] font-sans text-white font-bold mb-4 drop-shadow-2xl leading-tight whitespace-nowrap">
                222 GROUP HEALING
              </h1>
              <p className="text-sm sm:text-base md:text-xl text-white/90 mb-4 max-w-xl leading-relaxed drop-shadow-md">
                A 5-hour live group healing experience that dissolves years of blocks, rewires your frequency, and unlocks a level of freedom you may never have felt before.
              </p>
              <p className="text-xs sm:text-sm md:text-base font-semibold tracking-wider uppercase mb-10 text-white/80">
                London, UK · 5th &amp; 6th September 2026 · 5 Hours · Limited Places
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start flex-wrap">
                <Link href="/experience">
                  <button className="w-full sm:w-auto text-base font-bold px-8 py-3 rounded-lg tracking-wide transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97] cursor-pointer shadow-lg" style={goldBtn}>
                    Explore The Experience
                  </button>
                </Link>
                <Link href="/stories">
                  <button className="w-full sm:w-auto text-base font-bold px-8 py-3 rounded-lg tracking-wide transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97] cursor-pointer" style={{ background: "transparent", color: "#ffffff", border: "2px solid rgba(211,146,34,0.8)" }}>
                    Watch Stories
                  </button>
                </Link>
                <Link href="/book">
                  <button className="w-full sm:w-auto text-base font-bold px-8 py-3 rounded-lg tracking-wide transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97] cursor-pointer" style={{ background: "rgba(255,255,255,0.1)", color: "#ffffff", border: "2px solid rgba(255,255,255,0.3)", backdropFilter: "blur(8px)" }}>
                    Reserve Your Place
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          style={{ opacity: 0.7 }}
        >
          <span className="text-white/60 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </section>
      {/* ─── STATS BAR ─── */}
      <section className="py-10 sm:py-14 px-4 bg-secondary/30 border-y border-border/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center rounded-xl sm:rounded-2xl px-3 sm:px-4 py-4 sm:py-6"
                style={{ border: "1px solid rgba(211,146,34,0.3)" }}
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2" style={{ color: "#d39222" }}>{stat.value}</div>
                <div className="text-muted-foreground text-xs sm:text-sm font-medium tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* ─── EMOTIONAL HOOK ─── */}
      <section className="py-24 md:py-32 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
            <div className="text-primary text-3xl mb-6">✦</div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-8">
              Do you feel like something is holding you back — and you can't figure out what?
            </h2>
            <div className="h-px w-20 bg-primary mx-auto mb-10" />
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-6 max-w-3xl mx-auto">
              You've tried therapy. You've read the books. You've done the meditations. But there are patterns, blocks, and pain that just won't shift — no matter what you do.
            </p>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-6 max-w-3xl mx-auto">
              That's because most approaches work only at the conscious mind level. Real, lasting change happens when you work at the level of energy, emotion, and the quantum field — simultaneously.
            </p>
            <p className="text-foreground font-semibold text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              That's exactly what happens inside a 222 Group Healing.
            </p>
          </motion.div>
        </div>
      </section>
      {/* ─── WHAT IS 222 (SHORT INTRO) ─── */}
      <section className="py-20 md:py-28 px-4 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">What Is This</span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                A 222 Group Healing
              </h2>
              <div className="h-px w-16 bg-primary mb-8" />
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-5">
                The 222 Group Healing is a 5-hour live event where Jerry Sargeant — one of the world's most powerful healing facilitators — works with the entire room simultaneously, using Star Magic frequency healing to dissolve blocks, release trauma, and activate a new level of freedom.
              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-5">
                When you put 100+ people in a room together in this state, the group field amplifies everything exponentially. Shifts that would take years happen in hours.
              </p>
              <p className="text-foreground font-semibold text-base md:text-lg leading-relaxed mb-8">
                It is unlike anything else on Earth.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/experience">
                  <button className="text-base font-bold px-8 py-3 rounded-lg tracking-wide transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97] cursor-pointer shadow-lg" style={goldBtn}>
                    Explore The Experience
                  </button>
                </Link>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}>
              <div className="grid grid-cols-2 gap-4">
                {[jerrySargeantImg, healingPhoto2, healingPhoto3, healingPhoto4].map((img, i) => (
                  <div key={i} className="rounded-2xl overflow-hidden shadow-md aspect-square" style={{ border: "1px solid rgba(211,146,34,0.25)" }}>
                    <img src={img} alt="Group healing experience" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* ─── JERRY VIDEO ─── */}
      <section className="py-24 md:py-32 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">Hear It From Jerry</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-4">What Is a 222 Group Healing?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">What happens inside the room, why it works, and what's possible for you — direct from Jerry.</p>
            <div className="h-px w-20 bg-primary mx-auto mt-8" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 40, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
            <div className="absolute -inset-1 rounded-3xl blur-2xl opacity-30 pointer-events-none relative" />
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
              style={{ border: "1px solid rgba(243,214,150,0.35)", aspectRatio: "16/9" }}
              onClick={() => setJerryVideoPlaying(true)}
            >
              {jerryVideoPlaying ? (
                <iframe
                  src="https://player.vimeo.com/video/841026317?badge=0&autopause=0&quality_selector=1&player_id=0&app_id=58479&autoplay=1"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  className="absolute inset-0 w-full h-full"
                  title="What Is a 222 Group Healing"
                  style={{ border: 0 }}
                />
              ) : (
                <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #1a1208 0%, #2a1f10 50%, #0a0e1a 100%)" }}>
                  <img src="https://i.vimeocdn.com/video/1691266570-f540e0b5972903c5d3427db9adadd6744d6c67ac4aae67c90aab6b3f55aabebe-d_1280" alt="What Is a 222 Group Healing" className="absolute inset-0 w-full h-full object-cover" />
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
      {/* ─── WHY GROUP ENERGY ─── */}
      <section className="py-24 md:py-32 px-4" style={{ backgroundColor: "#FDF6E9" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">The Power of the Group</span>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4" style={{ color: "#1a1208" }}>Why Group Energy Changes Everything</h2>
            <div className="h-px w-20 bg-primary mx-auto mt-6" />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
            {[
              { img: groupEnergyImg1, title: "Exponential Amplification", body: "When 100+ people focus their energy together in a healing state, the combined field is not additive — it's exponential. What takes months alone takes hours in a group." },
              { img: groupEnergyImg2, title: "Quantum Entanglement", body: "Science shows us that consciousness is not isolated. Group fields create quantum coherence — a shared frequency that each person in the room both transmits and receives simultaneously." },
              { img: groupEnergyImg3, title: "Depth of Release", body: "The group container creates a profound sense of safety. When you feel held by a room of people, your nervous system relaxes at a level it never could alone — enabling deeper release." },
              { img: groupEnergyImg4, title: "Planetary Impact", body: "Your healing doesn't stay in the room. Every shift you make ripples outward into the collective field, contributing to the global frequency shift happening right now." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-2xl overflow-hidden flex flex-col"
                style={{ border: "1px solid rgba(211,146,34,0.3)", background: "rgba(211,146,34,0.05)" }}
              >
                <div className="w-full aspect-[16/9] overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                <div className="p-6 flex flex-col gap-2">
                  <h3 className="font-bold text-lg" style={{ color: "#1a1208" }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#5a4a30" }}>{item.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div className="text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <Link href="/science">
              <button className="text-base font-bold px-10 py-3.5 rounded-lg tracking-wide transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97] cursor-pointer" style={{ background: "transparent", border: "2px solid #d39222", color: "#d39222" }}>
                See the Science →
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
      {/* ─── MINI TESTIMONIALS ─── */}
      <section className="py-24 md:py-32 px-4 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">Real People. Real Results.</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-4">This Changed Everything</h2>
            <div className="h-px w-20 bg-primary mx-auto mt-8" />
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {testimonialVideos.slice(0, 3).map((video, i) => (
              <motion.div key={video.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <VideoCard vimeoId={video.id} title={video.title} thumbnail={video.thumb} />
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {miniTestimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-border/50 bg-card p-6 flex flex-col shadow-sm"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, s) => <span key={s} className="text-primary text-sm">★</span>)}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed italic flex-1 mb-5">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold shrink-0" style={{ background: "linear-gradient(135deg, rgba(184,151,92,0.3), rgba(243,214,150,0.15))", border: "1px solid rgba(184,151,92,0.35)", color: "#d39222" }}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{t.name}</p>
                    <p className="text-muted-foreground text-xs">{t.loc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div className="text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <Link href="/stories">
              <button className="text-base font-bold px-10 py-3.5 rounded-lg tracking-wide transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97] cursor-pointer" style={{ background: "transparent", border: "2px solid rgba(211,146,34,0.8)", color: "#d39222" }}>
                Watch All Stories →
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
      {/* ─── FINAL CTA ─── */}
      <section className="py-24 md:py-32 px-4" style={{ background: "linear-gradient(135deg, #0a0e1a 0%, #1a1208 50%, #0a0e1a 100%)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="text-primary text-3xl mb-6">✦ ✦ ✦</div>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
              Can you radically shift your entire life in 5 hours?
            </h2>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-4 max-w-2xl mx-auto">
              Thousands of people have walked out of this room feeling lighter, freer, and more alive than they have in years — after carrying pain, trauma, or blocks for decades.
            </p>
            <p className="text-white/50 text-base mb-10">
              The answer is yes. And it starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Link href="/book">
                <button className="text-base font-bold px-10 py-4 rounded-lg tracking-wide transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97] cursor-pointer shadow-2xl" style={goldBtn}>
                  Reserve Your Place — 5th or 6th September
                </button>
              </Link>
              <Link href="/experience">
                <button className="text-base font-bold px-10 py-4 rounded-lg tracking-wide transition-all duration-200 hover:scale-[1.03] cursor-pointer" style={{ background: "transparent", color: "#ffffff", border: "2px solid rgba(211,146,34,0.8)" }}>
                  Explore The Experience
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
