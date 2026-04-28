import { useState } from "react";
import { motion } from "framer-motion";

export function VideoCard({ vimeoId, title, thumbnail }: { vimeoId: string; title: string; thumbnail?: string }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div
      className="relative rounded-2xl overflow-hidden shadow-xl cursor-pointer"
      style={{ border: "1px solid rgba(211,146,34,0.4)", aspectRatio: "16/9", background: "linear-gradient(135deg, #1a1208 0%, #2a1f10 50%, #0a0e1a 100%)" }}
      onClick={() => setPlaying(true)}
    >
      {playing ? (
        <iframe
          src={`https://player.vimeo.com/video/${vimeoId}?badge=0&autopause=0&quality_selector=1&player_id=0&app_id=58479&autoplay=1`}
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          className="absolute inset-0 w-full h-full"
          title={title}
          style={{ border: 0 }}
        />
      ) : (
        <>
          {thumbnail && <img src={thumbnail} alt={title} className="absolute inset-0 w-full h-full object-cover" />}
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex flex-col justify-end p-4">
            <p className="text-white font-semibold text-sm leading-snug drop-shadow-md line-clamp-2">{title}</p>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-2xl"
              style={{ background: "linear-gradient(135deg, #d39222 0%, #FFECBA 50%, #d39222 100%)" }}
            >
              <svg viewBox="0 0 24 24" className="w-7 h-7 md:w-8 md:h-8 ml-1" fill="#1a1208">
                <path d="M8 5v14l11-7z" />
              </svg>
            </motion.div>
          </div>
          <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-white/80 text-[10px] font-medium uppercase tracking-wider">Video</span>
          </div>
        </>
      )}
    </div>
  );
}
