import React from "react";
import { motion } from "framer-motion";
import {
  Bot,
  CheckCircle,
  Cog,
  Factory,
  Gauge,
  Handshake,
  Lightbulb,
  Map,
  Package,
  ShieldCheck,
  Stethoscope,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { HomeSection, SectionHeading } from "@/components/HomeSection";
import type { ServiceData } from "@/data/services";
import {
  PRODUCTION_EQUIPMENT_AUTOMATION,
  PRODUCTION_EQUIPMENT_CLEANROOM_LEVELS,
  PRODUCTION_EQUIPMENT_CLEANROOM_STANDARDS,
  PRODUCTION_EQUIPMENT_DESIGN,
  PRODUCTION_EQUIPMENT_LINE_FEATURES,
  PRODUCTION_EQUIPMENT_PROCESS_STEPS,
  PRODUCTION_EQUIPMENT_QUALIFICATION_DOCS,
  PRODUCTION_EQUIPMENT_QUALIFICATION_PHASES,
  PRODUCTION_EQUIPMENT_SPECIALIST,
  PRODUCTION_EQUIPMENT_SUPPORT,
  PRODUCTION_EQUIPMENT_WHY_CHOOSE,
} from "@/data/production-equipment-content";
import { PE_SECTION_IMAGES } from "./production-equipment-detail-visual";

const LINE_ICONS = [Map, Cog, Gauge, Package] as const;
const WHY_ICONS = [Factory, ShieldCheck, Lightbulb, Handshake] as const;
const SUPPORT_ICONS = [Wrench, Gauge, Package, ShieldCheck] as const;

function FeatureCard({
  title,
  description,
  points,
  icon: Icon,
  index,
  theme = "light",
  className = "",
}: {
  title: string;
  description: string;
  points?: readonly string[];
  icon: LucideIcon;
  index: number;
  theme?: "light" | "dark";
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      style={{ borderRadius: "3.5rem" }}
      className={`flex h-full flex-col overflow-hidden rounded-[52px] backdrop-blur-md p-6 sm:p-7 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        theme === "dark"
          ? "border border-white/15 bg-slate-950/55 text-white"
          : "border border-border bg-card text-foreground"
      } ${className}`}
    >
      <div
        className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${
          theme === "dark" ? "bg-white/10 text-sky-300" : "bg-gradient-to-br from-primary/20 to-sky-500/10 text-primary"
        }`}
      >
        <Icon className="h-6 w-6" />
      </div>
      <h3 className={`mb-2 font-heading text-lg font-bold sm:text-xl ${theme === "dark" ? "text-white" : "text-foreground"}`}>
        {title}
      </h3>
      <p className={`mb-4 text-base leading-relaxed ${theme === "dark" ? "text-white/78" : "text-muted-foreground"}`}>
        {description}
      </p>
      {points && (
        <ul className="mt-auto space-y-2">
          {points.map((p) => (
            <li key={p} className={`flex items-start gap-2 text-sm ${theme === "dark" ? "text-white/78" : "text-muted-foreground"}`}>
              <CheckCircle className={`mt-0.5 h-4 w-4 shrink-0 ${theme === "dark" ? "text-sky-300" : "text-primary"}`} />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}

function SectionBand({
  step,
  title,
  description,
  index,
}: {
  step: string;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      style={{ borderRadius: "3.5rem" }}
      className="flex h-full flex-col overflow-hidden rounded-[52px] border border-white/20 bg-white/10 p-6 backdrop-blur-md dark:border-white/10 dark:bg-slate-950/55"
    >
      <div className="mb-3 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-sm font-bold text-sky-300 dark:bg-white/5 dark:text-cyan-300">
          {step}
        </span>
        <div className="h-px flex-1 bg-white/15" />
      </div>
      <h3 className="mb-2 font-heading text-lg font-bold text-white dark:text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-sky-100/80 dark:text-slate-300">{description}</p>
    </motion.div>
  );
}

export function ProductionEquipmentServiceDetail({ service }: { service: ServiceData }) {
  return (
    <div className="space-y-0">
      <HomeSection
        variant="image-light"
        dots
        rings
        ringSide="left"
        className="py-16 sm:py-20"
      >
        <AnimatedSection className="mb-10 max-w-4xl">
          <SectionHeading
            eyebrow="Design & Engineering"
            title="Custom Equipment Design for Medical Device Manufacturing"
            description={PRODUCTION_EQUIPMENT_DESIGN.systemsApproach}
            align="left"
          />
        </AnimatedSection>

        <div className="grid items-stretch gap-6 lg:grid-cols-2">
          <FeatureCard
            title={PRODUCTION_EQUIPMENT_DESIGN.mechanical.title}
            description={PRODUCTION_EQUIPMENT_DESIGN.mechanical.description}
            points={PRODUCTION_EQUIPMENT_DESIGN.mechanical.points}
            icon={Cog}
            index={0}
            theme="light"
          />
          <FeatureCard
            title={PRODUCTION_EQUIPMENT_DESIGN.controls.title}
            description={PRODUCTION_EQUIPMENT_DESIGN.controls.description}
            points={PRODUCTION_EQUIPMENT_DESIGN.controls.points}
            icon={Bot}
            index={1}
            theme="light"
          />
          <div
            style={{ borderRadius: "3.5rem" }}
            className="overflow-hidden rounded-[52px] border border-border bg-card/95 p-6 sm:p-8 shadow-md backdrop-blur-md lg:col-span-2 dark:border-white/10 dark:bg-slate-950/55"
          >
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-primary">Engineering Scope</p>
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground dark:text-slate-300">
              {PRODUCTION_EQUIPMENT_DESIGN.intro}
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Custom hardware architecture",
                "Controls and automation integration",
                "Validation-aware design inputs",
                "Cleanroom-ready construction",
              ].map((item, i) => (
                <div
                  key={item}
                  className={`rounded-2xl border px-4 py-3 text-sm font-medium ${
                    i % 2 === 0
                      ? "border-primary/15 bg-primary/5 text-foreground dark:border-white/10 dark:bg-white/5 dark:text-white"
                      : "border-border/70 bg-secondary/30 text-muted-foreground dark:border-white/10 dark:bg-white/8 dark:text-slate-300"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </HomeSection>

      <HomeSection variant="dark" bgImage={PE_SECTION_IMAGES.lines} overlayIntensity="medium" dots className="py-16 sm:py-20">
        <AnimatedSection className="mb-10 max-w-4xl">
          <SectionHeading
            eyebrow="Production Lines"
            title="End-to-End Production Line Development"
            description="Holistic line design — product flow, process interdependencies, quality checkpoints, and regulatory compliance at every stage."
            align="left"
            light
          />
        </AnimatedSection>
        <div className="grid items-stretch gap-6 sm:grid-cols-2">
          {PRODUCTION_EQUIPMENT_LINE_FEATURES.map((f, i) => (
            <FeatureCard
              key={f.title}
              title={f.title}
              description={f.description}
              icon={LINE_ICONS[i % LINE_ICONS.length]}
              index={i}
              theme="dark"
            />
          ))}
        </div>
      </HomeSection>

      <HomeSection
        variant="image-light"
        bgImage={PE_SECTION_IMAGES.cleanroom}
        overlayIntensity="clear"
        darkOverlay
        dots
        rings
        ringSide="right"
        className="py-16 sm:py-20"
      >
        <AnimatedSection className="mb-10 max-w-4xl">
          <SectionHeading
            eyebrow="Cleanroom Engineering"
            title="Equipment Built for Controlled Environments"
            description="Every surface, fastener, lubricant, and control enclosure designed with contamination control as a primary constraint."
            align="left"
          />
        </AnimatedSection>

        <div className="mb-10 grid items-stretch gap-6 sm:mb-14 md:grid-cols-3">
          {PRODUCTION_EQUIPMENT_CLEANROOM_LEVELS.map((level, i) => (
            <motion.div
              key={level.iso}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              style={{ borderRadius: "3.5rem" }}
              className={`flex h-full flex-col overflow-hidden rounded-[52px] border bg-card/95 p-6 shadow-md backdrop-blur-md dark:bg-slate-950/55 ${
                i === 0
                  ? "border-primary/20 dark:border-cyan-400/20"
                  : i === 1
                    ? "border-border dark:border-white/10"
                    : "border-primary/10 dark:border-white/10"
              }`}
            >
              <p className="mb-3 font-heading text-3xl font-bold text-primary dark:text-cyan-300">{level.iso}</p>
              <p className="text-base leading-relaxed text-muted-foreground dark:text-slate-300">{level.description}</p>
            </motion.div>
          ))}
        </div>

        <div
          style={{ borderRadius: "3.5rem" }}
          className="overflow-hidden rounded-[52px] border border-border bg-card/95 p-6 shadow-md backdrop-blur-md dark:border-white/10 dark:bg-slate-950/55"
        >
          <h3 className="mb-4 font-heading text-xl font-bold text-foreground dark:text-white">Cleanroom Equipment Design Standards</h3>
          <ul className="grid gap-3 sm:grid-cols-2">
            {PRODUCTION_EQUIPMENT_CLEANROOM_STANDARDS.map((s) => (
              <li key={s} className="flex items-start gap-2 rounded-2xl border border-border/70 bg-secondary/30 px-3 py-2 text-sm text-muted-foreground dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary dark:text-sky-300" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </HomeSection>

      <HomeSection variant="dark" bgImage={PE_SECTION_IMAGES.qualification} overlayIntensity="medium" dots className="py-16 sm:py-20">
        <AnimatedSection className="mb-10 max-w-4xl">
          <SectionHeading
            eyebrow="Qualification & Validation"
            title="Equipment Qualification: IQ, OQ & PQ"
            description="Comprehensive protocols aligned with FDA 21 CFR Part 820, ISO 13485, and GHTF/IMDRF guidance — delivering a qualification package that withstands regulatory scrutiny."
            align="left"
            light
          />
        </AnimatedSection>

        <div className="mb-10 grid items-stretch gap-6 sm:mb-14 md:grid-cols-3">
          {PRODUCTION_EQUIPMENT_QUALIFICATION_PHASES.map((phase, i) => (
            <SectionBand key={phase.code} step={phase.code} title={phase.title} description={phase.description} index={i} />
          ))}
        </div>

        <div
          style={{ borderRadius: "3.5rem" }}
          className="overflow-hidden rounded-[52px] border border-white/20 bg-white/10 p-6 sm:p-8 backdrop-blur-md dark:border-white/10 dark:bg-slate-950/55"
        >
          <h3 className="mb-4 font-heading text-xl font-bold text-white">Qualification Documentation Package</h3>
          <ul className="grid gap-3 sm:grid-cols-2">
            {PRODUCTION_EQUIPMENT_QUALIFICATION_DOCS.map((doc) => (
              <li key={doc} className="flex items-start gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-sky-100/85 dark:text-slate-300">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-sky-300 dark:text-cyan-300" />
                <span>{doc}</span>
              </li>
            ))}
          </ul>
        </div>
      </HomeSection>

      <HomeSection
        variant="image-light"
        bgImage={PE_SECTION_IMAGES.automation}
        overlayIntensity="clear"
        darkOverlay
        dots
        rings
        ringSide="left"
        className="py-16 sm:py-20"
      >
        <AnimatedSection className="mb-10 max-w-4xl">
          <div className="max-w-3xl text-left">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary dark:text-sky-300">
              Automation
            </p>
            <h2 className="mb-4 font-heading text-3xl font-bold leading-tight text-foreground dark:text-white sm:text-4xl md:text-5xl">
              Intelligent Process Automation
            </h2>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground dark:text-white/90">
              Validated automation that eliminates operator-dependent variation, improves throughput, and generates the process data your quality system demands.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid items-stretch gap-6 lg:grid-cols-3">
          {PRODUCTION_EQUIPMENT_AUTOMATION.map((a, i) => (
            <FeatureCard
              key={a.title}
              title={a.title}
              description={a.description}
              points={a.points}
              icon={[Bot, Gauge, Cog][i]}
              index={i}
              theme={i === 1 ? "dark" : "light"}
            />
          ))}
        </div>
      </HomeSection>

      <HomeSection variant="dark" bgImage={PE_SECTION_IMAGES.specialist} overlayIntensity="medium" dots className="py-16 sm:py-20">
        <AnimatedSection className="mb-12 max-w-4xl">
          <SectionHeading
            eyebrow="Specialist Equipment"
            title="Specialized Equipment for Medical Device Manufacturing"
            description="Deep expertise across the most demanding equipment categories in interventional and minimally invasive device production."
            align="left"
            light
          />
        </AnimatedSection>
        <div className="space-y-12">
          {PRODUCTION_EQUIPMENT_SPECIALIST.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`grid items-stretch gap-10 lg:grid-cols-[0.9fr_1.1fr] ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`}
            >
              <div
                style={{ borderRadius: "3.5rem" }}
                className={`${i % 2 === 1 ? "lg:[direction:ltr]" : ""} flex flex-col justify-center overflow-hidden rounded-[52px] border border-white/20 bg-white/10 p-6 sm:p-8 backdrop-blur-md dark:border-white/10 dark:bg-slate-950/55`}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-sky-300 dark:bg-white/5 dark:text-cyan-300">
                    <Stethoscope className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-white">{item.name}</h3>
                  </div>
                </div>
                <p className="text-base leading-relaxed text-sky-100/85 dark:text-slate-300">{item.description}</p>
              </div>
              <div
                style={{ borderRadius: "3.5rem" }}
                className={`relative aspect-[4/3] overflow-hidden rounded-[52px] border border-white/20 shadow-2xl ${i % 2 === 1 ? "lg:[direction:ltr]" : ""}`}
              >
                <img src={item.image} alt={item.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </HomeSection>

      <HomeSection
        variant="image-light"
        bgImage={PE_SECTION_IMAGES.support}
        overlayIntensity="clear"
        darkOverlay
        dots
        className="py-16 sm:py-20"
      >
        <AnimatedSection className="mb-10 max-w-4xl">
          <div className="max-w-3xl text-left">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary dark:text-sky-300">
              Ongoing Support
            </p>
            <h2 className="mb-4 font-heading text-3xl font-bold leading-tight text-foreground dark:text-white sm:text-4xl md:text-5xl">
              Preventive Maintenance, Calibration &amp; Technical Support
            </h2>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground dark:text-white/90">
              Post-installation programs designed to keep manufacturing equipment performing at its qualified state.
            </p>
          </div>
        </AnimatedSection>
        <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTION_EQUIPMENT_SUPPORT.map((s, i) => (
            <motion.div
              key={s.code}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={`flex h-full flex-col rounded-[24px] border bg-card/95 p-6 shadow-md backdrop-blur-md dark:bg-slate-950/55 ${
                i % 2 === 0 ? "border-border dark:border-white/10" : "border-primary/15 dark:border-cyan-400/15"
              }`}
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-white/10 dark:text-sky-300">
                  {React.createElement(SUPPORT_ICONS[i], { className: "h-5 w-5" })}
                </div>
                <span className="text-sm font-bold text-primary dark:text-sky-300">{s.code}</span>
              </div>
              <h3 className="mb-2 font-heading text-lg font-bold text-foreground dark:text-white">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground dark:text-slate-300">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </HomeSection>

      <HomeSection variant="dark" bgImage={PE_SECTION_IMAGES.process} overlayIntensity="medium" dots className="py-16 sm:py-20">
        <AnimatedSection className="mb-12 max-w-4xl">
          <div className="max-w-3xl text-left">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-300">
              Our Process
            </p>
            <h2 className="mb-4 font-heading text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              How We Deliver: Our Engineering Process
            </h2>
            <p className="max-w-2xl text-lg leading-relaxed text-white/90">
              A structured, stage-gated engineering process — requirements captured precisely, risks managed proactively, equipment delivered qualified and production-ready.
            </p>
          </div>
        </AnimatedSection>
        <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTION_EQUIPMENT_PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              style={{ borderRadius: "3.5rem" }}
              className="flex h-full flex-col overflow-hidden rounded-[52px] border border-white/20 bg-white/10 p-6 backdrop-blur-md dark:border-white/10 dark:bg-slate-950/55"
            >
              <p className="mb-2 text-3xl font-heading font-bold text-sky-300/90 dark:text-cyan-300">{step.step}</p>
              <h3 className="mb-2 font-heading text-lg font-bold text-white dark:text-white">{step.title}</h3>
              <p className="text-sm leading-relaxed text-sky-100/80 dark:text-slate-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </HomeSection>

      <HomeSection
        variant="image-light"
        bgImage={PE_SECTION_IMAGES.why}
        overlayIntensity="clear"
        darkOverlay
        dots
        rings
        ringSide="right"
        className="py-16 sm:py-20"
      >
        <AnimatedSection className="mb-10 max-w-4xl">
          <SectionHeading
            eyebrow="Why Revive"
            title="Why Industry Leaders Choose Our Equipment Expertise"
            align="left"
          />
        </AnimatedSection>
        <div className="grid items-stretch gap-6 sm:grid-cols-2">
          {PRODUCTION_EQUIPMENT_WHY_CHOOSE.map((w, i) => (
            <FeatureCard
              key={w.title}
              title={w.title}
              description={w.description}
              icon={WHY_ICONS[i]}
              index={i}
              theme={i % 2 === 0 ? "light" : "dark"}
            />
          ))}
        </div>
      </HomeSection>
    </div>
  );
}
