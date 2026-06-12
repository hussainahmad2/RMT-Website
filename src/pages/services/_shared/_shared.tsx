import React, { useState, useEffect, useMemo } from "react";
import { Link } from "wouter";
import {
  Cpu, Shield, Brain, FlaskConical, CircuitBoard,
  Settings2, Pill, Factory, CheckCircle, ArrowRight, ArrowLeft, ChevronRight,
  Search, ClipboardList, Wrench, TestTube2, Rocket,
  FileSearch, Target, Layers, Microscope, PackageCheck, Truck,
  MonitorSmartphone, GitBranch, ShieldCheck, FlaskRound, Boxes, BarChart3,
  ScanLine, Zap, Cable, Radio, Award, Cog, ScrollText, TrendingUp, ClipboardCheck,
  Dna, Code2, Cloud, Sparkles, Terminal, Smartphone, Bug, Workflow, Activity,
  Database, Server, Lock, Globe, Phone, Calendar, Star, Users,
  Gauge, Medal, FileCheck, Mail, Network,
  Atom, Stethoscope, Binary, Fingerprint, Waves, SlidersHorizontal,
  LayoutDashboard, BookOpen, GraduationCap, Building2, Lightbulb,
  PenTool, FileText, Heart, Package, Wind, Beaker,
  type LucideIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/lib/seo";
import {
  buildBreadcrumbJsonLd,
  buildServiceJsonLd,
  buildSubServiceDescription,
  buildSubServiceJsonLd,
  buildSubServiceKeywords,
  servicePath,
  subServicePath,
} from "@/lib/service-seo";
import { cn } from "@/lib/utils";
import { ALL_SERVICES, type ServiceData, type SubServiceData } from "@/data/services";
import {
  BMD_ACADEMIC_PARTNERS,
  BMD_EQUIPMENT,
  BMD_EXPERTISE,
  BMD_INDUSTRIAL_PARTNERS,
  BMD_PATENTS,
  BMD_PRODUCTS,
  BMD_PUBLICATIONS,
  BMD_RESEARCH_AREAS,
} from "@/data/bmd-content";
import {
  MBL_EQUIPMENT,
} from "@/data/mbl-content";
import {
  DESIGN_FABRICATION_PRINTERS,
  ENGINEERING_DELIVERABLES,
  ENGINEERING_METHODOLOGY,
  ENGINEERING_OTHER_PRODUCT_DESIGN,
  ENGINEERING_SPECIALIZED_AREAS,
} from "@/data/engineering-content";
import {
  MANUFACTURING_CAPACITY_BUILDING,
  MANUFACTURING_CLEANROOMS,
  MANUFACTURING_DEVELOPMENT_PHASES,
  MANUFACTURING_DEVICE_CLASSES,
  MANUFACTURING_ENVIRONMENTAL_CONTROLS,
  MANUFACTURING_HERO_IMAGES,
  MANUFACTURING_KEY_METRICS,
  MANUFACTURING_LICENCES,
  MANUFACTURING_PRODUCTS,
  MANUFACTURING_PRODUCTS_MADE,
  MANUFACTURING_QUALITY_POINTS,
  MANUFACTURING_TESTING_SERVICES,
  MANUFACTURING_WHY_CHOOSE,
  type ManufacturingProductMade,
} from "@/data/revive-manufacturing-content";
import {
  PRODUCT_DEVELOPMENT_KEY_METRICS,
  PRODUCT_DEVELOPMENT_LICENCES,
  PRODUCT_DEVELOPMENT_PHASES,
  PRODUCT_DEVELOPMENT_REGULATORY,
  PRODUCT_DEVELOPMENT_MANUFACTURING,
  PRODUCT_DEVELOPMENT_WHY,
} from "@/data/product-development-content";
import {
  QUALITY_DEPARTMENTS,
  QUALITY_WHY_CHOOSE,
  type QualityDepartment,
} from "@/data/quality-department-content";
import {
  SQA_CLOSING_NOTE,
  SQA_SERVICE_SECTIONS,
  SQA_STANDARDS,
  SQA_WHY_CHOOSE,
} from "@/data/sqa-services-content";
import {
  FullBleedBlock,
  SectionHeading,
  LifecycleRoadmap,
  PillarGrid,
  IconFeatureStrip,
  IconCardGrid,
  WhyChooseGrid,
  VerticalTimeline,
} from "./service-extras-visual";

const ENGINEERING_SERVICE_SLUGS = new Set([
  "automation-services",
  "design-fabrication",
  "engineering-product-development",
]);

/* ---- Engineering methodology (automation, design & product development) ---- */
function EngineeringMethodology() {
  return (
    <AnimatedSection>
      <h2 className="font-heading text-3xl font-bold text-foreground mb-2 pb-3 border-b border-border">Our Methodology</h2>
      <p className="text-muted-foreground text-sm mb-8">
        A structured engineering workflow focused on innovation, precision, reliability, and scalable industrial solutions.
      </p>
      <div className="relative">
        <div className="absolute left-[1.6rem] top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-primary/40 to-transparent" />
        <div className="space-y-0">
          {ENGINEERING_METHODOLOGY.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="relative flex gap-6 pb-8 last:pb-0 group"
            >
              <div className="relative shrink-0 z-10">
                <div
                  className={`w-14 h-14 rounded-full border-2 flex flex-col items-center justify-center transition-all duration-300
                  ${i === 0 ? "bg-primary border-primary text-white shadow-lg shadow-primary/30" : "bg-card border-border text-primary group-hover:border-primary group-hover:bg-primary/5"}`}
                >
                  <Cog className="w-5 h-5" />
                  <span className="text-[9px] font-bold mt-0.5 opacity-60">{step.step}</span>
                </div>
              </div>
              <div className="flex-1 bg-card border border-border rounded-xl p-5 group-hover:border-primary/40 group-hover:shadow-sm transition-all duration-300 mt-1">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h4 className="font-heading font-bold text-foreground text-base group-hover:text-primary transition-colors">
                    Step {i + 1} — {step.title}
                  </h4>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">{step.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {step.activities.map((pt) => (
                    <span
                      key={pt}
                      className="inline-flex items-center gap-1 text-xs text-muted-foreground bg-secondary/60 px-2.5 py-1 rounded-full border border-border/60"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary/60 shrink-0" />
                      {pt}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

function EngineeringProductExtras() {
  return (
    <div className="space-y-10">
      <AnimatedSection>
        <h2 className="font-heading text-3xl font-bold text-foreground mb-4 pb-3 border-b border-border">Key Highlights</h2>
        <ul className="grid sm:grid-cols-2 gap-3">
          {[
            "End-to-End Product Development (Concept → Prototype → Production)",
            "Cross-Disciplinary Engineering (Automation + Mechanical + Embedded)",
            "Industrial-Grade Design Standards",
            "Rapid Prototyping using FDM & SLA 3D Printing",
            "Biomedical & Industrial Application Expertise",
            "Modular and Scalable System Architecture",
            "Simulation-Driven Design Approach",
            "Custom Engineering Solutions for R&D Projects",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="font-heading text-3xl font-bold text-foreground mb-4 pb-3 border-b border-border">Deliverables</h2>
        <p className="text-muted-foreground text-sm mb-6">
          We ensure complete engineering documentation and physical/functional outputs for every project.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="font-heading font-bold text-foreground mb-3">Design & Documentation</h3>
            <ul className="space-y-1.5">
              {ENGINEERING_DELIVERABLES.designDocumentation.map((d) => (
                <li key={d} className="text-xs text-muted-foreground">{d}</li>
              ))}
            </ul>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="font-heading font-bold text-foreground mb-3">Software & Control</h3>
            <ul className="space-y-1.5">
              {ENGINEERING_DELIVERABLES.softwareControl.map((d) => (
                <li key={d} className="text-xs text-muted-foreground">{d}</li>
              ))}
            </ul>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="font-heading font-bold text-foreground mb-3">Physical & Prototype</h3>
            <ul className="space-y-1.5">
              {ENGINEERING_DELIVERABLES.physicalPrototype.map((d) => (
                <li key={d} className="text-xs text-muted-foreground">{d}</li>
              ))}
            </ul>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="font-heading text-3xl font-bold text-foreground mb-4 pb-3 border-b border-border">Specialized Engineering Areas</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="font-heading font-bold text-foreground mb-3">Biomedical Systems</h3>
            <ul className="space-y-1.5">
              {ENGINEERING_SPECIALIZED_AREAS.biomedical.map((item) => (
                <li key={item} className="text-xs text-muted-foreground">{item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="font-heading font-bold text-foreground mb-3">Research & Development</h3>
            <ul className="space-y-1.5">
              {ENGINEERING_SPECIALIZED_AREAS.researchDevelopment.map((item) => (
                <li key={item} className="text-xs text-muted-foreground">{item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="font-heading font-bold text-foreground mb-3">Industrial Safety</h3>
            <ul className="space-y-1.5">
              {ENGINEERING_SPECIALIZED_AREAS.industrialSafety.map((item) => (
                <li key={item} className="text-xs text-muted-foreground">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="font-heading text-3xl font-bold text-foreground mb-4 pb-3 border-b border-border">Other Product Design Services</h2>
        <p className="text-muted-foreground text-sm mb-6">
          Specialized product design and development for industrial and biomedical applications.
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
          {(
            [
              ["Mechanical Product Design", ENGINEERING_OTHER_PRODUCT_DESIGN.mechanical],
              ["Thermal & Control Products", ENGINEERING_OTHER_PRODUCT_DESIGN.thermalControl],
              ["Automation-Based Products", ENGINEERING_OTHER_PRODUCT_DESIGN.automationProducts],
              ["Biomedical Product Design", ENGINEERING_OTHER_PRODUCT_DESIGN.biomedicalProducts],
            ] as const
          ).map(([title, items]) => (
            <div key={title} className="bg-card border border-border rounded-xl p-5">
              <h3 className="font-heading font-semibold text-foreground mb-3">{title}</h3>
              <ul className="space-y-1.5">
                {items.map((item) => (
                  <li key={item} className="text-xs text-muted-foreground">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}

function DesignFabricationExtras() {
  return (
    <AnimatedSection>
      <h2 className="font-heading text-3xl font-bold text-foreground mb-4 pb-3 border-b border-border">
        Advanced 3D Printing Technologies
      </h2>
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-xl p-5">
          <h3 className="font-heading font-bold text-foreground mb-3">FDM Printers</h3>
          <ul className="space-y-1.5">
            {DESIGN_FABRICATION_PRINTERS.fdm.map((p) => (
              <li key={p} className="text-sm text-muted-foreground">{p}</li>
            ))}
          </ul>
        </div>
        <div className="bg-card border border-border rounded-xl p-5">
          <h3 className="font-heading font-bold text-foreground mb-3">SLA Printers</h3>
          <ul className="space-y-1.5">
            {DESIGN_FABRICATION_PRINTERS.sla.map((p) => (
              <li key={p} className="text-sm text-muted-foreground">{p}</li>
            ))}
          </ul>
        </div>
      </div>
    </AnimatedSection>
  );
}

function AutomationCommunicationExtras() {
  return (
    <AnimatedSection>
      <h2 className="font-heading text-3xl font-bold text-foreground mb-4 pb-3 border-b border-border">
        Industrial Communication & Networking
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-card border border-border rounded-xl p-5">
          <h3 className="font-heading font-semibold text-foreground mb-3">Physical Layers (The Wires)</h3>
          <ul className="space-y-1.5 text-xs text-muted-foreground">
            <li>RS-232 Communication</li>
            <li>RS-485 Communication</li>
            <li>Ethernet (TCP/IP) Networking</li>
            <li>Industrial Wiring & Interface Design</li>
            <li>Communication Cable Integration</li>
          </ul>
        </div>
        <div className="bg-card border border-border rounded-xl p-5">
          <h3 className="font-heading font-semibold text-foreground mb-3">Protocol Layers (The Language)</h3>
          <ul className="space-y-1.5 text-xs text-muted-foreground">
            <li>Modbus RTU/TCP</li>
            <li>Profibus Communication</li>
            <li>PLC-to-Drive Communication</li>
            <li>Sensor Communication Networks</li>
            <li>Industrial Device Data Exchange</li>
          </ul>
        </div>
        <div className="bg-card border border-border rounded-xl p-5">
          <h3 className="font-heading font-semibold text-foreground mb-3">System Connectivity</h3>
          <ul className="space-y-1.5 text-xs text-muted-foreground">
            <li>PLC-to-HMI Communication</li>
            <li>PLC-to-VFD Integration</li>
            <li>Sensor-to-Controller Interfaces</li>
            <li>Multi-Device Synchronization</li>
            <li>Remote Monitoring & Diagnostics</li>
          </ul>
        </div>
      </div>
    </AnimatedSection>
  );
}

/* ---- MBL extended sections (main service page) ---- */
function MblServiceExtras() {
  return (
    <div className="space-y-10">
      <AnimatedSection>
        <h2 className="font-heading text-3xl font-bold text-foreground mb-4 pb-3 border-b border-border">Equipment</h2>
        <div className="flex flex-wrap gap-2">
          {MBL_EQUIPMENT.map((eq) => (
            <span key={eq} className="text-sm px-3 py-1.5 bg-card border border-border rounded-lg text-muted-foreground">{eq}</span>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}

/* ---- BMD extended sections (main service page) ---- */
function BmdServiceExtras() {
  return (
    <div className="space-y-10">
      <AnimatedSection>
        <h2 className="font-heading text-3xl font-bold text-foreground mb-4 pb-3 border-b border-border">Academic & Industry Partners</h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          Collaboration with academic institutions, research laboratories, and industry partners plays a crucial role in accelerating innovation in biomaterials and medical technologies. Through these partnerships, RMT contributes to the development of advanced biomaterials with unique mechanical, biological, and functional properties that can be applied across drug delivery systems, regenerative medicine, implantable devices, and pharmaceutical technologies.
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="font-heading font-bold text-foreground mb-3">Academic Partners</h3>
            <ul className="space-y-2">
              {BMD_ACADEMIC_PARTNERS.map((p) => (
                <li key={p} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <GraduationCap className="w-4 h-4 text-primary shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="font-heading font-bold text-foreground mb-3">Industrial Partners</h3>
            <p className="text-muted-foreground text-xs mb-3">We collaborate with global innovators to deliver validated, market-ready biomaterial and pharmaceutical solutions.</p>
            <div className="flex flex-wrap gap-2">
              {BMD_INDUSTRIAL_PARTNERS.map((p) => (
                <span key={p} className="text-xs px-3 py-1 bg-primary/8 text-primary rounded-full border border-primary/15 font-medium">{p}</span>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="font-heading text-3xl font-bold text-foreground mb-4 pb-3 border-b border-border">Research & Publications</h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          RMT actively contributes to scientific advancement in biomaterials, polymer science, drug delivery, and medical device development through research collaborations and peer-reviewed publications.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-primary/5 border border-primary/15 rounded-xl p-4 text-center">
            <p className="text-2xl font-heading font-bold text-primary">40+</p>
            <p className="text-xs text-muted-foreground mt-1">International Research & Review Articles</p>
          </div>
          <div className="bg-primary/5 border border-primary/15 rounded-xl p-4 text-center">
            <p className="text-2xl font-heading font-bold text-primary">12+</p>
            <p className="text-xs text-muted-foreground mt-1">Conference Papers Published</p>
          </div>
        </div>
        <h3 className="font-heading font-semibold text-foreground mb-2">Research Focus Areas</h3>
        <ul className="grid sm:grid-cols-2 gap-2 mb-6">
          {BMD_RESEARCH_AREAS.map((area) => (
            <li key={area} className="text-sm text-muted-foreground flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              {area}
            </li>
          ))}
        </ul>
        <h3 className="font-heading font-semibold text-foreground mb-2">Areas of Expertise</h3>
        <div className="flex flex-wrap gap-2 mb-6">
          {BMD_EXPERTISE.map((e) => (
            <span key={e} className="text-xs px-2.5 py-1 bg-secondary rounded-full border border-border text-muted-foreground">{e}</span>
          ))}
        </div>
        <h3 className="font-heading font-semibold text-foreground mb-3">Granted Patents</h3>
        <div className="overflow-x-auto rounded-xl border border-border mb-6">
          <table className="w-full text-sm text-left">
            <thead className="bg-muted/50 text-foreground">
              <tr>
                <th className="px-4 py-3 font-semibold">Patent Title</th>
                <th className="px-4 py-3 font-semibold">Inventors</th>
                <th className="px-4 py-3 font-semibold">Patent No.</th>
              </tr>
            </thead>
            <tbody>
              {BMD_PATENTS.map((pat) => (
                <tr key={pat.patentNo} className="border-t border-border">
                  <td className="px-4 py-3 text-muted-foreground">{pat.title}</td>
                  <td className="px-4 py-3 text-muted-foreground">{pat.inventors}</td>
                  <td className="px-4 py-3 text-foreground font-medium">{pat.patentNo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h3 className="font-heading font-semibold text-foreground mb-3">Related Journal Publications</h3>
        <ul className="max-h-80 overflow-y-auto space-y-3 pr-2 border border-border rounded-xl p-4 bg-card">
          {BMD_PUBLICATIONS.map((pub, i) => (
            <li key={i} className="text-xs text-muted-foreground leading-relaxed border-b border-border/60 last:border-0 pb-3 last:pb-0">{pub}</li>
          ))}
        </ul>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="font-heading text-3xl font-bold text-foreground mb-4 pb-3 border-b border-border">Products</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="font-heading font-bold text-foreground mb-3">Skin Care</h3>
            <ul className="space-y-1.5">
              {BMD_PRODUCTS.skincare.map((item) => (
                <li key={item} className="text-sm text-muted-foreground">{item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="font-heading font-bold text-foreground mb-3">Hair Care</h3>
            <ul className="space-y-1.5">
              {BMD_PRODUCTS.haircare.map((item) => (
                <li key={item} className="text-sm text-muted-foreground">{item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-card border border-border rounded-xl p-5 md:col-span-1">
            <h3 className="font-heading font-bold text-foreground mb-3">Innovative Products</h3>
            <ul className="space-y-1.5 max-h-48 overflow-y-auto">
              {BMD_PRODUCTS.innovative.map((item) => (
                <li key={item} className="text-sm text-muted-foreground">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="font-heading text-3xl font-bold text-foreground mb-4 pb-3 border-b border-border">Equipment</h2>
        <div className="flex flex-wrap gap-2">
          {BMD_EQUIPMENT.map((eq) => (
            <span key={eq} className="text-sm px-3 py-1.5 bg-card border border-border rounded-lg text-muted-foreground">{eq}</span>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}

/* ---- Regulatory Compliance extended sections (main service page) ---- */
function RegulatoryComplianceExtras() {
  return (
    <div className="space-y-0">
      {/* ── Top Section: Standards & Documentation ── */}
      <FullBleedBlock bgClassName="bg-secondary/30">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-1.5 mb-5 bg-background/50">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-muted-foreground text-xs font-bold uppercase tracking-widest text-[10px]">Standards & Quality Documentation</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4 pb-3 border-b border-border">
            Device Standards & Quality Documentation
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8 max-w-3xl">
            Establishing a regulatory baseline requires strict alignment with cybersecurity, software engineering, safety, and quality management standards. We support core documentation lifecycles across key clinical software and hardware integrations.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Cyber Security Testing & Documentation */}
            <div className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Lock className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground text-sm">Cyber Security Testing</h3>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                  Structured pre-market and post-market cybersecurity documentation. We prepare threat modeling dossiers, coordinate vulnerability/penetration testing, and generate safety reports to meet FDA guidelines.
                </p>
              </div>
              <div className="text-[10px] text-primary/80 font-semibold uppercase tracking-wider">FDA Cyber Security Guidelines</div>
            </div>

            {/* Software Lifecycle (SDLC) IEC 62304 */}
            <div className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Code2 className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground text-sm">Software SDLC (IEC 62304)</h3>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                  Full lifecycle software design and validation in compliance with <strong>IEC 62304</strong>. We assist in software classification (Class A, B, C), risk assessments, code traceability, and release management.
                </p>
              </div>
              <div className="text-[10px] text-primary/80 font-semibold uppercase tracking-wider">IEC 62304 Compliant</div>
            </div>

            {/* ISO/IEC 27001:2022 */}
            <div className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <ShieldCheck className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground text-sm">Information Security</h3>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                  Implementation of Information Security Management Systems (ISMS) in alignment with <strong>ISO/IEC 27001:2022</strong>. Ensures secure patient data storage, HIPAA alignment, and cloud infrastructure security.
                </p>
              </div>
              <div className="text-[10px] text-primary/80 font-semibold uppercase tracking-wider">ISO/IEC 27001:2022</div>
            </div>

            {/* IEC 60601-1 (Compliance Documentation / Excel sheet mapping) */}
            <div className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <FileText className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground text-sm">Electrical Safety (IEC 60601-1)</h3>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                  Safety and essential performance documentation for medical electrical equipment. We prepare structured compliance mappings, safety checklists, and testing excel sheets to streamline validation.
                </p>
              </div>
              <div className="text-[10px] text-primary/80 font-semibold uppercase tracking-wider">Compliance Mapping & Excel Checklists</div>
            </div>

            {/* Risk Management Services / Blogs... (Content) */}
            <div className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <ClipboardCheck className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground text-sm">Risk Management Lifecycle</h3>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                  Full-scope ISO 14971 risk management. We build Hazard Traceability Matrices (HTM), FMEA risk files, and compile ongoing post-market risk reviews to act as a living record for safety validation.
                </p>
              </div>
              <div className="text-[10px] text-primary/80 font-semibold uppercase tracking-wider">ISO 14971:2019 / Risk Files</div>
            </div>

            {/* Greenlight Guru */}
            <div className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Activity className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground text-sm">Greenlight Guru QMS</h3>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                  Setup, migration, and management of Design History Files (DHF) and Quality Management Systems (QMS) on medical device software platforms like <strong>Greenlight Guru</strong>. Seamlessly bridge engineering with electronic audits.
                </p>
              </div>
              <div className="text-[10px] text-primary/80 font-semibold uppercase tracking-wider">eQMS Platform Setup</div>
            </div>
          </div>
        </AnimatedSection>
      </FullBleedBlock>

      {/* ── Middle Section: Technical File Preparation & Clinical Evaluation ── */}
      <FullBleedBlock bgClassName="bg-background">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-1.5 mb-5 bg-secondary/30">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-muted-foreground text-xs font-bold uppercase tracking-widest text-[10px]">Technical File & Clinical Evidence</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4 pb-3 border-b border-border">
            Technical File & Clinical Evaluation Preparation
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8 max-w-3xl">
            Regulatory approvals depend on the quality of clinical evidence and technical dossiers. We compile, review, and validate comprehensive clinical datasets to ensure compliance with global regulators.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Technical File Preparation */}
            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-md transition-all">
              <h3 className="font-heading font-bold text-foreground mb-3 flex items-center gap-2 text-base">
                <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded">DHF/DMR</span>
                Technical File Preparation
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                We compile comprehensive Technical Documentation packages (per EU MDR Annex II/III and FDA pathways) containing device descriptions, design history files, manufacturing flowcharts, and regulatory declaration forms.
              </p>
              <ul className="space-y-1.5 text-xs text-muted-foreground">
                <li className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>Declaration of Conformity documentation</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>Device Master Records (DMR) compilation</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>Labeling, instruction manuals (IFU), and packaging compliance</span>
                </li>
              </ul>
            </div>

            {/* Clinical Evaluation */}
            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-md transition-all">
              <h3 className="font-heading font-bold text-foreground mb-3 flex items-center gap-2 text-base">
                <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded">CLINICAL</span>
                Clinical Evaluation & Abstraction
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Our clinical affairs team abstracts raw clinical research data and maps evidence from scientific publications to support your device's safety, efficacy, and performance claims.
              </p>
              <ul className="space-y-1.5 text-xs text-muted-foreground">
                <li className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>Systematic literature searches & protocols</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>Literature Search Reports & screening logs</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>Equivalent product justifications and data mapping</span>
                </li>
              </ul>
            </div>

            {/* Clinical Evaluation Report (CER) */}
            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-md transition-all">
              <h3 className="font-heading font-bold text-foreground mb-3 flex items-center gap-2 text-base">
                <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded">CER</span>
                Clinical Evaluation Report (CER)
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Writing audit-ready CER dossiers in accordance with MEDDEV 2.7/1 Rev 4 and EU MDR requirements. We document literature research protocols, evaluate predicate device equivalence, and prove safety.
              </p>
              <ul className="space-y-1.5 text-xs text-muted-foreground">
                <li className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>Literature Research Protocols and search matrices</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>Equivalence comparisons of raw materials & clinical inputs</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>Benefit-risk analysis based on accumulated clinical databases</span>
                </li>
              </ul>
            </div>

            {/* Post Market Clinical Evaluation */}
            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-md transition-all">
              <h3 className="font-heading font-bold text-foreground mb-3 flex items-center gap-2 text-base">
                <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded">PMCF</span>
                Post Market Clinical Evaluation
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Defining continuous Post-Market Clinical Follow-up (PMCF) plans and compilation protocols. Gathering real-world safety data after market entry to continuously justify device performance.
              </p>
              <ul className="space-y-1.5 text-xs text-muted-foreground">
                <li className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>PMCF Plan & Survey creation</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>Periodic Safety Update Report (PSUR) compilation</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>Post-market safety data abstraction and feedback integration</span>
                </li>
              </ul>
            </div>
          </div>
        </AnimatedSection>
      </FullBleedBlock>

      {/* ── Bottom Section: Advantages & Roles ── */}
      <FullBleedBlock bgClassName="bg-secondary/40">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-1.5 mb-5 bg-background/50">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-muted-foreground text-xs font-bold uppercase tracking-widest text-[10px]">Advantages & Collaborator Roles</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4 pb-3 border-b border-border">
            Advantages & Collaborator Roles
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8 max-w-3xl">
            Compliance is a collaborative, interdisciplinary achievement. Here is how our specialized services benefit different stakeholders and external partners across the device lifecycle.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Biomedical Engineer Role */}
            <div className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <h3 className="font-heading font-bold text-foreground text-sm mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Biomedical Engineers
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                  Helps design engineers map technical design inputs to regulatory standards, compile Device History Files, create Excel safety checklists, and execute seamless design transfers.
                </p>
              </div>
              <div className="text-[10px] text-primary/80 font-bold uppercase tracking-wider">Design Control & Safety Alignment</div>
            </div>

            {/* Biomedical Scientist Role */}
            <div className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <h3 className="font-heading font-bold text-foreground text-sm mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Biomedical Scientists
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                  Aids in drafting biological safety justifications, chemical characterization profiles, and Toxicological Risk Assessment (TRA) files to reduce animal testing and satisfy regulators.
                </p>
              </div>
              <div className="text-[10px] text-primary/80 font-bold uppercase tracking-wider">Biocompatibility & TRA Dossiers</div>
            </div>

            {/* Medical Device Manufacturer */}
            <div className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <h3 className="font-heading font-bold text-foreground text-sm mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Device Manufacturers
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                  Enables manufacturers to speed up market launch via pre-vetted QMS templates, audit-ready technical folders, and robust hazard matrix files.
                </p>
              </div>
              <div className="text-[10px] text-primary/80 font-bold uppercase tracking-wider">Audit Readiness & Fast Time-to-Market</div>
            </div>

            {/* Relevant 3rd Party */}
            <div className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <h3 className="font-heading font-bold text-foreground text-sm mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Relevant 3rd Parties
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                  Coordinates and facilitates communication with Notified Bodies, Authorized Representatives, and international agents to ensure smooth certification audits and approvals.
                </p>
              </div>
              <div className="text-[10px] text-primary/80 font-bold uppercase tracking-wider">Liaisons & Audit Support</div>
            </div>

            {/* Lab Testing */}
            <div className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 hover:shadow-md transition-all flex flex-col justify-between md:col-span-1 lg:col-span-2">
              <div>
                <h3 className="font-heading font-bold text-foreground text-sm mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Laboratory Testing Coordination
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                  We manage coordination with GLP/ISO-certified testing laboratories to organize biocompatibility assays, electrical safety verification, electromagnetic compatibility (EMC) tests, and functional bench performance tests, compiling all outputs into structured reports.
                </p>
              </div>
              <div className="text-[10px] text-primary/80 font-bold uppercase tracking-wider">Verification Testing & Lab Coordination</div>
            </div>
          </div>
        </AnimatedSection>
      </FullBleedBlock>

      {/* ── Section 4: Relevant Standards Table ── */}
      <FullBleedBlock bgClassName="bg-background">
        <AnimatedSection>
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4 pb-3 border-b border-border">
            Relevant Regulatory Standards
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            Compliance with global consensus standards is vital for validating your medical device's safety, quality, and performance.
          </p>

          <div className="overflow-x-auto rounded-xl border border-border bg-card">
            <table className="w-full text-sm text-left">
              <thead className="bg-muted/50 text-foreground">
                <tr>
                  <th className="px-4 py-3 font-semibold text-xs uppercase tracking-wider w-1/3">Standard / Regulation</th>
                  <th className="px-4 py-3 font-semibold text-xs uppercase tracking-wider w-2/3">Scope & Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  { std: "ISO 13485", purpose: "Medical Device Quality Management System (QMS)" },
                  { std: "ISO 14971:2019", purpose: "Medical Device Risk Management framework and application" },
                  { std: "ISO/TR 24971:2020", purpose: "Guidance on the implementation and transition of ISO 14971" },
                  { std: "ISO 10993-1:2025", purpose: "Biological Evaluation of Medical Devices — framework & testing strategy" },
                  { std: "ISO 10993-17:2023", purpose: "Toxicological Risk Assessment of medical device material constituents" },
                  { std: "EU MDR 2017/745", purpose: "European Union Medical Device Regulation requirements for CE marking" },
                  { std: "FDA 21 CFR", purpose: "U.S. Code of Federal Regulations for Medical Devices and QSR" }
                ].map((item, i) => (
                  <tr key={i} className="hover:bg-muted/30 transition-colors">
                    <td className="px-4 py-3 text-foreground font-semibold font-mono text-xs">{item.std}</td>
                    <td className="px-4 py-3 text-muted-foreground text-xs">{item.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimatedSection>
      </FullBleedBlock>
    </div>
  );
}

/* ---- Medical device manufacturing (Revive content, main service page) ---- */

/* ---- Medical device manufacturing (Revive content, main service page) ---- */
const MANUFACTURING_PRODUCT_ICONS: Record<string, LucideIcon> = {
  stethoscope: Stethoscope,
  microscope: Microscope,
  atom: Atom,
  shield: ShieldCheck,
  gauge: Gauge,
};

const MANUFACTURING_DEVICE_ICONS = [Package, Layers, Heart, Zap, Truck, TrendingUp] as const;

function ManufacturingProductMadeCard({ product, reverse = false }: { product: ManufacturingProductMade; reverse?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`grid lg:grid-cols-2 gap-8 lg:gap-10 items-center ${reverse ? "lg:[direction:rtl]" : ""}`}
    >
      <div className={reverse ? "lg:[direction:ltr]" : ""}>
        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">{product.category}</p>
        <h3 className="font-heading text-2xl font-bold text-foreground mb-3">{product.name}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-5">{product.description}</p>
        <div className="space-y-3 mb-5">
          {product.features.map((f) => (
            <div key={f.title} className="flex items-start gap-3">
              <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-foreground">{f.title}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {product.specs.map((spec) => (
            <span key={spec} className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/8 text-primary border border-primary/15">
              {spec}
            </span>
          ))}
        </div>
      </div>
      <div className={`relative rounded-2xl overflow-hidden aspect-[4/3] border border-border shadow-lg ${reverse ? "lg:[direction:ltr]" : ""}`}>
        <img src={product.image} alt={product.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
      </div>
    </motion.div>
  );
}

function ManufacturingServiceExtras() {
  return (
    <div className="space-y-0">
      <FullBleedBlock bgClassName="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} aria-hidden />
        <AnimatedSection className="relative">
          <SectionHeading
            eyebrow="Quality & Compliance"
            title="Built-In Quality at Every Stage"
            description="Every device is backed by documented, validated, and auditable processes — ISO 13485-certified operations in controlled cleanroom environments."
            light
          />
          <div className="grid sm:grid-cols-2 gap-3">
            {MANUFACTURING_QUALITY_POINTS.map((point, i) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-3"
              >
                <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-white/80">{point}</span>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </FullBleedBlock>

      <FullBleedBlock bgClassName="bg-background">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Portfolio"
            title="Flagship Products & Technologies"
            description="Precision-engineered medical devices developed to clinical-grade standards within certified cleanroom facilities."
          />
          <IconCardGrid
            columns={2}
            cards={MANUFACTURING_PRODUCTS.map((p) => ({
              title: p.name,
              description: p.description,
              features: p.features,
              icon: MANUFACTURING_PRODUCT_ICONS[p.icon] ?? PackageCheck,
            }))}
          />
        </AnimatedSection>
      </FullBleedBlock>

      <FullBleedBlock bgClassName="bg-secondary/40">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Products Made"
            title="Clinical-Grade Devices We Manufacture"
            description="Vascular and interventional devices engineered for precision, safety, and regulatory compliance."
          />
          <div className="space-y-16">
            {MANUFACTURING_PRODUCTS_MADE.map((product, i) => (
              <ManufacturingProductMadeCard key={product.name} product={product} reverse={i % 2 === 1} />
            ))}
          </div>
        </AnimatedSection>
      </FullBleedBlock>

      <FullBleedBlock bgClassName="bg-background">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Capabilities"
            title="Full-Spectrum Device Manufacturing"
            description="From Class I general devices to Class III life-sustaining technologies and contract OEM production."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {MANUFACTURING_DEVICE_CLASSES.map((item, i) => {
              const Icon = MANUFACTURING_DEVICE_ICONS[i] ?? Factory;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="relative bg-card border border-border rounded-2xl p-6 hover:border-primary/35 hover:shadow-lg transition-all overflow-hidden group"
                >
                  <span className="absolute top-4 right-4 text-5xl font-heading font-black text-primary/10 group-hover:text-primary/15 transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>
      </FullBleedBlock>

      <FullBleedBlock bgClassName="bg-gradient-to-r from-primary/5 via-background to-primary/5">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Infrastructure"
            title="World-Class Cleanroom Environments"
            description="ISO-classified controlled spaces purpose-built for precision medical device production."
          />
          <div className="grid sm:grid-cols-3 gap-5 mb-8">
            {MANUFACTURING_CLEANROOMS.map((room, i) => (
              <motion.div
                key={room.grade}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative rounded-2xl border-2 border-primary/20 bg-gradient-to-b from-primary/10 to-card p-6 text-center overflow-hidden"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
                <Wind className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-3xl font-heading font-black text-primary">{room.grade}</p>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{room.description}</p>
              </motion.div>
            ))}
          </div>
          <h3 className="font-heading font-semibold text-foreground mb-4">Environmental Control Systems</h3>
          <IconFeatureStrip items={MANUFACTURING_ENVIRONMENTAL_CONTROLS} icon={Gauge} />
        </AnimatedSection>
      </FullBleedBlock>

      <FullBleedBlock bgClassName="bg-background">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Process"
            title="Development Journey"
            description="From your idea to the patient's bedside — bridging technical, regulatory, and operational hurdles."
          />
          <VerticalTimeline
            phases={MANUFACTURING_DEVELOPMENT_PHASES.map((p, i) => ({
              ...p,
              icon: [Lightbulb, Cog, Rocket][i] ?? Target,
            }))}
          />
        </AnimatedSection>
      </FullBleedBlock>

      <FullBleedBlock bgClassName="bg-secondary/30">
        <AnimatedSection>
          <SectionHeading eyebrow="Validation" title="Testing & Validation" />
          <IconCardGrid
            columns={2}
            cards={MANUFACTURING_TESTING_SERVICES.map((svc) => ({
              title: svc.title,
              description: svc.description,
              icon: Beaker,
            }))}
          />
        </AnimatedSection>
      </FullBleedBlock>

      <FullBleedBlock bgClassName="bg-background">
        <AnimatedSection>
          <SectionHeading eyebrow="Scale" title="Capacity Building" />
          <IconFeatureStrip items={MANUFACTURING_CAPACITY_BUILDING} icon={Building2} />
        </AnimatedSection>
      </FullBleedBlock>

      <FullBleedBlock bgClassName="bg-secondary/40">
        <AnimatedSection>
          <SectionHeading title="Why Choose Us for Manufacturing" />
          <WhyChooseGrid
            items={MANUFACTURING_WHY_CHOOSE.map((w, i) => ({
              ...w,
              icon: [Award, TrendingUp, ShieldCheck, Lightbulb, Factory][i] ?? CheckCircle,
            }))}
          />
        </AnimatedSection>
      </FullBleedBlock>
    </div>
  );
}

const PD_PHASE_ICONS = [Lightbulb, PenTool, Boxes, FlaskConical, Factory, ShieldCheck] as const;
const PD_REG_ICONS = [ShieldCheck, ScrollText, FileText, ClipboardCheck, Globe] as const;

/* ---- Product Development Wing (main service page) ---- */
function ProductDevelopmentServiceExtras() {
  return (
    <div className="space-y-0">
      <FullBleedBlock bgClassName="bg-gradient-to-br from-sky-950/90 via-slate-900 to-blue-950/90 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" aria-hidden />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" aria-hidden />
        <AnimatedSection className="relative">
          <SectionHeading
            eyebrow="Lifecycle"
            title="Product Development Lifecycle"
            description="Six structured phases from concept development through regulatory and quality consultancy — end-to-end turnkey realization for vascular and interventional devices."
            light
          />
          <LifecycleRoadmap
            variant="dark"
            steps={PRODUCT_DEVELOPMENT_PHASES.map((phase, i) => ({
              title: phase.title,
              items: phase.items,
              icon: PD_PHASE_ICONS[i] ?? Target,
            }))}
          />
        </AnimatedSection>
      </FullBleedBlock>

      <FullBleedBlock bgClassName="bg-background">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Compliance"
            title="Regulatory & Quality Consultancy Services"
            description="Structured pathways for ISO, IEC, FDA, CE, and DRAP requirements — minimizing approval timelines with audit-ready documentation."
          />
          <PillarGrid
            pillars={PRODUCT_DEVELOPMENT_REGULATORY.map((block, i) => ({
              title: block.title,
              items: block.items,
              icon: PD_REG_ICONS[i] ?? ShieldCheck,
            }))}
          />
        </AnimatedSection>
      </FullBleedBlock>

      <FullBleedBlock bgClassName="bg-gradient-to-r from-secondary/50 via-background to-secondary/50">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Commercialization"
            title="Turnkey Manufacturing Consultancy Solutions"
            description="Establishing sustainable, GMP-aligned manufacturing operations for long-term commercial success."
          />
          <IconCardGrid
            columns={2}
            cards={PRODUCT_DEVELOPMENT_MANUFACTURING.map((svc) => ({
              title: svc.title,
              description: svc.description,
              icon: Truck,
            }))}
          />
        </AnimatedSection>
      </FullBleedBlock>

      <FullBleedBlock bgClassName="bg-secondary/30">
        <AnimatedSection>
          <SectionHeading title="Why Choose RMT for Product Development" />
          <WhyChooseGrid
            items={PRODUCT_DEVELOPMENT_WHY.map((w, i) => ({
              ...w,
              icon: [Rocket, Users, ShieldCheck, Cpu, SlidersHorizontal, Zap][i] ?? CheckCircle,
            }))}
          />
        </AnimatedSection>
      </FullBleedBlock>
    </div>
  );
}

const QUALITY_TAB_ICONS: Record<string, React.ElementType> = {
  qa: ClipboardList,
  qcprod: Microscope,
  sqa: Code2,
  qcrd: TestTube2,
};

function QualityDepartmentPanel({ dept }: { dept: QualityDepartment }) {
  const Icon = QUALITY_TAB_ICONS[dept.id] ?? ShieldCheck;

  return (
    <div className="space-y-8">
      <div className="flex items-start gap-4 p-6 rounded-2xl border border-border bg-card shadow-sm">
        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary">
          <Icon className="w-7 h-7" />
        </div>
        <div>
          <h3 className="font-heading font-bold text-foreground text-lg mb-1">{dept.name}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{dept.description}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {dept.standards.map((s) => (
              <span key={s} className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/8 text-primary border border-primary/15">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {dept.sections.map((section) => (
        <div key={section.label}>
          <h4 className="font-heading font-semibold text-foreground mb-4 flex items-center gap-2">
            <span className="w-8 h-0.5 bg-primary rounded-full" />
            {section.label}
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {section.cards.map((card, ci) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.04 }}
                className="group bg-card border border-border rounded-xl p-4 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <h5 className="font-semibold text-foreground text-sm">{card.title}</h5>
                  {card.owner && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                      {card.owner}
                    </span>
                  )}
                </div>
                <ul className="space-y-1.5">
                  {card.items.map((item) => (
                    <li key={item} className="text-xs text-muted-foreground flex items-start gap-2 leading-relaxed">
                      <span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      ))}

      {dept.footerNote && (
        <div className="bg-primary/5 border border-primary/15 rounded-xl p-5">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground font-medium">QD Core Functions: </strong>
            {dept.footerNote.replace(/^QD Core Functions across all Research and Development activities:\s*/, "")}
          </p>
        </div>
      )}
    </div>
  );
}

const QUALITY_WHY_ICONS = [Award, SlidersHorizontal, Microscope, Users] as const;

/* ---- Quality Department Services (main service page) ---- */
function QualityTestingServiceExtras() {
  const [activeId, setActiveId] = useState(QUALITY_DEPARTMENTS[0].id);
  const activeDept = QUALITY_DEPARTMENTS.find((d) => d.id === activeId) ?? QUALITY_DEPARTMENTS[0];

  return (
    <div className="space-y-0">
      <FullBleedBlock bgClassName="bg-gradient-to-br from-teal-950/90 via-slate-900 to-emerald-950/80 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "28px 28px" }} aria-hidden />
        <AnimatedSection className="relative">
          <SectionHeading
            eyebrow="Organisation"
            title="Quality Departments"
            description="QD leads all quality activities with collaboration across EMD, SD, BMD, PD, PRD, and Supply Chain — from Research and Development bench to production release."
            light
          />
          <div className="flex flex-wrap gap-2 mb-8">
            {QUALITY_DEPARTMENTS.map((dept) => {
              const TabIcon = QUALITY_TAB_ICONS[dept.id] ?? ShieldCheck;
              const isActive = dept.id === activeId;
              return (
                <button
                  key={dept.id}
                  type="button"
                  onClick={() => setActiveId(dept.id)}
                  className={cn(
                    "inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-medium transition-all",
                    isActive
                      ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25"
                      : "bg-white/5 text-white/70 border-white/15 hover:bg-white/10 hover:text-white"
                  )}
                >
                  <TabIcon className="w-4 h-4" />
                  {dept.tabLabel}
                </button>
              );
            })}
          </div>
        </AnimatedSection>
      </FullBleedBlock>

      <FullBleedBlock bgClassName="bg-background">
        <AnimatedSection>
          <QualityDepartmentPanel dept={activeDept} />
        </AnimatedSection>
      </FullBleedBlock>

      <FullBleedBlock bgClassName="bg-secondary/40">
        <AnimatedSection>
          <SectionHeading title="Why Choose Our Quality Department" />
          <WhyChooseGrid
            items={QUALITY_WHY_CHOOSE.map((item, i) => ({
              ...item,
              icon: QUALITY_WHY_ICONS[i] ?? ShieldCheck,
            }))}
          />
        </AnimatedSection>
      </FullBleedBlock>
    </div>
  );
}

/* ---- Map slug — icon ---- */
const SERVICE_ICONS: Record<string, React.ReactNode> = {
  "regulatory-compliance": <Shield className="w-6 h-6" />,
  "software-ai": <Brain className="w-6 h-6" />,
  "product-development": <Layers className="w-6 h-6" />,
  "quality-testing": <FlaskConical className="w-6 h-6" />,
  "automation-services": <Cog className="w-6 h-6" />,
  "design-fabrication": <Wrench className="w-6 h-6" />,
  "engineering-product-development": <Settings2 className="w-6 h-6" />,
  "bmd": <Dna className="w-6 h-6" />,
  "mbl-laboratory": <Microscope className="w-6 h-6" />,
  "contract-manufacturing": <Factory className="w-6 h-6" />,
};

/* ---- Per-service standards shown in sidebar ---- */
const SERVICE_STANDARDS: Record<string, string[]> = {
  "regulatory-compliance":   ["ISO 13485", "ISO 14971", "ISO 10993-1:2025", "ISO 10993-17:2023", "EU MDR 2017/745", "FDA 21 CFR"],
  "software-ai":             ["IEC 62304", "FDA SaMD Guidance", "IEC 82304", "EU MDR Rule 11", "HIPAA / SOC 2"],
  "product-development":     ["ISO 13485", "ISO 14971", "IEC 62304", "IEC 60601", "FDA", "CE"],
  "quality-testing":         ["ISO 13485", "ISO 10993", "IEC 60601-1", "IEC 62304", "ISO 14971"],
  "automation-services":       ["IEC 61131", "ISO 13849", "Modbus / Profibus", "GMP", "ISO 13485"],
  "design-fabrication":        ["SOLIDWORKS", "ANSYS", "COMSOL", "DFM / DFA", "ISO 13485"],
  "engineering-product-development": ["IEC 62304", "IPC-2221", "IEC 60601-1", "STM32 / ESP32", "ISO 13485"],
  "bmd":                     ["ISO 10993", "ISO 17025", "ICH Q1A(R2)", "ISO 13485", "FDA / EU MDR"],
  "mbl-laboratory":          ["GMP Compliance", "ISO 13485", "USP <71>", "USP <85>", "EU Pharmacopoeia"],
  "contract-manufacturing":  ["ISO 13485", "ISO 14644", "ISO 14971", "ISO 10993"],
};

/* ---- Per-service key stats shown in sidebar ---- */
const SERVICE_SIDEBAR_STATS: Record<string, { label: string; value: string; icon: React.ElementType }[]> = {
  "regulatory-compliance":   [{ label: "Approval Rate", value: "98%", icon: Medal }, { label: "Jurisdictions", value: "40+", icon: Globe }, { label: "Submissions", value: "1,200+", icon: FileCheck }],
  "software-ai":             [{ label: "AI Models Deployed", value: "80+", icon: Brain }, { label: "Platforms Supported", value: "15+", icon: LayoutDashboard }, { label: "Compliance Rate", value: "100%", icon: ShieldCheck }],
  "product-development":     [
    { label: PRODUCT_DEVELOPMENT_KEY_METRICS[0].label, value: PRODUCT_DEVELOPMENT_KEY_METRICS[0].value, icon: PackageCheck },
    { label: PRODUCT_DEVELOPMENT_KEY_METRICS[1].label, value: PRODUCT_DEVELOPMENT_KEY_METRICS[1].value, icon: BookOpen },
    { label: PRODUCT_DEVELOPMENT_KEY_METRICS[2].label, value: PRODUCT_DEVELOPMENT_KEY_METRICS[2].value, icon: Layers },
    { label: PRODUCT_DEVELOPMENT_KEY_METRICS[3].label, value: PRODUCT_DEVELOPMENT_KEY_METRICS[3].value, icon: GraduationCap },
    { label: PRODUCT_DEVELOPMENT_KEY_METRICS[4].label, value: PRODUCT_DEVELOPMENT_KEY_METRICS[4].value, icon: Rocket },
  ],
  "quality-testing":         [{ label: "Quality Departments", value: "4", icon: FlaskConical }, { label: "Standards Covered", value: "50+", icon: BookOpen }, { label: "Cross-Functional", value: "6 Depts", icon: Users }],
  "automation-services":     [{ label: "PLC Platforms", value: "Fatek+", icon: Cog }, { label: "HMI Systems", value: "Weintek", icon: MonitorSmartphone }, { label: "Motion Axes", value: "Multi", icon: Zap }],
  "design-fabrication":      [{ label: "CAD Platforms", value: "SOLIDWORKS", icon: Layers }, { label: "3D Printers", value: "4+", icon: Boxes }, { label: "Simulations", value: "ANSYS/COMSOL", icon: Gauge }],
  "engineering-product-development": [{ label: "Disciplines", value: "3+", icon: Settings2 }, { label: "Methodology Steps", value: "5", icon: Target }, { label: "Deliverable Types", value: "20+", icon: PackageCheck }],
  "bmd":                     [{ label: "Research Articles", value: "40+", icon: BookOpen }, { label: "Conference Papers", value: "12+", icon: FileCheck }, { label: "Granted Patents", value: "2", icon: Award }],
  "mbl-laboratory":          [
    { label: "Client Projects Completed", value: "10+", icon: Rocket },
    { label: "Years of Scientific Experience", value: "10+", icon: GraduationCap },
    { label: "Laboratory Success Rate", value: ">99%", icon: Medal },
    { label: "Turnaround Time", value: "24–72h", icon: Calendar },
  ],
  "contract-manufacturing":  [
    { label: MANUFACTURING_KEY_METRICS[0].label, value: MANUFACTURING_KEY_METRICS[0].value, icon: Wind },
    { label: MANUFACTURING_KEY_METRICS[1].label, value: MANUFACTURING_KEY_METRICS[1].value, icon: Layers },
    { label: MANUFACTURING_KEY_METRICS[2].label, value: MANUFACTURING_KEY_METRICS[2].value, icon: Target },
    { label: MANUFACTURING_KEY_METRICS[3].label, value: MANUFACTURING_KEY_METRICS[3].value, icon: ShieldCheck },
    { label: MANUFACTURING_KEY_METRICS[4].label, value: MANUFACTURING_KEY_METRICS[4].value, icon: Award },
  ],
};

/** One key metric per sub-service (e.g. MBL testing programmes) */
const SUB_SERVICE_SIDEBAR_STATS: Record<string, Record<string, { label: string; value: string; icon: React.ElementType }[]>> = {
  "mbl-laboratory": {
    "sterility-testing": [{ label: "Sterility Tests Performed", value: "250+", icon: FlaskConical }],
    "bacterial-endotoxin-testing": [{ label: "Endotoxin Tests Conducted", value: "300+", icon: TestTube2 }],
    "microbial-limit-testing": [{ label: "Bioburden Assessments Completed", value: "500+", icon: Microscope }],
  },
  "quality-testing": {
    "quality-assurance": [
      { label: "Successfully established and maintained an ISO 13485-certified Quality Management System", value: "Certified", icon: ShieldCheck },
      { label: "Successfully completed regulatory audits and inspections", value: "Audited", icon: Medal },
      { label: "Comprehensive quality processes covering design, manufacturing, documentation, and other support activities", value: "Full Scope", icon: Layers },
      { label: "Structured CAPA, document control, and change management systems", value: "Structured", icon: ClipboardList },
      { label: "Commitment to continuous improvement and regulatory compliance", value: "Continuous", icon: Target },
    ],
  },
};

/** Per sub-service compliance standards (overrides service-level list) */
const SUB_SERVICE_STANDARDS: Record<string, Record<string, string[]>> = {
  "quality-testing": {
    "quality-assurance": ["ISO 13485:2016", "QMSR (FDA 21 CFR 820)", "ISO 14971:2019", "DRAP Compliance"],
    "qc-rd": ["ISO 14971:2019", "IEC 60601-1", "ISO 81060", "ASTM Standards", "ISO 10555", "ISO 25539"],
    "sqa-samd-simd": [...SQA_STANDARDS],
  },
};

/** Per sub-service approach methodology */
const SUB_SERVICE_APPROACH_STEPS: Record<string, Record<string, { step: string; title: string; desc: string }[]>> = {
  "quality-testing": {
    "quality-assurance": [
      { step: "01", title: "Understand", desc: "We assess your current quality processes, documentation, and compliance status." },
      { step: "02", title: "Design", desc: "We develop scalable quality solutions tailored to your organization and regulatory needs." },
      { step: "03", title: "Implement", desc: "We work alongside your team to establish effective quality processes and documentation." },
      { step: "04", title: "Improve", desc: "We support continuous improvement through audits, CAPA management, training, and ongoing quality oversight." },
    ],
    "sqa-samd-simd": [
      { step: "01", title: "Assess", desc: "Understand requirements, intended use, regulatory pathway, and quality objectives across the SDLC." },
      { step: "02", title: "Plan", desc: "Develop test strategy, plans, traceability matrices, and risk-based testing approaches." },
      { step: "03", title: "Execute", desc: "Manual, automated, performance, and compliance testing integrated with Agile Scrum delivery." },
      { step: "04", title: "Assure", desc: "Defect management, validation documentation, and continuous quality improvement through release." },
    ],
  },
};

/** Per sub-service full-service capability list */
const SUB_SERVICE_CAPABILITIES: Record<string, Record<string, string[]>> = {
  "quality-testing": {
    "quality-assurance": [
      "ISO 13485 QMS & Audit Readiness",
      "Production Quality & Process Controls",
      "Design Controls & Verification Support",
      "Risk Management & Compliance",
      "Production & Testing Support",
    ],
    "sqa-samd-simd": SQA_SERVICE_SECTIONS.map((s) => s.label),
  },
};

/** Closing note shown after capabilities on specific sub-service pages */
const SUB_SERVICE_CLOSING_NOTE: Record<string, Record<string, string>> = {
  "quality-testing": {
    "quality-assurance":
      "Our QA services are designed to help organizations build robust quality systems, achieve regulatory compliance, improve operational performance, and maintain high standards of product quality and safety. We partner with clients to provide practical, efficient, and reliable quality assurance solutions tailored to their business needs.",
    "sqa-samd-simd": SQA_CLOSING_NOTE,
  },
};

/** Per sub-service Why Choose RMT items */
const SUB_SERVICE_WHY_RMT: Record<string, Record<string, { title: string; desc: string }[]>> = {
  "quality-testing": {
    "sqa-samd-simd": SQA_WHY_CHOOSE.map((item) => ({ title: item.title, desc: item.description })),
  },
};

/** Per sub-service metrics section headings */
const SUB_SERVICE_METRICS_HEADING: Record<string, Record<string, { eyebrow: string; heading: string }>> = {
  "quality-testing": {
    "quality-assurance": { eyebrow: "Track Record", heading: "Our Achievements" },
  },
};

/** Per sub-service compliance strip heading */
const SUB_SERVICE_STANDARDS_HEADING: Record<string, Record<string, string>> = {
  "quality-testing": {
    "quality-assurance": "Built for Medical Device Quality & Compliance",
    "sqa-samd-simd": "Software Quality & Testing Standards Expertise",
  },
};

/** Per sub-service hero / image badge label (overrides parent service shortName) */
const SUB_SERVICE_BADGE_LABEL: Record<string, Record<string, string>> = {
  "quality-testing": {
    "quality-assurance": "Quality Assurance",
    "sqa-samd-simd": "Software Quality Assurance",
    "qc-rd": "QC — Research and Development",
  },
};

/** Per sub-service full-service capabilities section title */
const SUB_SERVICE_CAPABILITIES_TITLE: Record<string, Record<string, string>> = {
  "quality-testing": {
    "quality-assurance": "All Quality Management Capabilities",
    "sqa-samd-simd": "Our Core SQA Services",
  },
};

/* ---- Per-service icon scatter icons ---- */
const SERVICE_SCATTER_ICONS: Record<string, React.ElementType[]> = {
  "regulatory-compliance":  [Shield, FileSearch, ScrollText, Globe, CheckCircle, ShieldCheck, FileCheck, BookOpen, Award, Medal],
  "software-ai":            [Code2, Cpu, Cloud, Terminal, Brain, Sparkles, GitBranch, MonitorSmartphone, Workflow, Bug, Layers, Zap, Smartphone, ShieldCheck, Activity, Cog, Boxes, ScanLine, CircuitBoard, Network, Database, Binary],
  "product-development":    [Layers, Target, PackageCheck, ClipboardList, Wrench, CircuitBoard, FlaskConical, ShieldCheck, FileCheck, Rocket, Cog, Microscope, Settings2, CheckCircle, Brain],
  "quality-testing":        [FlaskConical, TestTube2, Microscope, BarChart3, ClipboardList, CheckCircle, Search, Target, ScanLine, Gauge],
  "automation-services":    [Cog, Zap, Network, MonitorSmartphone, Cable, Radio, Settings2, Gauge, Cloud, Terminal],
  "design-fabrication":     [Wrench, Layers, Gauge, Boxes, Cpu, Microscope, Waves, Target, Cog, PackageCheck],
  "engineering-product-development": [Settings2, Cog, Wrench, CircuitBoard, Layers, Brain, Target, PackageCheck, Zap, Network],
  "bmd":                    [Dna, Microscope, FlaskConical, Atom, Waves, Layers, Pill, ScanLine, TestTube2, Lightbulb],
  "mbl-laboratory":         [Microscope, FlaskConical, TestTube2, ShieldCheck, CheckCircle, Atom, ScanLine, PackageCheck, Waves, Bug],
  "contract-manufacturing": [Factory, Boxes, Cog, Truck, PackageCheck, Settings2, Gauge, Medal, ClipboardList, Network],
};

/* ---- Generic sub-service images per service (cycled by index) ---- */
const SERVICE_GENERIC_SUB_IMAGES: Record<string, string[]> = {
  "regulatory-compliance": [
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&q=80",
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=900&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80",
    "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=900&q=80",
    "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=900&q=80",
  ],
  "quality-testing": [
    "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=900&q=80",
    "https://images.unsplash.com/photo-1564325724739-bae0bd08762c?w=900&q=80",
    "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=900&q=80",
    "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=900&q=80",
  ],
  "product-development": [
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&q=80",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&q=80",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=80",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80",
  ],
  "automation-services": [
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=900&q=80",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80",
    "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=900&q=80",
    "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=900&q=80",
  ],
  "design-fabrication": [
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&q=80",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=80",
    "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&q=80",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&q=80",
  ],
  "engineering-product-development": [
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&q=80",
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=900&q=80",
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&q=80",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80",
  ],
  "bmd": [
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=80",
    "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=900&q=80",
    "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=900&q=80",
    "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=900&q=80",
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80",
    "https://images.unsplash.com/photo-1559757175-08a4f7e5bbf9?w=900&q=80",
    "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=900&q=80",
    "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=900&q=80",
    "https://images.unsplash.com/photo-1564325724739-bae0bd08762c?w=900&q=80",
    "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=900&q=80",
  ],
  "mbl-laboratory": [
    "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=900&q=80",
    "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=900&q=80",
    "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=900&q=80",
    "https://images.unsplash.com/photo-1564325724739-bae0bd08762c?w=900&q=80",
    "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=900&q=80",
    "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=900&q=80",
  ],
  "contract-manufacturing": [...MANUFACTURING_HERO_IMAGES],
};

/* ---- Large decorative background icons per service ---- */
const ServiceBgIcon = ({ slug }: { slug: string }) => {
  const icon = SERVICE_ICONS[slug];
  if (!icon) return null;
  return (
    <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-[0.06] pointer-events-none" style={{ width: 280, height: 280 }}>
      <svg viewBox="0 0 100 100" fill="none" stroke="white" strokeWidth="2" className="w-full h-full">
        <circle cx="50" cy="50" r="45" />
        <circle cx="50" cy="50" r="35" />
        <line x1="50" y1="5" x2="50" y2="25" />
        <line x1="50" y1="75" x2="50" y2="95" />
        <line x1="5" y1="50" x2="25" y2="50" />
        <line x1="75" y1="50" x2="95" y2="50" />
      </svg>
    </div>
  );
};

/* ---- Stethoscope outline SVG ---- */
const StethoBg = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="4">
    <circle cx="70" cy="50" r="28" />
    <circle cx="130" cy="50" r="28" />
    <path d="M 42 50 Q 42 120 100 145 Q 158 120 158 50" />
    <circle cx="100" cy="155" r="15" />
    <line x1="100" y1="170" x2="100" y2="190" />
    <circle cx="100" cy="193" r="5" />
  </svg>
);

const PROVEN_PROCESS_PHASES = [
  { step: "01", title: "Discovery", Icon: Search, desc: "Deep-dive into your project goals, regulatory pathway, market requirements, and technical constraints.", color: "from-blue-500/10 to-primary/10" },
  { step: "02", title: "Strategy", Icon: ClipboardList, desc: "We define a detailed project plan — scope, timeline, regulatory strategy, and risk mitigation roadmap.", color: "from-primary/10 to-indigo-500/10" },
  { step: "03", title: "Design & Build", Icon: Wrench, desc: "Engineering, software, and regulatory teams work in parallel to deliver your device design and documentation.", color: "from-indigo-500/10 to-violet-500/10" },
  { step: "04", title: "Validate", Icon: TestTube2, desc: "Rigorous V&V testing, risk management closure, and quality system review ahead of regulatory submission.", color: "from-violet-500/10 to-primary/10" },
  { step: "05", title: "Approve & Scale", Icon: Rocket, desc: "Regulatory submission, approval management, and manufacturing scale-up for successful market launch.", color: "from-primary/10 to-blue-500/10" },
] as const;

/* ======================================================
   SERVICES OVERVIEW
====================================================== */
export function ServicesOverview() {
  useSEO({
    title: "Our Services",
    description: "RMT Medical Technologies provides comprehensive medical device and BMD services — product design, regulatory compliance, software & AI, automation, design & fabrication, engineering product development, quality testing, biomaterials, microbiology lab testing, and contract manufacturing.",
    keywords: "medical device services, regulatory compliance, product design prototyping, contract manufacturing",
    path: "/services",
  });

  return (
    <div className="bg-background min-h-screen pt-20">

      {/* HERO */}
      <section className="relative min-h-[420px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1600&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/92 via-black/80 to-primary/50" />
        <div className="absolute inset-0 opacity-[0.05] text-white pointer-events-none" style={{ position: "absolute", right: "-10%", top: "-10%", width: "60%", height: "120%" }}>
          <StethoBg />
        </div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "70px 70px" }} />
        <ServiceBgIcon slug="regulatory-compliance" />
        <div className="page-container text-center relative z-10 py-24">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary text-xs font-bold uppercase tracking-widest">What We Offer</span>
            </div>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-5">Our <span className="text-primary">Services</span></h1>
            <p className="text-white/70 text-xl max-w-3xl mx-auto leading-relaxed">
              A comprehensive suite of medical device and technology services — covering every stage from design through regulatory approval, manufacturing, and commercialization.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-8 pt-6 border-t border-white/10">
              {["10 Core Services", "End-to-End Solutions", "Global Regulatory Expertise"].map((b) => (
                <div key={b} className="flex items-center gap-2 text-sm text-white/65">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {b}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="py-16 bg-secondary/20 border-y border-border overflow-hidden">
        <div className="page-container">
          <AnimatedSection className="text-center mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">How We Work</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Our Proven Process</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">From first consultation to regulatory approval and beyond — a structured, milestone-driven approach that de-risks your project at every stage.</p>
          </AnimatedSection>

          {/* Process timeline — horizontal on desktop, vertical on mobile */}
          <div className="relative max-w-6xl mx-auto">
            {/* Desktop connector line (runs through circle centers) */}
            <div
              className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-px -translate-y-1/2 bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20 pointer-events-none"
              aria-hidden
            />

            <div className="hidden lg:flex justify-between gap-2 relative">
              {PROVEN_PROCESS_PHASES.map((phase, i) => (
                <motion.div
                  key={phase.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center text-center group flex-1 min-w-0 px-1"
                >
                  <div className="relative z-10 mb-5">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${phase.color} border-2 border-primary/30 bg-secondary/20 flex flex-col items-center justify-center shadow-md ring-4 ring-secondary/20 group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/15 transition-all duration-300`}>
                      <phase.Icon className="w-7 h-7 text-primary mb-0.5" />
                      <span className="text-[10px] font-bold text-primary/70">{phase.step}</span>
                    </div>
                  </div>
                  <h3 className="font-heading text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{phase.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{phase.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Mobile / tablet vertical timeline */}
            <div className="lg:hidden relative max-w-lg mx-auto">
              <div
                className="absolute left-10 top-10 bottom-10 w-px bg-gradient-to-b from-primary via-primary/40 to-primary/20 pointer-events-none"
                aria-hidden
              />
              <div className="space-y-8">
                {PROVEN_PROCESS_PHASES.map((phase, i) => (
                  <motion.div
                    key={phase.step}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="relative flex gap-5 group"
                  >
                    <div className="relative z-10 shrink-0">
                      <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${phase.color} border-2 ${i === 0 ? "border-primary bg-primary/10" : "border-border"} flex flex-col items-center justify-center shadow-sm group-hover:border-primary transition-all duration-300`}>
                        <phase.Icon className="w-7 h-7 text-primary mb-0.5" />
                        <span className="text-[10px] font-bold text-primary/70">{phase.step}</span>
                      </div>
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="font-heading text-lg font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors">{phase.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{phase.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Regulatory pathways strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {[
              { label: "FDA 510(k)", sub: "USA Clearance", color: "border-blue-500/30 bg-blue-500/5 text-blue-400" },
              { label: "EU MDR CE", sub: "European Approval", color: "border-indigo-500/30 bg-indigo-500/5 text-indigo-400" },
              { label: "ISO 13485:2025", sub: "QMS Certification", color: "border-primary/30 bg-primary/5 text-primary" },
              { label: "PMA / De Novo", sub: "Class III Devices", color: "border-violet-500/30 bg-violet-500/5 text-violet-400" },
            ].map((p) => (
              <div key={p.label} className={`flex flex-col items-center text-center px-4 py-4 rounded-xl border ${p.color} transition-all hover:scale-[1.02]`}>
                <p className="font-bold text-sm">{p.label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{p.sub}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20">
        <div className="page-container">
          <AnimatedSection className="text-center mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">What We Offer</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">All Services</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ALL_SERVICES.map((svc, i) => (
              <motion.div
                key={svc.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: i * 0.07 }}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="p-7">
                  <Link href={servicePath(svc.slug)} className="block">
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        {SERVICE_ICONS[svc.slug]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-heading text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-1">{svc.name}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{svc.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-primary font-semibold text-sm mt-5 group-hover:gap-2.5 transition-all">
                      Explore Service <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                  <nav aria-label={`${svc.name} sub-services`} className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-border/60">
                    {svc.subServices.map((sub) => (
                      <Link
                        key={sub.slug}
                        href={subServicePath(svc.slug, sub.slug)}
                        className="text-xs px-2.5 py-1 bg-primary/8 text-primary rounded-full font-medium border border-primary/15 hover:bg-primary hover:text-white transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </nav>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="page-container text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Not sure which service you need?</h2>
            <p className="text-white/80 text-lg mb-8">Our experts will assess your project and recommend the right combination of services.</p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 rounded-lg font-bold">
              <Link href="/contact">Talk to an Expert</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

/* ======================================================
   SERVICE HERO CAROUSEL
====================================================== */
const SERVICE_CAROUSEL_IMAGES: Record<string, string[]> = {
  "regulatory-compliance": [
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
  ],
  "software-ai": [
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=800&q=80",
    "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
  ],
  "quality-testing": [
    "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
    "https://images.unsplash.com/photo-1564325724739-bae0bd08762c?w=800&q=80",
    "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80",
  ],
  "automation-services": [
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
    "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=80",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
  ],
  "design-fabrication": [
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
  ],
  "engineering-product-development": [
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
  ],
  "contract-manufacturing": [...MANUFACTURING_HERO_IMAGES],
  "bmd": [
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
    "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80",
  ],
  "mbl-laboratory": [
    "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
    "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80",
    "https://images.unsplash.com/photo-1564325724739-bae0bd08762c?w=800&q=80",
  ],
};

const FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
  "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
];

function ServiceHeroCarousel({ service }: { service: ServiceData }) {
  const images = SERVICE_CAROUSEL_IMAGES[service.slug] ?? FALLBACK_IMAGES;
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % images.length), 3500);
    return () => clearInterval(t);
  }, [images.length]);

  return (
    <div className="relative overflow-hidden rounded-2xl aspect-[4/3] shadow-2xl bg-[#060d17]">
      <AnimatePresence>
        <motion.img
          key={idx}
          src={images[idx]}
          alt={service.name}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="w-full h-full object-cover absolute inset-0"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`rounded-full transition-all duration-300 ${i === idx ? "bg-white w-5 h-2" : "bg-white/50 w-2 h-2"}`}
          />
        ))}
      </div>
    </div>
  );
}

const SOFTWARE_AI_HERO_IMAGES = [
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&q=85",
  "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&q=85",
  "https://images.unsplash.com/photo-1639762681485-74b7f0150504?w=1920&q=85",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=85",
  "https://images.unsplash.com/photo-1559757175-08a4f7e5bbf9?w=1920&q=85",
];

/** Full-bleed Ken Burns hero background (same style as home page). */
function CinematicHeroBackground({ images, alt }: { images: string[]; alt: string }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % images.length), 4000);
    return () => clearInterval(t);
  }, [images.length]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.div
          key={idx}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1.12 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.1, ease: "easeInOut" },
            scale: { duration: 4, ease: "linear" },
          }}
        >
          <img src={images[idx]} alt={alt} className="w-full h-full object-cover" />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-r from-[#060d17] via-[#060d17]/88 to-[#060d17]/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#060d17]/80 via-transparent to-[#060d17]/40" />
    </div>
  );
}

/* ======================================================
   SOFTWARE & AI — IMAGES, PROJECTS, ANIMATED HERO BG
====================================================== */

/* Card image per software-ai sub-service */
const SOFTWARE_AI_SUB_IMAGES: Record<string, string> = {
  "custom-medical-software":
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80",
  "software-compliance":
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
  "ai-solutions":
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
  "cloud-devops":
    "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200&q=80",
  "software-quality-assurance":
    "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80",
};

/* Lucide icon per software-ai sub-service for card overlay */
const SOFTWARE_AI_SUB_ICONS: Record<string, React.ElementType> = {
  "custom-medical-software": MonitorSmartphone,
  "software-compliance": ShieldCheck,
  "ai-solutions": Sparkles,
  "cloud-devops": Cloud,
  "software-quality-assurance": Bug,
};

interface SoftwareAIPortfolioProject {
  name: string;
  description: string;
  image: string;
  tags: string[];
}

const SOFTWARE_AI_PORTFOLIO: SoftwareAIPortfolioProject[] = [
  {
    name: "LegendEHR",
    description:
      "Electronic health record platform with clinician workflows, patient charting, and FHIR-based interoperability.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80",
    tags: ["EHR", "FHIR", "Web"],
  },
  {
    name: "e-Vitals",
    description:
      "Digital vitals capture and clinical dashboard for connected monitoring and care-team visibility.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=900&q=80",
    tags: ["RPM", "Mobile", "Cloud"],
  },
  {
    name: "Cardio",
    description:
      "Cardiology-focused software for cardiac data review, reporting, and device-integrated workflows.",
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=900&q=80",
    tags: ["Cardiology", "SaMD", "Analytics"],
  },
  {
    name: "22-RPM",
    description:
      "Remote patient monitoring programme with device pairing, alerts, and chronic care coordination.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80",
    tags: ["RPM", "CCM", "HIPAA"],
  },
  {
    name: "Infuzamed",
    description:
      "Infusion therapy management platform supporting clinical documentation and compliance-ready operations.",
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=900&q=80",
    tags: ["Infusion", "Clinical", "IEC 62304"],
  },
];

/* Animated software/AI hero background — neural net nodes, code rain, ECG wave, data packets */
function SoftwareAIHeroBg() {
  const nodes = React.useMemo(
    () =>
      Array.from({ length: 28 }).map((_, i) => {
        const seed = (i + 1) * 9301;
        const x = ((seed * 49297) % 1200);
        const y = ((seed * 233280) % 600);
        return { x: 60 + (x % 1080), y: 40 + (y % 520), i };
      }),
    []
  );

  const edges = React.useMemo(() => {
    const list: { a: number; b: number }[] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 240) list.push({ a: i, b: j });
      }
    }
    return list.slice(0, 50);
  }, [nodes]);

  const codeCols = React.useMemo(() => {
    const chars = "01{}<>()[]=+*/-:;.@#$%&";
    return Array.from({ length: 30 }).map((_, c) => ({
      left: (c / 30) * 100,
      delay: (c * 0.37) % 4,
      duration: 9 + ((c * 1.7) % 8),
      glyphs: Array.from({ length: 32 }).map(
        (_, g) => chars[(c * 7 + g * 3) % chars.length]
      ),
    }));
  }, []);

  /* Floating data-packet squares */
  const packets = React.useMemo(() =>
    Array.from({ length: 12 }).map((_, i) => ({
      x: ((i * 83 + 17) % 90) + 5,
      y: ((i * 61 + 29) % 80) + 10,
      delay: (i * 0.6) % 5,
      dur: 8 + (i % 6),
    })), []
  );

  /* ECG heartbeat path — three repeating PQRST-like segments */
  const ecgPath = "M0,50 L60,50 L80,45 L95,50 L105,10 L115,90 L125,50 L145,50 L165,45 L180,50 L190,10 L200,90 L210,50 L230,50 L250,45 L265,50 L275,10 L285,90 L295,50 L400,50";

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#020617]">
      {/* Rich multi-gradient base */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_40%,rgba(56,189,248,0.22),transparent_50%),radial-gradient(ellipse_at_75%_60%,rgba(99,102,241,0.28),transparent_55%),radial-gradient(ellipse_at_55%_20%,rgba(16,185,129,0.12),transparent_45%),linear-gradient(180deg,#020617_0%,#050a1a_100%)]" />

      {/* Subtle film-grain texture */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />

      {/* Perspective grid */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(125,211,252,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(125,211,252,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Falling code rain */}
      <div className="absolute inset-0 pointer-events-none">
        {codeCols.map((col, i) => (
          <motion.div
            key={i}
            className="absolute top-0 -translate-y-1/2 flex flex-col items-center font-mono text-[10px] leading-[1.05] text-cyan-300/30"
            style={{ left: `${col.left}%` }}
            initial={{ y: "-30%" }}
            animate={{ y: "130%" }}
            transition={{ duration: col.duration, delay: col.delay, repeat: Infinity, ease: "linear" }}
          >
            {col.glyphs.map((g, j) => (
              <span key={j} className={j === 0 ? "text-cyan-200/95 drop-shadow-[0_0_8px_rgba(125,211,252,0.8)]" : j < 5 ? "text-cyan-300/65" : j < 10 ? "text-cyan-400/35" : ""}>
                {g}
              </span>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Neural-net nodes + edges */}
      <svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full" aria-hidden>
        <defs>
          <radialGradient id="node-glow-main" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(125,211,252,0.95)" />
            <stop offset="100%" stopColor="rgba(125,211,252,0)" />
          </radialGradient>
          <radialGradient id="node-glow-indigo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(165,180,252,0.95)" />
            <stop offset="100%" stopColor="rgba(165,180,252,0)" />
          </radialGradient>
          <filter id="glow-filter">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* ECG heartbeat line — scrolling across bottom third */}
        {[0, 400, 800].map((offset, idx) => (
          <motion.path
            key={idx}
            d={`M${offset},480 ` + ecgPath.replace("M0,50", "").split(" ").map(seg => {
              if (seg.startsWith("L") || seg.startsWith("M")) {
                const parts = seg.slice(1).split(",");
                return `${seg[0]}${parseFloat(parts[0]) + offset},${parseFloat(parts[1]) + 430}`;
              }
              return seg;
            }).join(" ")}
            stroke="rgba(52,211,153,0.7)"
            strokeWidth={1.5}
            fill="none"
            filter="url(#glow-filter)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.8, 0] }}
            transition={{ duration: 3, delay: idx * 1 + 0.5, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

        {/* Data packets */}
        {packets.map((p, k) => (
          <motion.rect
            key={k}
            x={p.x * 12}
            y={p.y * 6}
            width={8}
            height={8}
            rx={2}
            fill="rgba(125,211,252,0.6)"
            filter="url(#glow-filter)"
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={{
              opacity: [0, 0.8, 0.8, 0],
              x: [0, ((k % 3) - 1) * 60],
              y: [0, ((k % 2) === 0 ? -1 : 1) * 40],
            }}
            transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

        {/* Network edges */}
        {edges.map((e, k) => {
          const a = nodes[e.a];
          const b = nodes[e.b];
          return (
            <motion.line
              key={k}
              x1={a.x} y1={a.y} x2={b.x} y2={b.y}
              stroke={k % 3 === 0 ? "rgba(165,180,252,0.4)" : "rgba(125,211,252,0.3)"}
              strokeWidth={k % 5 === 0 ? 1.5 : 0.8}
              initial={{ opacity: 0.05 }}
              animate={{ opacity: [0.03, k % 2 === 0 ? 0.5 : 0.35, 0.03] }}
              transition={{ duration: 3 + (k % 5), delay: (k % 7) * 0.2, repeat: Infinity, ease: "easeInOut" }}
            />
          );
        })}

        {/* Network nodes */}
        {nodes.map((n, k) => (
          <g key={k}>
            <motion.circle cx={n.x} cy={n.y} r={12} fill={k % 3 === 0 ? "url(#node-glow-indigo)" : "url(#node-glow-main)"}
              initial={{ opacity: 0.15 }} animate={{ opacity: [0.1, 0.65, 0.1] }}
              transition={{ duration: 2.5 + (k % 4), delay: (k % 6) * 0.25, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.circle cx={n.x} cy={n.y} r={2.8} fill={k % 3 === 0 ? "rgba(199,210,254,0.98)" : "rgba(186,230,253,0.98)"}
              animate={{ r: [2.2, 4, 2.2] }}
              transition={{ duration: 2 + (k % 3), delay: (k % 5) * 0.3, repeat: Infinity, ease: "easeInOut" }}
            />
          </g>
        ))}

        {/* Radar sweep */}
        <motion.line
          x1="600" y1="300" x2="900" y2="300"
          stroke="rgba(125,211,252,0.25)"
          strokeWidth={80}
          style={{ transformOrigin: "600px 300px" }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      {/* Horizontal scanline sweep */}
      <motion.div aria-hidden className="absolute inset-x-0 h-48 pointer-events-none"
        style={{ background: "linear-gradient(180deg, transparent, rgba(125,211,252,0.08), rgba(99,102,241,0.06), transparent)" }}
        initial={{ y: "-20%" }} animate={{ y: "130%" }}
        transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
      />

      {/* Vertical scanline sweep */}
      <motion.div aria-hidden className="absolute inset-y-0 w-40 pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(125,211,252,0.05), transparent)" }}
        initial={{ x: "-10%" }} animate={{ x: "110%" }}
        transition={{ duration: 9, repeat: Infinity, ease: "linear", delay: 2 }}
      />

      {/* Edge fades */}
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#020617] to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#020617] to-transparent pointer-events-none" />
    </div>
  );
}

/* Scatter of floating software icons used as a page-body background.
   Distributes ~60 lucide icons in a jittered grid with subtle float + rotate + opacity. */
function SoftwareIconsScatterBg() {
  const SCATTER_ICONS: React.ElementType[] = [
    Code2, Cpu, Cloud, Terminal, Brain, Sparkles, GitBranch,
    MonitorSmartphone, Workflow, Bug, Layers, Zap, Smartphone,
    ShieldCheck, Activity, Cog, Boxes, ScanLine, CircuitBoard,
    Database, Server, Lock, Network, Binary, Fingerprint, Waves,
  ];

  const items = React.useMemo(() => {
    const cols = 7;
    const rows = 12;
    const list: {
      Icon: React.ElementType;
      x: number; y: number; size: number; rot: number;
      delay: number; dur: number; floatY: number;
    }[] = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const idx = r * cols + c;
        const seed = (idx + 1) * 9301 + 49297;
        // Skip ~22% of cells for natural distribution
        if (seed % 9 < 2) continue;
        const Icon = SCATTER_ICONS[(seed >> 5) % SCATTER_ICONS.length];
        const xJ = (((seed >> 7) % 100) - 50) / 100;
        const yJ = (((seed >> 11) % 100) - 50) / 100;
        const x = ((c + 0.5 + xJ * 0.7) / cols) * 100;
        const y = ((r + 0.5 + yJ * 0.7) / rows) * 100;
        const size = 18 + ((seed >> 13) % 24);
        const rot = ((seed >> 9) % 50) - 25;
        const delay = ((seed >> 17) % 100) / 20;
        const dur = 7 + ((seed >> 15) % 8);
        const floatY = 4 + ((seed >> 19) % 8);
        list.push({ Icon, x, y, size, rot, delay, dur, floatY });
      }
    }
    return list;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {items.map((it, i) => {
        const Icon = it.Icon;
        return (
          <motion.div
            key={i}
            className="absolute text-primary/[0.09] dark:text-primary/[0.13]"
            style={{ left: `${it.x}%`, top: `${it.y}%` }}
            initial={{ rotate: it.rot, opacity: 0.05 }}
            animate={{
              y: [-it.floatY, it.floatY, -it.floatY],
              rotate: [it.rot - 6, it.rot + 6, it.rot - 6],
              opacity: [0.06, 0.16, 0.06],
            }}
            transition={{
              duration: it.dur,
              delay: it.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon size={it.size} strokeWidth={1.5} />
          </motion.div>
        );
      })}
    </div>
  );
}

/* ---- Rich image cards (reference UI: badge, tags, explore link, deliverables) ---- */
function RichSubServiceCard({
  sub,
  service,
  href,
  image,
  Icon,
  delay = 0,
  variant = "default",
}: {
  sub: SubServiceData;
  service: ServiceData;
  href: string;
  image?: string;
  Icon: React.ElementType;
  delay?: number;
  variant?: "default" | "software-ai";
}) {
  const isCyan = variant === "software-ai";
  const badgeLabel = SUB_SERVICE_BADGE_LABEL[service.slug]?.[sub.slug] ?? sub.name;
  const badgeClass = isCyan ? "bg-cyan-500/95 text-slate-900" : "bg-primary/90 text-white";
  const tagClass = isCyan
    ? "bg-cyan-500/8 text-cyan-700 dark:text-cyan-300 border-cyan-500/20"
    : "bg-primary/8 text-primary border-primary/15";
  const cardHover = isCyan ? "hover:border-cyan-400/60" : "hover:border-primary/60";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay }}
    >
      <Link
        href={href}
        className={`group block rounded-2xl overflow-hidden border border-border bg-card ${cardHover} hover:shadow-xl transition-all duration-300`}
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-[#060d17]">
          {image ? (
            <img
              src={image}
              alt={sub.name}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent flex items-center justify-center">
              <Icon className="w-20 h-20 text-primary/20" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className={`absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full ${badgeClass}`}>
            <Icon className="w-3 h-3" />
            {badgeLabel}
          </div>
          <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-35 transition-opacity">
            <Icon className="w-12 h-12 text-white" />
          </div>
          <h4 className="absolute bottom-3 left-4 right-4 font-heading text-white text-lg font-bold leading-tight drop-shadow-md group-hover:text-cyan-200 transition-colors">
            {sub.name}
          </h4>
        </div>
        <div className="p-5">
          <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">{sub.tagline}</p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {sub.keyPoints.slice(0, 3).map((kp) => (
              <span key={kp} className={`text-[11px] px-2 py-0.5 rounded-full border ${tagClass}`}>
                {kp}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between gap-3">
            <div className={`flex items-center gap-1.5 font-semibold text-sm group-hover:gap-2.5 transition-all ${isCyan ? "text-cyan-600 dark:text-cyan-400" : "text-primary"}`}>
              Explore Service <ArrowRight className="w-4 h-4" />
            </div>
            <span className="text-[10px] text-muted-foreground bg-secondary/60 px-2 py-0.5 rounded-full border border-border/60 shrink-0">
              {sub.deliverables.length} deliverables
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function RichPortfolioCard({
  project,
  delay = 0,
  Icon = Brain,
}: {
  project: SoftwareAIPortfolioProject;
  delay?: number;
  Icon?: React.ElementType;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay }}
      className="group rounded-2xl overflow-hidden border border-border bg-card hover:border-cyan-400/50 hover:shadow-xl transition-all duration-300"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[#060d17]">
        <img
          src={project.image}
          alt={project.name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full bg-cyan-500/95 text-slate-900">
          <Icon className="w-3 h-3" />
          {project.tags[0] ?? "Project"}
        </div>
        <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-35 transition-opacity">
          <Icon className="w-12 h-12 text-white" />
        </div>
        <h3 className="absolute bottom-3 left-4 right-4 font-heading text-white text-lg font-bold leading-tight drop-shadow-md">
          {project.name}
        </h3>
      </div>
      <div className="p-5">
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((t) => (
            <span
              key={t}
              className="text-[11px] px-2 py-0.5 bg-cyan-500/8 text-cyan-700 dark:text-cyan-300 rounded-full border border-cyan-500/20"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/contact"
            className="flex items-center gap-1.5 text-cyan-600 dark:text-cyan-400 font-semibold text-sm group-hover:gap-2.5 transition-all"
          >
            Explore Project <ArrowRight className="w-4 h-4" />
          </Link>
          <span className="text-[10px] text-muted-foreground bg-secondary/60 px-2 py-0.5 rounded-full border border-border/60 shrink-0">
            {project.tags.length} modules
          </span>
        </div>
      </div>
    </motion.article>
  );
}

/** Circular rings + line grid for Software & AI sections (home-style decor) */
function SoftwareAIDecorLayer() {
  return (
    <>
      <div className="absolute top-0 right-0 w-[420px] h-[420px] rounded-full border border-cyan-500/15 -translate-y-1/3 translate-x-1/4 pointer-events-none hidden md:block" aria-hidden />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full border border-primary/15 translate-y-1/3 -translate-x-1/4 pointer-events-none hidden md:block" aria-hidden />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-primary/8 pointer-events-none hidden lg:block" aria-hidden />
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(56,189,248,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden
      />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 opacity-[0.12] text-primary pointer-events-none hidden sm:block" aria-hidden>
        <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="30" y="30" width="40" height="40" rx="4" />
          <rect x="130" y="30" width="40" height="40" rx="4" />
          <rect x="80" y="110" width="40" height="40" rx="4" />
          <line x1="70" y1="50" x2="130" y2="50" />
          <line x1="100" y1="70" x2="100" y2="110" />
        </svg>
      </div>
    </>
  );
}

/** Key metrics — unified layout for all service & sub-service pages */
function KeyMetricsSection({
  stats,
  variant = "default",
  eyebrow = "Performance",
  heading = "Key Metrics",
}: {
  stats: { label: string; value: string; icon: React.ElementType }[];
  variant?: "default" | "software-ai";
  eyebrow?: string;
  heading?: string;
}) {
  const isSoftwareAI = variant === "software-ai";
  const gridClass =
    stats.length >= 5
      ? "sm:grid-cols-2 xl:grid-cols-3"
      : stats.length === 4
        ? "sm:grid-cols-2 xl:grid-cols-4"
        : stats.length === 3
          ? "sm:grid-cols-3"
          : stats.length === 1
            ? "max-w-md mx-auto"
            : "sm:grid-cols-2";

  return (
    <AnimatedSection>
      <div className="flex items-end justify-between gap-4 mb-6 pb-3 border-b border-border">
        <div>
          <p className={`text-xs font-bold uppercase tracking-[0.2em] mb-1 ${isSoftwareAI ? "text-cyan-600 dark:text-cyan-400" : "text-primary"}`}>
            {eyebrow}
          </p>
          <h2 className="font-heading text-3xl font-bold text-foreground">{heading}</h2>
        </div>
        <BarChart3 className={`w-8 h-8 shrink-0 opacity-20 ${isSoftwareAI ? "text-cyan-600" : "text-primary"}`} />
      </div>
      <div className={`grid gap-4 ${gridClass}`}>
        {stats.map((stat, i) => {
          const StatIcon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className={`group relative overflow-hidden rounded-2xl border p-5 transition-all hover:shadow-lg ${
                isSoftwareAI
                  ? "border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 via-card to-card hover:border-cyan-400/40"
                  : "border-border bg-gradient-to-br from-primary/5 via-card to-secondary/20 hover:border-primary/35"
              }`}
            >
              <div
                className={`absolute -right-4 -top-4 h-24 w-24 rounded-full opacity-40 blur-2xl transition-opacity group-hover:opacity-60 ${
                  isSoftwareAI ? "bg-cyan-500/20" : "bg-primary/15"
                }`}
                aria-hidden
              />
              <div className="relative flex items-start gap-4">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors ${
                    isSoftwareAI
                      ? "bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-900"
                      : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                  }`}
                >
                  <StatIcon className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-heading text-2xl sm:text-[1.65rem] font-bold text-foreground leading-tight tracking-tight">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-snug">{stat.label}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </AnimatedSection>
  );
}

/** @deprecated Use KeyMetricsSection */
function ServiceKeyMetricsBlock({
  stats,
  variant = "default",
}: {
  stats: { label: string; value: string; icon: React.ElementType }[];
  variant?: "default" | "software-ai";
}) {
  return <KeyMetricsSection stats={stats} variant={variant} />;
}

function isRegulatoryLicence(std: string): boolean {
  return /FDA\s*\/\s*(EU\s*MDR|CE)|^DRAP/i.test(std.trim());
}

const SERVICE_LICENCES: Record<string, string[]> = {
  "contract-manufacturing": [...MANUFACTURING_LICENCES],
  "product-development": [...PRODUCT_DEVELOPMENT_LICENCES],
};

function standardItemLabel(std: string, standardIndex: number): string {
  if (isRegulatoryLicence(std)) return "Licence";
  return `Standard ${String(standardIndex).padStart(2, "0")}`;
}

/** Standards with horizontal line structure */
function ServiceStandardsBlock({
  standards,
  licences = [],
  variant = "default",
}: {
  standards: string[];
  licences?: string[];
  variant?: "default" | "software-ai";
}) {
  const isCyan = variant === "software-ai";
  let standardCounter = 0;

  const renderItem = (std: string, isLicence: boolean) => {
    if (!isLicence) standardCounter += 1;
    const ItemIcon = isLicence ? Award : ShieldCheck;

    return (
      <div
        key={std}
        className={`relative flex flex-1 min-w-[200px] items-center gap-3 rounded-xl border px-4 py-3 transition-colors ${
          isCyan
            ? "border-cyan-500/20 bg-background hover:border-cyan-400/40"
            : isLicence
              ? "border-amber-500/25 bg-background hover:border-amber-400/40"
              : "border-border bg-background hover:border-primary/30"
        }`}
      >
        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
            isCyan
              ? "bg-cyan-500/12 text-cyan-600 dark:text-cyan-400"
              : isLicence
                ? "bg-amber-500/12 text-amber-600 dark:text-amber-400"
                : "bg-primary/10 text-primary"
          }`}
        >
          <ItemIcon className="h-4 w-4" />
        </div>
        <div className="min-w-0 flex-1">
          <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            {isLicence ? "Licence" : standardItemLabel(std, standardCounter)}
          </span>
          <p className="text-sm font-semibold text-foreground leading-snug">{std}</p>
        </div>
      </div>
    );
  };

  return (
    <AnimatedSection>
      <h2 className="font-heading text-3xl font-bold text-foreground mb-5 pb-3 border-b border-border">
        Compliance & Standards
      </h2>
      <div className="relative rounded-2xl border border-border bg-card/50 p-5 sm:p-6 space-y-6">
        {standards.length > 0 && (
          <div>
            {licences.length > 0 && (
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Standards</p>
            )}
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              {standards.map((std) => renderItem(std, isRegulatoryLicence(std)))}
            </div>
          </div>
        )}
        {licences.length > 0 && (
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Licences</p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              {licences.map((lic) => renderItem(lic, true))}
            </div>
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}

/** Core capabilities — divider line list */
function ServiceCapabilitiesBlock({
  capabilities,
  variant = "default",
  title = "Core Capabilities",
}: {
  capabilities: string[];
  variant?: "default" | "software-ai";
  title?: string;
}) {
  const isCyan = variant === "software-ai";
  return (
    <AnimatedSection>
      <h2 className="font-heading text-3xl font-bold text-foreground mb-5 pb-3 border-b border-border">{title}</h2>
      <div className="divide-y divide-border rounded-2xl border border-border bg-card/40 overflow-hidden">
        {capabilities.map((cap, i) => (
          <div
            key={cap}
            className={`group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-muted/40 ${
              isCyan ? "hover:bg-cyan-500/5" : ""
            }`}
          >
            <div
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                isCyan
                  ? "bg-cyan-500/12 text-cyan-700 dark:text-cyan-300"
                  : "bg-primary/10 text-primary"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
            </div>
            <span className="flex-1 text-sm font-medium text-foreground group-hover:text-primary transition-colors">{cap}</span>
            <ArrowRight
              className={`h-4 w-4 shrink-0 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 ${
                isCyan ? "text-cyan-600 dark:text-cyan-400" : "text-primary"
              }`}
            />
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}

/** Why Choose RMT — circular card layout */
function ServiceWhyRMTBlock({
  items,
  variant = "default",
}: {
  items: { title: string; desc: string }[];
  variant?: "default" | "software-ai";
}) {
  const isCyan = variant === "software-ai";
  return (
    <AnimatedSection>
      <h2 className="font-heading text-3xl font-bold text-foreground mb-5 pb-3 border-b border-border">Why Choose RMT</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <div key={item.title} className="flex flex-col items-center text-center">
            <div className="relative mb-4">
              <div
                className={`absolute inset-0 rounded-full scale-125 ${
                  isCyan ? "border border-cyan-500/15" : "border border-primary/15"
                }`}
                aria-hidden
              />
              <div
                className={`relative flex h-24 w-24 items-center justify-center rounded-full ${
                  isCyan
                    ? "bg-gradient-to-br from-cyan-500/15 to-indigo-500/10 ring-2 ring-cyan-500/20"
                    : "bg-gradient-to-br from-primary/15 to-primary/5 ring-2 ring-primary/20"
                }`}
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-full ${
                    isCyan ? "bg-cyan-500/20 text-cyan-700 dark:text-cyan-300" : "bg-primary/15 text-primary"
                  }`}
                >
                  <CheckCircle className="h-6 w-6" />
                </div>
              </div>
              <span
                className={`absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-bold text-white ${
                  isCyan ? "bg-cyan-600" : "bg-primary"
                }`}
              >
                {i + 1}
              </span>
            </div>
            <h4 className="font-semibold text-foreground text-sm mb-2 max-w-[200px]">{item.title}</h4>
            <p className="text-muted-foreground text-xs leading-relaxed max-w-[220px]">{item.desc}</p>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}

/** Shared sidebar — other services only (quote CTAs live in page footer) */
function ServicePageSidebar({ service, activeSubSlug }: { service: ServiceData; activeSubSlug?: string }) {
  return (
    <div className="space-y-5">
      <div className="sticky top-24 z-10 space-y-5">
        {service.subServices.length > 0 && (
          <AnimatedSection className="bg-card border border-border rounded-2xl p-6">
            <h4 className="font-semibold text-foreground mb-4 text-xs uppercase tracking-widest flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-primary" /> {service.shortName} Services
            </h4>
            <nav aria-label={`${service.name} sub-services`} className="flex flex-col gap-0.5">
              {service.subServices.map((sub) => (
                <Link
                  key={sub.slug}
                  href={subServicePath(service.slug, sub.slug)}
                  className={cn(
                    "group flex items-center gap-2.5 text-sm transition-colors py-2 border-b border-border/60 last:border-0",
                    activeSubSlug === sub.slug
                      ? "text-primary font-semibold"
                      : "text-muted-foreground hover:text-primary"
                  )}
                >
                  <span className="flex-1 leading-snug">{sub.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0" />
                </Link>
              ))}
            </nav>
          </AnimatedSection>
        )}
        <AnimatedSection className="bg-card border border-border rounded-2xl p-6">
          <h4 className="font-semibold text-foreground mb-4 text-xs uppercase tracking-widest flex items-center gap-2">
            <Globe className="w-3.5 h-3.5 text-primary" /> Other Services
          </h4>
          <div className="flex flex-col gap-0.5">
            {ALL_SERVICES.filter((s) => s.slug !== service.slug).map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors py-2 border-b border-border/60 last:border-0"
              >
                <div className="w-6 h-6 bg-primary/8 rounded-md flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                  {SERVICE_ICONS[s.slug]}
                </div>
                <span className="flex-1">{s.shortName}</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
              </Link>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

/** Full-width CTA sections above site footer — Get a Quote, then Ready to Start */
function ServicePageFooterCta({
  service,
  isSoftwareAI = false,
  subServiceName,
}: {
  service: ServiceData;
  isSoftwareAI?: boolean;
  subServiceName?: string;
}) {
  const scopeLabel = subServiceName
    ? `${subServiceName.toLowerCase()} project`
    : `${service.shortName} requirements`;
  const accentClass = isSoftwareAI ? "text-cyan-400" : "text-primary";
  const btnClass = isSoftwareAI
    ? "bg-cyan-400 text-slate-900 hover:bg-cyan-300"
    : "bg-primary text-white hover:bg-primary/90";

  return (
    <>
      <section className="border-t border-white/10 bg-[#060d17] text-white">
        <div className="page-container py-14 md:py-16">
          <AnimatedSection className="max-w-3xl">
            <p className={`text-xs font-bold uppercase tracking-[0.2em] mb-2 ${accentClass}`}>
              Get a Quote
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">
              Discuss Your {subServiceName ?? service.shortName} Needs
            </h2>
            <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6 max-w-2xl">
              Speak with our specialists about your {scopeLabel} and receive a tailored proposal. We respond within one business day.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className={`rounded-xl font-semibold ${btnClass}`}>
                <Link href="/contact">Request a Quote <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl border-white/20 text-white hover:bg-white/10 hover:text-white">
                <a href="tel:+15551234567"><Phone className="w-4 h-4 mr-2" /> Schedule a Call</a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#0a1424] text-white">
        <div className="page-container py-14 md:py-16">
          <AnimatedSection className="max-w-3xl">
            <p className={`text-xs font-bold uppercase tracking-[0.2em] mb-2 ${accentClass}`}>
              Ready to Start?
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">
              Work With Our {service.shortName} Team
            </h2>
            <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6 max-w-2xl">
              Our {service.shortName} specialists are available for a free initial consultation to scope your project and answer your questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className={`rounded-xl font-semibold ${btnClass}`}>
                <Link href="/contact"><Mail className="w-4 h-4 mr-2" /> Send an Enquiry</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl border-white/20 text-white hover:bg-white/10 hover:text-white">
                <Link href="/about"><Users className="w-4 h-4 mr-2" /> Meet the Team</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

const SOFTWARE_AI_SUB_GALLERY: Record<string, string[]> = {
  "custom-medical-software": [
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80",
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900&q=80",
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=900&q=80",
  ],
  "software-compliance": [
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&q=80",
    "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=900&q=80",
    "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=900&q=80",
  ],
  "ai-solutions": [
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=80",
    "https://images.unsplash.com/photo-1639762681485-74b7f0150504?w=900&q=80",
    "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=900&q=80",
  ],
  "cloud-devops": [
    "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=900&q=80",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&q=80",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80",
  ],
  "software-quality-assurance": [
    "https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&q=80",
    "https://images.unsplash.com/photo-1581092918056-0c4c3acd3780?w=900&q=80",
    "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=900&q=80",
  ],
};

const SERVICE_APPROACH_STEPS: Record<string, { step: string; title: string; desc: string }[]> = {
  "software-ai": [
    { step: "01", title: "Discover", desc: "Requirements, intended use, regulatory pathway, and stakeholder alignment." },
    { step: "02", title: "Design", desc: "Architecture, UX, security, and traceability mapped to applicable standards." },
    { step: "03", title: "Build & Validate", desc: "Development, V&V, cybersecurity testing, and documentation for submission." },
    { step: "04", title: "Deploy & Support", desc: "Release, cloud deployment, monitoring, and post-market change control." },
  ],
  "regulatory-compliance": [
    { step: "01", title: "Gap Analysis", desc: "Evaluate existing documentation, safety files, and identify compliance pathways." },
    { step: "02", title: "Strategy & Plan", desc: "Define submission roadmap, testing requirements, and standard alignments." },
    { step: "03", title: "Dossier Writing", desc: "Author risk files, biological evaluation reports (BER), and technical dossiers." },
    { step: "04", title: "Audit & Approval", desc: "Manage submissions to FDA, Notified Bodies, SFDA, or TGA through to final clearance." },
  ],
  "default": [
    { step: "01", title: "Consultation", desc: "Understand requirements, project scope, and define technical specifications." },
    { step: "02", title: "Development", desc: "Engineering design, prototyping, software coding, or process formulation." },
    { step: "03", title: "Testing & V&V", desc: "Rigorous laboratory validation, performance testing, and quality control reviews." },
    { step: "04", title: "Release & Scale", desc: "Design transfer, final documentation release, and commercial scale-up support." },
  ]
};

/** Full-width breakout inside page-container */
function FullBleedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative left-1/2 -translate-x-1/2 w-screen max-w-[100vw] my-6 sm:my-8 ${className}`}>
      {children}
    </div>
  );
}

/** @deprecated Use KeyMetricsSection */
function ProminentMetricsBar({
  stats,
  variant = "default",
}: {
  stats: { label: string; value: string; icon: React.ElementType }[];
  title?: string;
  variant?: "default" | "software-ai";
}) {
  return <KeyMetricsSection stats={stats} variant={variant} />;
}

/** Centered prominent standards strip */
function ProminentStandardsSection({
  standards,
  title = "Built for Regulated Healthcare Software",
}: {
  standards: string[];
  title?: string;
}) {
  return (
    <FullBleedSection>
      <section className="bg-secondary/40 border-y border-border py-10 sm:py-12">
        <div className="page-container text-center">
          <p className="text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-[0.2em] mb-2">
            Compliance & Standards
          </p>
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-8">
            {title}
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {standards.map((std) => (
              <span
                key={std}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-cyan-500/25 bg-background text-sm font-semibold text-foreground shadow-sm hover:border-cyan-400/50 hover:bg-cyan-500/5 transition-colors"
              >
                <ShieldCheck className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                {std}
              </span>
            ))}
          </div>
        </div>
      </section>
    </FullBleedSection>
  );
}

/** Framed image block for sub-service content sections */
function SubServiceImageFrame({
  src,
  alt,
  badge,
  Icon,
  className = "",
  size = "md",
}: {
  src: string;
  alt: string;
  badge?: string;
  Icon?: React.ElementType;
  className?: string;
  size?: "sm" | "md";
}) {
  const BadgeIcon = Icon ?? Brain;
  const sizeClass =
    size === "sm"
      ? "max-w-[280px] mx-auto aspect-[2/1]"
      : "max-w-md sm:max-w-lg mx-auto aspect-[5/3]";

  return (
    <div className={`relative w-full overflow-hidden rounded-xl border border-border bg-muted/20 shadow-md ${sizeClass} ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
      {badge && (
        <div className="absolute bottom-2.5 left-2.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-500/95 text-slate-900 text-[9px] font-bold uppercase tracking-widest">
          <BadgeIcon className="w-3 h-3 shrink-0" />
          {badge}
        </div>
      )}
    </div>
  );
}

/** Detailed SQA service catalogue for the Software Quality Assurance sub-service page */
function SqaCoreServicesBlock() {
  return (
    <div className="space-y-12">
      <AnimatedSection>
        <div className="mb-6 pb-3 border-b border-border">
          <p className="text-xs font-bold uppercase tracking-widest mb-1 text-primary">Service Catalogue</p>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">Our Core SQA Services</h2>
        </div>
      </AnimatedSection>
      {SQA_SERVICE_SECTIONS.map((section, si) => (
        <AnimatedSection key={section.label}>
          <h3 className="font-heading text-lg font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-8 h-0.5 bg-primary rounded-full" />
            {section.label}
          </h3>
          {section.intro && (
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{section.intro}</p>
          )}
          <div className="grid sm:grid-cols-2 gap-4">
            {section.cards.map((card, ci) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: si * 0.04 + ci * 0.03 }}
                className="group bg-card border border-border rounded-xl p-5 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <h4 className="font-semibold text-foreground text-sm leading-snug pt-1">{card.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed pl-11">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
}

/** Rich in-depth layout for Software & AI sub-service pages */
function SubServiceContent({
  subService,
  service,
  subHeroImage,
  subPageIcons,
}: {
  subService: SubServiceData;
  service: ServiceData;
  subHeroImage: string;
  subPageIcons: React.ElementType[];
}) {
  const isSoftwareAI = service.slug === "software-ai";
  const isSqa = service.slug === "quality-testing" && subService.slug === "sqa-samd-simd";
  const whyRmt = SUB_SERVICE_WHY_RMT[service.slug]?.[subService.slug];
  const SubIcon = SOFTWARE_AI_SUB_ICONS[subService.slug] ?? (SERVICE_SCATTER_ICONS[service.slug]?.[0] ?? CheckCircle);
  const approachSteps =
    SUB_SERVICE_APPROACH_STEPS[service.slug]?.[subService.slug] ??
    SERVICE_APPROACH_STEPS[service.slug] ??
    SERVICE_APPROACH_STEPS.default;
  const standards =
    SUB_SERVICE_STANDARDS[service.slug]?.[subService.slug] ?? SERVICE_STANDARDS[service.slug];
  const standardsHeading = SUB_SERVICE_STANDARDS_HEADING[service.slug]?.[subService.slug];
  const capabilities =
    SUB_SERVICE_CAPABILITIES[service.slug]?.[subService.slug] ?? service.capabilities;
  const closingNote = SUB_SERVICE_CLOSING_NOTE[service.slug]?.[subService.slug];
  const metricsHeading = SUB_SERVICE_METRICS_HEADING[service.slug]?.[subService.slug];
  const subServiceStats = SUB_SERVICE_SIDEBAR_STATS[service.slug]?.[subService.slug];
  const badgeLabel = SUB_SERVICE_BADGE_LABEL[service.slug]?.[subService.slug] ?? service.shortName;
  const capabilitiesTitle =
    SUB_SERVICE_CAPABILITIES_TITLE[service.slug]?.[subService.slug] ??
    `All ${service.shortName} Capabilities`;

  // Theme-aware styles
  const accentTextClass = isSoftwareAI ? "text-cyan-600 dark:text-cyan-400" : "text-primary";
  const accentDotClass = isSoftwareAI ? "bg-cyan-500" : "bg-primary";
  const accentBorderClass = isSoftwareAI ? "border-cyan-500/50" : "border-primary/50";
  const accentCardHoverClass = isSoftwareAI 
    ? "group-hover:border-cyan-400/50 group-hover:bg-cyan-500/4 hover:border-cyan-400/50 hover:bg-cyan-500/4" 
    : "group-hover:border-primary/50 group-hover:bg-primary/5 hover:border-primary/50 hover:bg-primary/5";
  const accentIconContainerClass = isSoftwareAI
    ? "bg-gradient-to-br from-cyan-500/20 to-indigo-500/10 border-cyan-500/20 text-cyan-600 dark:text-cyan-400"
    : "bg-gradient-to-br from-primary/20 to-indigo-500/10 border-primary/20 text-primary";
  const accentDeliverableBgClass = isSoftwareAI
    ? "bg-cyan-500/12 group-hover:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400"
    : "bg-primary/10 group-hover:bg-primary/20 text-primary";
  const accentLineConnectorClass = isSoftwareAI ? "bg-cyan-500/30" : "bg-primary/30";
  const accentStepBadgeClass = isSoftwareAI
    ? "from-cyan-500/20 to-indigo-500/10 border-cyan-500/20 text-cyan-600 dark:text-cyan-400"
    : "from-primary/20 to-indigo-500/10 border-primary/20 text-primary";

  return (
    <div className="space-y-14">

      {/* ── Overview 2-col layout ── */}
      <AnimatedSection>
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-3 space-y-4">
            <div className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-1.5">
              <span className={`w-1.5 h-1.5 rounded-full ${accentDotClass}`} />
              <span className="text-muted-foreground text-xs font-bold uppercase tracking-widest">Service Overview</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight">{subService.name}</h2>
            <div className="space-y-3">
              {subService.overview.map((para, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed text-[15px]">{para}</p>
              ))}
            </div>
            <div className={`pt-2 border-l-2 ${accentBorderClass} pl-4`}>
              <p className="text-sm font-medium text-foreground/80 italic">{subService.tagline}</p>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl shadow-black/20 border border-border">
              <img src={subHeroImage} alt={subService.name} loading="lazy"
                className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className={`absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                isSoftwareAI ? "bg-cyan-500/95 text-slate-900" : "bg-primary/95 text-primary-foreground"
              }`}>
                <SubIcon className="w-3 h-3" /> {badgeLabel}
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="font-heading text-white text-lg font-bold leading-tight drop-shadow">{subService.name}</h3>
                <p className="text-white/70 text-xs mt-1 line-clamp-2">{subService.tagline}</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ── Key Features & Benefits — 2-col card grid ── */}
      <AnimatedSection>
        <div className="mb-6 pb-3 border-b border-border">
          <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${accentTextClass}`}>Highlights</p>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">Key Features & Benefits</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {subService.keyPoints.map((point, idx) => {
            const HlIcon = subPageIcons[idx % subPageIcons.length];
            return (
              <motion.div key={point}
                initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: idx * 0.06 }}
                className={`group flex items-start gap-4 p-5 rounded-2xl border border-border bg-card shadow-sm hover:shadow-md transition-all duration-300 ${accentCardHoverClass}`}>
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border group-hover:scale-105 transition-transform ${accentIconContainerClass}`}>
                  <HlIcon className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">{point}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </AnimatedSection>

      {isSqa && <SqaCoreServicesBlock />}

      {whyRmt && <ServiceWhyRMTBlock items={whyRmt} variant={isSoftwareAI ? "software-ai" : "default"} />}

      {/* ── Key metrics / achievements ── */}
      {subServiceStats ? (
        <KeyMetricsSection
          stats={subServiceStats}
          variant={isSoftwareAI ? "software-ai" : "default"}
          eyebrow={metricsHeading?.eyebrow}
          heading={metricsHeading?.heading}
        />
      ) : (
        !isSqa &&
        SERVICE_SIDEBAR_STATS[service.slug] &&
        service.slug !== "bmd" &&
        service.slug !== "mbl-laboratory" && (
          <KeyMetricsSection
            stats={SERVICE_SIDEBAR_STATS[service.slug]}
            variant={isSoftwareAI ? "software-ai" : "default"}
          />
        )
      )}

      {/* ── Deliverables — styled grid ── */}
      <AnimatedSection>
        <div className="mb-6 pb-3 border-b border-border">
          <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${accentTextClass}`}>What You Get</p>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">Deliverables</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {subService.deliverables.map((del, idx) => (
            <motion.div key={del}
              initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ delay: idx * 0.05 }}
              className={`flex items-center gap-3 p-4 rounded-xl border border-border bg-card transition-colors group ${isSoftwareAI ? "hover:border-cyan-400/40" : "hover:border-primary/40"}`}>
              <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors ${accentDeliverableBgClass}`}>
                <CheckCircle className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium text-foreground">{del}</span>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* ── Standards ── */}
      {standards && (
        <ProminentStandardsSection standards={standards} title={standardsHeading} />
      )}

      {/* ── Our Approach ── */}
      <AnimatedSection>
        <div className="mb-6 pb-3 border-b border-border">
          <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${accentTextClass}`}>Methodology</p>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">Our Approach</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {approachSteps.map((s, i) => (
            <motion.div key={s.step}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className={`relative group bg-card border border-border rounded-2xl p-5 hover:shadow-lg transition-all ${isSoftwareAI ? "hover:border-cyan-400/40" : "hover:border-primary/40"}`}>
              <div className="font-heading text-5xl font-black text-primary/7 leading-none mb-3 -mt-1 select-none">{s.step}</div>
              <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-3 group-hover:scale-105 transition-transform bg-gradient-to-br ${accentStepBadgeClass}`}>
                <span className="font-bold text-xs">{s.step}</span>
              </div>
              <h4 className="font-heading text-sm font-bold text-foreground mb-1.5">{s.title}</h4>
              <p className="text-muted-foreground text-xs leading-relaxed">{s.desc}</p>
              {i < approachSteps.length - 1 && (
                <div className={`hidden lg:block absolute top-1/2 -right-2 w-4 h-px ${accentLineConnectorClass}`} aria-hidden />
              )}
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* ── Service capabilities ── */}
      <AnimatedSection>
        <div className="mb-6 pb-3 border-b border-border">
          <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${accentTextClass}`}>Full-Service Offering</p>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">{capabilitiesTitle}</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {capabilities.map((cap, idx) => (
            <motion.div key={cap}
              initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ delay: idx * 0.04 }}
              className={`group flex items-center gap-3 px-4 py-3 rounded-xl border border-border bg-card transition-all ${isSoftwareAI ? "hover:border-cyan-400/40 hover:bg-cyan-500/4" : "hover:border-primary/40 hover:bg-primary/5"}`}>
              <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${isSoftwareAI ? "bg-cyan-500/12 text-cyan-700 dark:text-cyan-300" : "bg-primary/10 text-primary"}`}>{idx + 1}</span>
              <span className="text-sm text-foreground font-medium group-hover:text-primary transition-colors">{cap}</span>
            </motion.div>
          ))}
        </div>
        {closingNote && (
          <p className="mt-6 text-muted-foreground text-sm leading-relaxed border-l-2 border-primary/40 pl-4">
            {closingNote}
          </p>
        )}
      </AnimatedSection>

    </div>
  );
}

/* ======================================================
   SERVICE DETAIL
====================================================== */
export function ServiceDetail({
  params,
  slug: slugProp,
}: {
  params?: { slug: string };
  slug?: string;
}) {
  const slug = slugProp ?? params?.slug ?? "";
  const service = ALL_SERVICES.find((s) => s.slug === slug);
  const path = service ? servicePath(service.slug) : undefined;

  const jsonLd = useMemo(() => {
    if (!service) return undefined;
    return [
      buildServiceJsonLd(service),
      buildBreadcrumbJsonLd([
        { name: "Services", path: "/services" },
        { name: service.name, path: servicePath(service.slug) },
      ]),
    ];
  }, [service]);

  useSEO({
    title: service ? service.name : "Service Not Found",
    description: service ? service.description : "Service not found.",
    keywords: service?.keywords,
    path,
    ogImage: service?.heroImage,
    noIndex: !service,
    jsonLd,
  });

  if (!service) {
    return (
      <div className="pt-40 text-center min-h-screen bg-background">
        <h1 className="font-heading text-4xl font-bold text-foreground mb-4">Service Not Found</h1>
        <Button asChild><Link href="/services">View All Services</Link></Button>
      </div>
    );
  }

  const isSoftwareAI = service.slug === "software-ai";
  const isBmd = service.slug === "bmd";
  const isMbl = service.slug === "mbl-laboratory";
  const isRegulatoryCompliance = service.slug === "regulatory-compliance";
  const isEngineering = ENGINEERING_SERVICE_SLUGS.has(service.slug);
  const isAutomation = service.slug === "automation-services";
  const isManufacturing = service.slug === "contract-manufacturing";
  const isProductDevelopment = service.slug === "product-development";
  const isQualityTesting = service.slug === "quality-testing";
  const isDesignFabrication = service.slug === "design-fabrication";
  const isEngineeringProduct = service.slug === "engineering-product-development";
  const containerClass = "page-container";

  return (
    <div className="bg-background min-h-screen pt-20">

      {/* HERO — cinematic for ALL services */}
      <section className="relative bg-[#060d17] overflow-hidden min-h-[80vh] flex items-center py-16">
        <CinematicHeroBackground
          images={(SERVICE_GENERIC_SUB_IMAGES[service.slug] ?? FALLBACK_IMAGES)}
          alt={service.name}
        />
        <div className="absolute top-0 right-0 w-[640px] h-[640px] rounded-full border border-white/[0.06] -translate-y-1/2 translate-x-1/3 pointer-events-none" aria-hidden />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full border border-white/[0.04] translate-y-1/2 -translate-x-1/3 pointer-events-none" aria-hidden />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-white/[0.03] pointer-events-none hidden lg:block" aria-hidden />
        <div
          className="absolute inset-0 opacity-[0.055] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
          aria-hidden
        />

        <div className={`${containerClass} relative z-10`}>
          <AnimatedSection>
            <nav className="flex items-center gap-2 text-sm text-white/50 mb-8">
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">{service.name}</span>
            </nav>

            <div className="max-w-4xl">
              {!isQualityTesting && (
                <div className={`inline-flex items-center gap-2.5 rounded-full px-5 py-2 mb-8 backdrop-blur-sm border ${isSoftwareAI ? "bg-cyan-400/10 border-cyan-400/25" : "bg-white/8 border-white/20"}`}>
                  <span className={`w-2 h-2 rounded-full animate-pulse shrink-0 ${isSoftwareAI ? "bg-cyan-400" : "bg-primary"}`} />
                  <span className={`text-xs font-bold uppercase tracking-[0.18em] ${isSoftwareAI ? "text-cyan-200" : "text-white/85"}`}>{service.shortName}</span>
                  {SERVICE_STANDARDS[service.slug]?.[0] && (
                    <>
                      <span className="w-px h-3 bg-white/20" />
                      <span className="text-white/50 text-xs">{SERVICE_STANDARDS[service.slug][0]}</span>
                    </>
                  )}
                </div>
              )}

              <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-black text-white mb-5 leading-[0.95] tracking-tight">
                {isSoftwareAI ? (
                  <>
                    Intelligent<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-indigo-400">Software</span>
                    <br />for Healthcare
                  </>
                ) : service.name}
              </h1>

              <p className="text-white/65 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl">
                {service.tagline}
              </p>

              {SERVICE_STANDARDS[service.slug] && (
                <div className="flex flex-wrap gap-2 mb-10">
                  {SERVICE_STANDARDS[service.slug].slice(0, 5).map((std) => (
                    <span key={std} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/8 border border-white/15 text-white/70 text-xs font-semibold backdrop-blur-sm">
                      <CheckCircle className={`w-3 h-3 shrink-0 ${isSoftwareAI ? "text-cyan-400" : "text-primary"}`} />{std}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  className={`rounded-xl px-8 font-bold shadow-lg ${isSoftwareAI
                    ? "bg-gradient-to-r from-cyan-400 to-cyan-500 text-slate-900 hover:from-cyan-300 hover:to-cyan-400 shadow-cyan-500/30"
                    : "bg-gradient-to-r from-primary to-primary/80 text-white hover:from-primary/90 hover:to-primary/70 shadow-primary/30"
                  }`}
                >
                  <Link href="/contact">Get a Quote <ArrowRight className="ml-2 w-4 h-4" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-xl px-8 border-white/20 text-white hover:bg-white/10 hover:text-white font-semibold">
                  <Link href="/services"><ArrowLeft className="mr-2 w-4 h-4" /> All Services</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="relative overflow-x-clip bg-background py-16">
        {isSoftwareAI ? <SoftwareAIDecorLayer /> : null}
        <SoftwareIconsScatterBg />
        <div className={`${containerClass} relative z-10`}>
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
            <div className="lg:col-span-2 space-y-10">

              <AnimatedSection>
                <h2 className="font-heading text-3xl font-bold text-foreground mb-5 pb-3 border-b border-border">Overview</h2>
                <div className="space-y-4">
                  {service.overview.map((para, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed">{para}</p>
                  ))}
                </div>
              </AnimatedSection>

              {/* SUB-SERVICES — rich image cards */}
              <AnimatedSection>
                <div className="flex items-end justify-between gap-4 mb-5 pb-3 border-b border-border">
                  <h2 className="font-heading text-3xl font-bold text-foreground">Services Included</h2>
                  <span className={`hidden sm:inline-flex text-[11px] font-bold px-2.5 py-1 rounded-full border shrink-0 ${
                    isSoftwareAI
                      ? "text-cyan-600 bg-cyan-500/10 border-cyan-500/20"
                      : "text-primary/70 bg-primary/8 border-primary/15"
                  }`}>
                    {service.subServices.length} services
                  </span>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  {service.subServices.map((sub, i) => {
                    const img = isSoftwareAI
                      ? SOFTWARE_AI_SUB_IMAGES[sub.slug]
                      : (SERVICE_GENERIC_SUB_IMAGES[service.slug] ?? [])[i % Math.max(1, (SERVICE_GENERIC_SUB_IMAGES[service.slug] ?? []).length)];
                    const SubIcon = isSoftwareAI
                      ? (SOFTWARE_AI_SUB_ICONS[sub.slug] ?? CheckCircle)
                      : (SERVICE_SCATTER_ICONS[service.slug]?.[i % (SERVICE_SCATTER_ICONS[service.slug]?.length ?? 1)] ?? CheckCircle);

                    return (
                      <RichSubServiceCard
                        key={sub.slug}
                        sub={sub}
                        service={service}
                        href={`/services/${service.slug}/${sub.slug}`}
                        image={img}
                        Icon={SubIcon}
                        delay={i * 0.06}
                        variant={isSoftwareAI ? "software-ai" : "default"}
                      />
                    );
                  })}
                </div>
              </AnimatedSection>

              {SERVICE_SIDEBAR_STATS[service.slug] && (
                <KeyMetricsSection
                  stats={SERVICE_SIDEBAR_STATS[service.slug]}
                  variant={isSoftwareAI ? "software-ai" : "default"}
                />
              )}

              {SERVICE_STANDARDS[service.slug] && (
                isSoftwareAI ? (
                  <ProminentStandardsSection standards={SERVICE_STANDARDS[service.slug]} />
                ) : (
                  <ServiceStandardsBlock
                    standards={SERVICE_STANDARDS[service.slug]}
                    licences={SERVICE_LICENCES[service.slug]}
                    variant="default"
                  />
                )
              )}

              <ServiceCapabilitiesBlock
                capabilities={service.capabilities}
                variant={isSoftwareAI ? "software-ai" : "default"}
              />

              <ServiceWhyRMTBlock
                items={service.whyRMT}
                variant={isSoftwareAI ? "software-ai" : "default"}
              />

              {isEngineering && <EngineeringMethodology />}

              {isAutomation && <AutomationCommunicationExtras />}
              {isDesignFabrication && <DesignFabricationExtras />}
              {isEngineeringProduct && <EngineeringProductExtras />}
              {isBmd && <BmdServiceExtras />}
              {isMbl && <MblServiceExtras />}

            </div>

            {/* SIDEBAR — other services only */}
            <ServicePageSidebar service={service} />
          </div>
        </div>

        {/* Full-width detailed sections — below sidebar, edge-to-edge */}
        {isManufacturing && <ManufacturingServiceExtras />}
        {isProductDevelopment && <ProductDevelopmentServiceExtras />}
        {isQualityTesting && <QualityTestingServiceExtras />}
        {isRegulatoryCompliance && <RegulatoryComplianceExtras />}
      </section>

      {isSoftwareAI && (
        <section className="py-24 bg-secondary/30 border-t border-border relative overflow-hidden">
          <SoftwareAIDecorLayer />
          <div className={`${containerClass} relative z-10`}>
            <AnimatedSection>
              <div className="flex items-end justify-between gap-4 mb-8 pb-3 border-b border-border">
                <div className="relative">
                  <p className="text-cyan-600 dark:text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-2">Portfolio</p>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Our Projects</h2>
                  <p className="text-muted-foreground text-sm mt-2 max-w-xl">
                    Software and AI platforms we have delivered for healthcare and digital health clients.
                  </p>
                </div>
                <span className="hidden sm:inline-flex text-[11px] font-bold text-cyan-600 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/20 shrink-0">
                  {SOFTWARE_AI_PORTFOLIO.length} projects
                </span>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {SOFTWARE_AI_PORTFOLIO.map((p, i) => (
                  <RichPortfolioCard key={p.name} project={p} delay={i * 0.06} Icon={Brain} />
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      <ServicePageFooterCta service={service} isSoftwareAI={isSoftwareAI} />

    </div>
  );
}

/* ======================================================
   SUB-SERVICE DETAIL
====================================================== */
export function SubServiceDetail({
  params,
  serviceSlug: serviceSlugProp,
  subSlug: subSlugProp,
}: {
  params?: { slug: string; subSlug: string };
  serviceSlug?: string;
  subSlug?: string;
}) {
  const serviceSlug = serviceSlugProp ?? params?.slug ?? "";
  const subSlug = subSlugProp ?? params?.subSlug ?? "";
  const service = ALL_SERVICES.find((s) => s.slug === serviceSlug);
  const subService = service?.subServices.find((ss) => ss.slug === subSlug);
  const path = service && subService ? subServicePath(service.slug, subService.slug) : undefined;

  const jsonLd = useMemo(() => {
    if (!service || !subService) return undefined;
    return [
      buildSubServiceJsonLd(service, subService),
      buildBreadcrumbJsonLd([
        { name: "Services", path: "/services" },
        { name: service.name, path: servicePath(service.slug) },
        { name: subService.name, path: subServicePath(service.slug, subService.slug) },
      ]),
    ];
  }, [service, subService]);

  useSEO({
    title: subService && service ? `${subService.name} — ${service.shortName}` : "Not Found",
    description: service && subService ? buildSubServiceDescription(subService, service) : "Sub-service not found.",
    keywords: service && subService ? buildSubServiceKeywords(subService, service) : undefined,
    path,
    ogImage: service?.heroImage,
    noIndex: !service || !subService,
    jsonLd,
  });

  if (!service || !subService) {
    return (
      <div className="pt-40 text-center min-h-screen bg-background">
        <h1 className="font-heading text-4xl font-bold text-foreground mb-4">Page Not Found</h1>
        <Button asChild><Link href="/services">View All Services</Link></Button>
      </div>
    );
  }

  const isSoftwareAI = service.slug === "software-ai";
  const containerClass = "page-container";
  const subHeroImage = isSoftwareAI
    ? SOFTWARE_AI_SUB_IMAGES[subService.slug] ?? service.heroImage
    : (SERVICE_GENERIC_SUB_IMAGES[service.slug]?.[
        service.subServices.findIndex((ss) => ss.slug === subService.slug) %
        Math.max(1, SERVICE_GENERIC_SUB_IMAGES[service.slug]?.length ?? 1)
      ] ?? service.heroImage);

  const subPageIcons = SERVICE_SCATTER_ICONS[service.slug] ?? [CheckCircle, Layers, Zap, Shield, Star, Globe];
  const subHeroCarouselImages = isSoftwareAI
    ? [subHeroImage, ...SOFTWARE_AI_HERO_IMAGES.filter((img) => img !== subHeroImage).slice(0, 4)]
    : [subHeroImage, ...(SERVICE_GENERIC_SUB_IMAGES[service.slug] ?? FALLBACK_IMAGES).filter((img) => img !== subHeroImage).slice(0, 3)];

  return (
    <div className="bg-background min-h-screen pt-20">

      {/* HERO — cinematic for ALL sub-service pages */}
      <section className="relative bg-[#060d17] overflow-hidden flex items-center min-h-[80vh] py-16">
        <CinematicHeroBackground images={subHeroCarouselImages} alt={subService.name} />
        <div className="absolute top-0 right-0 w-[640px] h-[640px] rounded-full border border-white/[0.06] -translate-y-1/2 translate-x-1/3 pointer-events-none" aria-hidden />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full border border-white/[0.04] translate-y-1/2 -translate-x-1/3 pointer-events-none" aria-hidden />
        <div
          className="absolute inset-0 opacity-[0.055] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
          aria-hidden
        />

        <div className={`${containerClass} relative z-10 w-full`}>
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-8 flex-wrap">
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href={`/services/${service.slug}`} className="hover:text-white transition-colors">{service.shortName}</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{subService.name}</span>
          </nav>

          <div className="max-w-4xl">
            {(() => {
              const SubIcon = SOFTWARE_AI_SUB_ICONS[subService.slug] ?? Brain;
              const heroBadgeLabel = SUB_SERVICE_BADGE_LABEL[service.slug]?.[subService.slug] ?? service.shortName;
              const trustBadges = isSoftwareAI
                ? ["IEC 62304", "FDA SaMD", "HIPAA", "ISO 27001"]
                : (SUB_SERVICE_STANDARDS[service.slug]?.[subService.slug] ?? SERVICE_STANDARDS[service.slug] ?? []).slice(0, 4);
              return (
                <>
                  <div className={`inline-flex items-center gap-2.5 rounded-full px-5 py-2 mb-8 backdrop-blur-sm border ${isSoftwareAI ? "bg-cyan-400/10 border-cyan-400/25" : "bg-white/8 border-white/20"}`}>
                    <span className={`w-2 h-2 rounded-full animate-pulse shrink-0 ${isSoftwareAI ? "bg-cyan-400" : "bg-primary"}`} />
                    <SubIcon className={`w-4 h-4 ${isSoftwareAI ? "text-cyan-300" : "text-white/70"}`} />
                    <span className={`text-xs font-bold uppercase tracking-[0.18em] ${isSoftwareAI ? "text-cyan-200" : "text-white/80"}`}>{heroBadgeLabel}</span>
                    <span className="w-px h-3 bg-white/25" />
                    <span className={`text-xs ${isSoftwareAI ? "text-cyan-400/70" : "text-white/50"}`}>
                      {isSoftwareAI
                        ? "IEC 62304 Compliant"
                        : (SUB_SERVICE_STANDARDS[service.slug]?.[subService.slug]?.[0] ??
                          SERVICE_STANDARDS[service.slug]?.[0] ??
                          "ISO 13485")}
                    </span>
                  </div>
                  <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-black text-white mb-5 leading-[0.95] tracking-tight">
                    {subService.name}
                  </h1>
                  <p className="text-white/65 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl">
                    {subService.tagline}
                  </p>
                  {trustBadges.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-10">
                      {trustBadges.map((b) => (
                        <span key={b} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/8 border border-white/15 text-white/70 text-xs font-semibold backdrop-blur-sm">
                          <CheckCircle className={`w-3 h-3 shrink-0 ${isSoftwareAI ? "text-cyan-400" : "text-primary"}`} />{b}
                        </span>
                      ))}
                    </div>
                  )}
                </>
              );
            })()}
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className={isSoftwareAI
                  ? "rounded-xl px-8 bg-gradient-to-r from-cyan-400 to-cyan-500 text-slate-900 hover:from-cyan-300 hover:to-cyan-400 font-bold shadow-lg shadow-cyan-500/30"
                  : "rounded-xl px-8 bg-gradient-to-r from-primary to-primary/80 text-white hover:from-primary/90 hover:to-primary/70 font-bold shadow-lg shadow-primary/30"}
              >
                <Link href="/contact">Get a Quote <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl px-8 border-white/20 text-white hover:bg-white/10 hover:text-white">
                <Link href={`/services/${service.slug}`}>
                  <ArrowLeft className="mr-2 w-4 h-4" /> {service.shortName}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="relative overflow-hidden bg-background py-16">
        {isSoftwareAI ? <SoftwareAIDecorLayer /> : null}
        <SoftwareIconsScatterBg />
        <div className={`${containerClass} relative z-10`}>
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">

            <div className="lg:col-span-2 space-y-10">
              <SubServiceContent
                subService={subService}
                service={service}
                subHeroImage={subHeroImage}
                subPageIcons={subPageIcons}
              />
            </div>

            <ServicePageSidebar service={service} activeSubSlug={subService.slug} />

          </div>
        </div>
      </section>

      <ServicePageFooterCta
        service={service}
        isSoftwareAI={isSoftwareAI}
        subServiceName={subService.name}
      />

    </div>
  );
}
