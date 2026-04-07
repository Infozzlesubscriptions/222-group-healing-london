import { motion } from "framer-motion";
import templeCeremony from "@/assets/temple-ceremony.png";
import karnakColumns from "@/assets/karnak-columns.png";
import luxorNight from "@/assets/luxor-night.png";
import abuSimbel from "@/assets/abu-simbel.png";
import nileReflection from "@/assets/nile-reflection.png";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const itinerary = [
  {
    day: "Day 1",
    title: "Arrival in Cairo",
    desc: "Arrive in Cairo and meet the Star Magic Team. Transfers to your hotel in Memphis, where the journey of a lifetime begins. Settle in and share an evening al fresco meal together as a tribe.",
    quote: "\"I felt an instant soul recognition with strangers who quickly became family.\"",
    image: templeCeremony,
  },
  {
    day: "Day 2",
    title: "Tribe Meeting & Sphinx Sunset",
    desc: "Breakfast together as a group, then spend the morning in deep connection and intention-setting with the tribe. In the afternoon, be guided into the presence of the Great Sphinx of Giza — a moment of ancient recognition that words cannot capture.",
    quote: "\"Standing before the Sphinx, I understood why I had come.\"",
    image: luxorNight,
  },
  {
    day: "Day 3",
    title: "Luxor Temple & Seti Temple",
    desc: "Fly to Luxor and step into one of the most celebrated sacred sites in the world. The illuminated columns of Luxor Temple hold thousands of years of initiation energy. An evening visit to Seti Temple deepens the transmission.",
    quote: "\"The temple felt alive, as if the stones themselves were breathing with us.\"",
    image: karnakColumns,
  },
  {
    day: "Day 4",
    title: "Unfinished Obelisk & Aswan Market",
    desc: "An afternoon visit to the famous Unfinished Obelisk reveals the hidden mastery of ancient builders. Explore the Nubian market, where authentic spices, herbs, and local crafts carry the living spirit of this land.",
    quote: "\"Every stone here holds a story older than memory.\"",
    image: abuSimbel,
  },
  {
    day: "Day 5",
    title: "Abu Simbel Temples",
    desc: "An early morning journey to the monumental Abu Simbel Temples — carved into the cliffside and aligned perfectly with the sun twice a year. Standing before the great statues of Ramses II, we anchored solar codes of sovereignty and power.",
    quote: "\"I have never felt so small, yet so infinitely powerful.\"",
    image: abuSimbel,
  },
  {
    day: "Day 6",
    title: "Isis Temple & Kom Ombo",
    desc: "Visit the exquisite Philae Temple — the Island of Isis — rising from the waters of the Nile. Continue to the dual Temple of Kom Ombo, dedicated to Sobek the crocodile god and Horus the Elder. A journey into sacred duality.",
    quote: "\"The feminine power of Isis moved through me like a wave I couldn't resist.\"",
    image: nileReflection,
  },
  {
    day: "Day 7",
    title: "Temple of Horus at Edfu",
    desc: "Travel from Aswan toward Luxor, stopping at the magnificent Temple of Horus at Edfu — one of the best-preserved temples in all of Egypt. Meditate within its inner sanctum and feel the ancient codes of divine protection and kingship.",
    quote: "\"Horus stood before me not as a myth but as a living force inside my chest.\"",
    image: templeCeremony,
  },
  {
    day: "Day 8",
    title: "Free Day in Luxor",
    desc: "A sacred pause in the journey. Rest, integrate, explore at your own rhythm. Wander the Luxor Corniche at sunset, visit a local souk, or simply be still and let the energy of the days past settle into your cells.",
    quote: "\"The silence of that free day spoke louder than any ceremony.\"",
    image: luxorNight,
  },
  {
    day: "Day 9",
    title: "Karnak Temple",
    desc: "Enter the largest religious complex ever constructed — the Great Temple of Karnak. Walk the Avenue of Sphinxes, stand beneath the towering Hypostyle Hall columns, and feel the accumulated devotion of ten thousand years of prayer.",
    quote: "\"Sekhmet's energy burned away the last remnants of my fear.\"",
    image: karnakColumns,
  },
  {
    day: "Day 10",
    title: "Valley of the Kings",
    desc: "Descend into the royal necropolis — the Valley of the Kings — where pharaohs were prepared for their journey into the afterlife. Explore the painted tombs of Ramses V and others, and feel the threshold between worlds thin around you.",
    quote: "\"In the depths of the tombs, I found the brightest part of my soul.\"",
    image: templeCeremony,
  },
  {
    day: "Day 11",
    title: "Dandara Temple & Sacred Tombs",
    desc: "Journey to the Hathor Temple at Dandara — one of the most complete and visually stunning temple complexes in Egypt. The mysterious zodiac ceiling and the hidden underground crypts make this a deeply activating experience. Visit the surrounding sacred tombs along the Nile.",
    quote: "\"Hathor looked at me through every carving on that ceiling. I wept without knowing why.\"",
    image: abuSimbel,
  },
  {
    day: "Day 12",
    title: "Egyptian Museum & Abu Serga Church",
    desc: "Immerse yourself in the Egyptian Museum in Cairo — home to Tutankhamun's golden treasures and thousands of artefacts spanning millennia. Afternoon visit to Abu Serga Church in ancient Coptic Cairo, one of the earliest Christian sites in Egypt.",
    quote: "\"History became lived experience. I am part of this ancient lineage.\"",
    image: karnakColumns,
  },
  {
    day: "Day 13",
    title: "Sphinx, Pyramids & Constellation Activation",
    desc: "The apex of the journey — a private ceremony at the Giza Plateau. We stood before the Great Sphinx at sunrise, then entered the Pyramid complex for a profound activation aligned with the star constellations above. Overnight in Giza.",
    quote: "\"The pyramid meditation cracked something open in me I didn't know existed.\"",
    image: templeCeremony,
  },
  {
    day: "Day 14",
    title: "Saqqara & Pyramids of Dahshur",
    desc: "Visit the ancient necropolis of Saqqara — home to the Step Pyramid of Djoser and the deep healing hospital of the ancients. Continue to the Bent and Red Pyramids of Dahshur, the earliest true pyramids ever built, holding extraordinary geometric power.",
    quote: "\"I saw past lives flash before my eyes in the healing sanctuaries of Saqqara.\"",
    image: nileReflection,
  },
  {
    day: "Day 15",
    title: "Closing Ceremony & Departure",
    desc: "A final gathering of hearts in sacred circle. We share, integrate, and honour every layer of what has been awakened within us. Then we fly home — not as the people who arrived, but as something altogether more awake.",
    quote: "\"Egypt didn't change me. It revealed me.\"",
    image: luxorNight,
  },
  {
    day: "Days 16–20",
    title: "Optional Extension: Sinai & Sharm El-Sheikh",
    desc: "For those called to go deeper — an optional extension to the Sinai Peninsula and Sharm El-Sheikh. Hike Mount Sinai at dawn, float in the Red Sea, and let the desert silence complete the integration of everything Egypt has gifted you.",
    quote: "\"The Red Sea washed clean everything that Egypt had unravelled. I was whole.\"",
    image: abuSimbel,
  },
];

export default function Journey() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4">
        
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-serif text-foreground mb-6">The Journey</h1>
          <p className="text-xl text-primary font-light italic max-w-2xl mx-auto">
            "Each day unfolded a new layer of awakening…"
          </p>
        </motion.div>

        <div className="space-y-32">
          {itinerary.map((day, index) => (
            <motion.div 
              key={day.day}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-full md:w-1/2 relative group overflow-hidden border border-border/50">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700 z-10"></div>
                <img 
                  src={day.image} 
                  alt={day.title} 
                  className="w-full h-[400px] object-cover filter grayscale-[30%] contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <span className="text-primary tracking-[0.2em] text-sm font-bold mb-2 uppercase">{day.day}</span>
                <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">{day.title}</h2>
                <div className="h-px w-12 bg-primary mb-6"></div>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {day.desc}
                </p>
                <blockquote className="border-l-2 border-primary pl-4 text-foreground/80 italic font-serif text-lg">
                  {day.quote}
                </blockquote>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-32 text-center border-t border-border pt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-serif mb-8 text-foreground">Ready to walk this path?</h3>
          <Link href="/join-2027">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-10 py-2" data-testid="btn-journey-cta">
              Explore 2027 Journey
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
