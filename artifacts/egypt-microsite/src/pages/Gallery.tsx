import { motion } from "framer-motion";
import { useState } from "react";
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

const allImages = [
  { id: 1, src: pyramidsSunset, category: "Temples", alt: "Pyramids at Sunset" },
  { id: 2, src: luxorNight, category: "Temples", alt: "Luxor Temple at Night" },
  { id: 3, src: nileReflection, category: "Nile Experience", alt: "Nile River Reflection" },
  { id: 4, src: abuSimbel, category: "Temples", alt: "Abu Simbel Sunrise" },
  { id: 5, src: templeCeremony, category: "Ceremonies", alt: "Group Ceremony in Temple" },
  { id: 6, src: karnakColumns, category: "Temples", alt: "Karnak Columns" },
  { id: 7, src: sacredLight, category: "Group Moments", alt: "Sacred Light Beams" },
  { id: 8, src: spiritualActivation, category: "Ceremonies", alt: "Spiritual Activation Scene" },
  { id: 9, src: ancientCodes, category: "Temples", alt: "Ancient Codes Wall" },
  { id: 10, src: desertDune, category: "Group Moments", alt: "Abstract Desert Dune" },
  { id: 11, src: pyramidsSunset, category: "Nile Experience", alt: "Mystic Pyramids" },
  { id: 12, src: luxorNight, category: "Group Moments", alt: "Night Gathering" },
];

const categories = ["All", "Temples", "Group Moments", "Ceremonies", "Nile Experience"];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = filter === "All" 
    ? allImages 
    : allImages.filter(img => img.category === filter);

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
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
              <div className="absolute inset-0 bg-background/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-auto object-cover filter grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <p className="text-primary font-serif italic text-lg">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

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
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
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
