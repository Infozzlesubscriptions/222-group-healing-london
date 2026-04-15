import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const videos = [
  { id: 1, src: "https://player.vimeo.com/video/1161766582", title: "Transformation Story 1" },
  { id: 2, src: "https://player.vimeo.com/video/1161766314", title: "Transformation Story 2" },
  { id: 3, src: "https://player.vimeo.com/video/1161766538", title: "Transformation Story 3" },
  { id: 4, src: "https://player.vimeo.com/video/1161766020", title: "Transformation Story 4" },
  { id: 5, src: "https://player.vimeo.com/video/1161765970", title: "Transformation Story 5" },
  { id: 6, src: "https://player.vimeo.com/video/1161766248", title: "Transformation Story 6" },
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-0">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-primary tracking-[0.35em] text-xs font-bold uppercase block mb-4">Inside the Room</span>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight mb-4">Transformation Stories</h1>
          <div className="h-px w-20 bg-primary mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl overflow-hidden shadow-lg border border-border/30"
              style={{ aspectRatio: "16/9" }}
            >
              <iframe
                src={`${video.src}?badge=0&autopause=0&quality_selector=1&player_id=0&app_id=58479`}
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                className="w-full h-full"
                title={video.title}
                style={{ border: 0 }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <section className="py-28 px-4 bg-secondary text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />
        <motion.div
          className="max-w-7xl mx-auto relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary tracking-[0.3em] text-xs font-bold uppercase block mb-6">Limited Places Remaining</span>
          <h2 className="text-4xl md:text-6xl font-bold font-sans text-foreground mb-6 leading-snug">
            Your story belongs<br />in this room.
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Elite Be Superhuman — London, UK · May 2026. A 3-day live experience that changes everything.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#pricing">
              <Button size="lg" className="bg-primary text-primary-foreground font-bold text-lg px-10 py-2">
                Reserve Your Seat
              </Button>
            </Link>
            <Link href="/programme">
              <Button size="lg" variant="outline" className="border-primary text-primary font-semibold text-lg px-10 py-2">
                View the Programme
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
