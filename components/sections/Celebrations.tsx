"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { withBasePath } from "@/lib/basePath";

const THEME_COLOR = "#5C1220";
const GOLD = "#C9A84C";

const VENUE = {
  title: "Venue",
  name: "Tennis Pavilion, Bengaluru Palace",
  address: "1/21, Palace Road, Vasanth Nagar, Bengaluru, Karnataka 560006",
  description:
    "A graceful colonial-era garden house on the historic palace grounds — the setting for our Nikah and reception.",
  directionsLabel: "Directions",
  mapUrl:
    "https://www.google.com/maps?q=Tennis+Pavilion,+Bengaluru+Palace,+1/21,+Palace+Rd,+Vasanth+Nagar,+Bengaluru,+Karnataka+560006&ftid=0x3bae16447c8f44d5:0x9e5a5f22251abe34&entry=gps&shh=CAE",
};

export default function Celebrations() {
  return (
    <section
      data-section
      className="relative bg-transparent flex flex-col items-center justify-center min-h-[100svh]"
      style={{
        paddingTop: "clamp(4rem, 8vw, 6rem)",
        paddingBottom: "clamp(4rem, 8vw, 6rem)",
      }}
    >
      <div className="relative z-10 w-full max-w-2xl mx-auto px-6 sm:px-8 flex flex-col items-center">
        <AnimatedSection direction="fade" className="text-center mb-10 sm:mb-14">
          <h2
            style={{
              fontFamily: "'Great Vibes', cursive",
              color: THEME_COLOR,
              opacity: 0.9,
              fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
              lineHeight: 1.1,
            }}
          >
            {VENUE.title}
          </h2>
        </AnimatedSection>

        <motion.div
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          animate={{ y: [0, -8, 0], rotate: [-0.3, 0.3, -0.3] }}
          transition={{
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 0.8 },
          }}
          className="mb-14 sm:mb-16"
        >
          <img
            src={withBasePath("/tennis-pavilion.png")}
            alt={`${VENUE.name} — wedding venue`}
            className="h-auto drop-shadow-xl block"
            style={{ width: "clamp(16rem, 42vw, 30rem)" }}
          />
        </motion.div>

        <AnimatedSection
          direction="up"
          className="flex flex-col items-center text-center w-full px-4"
        >
          <h3
            className="leading-tight w-full max-w-full mb-4"
            style={{
              fontFamily: "'Great Vibes', cursive",
              color: THEME_COLOR,
              fontSize: "clamp(1.6rem, 6.5vw, 3rem)",
              overflowWrap: "break-word",
            }}
          >
            {VENUE.name}
          </h3>
          <p
            className="uppercase mb-7 w-full max-w-full"
            style={{
              fontFamily: "'Cinzel', serif",
              color: THEME_COLOR,
              opacity: 0.7,
              letterSpacing: "0.14em",
              fontSize: "clamp(9px, 0.85vw, 11px)",
              overflowWrap: "break-word",
            }}
          >
            {VENUE.address}
          </p>
          <p
            className="font-serif leading-relaxed w-full max-w-md mb-12"
            style={{
              color: THEME_COLOR,
              opacity: 0.85,
              fontSize: "clamp(0.95rem, 1.2vw, 1.1rem)",
              overflowWrap: "break-word",
            }}
          >
            {VENUE.description}
          </p>

          <motion.a
            href={VENUE.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${VENUE.directionsLabel} — opens in a new tab`}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 tap-target"
            style={{
              background: THEME_COLOR,
              color: "#F7EFE0",
              border: `1px solid ${GOLD}`,
              borderRadius: 999,
              padding: "14px 32px",
              fontFamily: "'Cinzel', serif",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              fontSize: "clamp(11px, 1vw, 13px)",
              fontWeight: 600,
              boxShadow: "0 10px 28px rgba(92,18,32,0.3)",
            }}
          >
            <MapPin size={16} strokeWidth={2} />
            {VENUE.directionsLabel}
          </motion.a>
        </AnimatedSection>
      </div>
    </section>
  );
}
