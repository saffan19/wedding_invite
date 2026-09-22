"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { weddingConfig } from "@/lib/wedding-config";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

// A maroon closing band — a deliberate bookend to the maroon envelope the
// guest opened at the very start of the experience.
const CREAM = "#F7EFE0";
const GOLD = "#E0BB6B";

const TEXT = {
  quote: '"Two souls, one heart, one forever."',
  date: "22 & 23 October 2026",
};

export default function Footer() {
  const t = TEXT;

  return (
    <footer
      data-section
      className="relative flex flex-col items-center"
      style={{
        paddingTop: "clamp(4rem, 6vw, 6rem)",
        paddingBottom: "clamp(3rem, 5vw, 5rem)",
        background: "linear-gradient(180deg, #4A0E1A 0%, #5C1220 100%)",
      }}
    >
      <div className="w-full max-w-lg mx-auto px-4 sm:px-6">
        <AnimatedSection direction="fade" className="w-full">
          <div className="flex flex-col items-center text-center gap-6 sm:gap-7 md:gap-8">
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-full flex items-center justify-center"
              style={{
                background: "rgba(201,168,76,0.12)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
                width: "clamp(4.5rem, 8vw, 5rem)",
                height: "clamp(4.5rem, 8vw, 5rem)",
              }}
            >
              <Heart
                size={30}
                strokeWidth={1.5}
                style={{ color: GOLD, fill: "rgba(224,187,107,0.25)" }}
              />
            </motion.div>

            <h2
              style={{
                fontFamily: "'Great Vibes', cursive",
                color: GOLD,
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                lineHeight: 1.1,
              }}
            >
              {weddingConfig.coupleNames}
            </h2>

            <div className="flex items-center gap-2 sm:gap-3 w-full max-w-[200px]">
              <div
                className="h-[1px] flex-1"
                style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.5))" }}
              />
              <span style={{ color: "rgba(201,168,76,0.8)", fontSize: "0.7rem" }}>✦</span>
              <div
                className="h-[1px] flex-1"
                style={{ background: "linear-gradient(270deg, transparent, rgba(201,168,76,0.5))" }}
              />
            </div>

            <p
              className="font-serif italic leading-relaxed max-w-xs"
              style={{
                color: CREAM,
                opacity: 0.9,
                fontSize: "clamp(1rem, 1.6vw, 1.15rem)",
              }}
            >
              {t.quote}
            </p>

            <p
              className="uppercase tracking-[0.4em] sm:tracking-[0.5em] font-bold"
              style={{
                fontFamily: "'Cinzel', serif",
                color: CREAM,
                opacity: 0.75,
                fontSize: "clamp(8px, 0.85vw, 10px)",
              }}
            >
              {t.date}
            </p>

            <div
              className="h-[1px] w-40"
              style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)" }}
            />

            <p
              className="uppercase tracking-[0.3em] sm:tracking-[0.4em]"
              style={{
                fontFamily: "'Cinzel', serif",
                color: GOLD,
                opacity: 0.7,
                fontSize: "clamp(8px, 0.8vw, 10px)",
              }}
            >
              {weddingConfig.hashtag}
            </p>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
}
