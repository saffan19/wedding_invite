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

function EventBlock({ event, delay }: { event: (typeof EVENTS)[number]; delay: number }) {
  return (
    <div className="flex flex-col items-center w-full max-w-lg mx-auto">
      <motion.div
        initial={{ y: 16, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        animate={{ y: [0, -8, 0], rotate: [-0.3, 0.3, -0.3] }}
        transition={{
          y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 0.8, delay },
        }}
        className="mb-8 sm:mb-9"
      >
        <img
          src={withBasePath(event.image)}
          alt={`${event.name} — illustration`}
          className="h-auto drop-shadow-xl block"
          style={{ width: "clamp(14rem, 36vw, 24rem)" }}
        />
      </motion.div>

      <AnimatedSection direction="up" delay={delay} className="flex flex-col items-center text-center">
        <h3
          className="leading-tight mb-3"
          style={{
            fontFamily: "'Great Vibes', cursive",
            color: THEME_COLOR,
            fontSize: "clamp(2rem, 5.5vw, 3rem)",
          }}
        >
          {event.name}
        </h3>
        <p
          className="uppercase font-medium mb-2.5"
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
  );
}

export default function ScheduleTimeline() {
  return (
    <section
      data-section
      className="relative bg-transparent overflow-hidden flex flex-col items-center justify-center min-h-[100svh]"
      style={{
        paddingTop: "clamp(4rem, 8vw, 6rem)",
        paddingBottom: "clamp(4rem, 8vw, 6rem)",
      }}
    >
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center">
        <AnimatedSection direction="fade" className="text-center mb-10 sm:mb-14">
          <h2
            style={{
              fontFamily: "'Great Vibes', cursive",
              color: THEME_COLOR,
              opacity: 0.9,
              fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
              lineHeight: 1.1,
            }}
          >
            Program
          </h2>
        </AnimatedSection>

        <div className="flex flex-col items-center w-full gap-14 sm:gap-20 md:gap-24">
          {EVENTS.map((event, i) => (
            <EventBlock key={event.name} event={event} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
