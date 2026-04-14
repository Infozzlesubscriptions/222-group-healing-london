import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const days = [
  {
    number: "01",
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
        className="text-center px-4 mb-20 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">Elite Be Superhuman</span>
        <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-none mb-6">
          Three Days. One Complete Transformation.
        </h1>
        <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
          Every practice, every session, every experience over these three days is built around one outcome: you leave operating from a state of complete wholeness.
        </p>
        <div className="h-px w-20 bg-primary mx-auto mt-10" />
      </motion.div>

      {/* Days */}
      <div className="px-4 max-w-5xl mx-auto space-y-10">
        {days.map((day, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="rounded-3xl border border-primary/20 bg-card shadow-lg overflow-hidden"
          >
            {/* Day header */}
            <div
              className="px-8 py-7 border-b border-primary/15"
              style={{ background: "linear-gradient(135deg, hsl(42 87% 96%), hsl(38 72% 92%))" }}
            >
              <div className="flex items-start gap-5">
                <div
                  className="shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold shadow-md"
                  style={{
                    background: "linear-gradient(90deg, #B8975C 0%, #FFECBA 24.52%, #F3D696 51.93%, #FFECBA 76.93%, #B8985D 100%)",
                    color: "#1a1208",
                  }}
                >
                  {day.number}
                </div>
                <div>
                  <p className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-1">Day {parseInt(day.number)}</p>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-snug">{day.title}</h2>
                </div>
              </div>
            </div>

            {/* Day body */}
            <div className="px-8 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Description */}
              <div>
                <p className="text-muted-foreground leading-relaxed mb-4">{day.summary}</p>
                {day.detail && (
                  <p className="text-muted-foreground leading-relaxed mb-4">{day.detail}</p>
                )}
                {day.outcome && (
                  <p className="text-foreground font-semibold text-base leading-relaxed italic">
                    "{day.outcome}"
                  </p>
                )}
              </div>

              {/* Topics */}
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4">What's Covered</p>
                <ul className="space-y-3">
                  {day.topics.map((topic, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <span
                        className="w-7 h-7 rounded-lg shrink-0 flex items-center justify-center text-xs"
                        style={{
                          background: "linear-gradient(135deg, rgba(184,151,92,0.3), rgba(243,214,150,0.15))",
                          border: "1px solid rgba(184,151,92,0.35)",
                          color: "#B8975C",
                        }}
                      >
                        ✦
                      </span>
                      <span className="text-foreground/85 text-sm leading-snug">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Closing statement */}
      <motion.div
        className="mt-20 px-4 max-w-4xl mx-auto"
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
