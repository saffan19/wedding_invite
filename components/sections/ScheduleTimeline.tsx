"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { withBasePath } from "@/lib/basePath";

const THEME_COLOR = "#5C1220";

const EVENTS = [
  {
    image: "/nikah.PNG",
    name: "The Nikah",
    date: "Thursday, 22 October 2026",
    time: "7:00 PM",
    note: "Dinner to follow",
  },
  {
    image: "/valima.PNG",
    name: "The Reception",
    date: "Friday, 23 October 2026",
    time: "7:00 PM",
    note: "Dinner to follow",
  },
];

function EventSection({ event }: { event: (typeof EVENTS)[number] }) {
  return (
    <section
      data-section
      className="relative bg-transparent overflow-hidden flex flex-col items-center justify-center min-h-[100svh]"
      style={{
        paddingTop: "clamp(4rem, 8vw, 6rem)",
        paddingBottom: "clamp(4rem, 8vw, 6rem)",
      }}
    >
      <div className="relative z-10 w-full max-w-lg mx-auto px-4 sm:px-6 flex flex-col items-center">
        <AnimatedSection direction="fade" className="text-center mb-8 sm:mb-10">
          <h2
            style={{
              fontFamily: "'Great Vibes', cursive",
              color: THEME_COLOR,
              opacity: 0.9,
              fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
              lineHeight: 1.1,
            }}
          >
            {event.name}
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
          className="mb-9 sm:mb-11"
        >
          <img
            src={withBasePath(event.image)}
            alt={`${event.name} — illustration`}
            className="h-auto drop-shadow-xl block"
            style={{ width: "clamp(14rem, 36vw, 24rem)" }}
          />
        </motion.div>

        <AnimatedSection direction="up" className="flex flex-col items-center text-center">
          <p
            className="uppercase font-medium mb-3"
            style={{
              fontFamily: "'Cinzel', serif",
              color: THEME_COLOR,
              opacity: 0.8,
              letterSpacing: "0.18em",
              fontSize: "clamp(10px, 1vw, 12px)",
            }}
          >
            {event.date} &middot; {event.time}
          </p>
          <p
            className="font-serif italic"
            style={{
              color: THEME_COLOR,
              opacity: 0.7,
              fontSize: "clamp(0.9rem, 1.1vw, 1.05rem)",
            }}
          >
            {event.note}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default function ScheduleTimeline() {
  return (
    <>
      {EVENTS.map((event) => (
        <EventSection key={event.name} event={event} />
      ))}
    </>
  );
}
