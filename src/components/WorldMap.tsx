import React from "react";

export const WorldMap = () => {
  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-border bg-card">
      <img
        src="/world-map-bg.webp"
        alt="Revive Medical Technologies global presence"
        className="w-full h-auto block select-none object-contain"
        draggable={false}
      />
    </div>
  );
};
