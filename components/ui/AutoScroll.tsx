"use client";

import { useEffect, useRef } from "react";
import { useWedding } from "@/components/providers/WeddingContext";

// How long to linger on each [data-section] element, in document order,
// before advancing to the next. Tuned to roughly how long each section
// takes to read. The last entry (Footer) has no "next" to advance to, so
// its value is unused but kept for index alignment.
const DWELL_MS = [3000, 4200, 3200, 5200, 3200, 5500, 0];
const SCROLL_DURATION_MS = 1400;

function easeInOutQuad(t: number) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

/**
 * Drives a one-time, cinematic auto-scroll through every [data-section]
 * once the envelope is opened — smooth eased scrolling with a pause on
 * each section, like a short video playing itself. Any real user input
 * (touch, wheel, click, key) permanently cancels it and hands control
 * back to normal manual scrolling — it never resumes after that.
 */
export default function AutoScroll() {
  const { invitationOpen } = useWedding();
  const cancelledRef = useRef(false);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!invitationOpen || startedRef.current) return;
    startedRef.current = true;

    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let rafId = 0;
    let timeoutId = 0;

    const cancel = () => {
      if (cancelledRef.current) return;
      cancelledRef.current = true;
      cancelAnimationFrame(rafId);
      window.clearTimeout(timeoutId);
      removeInterruptListeners();
    };

    const interruptEvents: (keyof WindowEventMap)[] = [
      "wheel", "touchstart", "pointerdown", "keydown",
    ];
    const addInterruptListeners = () => {
      interruptEvents.forEach((evt) => window.addEventListener(evt, cancel, { passive: true }));
    };
    const removeInterruptListeners = () => {
      interruptEvents.forEach((evt) => window.removeEventListener(evt, cancel));
    };

    function scrollToY(targetY: number): Promise<void> {
      return new Promise((resolve) => {
        const startY = window.scrollY;
        const diff = targetY - startY;
        if (Math.abs(diff) < 2) {
          resolve();
          return;
        }
        const startTime = performance.now();
        const step = (now: number) => {
          if (cancelledRef.current) return;
          const t = Math.min((now - startTime) / SCROLL_DURATION_MS, 1);
          window.scrollTo(0, startY + diff * easeInOutQuad(t));
          if (t < 1) {
            rafId = requestAnimationFrame(step);
          } else {
            resolve();
          }
        };
        rafId = requestAnimationFrame(step);
      });
    }

    function wait(ms: number): Promise<void> {
      return new Promise((resolve) => {
        timeoutId = window.setTimeout(resolve, ms);
      });
    }

    async function run() {
      const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-section]"));
      addInterruptListeners();

      for (let i = 0; i < sections.length; i++) {
        if (cancelledRef.current) return;
        const dwell = DWELL_MS[i] ?? 3200;
        await wait(dwell);
        if (cancelledRef.current) return;

        const next = sections[i + 1];
        if (!next) break;
        const targetY = next.getBoundingClientRect().top + window.scrollY;
        await scrollToY(targetY);
      }

      removeInterruptListeners();
    }

    run();

    return () => {
      cancel();
    };
  }, [invitationOpen]);

  return null;
}
