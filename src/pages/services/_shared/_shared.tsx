import React, { useState, useEffect } from "react";
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
  LayoutDashboard, BookOpen, GraduationCap, Building2, Lightbulb
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/lib/seo";
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
  MBL_BET_METHODS,
  MBL_EQUIPMENT,
  MBL_SPECIFIC_PATHOGENS,
  MBL_STERILITY_METHODS,
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
  MANUFACTURING_PRODUCTS,
  MANUFACTURING_QUALITY_POINTS,
  MANUFACTURING_TESTING_SERVICES,
  MANUFACTURING_WHY_CHOOSE,
} from "@/data/revive-manufacturing-content";

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
                    Step {i + 1} ??{step.title}
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
            "End-to-End Product Development (Concept ??Prototype ??Production)",
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
        <h2 className="font-heading text-3xl font-bold text-foreground mb-4 pb-3 border-b border-border">Sterility Test Methods</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {MBL_STERILITY_METHODS.map((m) => (
            <div key={m.name} className="bg-card border border-border rounded-xl p-4">
              <h3 className="font-heading font-semibold text-foreground text-sm mb-2">{m.name}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{m.description}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="font-heading text-3xl font-bold text-foreground mb-4 pb-3 border-b border-border">Bacterial Endotoxin Test (BET) Methods</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {MBL_BET_METHODS.map((m) => (
            <div key={m.name} className="bg-card border border-border rounded-xl p-4">
              <h3 className="font-heading font-semibold text-foreground text-sm mb-2">{m.name}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{m.description}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="font-heading text-3xl font-bold text-foreground mb-4 pb-3 border-b border-border">Specific Pathogen Testing</h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          A microbiological test performed to detect the presence or absence of specified harmful microorganisms in pharmaceutical, medical, or biological products to ensure product safety and compliance.
        </p>
        <div className="flex flex-wrap gap-2">
          {MBL_SPECIFIC_PATHOGENS.map((p) => (
            <span key={p} className="text-xs px-3 py-1.5 bg-card border border-border rounded-lg text-muted-foreground">{p}</span>
          ))}
        </div>
      </AnimatedSection>

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

/* ---- Medical device manufacturing (Revive content, main service page) ---- */
function ManufacturingServiceExtras() {
  return (
    <div className="space-y-10">
      <AnimatedSection>
        <h2 className="font-heading text-3xl font-bold text-foreground mb-4 pb-3 border-b border-border">
          Built-In Quality at Every Stage
        </h2>
        <ul className="grid sm:grid-cols-2 gap-3">
          {MANUFACTURING_QUALITY_POINTS.map((point) => (
            <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              {point}
            </li>
          ))}
        </ul>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="font-heading text-3xl font-bold text-foreground mb-4 pb-3 border-b border-border">
          Flagship Products & Technologies
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          Precision-engineered medical devices and services developed to clinical-grade standards within certified cleanroom facilities ??interventional and diagnostic solutions across vascular and specialty medicine.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {MANUFACTURING_PRODUCTS.map((product) => (
            <div key={product.name} className="bg-card border border-border rounded-xl p-5">
              <h3 className="font-heading font-bold text-foreground mb-2">{product.name}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed mb-3">{product.description}</p>
              <ul className="space-y-1">
                {product.features.map((f) => (
                  <li key={f} className="text-xs text-muted-foreground flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="font-heading text-3xl font-bold text-foreground mb-4 pb-3 border-b border-border">
          Full-Spectrum Device Manufacturing
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {MANUFACTURING_DEVICE_CLASSES.map((item) => (
            <div key={item.title} className="bg-card border border-border rounded-xl p-4">
              <h3 className="font-heading font-semibold text-foreground text-sm mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="font-heading text-3xl font-bold text-foreground mb-4 pb-3 border-b border-border">
          World-Class Cleanroom Environments
        </h2>
        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          {MANUFACTURING_CLEANROOMS.map((room) => (
            <div key={room.grade} className="bg-primary/5 border border-primary/15 rounded-xl p-4 text-center">
              <p className="text-xl font-heading font-bold text-primary">{room.grade}</p>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{room.description}</p>
            </div>
          ))}
        </div>
        <h3 className="font-heading font-semibold text-foreground mb-2">Environmental Control Systems</h3>
        <ul className="grid sm:grid-cols-2 gap-2">
          {MANUFACTURING_ENVIRONMENTAL_CONTROLS.map((c) => (
            <li key={c} className="text-sm text-muted-foreground flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              {c}
            </li>
          ))}
        </ul>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="font-heading text-3xl font-bold text-foreground mb-4 pb-3 border-b border-border">
          Development Journey
        </h2>
        <div className="space-y-6">
          {MANUFACTURING_DEVELOPMENT_PHASES.map((phase) => (
            <div key={phase.title} className="bg-card border border-border rounded-xl p-5">
              <h3 className="font-heading font-semibold text-foreground mb-3">{phase.title}</h3>
              <ul className="space-y-1.5">
                {phase.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="font-heading text-3xl font-bold text-foreground mb-4 pb-3 border-b border-border">
          Testing & Validation
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {MANUFACTURING_TESTING_SERVICES.map((svc) => (
            <div key={svc.title} className="bg-card border border-border rounded-xl p-4">
              <h3 className="font-heading font-semibold text-foreground text-sm mb-2">{svc.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{svc.description}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="font-heading text-3xl font-bold text-foreground mb-4 pb-3 border-b border-border">
          Capacity Building
        </h2>
        <ul className="grid sm:grid-cols-2 gap-2">
          {MANUFACTURING_CAPACITY_BUILDING.map((item) => (
            <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="font-heading text-3xl font-bold text-foreground mb-4 pb-3 border-b border-border">
          Why Choose Us for Manufacturing
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {MANUFACTURING_WHY_CHOOSE.map((item) => (
            <div key={item.title} className="bg-card border border-border rounded-xl p-4">
              <h3 className="font-semibold text-foreground text-sm mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}

/* ---- Map slug ??icon ---- */
const SERVICE_ICONS: Record<string, React.ReactNode> = {
  "regulatory-compliance": <Shield className="w-6 h-6" />,
  "software-ai": <Brain className="w-6 h-6" />,
  "quality-testing": <FlaskConical className="w-6 h-6" />,
  "automation-services": <Cog className="w-6 h-6" />,
  "design-fabrication": <Wrench className="w-6 h-6" />,
  "engineering-product-development": <Settings2 className="w-6 h-6" />,
  "turnkey-commissioning": <Settings2 className="w-6 h-6" />,
  "bmd": <Dna className="w-6 h-6" />,
  "mbl-laboratory": <Microscope className="w-6 h-6" />,
  "contract-manufacturing": <Factory className="w-6 h-6" />,
};

/* ---- Per-service standards shown in sidebar ---- */
const SERVICE_STANDARDS: Record<string, string[]> = {
  "regulatory-compliance":   ["FDA 510(k)/PMA", "EU MDR 2017/745", "ISO 13485", "MEDDEV 2.7.1", "IVDR 2017/746"],
  "software-ai":             ["IEC 62304", "FDA SaMD Guidance", "IEC 82304", "EU MDR Rule 11", "HIPAA / SOC 2"],
  "quality-testing":         ["ISO 13485", "ISO 10993", "IEC 60601-1", "ASTM Standards", "USP Standards"],
  "automation-services":       ["IEC 61131", "ISO 13849", "Modbus / Profibus", "GMP", "ISO 13485"],
  "design-fabrication":        ["SOLIDWORKS", "ANSYS", "COMSOL", "DFM / DFA", "ISO 13485"],
  "engineering-product-development": ["IEC 62304", "IPC-2221", "IEC 60601-1", "STM32 / ESP32", "ISO 13485"],
  "turnkey-commissioning":   ["ISO 13485", "GAMP 5", "IQ/OQ/PQ", "FDA 21 CFR", "GMP Regulations"],
  "bmd":                     ["ISO 10993", "ISO 17025", "ICH Q1A(R2)", "ISO 13485", "FDA / EU MDR"],
  "mbl-laboratory":          ["GMP", "ISO 13485", "USP <71>", "USP <85>", "EU Pharmacopoeia"],
  "contract-manufacturing":  ["ISO 13485", "ISO 14644", "ISO 14971", "DRAP", "ISO 10993"],
};

/* ---- Per-service key stats shown in sidebar ---- */
const SERVICE_SIDEBAR_STATS: Record<string, { label: string; value: string; icon: React.ElementType }[]> = {
  "regulatory-compliance":   [{ label: "Approval Rate", value: "98%", icon: Medal }, { label: "Jurisdictions", value: "40+", icon: Globe }, { label: "Submissions", value: "1,200+", icon: FileCheck }],
  "software-ai":             [{ label: "AI Models Deployed", value: "80+", icon: Brain }, { label: "Platforms Supported", value: "15+", icon: LayoutDashboard }, { label: "Compliance Rate", value: "100%", icon: ShieldCheck }],
  "quality-testing":         [{ label: "Tests Executed", value: "25k+", icon: FlaskConical }, { label: "Standards Covered", value: "50+", icon: BookOpen }, { label: "Turnaround", value: "72hr", icon: Zap }],
  "automation-services":     [{ label: "PLC Platforms", value: "Fatek+", icon: Cog }, { label: "HMI Systems", value: "Weintek", icon: MonitorSmartphone }, { label: "Motion Axes", value: "Multi", icon: Zap }],
  "design-fabrication":      [{ label: "CAD Platforms", value: "SOLIDWORKS", icon: Layers }, { label: "3D Printers", value: "4+", icon: Boxes }, { label: "Simulations", value: "ANSYS/COMSOL", icon: Gauge }],
  "engineering-product-development": [{ label: "Disciplines", value: "3+", icon: Settings2 }, { label: "Methodology Steps", value: "5", icon: Target }, { label: "Deliverable Types", value: "20+", icon: PackageCheck }],
  "turnkey-commissioning":   [{ label: "Systems Delivered", value: "80+", icon: Building2 }, { label: "Countries", value: "15+", icon: Globe }, { label: "On-Time Rate", value: "97%", icon: Medal }],
  "bmd":                     [{ label: "Research Articles", value: "40+", icon: BookOpen }, { label: "Conference Papers", value: "12+", icon: FileCheck }, { label: "Granted Patents", value: "2", icon: Award }],
  "mbl-laboratory":          [{ label: "BET Methods", value: "6", icon: TestTube2 }, { label: "Sterility Methods", value: "5", icon: FlaskConical }, { label: "Pathogen Tests", value: "8", icon: Microscope }],
  "contract-manufacturing":  [{ label: "Cleanroom Grade", value: "ISO 5", icon: Factory }, { label: "Device Classes", value: "I?CIII", icon: Layers }, { label: "Lifecycle", value: "360??", icon: Target }],
};

/* ---- Per-service icon scatter icons ---- */
const SERVICE_SCATTER_ICONS: Record<string, React.ElementType[]> = {
  "regulatory-compliance":  [Shield, FileSearch, ScrollText, Globe, CheckCircle, ShieldCheck, FileCheck, BookOpen, Award, Medal],
  "software-ai":            [Code2, Cpu, Cloud, Terminal, Brain, Sparkles, GitBranch, MonitorSmartphone, Workflow, Bug, Layers, Zap, Smartphone, ShieldCheck, Activity, Cog, Boxes, ScanLine, CircuitBoard, Network, Database, Binary],
  "quality-testing":        [FlaskConical, TestTube2, Microscope, BarChart3, ClipboardList, CheckCircle, Search, Target, ScanLine, Gauge],
  "automation-services":    [Cog, Zap, Network, MonitorSmartphone, Cable, Radio, Settings2, Gauge, Cloud, Terminal],
  "design-fabrication":     [Wrench, Layers, Gauge, Boxes, Cpu, Microscope, Waves, Target, Cog, PackageCheck],
  "engineering-product-development": [Settings2, Cog, Wrench, CircuitBoard, Layers, Brain, Target, PackageCheck, Zap, Network],
  "turnkey-commissioning":  [Settings2, Cog, Wrench, Factory, Building2, Truck, PackageCheck, Layers, ClipboardList, Target],
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
    "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=900&q=80",
    "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=900&q=80",
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
  "turnkey-commissioning": [
    "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=900&q=80",
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=900&q=80",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&q=80",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&q=80",
    "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=900&q=80",
    "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=900&q=80",
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
  "contract-manufacturing": [
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=900&q=80",
    "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=900&q=80",
    "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=900&q=80",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&q=80",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&q=80",
    "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=900&q=80",
  ],
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
  { step: "02", title: "Strategy", Icon: ClipboardList, desc: "We define a detailed project plan ??scope, timeline, regulatory strategy, and risk mitigation roadmap.", color: "from-primary/10 to-indigo-500/10" },
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
    description: "RMT Medical Technologies provides comprehensive medical device and BMD services ??product design, regulatory compliance, software & AI, automation, design & fabrication, engineering product development, quality testing, biomaterials, microbiology lab testing, and contract manufacturing.",
    keywords: "medical device services, regulatory compliance, product design prototyping, contract manufacturing",
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
              A comprehensive suite of medical device and technology services ??covering every stage from design through regulatory approval, manufacturing, and commercialization.
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
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">From first consultation to regulatory approval and beyond ??a structured, milestone-driven approach that de-risks your project at every stage.</p>
          </AnimatedSection>

          {/* Process timeline ??horizontal on desktop, vertical on mobile */}
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
                <Link href={`/services/${svc.slug}`} className="block p-7">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      {SERVICE_ICONS[svc.slug]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-1">{svc.name}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{svc.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {svc.subServices.slice(0, 3).map((sub) => (
                          <span key={sub.slug} className="text-xs px-2.5 py-1 bg-primary/8 text-primary rounded-full font-medium border border-primary/15">
                            {sub.name}
                          </span>
                        ))}
                        {svc.subServices.length > 3 && (
                          <span className="text-xs px-2.5 py-1 border border-border text-muted-foreground rounded-full">
                            +{svc.subServices.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-primary font-semibold text-sm mt-5 group-hover:gap-2.5 transition-all">
                    Explore Service <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
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
  "contract-manufacturing": [
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
    "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=80",
    "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80",
  ],
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
  "turnkey-commissioning": [
    "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=80",
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
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
   SOFTWARE & AI ??IMAGES, PROJECTS, ANIMATED HERO BG
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

/* Animated software/AI hero background ??neural net nodes, code rain, ECG wave, data packets */
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
    const chars = "01{}<>()[]=+*/-:;.???????";
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

  /* ECG heartbeat path ??three repeating PQRST-like segments */
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

        {/* ECG heartbeat line ??scrolling across bottom third */}
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
            {service.shortName}
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

/** Key metrics row — main column, above capabilities */
function ServiceKeyMetricsBlock({
  stats,
  variant = "default",
}: {
  stats: { label: string; value: string; icon: React.ElementType }[];
  variant?: "default" | "software-ai";
}) {
  const isCyan = variant === "software-ai";
  return (
    <AnimatedSection>
      <h2 className="font-heading text-3xl font-bold text-foreground mb-5 pb-3 border-b border-border">Key Metrics</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((stat) => {
          const StatIcon = stat.icon;
          return (
            <div
              key={stat.label}
              className={`relative overflow-hidden rounded-2xl border p-5 text-center ${
                isCyan
                  ? "border-cyan-500/20 bg-gradient-to-br from-cyan-500/8 to-indigo-500/5"
                  : "border-border bg-card"
              }`}
            >
              <div
                className={`mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full ${
                  isCyan ? "bg-cyan-500/15 text-cyan-600 dark:text-cyan-400" : "bg-primary/10 text-primary"
                }`}
              >
                <StatIcon className="h-5 w-5" />
              </div>
              <p className="font-heading text-3xl font-bold text-foreground leading-none">{stat.value}</p>
              <p className="mt-1.5 text-xs text-muted-foreground">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </AnimatedSection>
  );
}

/** Standards with horizontal line structure */
function ServiceStandardsBlock({
  standards,
  variant = "default",
}: {
  standards: string[];
  variant?: "default" | "software-ai";
}) {
  const isCyan = variant === "software-ai";
  return (
    <AnimatedSection>
      <h2 className="font-heading text-3xl font-bold text-foreground mb-5 pb-3 border-b border-border">
        Compliance & Standards
      </h2>
      <div className="relative rounded-2xl border border-border bg-card/50 p-5 sm:p-6">
        <div className="absolute left-6 right-6 top-[2.6rem] hidden h-px bg-border sm:block" aria-hidden />
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
          {standards.map((std, i) => (
            <div
              key={std}
              className={`relative flex flex-1 min-w-[200px] items-center gap-3 rounded-xl border px-4 py-3 transition-colors ${
                isCyan
                  ? "border-cyan-500/20 bg-background hover:border-cyan-400/40"
                  : "border-border bg-background hover:border-primary/30"
              }`}
            >
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                  isCyan ? "bg-cyan-500/12 text-cyan-600 dark:text-cyan-400" : "bg-primary/10 text-primary"
                }`}
              >
                <ShieldCheck className="h-4 w-4" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  Standard {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm font-semibold text-foreground leading-snug">{std}</p>
              </div>
            </div>
          ))}
        </div>
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

/** Shared sidebar: Get a Quote + Other Services (parent & sub-service pages) */
function ServicePageSidebar({
  service,
  isSoftwareAI = false,
  quoteHint,
}: {
  service: ServiceData;
  isSoftwareAI?: boolean;
  quoteHint?: string;
}) {
  return (
    <div className="space-y-5">
      <div className="sticky top-24 space-y-5 z-10">
        <AnimatedSection
          className={`text-white rounded-2xl p-6 shadow-xl ${
            isSoftwareAI
              ? "bg-gradient-to-br from-[#020617] to-[#0a1628] border border-cyan-500/25 shadow-cyan-500/10"
              : "bg-primary shadow-primary/20"
          }`}
        >
          <h3 className="font-heading text-xl font-bold mb-2">Get a Quote</h3>
          <p className={`text-sm mb-5 leading-relaxed ${isSoftwareAI ? "text-white/70" : "text-white/80"}`}>
            {quoteHint ?? "Discuss your requirements with our specialists and receive a tailored proposal."}
          </p>
          <Button
            asChild
            className={`w-full rounded-lg font-bold mb-3 ${
              isSoftwareAI ? "bg-cyan-400 text-slate-900 hover:bg-cyan-300" : "bg-white text-primary hover:bg-white/90"
            }`}
          >
            <Link href="/contact">Request a Quote</Link>
          </Button>
          <a href="tel:+15551234567" className="flex items-center justify-center gap-2 text-white/70 text-xs hover:text-white transition-colors">
            <Phone className="w-3.5 h-3.5" />
            Schedule a Call
          </a>
        </AnimatedSection>

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

const SOFTWARE_AI_APPROACH_STEPS = [
  { step: "01", title: "Discover", desc: "Requirements, intended use, regulatory pathway, and stakeholder alignment." },
  { step: "02", title: "Design", desc: "Architecture, UX, security, and traceability mapped to applicable standards." },
  { step: "03", title: "Build & Validate", desc: "Development, V&V, cybersecurity testing, and documentation for submission." },
  { step: "04", title: "Deploy & Support", desc: "Release, cloud deployment, monitoring, and post-market change control." },
];

/** Full-width breakout inside page-container */
function FullBleedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative left-1/2 -translate-x-1/2 w-screen max-w-[100vw] my-6 sm:my-8 ${className}`}>
      {children}
    </div>
  );
}

/** Home-style centered stats bar (prominent) */
function ProminentMetricsBar({
  stats,
  title = "Key Metrics",
}: {
  stats: { label: string; value: string; icon: React.ElementType }[];
  title?: string;
}) {
  return (
    <div className="rounded-3xl overflow-hidden shadow-xl">
      <section className="bg-gradient-to-r from-cyan-600 via-cyan-500 to-teal-600 py-12 sm:py-14">
        <div className="text-center px-6">
          <p className="text-white/80 text-xs font-bold uppercase tracking-[0.22em] mb-2">{title}</p>
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-10">
            Proven Impact at Scale
          </h3>
          <div className={`grid gap-8 mx-auto max-w-3xl ${
            stats.length === 3 ? "grid-cols-3" : "grid-cols-2 sm:grid-cols-4"
          }`}>
            {stats.map((stat, i) => {
              const StatIcon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="text-center text-white"
                >
                  <div className="flex justify-center mb-3 opacity-85">
                    <StatIcon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <div className="font-heading text-4xl sm:text-5xl font-bold leading-none">{stat.value}</div>
                  <div className="text-white/70 text-sm mt-2 font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

/** Centered prominent standards strip */
function ProminentStandardsSection({ standards }: { standards: string[] }) {
  return (
    <FullBleedSection>
      <section className="bg-secondary/40 border-y border-border py-10 sm:py-12">
        <div className="page-container text-center">
          <p className="text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-[0.2em] mb-2">
            Compliance & Standards
          </p>
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-8">
            Built for Regulated Healthcare Software
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

/** Rich in-depth layout for Software & AI sub-service pages */
function SoftwareAISubServiceContent({
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
  const SubIcon = SOFTWARE_AI_SUB_ICONS[subService.slug] ?? Brain;

  return (
    <div className="space-y-14">

      {/* ── Overview 2-col layout ── */}
      <AnimatedSection>
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-3 space-y-4">
            <div className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
              <span className="text-muted-foreground text-xs font-bold uppercase tracking-widest">Service Overview</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight">{subService.name}</h2>
            <div className="space-y-3">
              {subService.overview.map((para, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed text-[15px]">{para}</p>
              ))}
            </div>
            <div className="pt-2 border-l-2 border-cyan-500/50 pl-4">
              <p className="text-sm font-medium text-foreground/80 italic">{subService.tagline}</p>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl shadow-black/20 border border-border">
              <img src={subHeroImage} alt={subService.name} loading="lazy"
                className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-cyan-500/95 text-slate-900 text-[10px] font-bold uppercase tracking-widest">
                <SubIcon className="w-3 h-3" /> Software & AI
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
          <p className="text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-widest mb-1">Highlights</p>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">Key Features & Benefits</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {subService.keyPoints.map((point, idx) => {
            const HlIcon = subPageIcons[idx % subPageIcons.length];
            return (
              <motion.div key={point}
                initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: idx * 0.06 }}
                className="group flex items-start gap-4 p-5 rounded-2xl border border-border bg-card hover:border-cyan-400/50 hover:bg-cyan-500/4 hover:shadow-md transition-all duration-300">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/10 border border-cyan-500/20 group-hover:scale-105 transition-transform">
                  <HlIcon className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">{point}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </AnimatedSection>

      {/* ── Metrics ── */}
      {SERVICE_SIDEBAR_STATS[service.slug] && (
        <ProminentMetricsBar stats={SERVICE_SIDEBAR_STATS[service.slug]} />
      )}

      {/* ── Deliverables — styled grid ── */}
      <AnimatedSection>
        <div className="mb-6 pb-3 border-b border-border">
          <p className="text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-widest mb-1">What You Get</p>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">Deliverables</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {subService.deliverables.map((del, idx) => (
            <motion.div key={del}
              initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ delay: idx * 0.05 }}
              className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-cyan-400/40 transition-colors group">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-500/12 group-hover:bg-cyan-500/20 transition-colors">
                <CheckCircle className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
              </div>
              <span className="text-sm font-medium text-foreground">{del}</span>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* ── Standards ── */}
      {SERVICE_STANDARDS[service.slug] && (
        <ProminentStandardsSection standards={SERVICE_STANDARDS[service.slug]} />
      )}

      {/* ── Our Approach ── */}
      <AnimatedSection>
        <div className="mb-6 pb-3 border-b border-border">
          <p className="text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-widest mb-1">Methodology</p>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">Our Approach</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SOFTWARE_AI_APPROACH_STEPS.map((s, i) => (
            <motion.div key={s.step}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="relative group bg-card border border-border rounded-2xl p-5 hover:border-cyan-400/40 hover:shadow-lg transition-all">
              <div className="font-heading text-5xl font-black text-primary/7 leading-none mb-3 -mt-1 select-none">{s.step}</div>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/10 border border-cyan-500/20 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <span className="font-bold text-cyan-600 dark:text-cyan-400 text-xs">{s.step}</span>
              </div>
              <h4 className="font-heading text-sm font-bold text-foreground mb-1.5">{s.title}</h4>
              <p className="text-muted-foreground text-xs leading-relaxed">{s.desc}</p>
              {i < SOFTWARE_AI_APPROACH_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-px bg-cyan-500/30" aria-hidden />
              )}
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* ── Service capabilities ── */}
      <AnimatedSection>
        <div className="mb-6 pb-3 border-b border-border">
          <p className="text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-widest mb-1">Full-Service Offering</p>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">All {service.shortName} Capabilities</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {service.capabilities.map((cap, idx) => (
            <motion.div key={cap}
              initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ delay: idx * 0.04 }}
              className="group flex items-center gap-3 px-4 py-3 rounded-xl border border-border bg-card hover:border-cyan-400/40 hover:bg-cyan-500/4 transition-all">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500/12 text-[10px] font-bold text-cyan-700 dark:text-cyan-300">{idx + 1}</span>
              <span className="text-sm text-foreground font-medium group-hover:text-primary transition-colors">{cap}</span>
            </motion.div>
          ))}
        </div>
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

  useSEO({
    title: service ? service.name : "Service Not Found",
    description: service ? service.description : "Service not found.",
    keywords: service?.keywords,
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
  const isEngineering = ENGINEERING_SERVICE_SLUGS.has(service.slug);
  const isAutomation = service.slug === "automation-services";
  const isManufacturing = service.slug === "contract-manufacturing";
  const isDesignFabrication = service.slug === "design-fabrication";
  const isEngineeringProduct = service.slug === "engineering-product-development";
  const containerClass = "page-container";

  return (
    <div className="bg-background min-h-screen pt-20">

      {/* UNIQUE HERO per service */}
      <section className={`relative bg-[#060d17] overflow-hidden ${isSoftwareAI ? "min-h-[80vh] flex items-center py-16" : "py-20"}`}>
        {isSoftwareAI ? (
          <>
            <CinematicHeroBackground images={SOFTWARE_AI_HERO_IMAGES} alt={service.name} />
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full border border-cyan-400/15 -translate-y-1/2 translate-x-1/2 pointer-events-none" aria-hidden />
            <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full border border-indigo-400/15 translate-y-1/2 -translate-x-1/2 pointer-events-none" aria-hidden />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5 pointer-events-none hidden lg:block" aria-hidden />
          </>
        ) : (
          <>
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/10 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-primary/5 translate-y-1/2 -translate-x-1/2 pointer-events-none" />
            <ServiceBgIcon slug={service.slug} />
          </>
        )}

        <div className={`${containerClass} relative z-10`}>
          <AnimatedSection>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-white/50 mb-8">
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">{service.name}</span>
            </nav>

            {isSoftwareAI ? (
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-300/30 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />
                  <span className="text-cyan-200 text-xs font-bold uppercase tracking-widest">Software & AI</span>
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-indigo-500 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-cyan-500/30">
                  {SERVICE_ICONS[service.slug]}
                </div>
                <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-5 leading-tight">
                  {service.name}
                </h1>
                <p className="text-white/75 text-xl md:text-2xl leading-relaxed mb-8 max-w-2xl">
                  {service.tagline}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild className="rounded-lg bg-cyan-400 text-slate-900 hover:bg-cyan-300">
                    <Link href="/contact">Get a Quote <ArrowRight className="ml-2 w-4 h-4" /></Link>
                  </Button>
                  <Button asChild variant="outline" className="rounded-lg border-white/20 text-white hover:bg-white/10">
                    <Link href="/services"><ArrowLeft className="mr-2 w-4 h-4" /> All Services</Link>
                  </Button>
                </div>
              </div>
            ) : (
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-primary/30">
                    {SERVICE_ICONS[service.slug]}
                  </div>
                  <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">{service.name}</h1>
                  <p className="text-white/70 text-xl leading-relaxed mb-8">{service.tagline}</p>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild className="rounded-lg">
                      <Link href="/contact">Get a Quote <ArrowRight className="ml-2 w-4 h-4" /></Link>
                    </Button>
                    <Button asChild variant="outline" className="rounded-lg border-white/20 text-white hover:bg-white/10">
                      <Link href="/services"><ArrowLeft className="mr-2 w-4 h-4" /> All Services</Link>
                    </Button>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <ServiceHeroCarousel service={service} />
                </div>
              </div>
            )}
          </AnimatedSection>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="relative overflow-hidden bg-background py-16">
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
                isSoftwareAI ? (
                  <ProminentMetricsBar stats={SERVICE_SIDEBAR_STATS[service.slug]} />
                ) : (
                  <ServiceKeyMetricsBlock
                    stats={SERVICE_SIDEBAR_STATS[service.slug]}
                    variant="default"
                  />
                )
              )}

              {SERVICE_STANDARDS[service.slug] && (
                isSoftwareAI ? (
                  <ProminentStandardsSection standards={SERVICE_STANDARDS[service.slug]} />
                ) : (
                  <ServiceStandardsBlock
                    standards={SERVICE_STANDARDS[service.slug]}
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
              {isManufacturing && <ManufacturingServiceExtras />}
              {isBmd && <BmdServiceExtras />}
              {isMbl && <MblServiceExtras />}

            </div>

            {/* SIDEBAR — quote + other services only */}
            <div className="space-y-5">
              <div className="sticky top-24 space-y-5 z-10">
                <AnimatedSection className={`text-white rounded-2xl p-6 shadow-xl ${
                  isSoftwareAI
                    ? "bg-gradient-to-br from-[#020617] to-[#0a1628] border border-cyan-500/25 shadow-cyan-500/10"
                    : "bg-primary shadow-primary/20"
                }`}>
                  <h3 className="font-heading text-xl font-bold mb-2">Get a Quote</h3>
                  <p className={`text-sm mb-5 leading-relaxed ${isSoftwareAI ? "text-white/70" : "text-white/80"}`}>
                    Discuss your requirements with our specialists and receive a tailored proposal.
                  </p>
                  <Button
                    asChild
                    className={`w-full rounded-lg font-bold mb-3 ${
                      isSoftwareAI
                        ? "bg-cyan-400 text-slate-900 hover:bg-cyan-300"
                        : "bg-white text-primary hover:bg-white/90"
                    }`}
                  >
                    <Link href="/contact">Request a Quote</Link>
                  </Button>
                  <a href="tel:+15551234567" className="flex items-center justify-center gap-2 text-white/70 text-xs hover:text-white transition-colors">
                    <Phone className="w-3.5 h-3.5" />
                    Schedule a Call
                  </a>
                </AnimatedSection>

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

              {!isSoftwareAI && (
              <AnimatedSection className="bg-[#020617] rounded-2xl p-6 text-white border border-primary/20">
                <h4 className="font-heading text-base font-bold mb-2">Ready to Start?</h4>
                <p className="text-white/60 text-xs leading-relaxed mb-4">Our {service.shortName} specialists are available for a free initial consultation.</p>
                <div className="space-y-2">
                  <Button asChild size="sm" className="w-full rounded-lg bg-primary hover:bg-primary/90">
                    <Link href="/contact"><Mail className="w-3.5 h-3.5 mr-2" /> Send an Enquiry</Link>
                  </Button>
                  <Button asChild size="sm" variant="outline" className="w-full rounded-lg border-white/20 text-white hover:bg-white/10 hover:text-white">
                    <Link href="/about"><Users className="w-3.5 h-3.5 mr-2" /> Meet the Team</Link>
                  </Button>
                </div>
              </AnimatedSection>
              )}
            </div>
          </div>
        </div>
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

      {isSoftwareAI && (
        <section className="py-14 bg-background border-t border-border">
          <div className={containerClass}>
            <AnimatedSection className="w-full bg-[#020617] rounded-2xl p-8 md:p-10 text-white border border-cyan-500/25 shadow-xl">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                <div className="max-w-2xl">
                  <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">Ready to Start?</h2>
                  <p className="text-white/65 text-sm md:text-base leading-relaxed">
                    Our {service.shortName} specialists are available for a free initial consultation. Tell us about your software or AI project and we will respond within one business day.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto lg:min-w-[340px] shrink-0">
                  <Button asChild size="lg" className="flex-1 rounded-lg bg-cyan-400 text-slate-900 hover:bg-cyan-300 font-semibold">
                    <Link href="/contact"><Mail className="w-4 h-4 mr-2" /> Send an Enquiry</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="flex-1 rounded-lg border-white/25 text-white hover:bg-white/10 hover:text-white">
                    <Link href="/about"><Users className="w-4 h-4 mr-2" /> Meet the Team</Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

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

  useSEO({
    title: subService ? `${subService.name} ??${service?.shortName}` : "Not Found",
    description: subService?.tagline ?? "Sub-service not found.",
    keywords: `${subService?.name}, ${service?.name}, medical device`,
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
    : [subHeroImage];

  return (
    <div className="bg-background min-h-screen pt-20">

      {/* HERO */}
      <section className={`relative bg-[#060d17] overflow-hidden flex items-center ${isSoftwareAI ? "min-h-[80vh] py-16" : "min-h-[520px] py-24"}`}>
        {isSoftwareAI ? (
          <>
            <CinematicHeroBackground images={subHeroCarouselImages} alt={subService.name} />
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full border border-cyan-400/15 -translate-y-1/2 translate-x-1/2 pointer-events-none" aria-hidden />
            <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full border border-indigo-400/15 translate-y-1/2 -translate-x-1/2 pointer-events-none" aria-hidden />
          </>
        ) : (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center scale-105"
              style={{ backgroundImage: `url('${subHeroImage}')` }}
              aria-hidden
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/97 via-[#020617]/80 to-[#020617]/40 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-transparent to-[#020617]/50 pointer-events-none" />
            <div
              className="absolute inset-0 opacity-[0.07] pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
                backgroundSize: "56px 56px",
              }}
              aria-hidden
            />
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
              {subPageIcons.slice(0, 8).map((IconEl, idx) => (
                <motion.div
                  key={idx}
                  className="absolute text-white/[0.06]"
                  style={{
                    left: `${10 + (idx * 12) % 80}%`,
                    top: `${15 + (idx * 17) % 70}%`,
                  }}
                  animate={{
                    y: [0, -12, 0],
                    rotate: [0, idx % 2 === 0 ? 8 : -8, 0],
                    opacity: [0.04, 0.10, 0.04],
                  }}
                  transition={{ duration: 6 + idx, repeat: Infinity, ease: "easeInOut", delay: idx * 0.5 }}
                >
                  <IconEl size={60 + (idx % 3) * 20} strokeWidth={1} />
                </motion.div>
              ))}
            </div>
            <motion.div
              aria-hidden
              className="absolute inset-x-0 h-32 pointer-events-none"
              style={{ background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.03), transparent)" }}
              initial={{ y: "-20%" }}
              animate={{ y: "130%" }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
          </>
        )}

        <div className={`${containerClass} relative z-10 w-full`}>
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-8 flex-wrap">
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href={`/services/${service.slug}`} className="hover:text-white transition-colors">{service.shortName}</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{subService.name}</span>
          </nav>

          <div className="max-w-4xl">
            {isSoftwareAI ? (
              (() => {
                const SubIcon = SOFTWARE_AI_SUB_ICONS[subService.slug] ?? Brain;
                return (
                  <>
                    {/* Badge pill with icon */}
                    <div className="inline-flex items-center gap-2.5 bg-cyan-400/10 border border-cyan-400/25 rounded-full px-5 py-2 mb-8 backdrop-blur-sm">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0" />
                      <SubIcon className="w-4 h-4 text-cyan-300" />
                      <span className="text-cyan-200 text-xs font-bold uppercase tracking-[0.18em]">Software & AI</span>
                      <span className="w-px h-3 bg-cyan-400/30" />
                      <span className="text-cyan-400/70 text-xs">IEC 62304 Compliant</span>
                    </div>
                    <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-black text-white mb-5 leading-[0.95] tracking-tight">
                      {subService.name}
                    </h1>
                    <p className="text-white/65 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl">
                      {subService.tagline}
                    </p>
                    {/* Trust badge row */}
                    <div className="flex flex-wrap gap-2 mb-10">
                      {["IEC 62304", "FDA SaMD", "HIPAA", "ISO 27001"].map((b) => (
                        <span key={b} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/8 border border-white/15 text-white/70 text-xs font-semibold backdrop-blur-sm">
                          <CheckCircle className="w-3 h-3 text-cyan-400 shrink-0" />{b}
                        </span>
                      ))}
                    </div>
                  </>
                );
              })()
            ) : (
              <>
                <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5 mb-6">
                  <div className="w-4 h-4 text-primary">{SERVICE_ICONS[service.slug]}</div>
                  <span className="text-primary text-xs font-bold uppercase tracking-widest">{service.shortName}</span>
                </div>
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                  {subService.name}
                </h1>
                <p className="text-white/70 text-xl leading-relaxed mb-8">
                  {subService.tagline}
                </p>
              </>
            )}
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className={isSoftwareAI
                  ? "rounded-xl px-8 bg-gradient-to-r from-cyan-400 to-cyan-500 text-slate-900 hover:from-cyan-300 hover:to-cyan-400 font-bold shadow-lg shadow-cyan-500/30"
                  : "rounded-lg"}
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
              {isSoftwareAI ? (
                <SoftwareAISubServiceContent
                  subService={subService}
                  service={service}
                  subHeroImage={subHeroImage}
                  subPageIcons={subPageIcons}
                />
              ) : (
                <>
              <AnimatedSection>
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-border">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    {SERVICE_ICONS[service.slug]}
                  </div>
                  <h2 className="font-heading text-3xl font-bold text-foreground">Overview</h2>
                </div>
                <div className="space-y-4">
                  {subService.overview.map((para, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed text-[15px]">{para}</p>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-border">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Star className="w-4 h-4 text-primary" />
                  </div>
                  <h2 className="font-heading text-3xl font-bold text-foreground">Key Highlights</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {subService.keyPoints.map((point, idx) => {
                    const HlIcon = subPageIcons[idx % subPageIcons.length];
                    return (
                      <motion.div
                        key={point}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-start gap-3 bg-card border border-border rounded-xl p-4 hover:border-primary/40 hover:shadow-md transition-all duration-200 group"
                      >
                        <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                          <HlIcon className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-sm font-semibold text-foreground leading-snug">{point}</span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-border">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <PackageCheck className="w-4 h-4 text-primary" />
                  </div>
                  <h2 className="font-heading text-3xl font-bold text-foreground">Deliverables</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {subService.deliverables.map((d, idx) => (
                    <motion.div
                      key={d}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.04 }}
                      className="flex items-center gap-3 px-4 py-3.5 bg-gradient-to-r from-primary/8 to-primary/4 border border-primary/15 rounded-xl hover:border-primary/40 hover:from-primary/12 transition-all"
                    >
                      <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                        <CheckCircle className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-foreground">{d}</span>
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>

              {service.subServices.filter((ss) => ss.slug !== subService.slug).length > 0 && (
                <AnimatedSection>
                  <div className="flex items-center gap-3 mb-5 pb-3 border-b border-border">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      {SERVICE_ICONS[service.slug]}
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-foreground">
                      Other {service.shortName} Services
                    </h2>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    {service.subServices
                      .filter((ss) => ss.slug !== subService.slug)
                      .map((ss, idx) => {
                        const ssImg = (SERVICE_GENERIC_SUB_IMAGES[service.slug] ?? [])[idx % Math.max(1, (SERVICE_GENERIC_SUB_IMAGES[service.slug] ?? []).length)];
                        const SsIcon = SERVICE_SCATTER_ICONS[service.slug]?.[idx % (SERVICE_SCATTER_ICONS[service.slug]?.length ?? 1)] ?? CheckCircle;
                        return (
                          <Link
                            key={ss.slug}
                            href={`/services/${service.slug}/${ss.slug}`}
                            className="group block rounded-xl overflow-hidden border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                          >
                            <div className="relative aspect-[16/8] overflow-hidden bg-[#060d17]">
                              {ssImg && (
                                <img src={ssImg} alt={ss.name} loading="lazy"
                                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                              )}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                              <div className="absolute top-2 left-2 inline-flex items-center gap-1 px-2 py-0.5 bg-primary/90 text-white text-[9px] font-bold uppercase tracking-wider rounded-full">
                                <SsIcon className="w-2.5 h-2.5" /> Service
                              </div>
                              <div className="absolute bottom-2 left-3 right-3">
                                <p className="font-heading text-white text-sm font-bold leading-tight">{ss.name}</p>
                              </div>
                            </div>
                            <div className="p-3 flex items-center justify-between">
                              <p className="text-xs text-muted-foreground line-clamp-1 flex-1">{ss.tagline}</p>
                              <ArrowRight className="w-3.5 h-3.5 text-primary shrink-0 ml-2 group-hover:translate-x-0.5 transition-transform" />
                            </div>
                          </Link>
                        );
                      })}
                  </div>
                </AnimatedSection>
              )}
                </>
              )}
            </div>

            {isSoftwareAI ? (
              <ServicePageSidebar
                service={service}
                isSoftwareAI
                quoteHint={`Speak with our ${subService.name} specialists and receive a tailored proposal for your project.`}
              />
            ) : (
            <div className="space-y-5">
              {/* STICKY BLOCK */}
              <div className="sticky top-24 space-y-5 z-10">
                <AnimatedSection className="bg-primary text-white rounded-2xl p-6 shadow-xl shadow-primary/20">
                  <h3 className="font-heading text-xl font-bold mb-2">Get a Quote</h3>
                  <p className="text-white/80 text-sm mb-4 leading-relaxed">Speak with our {service.shortName} specialists today.</p>
                  <Button asChild className="w-full bg-white text-primary hover:bg-white/90 rounded-lg font-bold mb-3">
                    <Link href="/contact">Request a Quote</Link>
                  </Button>
                  <a href="tel:+15551234567" className="flex items-center justify-center gap-2 text-white/70 text-xs hover:text-white transition-colors">
                    <Phone className="w-3.5 h-3.5" /> Schedule a Call
                  </a>
                </AnimatedSection>

                {/* KEY STATS */}
                {SERVICE_SIDEBAR_STATS[service.slug] && (
                  <AnimatedSection className="bg-card border border-border rounded-2xl p-6">
                    <h4 className="font-semibold text-foreground mb-4 text-xs uppercase tracking-widest flex items-center gap-2">
                      <Gauge className="w-3.5 h-3.5 text-primary" /> Key Metrics
                    </h4>
                    <div className="space-y-3">
                      {SERVICE_SIDEBAR_STATS[service.slug].map((stat) => {
                        const StatIcon = stat.icon;
                        return (
                          <div key={stat.label} className="flex items-center gap-3 p-2.5 bg-secondary/40 rounded-xl">
                            <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                              <StatIcon className="w-4 h-4 text-primary" />
                            </div>
                            <div>
                              <p className="font-bold text-foreground text-lg leading-none">{stat.value}</p>
                              <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </AnimatedSection>
                )}
              </div>

              {/* NON-STICKY ??fills vertical space */}

              {/* PARENT SERVICE */}
              <AnimatedSection className="bg-card border border-border rounded-2xl p-6">
                <h4 className="font-semibold text-foreground mb-4 text-xs uppercase tracking-widest flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-primary" /> Parent Service
                </h4>
                <Link href={`/services/${service.slug}`} className="flex items-center gap-3 p-3 bg-muted rounded-xl hover:bg-primary/10 transition-colors group">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    {SERVICE_ICONS[service.slug]}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{service.name}</p>
                    <p className="text-xs text-muted-foreground">{service.subServices.length} sub-services</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground ml-auto group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                </Link>
              </AnimatedSection>

              {/* KEY STANDARDS */}
              {SERVICE_STANDARDS[service.slug] && (
                <AnimatedSection className="bg-card border border-border rounded-2xl p-6">
                  <h4 className="font-semibold text-foreground mb-4 text-xs uppercase tracking-widest flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-primary" /> Applicable Standards
                  </h4>
                  <div className="space-y-2.5">
                    {SERVICE_STANDARDS[service.slug].map((std) => (
                      <div key={std} className="flex items-center gap-2.5 group">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                          <CheckCircle className="w-3 h-3 text-primary group-hover:text-white transition-colors" />
                        </div>
                        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{std}</span>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              )}

              {/* DELIVERABLES QUICK COUNT */}
              <AnimatedSection className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-6">
                <h4 className="font-semibold text-foreground mb-4 text-xs uppercase tracking-widest flex items-center gap-2">
                  <PackageCheck className="w-3.5 h-3.5 text-primary" /> What You'll Receive
                </h4>
                <div className="space-y-2">
                  {subService.deliverables.map((d) => (
                    <div key={d} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {d}
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* ALL SERVICES */}
              <AnimatedSection className="bg-card border border-border rounded-2xl p-6">
                <h4 className="font-semibold text-foreground mb-4 text-xs uppercase tracking-widest flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5 text-primary" /> All Services
                </h4>
                <div className="flex flex-col gap-0.5">
                  {ALL_SERVICES.map((s) => (
                    <Link key={s.slug} href={`/services/${s.slug}`} className="group flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors py-1.5 border-b border-border/60 last:border-0">
                      <div className="w-6 h-6 bg-primary/8 rounded-md flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                        {SERVICE_ICONS[s.slug]}
                      </div>
                      <span className="flex-1">{s.shortName}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                    </Link>
                  ))}
                </div>
              </AnimatedSection>

              {/* FINAL CTA */}
              {!isSoftwareAI && (
              <AnimatedSection className="bg-[#020617] rounded-2xl p-6 text-white border border-primary/20">
                <h4 className="font-heading text-base font-bold mb-2">Ready to Start?</h4>
                <p className="text-white/60 text-xs leading-relaxed mb-4">Our {service.shortName} team is ready for a free initial consultation to scope your project.</p>
                <div className="space-y-2">
                  <Button asChild size="sm" className="w-full rounded-lg bg-primary hover:bg-primary/90">
                    <Link href="/contact"><Mail className="w-3.5 h-3.5 mr-2" /> Send an Enquiry</Link>
                  </Button>
                  <Button asChild size="sm" variant="outline" className="w-full rounded-lg border-white/20 text-white hover:bg-white/10 hover:text-white">
                    <Link href="/about"><Users className="w-3.5 h-3.5 mr-2" /> Meet the Team</Link>
                  </Button>
                </div>
              </AnimatedSection>
              )}
            </div>
            )}

          </div>
        </div>
      </section>

      {isSoftwareAI && (
        <section className="py-14 bg-background border-t border-border">
          <div className={containerClass}>
            <AnimatedSection className="w-full bg-[#020617] rounded-2xl p-8 md:p-10 text-white border border-cyan-500/25 shadow-xl">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                <div className="max-w-2xl">
                  <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">Ready to Start?</h2>
                  <p className="text-white/65 text-sm md:text-base leading-relaxed">
                    Our {service.shortName} team is ready for a free initial consultation to scope your {subService.name.toLowerCase()} project. We respond within one business day.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto lg:min-w-[340px] shrink-0">
                  <Button asChild size="lg" className="flex-1 rounded-lg bg-cyan-400 text-slate-900 hover:bg-cyan-300 font-semibold">
                    <Link href="/contact"><Mail className="w-4 h-4 mr-2" /> Send an Enquiry</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="flex-1 rounded-lg border-white/25 text-white hover:bg-white/10 hover:text-white">
                    <Link href="/about"><Users className="w-4 h-4 mr-2" /> Meet the Team</Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

    </div>
  );
}
