import { motion } from "framer-motion";

interface LogoSpinnerProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  label?: string;
}

const SIZES = {
  sm: { outer: 44, inner: 32, stroke: 2.5, glow: 3, img: 18, text: "text-xs" },
  md: { outer: 64, inner: 48, stroke: 3,   glow: 4, img: 28, text: "text-sm" },
  lg: { outer: 88, inner: 68, stroke: 3.5, glow: 5, img: 40, text: "text-base" },
  xl: { outer: 120, inner: 92, stroke: 4,  glow: 6, img: 56, text: "text-lg" },
};

export function LogoSpinner({ size = "md", className = "", label }: LogoSpinnerProps) {
  const s = SIZES[size];
  const uid = size;

  const outerR = s.outer / 2 - s.stroke - 1;
  const innerR = s.inner / 2 - s.stroke - 1;
  const outerC = 2 * Math.PI * outerR;
  const innerC = 2 * Math.PI * innerR;

  return (
    <div className={`flex flex-col items-center justify-center gap-3 ${className}`}>
      <div
        className="relative flex items-center justify-center"
        style={{ width: s.outer, height: s.outer }}
      >
        <svg
          className="absolute inset-0"
          width={s.outer}
          height={s.outer}
          viewBox={`0 0 ${s.outer} ${s.outer}`}
          style={{ overflow: "visible" }}
        >
          <defs>
            {/* Outer arc gradient (primary blue → transparent) */}
            <linearGradient id={`og-${uid}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              <stop offset="55%" stopColor="hsl(var(--primary))" stopOpacity="0.85" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="1" />
            </linearGradient>
            {/* Inner arc gradient (sage green → transparent) */}
            <linearGradient id={`ig-${uid}`} x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#53875F" stopOpacity="0" />
              <stop offset="55%" stopColor="#53875F" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#6aab76" stopOpacity="1" />
            </linearGradient>
            {/* Glow filter */}
            <filter id={`glow-${uid}`} x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation={s.glow * 0.8} result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            {/* Inner glow filter */}
            <filter id={`iglow-${uid}`} x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation={s.glow * 0.55} result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Outer track */}
          <circle
            cx={s.outer / 2}
            cy={s.outer / 2}
            r={outerR}
            fill="none"
            stroke="hsl(var(--border))"
            strokeWidth={s.stroke * 0.6}
            strokeOpacity={0.25}
          />

          {/* Inner track */}
          <circle
            cx={s.outer / 2}
            cy={s.outer / 2}
            r={innerR}
            fill="none"
            stroke="hsl(var(--border))"
            strokeWidth={s.stroke * 0.5}
            strokeOpacity={0.2}
          />
        </svg>

        {/* Outer rotating arc */}
        <motion.svg
          className="absolute inset-0"
          width={s.outer}
          height={s.outer}
          viewBox={`0 0 ${s.outer} ${s.outer}`}
          animate={{ rotate: 360 }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
          style={{ originX: "50%", originY: "50%", overflow: "visible" }}
        >
          <circle
            cx={s.outer / 2}
            cy={s.outer / 2}
            r={outerR}
            fill="none"
            stroke={`url(#og-${uid})`}
            strokeWidth={s.stroke}
            strokeLinecap="round"
            strokeDasharray={outerC}
            strokeDashoffset={outerC * 0.68}
            transform={`rotate(-90 ${s.outer / 2} ${s.outer / 2})`}
            filter={`url(#glow-${uid})`}
          />
        </motion.svg>

        {/* Inner counter-rotating arc */}
        <motion.svg
          className="absolute inset-0"
          width={s.outer}
          height={s.outer}
          viewBox={`0 0 ${s.outer} ${s.outer}`}
          animate={{ rotate: -360 }}
          transition={{ duration: 2.1, repeat: Infinity, ease: "linear" }}
          style={{ originX: "50%", originY: "50%", overflow: "visible" }}
        >
          <circle
            cx={s.outer / 2}
            cy={s.outer / 2}
            r={innerR}
            fill="none"
            stroke={`url(#ig-${uid})`}
            strokeWidth={s.stroke * 0.85}
            strokeLinecap="round"
            strokeDasharray={innerC}
            strokeDashoffset={innerC * 0.75}
            transform={`rotate(90 ${s.outer / 2} ${s.outer / 2})`}
            filter={`url(#iglow-${uid})`}
          />
        </motion.svg>

        {/* Logo in center with subtle pulse */}
        <motion.img
          src="/rmt-icon.png"
          alt="RMT"
          width={s.img}
          height={s.img}
          className="object-contain relative z-10"
          animate={{ opacity: [0.85, 1, 0.85], scale: [0.97, 1, 0.97] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          style={{ imageRendering: "auto" }}
        />
      </div>

      {label && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.45, 1, 0.45] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className={`${s.text} text-muted-foreground font-medium tracking-widest uppercase`}
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
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[9999] bg-background/85 backdrop-blur-sm flex items-center justify-center"
    >
      <LogoSpinner size="xl" label="Loading" />
    </motion.div>
  );
}

export function SectionLoader({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center py-20 ${className}`}>
      <LogoSpinner size="lg" label="Loading" />
    </div>
  );
}
