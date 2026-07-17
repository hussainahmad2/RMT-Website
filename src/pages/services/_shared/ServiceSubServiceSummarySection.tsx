import React from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  Brain,
  Atom,
  Cog,
  Bug,
  Cable,
  CheckCircle,
  ClipboardList,
  Code2,
  Cpu,
  Database,
  Dna,
  Factory,
  FileCheck,
  FileSearch,
  FlaskConical,
  Globe,
  GitBranch,
  Gauge,
  Layers,
  Lightbulb,
  Medal,
  MonitorSmartphone,
  Microscope,
  Network,
  PackageCheck,
  Radio,
  ScanLine,
  ScrollText,
  Search,
  Settings2,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  TestTube2,
  Terminal,
  Truck,
  Target,
  Waves,
  Wind,
  Wrench,
  Zap,
  Boxes,
  CircuitBoard,
  Binary,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import type { ServiceData } from "@/data/services";

const SUBSERVICE_SUMMARY_META: Record<string, { eyebrow: string; heading: string; description: string }> = {
  "quality-testing": {
    eyebrow: "Department Breakdown",
    heading: "Services",
    description:
      "QA, QC, and software quality are presented together so the full scope of the department is visible without opening separate subpages.",
  },
  "automation-services": {
    eyebrow: "Service Breakdown",
    heading: "Automation capabilities by discipline",
    description:
      "PLC, HMI/SCADA, motion control, and communication are summarized here as one integrated automation stack.",
  },
  "design-fabrication": {
    eyebrow: "Service Breakdown",
    heading: "Design and fabrication workstreams",
    description:
      "Mechanical design, thermal engineering, simulation, and prototyping are grouped into one engineering workflow.",
  },
  "engineering-product-development": {
    eyebrow: "Service Breakdown",
    heading: "Cross-disciplinary engineering focus areas",
    description:
      "Biomedical systems, R&D engineering, and industrial safety are shown together as a single product-development capability set.",
  },
  bmd: {
    eyebrow: "Service Breakdown",
    heading: "Biomaterials and drug innovation scope",
    description:
      "Material science, chemistry, testing, and validation are grouped into one research and development view.",
  },
  "mbl-laboratory": {
    eyebrow: "Service Breakdown",
    heading: "Microbiology lab services at a glance",
    description:
      "Sterility, endotoxin, microbial limit, and pathogen testing are collected into a single laboratory summary.",
  },
  "contract-manufacturing": {
    eyebrow: "Service Breakdown",
    heading: "Manufacturing capabilities by stage",
    description:
      "Quality, cleanroom infrastructure, validation, and scale-up are summarized as a production readiness path.",
  },
  "production-equipment-engineering": {
    eyebrow: "Service Breakdown",
    heading: "Equipment engineering lifecycle summary",
    description:
      "Custom equipment design, line development, validation, automation, and support are shown in one consolidated view.",
  },
};

const SERVICE_SCATTER_ICONS: Record<string, LucideIcon[]> = {
  "regulatory-compliance": [Shield, FileSearch, ScrollText, Globe, CheckCircle, ShieldCheck, FileCheck, Star, Medal, Target],
  "software-ai": [Code2, Cpu, Database, Terminal, Brain, Sparkles, GitBranch, MonitorSmartphone, Workflow, Bug, Layers, Zap],
  "product-development": [Layers, Target, PackageCheck, ClipboardList, Wrench, CircuitBoard, FlaskConical, ShieldCheck, FileCheck, Brain],
  "quality-testing": [FlaskConical, TestTube2, Microscope, BarChart3, ClipboardList, CheckCircle, Search, Target, ScanLine, Gauge],
  "automation-services": [Settings2, Zap, Network, MonitorSmartphone, Cable, Radio, Gauge, Terminal, Globe, Workflow],
  "design-fabrication": [Wrench, Layers, Gauge, Boxes, Cpu, Microscope, Waves, Target, PackageCheck, CircuitBoard],
  "engineering-product-development": [Settings2, Wrench, CircuitBoard, Layers, Brain, Target, PackageCheck, Zap, Network, Cog],
  bmd: [Dna, Microscope, FlaskConical, Layers, Lightbulb, ShieldCheck, Factory, Wrench, MonitorSmartphone, CheckCircle],
  "mbl-laboratory": [Microscope, FlaskConical, TestTube2, ShieldCheck, CheckCircle, ScanLine, PackageCheck, Waves, Bug, Atom],
  "contract-manufacturing": [Factory, Boxes, Cog, Truck, PackageCheck, Settings2, Gauge, Medal, ClipboardList, Network],
  "production-equipment-engineering": [Cog, Factory, Wind, ClipboardList, Zap, Wrench, Gauge, Settings2, PackageCheck, Network],
};

export function ServiceSubServiceSummarySection({ service }: { service: ServiceData }) {
  const meta = SUBSERVICE_SUMMARY_META[service.slug];
  if (!meta) return null;

  const serviceIcons = SERVICE_SCATTER_ICONS[service.slug] ?? [CheckCircle, Layers, Zap, Shield, Star, Globe];
  const gridClass =
    service.subServices.length >= 7
      ? "md:grid-cols-2 xl:grid-cols-3"
      : service.subServices.length >= 4
        ? "md:grid-cols-2 xl:grid-cols-3"
        : "md:grid-cols-2 xl:grid-cols-3";

  return (
    <AnimatedSection className="rounded-[2rem] border border-border bg-gradient-to-br from-card via-card to-secondary/20 p-5 sm:p-8 shadow-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between pb-5 mb-6 border-b border-border">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary mb-2">{meta.eyebrow}</p>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">{meta.heading}</h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">{meta.description}</p>
        </div>
        <div className="inline-flex items-center gap-2 self-start rounded-full border border-border bg-background/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          <Layers className="h-3.5 w-3.5 text-primary" />
          {service.subServices.length} sub-services
        </div>
      </div>

      <div className={`grid gap-5 ${gridClass}`}>
        {service.subServices.map((sub, index) => {
          const SubIcon = serviceIcons[index % serviceIcons.length] ?? CheckCircle;
          const overviewLines = sub.overview.slice(0, Math.min(2, Math.max(1, sub.overview.length)));
          const keyPointLimit = sub.keyPoints.length > 6 ? 4 : 5;
          const deliverableLimit = sub.deliverables.length > 4 ? 3 : 4;
          const keyPoints = sub.keyPoints.slice(0, keyPointLimit);
          const deliverables = sub.deliverables.slice(0, deliverableLimit);
          const hiddenKeyPoints = Math.max(0, sub.keyPoints.length - keyPoints.length);
          const hiddenDeliverables = Math.max(0, sub.deliverables.length - deliverables.length);

          return (
            <motion.article
              key={sub.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: index * 0.05 }}
              className="group h-full overflow-hidden rounded-2xl border border-border bg-background/80 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-lg"
            >
              <div className="h-1 bg-gradient-to-r from-primary via-primary/60 to-transparent" />
              <div className="flex h-full flex-col p-5 sm:p-6">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div className="flex min-w-0 items-start gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/15 bg-primary/10 text-primary">
                      <SubIcon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                        Sub-service {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="font-heading text-xl font-bold leading-tight text-foreground">{sub.name}</h3>
                    </div>
                  </div>
                  <span className="shrink-0 rounded-full border border-border bg-secondary/60 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    {sub.deliverables.length} deliverables
                  </span>
                </div>

                <p className="text-sm font-medium text-foreground/85 leading-relaxed">{sub.tagline}</p>

                <div className="mt-5 space-y-5">
                  <div>
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">What it covers</p>
                    <div className="space-y-2">
                      {overviewLines.map((para, paraIndex) => (
                        <p key={paraIndex} className="text-sm leading-relaxed text-muted-foreground">
                          {para}
                        </p>
                      ))}
                    </div>
                    {sub.overview.length > overviewLines.length && (
                      <p className="mt-2 text-xs font-semibold text-muted-foreground">
                        +{sub.overview.length - overviewLines.length} more detail block{(sub.overview.length - overviewLines.length) === 1 ? "" : "s"}
                      </p>
                    )}
                  </div>

                  <div>
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Key points</p>
                    <div className="flex flex-wrap gap-2">
                      {keyPoints.map((kp) => (
                        <span
                          key={kp}
                          className="rounded-full border border-primary/15 bg-primary/8 px-2.5 py-1 text-[11px] text-primary"
                        >
                          {kp}
                        </span>
                      ))}
                      {hiddenKeyPoints > 0 && (
                        <span className="rounded-full border border-border bg-secondary/60 px-2.5 py-1 text-[11px] text-muted-foreground">
                          +{hiddenKeyPoints} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Deliverables</p>
                    <div className="space-y-2">
                      {deliverables.map((deliverable) => (
                        <div key={deliverable} className="flex items-start gap-2 text-sm text-foreground/85">
                          <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{deliverable}</span>
                        </div>
                      ))}
                    </div>
                    {hiddenDeliverables > 0 && (
                      <p className="mt-2 text-xs font-semibold text-muted-foreground">
                        +{hiddenDeliverables} more deliverable{hiddenDeliverables === 1 ? "" : "s"}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </AnimatedSection>
  );
}
