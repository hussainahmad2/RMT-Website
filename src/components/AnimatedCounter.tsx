import React, { useEffect, useRef, useState } from "react";
import { animate } from "framer-motion";

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
}

/**
 * Smoothly tweens a number from 0 to `value` using an eased animation curve
 * instead of jumping in discrete steps. Designed to be triggered once a
 * parent element scrolls into view (pass `start` from a viewport callback).
 */
export function AnimatedCounter({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1.8,
  delay = 0,
  start = true,
}: AnimatedCounterProps) {
  const [display, setDisplay] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!start || hasRun.current) return;
    hasRun.current = true;

    const controls = animate(0, value, {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(Number(latest.toFixed(decimals))),
    });

    return () => controls.stop();
  }, [start, value, duration, delay, decimals]);

  return (
    <>
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </>
  );
}