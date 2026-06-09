import React from "react";
import { motion } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  id?: string;
  animation?: "fade" | "slideUp" | "slideRight" | "slideLeft" | "scaleUp";
  duration?: number;
  /** Animate on mount instead of waiting for scroll into view */
  immediate?: boolean;
}

const animations = {
  fade: {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
  },
  slideUp: {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
  },
  slideRight: {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
  },
  slideLeft: {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
  },
  scaleUp: {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
  },
};

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  delay = 0,
  className = "",
  id,
  animation = "slideUp",
  duration = 0.6,
  immediate = false,
}) => {
  const target = animations[animation].whileInView;

  return (
    <motion.div
      id={id}
      initial={animations[animation].initial}
      animate={immediate ? target : undefined}
      whileInView={immediate ? undefined : target}
      viewport={immediate ? undefined : { once: true, margin: "-50px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
