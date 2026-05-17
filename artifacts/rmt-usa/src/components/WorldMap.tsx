import React, { useState } from "react";
import { motion } from "framer-motion";

interface Office {
  name: string;
  label: string;
  x: string;
  y: string;
  description: string;
}

const offices: Office[] = [
  { name: "United States", label: "USA HQ", x: "22%", y: "38%", description: "Headquarters — North America" },
  { name: "Germany", label: "Europe", x: "50%", y: "28%", description: "European Operations" },
  { name: "Pakistan", label: "Pakistan", x: "63%", y: "43%", description: "South Asia Office" },
  { name: "UAE", label: "Middle East", x: "58%", y: "46%", description: "Middle East & Africa" },
];

export const WorldMap = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="relative w-full rounded-2xl overflow-hidden bg-foreground/5 border border-border">
      {/* Simplified SVG World Map */}
      <svg
        viewBox="0 0 1000 500"
        className="w-full h-auto"
        style={{ display: "block" }}
      >
        {/* Ocean background */}
        <rect width="1000" height="500" fill="hsl(var(--secondary))" />

        {/* North America */}
        <path d="M 60 60 L 120 50 L 170 55 L 200 80 L 220 100 L 240 120 L 230 160 L 200 180 L 180 200 L 160 230 L 130 240 L 100 220 L 80 200 L 70 170 L 65 140 L 60 110 Z" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="1" />
        {/* Mexico / Central America */}
        <path d="M 130 240 L 160 230 L 170 250 L 160 270 L 140 275 L 125 260 Z" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="1" />
        {/* South America */}
        <path d="M 160 300 L 200 280 L 240 290 L 260 320 L 265 360 L 255 400 L 230 430 L 200 440 L 175 420 L 155 390 L 150 350 L 155 320 Z" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="1" />
        {/* Greenland */}
        <path d="M 175 20 L 210 15 L 230 30 L 220 50 L 195 55 L 175 45 Z" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="1" />

        {/* Europe */}
        <path d="M 450 50 L 500 45 L 540 55 L 555 70 L 545 90 L 525 100 L 510 115 L 495 120 L 475 115 L 460 100 L 450 80 Z" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="1" />
        {/* Scandinavia */}
        <path d="M 490 20 L 520 15 L 535 35 L 520 50 L 500 45 L 490 30 Z" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="1" />
        {/* UK */}
        <path d="M 440 55 L 455 50 L 460 65 L 448 72 L 440 65 Z" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="1" />

        {/* Africa */}
        <path d="M 460 130 L 510 120 L 555 130 L 570 160 L 575 200 L 570 250 L 550 300 L 520 340 L 500 360 L 480 350 L 460 310 L 445 270 L 440 230 L 445 190 L 450 160 Z" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="1" />

        {/* Middle East */}
        <path d="M 555 100 L 590 95 L 620 110 L 625 130 L 610 145 L 590 150 L 570 145 L 555 130 Z" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="1" />

        {/* South Asia (India + Pakistan) */}
        <path d="M 610 115 L 660 110 L 690 120 L 695 150 L 685 180 L 660 200 L 640 210 L 625 200 L 615 175 L 610 150 Z" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="1" />

        {/* Russia / Central Asia */}
        <path d="M 530 15 L 700 10 L 780 25 L 800 50 L 760 70 L 720 75 L 680 70 L 650 80 L 620 75 L 595 80 L 570 70 L 550 55 L 535 40 Z" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="1" />

        {/* China / East Asia */}
        <path d="M 700 55 L 780 50 L 820 65 L 830 90 L 815 120 L 790 130 L 760 125 L 730 130 L 710 120 L 695 100 L 695 75 Z" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="1" />
        {/* Japan */}
        <path d="M 830 70 L 845 65 L 855 80 L 845 92 L 832 88 Z" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="1" />
        {/* Southeast Asia */}
        <path d="M 730 140 L 780 135 L 800 150 L 790 170 L 760 175 L 735 165 Z" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="1" />

        {/* Australia */}
        <path d="M 760 280 L 830 265 L 880 275 L 900 310 L 890 350 L 860 375 L 820 380 L 785 365 L 760 335 L 750 305 Z" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="1" />

        {/* Location Pin Markers */}
        {offices.map((office) => (
          <g key={office.name}>
            {/* Shadow */}
            <ellipse
              cx={`${parseFloat(office.x) * 10}`}
              cy={`${parseFloat(office.y) * 5 + 2}`}
              rx="6"
              ry="3"
              fill="rgba(0,0,0,0.2)"
            />
            {/* Pin body */}
            <circle
              cx={`${parseFloat(office.x) * 10}`}
              cy={`${parseFloat(office.y) * 5 - 10}`}
              r={hovered === office.name ? "10" : "8"}
              fill="hsl(var(--primary))"
              className="cursor-pointer transition-all duration-200"
              onMouseEnter={() => setHovered(office.name)}
              onMouseLeave={() => setHovered(null)}
            />
            {/* Pin inner dot */}
            <circle
              cx={`${parseFloat(office.x) * 10}`}
              cy={`${parseFloat(office.y) * 5 - 10}`}
              r="3"
              fill="white"
              className="pointer-events-none"
            />
            {/* Pin tail */}
            <path
              d={`M ${parseFloat(office.x) * 10 - 3} ${parseFloat(office.y) * 5 - 2} L ${parseFloat(office.x) * 10} ${parseFloat(office.y) * 5} L ${parseFloat(office.x) * 10 + 3} ${parseFloat(office.y) * 5 - 2}`}
              fill="hsl(var(--primary))"
              className="pointer-events-none"
            />
            {/* Pulse ring */}
            <circle
              cx={`${parseFloat(office.x) * 10}`}
              cy={`${parseFloat(office.y) * 5 - 10}`}
              r="14"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="1.5"
              opacity="0.4"
            >
              <animate attributeName="r" from="10" to="20" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.5" to="0" dur="2s" repeatCount="indefinite" />
            </circle>
          </g>
        ))}
      </svg>

      {/* Overlay Labels */}
      {offices.map((office) => (
        <div
          key={office.name}
          className="absolute pointer-events-none transition-opacity duration-200"
          style={{
            left: office.x,
            top: `calc(${office.y} - 48px)`,
            transform: "translateX(-50%)",
            opacity: hovered === office.name ? 1 : 0,
          }}
        >
          <div className="bg-foreground text-background text-xs px-2.5 py-1.5 rounded-lg shadow-lg whitespace-nowrap">
            <p className="font-bold">{office.label}</p>
            <p className="text-background/70">{office.description}</p>
          </div>
        </div>
      ))}

      {/* Legend */}
      <div className="absolute bottom-3 right-4 flex items-center gap-2 bg-background/80 backdrop-blur-sm rounded-full px-3 py-1.5 border border-border">
        <div className="w-3 h-3 rounded-full bg-primary" />
        <span className="text-xs text-muted-foreground font-medium">RMT USA Office</span>
      </div>
    </div>
  );
};
