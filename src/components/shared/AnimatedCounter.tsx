import React, { useEffect, useRef, useState } from "react";
import { animate, motion, useReducedMotion } from "framer-motion";

interface AnimatedCounterProps {
  /** Final numeric value to count up to */
  value: number;
  /** Decimal places to display (e.g. 1 for "2.4") */
  decimals?: number;
  prefix?: string;
  suffix?: string;
  /** Total duration of the count animation, in seconds */
  duration?: number;
  /** Delay before the count animation begins, in seconds */
  delay?: number;
  /** Gate that controls when the animation is allowed to start (e.g. scroll-into-view) */
  start?: boolean;
  className?: string;
}

/**
 * Smoothly tweens a number from 0 to `value` using an eased animation curve
 * instead of jumping in discrete steps. Designed to be triggered once a
 * parent element scrolls into view (pass `start` from a viewport callback).
 * Adds a subtle pop-in + glow the instant counting begins, so the stat
 * feels like it's arriving rather than just ticking up.
 */
export function AnimatedCounter({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1.8,
  delay = 0,
  start = true,
  className = "",
}: AnimatedCounterProps) {
  const [display, setDisplay] = useState(0);
  const hasRun = useRef(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!start || hasRun.current) return;
    hasRun.current = true;

    if (prefersReducedMotion) {
      setDisplay(value);
      return;
    }

    const controls = animate(0, value, {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(Number(latest.toFixed(decimals))),
    });

    return () => controls.stop();
  }, [start, value, duration, delay, decimals, prefersReducedMotion]);

  return (
    <motion.span
      className={`inline-flex tabular-nums ${className}`}
      initial={{ opacity: 0, scale: 0.75, filter: "blur(4px)" }}
      animate={start ? { opacity: 1, scale: 1, filter: "blur(0px)" } : undefined}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </motion.span>
  );
}