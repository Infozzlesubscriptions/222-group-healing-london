import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import groupPyramidsImage from "@assets/freepik_wide-cinematic-banner-of-_2791068153_1776265285999.jpeg";
import tribeCirclePyramidImg from "@assets/Jerry-Sargeant-One-Love_1776160920406.webp";
import spiritualActivationImg from "@assets/image_1776160809528.png";
import card1Img from "@assets/Brain-Scan-1-scaled_1776168428464.webp";
import card2Img from "@assets/Brain-Scan-2-scaled_1776169771247.webp";
import card3Img from "@assets/Program-and-step-5-scaled_1776169771253.webp";
import card4Img from "@assets/Elite_Be_Superhuman_11-scaled_1776168428466.webp";
import card5Img from "@assets/event-overview_1776168428467.webp";
import spiritualWarriorImg from "@assets/Spiritual-Warrior-Protocol-scaled_1776176043760.webp";
import eliteGroup13Img from "@assets/Elite_Be_Superhuman_13-scaled_1776176188604.webp";
import whoThisIsForImg from "@assets/generated_images/who-this-is-for-illustration.png";
import guaranteeImg from "@assets/Elite_Be_Superhuman_11-scaled_1776177221392.webp";
import card6Img from "@assets/Superhuman-Blueprint-scaled_1776169771254.webp";
import card7Img from "@assets/Program-and-step-3-scaled_1776166006733.webp";
import card8Img from "@assets/Elite_Be_Superhuman_13-scaled_1776168740417.webp";
import jerrySargeantImg from "@assets/wmremove-transformed_1776254411149.jpeg";
import mobileHeroBanner from "@assets/freepik_wide-cinematic-banner-cal_2792714935_1776273619553.jpeg";

export default function Home() {
  const [jerryVideoPlaying, setJerryVideoPlaying] = useState(false);
  const [caesarVideoPlaying, setCaesarVideoPlaying] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const stats = [
    { value: "3", label: "Transformative Days" },
    { value: "85+", label: "Countries Reached" },
    { value: "500,000+", label: "Lives Changed" },
    { value: "100%", label: "Practical. Real. Results." },
  ];

  const walkAwayItems = [
    {
      img: card1Img,
      title: "Reset Nervous System",
      text: "A completely reset nervous system, no longer running on stress and survival",
    },
    {
      img: spiritualWarriorImg,
      title: "Unshakeable Clarity",
      text: "Unshakeable clarity on who you are and what you're here to do",
    },
    {
      img: card3Img,
      title: "Coherent Energy",
      text: "A coherent signal — no more leaking energy, no more running on empty",
    },
    {
      img: card4Img,
      title: "Sustained Expansion",
      text: "The capacity to hold and sustain real expansion in every area of life",
    },
    {
      img: card5Img,
      title: "Elevated Relationships",
      text: "Relationships that reflect your new level back to you",
    },
    {
      img: card6Img,
      title: "Upgraded Body",
      text: "A body that's been cleared, activated, and upgraded from the inside out",
    },
    {
      img: card7Img,
      title: "Lifelong Tools",
      text: "Tools and practices you'll use every single day for the rest of your life",
    },
    {
      img: card8Img,
      title: "Your Tribe",
      text: "A community of people operating at the same frequency as you",
    },
  ];

  const forYouItems = [
    "You know there's more available to you but can't seem to access it",
    "You're high-functioning but quietly exhausted and running on fumes",
    "You've done the personal development work but something still feels stuck",
    "Your health, relationships, or business aren't reflecting who you know yourself to be",
    "You're ready to stop managing your life and start leading it",
    "You want practical tools that work — not just inspiration that fades by Monday",
  ];

  return (
    <div className="min-h-screen bg-background w-full overflow-hidden">
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#0a0e1a" }}>
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: y1, opacity }}
        >
          <img
            src={mobileHeroBanner}
            alt="Elite Be Superhuman event"
            className="w-full h-full object-cover object-bottom block md:hidden"
          />
          <img
            src={groupPyramidsImage}
            alt="Elite Be Superhuman event"
            className="hidden md:block w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent md:hidden" />
          <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </motion.div>

        <div className="relative z-10 text-center md:text-left px-6 sm:px-10 md:px-16 md:max-w-3xl min-h-[85vh] flex items-center pb-16 pt-20 md:pb-0 md:pt-0 md:py-32 md:min-h-[90vh]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-sm sm:text-base md:text-lg font-sans tracking-[0.2em] sm:tracking-[0.35em] mb-4 block uppercase text-[#ffffff] font-bold">
              Jerry Sargeant Presents
            </span>
            <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-sans text-white font-bold mb-4 drop-shadow-2xl leading-tight">
              ELITE BE<br />SUPERHUMAN
            </h1>
            <p className="text-sm sm:text-base md:text-xl text-white/90 mb-4 max-w-xl md:max-w-xl mx-auto md:mx-0 leading-relaxed drop-shadow-md">
              A 3-day live experience that rewires your mind, rebuilds your body, and unlocks the version of you the world has been waiting for.
            </p>
            <p className="text-xs sm:text-sm md:text-base font-semibold tracking-wider sm:tracking-widest uppercase mb-8 md:mb-10 text-[#ffffff]">London, UK · May 15–17, 2026 · 3 Days · Limited Places</p>

            <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start justify-center md:justify-start">
              <a
                href="#pricing"
                className="w-full sm:w-auto"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <button
                  className="w-full sm:w-auto text-base font-bold px-8 py-3 rounded-lg tracking-wide transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97] cursor-pointer shadow-lg"
                  style={{
                    background: "linear-gradient(90deg, #d39222 0%, #FFECBA 24.52%, #F3D696 51.93%, #FFECBA 76.93%, #d39222 100%)",
                    color: "#1a1208",
                    border: "none",
                  }}
                >
                  Reserve Your Seat Now
                </button>
              </a>
              <Link href="/programme" className="w-full sm:w-auto">
                <button
                  className="w-full sm:w-auto text-base font-bold px-8 py-3 rounded-lg tracking-wide transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97] cursor-pointer"
                  style={{
                    background: "transparent",
                    color: "#ffffff",
                    border: "2px solid rgba(211,146,34,0.8)",
                  }}
                >
                  See What's Inside
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      {/* ─── STATS BAR ─── */}
      <section className="py-10 sm:py-14 px-4 bg-secondary/30 border-y border-border/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center rounded-xl sm:rounded-2xl px-3 sm:px-4 py-4 sm:py-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-default"
                style={{ border: "1px solid rgba(211,146,34,0.3)" }}
                whileHover={{ borderColor: "rgba(211,146,34,0.6)" }}
              >
                <div
                  className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2"
                  style={{ color: "#d39222" }}
                >
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-xs sm:text-sm font-medium tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* ─── PROMISE / INTRO ─── */}
      <section className="py-24 md:py-32 px-4 relative z-20 bg-background">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-primary text-4xl mb-8">✦</div>
            <p className="text-xl md:text-2xl text-foreground italic leading-relaxed mb-10 max-w-5xl mx-auto font-semibold">Most people live far below their true potential — this three-day experience changes that for good.</p>
            <div className="h-px w-20 bg-border mx-auto mb-10" />
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-5xl mx-auto mb-6">
              Elite Be Superhuman is a fully immersive, hands-on event focused on real transformation. No theory or passive learning — just powerful practices combining breathwork, energy medicine, performance psychology, and consciousness work in a structured journey.
            </p>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-5xl mx-auto mb-6">
              You won't leave with temporary motivation — you'll leave transformed, ready to step into a higher, more abundant version of your life.
            </p>
            <p className="text-foreground font-semibold text-base md:text-lg max-w-5xl mx-auto leading-relaxed">
              With 20+ years of experience across 85+ countries, Jerry Sargeant has helped people break limitations, rewire their inner world, and unlock new levels of clarity, health, and success.
            </p>
          </motion.div>
        </div>
      </section>
      {/* ─── HERO VIDEO ─── */}
      <section className="pt-0 pb-24 md:pb-32 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">What This Event Is</span>
            <h2 className="text-3xl md:text-6xl font-bold text-foreground leading-tight mb-4">
              Hear It From Jerry
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto font-light">
              What this event is, what happens, what's possible — direct from Jerry.
            </p>
            <div className="h-px w-20 bg-primary mx-auto mt-8" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div
              className="absolute -inset-1 rounded-3xl blur-2xl opacity-30 pointer-events-none"
              style={{ background: "linear-gradient(135deg, #d39222, #F3D696, #d39222)" }}
            />
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
                  <img
                    src="https://i.vimeocdn.com/video/2145700151-3ab93ca3bba871ba91a5f5dc4c2bbcbab8229fd73c448e654473c74f69cd71a9-d_1280"
                    alt="Hear It From Jerry"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center shadow-2xl"
                      style={{
                        background: "linear-gradient(135deg, #d39222 0%, #FFECBA 50%, #d39222 100%)",
                      }}
                    >
                      <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10 ml-1" fill="#1a1208">
                        <path d="M8 5v14l11-7z" />
                      </svg>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                img: spiritualWarriorImg,
                alt: "Full immersion event experience",
                heading: "Full Immersion",
                subtitle: "No theory. Only transformation.",
                body: "Every session is hands-on. Every practice is designed to create a real, felt shift — not just understanding.",
              },
              {
                img: card4Img,
                alt: "Lasting personal change",
                heading: "Lasting Change",
                subtitle: "You leave a different person.",
                body: "Not motivated for a week. The change is structural — wired into your nervous system, your energy, your way of being.",
              },
              {
                img: card6Img,
                alt: "Proven global results",
                heading: "Proven Results",
                subtitle: "500,000+ lives. 85+ countries.",
                body: "Jerry has spent two decades delivering these results globally. This event is the concentrated best of everything he does.",
              },
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
                  <img
                    src={pillar.img}
                    alt={pillar.alt}
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-8 text-center flex flex-col flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 leading-snug">
                    {pillar.heading}
                  </h3>
                  <p
                    className="text-base font-semibold mb-4 italic"
                    style={{ color: "#d39222" }}
                  >
                    {pillar.subtitle}
                  </p>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {pillar.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA below pillars */}
          <motion.div
            className="text-center mt-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/booking">
              <button
                className="text-base font-bold px-10 py-3 rounded-lg tracking-wide transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97] cursor-pointer shadow-lg"
                style={{
                  background: "linear-gradient(90deg, #d39222 0%, #FFECBA 24.52%, #F3D696 51.93%, #FFECBA 76.93%, #d39222 100%)",
                  color: "#1a1208",
                  border: "none",
                }}
              >
                Secure Your Seat Now
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
      {/* ─── THE CORE OF EVERYTHING ─── */}
      <section className="py-24 md:py-32 px-4" style={{ backgroundColor: "#FDF6E9" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Text side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
            >
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
                {[
                  "Your relationships deepen and align",
                  "Your health responds and regenerates",
                  "Your business and finances move with less resistance",
                  "Your decisions come from clarity, not fear",
                  "You hold the capacity to sustain that expansion — not just feel it for a week",
                ].map((item, i) => (
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

            {/* Image side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              <div
                className="absolute -inset-1 rounded-3xl blur-xl opacity-20 pointer-events-none"
                style={{ background: "linear-gradient(135deg, #d39222, #F3D696, #d39222)" }}
              />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
                <img
                  src={spiritualActivationImg}
                  alt="Energy work"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>
      {/* ─── WHAT YOU'LL WALK AWAY WITH ─── */}
      <section className="py-24 md:py-32 px-4 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">The Real Outcome</span>
            <h2 className="text-3xl md:text-6xl font-bold text-foreground leading-tight mb-4">
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
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-sm uppercase tracking-[0.2em] mb-2" style={{ color: "#d39222" }}>
                    ✦ {item.title}
                  </h3>
                  <p className="text-foreground/75 text-sm leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/programme">
              <button
                className="text-base font-bold px-10 py-3 rounded-lg tracking-wide transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97] cursor-pointer shadow-lg"
                style={{
                  background: "linear-gradient(90deg, #d39222 0%, #FFECBA 24.52%, #F3D696 51.93%, #FFECBA 76.93%, #d39222 100%)",
                  color: "#1a1208",
                  border: "none",
                }}
              >
                Learn Our Programme
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
      {/* ─── WHO THIS IS FOR ─── */}
      <section className="py-16 sm:py-24 md:py-32 px-4" style={{ backgroundColor: "#FDF6E9" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">Is This For You?</span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6 sm:mb-8">
                This Is for You If:
              </h2>
              <div className="space-y-4">
                {forYouItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div
                      className="w-8 h-8 rounded-lg shrink-0 flex items-center justify-center text-sm mt-0.5"
                      style={{
                        background: "linear-gradient(135deg, rgba(184,151,92,0.3), rgba(243,214,150,0.15))",
                        border: "1px solid rgba(184,151,92,0.35)",
                        color: "#d39222",
                      }}
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

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              <div
                className="absolute -inset-1 rounded-3xl blur-xl opacity-20 pointer-events-none"
                style={{ background: "linear-gradient(135deg, #d39222, #F3D696, #d39222)" }}
              />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
                <img
                  src={whoThisIsForImg}
                  alt="Personal transformation energy illustration"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-bold text-lg leading-snug drop-shadow-lg">
                    May 15–17, 2026 · London, UK
                  </p>
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

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div
                className="absolute -inset-1 rounded-3xl blur-xl opacity-20 pointer-events-none"
                style={{ background: "linear-gradient(135deg, #d39222, #F3D696, #d39222)" }}
              />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={jerrySargeantImg}
                  alt="Jerry Sargeant — Forbes Cover"
                  className="w-full h-auto block"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">Your Guide</span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                Jerry Sargeant
              </h2>
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
      {/* ─── PRICING ─── */}
      <section id="pricing" className="py-16 sm:py-24 md:py-32 px-4" style={{ backgroundColor: "#F5F0E8" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4" style={{ color: "#1a1208" }}>
              Choose Your Experience
            </h2>
            <div className="flex items-center justify-center gap-1.5 mt-4">
              <span className="w-6 h-0.5 rounded-full" style={{ backgroundColor: "#d39222" }} />
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#d39222" }} />
              <span className="w-6 h-0.5 rounded-full" style={{ backgroundColor: "#d39222" }} />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">

            {/* General Admission */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0 }}
              className="flex flex-col px-5 py-7 sm:px-6 sm:py-8 md:px-8 md:py-10 rounded-3xl cursor-default"
              style={{ border: "1px solid #d39222" }}
            >
              <div className="flex justify-center mb-5">
                <span className="invisible text-[10px] font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full">Most Popular</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-center" style={{ color: "#1a1208" }}>General Admission</h3>
              <div className="text-center mb-4 sm:mb-6">
                <div className="line-through text-sm mb-1" style={{ color: "#aaa" }}>£444</div>
                <div className="text-4xl sm:text-5xl font-extrabold" style={{ color: "#d39222" }}>£366</div>
                <div className="text-[10px] tracking-[0.2em] uppercase font-semibold mt-2" style={{ color: "#b8a080" }}>Early Bird Price</div>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Full 3-day in-person training",
                  "Access to all workshops, activations, and practices",
                  "Breathwork, energy tools, and embodiment sessions",
                  "Connect with a high-frequency global community",
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
              <a href="https://buy.stripe.com/28E4gzbCU8pT8obd6L9Zm1a" target="_blank" rel="noopener noreferrer">
                <button
                  className="w-full py-3.5 rounded-full text-sm font-bold tracking-wide transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-md bg-primary"
                >
                  Sign Up Now
                </button>
              </a>
            </motion.div>

            {/* VIP Access — featured */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex flex-col px-5 py-7 sm:px-6 sm:py-8 md:px-8 md:py-10 rounded-3xl relative cursor-default"
              style={{ backgroundColor: "#EDE5D5", boxShadow: "0 8px 40px rgba(211,146,34,0.15)" }}
            >
              <div className="flex justify-center mb-5">
                <span
                  className="text-[10px] font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full"
                  style={{ backgroundColor: "#F5F0E8", color: "#d39222", border: "1px solid #d39222" }}
                >
                  Most Popular
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-center" style={{ color: "#1a1208" }}>VIP Access</h3>
              <div className="text-center mb-4 sm:mb-6">
                <div className="line-through text-sm mb-1" style={{ color: "#aaa" }}>£999</div>
                <div className="text-4xl sm:text-5xl font-extrabold" style={{ color: "#d39222" }}>£799</div>
                <div className="text-[10px] tracking-[0.2em] uppercase font-semibold mt-2" style={{ color: "#b8a080" }}>Early Bird Price</div>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Everything in GA AND",
                  "Exclusive Q&A with Jerry & Team",
                  "Premium Seating",
                  "Swag Bag: Tote, Notebook, Sticker",
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
              <a href="https://buy.stripe.com/eVq4gz0Yg5dHawj3wb9Zm1b" target="_blank" rel="noopener noreferrer">
                <button
                  className="w-full py-3.5 rounded-full text-sm font-bold tracking-wide transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-md bg-primary"
                >
                  Get VIP Access
                </button>
              </a>
            </motion.div>

            {/* Elite Package */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col px-5 py-7 sm:px-6 sm:py-8 md:px-8 md:py-10 rounded-3xl cursor-default"
              style={{ border: "1px solid #d39222" }}
            >
              <div className="flex justify-center mb-5">
                <span className="invisible text-[10px] font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full">Most Popular</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-center" style={{ color: "#1a1208" }}>Elite Package</h3>
              <div className="text-center mb-4 sm:mb-6">
                <div className="line-through text-sm mb-1" style={{ color: "#aaa" }}>£1,555</div>
                <div className="text-4xl sm:text-5xl font-extrabold" style={{ color: "#d39222" }}>£1,222</div>
                <div className="text-[10px] tracking-[0.2em] uppercase font-semibold mt-2" style={{ color: "#b8a080" }}>Early Bird Price</div>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Everything in GA, VIP AND",
                  "Upgraded Swag Bag: Water Bottle, Signed Book, \"Elite\" T-Shirt",
                  "Front Row Seating",
                  "Private Dinner with Jerry & Team",
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
              <a href="https://buy.stripe.com/6oU6oH6iAdKd5bZ6In9Zm1c" target="_blank" rel="noopener noreferrer">
                <button
                  className="w-full py-3.5 rounded-full text-sm font-bold tracking-wide transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-md bg-primary"
                >
                  Go Elite
                </button>
              </a>
            </motion.div>

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
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-t-3xl md:rounded-t-none md:rounded-tl-3xl md:rounded-bl-3xl min-h-[240px] md:min-h-[320px]">
                <img
                  src={guaranteeImg}
                  alt="Guarantee"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>

              {/* Text */}
              <div className="px-6 py-8 md:px-14 md:py-14 flex flex-col justify-center">
                {/* Badge — above heading */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-16 h-16 shrink-0 rounded-full flex flex-col items-center justify-center shadow-xl"
                    style={{
                      background: "linear-gradient(135deg, #d39222 0%, #FFECBA 50%, #d39222 100%)",
                    }}
                  >
                    <span className="text-[#1a1208] font-bold text-[8px] uppercase tracking-widest leading-tight text-center px-1">
                      100%<br />Money<br />Back
                    </span>
                  </div>
                  <p className="text-muted-foreground text-xs uppercase tracking-widest">Our Promise to You</p>
                </div>

                <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">Zero Risk</span>
                <h2 className="text-2xl md:text-4xl font-bold text-foreground leading-tight mb-6">
                  Turn up. Give it a morning.
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed mb-4">
                  If by lunchtime on day one this isn't everything you expected — tell a member of our team and we will refund you in full. Right there and then. No forms. No waiting. No questions asked.
                </p>
                <p className="text-muted-foreground text-base leading-relaxed mb-8">
                  We make this promise because we've seen what happens inside that room thousands of times. We're not worried.
                </p>
                <p className="text-foreground font-semibold text-sm italic mb-8">
                  The only risk here is not showing up.
                </p>
                <a
                  href="#pricing"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <button
                    className="text-sm font-bold px-8 py-3 rounded-lg tracking-wide transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97] cursor-pointer"
                    style={{
                      background: "linear-gradient(90deg, #d39222 0%, #FFECBA 24.52%, #F3D696 51.93%, #FFECBA 76.93%, #d39222 100%)",
                      color: "#1a1208",
                      border: "none",
                    }}
                  >
                    Reserve Your Seat — Risk Free
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* ─── VIDEO TESTIMONIAL ─── */}
      <section className="py-24 md:py-32 px-4 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">Real Results. Real People.</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-4">
              Hear It From Someone Who Was There
            </h2>
            <div className="h-px w-20 bg-primary mx-auto mt-6" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div
              className="absolute -inset-1 rounded-3xl blur-2xl opacity-25 pointer-events-none"
              style={{ background: "linear-gradient(135deg, #d39222, #F3D696, #d39222)" }}
            />
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
                  <img
                    src="https://i.vimeocdn.com/video/2141347193-0b89a5c7091846589d4b5fa8b7c2a911df26a2a24cc532bb51d5fb4fd5f84939-d_1280"
                    alt="Caesar's Story"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center shadow-2xl"
                      style={{
                        background: "linear-gradient(135deg, #d39222 0%, #FFECBA 50%, #d39222 100%)",
                      }}
                    >
                      <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10 ml-1" fill="#1a1208">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/gallery">
              <button
                className="text-sm font-bold px-8 py-3 rounded-lg tracking-wide transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97] cursor-pointer shadow-md"
                style={{
                  background: "linear-gradient(90deg, #d39222 0%, #FFECBA 24.52%, #F3D696 51.93%, #FFECBA 76.93%, #d39222 100%)",
                  color: "#1a1208",
                  border: "none",
                }}
              >
                See More Transformation Stories →
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
      {/* ─── BOOKING / CTA ─── */}
      <section className="pt-12 pb-0 md:pt-16 md:pb-0 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="px-6 py-10 md:px-16 md:py-16 text-center shadow-xl"
            style={{
              backgroundColor: "#FDF6E9",
              border: "1px solid rgba(211,146,34,0.25)",
            }}
          >
            <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">Limited Places</span>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6" style={{ color: "#1a1208" }}>
              This Event Is Limited.
            </h2>
            <div className="h-px w-16 mx-auto mb-8" style={{ backgroundColor: "#d39222" }} />
            <p className="text-lg leading-relaxed mb-4 max-w-lg mx-auto" style={{ color: "#3d2f1a" }}>
              Jerry works in a room where every person gets the full experience. Places are strictly capped. When they're gone, they're gone.
            </p>
            <p className="text-base leading-relaxed mb-10" style={{ color: "#7a6040" }}>
              If this is calling you — don't sit on it.
            </p>

            <a
              href="#pricing"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <button
                className="text-base font-bold px-12 py-3.5 rounded-lg tracking-wide transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97] cursor-pointer shadow-lg mb-8"
                style={{
                  background: "linear-gradient(90deg, #d39222 0%, #FFECBA 24.52%, #F3D696 51.93%, #FFECBA 76.93%, #d39222 100%)",
                  color: "#1a1208",
                  border: "none",
                }}
              >
                Reserve Your Seat Now
              </button>
            </a>

          </motion.div>
        </div>
      </section>
      {/* ─── EVENT DETAILS ─── */}
      <section className="pt-12 pb-16 md:pt-16 md:pb-20 px-4" style={{ backgroundColor: "#FDF6E9" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-center mb-10">
              <span className="tracking-[0.35em] text-xs font-bold uppercase block mb-3" style={{ color: "#d39222" }}>Practical Information</span>
              <h2 className="text-2xl md:text-4xl font-bold leading-tight" style={{ color: "#1a1208" }}>Event Details</h2>
              <div className="h-px w-16 mx-auto mt-5" style={{ backgroundColor: "#d39222" }} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "📅", label: "Dates", value: "May 15–17, 2026" },
                { icon: "📍", label: "Location", value: "Radisson Blu Hotel, London Heathrow, 140 Bath Road, Hayes, Middlesex, UB3 5AW" },
                { icon: "🕘", label: "Time", value: "9am – 6pm (local time) w/ 1 hour lunch break" },
                { icon: "🏨", label: "Accommodation & Food", value: "Not Included" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-2xl p-5 text-center bg-white/60"
                  style={{ border: "1px solid rgba(211,146,34,0.2)" }}
                >
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2" style={{ color: "#d39222" }}>{item.label}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "#3d2f1a" }}>{item.value}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-10">
              <p className="text-sm" style={{ color: "#7a6040" }}>
                Got questions?{" "}
                <a
                  href="mailto:admin@starmagichealing.org"
                  className="underline hover:opacity-80 transition-opacity"
                  style={{ color: "#d39222" }}
                >
                  Email us at admin@starmagichealing.org
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
