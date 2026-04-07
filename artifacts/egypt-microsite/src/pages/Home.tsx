import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Map, Zap, Sparkles, Heart, Globe, Users } from "lucide-react";
import pyramidsImage from "@/assets/pyramids-sunset.png";

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const highlights = [
    { icon: Map, title: "10 Days Across Sacred Egypt", desc: "A curated path through ancient power centers." },
    { icon: Zap, title: "Pyramid Activations", desc: "Private access and deep resonance work." },
    { icon: Sparkles, title: "Deep Energy Work", desc: "Guided sessions to unlock dormant codes." },
    { icon: Heart, title: "Lifelong Transformations", desc: "Leave the old self behind in the sands." },
  ];

  return (
    <div className="min-h-screen bg-background w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: y1, opacity }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background z-10" />
          <img 
            src={pyramidsImage} 
            alt="Pyramids at sunset" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-primary text-xl md:text-2xl font-sans tracking-[0.3em] mb-4 block uppercase">
              Calling all Planetary Guardians
            </span>
            <h1 className="md:text-7xl lg:text-8xl font-sans text-foreground font-bold mb-3 drop-shadow-2xl text-[56px]">
              Cosmic Ascension<br />Tour of Egypt
            </h1>
            <p className="text-base md:text-xl text-primary/90 mb-3 font-semibold tracking-wide drop-shadow-md">
              An Epic Journey of Cosmic Activation.
            </p>
            <p className="text-lg md:text-2xl text-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md font-normal">
              16th–30th March 2027.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/journey" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-2 tracking-wide" data-testid="btn-watch-journey">
                  Watch the Journey
                </Button>
              </Link>
              <Link href="/join-2027" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10 font-semibold text-lg px-8 py-2 tracking-wide" data-testid="btn-join-2027-hero">
                  Join 2027 Experience
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Floating particles simplified as a decorative element */}
        <div className="absolute inset-0 pointer-events-none z-0 opacity-30" style={{ background: 'radial-gradient(circle, transparent 20%, var(--background) 120%)' }} />
      </section>
      {/* Intro Section */}
      <section className="py-24 md:py-32 px-4 relative z-20 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-primary text-4xl mb-6">☥</div>
            <h2 className="text-3xl md:text-5xl font-sans text-foreground mb-8 leading-snug">
              In March 2026, a group of souls gathered in Egypt… <br className="hidden md:block"/>
              <span className="text-primary italic">Not just to travel, but to awaken.</span>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              We walked the paths of the ancients, felt the resonance of the stones, and remembered who we truly are. This is the story of that initiation.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Highlights */}
      <section className="py-20 px-4 bg-secondary/30 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Card className="bg-card/50 border-border/50 hover:border-primary/50 transition-colors h-full rounded-xl">
                  <CardContent className="p-8 text-center flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-sans text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* What We Do — Planetary Grid Work & Healing */}
      <section className="py-24 md:py-32 px-4 bg-background relative">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary tracking-[0.3em] text-xs font-bold uppercase block mb-4">What We Did in 2026</span>
            <h2 className="text-3xl md:text-5xl font-sans text-foreground leading-snug">
              The Work of the Initiation
            </h2>
            <div className="h-px w-16 bg-primary mx-auto mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* Planetary Grid Work */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className="bg-card/50 border border-border/50 rounded-2xl p-8 md:p-10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-sans text-foreground">Planetary Grid Work</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                What we call "codes," "light," and "the planetary grid" are expressions of <span className="text-foreground/80">energy, intention, and consciousness work</span> — anchored at the most powerful sacred sites on Earth. In practice, participants engaged in:
              </p>
              <ul className="space-y-3">
                {[
                  "Group meditations at the Pyramids and ancient temples",
                  "Guided visualisations to connect with Earth's energy",
                  "Intention-setting ceremonies at power centres",
                  "Contributing to collective spiritual growth and awareness",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-primary mt-1 shrink-0">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Healing */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-card/50 border border-border/50 rounded-2xl p-8 md:p-10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-sans text-foreground">Healing & Transformation</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The healing dimension of the journey centred on <span className="text-foreground/80">emotional release, self-reflection, and deep inner renewal</span> — supported by a community of like-minded souls. Practically, this included:
              </p>
              <ul className="space-y-3">
                {[
                  "Sharing circles — open, witnessed, and held with care",
                  "Meditation-based relaxation and nervous system reset",
                  "Coaching-style guidance for personal breakthroughs",
                  "Letting go of past stress and old patterns in sacred space",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-primary mt-1 shrink-0">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </section>
      {/* Testimonial Preview */}
      <section className="py-24 md:py-32 px-4 relative bg-background">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-primary text-4xl mb-8">◈</div>
            <blockquote className="text-2xl md:text-4xl font-sans text-foreground italic leading-relaxed mb-8">
              "The pyramid meditation cracked something open in me I didn't know existed. This was not a trip. This was a resurrection."
            </blockquote>
            <p className="text-primary tracking-widest uppercase text-sm">— David K., USA</p>
            
            <div className="mt-16">
              <Link href="/transformations">
                <Button variant="link" className="text-primary hover:text-primary/80 text-lg uppercase tracking-widest" data-testid="btn-read-stories">
                  Read Their Stories →
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Final CTA */}
      <section className="py-32 px-4 relative overflow-hidden bg-secondary">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-sans text-foreground mb-6">
              Your journey might begin where theirs did.
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              The next gateway opens in March 2027. Will you answer the call?
            </p>
            <Link href="/join-2027">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xl px-12 py-2 shadow-2xl shadow-primary/20" data-testid="btn-join-2027-footer">
                Join Egypt 2027
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
