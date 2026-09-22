"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Direction = "up" | "down" | "left" | "right" | "fade";

interface AnimatedSectionProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
  once?: boolean;
}

const variants = {
  up:    { hidden: { opacity: 0, y: 36 },  visible: { opacity: 1, y: 0 } },
  down:  { hidden: { opacity: 0, y: -36 }, visible: { opacity: 1, y: 0 } },
  left:  { hidden: { opacity: 0, x: -36 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 36 },  visible: { opacity: 1, x: 0 } },
  fade:  { hidden: { opacity: 0 },          visible: { opacity: 1 } },
};

export default function AnimatedSection({
  children,
  direction = "up",
  delay = 0,
  className = "",
  once = true,
}: AnimatedSectionProps) {
  const ref = useRef(null);
  // A smaller margin triggers the reveal sooner as content approaches the
  // viewport — on short mobile screens, -80px was eating a large enough
  // share of the viewport that reveals felt late/abrupt rather than smooth.
  const isInView = useInView(ref, { once, margin: "-10% 0px -10% 0px" });

  return (
    <motion.div
      ref={ref}
      variants={variants[direction]}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
