import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import groupPyramidsImage from "@/assets/group-pyramids.png";
import womanTempleImg from "@/assets/woman-temple-prayer.png";
import jerryTempleImg from "@/assets/jerry-temple.png";

const videoTestimonials = [
  {
    thumbnail: groupPyramidsImage,
    name: "Caesar",
    context: "He came in a wheelchair. He stood up and walked out under his own power.",
    quote: "Caesar came in a wheelchair. He stood up and walked out under his own power.",
    hasVideo: true,
  },
  {
    thumbnail: womanTempleImg,
    name: "Linda",
    location: "Canada",
    quote:
      "I've done every course, every retreat, every modality. Nothing has come close to what happens in Jerry's events. My business has completely transformed. My health has completely transformed. I am not the same person.",
    hasVideo: true,
  },
  {
    thumbnail: jerryTempleImg,
    name: "Susan",
    location: "Business Owner",
    quote:
      "I didn't come expecting what happened. I came hoping. What Jerry created in that room changed something in me I had given up on.",
    hasVideo: true,
  },
];

const writtenTestimonials = [
  {
    name: "Sophia M.",
    loc: "UK",
    quote:
      "I arrived not knowing what was possible. I left knowing exactly who I am and what I'm here to do. This three days rewired something fundamental.",
  },
  {
    name: "David K.",
    loc: "USA",
    quote:
      "The breathwork alone on day two cracked something open in me I didn't know existed. But it was the transmission on day three that changed everything. I am not the same man.",
  },
  {
    name: "Amara T.",
    loc: "South Africa",
    quote:
      "I've attended dozens of personal development programmes. Nothing touches the raw power of what Jerry creates in that room. The facilitators held space for real, lasting transformation.",
  },
  {
    name: "Elena R.",
    loc: "Spain",
    quote:
      "By the end of day one I was already different. By the end of day three I couldn't remember the version of me that walked in. That's not an exaggeration.",
  },
  {
    name: "Marcus W.",
    loc: "Australia",
    quote:
      "My relationships have deepened. My business has grown. My health is the best it's been in years. All of it started in that room.",
  },
  {
    name: "Priya S.",
    loc: "Singapore",
    quote:
      "I was sceptical. I am not anymore. What happens in Jerry's events is real, measurable, and permanent. I tell everyone I know about this.",
  },
];

function VideoCard({ video, index }: { video: typeof videoTestimonials[0]; index: number }) {
  const [playing, setPlaying] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="rounded-2xl overflow-hidden border border-primary/20 bg-card shadow-lg flex flex-col"
    >
      {/* Thumbnail / video */}
      <div className="relative aspect-video overflow-hidden">
        {playing ? (
          <div className="absolute inset-0 flex items-center justify-center bg-black text-white text-sm">
            Video coming soon
          </div>
        ) : (
          <button
            className="absolute inset-0 w-full h-full group cursor-pointer"
            onClick={() => setPlaying(true)}
            aria-label="Play testimonial video"
          >
            <img
              src={video.thumbnail}
              alt={video.name}
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-16 h-16 rounded-full flex items-center justify-center shadow-2xl"
                style={{
                  background: "linear-gradient(135deg, #d39222, #FFECBA, #F3D696, #d39222)",
                }}
              >
                <svg className="w-6 h-6 ml-1" viewBox="0 0 24 24" fill="#1a1208">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </motion.div>
            </div>
          </button>
        )}
      </div>

      {/* Text */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-primary text-sm">★</span>
          ))}
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed italic flex-1 mb-4">
          "{video.quote}"
        </p>
        <div>
          <p className="font-semibold text-foreground text-sm">{video.name}</p>
          {video.location && (
            <p className="text-muted-foreground text-xs">{video.location}</p>
          )}
          {video.context && !video.location && (
            <p className="text-primary text-xs font-medium">{video.context}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-20">

      {/* Hero */}
      <motion.div
        className="text-center px-4 mb-20 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">Real People. Real Results.</span>
        <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-none mb-6">
          What Happens in the Room Changes Everything.
        </h1>
        <p className="text-lg text-muted-foreground font-light leading-relaxed">
          These are not curated success stories. These are the real, lived experiences of people who showed up — and left changed.
        </p>
        <div className="h-px w-20 bg-primary mx-auto mt-10" />
      </motion.div>

      {/* Video Testimonials */}
      <section className="px-4 max-w-7xl mx-auto mb-24">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary tracking-[0.3em] text-xs font-bold uppercase">Video Testimonials</span>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videoTestimonials.map((video, i) => (
            <VideoCard key={i} video={video} index={i} />
          ))}
        </div>
      </section>

      {/* Written testimonials */}
      <section className="px-4 max-w-7xl mx-auto mb-24">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary tracking-[0.3em] text-xs font-bold uppercase">More Voices</span>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {writtenTestimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="rounded-2xl border border-border/50 bg-card p-7 flex flex-col shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, s) => (
                  <span key={s} className="text-primary text-sm">★</span>
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed italic flex-1 mb-5">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(184,151,92,0.3), rgba(243,214,150,0.15))",
                    border: "1px solid rgba(184,151,92,0.35)",
                    color: "#d39222",
                  }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.loc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Caesar highlight */}
      <section className="px-4 max-w-7xl mx-auto mb-24">
        <motion.div
          className="relative rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0">
            <img
              src={groupPyramidsImage}
              alt="Event moment"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/65" />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(135deg, rgba(184,151,92,0.25) 0%, transparent 60%)" }}
            />
          </div>
          <div className="relative z-10 px-10 py-16 md:px-16 md:py-20 text-center">
            <div className="text-primary text-4xl mb-6">✦</div>
            <p className="text-white/70 text-xs uppercase tracking-[0.3em] font-bold mb-4">A Moment That Changed Everything</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-snug mb-6">
              Caesar came in a wheelchair.<br />He stood up and walked out under his own power.
            </h2>
            <p className="text-white/65 text-base leading-relaxed max-w-2xl mx-auto">
              This is what becomes possible when you stop managing your life and start operating from a completely different frequency.
            </p>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <motion.div
        className="mt-4 px-4 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-2xl mx-auto bg-secondary/30 rounded-3xl border border-border/50 p-12">
          <div className="text-primary text-3xl mb-6">◈</div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your Story Starts Here.
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Every one of these people showed up and decided to go all in. Now it's your turn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button size="lg" className="bg-primary text-primary-foreground font-bold text-base px-10 py-2">
                Reserve Your Seat Now
              </Button>
            </Link>
            <Link href="/faq">
              <Button size="lg" variant="outline" className="border-border text-foreground hover:border-primary hover:text-primary font-semibold text-base px-10 py-2">
                Read the FAQs
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>

    </div>
  );
}
