import React from "react";
import { motion } from "framer-motion";

interface LogoSpinnerProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  label?: string;
}

const SIZES = {
  sm: { img: "w-8 h-8", wrapper: "gap-2", text: "text-xs" },
  md: { img: "w-14 h-14", wrapper: "gap-3", text: "text-sm" },
  lg: { img: "w-20 h-20", wrapper: "gap-4", text: "text-base" },
  xl: { img: "w-28 h-28", wrapper: "gap-5", text: "text-lg" },
};

export function LogoSpinner({ size = "md", className = "", label }: LogoSpinnerProps) {
  const s = SIZES[size];
  return (
    <div className={`flex flex-col items-center justify-center ${s.wrapper} ${className}`}>
      <motion.img
        src="/rmt-icon.png"
        alt="Loading..."
        animate={{ rotate: 360 }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
        className={`${s.img} object-contain`}
        style={{ imageRendering: "auto" }}
      />
      {label && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
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
