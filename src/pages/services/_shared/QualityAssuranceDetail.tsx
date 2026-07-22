import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  CheckCircle,
  ClipboardList,
  FileCheck,
  Layers,
  Medal,
  Search,
  ShieldCheck,
  Target,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import type { SubServiceData } from "@/data/services";
import { QUALITY_DEPARTMENTS } from "@/data/quality-department-content";
import {
  QA_APPROACH,
  QA_ACHIEVEMENTS,
  QA_CAPABILITIES,
  QA_CLOSING_NOTE,
  QA_STANDARDS,
} from "@/data/quality-assurance-content";
import {
  FullBleedBlock,
  SectionHeading,
  LifecycleRoadmap,
  IconFeatureStrip,
  StatBadgeRow,
} from "./ServiceExtrasVisual";
import {
  QD_DARK_SECTION,
  QD_DARK_SECTION_ALT,
  QD_MUTED_SECTION,
  QD_PILL,
  QdDarkDecor,
  QdGridOverlay,
} from "./QualityDeptTheme";

const QA_DEPT = QUALITY_DEPARTMENTS.find((d) => d.id === "qa")!;

const QMS_ICONS = [ClipboardList, FileCheck, Search, ShieldCheck, Target, Award] as const;
const OPS_ICONS = [CheckCircle, TrendingUp, Layers, Medal] as const;
const APPROACH_ICONS = [Search, ClipboardList, CheckCircle, TrendingUp] as const;
const ACHIEVEMENT_ICONS = [ShieldCheck, Medal, Layers, ClipboardList, Target] as const;

function ServiceItemCardGrid({
  cards,
  icons,
}: {
  cards: { title: string; items: string[] }[];
  icons: readonly LucideIcon[];
}) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {cards.map((card, i) => {
        const Icon = icons[i] ?? CheckCircle;
        return (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/35 hover:shadow-lg transition-all h-full"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/20 to-sky-500/10 flex items-center justify-center text-primary group-hover:from-primary group-hover:to-primary/80 group-hover:text-primary-foreground transition-all">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-foreground text-sm leading-snug">{card.title}</h3>
            </div>
            <ul className="space-y-2">
              {card.items.map((item) => (
                <li key={item} className="text-xs text-muted-foreground flex items-start gap-2 leading-relaxed">
                  <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
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

export function QualityAssuranceDetail({ subService }: { subService: SubServiceData }) {
  const [qmsSection, opsSection] = QA_DEPT.sections;
  const approachSteps = QA_APPROACH.map((s, i) => ({
    title: s.title,
    items: [s.desc] as readonly string[],
    icon: APPROACH_ICONS[i] ?? CheckCircle,
  }));

  return (
    <div className="space-y-0 -mt-4">
      <FullBleedBlock bgClassName="bg-background relative overflow-hidden">
        <QdGridOverlay />
        <AnimatedSection className="relative">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div>
              <SectionHeading eyebrow="Quality Assurance" title={subService.name} description={subService.tagline} />
              <div className="space-y-4">
                {subService.overview.map((para) => (
                  <p key={para.slice(0, 40)} className="text-muted-foreground leading-relaxed text-[15px]">
                    {para}
                  </p>
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mt-4 border-l-2 border-primary/40 pl-4">
                {QA_DEPT.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                <span className={QD_PILL}>
                  <ShieldCheck className="w-3.5 h-3.5" /> ISO 13485:2016
                </span>
                <span className={QD_PILL}>
                  <ClipboardList className="w-3.5 h-3.5" /> QMS Development
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {QA_ACHIEVEMENTS.slice(0, 4).map((stat, i) => (
                <motion.div
                  key={stat.value}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-2xl border border-border bg-card p-5 hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <p className="font-heading text-xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed line-clamp-3">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </FullBleedBlock>

      <FullBleedBlock bgClassName={QD_MUTED_SECTION}>
        <AnimatedSection>
          <SectionHeading
            eyebrow="Capabilities"
            title="All Quality Management Capabilities"
            description="Core QA services spanning QMS development, compliance, and operational quality."
          />
          <IconFeatureStrip items={QA_CAPABILITIES} icon={ShieldCheck} />
        </AnimatedSection>
      </FullBleedBlock>

      <FullBleedBlock bgClassName="bg-background">
        <AnimatedSection>
          <SectionHeading eyebrow="QMS & Compliance" title={qmsSection.label} />
          <ServiceItemCardGrid cards={qmsSection.cards} icons={QMS_ICONS} />
        </AnimatedSection>
      </FullBleedBlock>

      <FullBleedBlock bgClassName={QD_DARK_SECTION}>
        <QdDarkDecor />
        <AnimatedSection className="relative">
          <SectionHeading
            eyebrow="Operations"
            title={opsSection.label}
            description="Day-to-day quality operations supporting release, complaints, metrics, and training."
            light
          />
          <ServiceItemCardGrid cards={opsSection.cards} icons={OPS_ICONS} />
        </AnimatedSection>
      </FullBleedBlock>

      <FullBleedBlock bgClassName="bg-background">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Methodology"
            title="Our Approach"
            description="A structured partnership model from assessment through continuous improvement."
          />
          <LifecycleRoadmap steps={approachSteps} />
        </AnimatedSection>
      </FullBleedBlock>

      <FullBleedBlock bgClassName={QD_DARK_SECTION_ALT}>
        <QdDarkDecor />
        <AnimatedSection className="relative">
          <SectionHeading eyebrow="Track Record" title="Our Achievements" light />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {QA_ACHIEVEMENTS.map((item, i) => {
              const Icon = ACHIEVEMENT_ICONS[i] ?? ShieldCheck;
              return (
                <motion.div
                  key={item.value}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-primary/35 transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                    <p className="font-heading text-lg font-bold text-white">{item.value}</p>
                  </div>
                  <p className="text-sm text-white/70 leading-relaxed">{item.label}</p>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>
      </FullBleedBlock>

      <FullBleedBlock bgClassName={QD_DARK_SECTION}>
        <AnimatedSection className="relative">
          <SectionHeading
            eyebrow="Compliance"
            title="Built for Medical Device Quality & Compliance"
            light
          />
          <StatBadgeRow
            items={[
              { label: "Core Standards", value: String(QA_STANDARDS.length), icon: ShieldCheck },
              { label: "QMS Functions", value: "10+", icon: ClipboardList },
              { label: "Approach Phases", value: "4", icon: Target },
              { label: "Deliverable Types", value: String(subService.deliverables.length), icon: FileCheck },
            ]}
          />
          <div className="flex flex-wrap justify-center gap-2.5 max-w-3xl mx-auto">
            {QA_STANDARDS.map((std, i) => (
              <motion.span
                key={std}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 text-white/85 text-sm font-semibold backdrop-blur-sm hover:border-primary/40 hover:bg-primary/10 transition-colors"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-primary shrink-0" />
                {std}
              </motion.span>
            ))}
          </div>
        </AnimatedSection>
      </FullBleedBlock>

      <FullBleedBlock bgClassName="bg-background">
        <AnimatedSection>
          <SectionHeading eyebrow="Outputs" title="Deliverables" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {subService.deliverables.map((del, i) => (
              <motion.div
                key={del}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 p-5 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all group"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-foreground leading-snug pt-1.5">{del}</span>
              </motion.div>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            {subService.keyPoints.map((point, i) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="flex items-center gap-3 px-4 py-3 rounded-xl border border-border bg-secondary/20"
              >
                <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm text-foreground font-medium">{point}</span>
              </motion.div>
            ))}
          </div>
          <p className="mt-8 text-muted-foreground text-sm leading-relaxed border-l-2 border-primary/40 pl-4 max-w-3xl">
            {QA_CLOSING_NOTE}
          </p>
        </AnimatedSection>
      </FullBleedBlock>
    </div>
  );
}
