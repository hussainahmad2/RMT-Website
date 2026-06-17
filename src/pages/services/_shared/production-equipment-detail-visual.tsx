import React from "react";
import { PRODUCTION_EQUIPMENT_HERO_IMAGES } from "@/data/production-equipment-content";

export const PE_SECTION_IMAGES = {
  overview: PRODUCTION_EQUIPMENT_HERO_IMAGES[0],
  capabilities: PRODUCTION_EQUIPMENT_HERO_IMAGES[1],
  design: PRODUCTION_EQUIPMENT_HERO_IMAGES[2],
  lines: PRODUCTION_EQUIPMENT_HERO_IMAGES[3],
  cleanroom: PRODUCTION_EQUIPMENT_HERO_IMAGES[4],
  qualification: PRODUCTION_EQUIPMENT_HERO_IMAGES[5],
  automation: PRODUCTION_EQUIPMENT_HERO_IMAGES[1],
  specialist: PRODUCTION_EQUIPMENT_HERO_IMAGES[2],
  support: PRODUCTION_EQUIPMENT_HERO_IMAGES[3],
  process: PRODUCTION_EQUIPMENT_HERO_IMAGES[4],
  why: PRODUCTION_EQUIPMENT_HERO_IMAGES[5],
} as const;

export const GearWatermark = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="100" cy="100" r="28" />
    <circle cx="100" cy="100" r="12" />
    {Array.from({ length: 8 }).map((_, i) => {
      const angle = (i * Math.PI) / 4;
      const x1 = 100 + Math.cos(angle) * 36;
      const y1 = 100 + Math.sin(angle) * 36;
      const x2 = 100 + Math.cos(angle) * 52;
      const y2 = 100 + Math.sin(angle) * 52;
      return (
        <g key={i}>
          <line x1={x1} y1={y1} x2={x2} y2={y2} />
          <rect
            x={x2 - 6}
            y={y2 - 10}
            width="12"
            height="20"
            rx="2"
            transform={`rotate(${(angle * 180) / Math.PI + 90}, ${x2}, ${y2})`}
          />
        </g>
      );
    })}
  </svg>
);

export function ColumnWatermark({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`absolute inset-y-0 left-0 w-[130%] max-w-[520px] pointer-events-none select-none flex items-center ${className}`}
      aria-hidden
    >
      <div
        className="w-full aspect-square opacity-[0.11] sm:opacity-[0.13] lg:opacity-[0.15] text-primary -translate-x-[6%]"
        style={{ maskImage: "linear-gradient(to right, black 55%, transparent 92%)" }}
      >
        {children}
      </div>
    </div>
  );
}
