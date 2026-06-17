import React from "react";
import { HOME_IMAGES } from "@/data/home-images";

export const BMD_SECTION_IMAGES = {
  overview: HOME_IMAGES.innovation[1],
  stats: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1600&q=80",
  partners: "https://images.unsplash.com/photo-1579684385127-1ef15d558a9a?w=1600&q=80",
  research: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=80",
  products: HOME_IMAGES.innovation[1],
  equipment: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1600&q=80",
  standards: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=80",
  capabilities: HOME_IMAGES.capabilities,
} as const;

export const DnaWatermark = () => (
  <svg viewBox="0 0 100 200" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M 20 10 Q 50 30 80 50 Q 50 70 20 90 Q 50 110 80 130 Q 50 150 20 170 Q 50 190 80 210" />
    <path d="M 80 10 Q 50 30 20 50 Q 50 70 80 90 Q 50 110 20 130 Q 50 150 80 170 Q 50 190 20 210" />
    <line x1="20" y1="50" x2="80" y2="50" />
    <line x1="20" y1="90" x2="80" y2="90" />
    <line x1="20" y1="130" x2="80" y2="130" />
    <line x1="20" y1="170" x2="80" y2="170" />
  </svg>
);

export const FlaskWatermark = () => (
  <svg viewBox="0 0 120 200" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M 45 20 L 75 20 L 80 95 Q 82 130 60 165 Q 38 130 40 95 Z" />
    <line x1="40" y1="55" x2="80" y2="55" />
    <line x1="42" y1="85" x2="78" y2="85" />
    <circle cx="60" cy="175" r="8" />
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
