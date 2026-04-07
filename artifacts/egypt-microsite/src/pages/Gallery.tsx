import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import pyramidsSunset from "@/assets/pyramids-sunset.png";
import luxorNight from "@/assets/luxor-night.png";
import nileReflection from "@/assets/nile-reflection.png";
import abuSimbel from "@/assets/abu-simbel.png";
import templeCeremony from "@/assets/temple-ceremony.png";
import karnakColumns from "@/assets/karnak-columns.png";
import sacredLight from "@/assets/sacred-light.png";
import spiritualActivation from "@/assets/spiritual-activation.png";
import ancientCodes from "@/assets/ancient-codes.png";
import desertDune from "@/assets/desert-dune.png";
import sphinxImg from "@/assets/sphinx.png";
import papyrus from "@/assets/papyrus.png";

import eyeOfHorus from "@assets/image_1775544227935.png";
import groupPyramid from "@assets/image_1775544233059.png";
import hatshepsutTemple from "@assets/image_1775544253314.png";
import productionScreen from "@assets/image_1775544259005.png";
import karnakWalk from "@assets/image_1775544266918.png";
import dockMoment from "@assets/image_1775544334838.png";
import nileInterview from "@assets/image_1775544341300.png";
import groupGiza from "@assets/image_1775544348592.png";
import saqqaraStand from "@assets/image_1775544356457.png";
import tombSilhouette from "@assets/image_1775544506523.png";
import valleyWalk from "@assets/image_1775544513175.png";
import nileHealing from "@assets/image_1775544524365.png";
import nileBoatSession from "@assets/image_1775544543060.png";
import busWindow from "@assets/image_1775544551567.png";
import nilePrayer from "@assets/image_1775544558366.png";
import templeDoorway from "@assets/image_1775544566285.png";
import sunsetSilhouette from "@assets/image_1775544582548.png";
import nileGazing from "@assets/image_1775544591650.png";
import karnakPrayer from "@assets/image_1775544599912.png";
import nightCelebration from "@assets/image_1775544606258.png";
import robesCelebration from "@assets/image_1775544618875.png";

const allImages = [
  { id: 1, src: groupGiza, category: "Group Moments", alt: "The Tribe — All Three Pyramids of Giza" },
  { id: 2, src: sunsetSilhouette, category: "Group Moments", alt: "Tribe Silhouettes at Sunset" },
  { id: 3, src: karnakPrayer, category: "Ceremonies", alt: "Opening to the Sky at Karnak" },
  { id: 4, src: robesCelebration, category: "Ceremonies", alt: "Celebration in Egyptian Robes" },
  { id: 5, src: tombSilhouette, category: "Temples", alt: "Silhouette in the Ancient Tomb" },
  { id: 6, src: nileHealing, category: "Ceremonies", alt: "Healing on the Nile" },
  { id: 7, src: karnakWalk, category: "Temples", alt: "Walking the Great Hypostyle Hall, Karnak" },
  { id: 8, src: nileBoatSession, category: "Ceremonies", alt: "Group Session on the Nile Boat" },
  { id: 9, src: groupPyramid, category: "Group Moments", alt: "Star Magic Tribe at the Pyramid" },
  { id: 10, src: templeDoorway, category: "Temples", alt: "Through the Temple Doorway" },
  { id: 11, src: nilePrayer, category: "Ceremonies", alt: "Prayer on the Nile" },
  { id: 12, src: saqqaraStand, category: "Temples", alt: "At the Step Pyramid of Saqqara" },
  { id: 13, src: nightCelebration, category: "Ceremonies", alt: "Night Celebration" },
  { id: 14, src: valleyWalk, category: "Temples", alt: "Walking the Valley of the Kings" },
  { id: 15, src: busWindow, category: "Group Moments", alt: "First Glimpse of the Pyramid" },
  { id: 16, src: hatshepsutTemple, category: "Temples", alt: "Temple of Hatshepsut" },
  { id: 17, src: eyeOfHorus, category: "Temples", alt: "Eye of Horus — Ancient Stone Carving" },
  { id: 18, src: dockMoment, category: "Group Moments", alt: "By the Nile in Aswan" },
  { id: 19, src: nileInterview, category: "Ceremonies", alt: "Nile Night Interview — One Love, One Heart" },
  { id: 20, src: nileGazing, category: "Nile Experience", alt: "Gazing Over the Nile" },
  { id: 21, src: productionScreen, category: "Ceremonies", alt: "Live Production — Star Magic Recording" },
  { id: 22, src: pyramidsSunset, category: "Temples", alt: "Pyramids at Sunset" },
  { id: 23, src: luxorNight, category: "Temples", alt: "Luxor Temple at Night" },
  { id: 24, src: nileReflection, category: "Nile Experience", alt: "Nile River Reflection" },
  { id: 25, src: abuSimbel, category: "Temples", alt: "Abu Simbel Sunrise" },
  { id: 26, src: templeCeremony, category: "Ceremonies", alt: "Group Ceremony in Temple" },
  { id: 27, src: karnakColumns, category: "Temples", alt: "Karnak Columns" },
  { id: 28, src: sacredLight, category: "Ceremonies", alt: "Sacred Light Beams" },
  { id: 29, src: desertDune, category: "Nile Experience", alt: "Desert at Dawn" },
];

const scrollerImages = [
  groupGiza, sunsetSilhouette, karnakPrayer, robesCelebration, tombSilhouette,
  nileHealing, karnakWalk, nileBoatSession, groupPyramid, templeDoorway,
  nilePrayer, saqqaraStand, nightCelebration, valleyWalk, busWindow,
  karnakPrayer, nileGazing, dockMoment, nileInterview, productionScreen,
  groupGiza, sunsetSilhouette, karnakPrayer, robesCelebration, tombSilhouette,
  nileHealing, karnakWalk, nileBoatSession, groupPyramid, templeDoorway,
  nilePrayer, saqqaraStand, nightCelebration, valleyWalk, busWindow,
  karnakPrayer, nileGazing, dockMoment, nileInterview, productionScreen,
];

const categories = ["All", "Temples", "Group Moments", "Ceremonies", "Nile Experience"];

const years = [
  {
    year: "2026",
    subtitle: "The Initiation",
    hero: pyramidsSunset,
    stats: [
      { value: "52", label: "Pilgrims" },
      { value: "9", label: "Sacred Sites" },
      { value: "15", label: "Days" },
      { value: "7", label: "Countries" },
    ],
    description:
      "The 2026 journey was a quantum leap. From the Great Pyramid meditation at dawn to the Karnak light ceremonies under a full moon, every soul who walked this path left irrevocably changed. Codes were anchored. Contracts were dissolved. A new chapter of life began.",
    gallery: [
      { src: pyramidsSunset, caption: "Great Pyramids at Dawn" },
      { src: karnakColumns, caption: "Karnak Temple Columns" },
      { src: sphinxImg, caption: "The Sphinx Activation" },
      { src: nileReflection, caption: "Nile Sunset Ceremony" },
      { src: sacredLight, caption: "Sacred Light Codes" },
      { src: spiritualActivation, caption: "Group Energy Activation" },
    ],
    testimonials: [
      {
        name: "Sophia M.",
        location: "UK",
        quote:
          "I arrived with a broken heart and left knowing my purpose. The energies at Luxor completely rewired my nervous system. I sobbed for an hour at the temple — they were tears of remembering.",
      },
      {
        name: "David K.",
        location: "USA",
        quote:
          "The pyramid meditation cracked something open in me I didn't know existed. The sacred geometries are real. This was not a trip. This was a resurrection.",
      },
      {
        name: "Amara T.",
        location: "South Africa",
        quote:
          "Nothing touches the raw power of this Egypt journey. The facilitators held space for massive collective healing. I returned home three sizes bigger in my heart.",
      },
    ],
  },
  {
    year: "2025",
    subtitle: "The Awakening",
    hero: abuSimbel,
    stats: [
      { value: "38", label: "Pilgrims" },
      { value: "7", label: "Sacred Sites" },
      { value: "12", label: "Days" },
      { value: "11", label: "Countries" },
    ],
    description:
      "Egypt 2025 was where the foundation was laid. From the towering columns of Abu Simbel to the desert dunes at sunrise, 38 souls gathered to remember who they truly are. The journey sparked awakening in every participant — many reporting profound life changes in the months that followed.",
    gallery: [
      { src: abuSimbel, caption: "Abu Simbel at First Light" },
      { src: luxorNight, caption: "Luxor Temple Night Ritual" },
      { src: desertDune, caption: "Desert Sunrise Meditation" },
      { src: templeCeremony, caption: "Sacred Temple Ceremony" },
      { src: papyrus, caption: "Ancient Knowledge Codes" },
      { src: ancientCodes, caption: "Decoding the Ancients" },
    ],
    testimonials: [
      {
        name: "Elena R.",
        location: "Spain",
        quote:
          "When the golden light hit at Saqqara, I remembered everything. I am forever changed by the depth of this initiation. No words can fully capture what happened.",
      },
      {
        name: "James W.",
        location: "Australia",
        quote:
          "I came as a sceptic and left as a believer — not in religion, but in the infinite capacity of the human spirit. The 2025 tour rearranged my DNA.",
      },
      {
        name: "Priya L.",
        location: "India",
        quote:
          "The desert sunrise meditation on day four was worth the entire journey alone. I've never felt so at one with the Earth. My healing practice transformed completely afterwards.",
      },
    ],
  },
];

function YearSection({
  data,
  index,
  onImageClick,
}: {
  data: typeof years[0];
  index: number;
  onImageClick: (src: string) => void;
}) {
  const isEven = index % 2 === 0;

  return (
    <section className={`py-24 md:py-32 relative overflow-hidden ${index % 2 === 1 ? "bg-secondary/20" : ""}`}>
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden
      >
        <span className="text-[20vw] font-bold text-foreground/[0.03] leading-none" style={{ fontFamily: "Poppins, sans-serif" }}>
          {data.year}
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-3">Egypt</span>
          <h2 className="text-6xl md:text-8xl font-bold font-sans text-foreground leading-none mb-2">{data.year}</h2>
          <p className="text-primary text-2xl font-light tracking-wide italic">{data.subtitle}</p>
          <div className="h-px w-20 bg-primary mx-auto mt-8" />
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {data.stats.map((stat, i) => (
            <div key={i} className="bg-card rounded-2xl p-6 text-center shadow-sm">
              <div className="text-4xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-10 items-center mb-16`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex-1 min-w-0">
            <p className="text-lg text-muted-foreground leading-relaxed font-light">{data.description}</p>
          </div>
          <div className="flex-1 min-w-0 w-full">
            <div
              className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] cursor-pointer"
              onClick={() => onImageClick(data.hero)}
            >
              <img src={data.hero} alt={`Egypt ${data.year}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white/80 text-sm tracking-widest uppercase font-semibold">
                Egypt {data.year}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-center text-sm uppercase tracking-[0.3em] text-primary font-bold mb-8">Photo Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {data.gallery.map((photo, i) => (
              <motion.div
                key={i}
                className={`relative overflow-hidden rounded-xl shadow-md group cursor-pointer ${i === 0 ? "col-span-2 md:col-span-1 md:row-span-2" : ""}`}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                onClick={() => onImageClick(photo.src)}
              >
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${i === 0 ? "h-56 md:h-full md:min-h-[340px]" : "h-44 md:h-48"}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white text-xs font-medium tracking-wide">{photo.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-center text-sm uppercase tracking-[0.3em] text-primary font-bold mb-10">Voices from the Journey</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="bg-card rounded-2xl p-8 shadow-sm flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="text-primary text-2xl mb-4">❝</div>
                <p className="text-muted-foreground leading-relaxed flex-1 italic mb-6">{t.quote}</p>
                <div className="border-t border-border/50 pt-4">
                  <div className="font-semibold text-foreground text-sm">{t.name}</div>
                  <div className="text-primary text-xs tracking-widest uppercase">{t.location}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = filter === "All" ? allImages : allImages.filter((img) => img.category === filter);

  return (
    <div className="min-h-screen bg-background pt-24 pb-0">

      {/* ── GALLERY ── */}
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">Sacred Archive</span>
          <h1 className="text-5xl md:text-7xl font-sans text-foreground mb-4">Gallery & Past Journeys</h1>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            Glimpses of the unseen. Echoes of the eternal.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-sans tracking-widest text-sm uppercase transition-all duration-300 ${
                filter === cat
                  ? "bg-primary text-primary-foreground font-bold shadow-lg shadow-primary/20"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border"
              }`}
              data-testid={`filter-${cat.toLowerCase().replace(" ", "-")}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6" layout>
          {filteredImages.map((img) => (
            <motion.div
              key={img.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="relative overflow-hidden group cursor-pointer break-inside-avoid border border-border/30"
              onClick={() => setSelectedImage(img.src)}
            >
              <div className="absolute inset-0 bg-background/30 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-cover filter grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-background via-background/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <p className="text-primary font-sans italic">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

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

      {/* ── PAST JOURNEYS ── */}
      <div className="mt-24 border-t border-border/40">
        <motion.div
          className="text-center py-16 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">Sacred Archive</span>
          <h2 className="text-5xl md:text-7xl font-sans font-bold text-foreground mb-4">Past Journeys</h2>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            Every year, a group of extraordinary souls gathers in the land of the Pharaohs. These are their stories.
          </p>
          <div className="h-px w-20 bg-primary mx-auto mt-10" />
        </motion.div>

        {/* Year jump nav */}
        <div className="sticky top-[72px] z-40 bg-background/90 backdrop-blur-md border-y border-border/40 py-3">
          <div className="max-w-6xl mx-auto px-4 flex items-center justify-center gap-8">
            {years.map((y) => (
              <a
                key={y.year}
                href={`#year-${y.year}`}
                className="text-sm font-semibold tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors"
              >
                Egypt {y.year}
              </a>
            ))}
          </div>
        </div>

        {years.map((year, i) => (
          <div key={year.year} id={`year-${year.year}`}>
            <YearSection data={year} index={i} onImageClick={setSelectedImage} />
            {i < years.length - 1 && <div className="h-px max-w-4xl mx-auto bg-border/40" />}
          </div>
        ))}
      </div>

      {/* CTA Banner */}
      <section className="py-28 px-4 bg-secondary text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />
        <motion.div
          className="max-w-3xl mx-auto relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary tracking-[0.3em] text-xs font-bold uppercase block mb-6">The Next Chapter</span>
          <h2 className="text-4xl md:text-6xl font-bold font-sans text-foreground mb-6 leading-snug">
            Your name belongs<br />on this list.
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Join us for Egypt 2027 — 15 days of sacred initiation, ancient power, and lifelong transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/join-2027">
              <Button size="lg" className="bg-primary text-primary-foreground font-bold text-lg px-10 py-2">
                Join Egypt 2027
              </Button>
            </Link>
            <Link href="/journey">
              <Button size="lg" variant="outline" className="border-primary text-primary font-semibold text-lg px-10 py-2">
                View the Journey
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
