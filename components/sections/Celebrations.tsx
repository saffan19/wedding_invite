"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";

const THEME_COLOR = "#5C1220";

const TEXT = {
  title: "The Venue",
  viewMap: "View on Map",
  historyTitle: "Bengaluru Palace",
  history: [
    "Built in 1887 in a Tudor-style reminiscent of England's Windsor Castle, Bengaluru Palace is one of the city's most iconic heritage landmarks. Its manicured lawns and the historic Tennis Pavilion provide a timeless, regal backdrop for our Nikah and reception celebrations.",
  ],
};

function CelebrationCard({
  image,
  floatStyle = "yacht",
  viewMapLabel,
  mapUrl,
  location,
  address,
  date,
}: {
  image?: string;
  floatStyle?: "yacht" | "hotel" | "venue";
  viewMapLabel: string;
  mapUrl: string;
  location: string;
  address: string;
  date: string;
}) {
  const isHotel = floatStyle === "hotel";
  const isVenue = floatStyle === "venue";

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto">
      {image && (
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          animate={isHotel || isVenue
            ? { y: [0, -8, 0], rotate: [-0.3, 0.3, -0.3] }
            : { y: [0, -12, 0], rotate: [-1.5, 1.5, -1.5], x: [-3, 3, -3] }
          }
          transition={{
            y: { duration: isHotel || isVenue ? 5 : 4.5, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: isHotel || isVenue ? 6 : 5.5, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 0.8 }
          }}
          className="relative z-20"
          style={{ marginBottom: isVenue ? "20px" : (isHotel ? "-32px" : "-28px") }}
        >
          <img
            src={image}
            alt={`${location} — wedding venue`}
            className={`h-auto drop-shadow-xl block ${isVenue ? "rounded-3xl border-4 border-white/80" : ""}`}
            style={{
              width: isVenue ? "clamp(12rem, 30vw, 24rem)" : (isHotel ? "clamp(8rem, 22vw, 18rem)" : "clamp(7rem, 18vw, 16rem)"),
            }}
          />

          {/* Venue info rendered directly on the photograph — no panel/border,
              just clean editorial text on a soft bottom gradient for legibility. */}
          {isVenue && (
            <div
              className="absolute inset-x-0 bottom-0 z-30 pointer-events-none"
              style={{
                paddingInline: "clamp(0.5rem, 2vw, 1.25rem)",
                paddingBottom: "clamp(1rem, 3vw, 1.75rem)",
                paddingTop: "clamp(1.5rem, 4vw, 2.5rem)",
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(28,10,13,0.6) 75%, rgba(28,10,13,0.82) 100%)",
                borderBottomLeftRadius: "clamp(1.25rem, 3vw, 1.875rem)",
                borderBottomRightRadius: "clamp(1.25rem, 3vw, 1.875rem)",
              }}
            >
              <div
                className="flex flex-col items-center text-center pointer-events-auto"
                style={{ gap: "clamp(0.35rem, 1vw, 0.6rem)", color: "#F8F6F0" }}
              >
                <h3
                  className="leading-tight"
                  style={{
                    fontFamily: "'Great Vibes', cursive",
                    color: "#F8F6F0",
                    fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                  }}
                >
                  {location}
                </h3>
                <p
                  className="uppercase"
                  style={{
                    fontFamily: "'Cinzel', serif",
                    color: "rgba(248,246,240,0.85)",
                    letterSpacing: "0.18em",
                    fontSize: "clamp(8px, 0.8vw, 10px)",
                  }}
                >
                  {address}
                </p>
                <p
                  className="uppercase font-medium"
                  style={{
                    fontFamily: "'Cinzel', serif",
                    color: "rgba(248,246,240,0.95)",
                    letterSpacing: "0.22em",
                    fontSize: "clamp(9px, 0.9vw, 11px)",
                  }}
                >
                  {date}
                </p>
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${viewMapLabel} — opens in a new tab`}
                  className="uppercase font-bold border-b transition-all hover:opacity-80 active:scale-95 tap-target"
                  style={{
                    color: "#F8F6F0",
                    borderColor: "rgba(248,246,240,0.55)",
                    letterSpacing: "0.35em",
                    fontSize: "clamp(8px, 0.8vw, 10px)",
                    paddingBottom: 4,
                    marginTop: 2,
                  }}
                >
                  {viewMapLabel}
                </a>
              </div>
            </div>
          )}
        </motion.div>
      )}

      {!image && isVenue && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-8 sm:mb-10"
          style={{ gap: "clamp(0.4rem, 1vw, 0.65rem)" }}
        >
          <h3
            className="leading-tight"
            style={{
              fontFamily: "'Great Vibes', cursive",
              color: THEME_COLOR,
              fontSize: "clamp(2rem, 5.5vw, 3rem)",
            }}
          >
            {location}
          </h3>
          <p
            className="uppercase"
            style={{
              fontFamily: "'Cinzel', serif",
              color: THEME_COLOR,
              opacity: 0.7,
              letterSpacing: "0.18em",
              fontSize: "clamp(9px, 0.85vw, 11px)",
            }}
          >
            {address}
          </p>
          <p
            className="uppercase font-medium"
            style={{
              fontFamily: "'Cinzel', serif",
              color: THEME_COLOR,
              opacity: 0.8,
              letterSpacing: "0.22em",
              fontSize: "clamp(9px, 0.9vw, 11px)",
            }}
          >
            {date}
          </p>
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${viewMapLabel} — opens in a new tab`}
            className="uppercase font-bold border-b transition-all hover:opacity-80 active:scale-95 tap-target mt-1"
            style={{
              color: THEME_COLOR,
              borderColor: "rgba(92,18,32,0.4)",
              letterSpacing: "0.35em",
              fontSize: "clamp(8px, 0.8vw, 10px)",
              paddingBottom: 4,
            }}
          >
            {viewMapLabel}
          </a>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="w-full bg-[#FAF0E0] border border-[#E6D2A8] rounded-[clamp(1.5rem,4vw,3.25rem)] overflow-hidden"
        style={{
          padding: "clamp(1.75rem, 4vw, 4rem) clamp(1.25rem, 4vw, 3rem)",
        }}
      >
        <div className="flex flex-col items-center text-center w-full">

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center w-full max-w-md"
          >
            <h3
              className="leading-tight mb-4 sm:mb-6"
              style={{
                fontFamily: "'Great Vibes', cursive",
                color: THEME_COLOR,
                fontSize: "clamp(2rem, 5.5vw, 3.5rem)",
              }}
            >
              {TEXT.historyTitle}
            </h3>

            <div
              className="flex flex-col w-full"
              style={{ gap: "clamp(0.85rem, 1.6vw, 1.15rem)" }}
            >
              {TEXT.history.map((paragraph, i) => (
                <p
                  key={i}
                  className="font-serif leading-relaxed text-left"
                  style={{
                    color: THEME_COLOR,
                    opacity: 0.8,
                    fontSize: "clamp(0.95rem, 1.2vw, 1.1rem)",
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Celebrations() {
  const t = TEXT;

  return (
    <section
      data-section
      className="relative bg-transparent overflow-hidden flex flex-col items-center"
      style={{
        paddingTop: "clamp(4rem, 8vw, 6rem)",
        paddingBottom: "clamp(6rem, 10vw, 12rem)",
      }}
    >
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center">
        <AnimatedSection direction="fade" className="text-center mb-10 sm:mb-16 md:mb-24">
          <h2
            style={{
              fontFamily: "'Great Vibes', cursive",
              color: THEME_COLOR,
              opacity: 0.9,
              fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
              lineHeight: 1.1,
            }}
          >
            {t.title}
          </h2>
        </AnimatedSection>

        <div className="flex flex-col items-center w-full gap-12 sm:gap-20 md:gap-36">
          <CelebrationCard
            floatStyle="venue"
            location="Tennis Pavilion, Bengaluru Palace"
            address="1/21, Palace Road, Vasanth Nagar, Bengaluru, Karnataka 560006"
            date="22 & 23 October 2026"
            viewMapLabel={t.viewMap}
            mapUrl="https://www.google.com/maps?q=Tennis+Pavilion,+Bengaluru+Palace,+1/21,+Palace+Rd,+Vasanth+Nagar,+Bengaluru,+Karnataka+560006&ftid=0x3bae16447c8f44d5:0x9e5a5f22251abe34&entry=gps&shh=CAE"
          />
        </div>
      </div>
    </section>
  );
}