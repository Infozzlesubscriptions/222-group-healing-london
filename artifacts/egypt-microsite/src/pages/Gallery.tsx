import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

import img1 from "@assets/Brain-Scan-1-scaled_1776169771247.webp";
import img2 from "@assets/Brain-Scan-2-scaled_1776169771247.webp";
import img3 from "@assets/Deep-Trauma-Release-scaled_1776169771248.webp";
import img4 from "@assets/Elite_Be_Superhuman_11-scaled_1776169771249.webp";
import img5 from "@assets/much-more-section-scaled_1776169771249.webp";
import img6 from "@assets/New-Reality-Optimization-Routine-scaled_1776169771250.webp";
import img7 from "@assets/Program-and-step-1-scaled_1776169771250.webp";
import img8 from "@assets/Program-and-step-2-scaled_1776169771251.webp";
import img9 from "@assets/Program-and-step-3-scaled_1776169771251.webp";
import img10 from "@assets/Program-and-step-5-scaled_1776169771253.webp";
import img11 from "@assets/Spiritual-Warrior-Protocol-scaled_1776169771253.webp";
import img12 from "@assets/Superhuman-Blueprint-scaled_1776169771254.webp";

const images = [
  { id: 1, src: img1, alt: "Brain Scan — Reading the Shift" },
  { id: 2, src: img2, alt: "Brain Scan — Deep State" },
  { id: 3, src: img3, alt: "Deep Trauma Release" },
  { id: 4, src: img4, alt: "Connection in the Room" },
  { id: 5, src: img5, alt: "Jerry with Attendee" },
  { id: 6, src: img6, alt: "New Reality Optimization" },
  { id: 7, src: img7, alt: "Healing on the Floor" },
  { id: 8, src: img8, alt: "The Room — Community" },
  { id: 9, src: img9, alt: "The Room in Stillness" },
  { id: 10, src: img10, alt: "Energy Work — Hands Open" },
  { id: 11, src: img11, alt: "Spiritual Warrior Protocol" },
  { id: 12, src: img12, alt: "Jerry — Superhuman Blueprint" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background pt-24 pb-0">

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {images.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative aspect-square overflow-hidden cursor-pointer group rounded-sm"
              onClick={() => setSelectedImage(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>
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
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/60 hover:text-primary transition-colors z-[110]"
            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            src={selectedImage}
            alt="Expanded view"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
