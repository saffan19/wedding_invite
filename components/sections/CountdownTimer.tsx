"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { weddingConfig } from "@/lib/wedding-config";
import { getCountdown } from "@/lib/utils";
import { withBasePath } from "@/lib/basePath";

// This section is a deep-maroon "band" — a deliberate punctuation point
// against the cream sections around it, and a callback to the maroon
// envelope at the very start of the experience.
const CREAM = "#F7EFE0";
const GOLD = "#E0BB6B";

const TEXT = {
  until: "Until 22 October 2026",
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  over: "The celebration has begun!",
};

function Digit({ value, label }: { value: number; label: string }) {
  const display = String(value).padStart(2, "0");
  return (
    <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4">
      <span
        suppressHydrationWarning
        className="font-serif italic font-light"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          color: CREAM,
          opacity: 0.97,
          fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
          lineHeight: 1,
        }}
      >
        {display}
      </span>
      <span
        className="uppercase tracking-[0.4em] sm:tracking-[0.5em] font-semibold"
        style={{
          fontFamily: "'Cinzel', serif",
          color: GOLD,
          opacity: 0.85,
          fontSize: "clamp(8px, 1vw, 11px)",
        }}
      >
        {label}
      </span>
    </div>
  );
}

export default function CountdownTimer() {
  const t = TEXT;
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState(getCountdown(weddingConfig.weddingDate));

  useEffect(() => {
    setMounted(true);
    setTime(getCountdown(weddingConfig.weddingDate));
    const id = setInterval(() => setTime(getCountdown(weddingConfig.weddingDate)), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      data-section
      className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden"
      style={{
        paddingBlock: "clamp(4rem, 8vw, 7rem)",
        background: "linear-gradient(180deg, #4A0E1A 0%, #5C1220 50%, #4A0E1A 100%)",
      }}
    >
      {/* LEFT FLORAL COLUMN */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: -80, opacity: 1 }}
        animate={{ rotate: [-1.5, 1.5, -1.5] }}
        transition={{
          x: { duration: 2, ease: "easeOut" },
          rotate: { duration: 10, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute left-0 top-0 bottom-0 z-0 hidden xl:block origin-top-left"
      >
        <img
          src={withBasePath("/column-left.png")}
          alt=""
          className="h-full w-auto object-contain object-left pointer-events-none select-none"
          style={{ maxWidth: "450px" }}
        />
      </motion.div>

      {/* RIGHT FLORAL COLUMN */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 80, opacity: 1 }}
        animate={{ rotate: [1.5, -1.5, 1.5] }}
        transition={{
          x: { duration: 2, ease: "easeOut" },
          rotate: { duration: 11, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute right-0 top-0 bottom-0 z-0 hidden xl:block origin-top-right"
      >
        <img
          src={withBasePath("/column-right.png")}
          alt=""
          className="h-full w-auto object-contain object-right pointer-events-none select-none"
          style={{ maxWidth: "450px" }}
        />
      </motion.div>

      {/* Mobile Floral Accents — small enough to fit the section's height
          without being clipped top/bottom by overflow-hidden. */}
      <motion.div
        animate={{ rotate: [-2, 2, -2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-2 -left-6 w-24 md:hidden pointer-events-none origin-top-left z-0"
        style={{ opacity: 0.55 }}
      >
        <img src={withBasePath("/column-left.png")} alt="" className="w-full h-auto" />
      </motion.div>
      <motion.div
        animate={{ rotate: [2, -2, 2] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-2 -right-6 w-24 md:hidden pointer-events-none origin-top-right z-0"
        style={{ opacity: 0.55 }}
      >
        <img src={withBasePath("/column-right.png")} alt="" className="w-full h-auto" />
      </motion.div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center">
        <AnimatedSection
          direction="fade"
          className="w-full text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2
            className="mb-3 sm:mb-4 md:mb-6"
            style={{
              fontFamily: "'Great Vibes', cursive",
              color: GOLD,
              opacity: 0.95,
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            }}
          >
            Countdown
          </h2>
          <p
            className="uppercase tracking-[0.5em] sm:tracking-[0.6em] font-semibold"
            style={{
              fontFamily: "'Cinzel', serif",
              color: CREAM,
              opacity: 0.75,
              fontSize: "clamp(9px, 1.1vw, 13px)",
            }}
          >
            {t.until}
          </p>
        </AnimatedSection>

        {mounted && (
          <div className="w-full max-w-3xl">
            {time.isOver ? (
              <AnimatedSection direction="fade" className="text-center">
                <h3
                  className="font-serif mb-4"
                  style={{
                    color: CREAM,
                    opacity: 0.97,
                    fontSize: "clamp(1.8rem, 4vw, 3rem)",
                  }}
                >
                  {t.over}
                </h3>
              </AnimatedSection>
            ) : (
              <AnimatedSection direction="up" delay={0.2}>
                <div
                  className="flex items-center justify-center gap-4 sm:gap-6 md:gap-10 lg:gap-14 w-full px-4 sm:px-0"
                  style={{ flexWrap: "nowrap" }}
                >
                  <Digit value={time.days} label={t.days} />
                  <div
                    className="w-[1px] bg-[#C9A84C]/30 self-center hidden sm:block"
                    style={{ height: "clamp(2.5rem, 6vw, 3.5rem)" }}
                  />
                  <Digit value={time.hours} label={t.hours} />
                  <div
                    className="w-[1px] bg-[#C9A84C]/30 self-center hidden sm:block"
                    style={{ height: "clamp(2.5rem, 6vw, 3.5rem)" }}
                  />
                  <Digit value={time.minutes} label={t.minutes} />
                </div>
              </AnimatedSection>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
