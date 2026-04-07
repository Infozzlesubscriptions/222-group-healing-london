import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import templeCeremony from "@/assets/temple-ceremony.png";
import karnakColumns from "@/assets/karnak-columns.png";
import luxorNight from "@/assets/luxor-night.png";
import abuSimbel from "@/assets/abu-simbel.png";
import nileReflection from "@/assets/nile-reflection.png";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const itinerary = [
  { day: "Day 1", title: "Arrival in Cairo", desc: "Arrive in Cairo and meet the Star Magic Team. Transfers to your hotel in Memphis, where the journey of a lifetime begins. Settle in and share an evening al fresco meal together as a tribe.", quote: "\"I felt an instant soul recognition with strangers who quickly became family.\"", image: templeCeremony },
  { day: "Day 2", title: "Tribe Meeting & Sphinx Sunset", desc: "Breakfast together as a group, then spend the morning in deep connection and intention-setting with the tribe. In the afternoon, be guided into the presence of the Great Sphinx of Giza — a moment of ancient recognition that words cannot capture.", quote: "\"Standing before the Sphinx, I understood why I had come.\"", image: luxorNight },
  { day: "Day 3", title: "Luxor Temple & Seti Temple", desc: "Fly to Luxor and step into one of the most celebrated sacred sites in the world. The illuminated columns of Luxor Temple hold thousands of years of initiation energy. An evening visit to Seti Temple deepens the transmission.", quote: "\"The temple felt alive, as if the stones themselves were breathing with us.\"", image: karnakColumns },
  { day: "Day 4", title: "Unfinished Obelisk & Aswan Market", desc: "An afternoon visit to the famous Unfinished Obelisk reveals the hidden mastery of ancient builders. Explore the Nubian market, where authentic spices, herbs, and local crafts carry the living spirit of this land.", quote: "\"Every stone here holds a story older than memory.\"", image: abuSimbel },
  { day: "Day 5", title: "Abu Simbel Temples", desc: "An early morning journey to the monumental Abu Simbel Temples — carved into the cliffside and aligned perfectly with the sun twice a year. Standing before the great statues of Ramses II, we anchored solar codes of sovereignty and power.", quote: "\"I have never felt so small, yet so infinitely powerful.\"", image: abuSimbel },
  { day: "Day 6", title: "Isis Temple & Kom Ombo", desc: "Visit the exquisite Philae Temple — the Island of Isis — rising from the waters of the Nile. Continue to the dual Temple of Kom Ombo, dedicated to Sobek the crocodile god and Horus the Elder. A journey into sacred duality.", quote: "\"The feminine power of Isis moved through me like a wave I couldn't resist.\"", image: nileReflection },
  { day: "Day 7", title: "Temple of Horus at Edfu", desc: "Travel from Aswan toward Luxor, stopping at the magnificent Temple of Horus at Edfu — one of the best-preserved temples in all of Egypt. Meditate within its inner sanctum and feel the ancient codes of divine protection and kingship.", quote: "\"Horus stood before me not as a myth but as a living force inside my chest.\"", image: templeCeremony },
  { day: "Day 8", title: "Free Day in Luxor", desc: "A sacred pause in the journey. Rest, integrate, explore at your own rhythm. Wander the Luxor Corniche at sunset, visit a local souk, or simply be still and let the energy of the days past settle into your cells.", quote: "\"The silence of that free day spoke louder than any ceremony.\"", image: luxorNight },
  { day: "Day 9", title: "Karnak Temple", desc: "Enter the largest religious complex ever constructed — the Great Temple of Karnak. Walk the Avenue of Sphinxes, stand beneath the towering Hypostyle Hall columns, and feel the accumulated devotion of ten thousand years of prayer.", quote: "\"Sekhmet's energy burned away the last remnants of my fear.\"", image: karnakColumns },
  { day: "Day 10", title: "Valley of the Kings", desc: "Descend into the royal necropolis — the Valley of the Kings — where pharaohs were prepared for their journey into the afterlife. Explore the painted tombs of Ramses V and others, and feel the threshold between worlds thin around you.", quote: "\"In the depths of the tombs, I found the brightest part of my soul.\"", image: templeCeremony },
  { day: "Day 11", title: "Dandara Temple & Sacred Tombs", desc: "Journey to the Hathor Temple at Dandara — one of the most complete and visually stunning temple complexes in Egypt. The mysterious zodiac ceiling and the hidden underground crypts make this a deeply activating experience.", quote: "\"Hathor looked at me through every carving on that ceiling. I wept without knowing why.\"", image: abuSimbel },
  { day: "Day 12", title: "Egyptian Museum & Abu Serga", desc: "Immerse yourself in the Egyptian Museum in Cairo — home to Tutankhamun's golden treasures. Afternoon visit to Abu Serga Church in ancient Coptic Cairo, one of the earliest Christian sites in Egypt.", quote: "\"History became lived experience. I am part of this ancient lineage.\"", image: karnakColumns },
  { day: "Day 13", title: "Sphinx, Pyramids & Constellation Activation", desc: "The apex of the journey — a private ceremony at the Giza Plateau. We stood before the Great Sphinx at sunrise, then entered the Pyramid complex for a profound activation aligned with the star constellations above.", quote: "\"The pyramid meditation cracked something open in me I didn't know existed.\"", image: templeCeremony },
  { day: "Day 14", title: "Saqqara & Pyramids of Dahshur", desc: "Visit the ancient necropolis of Saqqara — home to the Step Pyramid of Djoser and the deep healing hospital of the ancients. Continue to the Bent and Red Pyramids of Dahshur, the earliest true pyramids ever built.", quote: "\"I saw past lives flash before my eyes in the healing sanctuaries of Saqqara.\"", image: nileReflection },
  { day: "Day 15", title: "Closing Ceremony & Departure", desc: "A final gathering of hearts in sacred circle. We share, integrate, and honour every layer of what has been awakened within us. Then we fly home — not as the people who arrived, but as something altogether more awake.", quote: "\"Egypt didn't change me. It revealed me.\"", image: luxorNight },
  { day: "Days 16–20", title: "Optional: Sinai & Sharm El-Sheikh", desc: "For those called to go deeper — an optional extension to the Sinai Peninsula. Hike Mount Sinai at dawn, float in the Red Sea, and let the desert silence complete the integration of everything Egypt has gifted you.", quote: "\"The Red Sea washed clean everything that Egypt had unravelled. I was whole.\"", image: abuSimbel },
];

type FlipState = {
  from: number;
  to: number;
  dir: 1 | -1;
} | null;

function RightPageContent({ day }: { day: typeof itinerary[0]; pageNum: number; total: number }) {
  return (
    <div className="w-full h-full bg-card flex flex-col justify-center px-8 md:px-12 py-10 md:py-12 relative select-none">
      <div className="absolute top-4 right-4 text-primary/20 text-2xl select-none">☥</div>
      <div className="absolute top-4 left-6 text-muted-foreground/25 text-xs tracking-widest uppercase">
        Star Magic Egypt
      </div>
      <span className="text-primary tracking-[0.25em] text-xs font-bold mb-3 uppercase block mt-6">
        {day.day}
      </span>
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-snug">
        {day.title}
      </h2>
      <div className="h-px w-10 bg-primary mb-6" />
      <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8">
        {day.desc}
      </p>
      <blockquote className="border-l-2 border-primary pl-5 text-foreground/70 italic text-sm md:text-base">
        {day.quote}
      </blockquote>
    </div>
  );
}

function LeftPageContent({ day }: { day: typeof itinerary[0] }) {
  return (
    <div className="w-full h-full relative overflow-hidden select-none">
      <img
        src={day.image}
        alt={day.title}
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/10 via-transparent to-background/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
      <div className="absolute bottom-6 left-6 z-10">
        <div className="inline-flex items-center gap-2 bg-primary/90 backdrop-blur-sm px-4 py-1.5 rounded-full">
          <span className="text-primary-foreground text-xs font-bold tracking-[0.2em] uppercase">{day.day}</span>
        </div>
      </div>
    </div>
  );
}

export default function Journey() {
  const [current, setCurrent] = useState(0);
  const [flip, setFlip] = useState<FlipState>(null);
  const [hintVisible, setHintVisible] = useState(true);
  const touchStartX = useRef<number | null>(null);
  const isAnimating = flip !== null;

  const navigate = (to: number) => {
    if (isAnimating || to === current || to < 0 || to >= itinerary.length) return;
    setHintVisible(false);
    const dir = (to > current ? 1 : -1) as 1 | -1;
    setFlip({ from: current, to, dir });
  };

  const onFlipComplete = () => {
    if (!flip) return;
    setCurrent(flip.to);
    setFlip(null);
  };

  const prev = () => navigate(current - 1);
  const next = () => navigate(current + 1);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) delta > 0 ? next() : prev();
    touchStartX.current = null;
  };

  const displayDay = itinerary[current];
  const fromDay = flip ? itinerary[flip.from] : null;

  return (
    <div className="min-h-screen bg-background pt-24 pb-16 flex flex-col">
      {/* Header */}
      <motion.div
        className="text-center mb-10 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="md:text-7xl font-bold text-foreground mb-4 text-[56px]">The Journey</h1>
        <p className="text-xl text-primary font-light italic">
          "Each day unfolded a new layer of awakening…"
        </p>
      </motion.div>
      {/* Book Container */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 md:px-8">
        <div className="w-full max-w-6xl">

          {/* Book */}
          <div
            className="relative w-full"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{
              perspective: "2200px",
              perspectiveOrigin: "50% 40%",
            }}
          >
            {/* Drop shadow under book */}
            <div
              className="absolute -bottom-6 left-8 right-8 h-12 rounded-full blur-2xl z-0 pointer-events-none"
              style={{ background: "rgba(0,0,0,0.5)" }}
            />

            {/* Static Book Layer — always shows destination */}
            <div
              className="relative w-full flex flex-col md:flex-row rounded-2xl overflow-hidden border border-border/40 z-10"
              style={{
                minHeight: "520px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.55), 0 0 0 1px hsl(var(--border)/0.2)",
              }}
            >
              {/* Page edge stack effect */}
              <div className="hidden md:block absolute -right-1 top-2 bottom-2 w-1.5 rounded-r-sm z-0"
                style={{ background: "linear-gradient(to right, hsl(var(--border)/0.3), hsl(var(--border)/0.1))" }} />
              <div className="hidden md:block absolute -right-2.5 top-4 bottom-4 w-1.5 rounded-r-sm z-0"
                style={{ background: "hsl(var(--border)/0.15)" }} />

              {/* Spine line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-primary/25 z-20 -translate-x-px" />
              <div
                className="hidden md:block absolute left-1/2 top-0 bottom-0 w-8 -translate-x-4 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to right, transparent, hsl(var(--primary)/0.06), transparent)" }}
              />

              {/* Left page */}
              <div className="w-full md:w-1/2 min-h-[300px] md:min-h-[520px] relative z-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`left-${current}`}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <LeftPageContent day={displayDay} />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right page static — shows destination */}
              <div className="w-full md:w-1/2 min-h-[300px] md:min-h-[520px] relative z-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`right-static-${current}`}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <RightPageContent
                      day={displayDay}
                      pageNum={current + 1}
                      total={itinerary.length}
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Page number */}
                <div className="absolute bottom-4 right-6 text-muted-foreground/30 text-xs z-20 pointer-events-none">
                  {current + 1} / {itinerary.length}
                </div>
              </div>
            </div>

            {/* === FLIP LAYER === */}
            {flip && (
              <div
                className="absolute top-0 z-30 pointer-events-none"
                style={{
                  left: "50%",
                  width: "50%",
                  height: "100%",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* The flipping page — dual face card */}
                <motion.div
                  className="absolute inset-0 rounded-r-2xl overflow-hidden"
                  style={{
                    transformStyle: "preserve-3d",
                    transformOrigin: flip.dir > 0 ? "left center" : "right center",
                    willChange: "transform",
                  }}
                  initial={{ rotateY: flip.dir > 0 ? 0 : 180 }}
                  animate={{ rotateY: flip.dir > 0 ? -180 : 0 }}
                  transition={{ duration: 0.75, ease: [0.4, 0, 0.25, 1] }}
                  onAnimationComplete={onFlipComplete}
                >
                  {/* Front face — "from" right content */}
                  <div
                    className="absolute inset-0 rounded-r-2xl overflow-hidden border-l border-border/20"
                    style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
                  >
                    <RightPageContent
                      day={fromDay!}
                      pageNum={flip.from + 1}
                      total={itinerary.length}
                    />
                    {/* Sweep shadow on front during flip */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 0.5, 0] }}
                      transition={{ duration: 0.75, ease: "easeInOut" }}
                      style={{
                        background: flip.dir > 0
                          ? "linear-gradient(to left, rgba(0,0,0,0.6) 0%, transparent 80%)"
                          : "linear-gradient(to right, rgba(0,0,0,0.6) 0%, transparent 80%)",
                      }}
                    />
                  </div>

                  {/* Back face — "to" right content (counter-rotated so it reads correctly) */}
                  <div
                    className="absolute inset-0 rounded-r-2xl overflow-hidden border-r border-border/20"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <RightPageContent
                      day={itinerary[flip.to]}
                      pageNum={flip.to + 1}
                      total={itinerary.length}
                    />
                    {/* Sweep shadow on back */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      initial={{ opacity: 0.5 }}
                      animate={{ opacity: [0.5, 0] }}
                      transition={{ duration: 0.75, ease: "easeInOut" }}
                      style={{
                        background: flip.dir > 0
                          ? "linear-gradient(to right, rgba(0,0,0,0.5) 0%, transparent 70%)"
                          : "linear-gradient(to left, rgba(0,0,0,0.5) 0%, transparent 70%)",
                      }}
                    />
                  </div>
                </motion.div>

                {/* Spine crease shadow during flip */}
                <motion.div
                  className="absolute top-0 bottom-0 w-8 pointer-events-none"
                  style={{
                    left: flip.dir > 0 ? 0 : "auto",
                    right: flip.dir > 0 ? "auto" : 0,
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.8, 0] }}
                  transition={{ duration: 0.75, ease: "easeInOut" }}
                >
                  <div
                    className="w-full h-full"
                    style={{
                      background: flip.dir > 0
                        ? "linear-gradient(to right, rgba(0,0,0,0.35), transparent)"
                        : "linear-gradient(to left, rgba(0,0,0,0.35), transparent)",
                    }}
                  />
                </motion.div>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 px-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              disabled={current === 0 || isAnimating}
              className="border-border/60 text-foreground hover:border-primary hover:text-primary disabled:opacity-20 h-10 w-10"
              data-testid="btn-prev-day"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex items-center gap-1.5 flex-wrap justify-center max-w-sm mx-4">
              {itinerary.map((_, i) => (
                <button
                  key={i}
                  onClick={() => navigate(i)}
                  disabled={isAnimating}
                  data-testid={`btn-day-dot-${i}`}
                  className={`transition-all duration-300 rounded-full focus:outline-none disabled:cursor-wait ${
                    i === current
                      ? "w-6 h-2 bg-primary"
                      : "w-2 h-2 bg-border hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              disabled={current === itinerary.length - 1 || isAnimating}
              className="border-border/60 text-foreground hover:border-primary hover:text-primary disabled:opacity-20 h-10 w-10"
              data-testid="btn-next-day"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Day label */}
          <motion.p
            key={flip ? flip.to : current}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center text-muted-foreground text-sm mt-3 font-light tracking-wide"
          >
            {displayDay.day} — {displayDay.title}
          </motion.p>

          {/* Swipe hint */}
          <AnimatePresence>
            {hintVisible && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.9, duration: 0.6 } }}
                exit={{ opacity: 0, transition: { duration: 0.4 } }}
                className="flex items-center justify-center gap-2 mt-5"
              >
                <motion.span
                  animate={{ x: [-4, 4, -4] }}
                  transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                  className="text-primary/60 text-base select-none"
                >←</motion.span>
                <span className="text-muted-foreground/50 text-xs tracking-widest uppercase font-light">
                  swipe or use arrows to turn pages
                </span>
                <motion.span
                  animate={{ x: [4, -4, 4] }}
                  transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                  className="text-primary/60 text-base select-none"
                >→</motion.span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      {/* CTA */}
      <div className="text-center mt-16 px-4 border-t border-border pt-12">
        <h3 className="text-3xl font-bold mb-6 text-foreground">Ready to walk this path?</h3>
        <Link href="/join-2027">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-10 py-2"
            data-testid="btn-journey-cta"
          >
            Explore 2027 Journey
          </Button>
        </Link>
      </div>
    </div>
  );
}
