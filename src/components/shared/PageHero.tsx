import React from "react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  backgroundImage: string;
  children?: React.ReactNode;
  align?: "left" | "center";
  fullHeight?: boolean;
}

export function PageHero({
  eyebrow,
  title,
  description,
  backgroundImage,
  children,
  align = "left",
  fullHeight = false,
}: PageHeroProps) {
  const isCenter = align === "center";

  return (
    <section
      className={`relative overflow-hidden bg-[#060d17] flex ${fullHeight ? "min-h-[calc(100svh-4rem)] items-center" : "min-h-[52vh] md:min-h-[58vh] items-end"}`}
    >
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt=""
          className="h-full w-full object-cover scale-105"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060d17] via-[#060d17]/88 to-[#060d17]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060d17] via-transparent to-[#060d17]/50" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
        aria-hidden
      />

      <div className={`page-container relative z-10 w-full ${fullHeight ? "py-20 md:py-24 pt-20" : "pb-14 md:pb-16 pt-28"} ${isCenter ? "text-center" : ""}`}>
        <AnimatedSection immediate className={isCenter ? "max-w-3xl mx-auto" : "max-w-3xl"}>
          <div className={`inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 mb-5 backdrop-blur-sm ${isCenter ? "mx-auto" : ""}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-white/80 text-xs font-bold uppercase tracking-[0.18em]">{eyebrow}</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-[1.05] tracking-tight">
            {title}
          </h1>
          <div className={`h-px w-20 bg-primary mb-5 ${isCenter ? "mx-auto" : ""}`} />
          <p className={`text-white/65 text-lg md:text-xl leading-relaxed max-w-2xl ${isCenter ? "mx-auto" : ""}`}>
            {description}
          </p>
          {children && (
            <div className={`mt-8 flex flex-wrap gap-3 ${isCenter ? "justify-center" : ""}`}>
              {children}
            </div>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
}
