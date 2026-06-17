import React from "react";
import { motion } from "framer-motion";
import {
  Bug,
  CheckCircle,
  ClipboardList,
  Code2,
  FileCheck,
  Globe,
  HeartPulse,
  MonitorSmartphone,
  Search,
  ShieldCheck,
  Target,
  TestTube2,
  Zap,
} from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import type { SubServiceData } from "@/data/services";
import {
  SQA_CLOSING_NOTE,
  SQA_DELIVERABLES,
  SQA_KEY_HIGHLIGHTS,
  SQA_OVERVIEW,
  SQA_SERVICE_SECTIONS,
  SQA_STANDARDS,
  SQA_TAGLINE,
  SQA_WHY_CHOOSE,
} from "@/data/sqa-services-content";
import { SQA_APPROACH } from "@/data/quality-assurance-content";
import {
  FullBleedBlock,
  SectionHeading,
  LifecycleRoadmap,
  IconCardGrid,
  StatBadgeRow,
} from "./service-extras-visual";
import {
  QD_DARK_SECTION,
  QD_DARK_SECTION_ALT,
  QD_MUTED_SECTION,
  QD_PILL,
  QdDarkDecor,
  QdGridOverlay,
} from "./quality-dept-detail-theme";

const SECTION_ICONS = [TestTube2, Zap, Target, HeartPulse, MonitorSmartphone] as const;
const CARD_ICONS = [
  CheckCircle, MonitorSmartphone, Globe, Bug, Code2, Target, TestTube2, ClipboardList,
  Zap, Target, Bug, ClipboardList, Target, HeartPulse, ShieldCheck, Target, FileCheck, MonitorSmartphone,
] as const;
const APPROACH_ICONS = [Search, ClipboardList, TestTube2, CheckCircle] as const;
const WHY_ICONS = [ShieldCheck, HeartPulse, Globe, ShieldCheck, ShieldCheck, Zap, Target, Target, FileCheck] as const;

export function SoftwareQualityAssuranceDetail({ subService }: { subService: SubServiceData }) {
  const approachSteps = SQA_APPROACH.map((s, i) => ({
    title: s.title,
    items: [s.desc] as readonly string[],
    icon: APPROACH_ICONS[i] ?? CheckCircle,
  }));

  let cardIconIndex = 0;

  return (
    <div className="space-y-0 -mt-4">
      <FullBleedBlock bgClassName="bg-background relative overflow-hidden">
        <QdGridOverlay />
        <AnimatedSection className="relative">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div>
              <SectionHeading eyebrow="Software Quality Assurance" title={subService.name} description={SQA_TAGLINE} />
              <div className="space-y-4">
                {SQA_OVERVIEW.map((para) => (
                  <p key={para.slice(0, 40)} className="text-muted-foreground leading-relaxed text-[15px]">
                    {para}
                  </p>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                <span className={QD_PILL}>
                  <Code2 className="w-3.5 h-3.5" /> IEC 62304
                </span>
                <span className={QD_PILL}>
                  <ShieldCheck className="w-3.5 h-3.5" /> HIPAA & ONC
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {SQA_KEY_HIGHLIGHTS.slice(0, 6).map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-2xl border border-border bg-card p-4 hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <CheckCircle className="w-4 h-4 text-primary mb-2" />
                  <p className="text-xs text-foreground font-medium leading-snug">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </FullBleedBlock>

      <FullBleedBlock bgClassName={QD_MUTED_SECTION}>
        <AnimatedSection>
          <SectionHeading
            eyebrow="Methodology"
            title="Our Approach"
            description="Structured SQA across assess, plan, execute, and assure phases of the SDLC."
          />
          <LifecycleRoadmap steps={approachSteps} />
        </AnimatedSection>
      </FullBleedBlock>

      {SQA_SERVICE_SECTIONS.map((section, si) => {
        const isDark = si % 2 === 1;
        const SectionIcon = SECTION_ICONS[si] ?? Code2;
        const sectionCards = section.cards.map((card) => {
          const icon = CARD_ICONS[cardIconIndex] ?? CheckCircle;
          cardIconIndex += 1;
          return { title: card.title, description: card.description, icon };
        });

        return (
          <FullBleedBlock
            key={section.label}
            bgClassName={isDark ? QD_DARK_SECTION : "bg-background relative overflow-hidden"}
          >
            {isDark && <QdDarkDecor />}
            <AnimatedSection className="relative">
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isDark ? "bg-primary/20 text-primary" : "bg-primary/10 text-primary"}`}>
                  <SectionIcon className="w-5 h-5" />
                </div>
                <p className={`text-xs font-bold uppercase tracking-[0.2em] ${isDark ? "text-sky-300" : "text-primary"}`}>
                  Service Catalogue
                </p>
              </div>
              <SectionHeading
                title={section.label}
                description={section.intro}
                light={isDark}
              />
              <IconCardGrid columns={section.cards.length >= 4 ? 2 : 2} cards={sectionCards} />
            </AnimatedSection>
          </FullBleedBlock>
        );
      })}

      <FullBleedBlock bgClassName={QD_DARK_SECTION_ALT}>
        <QdDarkDecor />
        <AnimatedSection className="relative">
          <SectionHeading
            eyebrow="Partnership"
            title="Why Choose RMT for SQA"
            description="Specialized software quality expertise for healthcare, medical, and regulated platforms."
            light
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SQA_WHY_CHOOSE.map((item, i) => {
              const Icon = WHY_ICONS[i] ?? ShieldCheck;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-primary/35 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-white text-sm mb-2">{item.title}</h3>
                  <p className="text-xs text-white/70 leading-relaxed">{item.description}</p>
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
            title="Software Quality & Testing Standards Expertise"
            light
          />
          <StatBadgeRow
            items={[
              { label: "Standards Covered", value: String(SQA_STANDARDS.length), icon: ShieldCheck },
              { label: "Service Areas", value: String(SQA_SERVICE_SECTIONS.length), icon: Code2 },
              { label: "Approach Phases", value: "4", icon: Target },
              { label: "Deliverable Types", value: String(SQA_DELIVERABLES.length), icon: ClipboardList },
            ]}
          />
          <div className="flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto">
            {SQA_STANDARDS.map((std, i) => (
              <motion.span
                key={std}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 text-white/85 text-xs sm:text-sm font-semibold backdrop-blur-sm hover:border-primary/40 hover:bg-primary/10 transition-colors"
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
            {SQA_DELIVERABLES.map((del, i) => (
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
          <p className="mt-8 text-muted-foreground text-sm leading-relaxed border-l-2 border-primary/40 pl-4 max-w-3xl">
            {SQA_CLOSING_NOTE}
          </p>
        </AnimatedSection>
      </FullBleedBlock>
    </div>
  );
}
