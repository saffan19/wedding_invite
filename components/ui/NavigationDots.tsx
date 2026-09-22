"use client";

import { motion } from "framer-motion";
import { useWedding } from "@/components/providers/WeddingContext";

// Section order matches the page layout in app/page.tsx
const SECTION_LABELS = ["Home", "Invitation", "Countdown", "Celebrations", "Schedule", "Dress Code", "Farewell"];

export default function NavigationDots() {
  const { activeSection, setActiveSection, invitationOpen } = useWedding();
  const labels = SECTION_LABELS;

  if (!invitationOpen) return null;

  return (
    <div
      className="fixed right-3 sm:right-4 md:right-5 top-1/2 -translate-y-1/2 z-50 flex-col gap-2 sm:gap-3 hidden sm:flex"
      aria-label="Section navigation"
    >
      {labels.map((label, i) => (
        <button
          key={label}
          onClick={() => {
            const sections = document.querySelectorAll("[data-section]");
            sections[i]?.scrollIntoView({ behavior: "smooth" });
            setActiveSection(i);
          }}
          className="group relative flex items-center justify-end gap-2 tap-target"
          aria-label={`Go to ${label}`}
        >
          <span
            className="absolute right-7 text-[10px] font-semibold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none hidden md:block"
            style={{ color: "#5C1220" }}
          >
            {label}
          </span>
          <motion.div
            animate={{
              width: activeSection === i ? 24 : 8,
              height: 8,
              backgroundColor: activeSection === i ? "#5C1220" : "rgba(92,18,32,0.45)",
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="rounded-full"
          />
        </button>
      ))}
    </div>
  );
}