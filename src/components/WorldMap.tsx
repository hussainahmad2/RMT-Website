import React from "react";

export interface WorldMapOffice {
  city: string;
  label: string;
  description: string;
  address: string;
  latitude: number;
  longitude: number;
}

interface WorldMapProps {
  offices: WorldMapOffice[];
}

export const WorldMap = (_props: WorldMapProps) => {
  return (
    <div className="relative w-full overflow-hidden rounded-xl bg-slate-50 transition-colors duration-300 dark:bg-black">
      <img
        src="/world-map-bg.webp"
        alt="Revive Medical Technologies global presence"
        className="block h-auto w-full select-none object-contain brightness-110 contrast-110 hue-rotate-[165deg] invert saturate-[0.65] transition-[filter] duration-300 dark:brightness-100 dark:contrast-100 dark:hue-rotate-0 dark:invert-0 dark:saturate-100"
        draggable={false}
      />
    </div>
  );
};
