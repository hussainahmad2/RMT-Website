import { MANUFACTURING_HERO_IMAGES, MANUFACTURING_IMAGES } from "./manufacturing-content";

export const PRODUCTION_EQUIPMENT_HERO_IMAGES = [
  MANUFACTURING_IMAGES.facility2,
  MANUFACTURING_IMAGES.cleanroom2,
  MANUFACTURING_IMAGES.facility1,
  MANUFACTURING_IMAGES.cleanroom1,
  MANUFACTURING_IMAGES.facility3,
  ...MANUFACTURING_HERO_IMAGES.slice(0, 4),
] as const;

export const PRODUCTION_EQUIPMENT_KEY_METRICS = [
  { label: "Custom Equipment Design", value: "Bespoke" },
  { label: "IQ / OQ / PQ", value: "Full Qualification" },
  { label: "Cleanroom Builds", value: "ISO 5–8" },
  { label: "Engineering Support", value: "End-to-End" },
] as const;

export const PRODUCTION_EQUIPMENT_INTRO = [
  "The precision, reliability, and regulatory compliance of a medical device begins long before the device itself is assembled. It begins with the equipment that makes it. At Revive Medical Technologies, we design, develop, and deliver purpose-built manufacturing equipment for the medical device industry — engineered from the ground up to perform in cleanroom environments, meet validation requirements, and sustain commercial-scale production.",
  "From concept and feasibility through fabrication, qualification, and ongoing support, our equipment engineering teams work at the intersection of mechanical precision, process science, and regulatory compliance — so your production lines are ready from day one.",
] as const;

export const PRODUCTION_EQUIPMENT_CORE_CAPABILITIES = [
  {
    title: "Custom Equipment Design",
    description: "Bespoke machinery engineered for your specific device and process requirements.",
    icon: "cog" as const,
  },
  {
    title: "Production Line Development",
    description: "End-to-end manufacturing line setup, integration, and optimization.",
    icon: "factory" as const,
  },
  {
    title: "Cleanroom-Compatible Builds",
    description: "Equipment designed and built to ISO-classified environment standards.",
    icon: "wind" as const,
  },
  {
    title: "Equipment Qualification",
    description: "IQ, OQ, and PQ protocols developed and executed for regulatory readiness.",
    icon: "clipboard" as const,
  },
  {
    title: "Process Automation",
    description: "Automated assembly, inspection, and handling systems for consistent output.",
    icon: "bot" as const,
  },
  {
    title: "Maintenance & Support",
    description: "Preventive maintenance programs, calibration, and technical field support.",
    icon: "wrench" as const,
  },
] as const;

export const PRODUCTION_EQUIPMENT_DESIGN = {
  intro:
    "No two medical devices are alike — and the equipment used to manufacture them shouldn't be either. Our engineering team designs bespoke manufacturing equipment tailored to your product architecture, process requirements, material characteristics, and regulatory environment.",
  systemsApproach:
    "We take a systems-level approach: considering the full production workflow, operator interaction, cleanroom compatibility, and downstream validation requirements before a single component is fabricated.",
  mechanical: {
    title: "Mechanical Design & Engineering",
    description:
      "Precision mechanical systems designed for medical device production tolerances and cleanroom compatibility.",
    points: [
      "3D CAD design and engineering drawing packages",
      "Material selection for cleanroom and biocompatibility compliance",
      "Tolerance analysis and design-for-manufacture review",
      "Component sourcing and fabrication management",
      "Prototype build and functional verification",
    ],
  },
  controls: {
    title: "Controls & Automation Engineering",
    description:
      "Intelligent control systems that ensure process repeatability, data integrity, and operator safety.",
    points: [
      "PLC and HMI system design and integration",
      "Process parameter monitoring and alarm management",
      "Safety interlocks and risk-based control design",
    ],
  },
} as const;

export const PRODUCTION_EQUIPMENT_LINE_FEATURES = [
  {
    title: "Line Layout & Workflow Design",
    description:
      "Detailed analysis of product, volume targets, and facility constraints — then a production line layout that minimizes waste, controls contamination risk, and enables smooth material and personnel flow.",
  },
  {
    title: "Equipment Integration & Commissioning",
    description:
      "Individual equipment modules integrated into a cohesive production system — utilities, controls, interlocks, and material handling connected, tested, and verified before handover.",
  },
  {
    title: "Capacity Planning & Throughput Optimization",
    description:
      "Production line performance modelled against demand forecasts with bottleneck, yield loss, and improvement opportunities identified for commercial-scale output from day one.",
  },
  {
    title: "Packaging Line Integration",
    description:
      "Primary and secondary packaging equipment selection, integration, and validation — form-fill-seal, tray sealing, labelling, and pouch-sealing systems for sterile barrier requirements.",
  },
] as const;

export const PRODUCTION_EQUIPMENT_CLEANROOM_LEVELS = [
  {
    iso: "ISO 5",
    description:
      "Equipment for ISO Class 5 environments undergoes rigorous cleanroom engineering review — material compatibility, particle generation, surface finish specifications, and installation qualification protocols defined before fabrication.",
  },
  {
    iso: "ISO 7",
    description:
      "Precision assembly equipment and process tooling for ISO Class 7 environments — controlled particulate generation, easy cleaning validation, and minimal dead-zones.",
  },
  {
    iso: "ISO 8",
    description:
      "Supporting equipment, material handling systems, and ancillary process tools engineered for ISO Class 8 environments — robust, cleanroom-compatible, and validated for intended use.",
  },
] as const;

export const PRODUCTION_EQUIPMENT_CLEANROOM_STANDARDS = [
  "Electropolished stainless steel (316L) and anodized aluminium construction",
  "Sealed enclosures with positive pressure to prevent particle ingress",
  "Particle-generating components isolated and managed by design",
  "Lubricant-free or food/pharma-grade lubricant specifications",
  "Cleanable and sterilizable surface geometries — no hidden crevices",
  "ESD-safe materials and grounding for sensitive device manufacturing",
] as const;

export const PRODUCTION_EQUIPMENT_QUALIFICATION_PHASES = [
  {
    code: "IQ",
    title: "Installation Qualification",
    description:
      "Verification that equipment has been delivered, installed, and configured correctly per manufacturer specifications and the user requirements specification (URS). Utility connections, environmental conditions, safety features, and instrument calibration documented.",
  },
  {
    code: "OQ",
    title: "Operational Qualification",
    description:
      "Systematic testing confirming equipment operates within defined parameters across its full operating range — challenge testing, alarm verification, interlock testing, and process parameter range studies against pre-approved acceptance criteria.",
  },
  {
    code: "PQ",
    title: "Performance Qualification",
    description:
      "Demonstration that equipment consistently produces output meeting product specifications under real production conditions. PQ bridges equipment qualification to process validation in the context of the actual manufacturing process.",
  },
] as const;

export const PRODUCTION_EQUIPMENT_QUALIFICATION_DOCS = [
  "User Requirements Specification (URS)",
  "Functional Requirements Specification (FRS)",
  "Design Qualification (DQ) review",
  "Installation Qualification (IQ) protocol and report",
  "Operational Qualification (OQ) protocol and report",
  "Performance Qualification (PQ) protocol and report",
  "Instrument calibration records and traceability matrix",
  "Deviation log and CAPA documentation",
  "Requalification schedule and change control procedures",
] as const;

export const PRODUCTION_EQUIPMENT_AUTOMATION = [
  {
    title: "Assembly Systems",
    description: "Assembly stations designed for medical device components and sub-assemblies.",
    points: [
      "Vision-guided placement and orientation verification",
      "Force-controlled assembly for sensitive components",
      "Integrated in-line inspection at each assembly stage",
      "Validated reject handling and non-conformance tracking",
    ],
  },
  {
    title: "Inspection & Testing",
    description: "Test systems that deliver 100% inspection without production line bottlenecks.",
    points: [
      "Dimensional and cosmetic inspection",
      "Leak and pressure testing integration",
      "Electrical functional test",
      "Barcode and label verification systems",
      "Statistical process control (SPC) data capture",
    ],
  },
  {
    title: "Process Monitoring & Control",
    description:
      "Closed-loop control systems that maintain critical process parameters within validated limits throughout production.",
    points: [
      "Real-time temperature, pressure, and force monitoring",
      "Process adjustment and feedback control",
      "Out-of-specification alerts and production holds",
      "Batch record generation and electronic data capture",
      "Integration with MES and quality management systems",
    ],
  },
] as const;

export const PRODUCTION_EQUIPMENT_SPECIALIST = [
  {
    name: "Catheter Tubing Shaping & Forming Equipment",
    description:
      "Custom tipping and bonding equipment for high-precision catheter and medical tube manufacturing — tight dimensional tolerances, material compatibility, and cleanroom deployment.",
    image: MANUFACTURING_IMAGES.guidingCatheter,
  },
  {
    name: "Balloon Forming & Bonding Equipment",
    description:
      "Precision balloon blowing, annealing, and catheter bonding stations. Force-controlled bonding systems and validated thermal processes for consistent joint integrity.",
    image: MANUFACTURING_IMAGES.angiographicCatheter,
  },
  {
    name: "Micro-Assembly & Fine-Tolerance Workstations",
    description:
      "Purpose-designed benches, fixtures, and tooling for sub-millimetre component assembly — ergonomic, ESD-safe, and configured for validation.",
    image: MANUFACTURING_IMAGES.facility2,
  },
  {
    name: "Sterile Barrier & Packaging Equipment",
    description:
      "Pouch sealing, tray sealing, and form-fill-seal systems validated to ISO 11607 sterile barrier requirements with seal integrity testing integration.",
    image: MANUFACTURING_IMAGES.cleanroom3,
  },
  {
    name: "Cleaning & Passivation Systems",
    description:
      "Ultrasonic cleaning, rinsing, and passivation systems for medical-grade stainless steel and polymer components with documented residue testing.",
    image: MANUFACTURING_IMAGES.cleanroom1,
  },
] as const;

export const PRODUCTION_EQUIPMENT_SUPPORT = [
  {
    code: "PPM",
    title: "Planned Preventive Maintenance",
    description:
      "Tailored to each piece of equipment, scheduled to minimize production disruption, and documented to satisfy quality management system requirements.",
  },
  {
    code: "CAL",
    title: "Instrument Calibration",
    description:
      "Traceable to national and international standards (BIPM/NIST), with calibration records, certificates, and recall scheduling integrated into your maintenance system.",
  },
  {
    code: "SPA",
    title: "Spare Parts Management",
    description:
      "Critical spares inventory planning so a failed component never becomes an extended production stoppage.",
  },
  {
    code: "RQ",
    title: "Requalification Support",
    description:
      "Following maintenance, repair, or equipment modification — ensuring equipment remains in its validated state and regulatory standing is protected.",
  },
] as const;

export const PRODUCTION_EQUIPMENT_PROCESS_STEPS = [
  {
    step: "01",
    title: "Requirements Capture & Feasibility",
    description:
      "URS development, process risk assessment, and technical feasibility analysis establish the foundation for everything that follows.",
  },
  {
    step: "02",
    title: "Concept Design & Review",
    description:
      "Concept-level engineering designs reviewed against requirements through iterative design reviews with your team engaged at each stage.",
  },
  {
    step: "03",
    title: "Detailed Engineering & Fabrication",
    description:
      "Detailed mechanical, electrical, and software engineering packages released for fabrication with supplier qualification and controlled build management.",
  },
  {
    step: "04",
    title: "Factory Acceptance Testing (FAT)",
    description:
      "Comprehensive FAT conducted against predefined acceptance criteria — with your team present to witness, review, and formally accept the equipment.",
  },
  {
    step: "05",
    title: "Installation & Site Acceptance Testing (SAT)",
    description:
      "Equipment installed, connected to utilities, and subjected to SAT in its intended operational environment before progression to qualification.",
  },
  {
    step: "06",
    title: "Qualification (IQ / OQ / PQ) & Handover",
    description:
      "Full qualification protocols executed and documented. Complete package handed over with operator training, maintenance manuals, and spare parts recommendations.",
  },
] as const;

export const PRODUCTION_EQUIPMENT_WHY_CHOOSE = [
  {
    title: "Purpose-Built for Medical Devices",
    description:
      "We engineer from the ground up with cleanroom compatibility, biocompatibility, and regulatory validation as primary design inputs — not adapted generic industrial equipment.",
  },
  {
    title: "Validation-First Engineering",
    description:
      "Qualification and validation are engineered in from the requirements stage. Documentation is developed in parallel with the hardware.",
  },
  {
    title: "Deep Process Knowledge",
    description:
      "Hands-on expertise in catheter fabrication, balloon forming, sterile packaging, and fine assembly informs every equipment design.",
  },
  {
    title: "Embedded Partnership Model",
    description:
      "An integrated extension of your engineering team — from design reviews to FAT to ongoing maintenance, accountable throughout the equipment lifecycle.",
  },
] as const;

export const PRODUCTION_EQUIPMENT_PRODUCTS = PRODUCTION_EQUIPMENT_SPECIALIST.map((item) => ({
  name: item.name,
  description: item.description,
  image: item.image,
  tag: "Production Equipment",
  spec: "IQ/OQ/PQ ready",
}));
