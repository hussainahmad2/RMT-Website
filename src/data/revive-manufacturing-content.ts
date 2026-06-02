export const MANUFACTURING_HERO_STATS = [
  { label: "Cleanroom Grade", value: "ISO 5" },
  { label: "Device Categories", value: "Class I–III" },
  { label: "Facility", value: "DRAP Registered" },
  { label: "Lifecycle Support", value: "360°" },
] as const;

export const MANUFACTURING_QUALITY_POINTS = [
  "Process validation and advanced in-line control",
  "Comprehensive documentation and lot traceability",
  "Risk-based quality management (ISO 14971 framework)",
  "Continuous process improvement and CAPA systems",
  "Segregated, contamination-controlled production environments",
] as const;

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
    name: "Angiographic Catheters",
    icon: "microscope",
    description:
      "Purpose-built for high-fidelity angiography procedures, delivering consistent contrast injection and dependable trackability across complex anatomies.",
    features: [
      "High-flow lumen design for rapid contrast injection",
      "Enhanced kink resistance and flexible shaft construction",
      "Available in diagnostic and interventional profiles",
      "Sterile, single-use — procedure-ready from packaging",
    ],
  },
  {
    name: "Microspheres",
    icon: "atom",
    description:
      "Precisely calibrated microspheres for embolization and drug delivery applications — manufactured under controlled conditions for batch-to-batch consistency.",
    features: [
      "Tight size distribution for predictable performance",
      "Biocompatible polymer matrix",
      "Available in multiple size ranges for targeted therapy",
      "Compatible with standard delivery systems",
    ],
  },
  {
    name: "Cleanroom Validation",
    icon: "shield",
    description:
      "Cleanrooms validated per ISO 14644 — from initial qualification to ongoing environmental monitoring for the highest regulatory standards.",
    features: [
      "IQ / OQ / PQ protocols tailored to your environment",
      "Particle count, pressure, and airflow testing",
      "Microbial environmental monitoring programs",
      "Full validation documentation package",
    ],
  },
  {
    name: "Inflation Device",
    icon: "gauge",
    description:
      "Precision inflation devices for reliable balloon catheter control during interventional procedures — ergonomic single-hand operation with accurate, repeatable pressure.",
    features: [
      "Calibrated pressure gauge with high-precision readout",
      "Ergonomic thumb-wheel mechanism for controlled inflation",
      "Rated for standard interventional balloon pressure ranges",
      "Sterile, single-use — CE/ISO standard-ready",
    ],
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
    grade: "ISO 5",
    description:
      "Our highest-grade controlled space — designed for critical manufacturing operations where ultra-low particulate environments are non-negotiable.",
  },
  {
    grade: "ISO 7",
    description:
      "Precision assembly and specialized device processes require an environment that balances accessibility with rigor.",
  },
  {
    grade: "ISO 8",
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
