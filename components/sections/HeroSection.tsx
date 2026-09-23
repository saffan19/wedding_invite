"use client";

import { motion, useAnimation } from "framer-motion";
import { weddingConfig } from "@/lib/wedding-config";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useWedding } from "@/components/providers/WeddingContext";
import { withBasePath } from "@/lib/basePath";
import ScriptName from "@/components/ui/ScriptName";

const TEXT = {
  preHeading: "We are getting married",
  scroll: "Scroll Down",
};

export default function HeroSection() {
  const { invitationOpen } = useWedding();
  const [mounted, setMounted] = useState(false);
  const controlsContent = useAnimation();
  const controlsArrow = useAnimation();

  const t = TEXT;

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Content reveals once, the moment the envelope is tapped open — no
  // further automatic transitions happen after that.
  useEffect(() => {
    if (!invitationOpen) return;
    controlsContent.start({ opacity: 1, y: 0, transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] } });
    controlsArrow.start({ opacity: 1, y: 0, transition: { duration: 1, delay: 1.1 } });
  }, [invitationOpen, controlsContent, controlsArrow]);

  // Respect users who enable reduced motion (spec §8 Accessibility).
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const handleScrollDown = () => {
    if (typeof document === "undefined") return;
    const sections = document.querySelectorAll("[data-section]");
    sections[1]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (!mounted) return null;

  return (
    <section
      data-section
      className="relative h-[100svh] w-full overflow-hidden bg-white"
    >
      {/* ── BACKGROUND ── */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('${withBasePath("/hero-background.png")}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/5" />
        {/* Scrim so the pre-heading stays legible regardless of how bright
            the underlying image is where it sits. */}
        <div
          className="absolute inset-x-0 top-0"
          style={{
            height: "48%",
            background: "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.28) 55%, rgba(0,0,0,0) 100%)",
          }}
        />
      </div>

      {/* ── HERO TEXT ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={controlsContent}
        className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center px-4 sm:px-6 pointer-events-none"
      >
        {/* Content — fluid sizing */}
        <div className="flex flex-col items-center gap-2 md:gap-4 drop-shadow-2xl max-w-full">
          <motion.p
            className="text-white text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.5em] sm:tracking-[0.6em] font-light mb-4 sm:mb-6 md:mb-8 px-2"
            style={{ fontFamily: "'Cinzel', serif", textShadow: "0 2px 12px rgba(0,0,0,0.35)" }}
          >
            {t.preHeading}
          </motion.p>

          <h1
            className="text-white leading-none"
            style={{
              fontFamily: "'Great Vibes', cursive",
              textShadow: "0 4px 20px rgba(0,0,0,0.4)",
              fontSize: "clamp(3rem, 14vw, 11rem)",
            }}
          >
            <ScriptName name={weddingConfig.bride} />
          </h1>

          <span
            className="text-white font-serif italic my-1 sm:my-2"
            style={{
              fontSize: "clamp(1.1rem, 3vw, 1.6rem)",
              textShadow: "0 2px 12px rgba(0,0,0,0.35)",
            }}
          >
            &
          </span>

          <h1
            className="text-white leading-none"
            style={{
              fontFamily: "'Great Vibes', cursive",
              textShadow: "0 4px 20px rgba(0,0,0,0.4)",
              fontSize: "clamp(3rem, 14vw, 11rem)",
            }}
          >
            {weddingConfig.groom}
          </h1>
        </div>
      </motion.div>

      {/* ── SCROLL INDICATOR (Appears after entrance) — compact glass disc ── */}
      <motion.button
        type="button"
        onClick={handleScrollDown}
        initial={{ opacity: 0, y: -12 }}
        animate={controlsArrow}
        whileHover={prefersReducedMotion ? undefined : { scale: 1.10 }}
        whileTap={{ scale: 0.94 }}
        aria-label={t.scroll}
        className="group absolute bottom-7 sm:bottom-9 left-1/2 -translate-x-1/2 z-40 flex items-center justify-center rounded-full cursor-pointer border border-white/35 bg-white/15 backdrop-blur-md transition-[box-shadow,background-color,border-color] duration-300 hover:bg-white/25 hover:border-white/55"
        style={{
          // 44px target — just enough for a touch tap on mobile, scaled slightly on desktop
          width: 44,
          height: 44,
          padding: 0,
          boxShadow:
            "0 6px 22px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.18)",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.boxShadow =
            "0 6px 22px rgba(0,0,0,0.28), 0 0 18px rgba(255,255,255,0.35), inset 0 1px 0 rgba(255,255,255,0.22)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.boxShadow =
            "0 6px 22px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.18)";
        }}
      >
        <motion.div
          animate={prefersReducedMotion ? { y: 0 } : { y: [0, 4, 0] }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { repeat: Infinity, duration: 1.8, ease: "easeInOut" }
          }
          style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <ChevronDown
            className="text-white transition-[filter,transform] duration-300 group-hover:brightness-110"
            size={20}
            strokeWidth={2.25}
            style={{
              filter: "drop-shadow(0 1px 4px rgba(0,0,0,0.45))",
            }}
          />
        </motion.div>
      </motion.button>

      {/* Invisible readout for screen readers — same label, zero visual weight */}
      <span className="sr-only">{t.scroll}</span>
    </section>
  );
}
