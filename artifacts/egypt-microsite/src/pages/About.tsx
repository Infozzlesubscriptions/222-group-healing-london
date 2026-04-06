import { motion } from "framer-motion";
import spiritualActivation from "@/assets/spiritual-activation.png";
import karnakColumns from "@/assets/karnak-columns.png";

export default function About() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif text-foreground mb-6">About the Experience</h1>
            <p className="text-xl text-primary font-bold tracking-widest uppercase mb-10">
              Not tourism. Not retreat. A spiritual activation experience.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img src={karnakColumns} alt="Karnak Columns" className="w-full h-auto object-cover border border-primary/30" />
              </motion.div>
            </div>
            <div className="w-full md:w-1/2 space-y-8">
              <motion.div
                 initial={{ opacity: 0, x: 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
              >
                <h2 className="text-3xl font-serif text-primary mb-4">What Makes It Different</h2>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <span className="text-primary mt-1 text-xl">☥</span>
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-1">Sacred Site Access</h4>
                      <p className="text-muted-foreground leading-relaxed">Private, off-hours access to the most powerful energetic centers in Egypt, free from the noise of tourism.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-primary mt-1 text-xl">⟁</span>
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-1">Energy Work</h4>
                      <p className="text-muted-foreground leading-relaxed">Intensive, guided meditations and frequency anchoring specifically tailored to the codes of each temple.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-primary mt-1 text-xl">◈</span>
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-1">Small Intimate Group</h4>
                      <p className="text-muted-foreground leading-relaxed">Capped at 12 participants to ensure deep personal attention and a safe container for emotional alchemy.</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-4xl mx-auto px-4 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="bg-card border border-border p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-serif text-primary mb-6">Who It's For</h3>
              <ul className="space-y-3 text-left">
                <li className="flex items-center gap-2"><span className="text-primary text-xs">✦</span> <span className="text-foreground">Spiritual Seekers & Healers</span></li>
                <li className="flex items-center gap-2"><span className="text-primary text-xs">✦</span> <span className="text-foreground">Conscious Leaders</span></li>
                <li className="flex items-center gap-2"><span className="text-primary text-xs">✦</span> <span className="text-foreground">Those experiencing an awakening</span></li>
                <li className="flex items-center gap-2"><span className="text-primary text-xs">✦</span> <span className="text-foreground">Individuals ready for deep shadow work</span></li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-serif text-destructive mb-6">Who It's NOT For</h3>
              <ul className="space-y-3 text-left">
                <li className="flex items-center gap-2"><span className="text-destructive text-xs">✕</span> <span className="text-foreground/70">Those seeking luxury tourism</span></li>
                <li className="flex items-center gap-2"><span className="text-destructive text-xs">✕</span> <span className="text-foreground/70">Those looking for a relaxing vacation</span></li>
                <li className="flex items-center gap-2"><span className="text-destructive text-xs">✕</span> <span className="text-foreground/70">Individuals unwilling to process emotion</span></li>
                <li className="flex items-center gap-2"><span className="text-destructive text-xs">✕</span> <span className="text-foreground/70">Those attached to rigid religious dogma</span></li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-foreground mb-4">The Route of Ascension</h2>
            <div className="h-px w-20 bg-primary mx-auto"></div>
          </div>
          
          <div className="relative pt-10 pb-20 px-4 md:px-0">
            {/* The line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent -translate-y-1/2 hidden md:block"></div>
            <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gradient-to-b from-transparent via-primary/50 to-transparent -translate-x-1/2 md:hidden"></div>
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
              {['Cairo / Giza', 'Luxor / Karnak', 'Aswan', 'Abu Simbel'].map((stop, i) => (
                <motion.div 
                  key={stop}
                  className="flex flex-col items-center bg-background p-4 rounded-full"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                >
                  <div className="w-6 h-6 rounded-full bg-primary mb-4 shadow-[0_0_15px_rgba(201,162,39,0.6)]"></div>
                  <h4 className="text-lg font-serif text-foreground font-bold whitespace-nowrap">{stop}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
