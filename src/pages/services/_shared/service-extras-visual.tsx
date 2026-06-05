import React from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { cn } from "@/lib/utils";
import { CheckCircle, ChevronRight, type LucideIcon } from "lucide-react";

/** Break out of page-container to full viewport width */
export function FullBleedBlock({
  bgClassName,
  children,
  className,
}: {
  bgClassName: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative w-screen left-1/2 -translate-x-1/2", className)}>
      <div className={cn("py-14 md:py-16", bgClassName)}>
        <div className="page-container">{children}</div>
      </div>
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      {eyebrow && (
        <p
          className={cn(
            "text-xs font-bold uppercase tracking-[0.2em] mb-2",
            light ? "text-white/60" : "text-primary"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-heading text-3xl md:text-4xl font-bold mb-3",
          light ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("text-sm md:text-base leading-relaxed", light ? "text-white/70" : "text-muted-foreground")}>
          {description}
        </p>
      )}
    </div>
  );
}

type LifecycleStep = {
  title: string;
  items: readonly string[];
  icon: LucideIcon;
};

export function LifecycleRoadmap({
  steps,
  variant = "default",
}: {
  steps: LifecycleStep[];
  variant?: "default" | "dark";
}) {
  const isDark = variant === "dark";
  const cardClass = isDark
    ? "bg-white/5 backdrop-blur-sm border-white/10 hover:border-primary/40 hover:bg-white/8"
    : "bg-card/80 backdrop-blur-sm border-border hover:border-primary/35";
  const titleClass = isDark ? "text-white" : "text-foreground";
  const textClass = isDark ? "text-white/70" : "text-muted-foreground";
  const iconBoxClass = isDark
    ? "bg-white/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
    : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground";

  const detailGridClass =
    steps.length >= 5
      ? "hidden lg:grid lg:grid-cols-2 xl:grid-cols-5 gap-5"
      : "hidden lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-5";

  return (
    <div className="space-y-12">
      {/* Horizontal lifecycle — desktop */}
      <div className="hidden lg:block relative py-6">
        <div className="absolute top-[2.85rem] left-[6%] right-[6%] h-0.5 bg-gradient-to-r from-transparent via-primary/60 to-transparent rounded-full" />
        <div
          className="grid relative z-10 gap-3"
          style={{ gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))` }}
        >
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex flex-col items-center text-center px-1"
              >
                <div
                  className={cn(
                    "w-[4.75rem] h-[4.75rem] rounded-2xl rotate-45 flex items-center justify-center shadow-xl mb-5 transition-transform hover:scale-110",
                    i === 0
                      ? "bg-primary text-primary-foreground shadow-primary/40 ring-4 ring-primary/20"
                      : isDark
                        ? "bg-white/10 border-2 border-primary/40 text-primary shadow-primary/15"
                        : "bg-card border-2 border-primary/30 text-primary shadow-primary/10"
                  )}
                >
                  <Icon className="w-7 h-7 -rotate-45" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-1.5">
                  Phase {String(i + 1).padStart(2, "0")}
                </span>
                <p className={cn("text-xs font-semibold leading-snug px-1", titleClass)}>{step.title}</p>
                {i < steps.length - 1 && (
                  <ChevronRight className="w-5 h-5 text-primary/30 absolute hidden" aria-hidden />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Vertical lifecycle — mobile & tablet */}
      <div className="lg:hidden relative pl-2">
        <div className="absolute left-[2.15rem] top-6 bottom-6 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20 rounded-full" />
        <div className="space-y-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="relative flex gap-5 items-start"
              >
                <div
                  className={cn(
                    "relative z-10 w-14 h-14 rounded-2xl rotate-45 flex items-center justify-center shrink-0 shadow-lg",
                    i === 0
                      ? "bg-primary text-primary-foreground shadow-primary/30"
                      : isDark
                        ? "bg-white/10 border-2 border-primary/35 text-primary"
                        : "bg-card border-2 border-primary/25 text-primary"
                  )}
                >
                  <Icon className="w-6 h-6 -rotate-45" />
                </div>
                <div className={cn("flex-1 pt-1 rounded-xl border p-4", cardClass)}>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                    Phase {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className={cn("font-heading font-bold text-sm mt-0.5 mb-3", titleClass)}>{step.title}</p>
                  <ul className="space-y-1.5">
                    {step.items.map((item) => (
                      <li key={item} className={cn("text-xs flex items-start gap-2", textClass)}>
                        <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Detail cards — full width on desktop */}
      <div className={detailGridClass}>
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={cn(
                "group relative rounded-2xl border p-6 overflow-hidden transition-all hover:shadow-xl",
                cardClass
              )}
            >
              <div className="absolute top-0 right-0 w-36 h-36 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
              <div className="relative flex items-start gap-4 mb-4">
                <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors", iconBoxClass)}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                    Phase {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className={cn("font-heading font-bold text-base mt-0.5", titleClass)}>{step.title}</h3>
                </div>
              </div>
              <ul className="relative space-y-2">
                {step.items.map((item) => (
                  <li key={item} className={cn("text-sm flex items-start gap-2", textClass)}>
                    <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

type PillarBlock = {
  title: string;
  items: readonly string[];
  icon: LucideIcon;
};

export function PillarGrid({ pillars }: { pillars: PillarBlock[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
      {pillars.map((pillar, i) => {
        const Icon = pillar.icon;
        return (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="bg-card border border-border rounded-2xl p-5 hover:border-primary/30 hover:shadow-md transition-all h-full flex flex-col"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3">
              <Icon className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-foreground text-sm mb-3">{pillar.title}</h3>
            <ul className="space-y-1.5 flex-1">
              {pillar.items.map((item) => (
                <li key={item} className="text-xs text-muted-foreground flex items-start gap-1.5 leading-relaxed">
                  <span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        );
      })}
    </div>
  );
}

export function IconFeatureStrip({
  items,
  icon: Icon,
}: {
  items: readonly string[];
  icon: LucideIcon;
}) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {items.map((item, i) => (
        <motion.div
          key={item}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.04 }}
          className="flex items-center gap-3 bg-card/90 border border-border rounded-xl px-4 py-3 hover:border-primary/30 transition-colors"
        >
          <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 text-primary">
            <Icon className="w-4 h-4" />
          </div>
          <span className="text-sm text-foreground font-medium leading-snug">{item}</span>
        </motion.div>
      ))}
    </div>
  );
}

type IconCard = {
  title: string;
  description?: string;
  features?: readonly string[];
  icon: LucideIcon;
};

export function IconCardGrid({ cards, columns = 2 }: { cards: IconCard[]; columns?: 2 | 3 }) {
  const gridClass =
    columns === 3
      ? "grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
      : "grid md:grid-cols-2 gap-5";

  return (
    <div className={gridClass}>
      {cards.map((card, i) => {
        const Icon = card.icon;
        return (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/35 hover:shadow-lg transition-all"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-primary group-hover:from-primary group-hover:to-primary/80 group-hover:text-primary-foreground transition-all">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-foreground">{card.title}</h3>
            </div>
            {card.description && (
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">{card.description}</p>
            )}
            {card.features && (
              <ul className="space-y-1.5">
                {card.features.map((f) => (
                  <li key={f} className="text-xs text-muted-foreground flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}

export function StatBadgeRow({
  items,
}: {
  items: readonly { label: string; value: string; icon: LucideIcon }[];
}) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
      {items.map((item, i) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="text-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-5"
          >
            <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
            <p className="font-heading text-xl md:text-2xl font-bold text-white">{item.value}</p>
            <p className="text-xs text-white/60 mt-1">{item.label}</p>
          </motion.div>
        );
      })}
    </div>
  );
}

export function WhyChooseGrid({
  items,
}: {
  items: readonly { title: string; description: string; icon: LucideIcon }[];
}) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {items.map((item, i) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="bg-card border border-border rounded-xl p-5 text-center hover:border-primary/30 transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 text-primary">
              <Icon className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-foreground text-sm mb-1">{item.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
          </motion.div>
        );
      })}
    </div>
  );
}

export function VerticalTimeline({
  phases,
}: {
  phases: readonly { title: string; items: readonly string[]; icon: LucideIcon }[];
}) {
  return (
    <div className="relative">
      <div className="absolute left-7 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary via-primary/40 to-transparent hidden md:block" />
      <div className="space-y-6">
        {phases.map((phase, i) => {
          const Icon = phase.icon;
          return (
            <motion.div
              key={phase.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative flex flex-col md:flex-row gap-4 md:gap-6"
            >
              <div className="flex md:flex-col items-center md:items-start gap-3 md:w-14 shrink-0">
                <div
                  className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center z-10 shadow-md",
                    i === 0 ? "bg-primary text-primary-foreground" : "bg-card border-2 border-primary/25 text-primary"
                  )}
                >
                  <Icon className="w-6 h-6" />
                </div>
              </div>
              <div className="flex-1 bg-card border border-border rounded-2xl p-5 md:p-6 hover:border-primary/30 transition-colors">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Step {i + 1}</span>
                <h3 className="font-heading font-bold text-foreground text-lg mt-1 mb-3">{phase.title}</h3>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {phase.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
