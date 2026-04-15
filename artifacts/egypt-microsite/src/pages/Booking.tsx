import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Booking() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <motion.div
        className="text-center px-4 mb-12 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">Limited Places</span>
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-foreground leading-tight mb-6">
          Secure Your Place
        </h1>
        <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-xl mx-auto">
          Elite Be Superhuman · London, UK · May 15–17, 2026
        </p>
        <div className="h-px w-20 bg-primary mx-auto mt-10" />
      </motion.div>

      <motion.div
        className="px-4 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div
          className="rounded-3xl border overflow-hidden shadow-lg"
          style={{ borderColor: "rgba(211,146,34,0.25)" }}
        >
          <div
            className="px-5 py-6 sm:px-8 sm:py-7 text-center"
            style={{
              background: "linear-gradient(135deg, hsl(42 87% 96%), hsl(38 72% 92%))",
              borderBottom: "1px solid rgba(211,146,34,0.2)",
            }}
          >
            <div className="text-primary text-4xl mb-3">✦</div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Book Your Call</h2>
            <p className="text-muted-foreground text-sm max-w-md mx-auto">
              Choose a time that works for you — our team will walk you through everything and secure your seat.
            </p>
          </div>

          <div className="bg-background">
            <iframe
              src="https://meetings.hubspot.com/marie215/elite-be-supehuman?embed=true"
              className="w-full border-0"
              style={{ minHeight: "min(700px, 80vh)" }}
              title="Book a call — Elite Be Superhuman"
              allow="camera; microphone"
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-10 px-4 max-w-4xl mx-auto"
      >
        <div className="p-6 rounded-2xl bg-secondary/30 border border-border/40 text-center">
          <p className="text-muted-foreground text-sm leading-relaxed mb-1">
            Prefer to reach out directly?{" "}
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

      <div className="text-center mt-8">
        <Link href="/" className="text-muted-foreground text-sm hover:text-primary transition-colors">
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
