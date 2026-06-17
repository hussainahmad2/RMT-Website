import React from "react";
import { MANUFACTURING_HERO_IMAGES } from "@/data/revive-manufacturing-content";

export const MDM_SECTION_IMAGES = {
  overview: MANUFACTURING_HERO_IMAGES[0],
  quality: MANUFACTURING_HERO_IMAGES[2],
  products: MANUFACTURING_HERO_IMAGES[3],
  capabilities: MANUFACTURING_HERO_IMAGES[1],
  cleanroom: MANUFACTURING_HERO_IMAGES[0],
  process: MANUFACTURING_HERO_IMAGES[4],
  validation: MANUFACTURING_HERO_IMAGES[5],
  why: MANUFACTURING_HERO_IMAGES[6],
} as const;

export const FactoryWatermark = () => (
  <svg viewBox="0 0 200 160" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M20 130 L20 70 L50 90 L50 50 L80 70 L80 40 L110 60 L110 30 L140 50 L140 130 Z" />
    <rect x="55" y="95" width="18" height="18" rx="1" />
    <rect x="95" y="95" width="18" height="18" rx="1" />
    <line x1="20" y1="130" x2="180" y2="130" />
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
