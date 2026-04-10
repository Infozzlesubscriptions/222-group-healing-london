import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import videoThumbnailImg from "@/assets/video-thumbnail.png";
import pyramidsImage from "@/assets/pyramids-sunset.png";
import groupPyramidsImage from "@/assets/group-pyramids.png";
import cosmicPyramidImg from "@/assets/cosmic-pyramid.png";
import ramessesLuxorImg from "@/assets/ramesses-luxor.png";
import nileImg from "@/assets/nile-reflection.png";
import nileCruiseDeckImg from "@/assets/nile-cruise-deck.png";
import nileFeluccaImg from "@/assets/nile-felucca-sunset.png";
import jerryStepPyramidImg from "@/assets/jerry-step-pyramid.png";
import tribeCirclePyramidImg from "@/assets/tribe-circle-pyramid.png";
import jerrySaqqaraArmsImg from "@/assets/jerry-saqqara-arms.png";
import sphinxImg from "@/assets/sphinx.png";
import hatshepsutImg from "@/assets/image_1775822847259.png";
import activationImg from "@/assets/spiritual-activation.png";
import jerryTempleImg from "@/assets/jerry-temple.png";
import womanTempleImg from "@/assets/woman-temple-prayer.png";
import ceremonyImg from "@/assets/temple-ceremony.png";
import pyramidNightImg from "@/assets/pyramid-night.png";
import karnakImg from "@/assets/karnak-columns.png";
import luxorNightImg from "@/assets/luxor-night.png";
import abuSimbelImg from "@/assets/abu-simbel.png";
import hishamImg from "@/assets/hisham-basyouny.jpg";
import nicoleBellImg from "@/assets/nicole-bell.png";
import joshSargeantImg from "@/assets/josh-sargeant.png";
import tylerBellImg from "@/assets/tyler-bell.png";
import egyptDiningImg from "@/assets/egypt-dining.png";
import cairoHotelImg from "@/assets/cairo-hotel.png";

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);

  function handleDiscoverySubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  }

  const highlights = [
    { img: jerryStepPyramidImg, title: "15 Days Across Sacred Egypt", desc: "A curated path through ancient power centers." },
    { img: hatshepsutImg, title: "Pyramid Activations",          desc: "Private access and deep resonance work." },
    { img: tribeCirclePyramidImg, title: "Deep Energy Work",              desc: "Guided sessions to unlock dormant codes." },
    { img: jerrySaqqaraArmsImg, title: "Lifelong Transformations",   desc: "Leave the old self behind in the sands." },
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black z-10" />
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
            <span className="text-primary text-xl md:text-2xl font-sans tracking-[0.3em] mb-4 block uppercase font-semibold">
              Calling all Planetary Guardians
            </span>
            <h1 className="text-[clamp(2.2rem,8vw,5rem)] md:text-7xl lg:text-8xl font-sans text-white font-bold mb-3 drop-shadow-2xl">
              Cosmic Ascension<br />Tour of Egypt
            </h1>
            <p className="text-base md:text-xl mb-3 font-semibold tracking-wide drop-shadow-md text-[#ffffff]">
              An Epic Journey of Cosmic Activation.
            </p>
            <p className="text-lg md:text-2xl text-white/85 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md font-semibold">16th–30th March 2027</p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/join-2027" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-2 tracking-wide cursor-pointer" data-testid="btn-book-spot">
                  Book Your Spot
                </Button>
              </Link>
              <Link href="/join-2027" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10 font-semibold text-lg px-8 py-2 tracking-wide cursor-pointer" data-testid="btn-join-2027-hero">
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
            <div className="text-primary text-4xl mb-8">☥</div>
            <p className="text-lg md:text-xl text-muted-foreground italic leading-relaxed mb-6 max-w-2xl mx-auto">
              If you're here, you already know this isn't about travel.
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8 leading-snug max-w-3xl mx-auto">
              This is about standing on land<br className="hidden md:block" /> your soul recognises.
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-6">
              Walking corridors where humanity once remembered its divinity. And participating, consciously, in the reactivation of something ancient and alive.
            </p>
            <div className="h-px w-20 bg-border mx-auto my-8" />
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-4">
              Egypt isn't calling everyone.
            </p>
            <p className="text-foreground font-semibold text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              It's calling those ready to activate what is <span className="text-primary italic">ancient and unstoppable</span> within you.
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
              This tour is intentionally designed to be private, precise, and energetically held.
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
              {videoPlaying ? (
                <iframe
                  src="https://player.vimeo.com/video/1128847726?badge=0&autopause=0&autoplay=1&quality_selector=1&player_id=0&app_id=58479"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  className="absolute inset-0 w-full h-full"
                  title="Cosmic Ascension Tour of Egypt"
                  style={{ border: 0 }}
                />
              ) : (
                <button
                  className="absolute inset-0 w-full h-full group cursor-pointer"
                  onClick={() => setVideoPlaying(true)}
                  aria-label="Play video"
                >
                  {/* Thumbnail image */}
                  <img
                    src={videoThumbnailImg}
                    alt="Watch the Egypt journey"
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-20 h-20 rounded-full flex items-center justify-center shadow-2xl"
                      style={{
                        background: "linear-gradient(135deg, #B8975C, #FFECBA, #F3D696, #B8985D)",
                      }}
                    >
                      <svg className="w-8 h-8 ml-1" viewBox="0 0 24 24" fill="#1a1208">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </motion.div>
                  </div>
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>
      {/* ─── TRIP HIGHLIGHTS ─── */}
      <section className="relative py-0 overflow-hidden">
        {/* Full-bleed background */}
        <div className="absolute inset-0">
          <img src={karnakImg} alt="Karnak columns" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.55) 60%, rgba(28,24,20,0.97) 100%)" }} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 md:py-32 bg-[#0000001c]">

          {/* Section header */}
          <motion.div
            className="text-center mb-14 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">What's Included</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Highlights of the Trip
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px flex-1 max-w-[80px]" style={{ background: "linear-gradient(to right, transparent, #F3D696)" }} />
              <span className="text-primary text-lg">☥</span>
              <div className="h-px flex-1 max-w-[80px]" style={{ background: "linear-gradient(to left, transparent, #F3D696)" }} />
            </div>
          </motion.div>

          {/* Two-column layout — price card first in DOM so it's first on mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">

            {/* Price card — first on mobile, right on desktop */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="lg:sticky lg:top-32 lg:order-2 relative"
            >
              {/* Outer glow */}
              <div
                className="absolute -inset-1 rounded-[28px] blur-xl opacity-30 pointer-events-none"
                style={{ background: "linear-gradient(135deg, #B8975C, #F3D696, #B8985D)" }}
              />
              <div
                className="relative rounded-3xl overflow-hidden shadow-2xl"
                style={{ background: "rgba(10,8,5,0.65)", backdropFilter: "blur(24px)", border: "1px solid rgba(243,214,150,0.35)" }}
              >
                {/* Card header */}
                <div
                  className="px-6 pt-7 pb-6 text-center border-b border-white/10"
                  style={{ background: "linear-gradient(180deg, rgba(184,151,92,0.18) 0%, transparent 100%)" }}
                >
                  <div className="text-primary text-4xl mb-2">☥</div>
                  <p className="text-primary/80 text-[10px] tracking-[0.28em] uppercase mb-1.5">Cosmic Ascension Tour 2027</p>
                  <h3 className="text-white text-2xl font-bold mb-1">Secure Your Spot Now</h3>
                  <p className="text-white/55 text-sm">The adventure of a lifetime awaits with Jerry & the Tribe.</p>
                </div>

                {/* Pricing */}
                <div className="px-6 py-6 text-center">
                  {/* Early Bird Banner */}
                  <div
                    className="rounded-xl px-4 py-2.5 mb-6 flex items-center justify-center gap-2 w-full"
                    style={{ background: "linear-gradient(90deg, #B8975C, #F3D696, #B8985D)" }}
                  >
                    <span className="text-[#1a1208] text-xs font-bold tracking-wide uppercase leading-snug">⚡ Early Bird — Valid Until 1st Aug 2026</span>
                  </div>

                  {/* Struck-through full price */}
                  <div className="flex items-center justify-center gap-3 mb-1">
                    <span className="text-white/35 text-xs uppercase tracking-widest">Full Price</span>
                    <span className="text-2xl font-bold text-white/30 line-through">£8,444</span>
                  </div>

                  {/* Early bird price */}
                  <p className="text-white/50 text-[10px] mb-1 uppercase tracking-widest">Early Bird Price</p>
                  <div className="flex items-end justify-center gap-1 mb-1">
                    <span
                      className="text-6xl font-bold leading-none"
                      style={{ background: "linear-gradient(90deg, #B8975C, #FFECBA, #F3D696, #B8985D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                    >
                      £7,444
                    </span>
                  </div>
                  <p className="text-white/35 text-xs mb-6">Save £1,000 · Offer ends 1st August 2026</p>

                  {/* Deposit box */}
                  <div
                    className="rounded-2xl px-5 py-4 w-full mb-1"
                    style={{ background: "linear-gradient(135deg, rgba(184,151,92,0.22), rgba(243,214,150,0.10))", border: "1px solid rgba(243,214,150,0.35)" }}
                  >
                    <p className="text-[10px] tracking-widest uppercase mb-1 text-white/55">Reserve Your Space For Only</p>
                    <p
                      className="text-4xl font-bold"
                      style={{ background: "linear-gradient(90deg, #B8975C, #FFECBA, #F3D696, #B8985D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                    >
                      £1,500 Deposit
                    </p>
                    <p className="text-white/45 text-xs mt-1.5">Balance payable in flexible instalments</p>
                  </div>
                </div>

                {/* CTA buttons */}
                <div className="px-6 pb-8 flex flex-col gap-3">
                  <Link href="/join-2027">
                    <Button size="lg" className="w-full bg-primary text-primary-foreground font-bold text-base py-3 h-12" data-testid="btn-highlights-book">
                      Reserve Your Place
                    </Button>
                  </Link>
                  <Link href="/join-2027">
                    <Button size="lg" variant="outline" className="w-full border-white/25 text-white hover:bg-white/10 font-semibold text-sm py-3 h-12">
                      Book a Discovery Call
                    </Button>
                  </Link>
                  <p className="text-center text-[11px] mt-1 text-white/40">
                    Limited spaces · Payment plans available · Full T&Cs at booking
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Highlights list — second on mobile, left on desktop */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8 }}
              className="lg:order-1"
            >
              <ul className="divide-y divide-white/10">
                {[
                  { icon: "🔺", text: "4 Hours Private Access in the Great Pyramid" },
                  { icon: "🏛️", text: "7 Private Access Visits to Egypt's most sacred sites" },
                  { icon: "✈️", text: "Inland Flight — Cairo to Luxor and back" },
                  { icon: "🛏️", text: "4 & 5 Star shared accommodation — luxurious comfort after each day" },
                  { icon: "⛵", text: "Sailing on the Nile with breathtaking cuisine and on-board accommodation" },
                  { icon: "🚌", text: "Airport transfers included throughout the journey" },
                  { icon: "🗝️", text: "Exclusive private tours: Grand Egyptian Museum, Osiris Tomb, Giza Plateau, Mysteries of the Sphinx, Temple of Isis & more" },
                  { icon: "🌟", text: "Spiritual guidance from local Egyptian guides who know the most sacred places" },
                  { icon: "🍽️", text: "Delicious authentic Egyptian cuisine showcasing the diverse flavours of the region" },
                  { icon: "🎈", text: "Optional hot air balloon ride over the Valley of the Kings" },
                  { icon: "🧘", text: "Optional early morning Qi-Gong sessions with Jerry whilst cruising the Nile" },
                  { icon: "✦",  text: "…and much more!" },
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center gap-4 py-4 group"
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.04 }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0 shadow-md"
                      style={{ background: "linear-gradient(135deg, rgba(184,151,92,0.45), rgba(243,214,150,0.25))", border: "1px solid rgba(243,214,150,0.35)" }}
                    >
                      {item.icon}
                    </div>
                    <span className="text-white/85 text-sm sm:text-base leading-snug group-hover:text-white transition-colors duration-200">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
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
              <div className="px-5 py-5 sm:px-8 sm:py-6 border-b border-primary/15" style={{ background: "linear-gradient(135deg, hsl(42 87% 96%), hsl(38 72% 92%))" }}>
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
              <div className="p-5 sm:p-8">
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
              <div className="px-5 py-5 sm:px-8 sm:py-6 border-b border-border/30 bg-secondary/40">
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
              <div className="p-5 sm:p-8">
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

          {/* ─── Your Expert Guides ─── */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-10">
              <span className="text-primary tracking-[0.3em] text-xs font-bold uppercase block mb-3">In Expert Hands</span>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Your Expert Guides</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                This journey is led with both spiritual depth and historical mastery — combining ancient wisdom with world-class Egyptological expertise.
              </p>
              <div className="h-px w-16 bg-primary mx-auto mt-6 mb-6" />
              <p className="text-foreground/70 italic text-lg max-w-xl mx-auto leading-relaxed">
                If your heart is responding, even quietly, trust it.<br className="hidden md:block" />
                <span className="text-primary font-semibold not-italic">Those impulses are coordinates.</span>
              </p>
            </div>

            {/* Jerry big left + 2×2 team grid right */}
            <div className="flex flex-col lg:flex-row gap-5" style={{ minHeight: "520px" }}>

              {/* Jerry — featured tall card */}
              <motion.div
                className="relative rounded-3xl overflow-hidden shadow-2xl group lg:w-[42%] shrink-0"
                style={{ border: "1px solid rgba(184,151,92,0.4)", minHeight: "420px" }}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <img
                  src={jerryTempleImg}
                  alt="Jerry Sargeant"
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <span
                    className="inline-block text-[10px] font-bold tracking-[0.22em] uppercase px-3 py-1 rounded-full mb-3"
                    style={{ background: "linear-gradient(90deg, #B8975C, #F3D696)", color: "#1a1208" }}
                  >
                    ✦ Spiritual Guide & Founder
                  </span>
                  <h4 className="text-white text-2xl font-bold mb-2 leading-tight">Jerry Sargeant</h4>
                  <p className="text-white/65 text-sm leading-relaxed">
                    Star Magic founder and world-renowned energy healer — present every single day, leading activations, meditations, and Qi-Gong on the Nile.
                  </p>
                </div>
              </motion.div>

              {/* 2×2 team cards */}
              <div className="grid grid-cols-2 gap-4 flex-1">
                {[
                  {
                    img: hishamImg,
                    role: "Expert Egyptologist",
                    name: "Hisham Basyouny",
                    desc: "Guides every site with deep historical and symbolic knowledge.",
                    objPos: "top",
                  },
                  {
                    img: nicoleBellImg,
                    role: "Energy Facilitator",
                    name: "Nicole Bell",
                    desc: "Holds sacred space for healing and group activations.",
                    objPos: "center",
                  },
                  {
                    img: joshSargeantImg,
                    role: "Energy Facilitator",
                    name: "Josh Sargeant",
                    desc: "Opens doors to sacred sites and hidden ceremonial spaces.",
                    objPos: "top",
                  },
                  {
                    img: tylerBellImg,
                    role: "Energy Facilitator",
                    name: "Tyler Bell",
                    desc: "Orchestrates ceremony and collective ritual at each sacred site.",
                    objPos: "top",
                  },
                ].map((person, i) => (
                  <motion.div
                    key={i}
                    className="group rounded-2xl overflow-hidden shadow-md flex flex-col"
                    style={{ border: "1px solid rgba(184,151,92,0.25)" }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                  >
                    {/* Photo */}
                    <div className="relative overflow-hidden flex-1" style={{ minHeight: "160px" }}>
                      <img
                        src={person.img}
                        alt={person.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        style={{ objectPosition: (person as any).objPos ?? "center" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      {/* Role badge */}
                      <div className="absolute top-2.5 left-2.5">
                        <span
                          className="text-[8px] font-bold tracking-[0.16em] uppercase px-2 py-0.5 rounded-full"
                          style={{ background: "linear-gradient(90deg, #B8975C, #F3D696)", color: "#1a1208" }}
                        >
                          {person.role}
                        </span>
                      </div>
                    </div>
                    {/* Text */}
                    <div className="bg-card px-3.5 py-3 shrink-0">
                      <h4 className="text-foreground font-bold text-xs leading-tight mb-0.5">{person.name}</h4>
                      <p className="text-muted-foreground text-[11px] leading-snug">{person.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

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
              { img: nileCruiseDeckImg, label: "On the Nile",        caption: "Morning Qi-Gong on the cruise deck" },
              { img: cairoHotelImg, label: "Hotel in Cairo",     caption: "Luxurious 4★ & 5★ hotel stays throughout" },
              { img: egyptDiningImg, label: "Dining in Style",    caption: "Delicious authentic Egyptian cuisine, served with ceremony" },
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
              <button
                className="text-sm font-semibold px-6 py-2.5 rounded-lg tracking-wide whitespace-nowrap transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97] cursor-pointer shadow-md shadow-primary/20"
                style={{
                  background: "linear-gradient(90deg, #B8975C 0%, #FFECBA 24.52%, #F3D696 51.93%, #FFECBA 76.93%, #B8985D 100%)",
                  color: "#1a1208",
                  border: "none",
                }}
              >
                Enquire About Private Room
              </button>
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
            <blockquote className="text-xl sm:text-2xl md:text-4xl text-foreground italic mb-8" style={{ fontFamily: "'Poppins', sans-serif" }}>
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
      {/* Final CTA — Discovery Call */}
      <section className="relative py-24 md:py-32 px-4 overflow-hidden bg-background">
        {/* Soft radial gold glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(243,214,150,0.18) 0%, transparent 70%)" }}
        />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left — photo + trust signals */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Photo with gold frame */}
              <div
                className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]"
                style={{ border: "1px solid rgba(243,214,150,0.4)" }}
              >
                <img
                  src={ramessesLuxorImg}
                  alt="Ramesses statue at Luxor Temple"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              {/* Floating trust badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -top-3 -right-2 sm:-top-4 sm:-right-4 rounded-2xl px-4 py-3 sm:px-5 sm:py-4 shadow-xl"
                style={{ background: "linear-gradient(135deg, hsl(42 87% 96%), hsl(38 72% 92%))", border: "1px solid rgba(184,151,92,0.4)" }}
              >
                <p className="text-primary font-bold text-2xl leading-none">★ 4.9</p>
                <p className="text-foreground/60 text-xs mt-1">from 200+ souls</p>
              </motion.div>
            </motion.div>

            {/* Right — form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">
                Ready to Take the Next Step?
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
                Book Your Egypt<br />Discovery Call
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-md">
                Connect one-to-one with a specialist to receive personalised clarity and guidance for your Egypt 2027 journey.
              </p>
              <div className="h-px w-16 bg-primary mb-8" />

              {/* Perks row */}
              <div className="flex flex-wrap gap-3 mb-8">
                {["Free 30-min call", "No commitment", "Limited slots"].map((perk) => (
                  <span
                    key={perk}
                    className="text-xs font-semibold px-4 py-2 rounded-full"
                    style={{ background: "linear-gradient(135deg, hsl(42 87% 96%), hsl(38 72% 93%))", border: "1px solid rgba(184,151,92,0.35)", color: "#7a5c2e" }}
                  >
                    ✓ {perk}
                  </span>
                ))}
              </div>

              {!submitted ? (
                <form onSubmit={handleDiscoverySubmit} className="space-y-4">
                  <div>
                    <label className="block text-foreground/60 text-xs tracking-[0.2em] uppercase mb-2 font-semibold">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full rounded-xl px-4 py-3.5 text-base outline-none transition-all duration-200 bg-white text-foreground placeholder-foreground/30 shadow-sm"
                      style={{ border: "1.5px solid rgba(184,151,92,0.3)" }}
                      onFocus={e => { e.currentTarget.style.border = "1.5px solid #B8975C"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(184,151,92,0.15)"; }}
                      onBlur={e => { e.currentTarget.style.border = "1.5px solid rgba(184,151,92,0.3)"; e.currentTarget.style.boxShadow = "none"; }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-xl py-4 text-base font-bold tracking-wide transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-lg shadow-primary/20"
                    style={{
                      background: "linear-gradient(90deg, #B8975C 0%, #FFECBA 24.52%, #F3D696 51.93%, #FFECBA 76.93%, #B8985D 100%)",
                      color: "#1a1208",
                      border: "none",
                    }}
                    data-testid="btn-start-booking"
                  >
                    Start Booking
                  </button>
                  <div className="pt-2">
                    <Link href="/join-2027">
                      <Button variant="link" className="text-muted-foreground hover:text-primary text-sm px-0" data-testid="btn-join-2027-footer">
                        Or view full booking details →
                      </Button>
                    </Link>
                  </div>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-2xl px-8 py-8 shadow-lg"
                  style={{ background: "linear-gradient(135deg, hsl(42 87% 96%), hsl(38 72% 93%))", border: "1px solid rgba(184,151,92,0.4)" }}
                >
                  <div className="text-primary text-3xl mb-3">✦</div>
                  <h3 className="text-foreground text-xl font-bold mb-2">You're on the list.</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Thank you — a member of the Star Magic team will be in touch shortly to schedule your discovery call.
                  </p>
                </motion.div>
              )}
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
