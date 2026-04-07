import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import pyramidsImage from "@/assets/pyramids-sunset.png";
import nileImg from "@/assets/nile-reflection.png";
import sphinxImg from "@/assets/sphinx.png";
import activationImg from "@/assets/spiritual-activation.png";
import ceremonyImg from "@/assets/temple-ceremony.png";
import karnakImg from "@/assets/karnak-columns.png";

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const highlights = [
    { img: nileImg,       title: "15 Days Across Sacred Egypt", desc: "A curated path through ancient power centers." },
    { img: sphinxImg,     title: "Pyramid Activations",          desc: "Private access and deep resonance work." },
    { img: activationImg, title: "Deep Energy Work",             desc: "Guided sessions to unlock dormant codes." },
    { img: ceremonyImg,   title: "Lifelong Transformations",     desc: "Leave the old self behind in the sands." },
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
                  Book Your Spot
                </Button>
              </Link>
              <Link href="/join-2027" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10 font-semibold text-lg px-8 py-2 tracking-wide" data-testid="btn-join-2027-hero">
                  Book Discovery Call
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
              This is not a holiday.<br className="hidden md:block"/>
              <span className="text-primary italic">It is an initiation.</span>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              A soul-stirring once-in-a-lifetime sacred pilgrimage to Egypt. We are calling the spiritually advanced, the energetically sensitive, the wayshowers — to step into the ancient temples before dawn and remember who you are.
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
                className="flex flex-col rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-card"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                {/* Text box */}
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="text-lg font-semibold font-sans text-foreground mb-2 leading-snug">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* ─── TRIP HIGHLIGHTS ─── */}
      <section className="relative py-0 overflow-hidden">
        {/* Full-bleed background */}
        <div className="absolute inset-0">
          <img src={karnakImg} alt="Karnak columns" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/72" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 60%, hsl(var(--background)) 100%)" }} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-24 md:py-32">

          {/* Section label */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">What's Included</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
              Highlights of the Trip
            </h2>
            <div className="h-px w-20 mx-auto mt-6" style={{ background: "linear-gradient(90deg, transparent, #F3D696, transparent)" }} />
          </motion.div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left — highlights list */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8 }}
            >
              <ul className="space-y-5">
                {[
                  { icon: "🔺", text: "4 Hours Private Access in the Great Pyramid" },
                  { icon: "🏛️", text: "7 Private Access Visits to Egypt's most sacred sites" },
                  { icon: "✈️", text: "Inland Flight — Cairo to Luxor and back" },
                  { icon: "🛏️", text: "4 & 5 Star shared accommodation — luxurious comfort after each day's adventures" },
                  { icon: "⛵", text: "Sailing on the Nile with breathtaking cuisine and on-board accommodation" },
                  { icon: "🚌", text: "Airport transfers included throughout the journey" },
                  { icon: "🗝️", text: "Exclusive private tours: Grand Egyptian Museum, Osiris Tomb, Giza Plateau, Mysteries of the Sphinx, Temple of Isis, Osiris Temple & more" },
                  { icon: "🌟", text: "Spiritual guidance from local Egyptian guides who know the most sacred places" },
                  { icon: "🍽️", text: "Delicious authentic Egyptian cuisine showcasing the diverse flavours of the region" },
                  { icon: "🎈", text: "Optional hot air balloon ride over the Valley of the Kings" },
                  { icon: "🧘", text: "Optional early morning Qi-Gong sessions with Jerry whilst cruising the Nile" },
                  { icon: "✦",  text: "…and much more!" },
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                  >
                    <span className="text-xl shrink-0 mt-0.5">{item.icon}</span>
                    <span className="text-white/85 text-base leading-snug">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Right — price card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="lg:sticky lg:top-32"
            >
              <div
                className="rounded-3xl overflow-hidden shadow-2xl"
                style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(20px)", border: "1px solid rgba(243,214,150,0.25)" }}
              >
                {/* Card header */}
                <div className="px-8 pt-10 pb-8 text-center border-b border-white/10">
                  <div className="text-primary text-3xl mb-3">☥</div>
                  <p className="text-white/60 text-xs tracking-[0.3em] uppercase mb-2">Cosmic Ascension Tour 2027</p>
                  <h3 className="text-white text-2xl font-bold mb-1">Secure Your Spot Now</h3>
                  <p className="text-white/60 text-sm">Don't miss the adventure of a lifetime with Jerry and the Tribe.</p>
                </div>

                {/* Pricing */}
                <div className="px-8 py-8 text-center">
                  <p className="text-white/50 text-sm mb-1 uppercase tracking-widest">Total Investment</p>
                  <div className="flex items-end justify-center gap-2 mb-2">
                    <span className="text-5xl md:text-6xl font-bold text-white">£8,444</span>
                  </div>
                  <div
                    className="inline-block rounded-2xl px-6 py-4 mt-4 w-full"
                    style={{ background: "linear-gradient(135deg, rgba(184,151,92,0.25), rgba(243,214,150,0.12))", border: "1px solid rgba(243,214,150,0.3)" }}
                  >
                    <p className="text-primary text-xs tracking-[0.2em] uppercase mb-1">Reserve Your Space For Only</p>
                    <p className="text-4xl font-bold" style={{ background: "linear-gradient(90deg, #B8975C, #FFECBA, #F3D696, #B8985D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                      £1,500 Deposit
                    </p>
                    <p className="text-white/50 text-xs mt-2">Balance payable in flexible instalments</p>
                  </div>
                </div>

                {/* CTA buttons */}
                <div className="px-8 pb-10 flex flex-col gap-3">
                  <Link href="/join-2027">
                    <Button size="lg" className="w-full bg-primary text-primary-foreground font-bold text-lg py-3" data-testid="btn-highlights-book">
                      Reserve Your Place
                    </Button>
                  </Link>
                  <Link href="/join-2027">
                    <Button size="lg" variant="outline" className="w-full border-white/30 text-white hover:bg-white/10 font-semibold text-base py-3">
                      Book a Discovery Call
                    </Button>
                  </Link>
                  <p className="text-center text-white/40 text-xs mt-2">
                    Limited spaces available · Payment plans available · Full T&Cs at booking
                  </p>
                </div>
              </div>
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
