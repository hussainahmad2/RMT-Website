/** Shared blue theme classes for quality department detail pages */
export const QD_DARK_SECTION =
  "bg-gradient-to-br from-sky-950/95 via-slate-900 to-[#071426]/95 relative overflow-hidden";

export const QD_DARK_SECTION_ALT =
  "bg-gradient-to-br from-[#071426] via-slate-900 to-sky-950/90 relative overflow-hidden";

export const QD_MUTED_SECTION =
  "bg-gradient-to-br from-secondary/40 via-background to-sky-50/20 dark:from-secondary/20 dark:via-background dark:to-sky-950/15";

export const QD_PILL =
  "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-semibold";

export const QD_HERO_GRADIENT = "from-sky-300 via-primary to-sky-200";

export function QdDarkDecor() {
  return (
    <>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" aria-hidden />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" aria-hidden />
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden
      />
    </>
  );
}

export function QdGridOverlay() {
  return (
    <div
      className="absolute inset-0 opacity-[0.03] pointer-events-none"
      style={{
        backgroundImage:
          "linear-gradient(hsl(var(--primary) / 0.15) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.15) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
      aria-hidden
    />
  );
}
