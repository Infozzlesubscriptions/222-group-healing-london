import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import day1Img from "@assets/Program-and-step-2-scaled_1776165893158.webp";
import day2Img from "@assets/Program-and-step-3-scaled_1776166006733.webp";
import day3Img from "@assets/Program-and-step-4-scaled_1776166120113.webp";
import brainScanImg from "@assets/image_1776252123367.png";
import impactImg from "@assets/71012442-3639-45bd-a896-8384cce59ec3_1776252214437.png";

const days = [
  {
    number: "01",
    img: day1Img,
    imgAlt: "Quantum meditation and frequency activation session",
    title: "Rewire Your Foundation",
    summary:
      "Day one breaks you down and rebuilds you from within. You'll learn to trust your inner guidance, take full ownership of your life, and become mentally unshakeable.",
    detail:
      "Through powerful practices, you reset your nervous system, rewire stress patterns, and step into calm, focused power.",
    outcome: "By the end of Day 1: You are grounded, clear, and unshakeable.",
    topics: [
      "Quantum meditation & frequency activation",
      "Transformational breathwork (Star Magic)",
      "The 4 Pillars of Impact",
      "Recode your biological system",
      "Krystal Spiral vs Fibonacci",
      "Build your new internal operating system",
    ],
  },
  {
    number: "02",
    img: day2Img,
    imgAlt: "Body upgrade and energy activation",
    title: "Build Your Superhuman State",
    summary:
      "Day two upgrades your body and expands your capacity. You'll learn how to align your lifestyle, energy, and performance so your system works for you — not against you.",
    detail:
      "Through deep activation practices, you elevate your physical, mental, and emotional baseline, operating from clarity, strength, and higher awareness.",
    outcome: "By the end of Day 2: You are stronger, sharper, and in control.",
    topics: [
      "Breathwork & meditation activation",
      "Discipline, ownership & warrior mindset",
      "Upgrade energetic hygiene",
      "Train resilience & emotional control",
      "Daily optimization: nutrition, movement, recovery",
      "Expanded awareness",
    ],
  },
  {
    number: "03",
    img: day3Img,
    imgAlt: "Full system upgrade and transformation",
    title: "Lock In Your Transformation",
    summary:
      "Day three seals the transformation. You integrate everything at a deep level — mentally, physically, and energetically.",
    detail:
      "Through powerful alignment and activation practices, you clear what's blocking you and fully step into your highest state.",
    outcome: "By the end of Day 3: You are fully upgraded, aligned, and ready.",
    topics: [
      "Qigong, movement & integration",
      "Fear vs Love mastery",
      "Sexual energy alignment",
      "Heart & higher energy activation",
      "Reality optimization (Star Magic method)",
      "Personal daily protocol",
    ],
  },
];

export default function Programme() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      {/* Hero */}
      <motion.div
        className="text-center px-4 mb-20 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">Elite Be Superhuman</span>
        <h1 className="text-3xl sm:text-[48px] md:text-7xl font-bold text-foreground mb-6">
          Three Days.<br /><span className="sm:whitespace-nowrap">One Complete Transformation.</span>
        </h1>
        <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
          Every practice, every session, every experience over these three days is built around one outcome: you leave operating from a state of complete wholeness.
        </p>
        <div className="h-px w-20 bg-primary mx-auto mt-10" />
      </motion.div>
      {/* Days */}
      <div className="px-4 max-w-7xl mx-auto space-y-10">
        {days.map((day, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="rounded-3xl border border-primary/20 bg-card shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2"
          >
            {/* Image */}
            <div className="relative w-full min-h-[280px] lg:min-h-[480px] overflow-hidden">
              <img
                src={day.img}
                alt={day.imgAlt}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              {/* Day badge overlaid on image */}
              <div className="absolute top-6 left-6">
                <div
                  className="w-16 h-16 rounded-2xl flex flex-col items-center justify-center shadow-lg"
                  style={{
                    background: "linear-gradient(135deg, #d39222 0%, #FFECBA 50%, #d39222 100%)",
                    color: "#1a1208",
                  }}
                >
                  <span className="text-[10px] font-bold uppercase tracking-widest leading-none">Day</span>
                  <span className="text-2xl font-bold leading-none mt-0.5">{parseInt(day.number)}</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 lg:block hidden" />
            </div>

            {/* Content */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <p className="text-primary text-xs font-bold uppercase tracking-[0.35em] mb-3">Day {parseInt(day.number)}</p>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-snug mb-6">
                {day.title}
              </h2>
              <div className="h-px w-12 mb-6" style={{ background: "#d39222" }} />
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-3">{day.summary}</p>
              {day.detail && (
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4">{day.detail}</p>
              )}
              {day.outcome && (
                <p className="text-foreground font-semibold text-sm leading-relaxed italic mb-6">
                  "{day.outcome}"
                </p>
              )}
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
      {/* ─── WHAT THE EXPERTS SAY ─── */}
      <div className="mt-24 px-4 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">Peer Endorsements</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-4">
            What the Experts Say
          </h2>
          <div className="h-px w-20 bg-primary mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Dr. Merlin", id: "1161753909" },
            { name: "Dr. Maher",  id: "1161753427"  },
            { name: "Dr. Angela", id: "1161753289" },
          ].map((expert, i) => (
            <motion.div
              key={expert.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="flex flex-col"
            >
              <div
                className="relative rounded-2xl overflow-hidden shadow-xl"
                style={{ border: "1px solid rgba(211,146,34,0.4)", aspectRatio: "16/9" }}
              >
                {/* Glow */}
                <div
                  className="absolute -inset-1 rounded-2xl blur-xl opacity-20 pointer-events-none"
                  style={{ background: "linear-gradient(135deg, #d39222, #FFECBA, #d39222)" }}
                />
                <iframe
                  src={`https://player.vimeo.com/video/${expert.id}?badge=0&autopause=0&quality_selector=1&player_id=0&app_id=58479`}
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  className="absolute inset-0 w-full h-full"
                  title={`${expert.name} testimonial`}
                  style={{ border: 0 }}
                />
              </div>
              <p className="text-center text-foreground font-semibold mt-4 tracking-wide">{expert.name}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ─── THE SCIENCE BEHIND IT ALL ─── */}
      <div className="mt-24 px-4 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">Backed by Data</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-4">
            The Science Behind It All…
          </h2>
          <div className="h-px w-20 bg-primary mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden shadow-xl"
          >
            <img
              src={brainScanImg}
              alt="Live brain scan during the event"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 via-[#0a1628]/60 to-[#0a1628]/30" />
            <div className="relative p-8 sm:p-10 flex flex-col justify-end min-h-[320px] sm:min-h-[360px]">
              <h3
                className="text-xl sm:text-2xl font-bold italic mb-4"
                style={{ color: "#F3D696" }}
              >
                We've Conducted Live Brain Scans
              </h3>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                After just hours of this work, participants showed measurable decreases in beta brainwaves associated with stress and overthinking, along with significant increases in theta and delta brainwaves linked to healing, intuition, and deep nervous system regulation.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative rounded-3xl overflow-hidden shadow-xl"
          >
            <img
              src={impactImg}
              alt="The measurable impact of the work"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 via-[#0a1628]/60 to-[#0a1628]/30" />
            <div className="relative p-8 sm:p-10 flex flex-col justify-end min-h-[320px] sm:min-h-[360px]">
              <h3
                className="text-xl sm:text-2xl font-bold italic mb-4"
                style={{ color: "#F3D696" }}
              >
                The Impact
              </h3>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-4">
                These shifts create a stable internal foundation for emotional resilience, clearer thinking, faster recovery, and a stronger sense of presence.
              </p>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                The brain, heart & energy enter coherence, your body self-regulates. From that state anything you want to create happens ten fold.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ─── EXPERIENCE / WALK AWAY / WHO IT'S FOR ─── */}
      <div className="mt-24 px-4 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">The Full Picture</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-4">
            Everything You Need to Know
          </h2>
          <div className="h-px w-20 bg-primary mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

          {/* What You Experience */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0 }}
            className="rounded-3xl overflow-hidden flex flex-col cursor-default transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/50"
            style={{ background: "#FDF6E9", border: "1px solid rgba(211,146,34,0.25)" }}
          >
            <div className="px-8 pt-8 pb-6" style={{ borderBottom: "1px solid rgba(211,146,34,0.2)" }}>
              <h3 className="text-xl md:text-2xl font-bold leading-snug" style={{ color: "#1a1208" }}>What You Experience</h3>
            </div>
            <div className="px-8 py-7 flex flex-col flex-1">
              <ul className="space-y-3 flex-1 mb-6">
                {[
                  "Breathwork sessions to shift energy and build inner fire",
                  "Qigong & Energetic techniques for heart-mind coherence",
                  "Immersive energy work that shifts your state and rewires your nervous system instantly",
                  "Powerful activations, meditations, and energy protocols to lock it all in",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm leading-snug" style={{ color: "#3d2f1a" }}>
                    <span style={{ color: "#d39222" }} className="shrink-0 mt-0.5">●</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm italic font-semibold leading-snug" style={{ color: "#d39222" }}>
                You experience a full recalibration to lock you into your next level!
              </p>
            </div>
          </motion.div>

          {/* What You Walk Away With — featured */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-3xl overflow-hidden flex flex-col cursor-default transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/50"
            style={{ background: "#FDF6E9", border: "1px solid #d39222", boxShadow: "0 8px 40px rgba(211,146,34,0.15)" }}
          >
            <div className="px-8 pt-8 pb-6" style={{ borderBottom: "1px solid rgba(211,146,34,0.3)" }}>
              <h3 className="text-xl md:text-2xl font-bold leading-snug" style={{ color: "#1a1208" }}>What You Walk Away With</h3>
            </div>
            <div className="px-8 py-7 flex flex-col flex-1">
              <ul className="space-y-3 flex-1 mb-6">
                {[
                  "You receive a personalised Superhuman protocol to follow daily",
                  "How to supercharge & reset your nervous system",
                  "You align your health, wealth & relationships with your dream life",
                  "You master state-shifting breathwork and energetic resets on demand",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm leading-snug" style={{ color: "#3d2f1a" }}>
                    <span style={{ color: "#d39222" }} className="shrink-0 mt-0.5">●</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm italic font-semibold leading-snug" style={{ color: "#d39222" }}>
                You walk away unshakable — in command of reality like never before!
              </p>
            </div>
          </motion.div>

          {/* Who This Is For */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-3xl overflow-hidden flex flex-col cursor-default transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/50"
            style={{ background: "#FDF6E9", border: "1px solid rgba(211,146,34,0.25)" }}
          >
            <div className="px-8 pt-8 pb-6" style={{ borderBottom: "1px solid rgba(211,146,34,0.2)" }}>
              <h3 className="text-xl md:text-2xl font-bold leading-snug" style={{ color: "#1a1208" }}>Who This Is For</h3>
            </div>
            <div className="px-8 py-7 flex flex-col flex-1">
              <ul className="space-y-3 flex-1 mb-6">
                {[
                  "You're a high-performer operating below capacity due to burnout",
                  "You've done the work, but still feel misaligned, foggy, or reactive",
                  "You're ready to align health, wealth, and energy",
                  "You're tired of temporary highs, chasing clarity, or collapsing under pressure",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm leading-snug" style={{ color: "#3d2f1a" }}>
                    <span style={{ color: "#d39222" }} className="shrink-0 mt-0.5">●</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm italic font-semibold leading-snug" style={{ color: "#d39222" }}>
                This is for the ones who are READY to live from their Superhuman Self!
              </p>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Closing statement */}
      <motion.div
        className="mt-20 px-4 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-secondary/40 rounded-3xl border border-border/50 p-6 sm:p-10 md:p-14 text-center">
          <div className="text-primary text-3xl mb-6">✦</div>
          <h3 className="text-2xl md:text-4xl font-bold text-foreground mb-6 leading-snug">
            This Is Not a Weekend You Attend and Forget.
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4 max-w-2xl mx-auto">
            Everything you move through over these three days is designed to be lived. Every practice, every tool, every technique is yours to take home and apply daily. Because the real work doesn't end when you walk out of the room.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4 max-w-2xl mx-auto">
            When you have the right tools — and you use them — your frequency doesn't just hold. It keeps rising. Day by day, week by week, you become more of who you truly are. Sharper. Clearer. More present. More powerful.
          </p>
          <p className="text-foreground font-semibold text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            And from that place, the ripple goes further than you. You become of greater service to yourself. To your family. To your community. To the world.
          </p>
          <div className="h-px w-20 bg-primary mx-auto my-8" />
          <p className="text-primary font-bold text-lg italic mb-8">
            That is the real outcome of Elite Be Superhuman. Not a weekend high. A permanent elevation.
          </p>
          <Link href="/#pricing">
            <Button
              size="lg"
              className="font-bold text-base px-10 py-2 tracking-wide"
            >
              Reserve Your Seat Now
            </Button>
          </Link>
        </div>
      </motion.div>

      {/* Event Details */}
      <div className="mt-16 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-center mb-10">
              <span className="tracking-[0.35em] text-xs font-bold uppercase block mb-3" style={{ color: "#d39222" }}>Practical Information</span>
              <h2 className="text-2xl md:text-4xl font-bold leading-tight text-foreground">Event Details</h2>
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
                  className="rounded-2xl p-5 text-center"
                  style={{ backgroundColor: "#FDF6E9", border: "1px solid rgba(211,146,34,0.2)" }}
                >
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2" style={{ color: "#d39222" }}>{item.label}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.value}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-10">
              <p className="text-sm text-muted-foreground">
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
      </div>
    </div>
  );
}
