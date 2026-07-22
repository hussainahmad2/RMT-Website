import React from "react";
import { cn } from "@/lib/utils";

export type SectionVariant =
  | "hero-dark"
  | "primary"
  | "light"
  | "muted"
  | "dark"
  | "navy"
  | "gradient-blue"
  | "image-light"
  | "image-blue"
  | "image-dark";

interface PageSectionProps {
  children: React.ReactNode;
  variant?: SectionVariant;
  bgImage?: string;
  bgPosition?: string;
  /** clear = visible image; light = soft wash; medium = readable text on dark */
  overlayIntensity?: "clear" | "light" | "medium";
  className?: string;
  innerClassName?: string;
  dots?: boolean;
  rings?: boolean;
  ringSide?: "left" | "right" | "both";
  darkOverlay?: boolean;
  id?: string;
  as?: "section" | "div";
}

const variantStyles: Record<SectionVariant, string> = {
  "hero-dark": "bg-[#060d17]",
  primary: "bg-primary",
  light: "bg-background",
  muted: "bg-secondary/30",
  dark: "bg-[#0a1628] text-white",
  navy: "bg-[#071426]",
  "gradient-blue": "bg-gradient-to-br from-[#071426] via-[#0c2340] to-[#0a1628] text-white",
  "image-light": "bg-background",
  "image-blue": "bg-sky-50/80",
  "image-dark": "bg-[#060d17] text-white",
};

const isColoredVariant = (v: SectionVariant) =>
  v === "primary" || v === "navy" || v === "gradient-blue" || v === "dark";

const isWhiteSection = (v: SectionVariant) =>
  v === "light" || v === "image-light" || v === "image-blue" || v === "muted";

export function PageSection({
  children,
  variant = "light",
  bgImage,
  bgPosition = "center",
  overlayIntensity = "light",
  className,
  innerClassName,
  dots = false,
  rings = false,
  ringSide = "right",
  darkOverlay = false,
  id,
  as: Tag = "section",
}: PageSectionProps) {
  const hasImage = Boolean(bgImage);

  return (
    <Tag
      id={id}
      className={cn("relative py-20 sm:py-24 overflow-hidden", variantStyles[variant], className)}
    >
      {hasImage && (
        <div className="absolute inset-0 overflow-hidden" aria-hidden>
          <img
            src={bgImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover scale-105 blur-[2px] sm:blur-[2px] brightness-[1.06] saturate-[0.95]"
            style={{ objectPosition: bgPosition }}
            loading="lazy"
          />
          {overlayIntensity === "clear" ? (
            variant === "primary" ? (
              <>
                {/* Colored tint — image still visible underneath */}
                <div className="absolute inset-0 bg-primary/48" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/55 via-primary/35 to-[#071426]/45" />
                <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-primary/65 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-primary/55 to-transparent" />
              </>
            ) : isColoredVariant(variant) ? (
              <>
                {/* Navy / gradient tint — image still visible underneath */}
                <div className="absolute inset-0 bg-[#071426]/48" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0c2340]/55 via-[#071426]/38 to-[#071426]/52" />
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#071426]/70 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#071426]/62 to-transparent" />
              </>
            ) : isWhiteSection(variant) ? (
              <>
                {/* White wash — image still visible underneath */}
                <div className="absolute inset-0 bg-white/48" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/72 via-white/42 to-sky-50/50" />
                <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/82 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/78 to-transparent" />
              </>
            ) : (
              <>
                <div className="absolute inset-0 bg-white/48" />
                <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/42 to-white/58" />
              </>
            )
          ) : overlayIntensity === "medium" ? (
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-b",
                isColoredVariant(variant)
                  ? "from-[#071426]/75 via-[#071426]/60 to-[#071426]/78"
                  : "from-white/80 via-white/60 to-white/85"
              )}
            />
          ) : (
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-b",
                isColoredVariant(variant)
                  ? "from-[#071426]/65 via-[#071426]/50 to-[#071426]/70"
                  : "from-white/70 via-white/45 to-white/75"
              )}
            />
          )}
        </div>
      )}

      {darkOverlay && (
        <div
          className="absolute inset-0 bg-transparent dark:bg-black/40 pointer-events-none"
          aria-hidden
        />
      )}

      {dots && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, hsl(var(--primary) / 0.06) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden
        />
      )}

      {rings && (
        <>
          {(ringSide === "right" || ringSide === "both") && (
            <div
              className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full border border-primary/[0.06] translate-x-[45%] -translate-y-1/2 pointer-events-none hidden lg:block"
              aria-hidden
            />
          )}
          {(ringSide === "left" || ringSide === "both") && (
            <div
              className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full border border-primary/[0.06] -translate-x-[40%] -translate-y-1/2 pointer-events-none hidden lg:block"
              aria-hidden
            />
          )}
        </>
      )}

      <div className={cn("page-container relative z-10", innerClassName)}>{children}</div>
    </Tag>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  panel = false,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  panel?: boolean;
  className?: string;
}) {
  const content = (
    <>
      {eyebrow && (
        <p className={cn("font-semibold text-sm uppercase tracking-widest mb-3", light ? "text-sky-300" : "text-primary")}>
          {eyebrow}
        </p>
      )}
      <h2 className={cn("font-heading text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-3", light ? "text-white" : "text-foreground")}>
        {title}
      </h2>
      {description && (
        <p className={cn("text-lg max-w-2xl leading-relaxed", align === "center" && "mx-auto", light ? "text-white/90" : "text-muted-foreground")}>
          {description}
        </p>
      )}
    </>
  );

  return (
    <div className={cn(align === "center" ? "text-center" : "text-left", className)}>
      {panel ? (
        <div
          className={cn(
            "rounded-2xl backdrop-blur-md px-6 py-5 sm:px-8 sm:py-6 shadow-lg",
            light
              ? "border border-white/20 bg-[#071426]/80 text-white"
              : "border border-white/90 bg-white/95",
            align === "center" ? "mx-auto max-w-3xl" : "max-w-3xl"
          )}
        >
          {content}
        </div>
      ) : (
        content
      )}
    </div>
  );
}
