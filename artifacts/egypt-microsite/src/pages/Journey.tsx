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
    title: "Arrival & Opening Circle",
    desc: "We gathered from all corners of the world in Cairo. Intentions were set under the Egyptian night sky as we connected our energies for the profound journey ahead.",
    quote: "\"I felt an instant soul recognition with strangers who quickly became family.\"",
    image: templeCeremony,
  },
  {
    day: "Day 2",
    title: "Giza Pyramids Activation",
    desc: "Private access to the King's Chamber. The acoustic resonance vibrated through our very cells, clearing old timelines and anchoring new light codes.",
    quote: "\"The sound in the chamber dissolved every barrier I had built around my heart.\"",
    image: luxorNight,
  },
  {
    day: "Day 3",
    title: "Saqqara & Ancient Codes",
    desc: "Walking the sands of Saqqara, we accessed the deep healing frequencies of the Step Pyramid. We worked with the ancient codes embedded in the stones.",
    quote: "\"I saw past lives flash before my eyes in the healing hospital of Saqqara.\"",
    image: karnakColumns,
  },
  {
    day: "Day 4",
    title: "Memphis & Ancient Wisdom",
    desc: "Connecting with the heart center of ancient Egypt. A powerful group ceremony brought us into alignment with the divine masculine and feminine energies.",
    quote: "\"Balance was no longer a concept, it became a physical sensation in my body.\"",
    image: abuSimbel,
  },
  {
    day: "Day 5",
    title: "Luxor Temple Night Ceremony",
    desc: "Under the stars, amidst the illuminated giant columns of Luxor, we activated our physical vessels to hold higher frequencies of light.",
    quote: "\"The temple felt alive, as if the stones themselves were breathing with us.\"",
    image: luxorNight,
  },
  {
    day: "Day 6",
    title: "Karnak Temple Sunrise",
    desc: "A silent sunrise walk through the largest religious complex ever built. We meditated at the Sekhmet sanctuary, embracing fierce compassion.",
    quote: "\"Sekhmet's energy burned away the last remnants of my fear.\"",
    image: karnakColumns,
  },
  {
    day: "Day 7",
    title: "Valley of the Kings",
    desc: "Journeying into the underworld. A deep inner activation confronting our shadows and emerging reborn into the light of our true purpose.",
    quote: "\"In the depths of the tombs, I found the brightest part of my soul.\"",
    image: templeCeremony,
  },
  {
    day: "Day 8",
    title: "Abu Simbel Sun Temple",
    desc: "Standing before the majestic statues of Ramses, we anchored the solar codes. A profound initiation of stepping into our personal power and sovereignty.",
    quote: "\"I have never felt so small, yet so infinitely powerful.\"",
    image: abuSimbel,
  },
  {
    day: "Day 9",
    title: "Nile River Journey",
    desc: "Sailing the sacred river as the sun set. We integrated the profound energies of the past days, letting the waters wash away what no longer served us.",
    quote: "\"The river held us like a mother as we surrendered to our new selves.\"",
    image: nileReflection,
  },
  {
    day: "Day 10",
    title: "Closing Circle & Departure",
    desc: "A final sharing of hearts. We arrived as seekers, we departed as activated pillars of light, ready to anchor these new frequencies in our daily lives.",
    quote: "\"Egypt didn't change me. It revealed me.\"",
    image: templeCeremony,
  }
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
