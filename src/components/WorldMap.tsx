import React from "react";
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

export const WorldMap = ({ offices }: WorldMapProps) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl border ${
        isDark ? "border-white/10 bg-[#050b16]" : "border-slate-200 bg-[#f8f9fb]"
      }`}
    >
      <img
        src="/world_map.webp"
        alt="Global strategic presence — United States headquarters and Pakistan South Asia office"
        className={`block h-auto w-full object-contain ${isDark ? "opacity-95" : ""}`}
        loading="lazy"
      />
      <span className="sr-only">
        Offices in {offices.map((office) => office.city).join(" and ")}.
      </span>
    </div>
  );
};
