"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { withBasePath } from "@/lib/basePath";

const THEME_COLOR = "#5C1220";

const TEXT = {
  title: "The Venue",
  viewMap: "View on Map",
  historyTitle: "The Tennis Pavilion",
  history: [
    "Tucked within the storied grounds of Bengaluru Palace, the Tennis Pavilion is a graceful colonial-era garden house — its long verandahs and iron-latticed arches once host to lawn tennis and afternoon gatherings in the palace's heyday.",
    "Framed by the palace's Tudor towers in the distance and surrounded by manicured lawns, its open-air charm and old-world elegance make it the perfect setting for our Nikah and reception.",
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
          className="relative z-20 mb-6 sm:mb-8"
        >
          <img
            src={image}
            alt={`${location} — wedding venue`}
            className="h-auto drop-shadow-xl block"
            style={{
              width: isVenue ? "clamp(16rem, 42vw, 30rem)" : (isHotel ? "clamp(8rem, 22vw, 18rem)" : "clamp(7rem, 18vw, 16rem)"),
            }}
          />
        </motion.div>
      )}

      {isVenue && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-8 sm:mb-10 w-full px-4"
          style={{ gap: "clamp(0.4rem, 1vw, 0.65rem)" }}
        >
          <h3
            className="leading-tight max-w-full"
            style={{
              fontFamily: "'Great Vibes', cursive",
              color: THEME_COLOR,
              fontSize: "clamp(1.6rem, 6.5vw, 3rem)",
              overflowWrap: "break-word",
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
            image={withBasePath("/tennis-pavilion.png")}
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