import React from "react";
import { motion, useReducedMotion, type Transition } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  id?: string;
  animation?: "fade" | "slideUp" | "slideRight" | "slideLeft" | "scaleUp" | "slideDown" | "blurFade";
  duration?: number;
  /** Animate on mount instead of waiting for scroll into view */
  immediate?: boolean;
  /**
   * Travel distance in px for slide animations. Larger values make the
   * "sliding in from the edge of the canvas" effect read clearly.
   * Defaults are already tuned per-animation; override only when a
   * section needs an even more dramatic entrance.
   */
  distance?: number;
  /** How much of the element must enter the viewport before it fires */
  amount?: number;
}

const smoothEase = [0.22, 1, 0.36, 1] as const;

function buildAnimations(distance: number) {
  return {
    fade: {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
    },
    slideUp: {
      initial: { opacity: 0, y: distance },
      whileInView: { opacity: 1, y: 0 },
    },
    slideRight: {
      initial: { opacity: 0, x: -distance * 1.8 },
      whileInView: { opacity: 1, x: 0 },
    },
    slideLeft: {
      initial: { opacity: 0, x: distance * 1.8 },
      whileInView: { opacity: 1, x: 0 },
    },
    scaleUp: {
      initial: { opacity: 0, scale: 0.88 },
      whileInView: { opacity: 1, scale: 1 },
    },
    slideDown: {
      initial: { opacity: 0, y: -distance },
      whileInView: { opacity: 1, y: 0 },
    },
    blurFade: {
      initial: { opacity: 0, y: distance * 0.45, filter: "blur(14px)" },
      whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
    },
  };
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  delay = 0,
  className = "",
  id,
  animation = "slideUp",
  duration = 0.85,
  immediate = false,
  distance = 56,
  amount = 0.15,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const animations = buildAnimations(distance);
  const target = animations[animation].whileInView;
  const transition: Transition = {
    duration,
    delay,
    ease: smoothEase,
  };

  if (prefersReducedMotion) {
    return (
      <div id={id} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      id={id}
      initial={animations[animation].initial}
      animate={immediate ? target : undefined}
      whileInView={immediate ? undefined : target}
      viewport={immediate ? undefined : { once: true, margin: "-80px", amount }}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
};