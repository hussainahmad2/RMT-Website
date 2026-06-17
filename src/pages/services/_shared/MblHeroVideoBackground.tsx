import React from "react";
import { MBL_HERO_VIDEO } from "@/data/mbl-hero-video";

export function MblHeroVideoBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={MBL_HERO_VIDEO} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-[#060d17]/92 via-[#060d17]/78 to-[#060d17]/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#060d17]/85 via-[#060d17]/25 to-[#060d17]/50" />
    </div>
  );
}
