import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export interface WorldMapOffice {
  city: string;
  label: string;
  description: string;
  address: string;
  phone?: string;
  email?: string;
  latitude: number;
  longitude: number;
  markerOffsetX?: number;
  markerOffsetY?: number;
}

interface WorldMapProps {
  offices: WorldMapOffice[];
}

const VIEW_W = 1000;
const VIEW_H = 500;

/** Simple equirectangular projection — accurate enough for fixed office markers. */
function project(lat: number, lon: number) {
  const x = ((lon + 180) / 360) * VIEW_W;
  const y = ((90 - lat) / 180) * VIEW_H;
  return { x, y };
}

export const WorldMap = ({ offices }: WorldMapProps) => {
  const { theme } = useTheme();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const points = offices.map((office) => {
    const projected = project(office.latitude, office.longitude);
    return {
      office,
      x: projected.x + (office.markerOffsetX ?? 0),
      y: projected.y + (office.markerOffsetY ?? 0),
    };
  });

  const isDark = theme === "dark";

  const mapStyle = useMemo<React.CSSProperties>(
    () => ({
      filter: isDark
        ? "invert(1) brightness(1.12) contrast(0.92) opacity(0.88)"
        : "invert(0.88) brightness(1.08) contrast(0.86) opacity(0.72)",
    }),
    [isDark]
  );

  return (
    <div className={`relative aspect-[2/1] w-full overflow-hidden rounded-2xl border ${isDark ? "border-white/10 bg-[#050b16]" : "border-slate-200 bg-[#f5f8fc]"}`}>
      <img
        src="/world-map-vector.svg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        style={mapStyle}
        loading="lazy"
        aria-hidden
      />

      <div
        className={`pointer-events-none absolute inset-0 ${isDark ? "opacity-80" : "opacity-90"}`}
        style={{
          background: isDark
            ? "linear-gradient(90deg,rgba(4,10,18,0.92)_0%,rgba(4,10,18,0.56)_34%,rgba(4,10,18,0.12)_68%,rgba(4,10,18,0)_100%), radial-gradient(circle at 24% 28%, rgba(59,130,246,0.16), transparent 42%), radial-gradient(circle at 78% 62%, rgba(56,189,248,0.12), transparent 46%)"
            : "linear-gradient(90deg,rgba(248,250,252,0.96)_0%,rgba(241,245,249,0.72)_34%,rgba(226,232,240,0.24)_68%,rgba(255,255,255,0)_100%), radial-gradient(circle at 24% 28%, rgba(59,130,246,0.08), transparent 42%), radial-gradient(circle at 78% 62%, rgba(56,189,248,0.06), transparent 46%)",
        }}
        aria-hidden
      />

      <div className="absolute inset-0 z-10">
        {points.map((p, i) => (
          <motion.button
            key={p.office.city}
            type="button"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.15 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -translate-x-1/2 -translate-y-1/2 outline-none"
            style={{
              left: `${(p.x / VIEW_W) * 100}%`,
              top: `${(p.y / VIEW_H) * 100}%`,
            }}
            onMouseEnter={() => setActiveIndex(i)}
            onMouseLeave={() => setActiveIndex(null)}
            onFocus={() => setActiveIndex(i)}
            onBlur={() => setActiveIndex(null)}
            aria-label={`${p.office.city} office`}
          >
            <span className="absolute inset-0 rounded-full bg-sky-300/30 blur-lg" />
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-sky-200/90 bg-white text-sky-700 shadow-[0_0_0_5px_rgba(125,211,252,0.16)] dark:border-sky-200/70 dark:bg-[#e0f2fe] dark:text-sky-700">
              <MapPin className="h-5 w-5" />
            </span>
            <span className="sr-only">{p.office.city}</span>
          </motion.button>
        ))}
      </div>

      {activeIndex !== null && points[activeIndex] && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="pointer-events-none z-20 max-w-[15rem] rounded-xl border border-slate-200 bg-white p-3.5 shadow-xl backdrop-blur-sm dark:border-white/15 dark:bg-[#0b1322]/95"
          style={{
            left: `${Math.min(Math.max(points[activeIndex].x / VIEW_W * 100 + 3, 10), 72)}%`,
            top: `${Math.min(Math.max(points[activeIndex].y / VIEW_H * 100 - 10, 8), 78)}%`,
            position: "absolute",
          }}
        >
          <div className="flex items-start gap-2">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary dark:text-sky-300" />
            <div className="min-w-0">
              <p className="text-sm font-bold text-[#0c447c] dark:text-white">{points[activeIndex].office.city}</p>
              <p className="mt-0.5 text-xs leading-snug text-slate-600 dark:text-white/60">{points[activeIndex].office.description}</p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};
