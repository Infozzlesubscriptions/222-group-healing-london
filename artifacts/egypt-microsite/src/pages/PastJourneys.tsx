import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import pyramidsSunset from "@/assets/pyramids-sunset.png";
import karnakColumns from "@/assets/karnak-columns.png";
import sphinxImg from "@/assets/sphinx.png";
import nileReflection from "@/assets/nile-reflection.png";
import abuSimbel from "@/assets/abu-simbel.png";
import luxorNight from "@/assets/luxor-night.png";
import desertDune from "@/assets/desert-dune.png";
import templeCeremony from "@/assets/temple-ceremony.png";
import papyrus from "@/assets/papyrus.png";
import ancientCodes from "@/assets/ancient-codes.png";
import sacredLight from "@/assets/sacred-light.png";
import spiritualActivation from "@/assets/spiritual-activation.png";

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

function YearSection({ data, index }: { data: typeof years[0]; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Year watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden
      >
        <span
          className="text-[20vw] font-bold text-foreground/[0.03] leading-none"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          {data.year}
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Year header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-3">
            Egypt
          </span>
          <h2 className="text-6xl md:text-8xl font-bold font-sans text-foreground leading-none mb-2">
            {data.year}
          </h2>
          <p className="text-primary text-2xl font-light tracking-wide italic">
            {data.subtitle}
          </p>
          <div className="h-px w-20 bg-primary mx-auto mt-8" />
        </motion.div>

        {/* Stats bar */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {data.stats.map((stat, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-6 text-center shadow-sm"
            >
              <div className="text-4xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Description + hero image side by side */}
        <motion.div
          className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-10 items-center mb-16`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex-1 min-w-0">
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              {data.description}
            </p>
          </div>
          <div className="flex-1 min-w-0 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <img
                src={data.hero}
                alt={`Egypt ${data.year}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white/80 text-sm tracking-widest uppercase font-semibold">
                Egypt {data.year}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Photo gallery grid */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-center text-sm uppercase tracking-[0.3em] text-primary font-bold mb-8">
            Photo Gallery
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {data.gallery.map((photo, i) => (
              <motion.div
                key={i}
                className={`relative overflow-hidden rounded-xl shadow-md group ${
                  i === 0 ? "col-span-2 md:col-span-1 md:row-span-2" : ""
                }`}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                    i === 0 ? "h-56 md:h-full md:min-h-[340px]" : "h-44 md:h-48"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white text-xs font-medium tracking-wide">{photo.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-center text-sm uppercase tracking-[0.3em] text-primary font-bold mb-10">
            Voices from the Journey
          </h3>
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
                <p className="text-muted-foreground leading-relaxed flex-1 italic mb-6">
                  {t.quote}
                </p>
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

export default function PastJourneys() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-0">
      {/* Page Hero */}
      <section className="relative py-20 px-4 overflow-hidden text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">
            Sacred Archive
          </span>
          <h1 className="font-bold font-sans text-foreground mb-4 text-[56px] md:text-7xl leading-none">
            Past Journeys
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Every year, a group of extraordinary souls gathers in the land of the Pharaohs.
            These are their stories.
          </p>
          <div className="h-px w-20 bg-primary mx-auto mt-10" />
        </motion.div>
      </section>

      {/* Year divider nav */}
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

      {/* Year sections */}
      {years.map((year, i) => (
        <div key={year.year} id={`year-${year.year}`} className={i % 2 === 1 ? "bg-secondary/20" : ""}>
          <YearSection data={year} index={i} />
          {i < years.length - 1 && (
            <div className="h-px max-w-4xl mx-auto bg-border/40" />
          )}
        </div>
      ))}

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
          <span className="text-primary tracking-[0.3em] text-xs font-bold uppercase block mb-6">
            The Next Chapter
          </span>
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
    </div>
  );
}
