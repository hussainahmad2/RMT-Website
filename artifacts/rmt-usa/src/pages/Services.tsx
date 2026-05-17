import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import {
  Cpu, Shield, Brain, FlaskConical, CircuitBoard,
  Settings2, Pill, Factory, CheckCircle, ArrowRight, ArrowLeft, ChevronRight,
  Search, ClipboardList, Wrench, TestTube2, Rocket,
  FileSearch, Target, Layers, Microscope, PackageCheck, Truck,
  MonitorSmartphone, GitBranch, ShieldCheck, FlaskRound, Boxes, BarChart3,
  ScanLine, Zap, Cable, Radio, Award, Cog, ScrollText, TrendingUp, ClipboardCheck
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/lib/seo";
import { ALL_SERVICES, type ServiceData, type SubServiceData } from "@/data/services";

/* ---- Per-service methodology steps ---- */
interface MethodologyStep {
  title: string;
  desc: string;
  points: string[];
  Icon: React.ElementType;
}

const SERVICE_METHODOLOGY: Record<string, MethodologyStep[]> = {
  "product-design": [
    { title: "Design Brief & Inputs", Icon: FileSearch, desc: "Capture user needs, intended use, regulatory pathway, and technical constraints into a formal Design Input specification.", points: ["User needs analysis", "Regulatory classification", "Design input specification", "Risk-based requirements"] },
    { title: "Concept Design", Icon: Target, desc: "Generate and evaluate multiple design concepts against the brief using structured design reviews and selection matrices.", points: ["Concept generation workshops", "Design trade-off analysis", "Feasibility modelling", "Concept selection review"] },
    { title: "CAD Modelling & PCB Design", Icon: Layers, desc: "Convert selected concept into detailed 3D CAD and/or PCB designs with full DFM and DFA optimisation.", points: ["SolidWorks / CATIA / Fusion 360", "PCB layout (Altium, KiCad)", "FEA & simulation", "Design for Manufacturability review"] },
    { title: "Prototyping", Icon: Wrench, desc: "Produce physical prototypes using the optimal manufacturing technology for each development stage.", points: ["3D printing (SLA / SLS / FDM)", "CNC machining", "PCB assembly", "Functional prototype validation"] },
    { title: "Verification & Validation", Icon: TestTube2, desc: "Execute formal V&V testing protocols against design inputs, capturing objective evidence for the Design History File.", points: ["Test protocol authoring", "Dimensional & functional testing", "Environmental stress testing", "V&V report generation"] },
    { title: "Design Freeze & Transfer", Icon: PackageCheck, desc: "Lock the final design, complete the Design History File, and transfer all documentation for regulatory submission and manufacturing.", points: ["Design freeze review", "DHF completion", "Manufacturing transfer package", "Regulatory submission readiness"] },
  ],
  "regulatory-compliance": [
    { title: "Regulatory Gap Assessment", Icon: FileSearch, desc: "Evaluate your current device documentation and QMS against the applicable regulatory requirements to identify gaps and risk areas.", points: ["FDA 510(k) / PMA gap analysis", "EU MDR / IVDR assessment", "ISO 13485 QMS gap review", "Prioritised action plan"] },
    { title: "Regulatory Strategy", Icon: Target, desc: "Define the optimal regulatory pathway, classification strategy, and submission roadmap tailored to your device and target markets.", points: ["Classification determination", "Pathway selection (510k / PMA / De Novo)", "Multi-jurisdiction strategy", "Timeline & milestone planning"] },
    { title: "Technical Documentation", Icon: ScrollText, desc: "Prepare comprehensive technical files, clinical evaluations, risk management files, and all supporting documentation.", points: ["Technical File / 510(k) dossier", "Clinical Evaluation Report (CER)", "Biological Evaluation Report (BER)", "ISO 14971 Risk Management File"] },
    { title: "QMS Implementation", Icon: ShieldCheck, desc: "Build or align your Quality Management System with ISO 13485 and regulatory requirements, including SOPs and procedures.", points: ["ISO 13485 QMS framework", "SOP & procedure writing", "Document control system", "Training programme"] },
    { title: "Submission & Review", Icon: Rocket, desc: "Prepare, compile, and submit regulatory dossiers, managing authority queries and additional information requests.", points: ["eCTD / eSTAR submission", "Notified body liaison", "FDA query management", "Deficiency response authoring"] },
    { title: "Approval & Post-Market", Icon: Award, desc: "Secure regulatory approval and establish post-market surveillance systems to maintain ongoing compliance.", points: ["Approval management", "PMS plan implementation", "Vigilance reporting setup", "Annual safety update reports"] },
  ],
  "software-ai": [
    { title: "Software Requirements", Icon: ClipboardList, desc: "Define the software requirements specification aligned with IEC 62304, including intended use, safety classification, and functional requirements.", points: ["IEC 62304 safety class determination", "Software requirements specification (SRS)", "SOUP identification", "Intended use & indications"] },
    { title: "Architecture & Design", Icon: Layers, desc: "Design a robust, scalable software architecture with full traceability between requirements, architecture, and detailed design.", points: ["System & software architecture", "Module decomposition", "Interface design", "Design traceability matrix"] },
    { title: "Development & AI Training", Icon: GitBranch, desc: "Agile development of software modules and AI/ML models, with continuous integration and automated testing throughout.", points: ["Full-stack development", "AI/ML model training & validation", "Unit & integration testing", "CI/CD pipeline"] },
    { title: "Software V&V Testing", Icon: MonitorSmartphone, desc: "Execute rigorous software verification and validation testing, including system-level testing, usability, and cybersecurity assessment.", points: ["System test execution", "Usability engineering (IEC 62366)", "Cybersecurity testing", "Regression testing"] },
    { title: "SaMD Regulatory Submission", Icon: ShieldCheck, desc: "Prepare IEC 62304-compliant software documentation package for inclusion in FDA or EU MDR regulatory submissions.", points: ["Software description document", "Anomaly reports & resolution", "Labelling & IFU", "SaMD regulatory strategy"] },
    { title: "Deployment & Maintenance", Icon: Rocket, desc: "Deploy the validated software with a formal release process, and maintain a structured problem resolution and change management process post-launch.", points: ["Release management", "Problem resolution (PRP)", "Change management procedure", "Post-market software updates"] },
  ],
  "quality-testing": [
    { title: "Test Strategy & Planning", Icon: Target, desc: "Define the overall testing strategy, scope, and approach based on device risk classification and regulatory requirements.", points: ["Test strategy development", "Standards applicability analysis", "Risk-based test prioritisation", "Resource & timeline planning"] },
    { title: "Protocol Design", Icon: ClipboardList, desc: "Author detailed test protocols with acceptance criteria, test methods, and pass/fail criteria traceable to design inputs.", points: ["IQ / OQ / PQ protocols", "Test method development", "Acceptance criteria definition", "Statistical sampling plans"] },
    { title: "Test Execution", Icon: FlaskConical, desc: "Execute test protocols in qualified laboratory environments, with full data capture and traceability of equipment and materials.", points: ["Mechanical & electrical testing", "Environmental & stress testing", "Biocompatibility testing coordination", "IEC 60601 / ISO 11135 testing"] },
    { title: "Data Analysis & CAPA", Icon: BarChart3, desc: "Analyse test results against acceptance criteria, investigate failures, and implement corrective actions before re-test.", points: ["Statistical data analysis", "Failure mode investigation", "Root cause analysis", "Corrective action planning"] },
    { title: "Validation Reporting", Icon: ScrollText, desc: "Compile comprehensive test reports with full data packages, traceability matrices, and regulatory-submission-ready summaries.", points: ["Test summary reports", "Traceability matrix completion", "Deviation reporting", "V&V summary for DHF"] },
    { title: "Audit Readiness Review", Icon: ShieldCheck, desc: "Final review of all testing documentation to ensure compliance, completeness, and readiness for regulatory submission or notified body audit.", points: ["Documentation completeness check", "Cross-reference verification", "Gap remediation", "Submission package assembly"] },
  ],
  "electronics-firmware": [
    { title: "Requirements & Safety Analysis", Icon: FileSearch, desc: "Define hardware and firmware requirements, classify software safety levels per IEC 62304, and complete initial FMEA for the electronics subsystem.", points: ["Hardware requirements spec", "IEC 62304 safety classification", "System-level FMEA", "EMC & safety standards mapping"] },
    { title: "Schematic Design", Icon: CircuitBoard, desc: "Develop full electronic schematics with component selection, power analysis, and EMC pre-compliance design principles applied from the start.", points: ["Altium / KiCad schematics", "Component selection & BOM", "Power budget analysis", "EMC pre-compliance design"] },
    { title: "PCB Layout & Firmware Dev", Icon: Layers, desc: "Execute PCB layout with signal integrity and thermal analysis, and develop firmware with full IEC 62304 software lifecycle documentation.", points: ["Multi-layer PCB layout", "Signal integrity analysis", "Firmware architecture", "Unit & integration testing"] },
    { title: "Hardware Integration Testing", Icon: Zap, desc: "Build and test prototype hardware assemblies, debug hardware-firmware interactions, and perform in-circuit functional verification.", points: ["Prototype build & bring-up", "Hardware-firmware integration debug", "Functional verification testing", "Oscilloscope & logic analyser analysis"] },
    { title: "EMC & Safety Testing", Icon: Radio, desc: "Conduct pre-compliance and formal EMC testing, and perform IEC 60601-1 electrical safety testing at accredited laboratories.", points: ["IEC 60601-1 safety testing", "EMC pre-compliance (radiated/conducted)", "Formal EMC certification testing", "Creepage & clearance verification"] },
    { title: "Certification & Transfer", Icon: Award, desc: "Complete all testing documentation, prepare regulatory electronics package, and transfer design files and firmware to manufacturing.", points: ["EMC test reports", "Safety test certification", "IEC 62304 software file closure", "Manufacturing design transfer"] },
  ],
  "turnkey-commissioning": [
    { title: "Project Scoping & Planning", Icon: ClipboardList, desc: "Define the full project scope, deliverables, milestones, and risk register for the turnkey system delivery.", points: ["Detailed scope of work", "WBS & milestone schedule", "Risk register", "Resource allocation plan"] },
    { title: "Engineering Design", Icon: Cog, desc: "Complete detailed engineering design for all system elements — mechanical, electrical, software, and process — with design reviews at key milestones.", points: ["Mechanical & electrical design", "Process flow diagrams (PFDs)", "P&IDs", "Design review gates"] },
    { title: "Procurement & Fabrication", Icon: Boxes, desc: "Source, qualify, and procure all equipment, materials, and components from qualified suppliers, with incoming inspection and traceability.", points: ["Supplier qualification", "Purchase order management", "Incoming inspection", "Component traceability records"] },
    { title: "Factory Acceptance Testing", Icon: PackageCheck, desc: "Assemble and fully test the system at our facility before shipment, executing a comprehensive FAT against agreed acceptance criteria.", points: ["System integration & build", "FAT protocol execution", "Punch list management", "Customer witnessed testing"] },
    { title: "Site Commissioning", Icon: Wrench, desc: "Install and commission the system at your facility, performing SAT and process qualification to demonstrate performance at site conditions.", points: ["Site installation management", "Site Acceptance Testing (SAT)", "IQ / OQ / PQ execution", "Process performance qualification"] },
    { title: "Handover & Training", Icon: Truck, desc: "Complete project documentation handover, train your operators and maintenance team, and establish ongoing support arrangements.", points: ["As-built documentation", "O&M manuals", "Operator & technician training", "Warranty & support agreement"] },
  ],
  "pharmaceutical": [
    { title: "API Characterisation", Icon: Microscope, desc: "Fully characterise the active pharmaceutical ingredient, including physicochemical properties, stability drivers, and compatibility profile.", points: ["Physicochemical profiling", "Stability indication testing", "Excipient compatibility screening", "Analytical method development"] },
    { title: "Formulation Development", Icon: FlaskRound, desc: "Design and optimise the pharmaceutical formulation using QbD principles, with systematic evaluation of critical formulation attributes.", points: ["QbD formulation approach", "Design of Experiments (DoE)", "Critical Quality Attribute (CQA) definition", "Prototype formulation batches"] },
    { title: "Analytical Development", Icon: ScanLine, desc: "Develop and validate analytical methods for product characterisation, release testing, and stability studies.", points: ["HPLC & UV method development", "ICH Q2(R1) validation", "Reference standard qualification", "Stability-indicating methods"] },
    { title: "Stability Studies", Icon: TrendingUp, desc: "Conduct ICH-guideline stability studies (accelerated, intermediate, and long-term) to define shelf life and storage conditions.", points: ["ICH Q1A(R2) stability design", "Accelerated & real-time storage", "Degradation product profiling", "Shelf life determination"] },
    { title: "Process Scale-Up & Validation", Icon: Cog, desc: "Scale the manufacturing process from lab to pilot to commercial scale with formal process validation studies.", points: ["Technology transfer protocol", "Process characterisation studies", "Process Validation (PV) batches", "Continued Process Verification (CPV)"] },
    { title: "Regulatory Submission", Icon: ScrollText, desc: "Prepare the pharmaceutical CMC section for IND, NDA/ANDA, IMPD, or MA submissions with full regulatory strategy guidance.", points: ["CMC section authoring", "IND / NDA / ANDA support", "IMPD & MA submissions", "Deficiency response management"] },
  ],
  "contract-manufacturing": [
    { title: "Design Transfer", Icon: FileSearch, desc: "Formally transfer the device design from your engineering team to our manufacturing facility, establishing all process parameters and documentation.", points: ["Design transfer protocol", "Drawing & specification review", "Process flow development", "Manufacturing procedure authoring"] },
    { title: "Supplier & Material Qualification", Icon: ClipboardCheck, desc: "Qualify all raw material suppliers and components against approved specifications, ensuring a robust and traceable supply chain.", points: ["Supplier qualification audits", "Approved supplier list (ASL)", "Incoming inspection procedures", "Material traceability system"] },
    { title: "Process Validation", Icon: Cog, desc: "Validate all critical manufacturing processes using IQ / OQ / PQ methodology to ensure consistent product quality.", points: ["Installation Qualification (IQ)", "Operational Qualification (OQ)", "Performance Qualification (PQ)", "Cpk & process capability analysis"] },
    { title: "Pilot Production Build", Icon: Boxes, desc: "Run an initial pilot production batch to verify process robustness and identify any issues before full commercial production begins.", points: ["Pilot batch execution", "First Article Inspection (FAI)", "In-process monitoring", "Yield & defect analysis"] },
    { title: "Full-Scale Manufacturing", Icon: Factory, desc: "Execute commercial-scale manufacturing under a fully documented, ISO 13485-certified quality management system with complete batch traceability.", points: ["Batch manufacturing records (BMR)", "In-process quality controls", "Environmental monitoring", "Certificate of Conformance"] },
    { title: "Release & Post-Market Support", Icon: PackageCheck, desc: "Perform final product release testing, labelling, packaging, and support ongoing post-market surveillance activities.", points: ["Final product release testing", "Labelling & packaging verification", "Complaint handling integration", "Post-market surveillance support"] },
  ],
};

/* ---- Vertical Methodology Timeline Component ---- */
function ServiceMethodology({ slug }: { slug: string }) {
  const steps = SERVICE_METHODOLOGY[slug];
  if (!steps || steps.length === 0) return null;

  return (
    <AnimatedSection>
      <h2 className="font-heading text-3xl font-bold text-foreground mb-2 pb-3 border-b border-border">Our Methodology</h2>
      <p className="text-muted-foreground text-sm mb-8">A structured, milestone-driven approach proven to de-risk your project at every stage.</p>

      <div className="relative">
        {/* Vertical connecting line */}
        <div className="absolute left-[1.6rem] top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-primary/40 to-transparent" />

        <div className="space-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="relative flex gap-6 pb-8 last:pb-0 group"
            >
              {/* Step circle */}
              <div className="relative shrink-0 z-10">
                <div className={`w-14 h-14 rounded-full border-2 flex flex-col items-center justify-center transition-all duration-300
                  ${i === 0 ? "bg-primary border-primary text-white shadow-lg shadow-primary/30" : "bg-card border-border text-primary group-hover:border-primary group-hover:bg-primary/5"}`}>
                  <step.Icon className="w-5 h-5" />
                  <span className="text-[9px] font-bold mt-0.5 opacity-60">{String(i + 1).padStart(2, "0")}</span>
                </div>
              </div>

              {/* Content card */}
              <div className="flex-1 bg-card border border-border rounded-xl p-5 group-hover:border-primary/40 group-hover:shadow-sm transition-all duration-300 mt-1">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h4 className="font-heading font-bold text-foreground text-base group-hover:text-primary transition-colors">{step.title}</h4>
                  <span className="text-[10px] font-bold text-primary/60 bg-primary/8 px-2 py-0.5 rounded-full shrink-0 border border-primary/15">Step {i + 1}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">{step.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {step.points.map((pt) => (
                    <span key={pt} className="inline-flex items-center gap-1 text-xs text-muted-foreground bg-secondary/60 px-2.5 py-1 rounded-full border border-border/60">
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

/* ---- Map slug → icon ---- */
const SERVICE_ICONS: Record<string, React.ReactNode> = {
  "product-design": <Cpu className="w-6 h-6" />,
  "regulatory-compliance": <Shield className="w-6 h-6" />,
  "software-ai": <Brain className="w-6 h-6" />,
  "quality-testing": <FlaskConical className="w-6 h-6" />,
  "electronics-firmware": <CircuitBoard className="w-6 h-6" />,
  "turnkey-commissioning": <Settings2 className="w-6 h-6" />,
  "pharmaceutical": <Pill className="w-6 h-6" />,
  "contract-manufacturing": <Factory className="w-6 h-6" />,
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

/* ======================================================
   SERVICES OVERVIEW
====================================================== */
export function ServicesOverview() {
  useSEO({
    title: "Our Services",
    description: "RMT Medical Technologies provides comprehensive medical device services — product design, regulatory compliance, software & AI, quality testing, electronics, pharmaceutical development, and contract manufacturing.",
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
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10 py-24">
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
              {["8 Core Services", "End-to-End Solutions", "Global Regulatory Expertise"].map((b) => (
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
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">How We Work</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Our Proven Process</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">From first consultation to regulatory approval and beyond — a structured, milestone-driven approach that de-risks your project at every stage.</p>
          </AnimatedSection>

          {/* Horizontal connected timeline */}
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent" style={{ top: "2.5rem" }} />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 relative">
              {[
                { step: "01", title: "Discovery", Icon: Search, desc: "Deep-dive into your project goals, regulatory pathway, market requirements, and technical constraints.", color: "from-blue-500/10 to-primary/10" },
                { step: "02", title: "Strategy", Icon: ClipboardList, desc: "We define a detailed project plan — scope, timeline, regulatory strategy, and risk mitigation roadmap.", color: "from-primary/10 to-indigo-500/10" },
                { step: "03", title: "Design & Build", Icon: Wrench, desc: "Engineering, software, and regulatory teams work in parallel to deliver your device design and documentation.", color: "from-indigo-500/10 to-violet-500/10" },
                { step: "04", title: "Validate", Icon: TestTube2, desc: "Rigorous V&V testing, risk management closure, and quality system review ahead of regulatory submission.", color: "from-violet-500/10 to-primary/10" },
                { step: "05", title: "Approve & Scale", Icon: Rocket, desc: "Regulatory submission, approval management, and manufacturing scale-up for successful market launch.", color: "from-primary/10 to-blue-500/10" },
              ].map((phase, i) => (
                <motion.div
                  key={phase.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative flex flex-col items-center text-center group"
                >
                  {/* Number circle */}
                  <div className="relative mb-4">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${phase.color} border-2 border-primary/25 flex flex-col items-center justify-center shadow-lg group-hover:border-primary group-hover:shadow-primary/20 transition-all duration-300`}>
                      <phase.Icon className="w-7 h-7 text-primary mb-0.5" />
                      <span className="text-[10px] font-bold text-primary/70">{phase.step}</span>
                    </div>
                    {/* Connector dot for desktop line */}
                    <div className="hidden lg:block absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background" />
                  </div>
                  <h3 className="font-heading text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{phase.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed max-w-[180px]">{phase.desc}</p>
                </motion.div>
              ))}
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
        <div className="container mx-auto px-4 md:px-6">
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
        <div className="container mx-auto px-4 md:px-6 text-center">
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
  "product-design": [
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
  ],
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
  "electronics-firmware": [
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
    "https://images.unsplash.com/photo-1568952433726-3896e3881c65?w=800&q=80",
  ],
  "contract-manufacturing": [
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
    "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=80",
    "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80",
  ],
  "pharmaceutical": [
    "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80",
    "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80",
    "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
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

/* ======================================================
   SERVICE DETAIL
====================================================== */
export function ServiceDetail({ params }: { params: { slug: string } }) {
  const service = ALL_SERVICES.find((s) => s.slug === params.slug);

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

  return (
    <div className="bg-background min-h-screen pt-20">

      {/* UNIQUE HERO per service */}
      <section className="relative py-20 bg-[#060d17] overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/10 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-primary/5 translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        <ServiceBgIcon slug={service.slug} />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <AnimatedSection>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-white/50 mb-8">
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">{service.name}</span>
            </nav>

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
          </AnimatedSection>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">

              <AnimatedSection>
                <h2 className="font-heading text-3xl font-bold text-foreground mb-5 pb-3 border-b border-border">Overview</h2>
                <div className="space-y-4">
                  {service.overview.map((para, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed">{para}</p>
                  ))}
                </div>
              </AnimatedSection>

              {/* METHODOLOGY TIMELINE */}
              <ServiceMethodology slug={service.slug} />

              {/* SUB-SERVICES — each is a clickable card linking to its own page */}
              <AnimatedSection>
                <h2 className="font-heading text-3xl font-bold text-foreground mb-5 pb-3 border-b border-border">Services Included</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.subServices.map((sub, i) => (
                    <motion.div
                      key={sub.slug}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                    >
                      <Link
                        href={`/services/${service.slug}/${sub.slug}`}
                        className="group flex items-start gap-3 bg-card border border-border rounded-xl p-4 hover:border-primary/50 hover:shadow-md transition-all duration-200"
                      >
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary group-hover:text-white transition-all">
                          <CheckCircle className="w-4 h-4 text-primary group-hover:text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors leading-snug">{sub.name}</p>
                          <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{sub.tagline}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>

              {/* CAPABILITIES */}
              <AnimatedSection>
                <h2 className="font-heading text-3xl font-bold text-foreground mb-5 pb-3 border-b border-border">Core Capabilities</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {service.capabilities.map((cap) => (
                    <div key={cap} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
                      <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                      <span className="text-sm text-muted-foreground">{cap}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* WHY RMT */}
              <AnimatedSection>
                <h2 className="font-heading text-3xl font-bold text-foreground mb-5 pb-3 border-b border-border">Why Choose RMT</h2>
                <div className="grid sm:grid-cols-3 gap-5">
                  {service.whyRMT.map((item) => (
                    <div key={item.title} className="bg-card border border-border rounded-xl p-5">
                      <div className="w-8 h-8 bg-primary/10 rounded-md flex items-center justify-center mb-3">
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </div>
                      <h4 className="font-semibold text-foreground text-sm mb-2">{item.title}</h4>
                      <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

            </div>

            {/* SIDEBAR */}
            <div>
              <div className="sticky top-24 space-y-5">
                <AnimatedSection className="bg-primary text-white rounded-2xl p-6">
                  <h3 className="font-heading text-xl font-bold mb-3">Get a Quote</h3>
                  <p className="text-white/80 text-sm mb-5 leading-relaxed">Discuss your requirements with our specialists and receive a tailored proposal.</p>
                  <Button asChild className="w-full bg-white text-primary hover:bg-white/90 rounded-lg font-bold">
                    <Link href="/contact">Request a Quote</Link>
                  </Button>
                </AnimatedSection>

                <AnimatedSection className="bg-card border border-border rounded-2xl p-6">
                  <h4 className="font-semibold text-foreground mb-4 text-xs uppercase tracking-widest">Other Services</h4>
                  <div className="flex flex-col gap-1">
                    {ALL_SERVICES.filter((s) => s.slug !== service.slug).map((s) => (
                      <Link key={s.slug} href={`/services/${s.slug}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors py-1.5 border-b border-border last:border-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                        {s.shortName}
                      </Link>
                    ))}
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

/* ======================================================
   SUB-SERVICE DETAIL
====================================================== */
export function SubServiceDetail({ params }: { params: { slug: string; subSlug: string } }) {
  const service = ALL_SERVICES.find((s) => s.slug === params.slug);
  const subService = service?.subServices.find((ss) => ss.slug === params.subSlug);

  useSEO({
    title: subService ? `${subService.name} — ${service?.shortName}` : "Not Found",
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

  return (
    <div className="bg-background min-h-screen pt-20">

      {/* UNIQUE HERO */}
      <section className="relative py-20 bg-[#060d17] overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-primary/10 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-primary/5 translate-y-1/3 -translate-x-1/4 pointer-events-none" />
        <ServiceBgIcon slug={service.slug} />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-8 flex-wrap">
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href={`/services/${service.slug}`} className="hover:text-white transition-colors">{service.shortName}</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{subService.name}</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5 mb-6">
              <div className="w-4 h-4 text-primary">{SERVICE_ICONS[service.slug]}</div>
              <span className="text-primary text-xs font-bold uppercase tracking-widest">{service.shortName}</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">{subService.name}</h1>
            <p className="text-white/70 text-xl leading-relaxed mb-8">{subService.tagline}</p>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="rounded-lg">
                <Link href="/contact">Get a Quote <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button asChild variant="outline" className="rounded-lg border-white/20 text-white hover:bg-white/10">
                <Link href={`/services/${service.slug}`}><ArrowLeft className="mr-2 w-4 h-4" /> {service.shortName}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-12">

            <div className="lg:col-span-2 space-y-10">

              {/* Hero image for sub-service */}
              <AnimatedSection>
                <div className="rounded-2xl overflow-hidden shadow-lg aspect-video mb-8">
                  <img
                    src={service.heroImage}
                    alt={subService.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="font-heading text-3xl font-bold text-foreground mb-5 pb-3 border-b border-border">Overview</h2>
                {subService.overview.map((para, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed mb-4">{para}</p>
                ))}
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="font-heading text-3xl font-bold text-foreground mb-5 pb-3 border-b border-border">Key Highlights</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {subService.keyPoints.map((point) => (
                    <div key={point} className="flex items-start gap-3 bg-card border border-border rounded-xl p-4">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-foreground">{point}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="font-heading text-3xl font-bold text-foreground mb-5 pb-3 border-b border-border">Deliverables</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {subService.deliverables.map((d) => (
                    <div key={d} className="flex items-center gap-3 px-4 py-3 bg-primary/5 border border-primary/15 rounded-lg">
                      <ArrowRight className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm font-medium text-foreground">{d}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* OTHER SUB-SERVICES in this service */}
              <AnimatedSection>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-5 pb-3 border-b border-border">
                  Other {service.shortName} Services
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {service.subServices
                    .filter((ss) => ss.slug !== subService.slug)
                    .map((ss) => (
                      <Link
                        key={ss.slug}
                        href={`/services/${service.slug}/${ss.slug}`}
                        className="group flex items-start gap-3 bg-card border border-border rounded-xl p-4 hover:border-primary/40 transition-all"
                      >
                        <div className="w-7 h-7 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                          <CheckCircle className="w-3.5 h-3.5 text-primary group-hover:text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">{ss.name}</p>
                          <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{ss.tagline}</p>
                        </div>
                      </Link>
                    ))}
                </div>
              </AnimatedSection>
            </div>

            {/* SIDEBAR */}
            <div>
              <div className="sticky top-24 space-y-5">
                <AnimatedSection className="bg-primary text-white rounded-2xl p-6">
                  <h3 className="font-heading text-xl font-bold mb-3">Get a Quote</h3>
                  <p className="text-white/80 text-sm mb-5 leading-relaxed">Speak with our {service.shortName} specialists today.</p>
                  <Button asChild className="w-full bg-white text-primary hover:bg-white/90 rounded-lg font-bold">
                    <Link href="/contact">Request a Quote</Link>
                  </Button>
                </AnimatedSection>

                <AnimatedSection className="bg-card border border-border rounded-2xl p-6">
                  <h4 className="font-semibold text-foreground mb-4 text-xs uppercase tracking-widest">Parent Service</h4>
                  <Link href={`/services/${service.slug}`} className="flex items-center gap-3 p-3 bg-muted rounded-xl hover:bg-primary/10 transition-colors group">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      {SERVICE_ICONS[service.slug]}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{service.shortName}</p>
                      <p className="text-xs text-muted-foreground">{service.subServices.length} services</p>
                    </div>
                  </Link>
                </AnimatedSection>

                <AnimatedSection className="bg-card border border-border rounded-2xl p-6">
                  <h4 className="font-semibold text-foreground mb-4 text-xs uppercase tracking-widest">All Services</h4>
                  {ALL_SERVICES.map((s) => (
                    <Link key={s.slug} href={`/services/${s.slug}`} className="flex items-center gap-2 text-sm py-1.5 border-b border-border last:border-0 text-muted-foreground hover:text-primary transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                      {s.shortName}
                    </Link>
                  ))}
                </AnimatedSection>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
