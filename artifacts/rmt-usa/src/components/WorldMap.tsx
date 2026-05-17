import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Office {
  name: string;
  label: string;
  pctX: number;
  pctY: number;
  description: string;
}

const offices: Office[] = [
  { name: "United States", label: "USA HQ", pctX: 21.5, pctY: 38, description: "North America" },
  { name: "Pakistan", label: "Pakistan", pctX: 63.8, pctY: 43, description: "South Asia" },
  { name: "UAE", label: "UAE", pctX: 58.2, pctY: 46, description: "Middle East" },
];

export const WorldMap = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-border">
      <img
        src="/world-map-bg.webp"
        alt="RMT USA global offices"
        className="w-full h-auto block select-none"
        draggable={false}
      />

      {offices.map((office) => (
        <div
          key={office.name}
          className="absolute cursor-pointer"
          style={{ left: `${office.pctX}%`, top: `${office.pctY}%`, transform: "translate(-50%, -50%)" }}
          onMouseEnter={() => setHovered(office.name)}
          onMouseLeave={() => setHovered(null)}
        >
          <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping" style={{ width: 22, height: 22, margin: "-3px" }} />
          <div className="w-4 h-4 rounded-full bg-primary border-2 border-white shadow-lg shadow-primary/40 relative z-10" />

          <AnimatePresence>
            {hovered === office.name && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.15 }}
                className="absolute pointer-events-none z-20 bg-[#060d17] text-white text-xs px-3 py-2 rounded-lg shadow-xl whitespace-nowrap border border-primary/30"
                style={{ bottom: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)" }}
              >
                <p className="font-bold text-primary">{office.label}</p>
                <p className="text-white/60 mt-0.5">{office.description}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};
