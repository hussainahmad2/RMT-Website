import React from "react";
import { motion } from "framer-motion";

interface LogoSpinnerProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  label?: string;
}

const SIZES = {
  sm: { container: 32, ring: 36, stroke: 2.5, img: 20, text: "text-xs" },
  md: { container: 52, ring: 58, stroke: 3, img: 32, text: "text-sm" },
  lg: { container: 72, ring: 80, stroke: 3.5, img: 44, text: "text-base" },
  xl: { container: 96, ring: 108, stroke: 4, img: 60, text: "text-lg" },
};

export function LogoSpinner({ size = "md", className = "", label }: LogoSpinnerProps) {
  const s = SIZES[size];
  const r = s.ring / 2 - s.stroke;
  const circumference = 2 * Math.PI * r;

  return (
    <div className={`flex flex-col items-center justify-center gap-3 ${className}`}>
      <div className="relative flex items-center justify-center" style={{ width: s.ring, height: s.ring }}>
        {/* Spinning ring */}
        <motion.svg
          className="absolute inset-0"
          width={s.ring}
          height={s.ring}
          viewBox={`0 0 ${s.ring} ${s.ring}`}
          animate={{ rotate: 360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
          style={{ originX: "50%", originY: "50%" }}
        >
          <defs>
            <linearGradient id={`spinner-grad-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
              <stop offset="60%" stopColor="#38bdf8" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="1" />
            </linearGradient>
          </defs>
          {/* Background track */}
          <circle
            cx={s.ring / 2}
            cy={s.ring / 2}
            r={r}
            fill="none"
            stroke="currentColor"
            strokeWidth={s.stroke}
            className="text-border"
            strokeOpacity={0.3}
          />
          {/* Animated arc */}
          <circle
            cx={s.ring / 2}
            cy={s.ring / 2}
            r={r}
            fill="none"
            stroke={`url(#spinner-grad-${size})`}
            strokeWidth={s.stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * 0.72}
            transform={`rotate(-90 ${s.ring / 2} ${s.ring / 2})`}
          />
        </motion.svg>

        {/* Static logo in center */}
        <img
          src="/rmt-icon.png"
          alt="RMT"
          width={s.img}
          height={s.img}
          className="object-contain relative z-10"
          style={{ imageRendering: "auto" }}
        />
      </div>

      {label && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className={`${s.text} text-muted-foreground font-medium tracking-wide`}
        >
          {label}
        </motion.p>
      )}
    </div>
  );
}

export function PageLoader() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] bg-background/80 backdrop-blur-sm flex items-center justify-center"
    >
      <LogoSpinner size="xl" label="Loading..." />
    </motion.div>
  );
}

export function SectionLoader({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center py-20 ${className}`}>
      <LogoSpinner size="lg" label="Loading..." />
    </div>
  );
}
