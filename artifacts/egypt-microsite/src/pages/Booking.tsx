import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Booking() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-20">

      <motion.div
        className="text-center px-4 mb-16 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">Limited Places</span>
        <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-none mb-6">
          Secure Your Place
        </h1>
        <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-xl mx-auto">
          Elite Be Superhuman · London, UK · May 2026
        </p>
        <div className="h-px w-20 bg-primary mx-auto mt-10" />
      </motion.div>

      <div className="px-4 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-3xl border border-primary/20 bg-card shadow-lg overflow-hidden"
        >
          <div
            className="px-8 py-7 border-b border-primary/15 text-center"
            style={{ background: "linear-gradient(135deg, hsl(42 87% 96%), hsl(38 72% 92%))" }}
          >
            <div className="text-primary text-4xl mb-3">✦</div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Reserve Your Seat</h2>
            <p className="text-muted-foreground text-sm">Complete the form below — our team will be in touch within 24 hours.</p>
          </div>

          <div className="px-8 py-10 space-y-5">
            {[
              { label: "Full Name", type: "text", placeholder: "Your full name" },
              { label: "Email Address", type: "email", placeholder: "your@email.com" },
              { label: "Phone Number", type: "tel", placeholder: "+44 (0) 000 000 0000" },
            ].map((field) => (
              <div key={field.label}>
                <label className="block text-sm font-semibold text-foreground mb-2">{field.label}</label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-3 rounded-xl border border-border/60 bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200"
                />
              </div>
            ))}

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">What is your biggest reason for attending?</label>
              <textarea
                rows={4}
                placeholder="Tell us what's bringing you here..."
                className="w-full px-4 py-3 rounded-xl border border-border/60 bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200 resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                className="w-full text-base font-bold py-4 rounded-xl tracking-wide transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-md"
                style={{
                  background: "linear-gradient(90deg, #d39222 0%, #FFECBA 24.52%, #F3D696 51.93%, #FFECBA 76.93%, #d39222 100%)",
                  color: "#1a1208",
                  border: "none",
                }}
              >
                Submit My Application
              </button>
              <p className="text-center text-xs text-muted-foreground mt-4 leading-relaxed">
                Payment plan options available · 100% money-back guarantee on day one · Prices and dates confirmed on booking
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 p-6 rounded-2xl bg-secondary/30 border border-border/40 text-center"
        >
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            Have questions before committing? We're happy to talk you through everything.
          </p>
          <a href="mailto:info@starmagichealing.com">
            <Button variant="outline" size="sm" className="border-border hover:border-primary hover:text-primary">
              Email Our Team
            </Button>
          </a>
        </motion.div>

        <div className="text-center mt-8">
          <Link href="/" className="text-muted-foreground text-sm hover:text-primary transition-colors">
            ← Back to home
          </Link>
        </div>
      </div>

    </div>
  );
}
