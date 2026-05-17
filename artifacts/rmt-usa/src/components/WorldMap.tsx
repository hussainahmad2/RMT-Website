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
    <div className="relative w-full rounded-2xl overflow-hidden border border-border bg-secondary/40">
      <svg viewBox="0 0 1000 500" className="w-full h-auto block" style={{ background: "transparent" }}>

        {/* ---- Continents ---- */}
        {/* Greenland */}
        <path d="M 195,12 C 220,6 252,10 265,26 C 275,40 268,58 248,64 C 224,68 196,54 190,38 C 185,26 188,16 195,12 Z"
          className="fill-muted stroke-border" strokeWidth="0.8" />

        {/* North America */}
        <path d="M 62,50 C 98,28 152,24 196,40 C 228,52 252,74 260,106 C 270,142 265,175 250,202 C 234,232 208,254 180,264 C 156,272 130,268 114,254 C 94,238 76,212 68,182 C 56,148 50,112 53,80 Z"
          className="fill-muted stroke-border" strokeWidth="0.8" />
        {/* Mexico / Central America */}
        <path d="M 178,264 C 192,268 200,278 195,296 C 188,308 172,312 162,302 C 152,290 155,274 165,268 Z"
          className="fill-muted stroke-border" strokeWidth="0.8" />
        {/* Caribbean islands */}
        <ellipse cx="238" cy="248" rx="8" ry="5" className="fill-muted stroke-border" strokeWidth="0.6" />

        {/* South America */}
        <path d="M 158,305 C 175,282 205,276 226,285 C 248,296 262,322 268,355 C 276,395 272,432 256,456 C 238,480 210,488 186,482 C 160,474 142,452 138,425 C 132,392 136,355 142,325 Z"
          className="fill-muted stroke-border" strokeWidth="0.8" />

        {/* Iceland */}
        <ellipse cx="398" cy="40" rx="18" ry="10" className="fill-muted stroke-border" strokeWidth="0.6" />

        {/* Europe (UK + mainland) */}
        <path d="M 444,56 C 456,48 472,50 480,62 C 487,74 481,86 468,88 C 455,90 443,80 444,67 Z"
          className="fill-muted stroke-border" strokeWidth="0.8" />
        <path d="M 460,65 C 490,44 535,42 556,56 C 572,66 572,82 560,96 C 546,112 524,118 505,115 C 482,111 463,98 460,82 Z"
          className="fill-muted stroke-border" strokeWidth="0.8" />
        {/* Scandinavia */}
        <path d="M 488,22 C 510,12 536,15 548,30 C 558,43 553,60 536,66 C 518,70 496,60 488,44 Z"
          className="fill-muted stroke-border" strokeWidth="0.8" />

        {/* Africa */}
        <path d="M 455,135 C 488,122 535,124 564,140 C 588,154 596,182 594,215 C 592,252 580,290 562,320 C 540,358 510,388 488,402 C 466,414 445,410 432,393 C 417,373 413,340 418,305 C 424,265 436,232 442,198 C 448,168 448,152 455,135 Z"
          className="fill-muted stroke-border" strokeWidth="0.8" />
        {/* Madagascar */}
        <path d="M 582,340 C 590,332 604,334 608,348 C 612,362 606,376 596,378 C 585,380 577,368 578,354 Z"
          className="fill-muted stroke-border" strokeWidth="0.6" />

        {/* Middle East / Arabian Peninsula */}
        <path d="M 553,100 C 580,90 616,94 636,110 C 652,124 652,148 638,165 C 622,182 596,188 574,178 C 552,168 543,144 548,120 Z"
          className="fill-muted stroke-border" strokeWidth="0.8" />

        {/* Russia / Central Asia */}
        <path d="M 538,14 C 620,4 725,6 800,20 C 842,28 874,45 876,65 C 878,85 855,102 820,106 C 782,110 735,102 700,96 C 660,90 620,90 590,86 C 558,80 536,64 532,44 Z"
          className="fill-muted stroke-border" strokeWidth="0.8" />

        {/* South Asia (India + Pakistan) */}
        <path d="M 615,110 C 650,98 692,102 716,120 C 736,136 740,162 730,192 C 718,224 695,248 665,258 C 640,266 616,256 602,236 C 586,212 588,182 596,156 C 603,134 610,120 615,110 Z"
          className="fill-muted stroke-border" strokeWidth="0.8" />

        {/* China / East Asia */}
        <path d="M 700,50 C 745,38 798,42 834,62 C 858,76 865,104 852,132 C 838,162 806,178 770,176 C 738,174 710,158 698,132 C 685,105 686,72 700,50 Z"
          className="fill-muted stroke-border" strokeWidth="0.8" />
        {/* Japan */}
        <path d="M 848,68 C 864,58 882,63 888,80 C 894,96 882,112 866,114 C 850,115 837,100 838,84 Z"
          className="fill-muted stroke-border" strokeWidth="0.8" />
        {/* SE Asia */}
        <path d="M 738,155 C 765,142 800,146 812,168 C 822,186 812,208 793,214 C 770,220 745,208 738,185 Z"
          className="fill-muted stroke-border" strokeWidth="0.8" />

        {/* Australia */}
        <path d="M 768,282 C 818,264 878,268 912,292 C 934,308 940,340 928,368 C 914,398 878,424 840,428 C 800,432 764,412 750,384 C 734,354 740,315 760,295 Z"
          className="fill-muted stroke-border" strokeWidth="0.8" />
        {/* New Zealand */}
        <path d="M 924,360 C 936,352 950,358 952,374 C 954,388 944,400 930,400 C 916,400 908,388 910,374 Z"
          className="fill-muted stroke-border" strokeWidth="0.6" />

        {/* ---- Office Pins ---- */}
        {offices.map((office) => (
          <g
            key={office.name}
            className="cursor-pointer"
            onMouseEnter={() => setHovered(office.name)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Pulse ring */}
            <circle cx={office.cx} cy={office.cy - 14} r="16" fill="hsl(var(--primary))" opacity="0.15">
              <animate attributeName="r" from="12" to="26" dur="2.2s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.25" to="0" dur="2.2s" repeatCount="indefinite" />
            </circle>
            {/* Pin drop shadow */}
            <ellipse cx={office.cx} cy={office.cy + 1} rx="7" ry="3.5" fill="rgba(0,0,0,0.15)" />
            {/* Pin body (teardrop) */}
            <path
              d={`M ${office.cx},${office.cy} C ${office.cx - 10},${office.cy - 8} ${office.cx - 12},${office.cy - 22} ${office.cx},${office.cy - 28} C ${office.cx + 12},${office.cy - 22} ${office.cx + 10},${office.cy - 8} ${office.cx},${office.cy} Z`}
              fill={hovered === office.name ? "hsl(var(--primary) / 0.85)" : "hsl(var(--primary))"}
              className="transition-all duration-200"
            />
            {/* Pin inner white circle */}
            <circle cx={office.cx} cy={office.cy - 20} r="4.5" fill="white" opacity="0.9" />
            {/* Pin inner ring */}
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
              className="absolute pointer-events-none z-20 bg-foreground text-background text-xs px-3 py-2 rounded-lg shadow-xl whitespace-nowrap"
              style={{
                left: `${(office.cx / 1000) * 100}%`,
                top: `${((office.cy - 50) / 500) * 100}%`,
                transform: "translateX(-50%)",
              }}
            >
              <p className="font-bold">{office.label}</p>
              <p className="text-background/60 mt-0.5">{office.description}</p>
            </motion.div>
          )}
        </AnimatePresence>
      ))}

      {/* Legend */}
      <div className="absolute bottom-3 right-4 flex items-center gap-2 bg-background/90 backdrop-blur-sm rounded-full px-3.5 py-1.5 border border-border shadow-sm">
        <div className="w-3 h-3 rounded-full bg-primary" />
        <span className="text-xs text-muted-foreground font-medium">RMT USA Office</span>
      </div>
    </div>
  );
};
