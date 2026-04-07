import { motion } from "framer-motion";
import { useState, useRef } from "react";
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

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const isPaused = useRef(false);

  const filteredImages = filter === "All"
    ? allImages
    : allImages.filter(img => img.category === filter);

  return (
    <div className="min-h-screen bg-background pt-24 pb-0">
      <div className="max-w-6xl mx-auto px-4">

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-serif text-foreground mb-6">Sacred Moments</h1>
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
              className={`px-6 py-2 rounded-full font-serif tracking-widest text-sm uppercase transition-all duration-300 ${
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
        <motion.div
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
          layout
        >
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
                <p className="text-primary font-serif italic">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Auto-Scroll Strip */}
      <div className="mt-24 pb-0">
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

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-foreground/50 hover:text-primary transition-colors z-[110]"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
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
