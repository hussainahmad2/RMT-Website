import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Office {
  name: string;
  label: string;
  cx: number;
  cy: number;
  description: string;
}

const offices: Office[] = [
  { name: "United States", label: "USA HQ", cx: 215, cy: 190, description: "North America" },
  { name: "Pakistan", label: "Pakistan", cx: 638, cy: 215, description: "South Asia" },
  { name: "UAE", label: "UAE", cx: 582, cy: 230, description: "Middle East" },
];

export const WorldMap = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-border" style={{ background: "#1a2332" }}>
      {/* Background map image */}
      <img
        src="/world-map-bg.webp"
        alt="World map"
        className="w-full h-auto block select-none"
        draggable={false}
      />

      {/* SVG overlay for pins */}
      <svg
        viewBox="0 0 1000 500"
        className="absolute inset-0 w-full h-full"
        style={{ pointerEvents: "none" }}
      >
        {offices.map((office) => (
          <g
            key={office.name}
            style={{ cursor: "pointer", pointerEvents: "all" }}
            onMouseEnter={() => setHovered(office.name)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Pulse ring */}
            <circle cx={office.cx} cy={office.cy - 14} r="16" fill="hsl(var(--primary))" opacity="0.18">
              <animate attributeName="r" from="10" to="28" dur="2.2s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.28" to="0" dur="2.2s" repeatCount="indefinite" />
            </circle>
            {/* Shadow */}
            <ellipse cx={office.cx} cy={office.cy + 1} rx="7" ry="3.5" fill="rgba(0,0,0,0.3)" />
            {/* Pin body */}
            <path
              d={`M ${office.cx},${office.cy} C ${office.cx - 10},${office.cy - 8} ${office.cx - 12},${office.cy - 22} ${office.cx},${office.cy - 28} C ${office.cx + 12},${office.cy - 22} ${office.cx + 10},${office.cy - 8} ${office.cx},${office.cy} Z`}
              fill={hovered === office.name ? "hsl(var(--primary) / 0.9)" : "hsl(var(--primary))"}
              style={{ transition: "fill 0.2s" }}
            />
            {/* Pin inner */}
            <circle cx={office.cx} cy={office.cy - 20} r="4.5" fill="white" opacity="0.9" />
            <circle cx={office.cx} cy={office.cy - 20} r="2" fill="hsl(var(--primary))" />
          </g>
        ))}
      </svg>

      {/* Hover tooltips */}
      {offices.map((office) => (
        <AnimatePresence key={office.name}>
          {hovered === office.name && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.15 }}
              className="absolute pointer-events-none z-20 bg-[#060d17] text-white text-xs px-3 py-2 rounded-lg shadow-xl whitespace-nowrap border border-primary/30"
              style={{
                left: `${(office.cx / 1000) * 100}%`,
                top: `${((office.cy - 60) / 500) * 100}%`,
                transform: "translateX(-50%)",
              }}
            >
              <p className="font-bold text-primary">{office.label}</p>
              <p className="text-white/60 mt-0.5">{office.description}</p>
            </motion.div>
          )}
        </AnimatePresence>
      ))}

      {/* Legend */}
      <div className="absolute bottom-3 right-4 flex items-center gap-2 bg-[#060d17]/90 backdrop-blur-sm rounded-full px-3.5 py-1.5 border border-primary/25 shadow-sm">
        <div className="w-3 h-3 rounded-full bg-primary" />
        <span className="text-xs text-white/70 font-medium">RMT USA Office</span>
      </div>
    </div>
  );
};
