export const MANUFACTURING_IMAGES = {
  angiographicCatheter: "/mdm/angiographic-catheter.jpeg",
  guidingCatheter: "/mdm/guiding-catheter.jpeg",
  cleanroom1: "/mdm/cleanroom-1.jpeg",
  cleanroom2: "/mdm/cleanroom-2.jpeg",
  cleanroom3: "/mdm/cleanroom-3.jpeg",
  facility1: "/mdm/facility-1.jpeg",
  facility2: "/mdm/facility-2.jpeg",
  facility3: "/mdm/facility-3.jpeg",
} as const;

export const MANUFACTURING_HERO_IMAGES = [
  MANUFACTURING_IMAGES.cleanroom1,
  MANUFACTURING_IMAGES.facility1,
  MANUFACTURING_IMAGES.cleanroom2,
  MANUFACTURING_IMAGES.angiographicCatheter,
  MANUFACTURING_IMAGES.guidingCatheter,
  MANUFACTURING_IMAGES.facility2,
  MANUFACTURING_IMAGES.cleanroom3,
  MANUFACTURING_IMAGES.facility3,
] as const;

export const MANUFACTURING_KEY_METRICS = [
  { label: "Validated Aseptic Working Environment", value: "Aseptic" },
  { label: "Class I, II, and III medical devices manufacturing capabilities", value: "Class I–III" },
  { label: "Full lifecycle support from concept to commercialization", value: "360°" },
  { label: "ISO 13485 certified quality management system", value: "Certified" },
  { label: "DRAP registered manufacturing facility", value: "Registered" },
] as const;

export const MANUFACTURING_LICENCES = ["DRAP Registered Facility"] as const;

export const MANUFACTURING_QUALITY_POINTS = [
  "Controlled Class A and Class B clean rooms",
  "Quality Control at each process step",
  "Stringent Inspection Criteria",
  "ISO 2859 compliance",
] as const;

/** Flagship portfolio — excludes items pending review (angiographic catheters, inflation device) */
export const MANUFACTURING_PRODUCTS = [
  {
    name: "Diagnostic Catheters",
    icon: "stethoscope",
    description:
      "High-performance catheters engineered for precise vascular access and superior contrast delivery — helping clinicians see more clearly and act with confidence.",
    features: [
      "Optimized torque transmission and pushability",
      "Multiple tip configurations (straight, angled, shaped)",
      "Soft tip for easier maneuverability",
      "Biocompatible materials meeting ISO 10993 standards",
    ],
  },
  {
    name: "Microspheres",
    icon: "atom",
    description:
      "Precisely calibrated biodegradable microspheres for embolization and drug delivery applications — manufactured under controlled conditions for batch-to-batch consistency.",
    features: [
      "Tight size distribution for predictable performance",
      "Biodegradable, biocompatible polymer matrix",
      "Available in multiple size ranges for targeted therapy",
      "Compatible with standard delivery systems",
    ],
  },
] as const;

export type ManufacturingProductMadeFeature = {
  title: string;
  description: string;
};

export type ManufacturingProductMade = {
  category: string;
  name: string;
  description: string;
  features: readonly ManufacturingProductMadeFeature[];
  specs: readonly string[];
  image: string;
};

export const MANUFACTURING_PRODUCTS_MADE: readonly ManufacturingProductMade[] = [
  {
    category: "Vascular diagnostics & imaging",
    name: "Angiographic Catheters",
    description:
      "High-performance catheters engineered for precise vascular access and superior contrast delivery — helping clinicians see more clearly and act with confidence.",
    image: MANUFACTURING_IMAGES.angiographicCatheter,
    features: [
      {
        title: "Torque & pushability",
        description: "Optimized torque transmission for precise distal tip control",
      },
      {
        title: "Multiple tip configurations",
        description: "Straight, angled, and pre-shaped options available",
      },
      {
        title: "Soft atraumatic tip",
        description: "Designed for easier maneuverability through tortuous anatomy",
      },
      {
        title: "Biocompatible materials",
        description: "All materials tested to ISO 10993 biological safety standards",
      },
    ],
    specs: ["5 and 6 Fr", "Single-use · sterile"],
  },
  {
    category: "Interventional cardiology",
    name: "Guiding Catheter",
    description:
      "Large-lumen guiding catheter with 1×1 flat-wire stainless steel braid, engineered for superior backup support and reliable device delivery in complex coronary and peripheral interventions.",
    image: MANUFACTURING_IMAGES.guidingCatheter,
    features: [
      {
        title: "Ribbon-profile stainless steel braid",
        description: "Delivers high column strength, pushability, and controlled torque response",
      },
      {
        title: "Large inner diameter lumen",
        description: "Maximized ID for simultaneous delivery of balloons, stents, and imaging catheters without compromise",
      },
      {
        title: "Superior backup support",
        description: "Engineered for deep intubation and stable guide position during complex PCI procedures",
      },
      {
        title: "Extensive curve library",
        description: "JL, JR, AL, AR, EBU, XB, Amplatz, and custom configurations available",
      },
      {
        title: "Hydrophilic outer coating",
        description: "Lubricious outer surface reduces friction during advancement through the vasculature",
      },
      {
        title: "Biocompatible · ISO 10993",
        description: "All materials tested to ISO 10993 biological safety standards. Sterile, single-use.",
      },
    ],
    specs: ["5–7 Fr", "PTFE inner liner", "High column strength", "Single-use · sterile"],
  },
] as const;

export const MANUFACTURING_DEVICE_CLASSES = [
  { title: "Class I Devices", description: "High-volume, general-use devices — manufactured with precision at commercial scale." },
  { title: "Class II Devices", description: "Moderate-risk devices requiring enhanced validation, controls, and quality oversight." },
  { title: "Class III Devices", description: "High-complexity, life-critical technologies with stringent process control requirements." },
  { title: "Active Medical Devices", description: "Electrically powered systems — assembly, testing, and functional integration." },
  { title: "Contract Manufacturing", description: "Flexible OEM and white-label production for startups, innovators, and global partners." },
  { title: "Pilot & Scale-Up", description: "From small-batch validation through full commercial production ramp-up." },
] as const;

export const MANUFACTURING_CLEANROOMS = [
  {
    grade: "ISO Class 05",
    description:
      "Our highest-grade controlled space — designed for critical manufacturing operations where ultra-low particulate environments are non-negotiable.",
  },
  {
    grade: "ISO Class 07",
    description:
      "Precision assembly and specialized device processes require an environment that balances accessibility with rigor.",
  },
  {
    grade: "ISO Class 08",
    description:
      "Supporting manufacturing operations, material handling, and workflow transitions under controlled conditions.",
  },
] as const;

export const MANUFACTURING_ENVIRONMENTAL_CONTROLS = [
  "Continuous real-time particle and environmental monitoring",
  "Controlled personnel gowning and movement protocols",
  "Fully validated cleaning and sanitization procedures",
  "Positive-pressure cascade design and process segregation",
  "Comprehensive contamination control and alert systems",
] as const;

export const MANUFACTURING_DEVELOPMENT_PHASES = [
  {
    title: "Design Transfer & Feasibility",
    items: [
      "Design transfer support and documentation alignment",
      "Manufacturing feasibility assessment and risk evaluation",
      "Prototype refinement and design-for-manufacture (DFM) review",
      "Material and component qualification support",
    ],
  },
  {
    title: "Process Development & Optimization",
    items: [
      "Production workflow development and layout design",
      "Process FMEA and risk-based control planning",
      "Equipment qualification and process validation (IQ/OQ/PQ)",
    ],
  },
  {
    title: "Pilot Production & Scale-Up",
    items: [
      "Small-batch manufacturing with process monitoring",
      "Production repeatability and capability studies",
      "Scale-up planning and manufacturing transfer evaluation",
      "Initial market launch batch production support",
    ],
  },
] as const;

export const MANUFACTURING_TESTING_SERVICES = [
  {
    title: "Bench Testing",
    description:
      "Functional and performance testing to evaluate product reliability, mechanical integrity, and operational consistency against predefined acceptance criteria.",
  },
  {
    title: "Shelf-Life & Stability Evaluation",
    description:
      "Accelerated and real-time stability studies to support packaging performance and product shelf-life claims under defined storage and distribution conditions.",
  },
  {
    title: "Biocompatibility Support",
    description:
      "Material biocompatibility evaluation and testing coordination to satisfy ISO 10993 biological safety requirements across device classifications.",
  },
  {
    title: "Product Improvement & Optimization",
    description:
      "Continuous refinement of product design, process performance, and manufacturing efficiency throughout the product lifecycle.",
  },
] as const;

export const MANUFACTURING_CAPACITY_BUILDING = [
  "Manufacturing line development and facility planning",
  "Process engineering and equipment integration",
  "Lean manufacturing implementation and waste reduction",
  "Production workflow optimization and cycle time analysis",
  "Technical training programs and operational guidance",
  "Validation-ready production system setup",
] as const;

export const MANUFACTURING_WHY_CHOOSE = [
  {
    title: "Deep Technical Expertise",
    description:
      "Seasoned professionals with hands-on, multi-disciplinary expertise in medical device engineering, controlled manufacturing, and regulatory science.",
  },
  {
    title: "Truly Scalable Manufacturing",
    description:
      "From 50-unit pilot batches to commercial-volume production — flexible infrastructure grows with your ambition.",
  },
  {
    title: "Regulation-Ready Processes",
    description:
      "Every system, record, and workflow is designed around compliance, traceability, and audit-readiness.",
  },
  {
    title: "Innovation-First Partnership",
    description:
      "We collaborate as an extension of your team, from first concept to market launch.",
  },
  {
    title: "Advanced Infrastructure",
    description:
      "ISO-classified cleanrooms, specialized manufacturing lines, and purpose-built environments for precision medical technologies.",
  },
] as const;
