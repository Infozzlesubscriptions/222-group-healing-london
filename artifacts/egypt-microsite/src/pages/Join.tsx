import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import pyramidsSunset from "@/assets/pyramids-sunset.png";

export default function Join() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);

  return (
    <div className="min-h-screen bg-background w-full overflow-hidden">
      {/* Hero */}
      <section className="relative h-[80dvh] flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: y1 }}
        >
          <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.45) 50%, hsl(var(--background)) 100%)" }} />
          <img 
            src={pyramidsSunset} 
            alt="Pyramids" 
            className="w-full h-full object-cover filter contrast-125"
          />
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-xl md:text-2xl font-sans tracking-[0.3em] mb-4 block uppercase font-semibold text-[#ffffff]">
              The Next Gateway
            </span>
            <h1 className="text-5xl md:text-7xl font-sans text-white font-bold mb-6 drop-shadow-2xl">
              Egypt Awakening Journey<br />
              <span className="italic font-semibold text-[#f2ad3a]">March 2027</span>
            </h1>
          </motion.div>
        </div>
      </section>
      <section className="py-20 bg-background relative z-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-sans text-foreground">Why Answer the Call?</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                The 2026 journey catalyzed massive energetic shifts for every participant. We witnessed profound physical healings, the dissolving of deep-seated ancestral traumas, and the activation of latent intuitive gifts.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                As the planetary frequency rises, the ancient codes held within the temples of Egypt are waking up. The 2027 container will go even deeper, building upon the grids established by the 2026 initiates.
              </p>
              
              <div className="bg-secondary/50 p-8 border-l-4 border-primary mt-8">
                <h3 className="text-2xl font-sans text-foreground mb-4">Journey Details</h3>
                <ul className="space-y-4">
                  <li className="flex justify-between border-b border-border/50 pb-2">
                    <span className="text-muted-foreground">Dates</span>
                    <span className="text-foreground font-bold">March 10 - 20, 2027</span>
                  </li>
                  <li className="flex justify-between border-b border-border/50 pb-2">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="text-foreground font-bold">10 Days, 9 Nights</span>
                  </li>
                  <li className="flex justify-between pb-2">
                    <span className="text-muted-foreground">Locations</span>
                    <span className="text-foreground font-bold text-right">Cairo, Giza, Luxor, Karnak, <br/>Aswan, Abu Simbel</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <div className="bg-card border border-border p-10 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
                
                <h3 className="text-3xl font-sans text-foreground mb-6">Secure Your Place</h3>
                
                <div className="mb-10 p-6 bg-background/50 rounded-lg border border-border/50">
                  <div className="text-primary text-sm font-bold tracking-widest uppercase mb-2">Urgency</div>
                  <p className="text-foreground text-xl mb-4">Limited spots. Small group only.</p>
                  <div className="w-full bg-secondary h-4 rounded-full overflow-hidden mb-2">
                    <div className="bg-primary h-full w-[75%] shadow-[0_0_10px_rgba(201,162,39,0.8)]"></div>
                  </div>
                  <p className="text-muted-foreground font-bold"><span className="text-primary text-2xl">3</span> of 12 spots remaining</p>
                </div>

                <div className="flex flex-col gap-4">
                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-xl py-2 shadow-xl shadow-primary/20 font-semibold" data-testid="btn-apply-now">
                    Apply Now
                  </Button>
                  <Button size="lg" variant="outline" className="w-full border-primary text-primary hover:bg-primary/10 font-bold text-lg py-2" data-testid="btn-view-details">
                    View Full Details & Pricing
                  </Button>
                </div>
                
                <p className="text-muted-foreground text-sm mt-6">
                  * Application required to ensure energetic resonance with the group.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
