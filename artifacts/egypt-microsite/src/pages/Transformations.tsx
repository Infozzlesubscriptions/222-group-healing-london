import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import spiritualActivation from "@/assets/spiritual-activation.png";
import sacredLight from "@/assets/sacred-light.png";

const beforeAfter = [
  { before: "Seeking direction and deeply disconnected from intuition.", after: "Anchored in purpose, trusting inner guidance completely." },
  { before: "Carrying ancestral grief and emotional weight.", after: "Liberated, light, and open to receiving abundance." },
  { before: "Curious about spirituality but lacking direct experience.", after: "Embodying profound energetic shifts and crystalline clarity." }
];

const testimonials = [
  { name: "Sophia M.", loc: "UK", quote: "I arrived with a broken heart and left knowing my purpose. The energies we tapped into during the Luxor night ceremony completely rewired my nervous system." },
  { name: "David K.", loc: "USA", quote: "The pyramid meditation cracked something open in me I didn't know existed. The sacred geometries are real. This was not a trip. This was a resurrection." },
  { name: "Amara T.", loc: "South Africa", quote: "I've attended dozens of spiritual retreats, but nothing touches the raw power of this Egypt journey. The facilitators held space for massive collective healing." },
  { name: "Elena R.", loc: "Spain", quote: "When the golden light hit the codes at Saqqara, I remembered everything. I am forever changed by the depth of this initiation." }
];

export default function Transformations() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif text-foreground mb-6">Transformations</h1>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
              Real Experiences. Real Awakenings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Before / After */}
      <section className="py-16 bg-secondary/20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-primary">The Shift</h2>
            <div className="h-px w-16 bg-primary mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beforeAfter.map((item, i) => (
              <motion.div 
                key={i}
                className="bg-card p-8 border border-border/50 text-center relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="text-muted-foreground text-sm italic mb-4">"Before"</div>
                <p className="text-foreground mb-8">{item.before}</p>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-primary">⟁</div>
                <div className="text-primary text-sm font-bold mb-4 tracking-widest uppercase">After</div>
                <p className="text-foreground font-serif text-lg">{item.after}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Narratives */}
      <section className="py-24 max-w-5xl mx-auto px-4">
        <div className="space-y-20">
          <motion.div 
            className="flex flex-col md:flex-row gap-10 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-full md:w-1/3">
              <img src={spiritualActivation} alt="Spiritual Activation" className="w-full h-[400px] object-cover border border-primary/20 p-2" />
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-3xl font-serif text-foreground mb-4">"I found the missing piece of my soul."</h3>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                For years, I felt a low-grade anxiety, a sense that I was forgetting something vital. The moment my feet touched the sands of Giza, my body knew it was home. During the private activation in the King's Chamber, a frequency moved through the group that shattered my illusions. I wept for an hour—not from sadness, but from profound relief. I finally remembered.
              </p>
              <div className="text-primary font-bold">— Marcus J., Healer</div>
            </div>
          </motion.div>

          <motion.div 
            className="flex flex-col md:flex-row-reverse gap-10 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-full md:w-1/3">
              <img src={sacredLight} alt="Sacred Light" className="w-full h-[400px] object-cover border border-primary/20 p-2" />
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-3xl font-serif text-foreground mb-4">"The chronic pain simply vanished."</h3>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                I came to Egypt seeking spiritual depth, but I didn't expect physical healing. On Day 6 at Karnak Temple, we stood in the sanctuary of Sekhmet. The energetic heat was palpable. Whatever blockage I had been carrying in my lower back for a decade was pulled from me. It's been 6 months, and the pain has never returned. This journey operates on levels beyond human comprehension.
              </p>
              <div className="text-primary font-bold">— Sarah W., Yoga Teacher</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Grid of Testimonials */}
      <section className="py-20 bg-secondary/10 border-t border-border">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="bg-card border-border/40 rounded-none h-full">
                  <CardContent className="p-8">
                    <div className="text-primary text-3xl mb-4">"</div>
                    <p className="text-foreground/90 font-serif text-xl italic mb-6 leading-relaxed">
                      {t.quote}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-serif font-bold">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <div className="text-foreground font-bold">{t.name}</div>
                        <div className="text-muted-foreground text-sm uppercase tracking-wider">{t.loc}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 text-center px-4">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <h2 className="text-4xl font-serif text-foreground mb-8">Ready for your own transformation?</h2>
          <Link href="/join-2027">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-xl font-bold px-12 py-8 rounded-none">
              Be Part of the Next Journey
            </Button>
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
