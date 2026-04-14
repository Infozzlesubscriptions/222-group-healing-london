import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import day1Img from "@assets/Program-and-step-2-scaled_1776165893158.webp";
import day2Img from "@assets/Program-and-step-3-scaled_1776166006733.webp";
import day3Img from "@assets/Program-and-step-4-scaled_1776166120113.webp";

const days = [
  {
    number: "01",
    img: day1Img,
    imgAlt: "Breathwork and nervous system reset session",
    title: "Build the Unbreakable Version of You",
    summary:
      "Day one strips everything back and rebuilds from the ground up. You'll learn to hear and trust your own inner guidance — above the noise of fear, doubt, and other people's opinions. We work through what it means to truly know something versus just believe it, how to take complete ownership of your life without excuses, and how to carry yourself in a way that makes you completely unfazed by judgment, criticism, or chaos.",
    detail:
      "You'll move through practices that reset your nervous system, rewire your stress response, and teach your body to operate from calm, focused power rather than anxiety and reaction.",
    outcome: "By the end of day one, you are grounded. Clear. Unshakeable.",
    topics: [
      "Inner guidance & intuition",
      "Extreme ownership",
      "Unshakeable confidence",
      "Manifestation principles",
      "Breathwork",
      "Nervous system reset",
      "Performance mindset",
    ],
  },
  {
    number: "02",
    img: day2Img,
    imgAlt: "Body upgrade and energy activation",
    title: "Upgrade Your Body and Expand Your Capacity",
    summary:
      "Day two goes deeper. You'll receive a complete Superhuman lifestyle framework — covering breath, food, sleep, meditation, exercise, fasting, cold exposure, and how to regulate your nervous system so your body stops working against you and starts working for you.",
    detail:
      "You'll move through activation practices designed to bring your physical and mental performance to a new baseline — and learn how to operate from higher states of love, clarity, and unity in your everyday life. Not as a concept. As a lived, felt experience. The day closes with a full layered breathwork sequence that cleanses, clears, and elevates the entire system.",
    outcome: "",
    topics: [
      "Superhuman lifestyle protocols",
      "Energy activation practices",
      "Heart-centred performance",
      "Advanced breathwork sequence",
      "Healing exercises",
      "Expanded states of awareness",
    ],
  },
  {
    number: "03",
    img: day3Img,
    imgAlt: "Full system upgrade and transformation",
    title: "Lock In the Upgrade. Step Into the New You.",
    summary:
      "Day three seals everything in. You'll open with a gratitude and heart coherence practice that brings the nervous system into full alignment — one of the most powerful states a human being can access for healing, manifestation, and sustained performance.",
    detail:
      "You'll move through a full system upgrade — a deep transmission-based practice that works at the core of your energy system to dissolve what's been blocking you and fully activate what's been sitting dormant. This is the day everything clicks. The day it becomes real.",
    outcome: "You leave fully upgraded. Fully reset. Ready for the life waiting on the other side.",
    topics: [
      "Heart coherence practice",
      "Gratitude & emotional mastery",
      "Energy reflexology",
      "Full system upgrade transmission",
      "Sacred sound activation",
      "Integration",
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
        <h1 className="md:text-7xl font-bold text-foreground mb-6 text-[48px]">
          Three Days.<br /><span className="whitespace-nowrap">One Complete Transformation.</span>
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
            { name: "Dr. Merlin", id: "REPLACE_MERLIN_ID" },
            { name: "Dr. Maher",  id: "REPLACE_MAHER_ID"  },
            { name: "Dr. Angela", id: "REPLACE_ANGELA_ID" },
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

      {/* Closing statement */}
      <motion.div
        className="mt-20 px-4 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-secondary/40 rounded-3xl border border-border/50 p-10 md:p-14 text-center">
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
          <Link href="/booking">
            <Button
              size="lg"
              className="font-bold text-base px-10 py-2 tracking-wide"
            >
              Reserve Your Seat Now
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
