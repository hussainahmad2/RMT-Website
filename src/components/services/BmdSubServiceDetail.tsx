import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  ClipboardList,
  Dna,
  FileCheck,
  FlaskConical,
  Microscope,
  Search,
  ShieldCheck,
  Target,
  TrendingUp,
} from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { PageSection, SectionHeading } from "@/components/shared/PageSection";
import type { ServiceData, SubServiceData } from "@/data/services";
import { BMD_STANDARDS } from "@/data/bmd-standards";
import { LifecycleRoadmap } from "./ServiceExtrasVisual";
import { BMD_SECTION_IMAGES, ColumnWatermark, DnaWatermark } from "./BmdVisuals";

const APPROACH_STEPS = [
  { title: "Consultation", items: ["Understand requirements, project scope, and define technical specifications."], icon: Search },
  { title: "Development", items: ["Engineering design, prototyping, formulation, or process development."], icon: ClipboardList },
  { title: "Testing & V&V", items: ["Laboratory validation, performance testing, and quality control reviews."], icon: FlaskConical },
  { title: "Release & Scale", items: ["Documentation release, technology transfer, and commercial scale-up support."], icon: TrendingUp },
];

const HIGHLIGHT_ICONS = [Microscope, Dna, FlaskConical, Target, ShieldCheck, FileCheck] as const;
const CAP_ICONS = [Microscope, Dna, FlaskConical, Target, ShieldCheck, FileCheck] as const;

export function BmdSubServiceDetail({
  subService,
  service,
}: {
  subService: SubServiceData;
  service: ServiceData;
}) {
  return (
    <div className="space-y-0">
      <PageSection
        variant="image-light"
        bgImage={BMD_SECTION_IMAGES.overview}
        overlayIntensity="clear"
        dots
        rings
        ringSide="right"
        className="py-16 sm:py-20"
      >
        <div className="relative">
          <ColumnWatermark>
            <DnaWatermark />
          </ColumnWatermark>
          <AnimatedSection className="relative z-10">
            <SectionHeading
              eyebrow="BMD Service"
              title={subService.name}
              description={subService.tagline}
              align="left"
              panel
              className="mb-8 max-w-3xl"
            />
            <div className="space-y-5 max-w-4xl">
              {subService.overview.map((para) => (
                <p key={para.slice(0, 40)} className="text-slate-700 text-base sm:text-lg leading-relaxed rounded-2xl border border-white/90 bg-white/95 backdrop-blur-md px-6 py-5 shadow-md">
                  {para}
                </p>
              ))}
            </div>
            <div className="flex flex-wrap gap-2.5 mt-8">
              {BMD_STANDARDS.map((std) => (
                <span key={std} className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold px-4 py-2 rounded-full bg-primary/8 border border-primary/20 text-primary">
                  <ShieldCheck className="w-4 h-4" /> {std}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </PageSection>

      <PageSection variant="muted" dots className="py-14 sm:py-16">
        <SectionHeading eyebrow="Capabilities" title="Key Services & Highlights" align="left" className="mb-10" />
        <div className="grid sm:grid-cols-2 gap-5">
          {subService.keyPoints.map((point, idx) => {
            const Icon = HIGHLIGHT_ICONS[idx % HIGHLIGHT_ICONS.length];
            return (
              <motion.div
                key={point}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group flex items-start gap-4 p-6 rounded-2xl border border-border bg-card shadow-sm hover:border-primary/35 hover:shadow-md transition-all"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border bg-gradient-to-br from-primary/20 to-sky-500/10 border-primary/20 text-primary group-hover:scale-105 transition-transform">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-base font-semibold text-foreground leading-relaxed pt-2">{point}</p>
              </motion.div>
            );
          })}
        </div>
      </PageSection>

      <PageSection variant="gradient-blue" bgImage={BMD_SECTION_IMAGES.research} overlayIntensity="clear" dots rings ringSide="both" className="py-14 sm:py-16">
        <SectionHeading eyebrow="Methodology" title="Our Approach" light align="left" className="mb-10" />
        <LifecycleRoadmap steps={APPROACH_STEPS} variant="dark" />
      </PageSection>

      <PageSection variant="light" className="py-14 sm:py-16">
        <SectionHeading eyebrow="Outputs" title="Deliverables" align="left" className="mb-10" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {subService.deliverables.map((del, i) => (
            <motion.div
              key={del}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <CheckCircle className="w-5 h-5" />
              </div>
              <span className="text-base font-medium text-foreground leading-snug pt-1.5">{del}</span>
            </motion.div>
          ))}
        </div>
      </PageSection>

      <PageSection variant="navy" bgImage={BMD_SECTION_IMAGES.standards} overlayIntensity="medium" dots className="py-14 sm:py-16">
        <SectionHeading eyebrow="Compliance" title="Compliance & Standards" light className="mb-10" />
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-10">
          {[
            { label: "Standards Covered", value: String(BMD_STANDARDS.length), icon: ShieldCheck },
            { label: "Key Highlights", value: String(subService.keyPoints.length), icon: Target },
            { label: "Deliverables", value: String(subService.deliverables.length), icon: FileCheck },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="text-center rounded-2xl border border-white/15 bg-white/8 backdrop-blur-sm px-3 py-5"
              >
                <Icon className="w-6 h-6 text-sky-300 mx-auto mb-2" />
                <p className="font-heading text-2xl sm:text-3xl font-black text-white">{item.value}</p>
                <p className="text-xs sm:text-sm text-white/70 mt-1 leading-snug">{item.label}</p>
              </motion.div>
            );
          })}
        </div>
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {BMD_STANDARDS.map((std, i) => (
            <motion.span
              key={std}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-white/10 text-white text-base font-semibold"
            >
              <ShieldCheck className="w-4 h-4 text-sky-300 shrink-0" />
              {std}
            </motion.span>
          ))}
        </div>
      </PageSection>

      <PageSection variant="image-light" bgImage={BMD_SECTION_IMAGES.capabilities} overlayIntensity="clear" dots className="py-14 sm:py-16">
        <SectionHeading eyebrow="Full-Service Offering" title={`All ${service.shortName} Capabilities`} align="left" className="mb-10" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {service.capabilities.map((cap, i) => {
            const Icon = CAP_ICONS[i % CAP_ICONS.length];
            return (
              <motion.div
                key={cap}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="flex items-center gap-4 p-5 rounded-xl border border-white/90 bg-white/95 shadow-md"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-base font-medium text-foreground">{cap}</span>
              </motion.div>
            );
          })}
        </div>
        <SectionHeading eyebrow="Why RMT" title="Why Partner With RMT" align="left" className="mb-10" />
        <div className="grid sm:grid-cols-2 gap-6">
          {service.whyRMT.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-white/90 bg-white/95 backdrop-blur-md p-6 sm:p-7 shadow-md"
            >
              <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-base text-slate-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </PageSection>
    </div>
  );
}
