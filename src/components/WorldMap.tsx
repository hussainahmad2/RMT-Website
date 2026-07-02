import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export interface WorldMapOffice {
  city: string;
  label: string;
  description: string;
  address: string;
  phone?: string;
  email?: string;
  latitude: number;
  longitude: number;
}

interface WorldMapProps {
  offices: WorldMapOffice[];
}

const VIEW_W = 1000;
const VIEW_H = 500;

/** Simple equirectangular projection — accurate enough for a stylized plate */
function project(lat: number, lon: number) {
  const x = ((lon + 180) / 360) * VIEW_W;
  const y = ((90 - lat) / 180) * VIEW_H;
  return { x, y };
}

/** Rough lat/lon bounding bands used to sketch an abstract, dot-matrix landmass field.
 *  Not cartographically precise — an intentionally stylized "network plate" rather
 *  than a literal atlas. */
const LAND_BANDS: Array<[number, number, number, number]> = [
  // North America
  [15, 30, -112, -82],
  [30, 50, -126, -68],
  [50, 71, -168, -58],
  // South America
  [-10, 13, -81, -53],
  [-35, -10, -76, -34],
  [-56, -35, -74, -62],
  // Europe
  [36, 60, -9, 41],
  [60, 71, 4, 32],
  // Africa
  [15, 38, -18, 36],
  [-35, 15, -19, 47],
  // Asia
  [5, 55, 41, 151],
  [55, 76, 58, 180],
  [-10, 6, 95, 142],
  // Australia
  [-39, -10, 112, 155],
];

function seededJitter(i: number) {
  const s = Math.sin(i * 12.9898) * 43758.5453;
  return s - Math.floor(s);
}

function generateDotField() {
  const dots: { x: number; y: number; r: number; o: number }[] = [];
  let i = 0;
  const step = 4;
  for (let lat = -60; lat <= 78; lat += step) {
    for (let lon = -180; lon <= 180; lon += step) {
      const inBand = LAND_BANDS.some(
        ([latMin, latMax, lonMin, lonMax]) => lat >= latMin && lat <= latMax && lon >= lonMin && lon <= lonMax
      );
      if (!inBand) continue;
      i += 1;
      const jitterX = (seededJitter(i) - 0.5) * step * 0.7;
      const jitterY = (seededJitter(i + 500) - 0.5) * step * 0.7;
      const { x, y } = project(lat + jitterY, lon + jitterX);
      const r = 1.3 + seededJitter(i + 900) * 1.1;
      const o = 0.28 + seededJitter(i + 1300) * 0.34;
      dots.push({ x, y, r, o });
    }
  }
  return dots;
}

export const WorldMap = ({ offices }: WorldMapProps) => {
  const dots = useMemo(() => generateDotField(), []);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const points = offices.map((office) => ({
    office,
    ...project(office.latitude, office.longitude),
  }));

  const [a, b] = points;

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#050b16]">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(circle at 24% 28%, rgba(59,130,246,0.22), transparent 42%), radial-gradient(circle at 78% 62%, rgba(56,189,248,0.16), transparent 46%)",
        }}
        aria-hidden
      />

      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        className="relative z-10 h-auto w-full"
        role="img"
        aria-label="Map showing RMT Medical Technologies offices in the United States and Pakistan"
      >
        <defs>
          <radialGradient id="wm-pin-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#7dd3fc" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="wm-arc" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
            <stop offset="50%" stopColor="#7dd3fc" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* graticule */}
        <g stroke="#7dd3fc" strokeOpacity="0.08" strokeWidth="1">
          {Array.from({ length: 9 }).map((_, i) => (
            <line key={`lat-${i}`} x1={0} x2={VIEW_W} y1={(i * VIEW_H) / 8} y2={(i * VIEW_H) / 8} />
          ))}
          {Array.from({ length: 13 }).map((_, i) => (
            <line key={`lon-${i}`} y1={0} y2={VIEW_H} x1={(i * VIEW_W) / 12} x2={(i * VIEW_W) / 12} />
          ))}
        </g>

        {/* landmass dot field */}
        <g>
          {dots.map((d, i) => (
            <circle key={i} cx={d.x} cy={d.y} r={d.r} fill="#7dd3fc" opacity={d.o} />
          ))}
        </g>

        {/* flight-path arc between the two offices */}
        {a && b && (
          <g>
            <path
              d={`M ${a.x} ${a.y} Q ${(a.x + b.x) / 2} ${Math.min(a.y, b.y) - 90} ${b.x} ${b.y}`}
              fill="none"
              stroke="url(#wm-arc)"
              strokeWidth={2}
              strokeDasharray="6 8"
            >
              <animate attributeName="stroke-dashoffset" from="0" to="-280" dur="8s" repeatCount="indefinite" />
            </path>
          </g>
        )}

        {/* office pins */}
        {points.map((p, i) => (
          <g
            key={p.office.city}
            transform={`translate(${p.x}, ${p.y})`}
            className="cursor-pointer"
            onMouseEnter={() => setActiveIndex(i)}
            onMouseLeave={() => setActiveIndex(null)}
            onFocus={() => setActiveIndex(i)}
            onBlur={() => setActiveIndex(null)}
            tabIndex={0}
            role="button"
            aria-label={`${p.office.city} office`}
          >
            <circle r="26" fill="url(#wm-pin-glow)" />
            <circle r="9" fill="#7dd3fc" opacity="0.35">
              <animate attributeName="r" values="7;16;7" dur="2.6s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.45;0;0.45" dur="2.6s" repeatCount="indefinite" />
            </circle>
            <circle r="5.5" fill="#e0f2fe" stroke="#0ea5e9" strokeWidth="2" />
            <text
              y={-16}
              textAnchor="middle"
              className="select-none"
              fill="#e0f2fe"
              fontSize="15"
              fontWeight={700}
              style={{ fontFamily: "var(--font-heading, inherit)" }}
            >
              {p.office.label}
            </text>
          </g>
        ))}
      </svg>

      {/* tooltip */}
      {activeIndex !== null && points[activeIndex] && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="pointer-events-none absolute left-3 top-3 z-20 max-w-[15rem] rounded-xl border border-white/15 bg-[#0b1322]/95 p-3.5 shadow-xl backdrop-blur-sm sm:left-4 sm:top-4"
        >
          <div className="flex items-start gap-2">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" />
            <div className="min-w-0">
              <p className="text-sm font-bold text-white">{points[activeIndex].office.city}</p>
              <p className="mt-0.5 text-xs leading-snug text-white/60">{points[activeIndex].office.description}</p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};