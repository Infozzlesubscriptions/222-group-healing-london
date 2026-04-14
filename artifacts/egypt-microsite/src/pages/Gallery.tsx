import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

import galleryGroup from "@assets/community-group-ORD4DYoj_1776168740414.jpg";
import galleryBrainScan1 from "@assets/Brain-Scan-1-scaled_1776168740415.webp";
import galleryBrainScan2 from "@assets/Brain-Scan-2-scaled_1776168740416.webp";
import galleryDeepTrauma from "@assets/Deep-Trauma-Release-scaled_1776168740416.webp";
import galleryGroupHug from "@assets/Elite_Be_Superhuman_13-scaled_1776168740417.webp";
import galleryEventOverview from "@assets/event-overview_1776168740418.webp";
import galleryNewReality from "@assets/New-Reality-Optimization-Routine-scaled_1776168740419.webp";
import galleryStep1 from "@assets/Program-and-step-1-scaled_1776168740419.webp";
import galleryStep3 from "@assets/Program-and-step-3-scaled_1776168740420.webp";
import galleryStep5 from "@assets/Program-and-step-5-scaled_1776168740421.webp";
import galleryQuantum from "@assets/Quantum-Meditations-scaled_1776168740425.webp";
import gallerySpiritual from "@assets/Spiritual-Warrior-Protocol-scaled_1776168740425.webp";
import galleryBlueprint from "@assets/Superhuman-Blueprint-scaled_1776168740426.webp";
import galleryEnergy from "@assets/Unshakable-Energy-scaled_1776168740427.webp";


const scrollerImages = [
  galleryGroup, galleryEventOverview, galleryGroupHug, galleryQuantum, galleryBlueprint,
  galleryStep3, galleryDeepTrauma, galleryNewReality, galleryEnergy, gallerySpiritual,
  galleryBrainScan1, galleryBrainScan2, galleryStep1, galleryStep5, galleryGroupHug,
  galleryGroup, galleryEventOverview, galleryGroupHug, galleryQuantum, galleryBlueprint,
  galleryStep3, galleryDeepTrauma, galleryNewReality, galleryEnergy, gallerySpiritual,
  galleryBrainScan1, galleryBrainScan2, galleryStep1, galleryStep5, galleryGroupHug,
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background pt-24 pb-0">

      {/* Auto-Scroll Strip */}
      <div className="mt-24">
        <motion.div
          className="text-center mb-8 px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary tracking-[0.3em] text-xs font-bold uppercase">2026 Journey — In Moments</span>
        </motion.div>
        <div
          className="relative overflow-hidden"
          style={{ maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)" }}
        >
          <div className="flex gap-4 animate-marquee w-max">
            {scrollerImages.map((src, i) => (
              <div
                key={i}
                className="shrink-0 w-72 h-48 overflow-hidden cursor-pointer border border-border/20 hover:border-primary/50 transition-colors duration-300"
                onClick={() => setSelectedImage(src)}
              >
                <img
                  src={src}
                  alt={`Moment ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Banner */}
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
            <Link href="/booking">
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

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-foreground/50 hover:text-primary transition-colors z-[110]"
            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            src={selectedImage}
            alt="Expanded view"
            className="max-w-full max-h-[90vh] object-contain border border-primary/20 shadow-2xl shadow-primary/10"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
