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
            <h1 className="text-5xl md:text-7xl font-sans text-foreground mb-6">About the Experience</h1>
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
                <h2 className="text-3xl font-sans text-primary mb-4">What Makes It Different</h2>
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
                      <p className="text-muted-foreground leading-relaxed">Capped at 30-40 participants to ensure deep personal attention and a safe container for emotional alchemy.</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 max-w-5xl mx-auto px-4">
        {/* Who It's For — hero treatment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-3">This Journey Is Designed For</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">Who It's For</h2>
          <div className="h-px w-20 bg-primary mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-16">
          {[
            { icon: "✦", title: "Spiritual Seekers & Healers", desc: "Those called to deepen their connection with ancient energy and sacred wisdom." },
            { icon: "✦", title: "Conscious Leaders", desc: "Visionaries ready to activate their highest potential and lead from the heart." },
            { icon: "✦", title: "Those Experiencing an Awakening", desc: "Souls at a pivotal turning point, sensing there is far more to life than the ordinary." },
            { icon: "✦", title: "Ready for Deep Shadow Work", desc: "Courageous individuals willing to dissolve what no longer serves and be reborn." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative rounded-2xl p-7 text-left overflow-hidden"
              style={{
                background: "linear-gradient(135deg, hsl(42 87% 97%), hsl(38 72% 93%))",
                border: "1px solid rgba(184,151,92,0.3)",
              }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-base mb-4"
                style={{ background: "linear-gradient(135deg, #B8975C, #F3D696)", color: "#1a1208" }}
              >
                {item.icon}
              </div>
              <h4 className="text-foreground font-bold text-lg mb-2 leading-snug">{item.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Who It's NOT For — small, muted */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-border/50 px-8 py-6 bg-card"
        >
          <p className="text-foreground/40 text-[10px] tracking-[0.3em] uppercase font-semibold mb-4">This may not be the right fit if…</p>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {[
              "You're seeking luxury tourism",
              "You want a relaxing holiday",
              "You're unwilling to process emotion",
              "You're attached to rigid religious dogma",
            ].map((item, i) => (
              <span key={i} className="flex items-center gap-1.5 text-foreground/40 text-xs">
                <span className="text-[10px]">✕</span> {item}
              </span>
            ))}
          </div>
        </motion.div>
      </section>
      {/* Map Section */}
      <section className="py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-sans text-foreground mb-4">The Route of Ascension</h2>
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
                  <h4 className="text-lg font-sans text-foreground font-bold whitespace-nowrap">{stop}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
