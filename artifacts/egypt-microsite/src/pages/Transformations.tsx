import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import spiritualActivation from "@/assets/spiritual-activation.png";
import sacredLight from "@/assets/sacred-light.png";
import groupPyramidsImage from "@/assets/group-pyramids.png";
import hatshepsutImg from "@/assets/hatshepsut-temple.png";
import jerryTempleImg from "@/assets/jerry-temple.png";
import womanTempleImg from "@/assets/woman-temple-prayer.png";
import pyramidNightImg from "@/assets/pyramid-night.png";

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

const videoTestimonials = [
  {
    thumbnail: groupPyramidsImage,
    name: "Sophia M.",
    loc: "United Kingdom",
    stars: 5,
    preview: "\"Arriving at the Great Pyramid at midnight changed everything for me...\"",
    vimeoId: "1128847726",
  },
  {
    thumbnail: womanTempleImg,
    name: "Elena R.",
    loc: "Spain",
    stars: 5,
    preview: "\"The ceremony at Karnak released 20 years of stored grief in 20 minutes...\"",
    vimeoId: "1128847726",
  },
  {
    thumbnail: jerryTempleImg,
    name: "David K.",
    loc: "USA",
    stars: 5,
    preview: "\"I've done plant medicine, decades of meditation — nothing compares to this...\"",
    vimeoId: "1128847726",
  },
];

function VideoCard({ video, index }: { video: typeof videoTestimonials[0]; index: number }) {
  const [playing, setPlaying] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      className="flex flex-col rounded-2xl overflow-hidden shadow-lg"
      style={{ border: "1px solid rgba(184,151,92,0.2)" }}
    >
      {/* Video / Thumbnail */}
      <div className="relative aspect-video bg-black overflow-hidden">
        {playing ? (
          <iframe
            src={`https://player.vimeo.com/video/${video.vimeoId}?autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479`}
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            className="absolute inset-0 w-full h-full"
            title={`${video.name} testimonial`}
            style={{ border: 0 }}
          />
        ) : (
          <>
            <img
              src={video.thumbnail}
              alt={video.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/45" />
            {/* Preview quote */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
              <p className="text-white/80 text-sm italic leading-relaxed mb-4 max-w-xs">{video.preview}</p>
            </div>
            {/* Play button */}
            <button
              onClick={() => setPlaying(true)}
              className="absolute inset-0 flex items-center justify-center group cursor-pointer"
              aria-label={`Play ${video.name} testimonial`}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: "linear-gradient(135deg, #B8975C 0%, #FFECBA 50%, #B8985D 100%)",
                }}
              >
                <svg className="w-6 h-6 ml-1" viewBox="0 0 24 24" fill="#1a1208">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          </>
        )}
      </div>

      {/* Card footer */}
      <div className="bg-card px-5 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
            style={{ background: "linear-gradient(135deg, hsl(42 87% 96%), hsl(38 72% 92%))", color: "#7a5c2e", border: "1px solid rgba(184,151,92,0.4)" }}
          >
            {video.name.charAt(0)}
          </div>
          <div>
            <p className="text-foreground font-semibold text-sm leading-none mb-0.5">{video.name}</p>
            <p className="text-muted-foreground text-xs tracking-wide">{video.loc}</p>
          </div>
        </div>
        <div className="flex gap-0.5">
          {Array.from({ length: video.stars }).map((_, i) => (
            <span key={i} className="text-primary text-sm">★</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Transformations() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">Real Experiences. Real Awakenings.</span>
            <h1 className="md:text-7xl font-sans text-foreground mb-6 text-[56px] font-bold">Transformations</h1>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
              Hear directly from the pilgrims whose lives were changed forever by the Egypt journey.
            </p>
            <div className="h-px w-20 bg-primary mx-auto mt-8" />
          </motion.div>
        </div>
      </section>

      {/* ─── VIDEO TESTIMONIALS ─── */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-3">In Their Own Words</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Video Testimonials</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Watch pilgrims share their sacred experiences — unscripted, unfiltered, and from the heart.
            </p>
            <div className="h-px w-20 bg-primary mx-auto mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videoTestimonials.map((video, i) => (
              <VideoCard key={i} video={video} index={i} />
            ))}
          </div>

          {/* Full video CTA */}
          <motion.div
            className="mt-10 rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{ background: "linear-gradient(135deg, hsl(42 87% 97%), hsl(38 72% 93%))", border: "1px solid rgba(184,151,92,0.3)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <p className="font-bold text-foreground text-base">Watch the full Egypt 2026 documentary</p>
              <p className="text-muted-foreground text-sm">A cinematic journey through 15 days of transformation with the tribe.</p>
            </div>
            <Link href="/">
              <button
                className="font-semibold px-6 py-2.5 rounded-md whitespace-nowrap cursor-pointer shrink-0 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: "linear-gradient(90deg, #B8975C 0%, #FFECBA 24.52%, #F3D696 51.93%, #FFECBA 76.93%, #B8985D 100%)",
                  color: "#1a1208",
                  border: "none",
                }}
              >
                Watch Documentary →
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Before / After */}
      <section className="py-16 bg-secondary/20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-3">Before & After</span>
            <h2 className="text-3xl font-bold text-foreground">The Shift</h2>
            <div className="h-px w-16 bg-primary mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beforeAfter.map((item, i) => (
              <motion.div
                key={i}
                className="bg-card p-8 border border-border/50 text-center relative rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="text-muted-foreground text-sm italic mb-4">"Before"</div>
                <p className="text-foreground mb-8">{item.before}</p>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-primary">⟁</div>
                <div className="text-primary text-sm font-bold mb-4 tracking-widest uppercase">After</div>
                <p className="text-foreground font-sans text-lg">{item.after}</p>
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
              <img src={spiritualActivation} alt="Spiritual Activation" className="w-full h-[400px] object-cover border border-primary/20 p-2 rounded-xl" />
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-3xl font-sans text-foreground mb-4">"I found the missing piece of my soul."</h3>
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
              <img src={sacredLight} alt="Sacred Light" className="w-full h-[400px] object-cover border border-primary/20 p-2 rounded-xl" />
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-3xl font-sans text-foreground mb-4">"The chronic pain simply vanished."</h3>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                I came to Egypt seeking spiritual depth, but I didn't expect physical healing. On Day 6 at Karnak Temple, we stood in the sanctuary of Sekhmet. The energetic heat was palpable. Whatever blockage I had been carrying in my lower back for a decade was pulled from me. It's been 6 months, and the pain has never returned. This journey operates on levels beyond human comprehension.
              </p>
              <div className="text-primary font-bold">— Sarah W., Yoga Teacher</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Grid of Text Testimonials */}
      <section className="py-20 bg-secondary/10 border-t border-border">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-3">More Stories</span>
            <h2 className="text-3xl font-bold text-foreground">Written Testimonials</h2>
            <div className="h-px w-16 bg-primary mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="bg-card border-border/40 rounded-2xl h-full">
                  <CardContent className="p-8">
                    <div className="text-primary text-3xl mb-4">"</div>
                    <p className="text-foreground/90 font-sans text-xl italic mb-6 leading-relaxed">
                      {t.quote}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-sans font-bold">
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

      {/* Final CTA */}
      <section className="py-32 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-primary text-4xl mb-6">☥</div>
          <h2 className="text-4xl font-sans text-foreground mb-4">Ready for your own transformation?</h2>
          <p className="text-muted-foreground text-lg mb-10">The next gateway opens in March 2027.</p>
          <Link href="/join-2027">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-xl font-bold px-12 py-2 cursor-pointer">
              Be Part of the Next Journey
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
