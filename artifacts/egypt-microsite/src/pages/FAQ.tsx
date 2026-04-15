import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

type FAQItem = {
  q: string;
  a: string;
};

type FAQCategory = {
  label: string;
  items: FAQItem[];
};

const faqCategories: FAQCategory[] = [
  {
    label: "Before You Come",
    items: [
      {
        q: "Is this suitable for beginners?",
        a: "Completely. Whether you've never done anything like this before or you've spent years on this path, the experience meets you exactly where you are. No prior experience in meditation, breathwork, or energy work is required.",
      },
      {
        q: "What should I bring?",
        a: "Comfortable clothing you can move in, an open mind, and a willingness to fully participate. Full details are sent on booking.",
      },
    ],
  },
  {
    label: "Booking & Payment",
    items: [
      {
        q: "Is there a payment plan?",
        a: "Yes. Options are available at checkout. We want this experience to be accessible and we'll do everything we can to make it work for you.",
      },
      {
        q: "What if I can't make it after booking?",
        a: "Contact our team and we'll do everything we can to accommodate you.",
      },
      {
        q: "What is the money-back guarantee?",
        a: "We don't have a standard refund policy — we have something better. If you attend day one and feel it isn't right for you, simply speak to a team member before lunch and you'll receive a full refund on the spot. After that point, all sales are final.",
      },
    ],
  },
  {
    label: "The Event",
    items: [
      {
        q: "Where is the event held?",
        a: "Elite Be Superhuman takes place in London, UK in May 2026. Full venue details are sent to all confirmed attendees.",
      },
      {
        q: "How many people will be in the room?",
        a: "Places are strictly limited to ensure every person gets the full experience. Jerry works in an intentionally small, contained group. When the room is full, that's it.",
      },
    ],
  },
  {
    label: "After the Event",
    items: [
      {
        q: "What happens after the three days?",
        a: "Every practice, tool, and technique you move through is yours to take home and apply daily. You'll also have access to the Star Magic community for ongoing support and connection with people operating at the same frequency.",
      },
    ],
  },
];

function FAQAccordion({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className={`border-b border-border/50 last:border-b-0 transition-colors duration-200 ${isOpen ? "bg-secondary/30" : ""}`}>
      <button
        className="w-full text-left flex items-start justify-between gap-4 py-5 px-6 group"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className={`text-base font-semibold leading-snug transition-colors duration-200 ${isOpen ? "text-primary" : "text-foreground group-hover:text-primary"}`}>
          {item.q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 mt-0.5"
        >
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
            <div className="px-6 pb-6 text-muted-foreground leading-relaxed text-[15px]">
              {item.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggle = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">

      {/* Hero */}
      <motion.div
        className="text-center px-4 mb-20 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">Everything You Need to Know</span>
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-foreground leading-tight mb-6">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-muted-foreground font-light leading-relaxed">
          We know this is a decision that matters. Here are honest answers to the most common questions. If you still have something on your mind, reach out directly.
        </p>
        <div className="h-px w-20 bg-primary mx-auto mt-10" />
      </motion.div>

      {/* FAQ Categories */}
      <div className="px-4 max-w-4xl mx-auto mb-20 space-y-10">
        {faqCategories.map((cat, ci) => (
          <motion.div
            key={ci}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: ci * 0.08 }}
          >
            {/* Category label */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">{cat.label}</span>
              <div className="flex-1 h-px bg-border/50" />
            </div>

            {/* Accordion group */}
            <div className="rounded-2xl border border-border/50 overflow-hidden bg-card shadow-sm">
              {cat.items.map((item, ii) => (
                <FAQAccordion
                  key={ii}
                  item={item}
                  isOpen={!!openItems[`${ci}-${ii}`]}
                  onToggle={() => toggle(`${ci}-${ii}`)}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Guarantee reminder */}
      <motion.div
        className="px-4 max-w-4xl mx-auto mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div
          className="rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8"
          style={{
            background: "linear-gradient(135deg, hsl(42 87% 96%), hsl(38 72% 92%))",
            border: "1px solid rgba(184,151,92,0.35)",
          }}
        >
          <div
            className="w-24 h-24 rounded-full flex flex-col items-center justify-center shadow-lg shrink-0"
            style={{ background: "linear-gradient(135deg, #d39222 0%, #FFECBA 50%, #d39222 100%)" }}
          >
            <span className="text-[#1a1208] font-bold text-[10px] uppercase tracking-wide text-center leading-tight px-2">
              100%<br />Money Back
            </span>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-3">The Guarantee</h3>
            <p className="text-foreground/70 text-base leading-relaxed">
              Turn up. Give it a morning. If by lunchtime on day one this isn't everything you expected, tell a team member and receive a full refund on the spot. No forms. No waiting. No questions asked.
            </p>
          </div>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        className="px-4 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-2xl mx-auto bg-secondary/30 rounded-3xl border border-border/50 p-6 sm:p-10 md:p-12">
          <div className="text-primary text-4xl mb-6">◈</div>
          <h3 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            Still have questions?
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Reach out to our team directly. We'll answer everything and help you decide if Elite Be Superhuman is right for you — with zero pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button size="lg" className="bg-primary text-primary-foreground font-bold text-base px-10 py-2">
                Reserve Your Seat
              </Button>
            </Link>
            <a href="mailto:info@starmagichealing.com">
              <Button size="lg" variant="outline" className="border-border text-foreground hover:border-primary hover:text-primary font-semibold text-base px-10 py-2">
                Contact Our Team
              </Button>
            </a>
          </div>
        </div>
      </motion.div>

    </div>
  );
}
