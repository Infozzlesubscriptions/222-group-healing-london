import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import pyramidsImage from "@/assets/pyramids-sunset.png";
import groupPyramidsImage from "@/assets/group-pyramids.png";
import nileImg from "@/assets/nile-reflection.png";
import sphinxImg from "@/assets/sphinx.png";
import activationImg from "@/assets/spiritual-activation.png";
import ceremonyImg from "@/assets/temple-ceremony.png";
import karnakImg from "@/assets/karnak-columns.png";
import luxorNightImg from "@/assets/luxor-night.png";
import abuSimbelImg from "@/assets/abu-simbel.png";

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
          <div className="absolute inset-0 bg-black/55 z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-background z-10" />
          <img 
            src={groupPyramidsImage} 
            alt="The tribe at the Pyramids of Giza" 
            className="w-full h-full object-cover object-top"
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
            <h1 className="md:text-7xl lg:text-8xl font-sans text-white font-bold mb-3 drop-shadow-2xl text-[56px]">
              Cosmic Ascension<br />Tour of Egypt
            </h1>
            <p className="text-base md:text-xl mb-3 font-semibold tracking-wide drop-shadow-md text-[#ffffff]">
              An Epic Journey of Cosmic Activation.
            </p>
            <p className="text-lg md:text-2xl text-white/85 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md font-normal">
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
      {/* ─── VIDEO ─── */}
      <section className="py-24 md:py-32 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">Feel It Before You Arrive</span>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight mb-4">
              Watch the Journey Unfold
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto font-light">
              A glimpse into the sacred sites, the tribe, and the transformation that awaits you in Egypt 2027.
            </p>
            <div className="h-px w-20 bg-primary mx-auto mt-8" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            {/* Decorative glow ring */}
            <div
              className="absolute -inset-1 rounded-3xl blur-2xl opacity-30 pointer-events-none"
              style={{ background: "linear-gradient(135deg, #B8975C, #F3D696, #B8985D)" }}
            />
            {/* Video frame */}
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              style={{
                border: "1px solid rgba(243,214,150,0.35)",
                aspectRatio: "16/9",
              }}
            >
              <iframe
                src="https://player.vimeo.com/video/1128847726?badge=0&autopause=0&quality_selector=1&player_id=0&app_id=58479"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                className="absolute inset-0 w-full h-full"
                title="Cosmic Ascension Tour of Egypt"
                style={{ border: 0 }}
              />
            </div>
          </motion.div>
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
                    <p className="text-xs tracking-[0.2em] uppercase mb-1 text-[#000000]">Reserve Your Space For Only</p>
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
      {/* ─── WHAT'S INCLUDED ─── */}
      <section className="py-24 md:py-32 px-4 bg-background">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">Full Transparency</span>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">What's Included</h2>
            <div className="h-px w-20 bg-primary mx-auto mt-6" />
          </motion.div>

          {/* Included / Not Included two-column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">

            {/* Included */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7 }}
              className="rounded-3xl overflow-hidden border border-primary/20 bg-card shadow-lg"
            >
              {/* Card header */}
              <div className="px-8 py-6 border-b border-primary/15" style={{ background: "linear-gradient(135deg, hsl(42 87% 96%), hsl(38 72% 92%))" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-md">
                    <span className="text-white font-bold text-lg">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Included in Your Investment</h3>
                    <p className="text-muted-foreground text-sm">Everything covered from day one</p>
                  </div>
                </div>
              </div>
              {/* Items */}
              <div className="p-8">
                <ul className="space-y-4">
                  {[
                    "Seven (7) private-access guided site tours, plus additional public-access visits",
                    "Seven (7) day Nile River cruise",
                    "Shared accommodation for the full tour duration",
                    "Breakfast, Lunch & Dinner — unlimited water, snacks & fruits",
                    "All internal flights within the tour",
                    "Ground transportation throughout the tour",
                    "Airport transfers on designated arrival & departure dates",
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.06 }}
                    >
                      <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center">
                        <span className="text-primary text-xs font-bold">✓</span>
                      </span>
                      <span className="text-muted-foreground text-sm leading-snug">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Not Included */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="rounded-3xl overflow-hidden border border-border/50 bg-card shadow-md"
            >
              {/* Card header */}
              <div className="px-8 py-6 border-b border-border/30 bg-secondary/40">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center shrink-0">
                    <span className="text-muted-foreground font-bold text-lg">○</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Not Included</h3>
                    <p className="text-muted-foreground text-sm">Arrange these separately</p>
                  </div>
                </div>
              </div>
              {/* Items */}
              <div className="p-8">
                <ul className="space-y-4">
                  {[
                    "International airfare to and from Egypt",
                    "Travel insurance (strongly recommended)",
                    "Entry visa costs",
                    "Airport transfers outside designated arrival & departure dates",
                    "Mandatory tour gratuity fee (€150 per person)",
                    "Two optional site tours",
                    "Personal expenses — souvenirs, laundry, minibar & incidentals",
                    "Optional upgrades — private rooms or private healing sessions",
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.06 }}
                    >
                      <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-border/60 flex items-center justify-center">
                        <span className="text-muted-foreground text-xs font-bold">–</span>
                      </span>
                      <span className="text-muted-foreground text-sm leading-snug">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* ─── Accommodation ─── */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary tracking-[0.3em] text-xs font-bold uppercase block mb-3">Where You'll Stay</span>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Accommodation</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Experience 4★ and 5★ hotels and several nights cruising in style down the Nile. Accommodation is shared — however <span className="text-foreground font-semibold">15 private rooms</span> are available at an upgrade. Last year they sold out fast.
            </p>
          </motion.div>

          {/* 3 accommodation photo cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: nileImg,       label: "On the Nile",        caption: "Morning Qi-Gong on the cruise deck" },
              { img: luxorNightImg, label: "Hotel in Cairo",     caption: "Luxurious 4★ & 5★ hotel stays throughout" },
              { img: ceremonyImg,   label: "Dining in Style",    caption: "Delicious authentic Egyptian cuisine, served with ceremony" },
            ].map((card, i) => (
              <motion.div
                key={i}
                className="group relative rounded-2xl overflow-hidden shadow-lg aspect-[4/5]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
              >
                <img
                  src={card.img}
                  alt={card.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                {/* Top badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className="text-xs font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full"
                    style={{ background: "linear-gradient(90deg, #B8975C, #F3D696, #B8985D)", color: "#1a1208" }}
                  >
                    {card.label}
                  </span>
                </div>
                {/* Bottom text */}
                <div className="absolute bottom-0 left-0 right-0 px-6 pb-6">
                  <p className="text-white font-semibold text-base leading-snug">{card.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Private room urgency nudge */}
          <motion.div
            className="mt-10 rounded-2xl border border-primary/30 px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{ background: "linear-gradient(135deg, hsl(42 87% 97%), hsl(38 72% 93%))" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4">
              <span className="text-primary text-2xl shrink-0">🛏️</span>
              <div>
                <p className="font-bold text-foreground text-base">Only 15 Private Rooms Available</p>
                <p className="text-muted-foreground text-sm">Upgrade from shared accommodation — these sold out quickly last year.</p>
              </div>
            </div>
            <Link href="/join-2027" className="shrink-0">
              <Button className="bg-primary text-primary-foreground font-semibold px-6 whitespace-nowrap">
                Enquire About Private Room
              </Button>
            </Link>
          </motion.div>

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
