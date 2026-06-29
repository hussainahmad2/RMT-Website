import { MANUFACTURING_IMAGES } from "@/data/revive-manufacturing-content";

export type HomeProductLayout =
  | "editorial-right"
  | "editorial-left"
  | "floating"
  | "immersive"
  | "diagonal"
  | "card-stack"
  | "line-structure";

export type HomeProductLineSide = "left" | "right";

export interface HomeFeaturedProduct {
  id: string;
  name: string;
  category: string;
  headline: string;
  description: string;
  uniqueAngle: string;
  image: string;
  imageAlt: string;
  specs: readonly string[];
  highlights: readonly { label: string; value: string }[];
  layout: HomeProductLayout;
  /** Alternating side along the vertical spine (line-structure showcase) */
  lineSide?: HomeProductLineSide;
  serviceSlug: string;
  serviceName: string;
  productsAnchor?: string;
  accent: "sky" | "cyan" | "emerald" | "violet";
}

/** Flagship machines & devices featured on the home page — each with a distinct layout angle */
export const HOME_FEATURED_PRODUCTS: readonly HomeFeaturedProduct[] = [
  {
    id: "guiding-catheter",
    name: "Guiding Catheter",
    category: "Interventional Cardiology",
    headline: "The backbone of every complex PCI procedure",
    description:
      "When anatomy turns tortuous and device delivery demands unwavering support, clinicians need a guide that doesn't compromise. Our large-lumen guiding catheter combines ribbon-profile stainless braid with a hydrophilic outer coating — engineered for deep intubation, superior backup, and simultaneous multi-device delivery.",
    uniqueAngle:
      "1×1 flat-wire braid architecture delivers column strength that generic catheters simply cannot match — a structural difference you can feel at the bench and trust in the cath lab.",
    image: MANUFACTURING_IMAGES.guidingCatheter,
    imageAlt: "RMT guiding catheter with stainless steel braid construction",
    specs: ["5–7 Fr", "PTFE inner liner", "JL · JR · AL · AR curves", "ISO 10993"],
    highlights: [
      { label: "Braid profile", value: "Ribbon-wire 1×1" },
      { label: "Backup support", value: "Deep intubation" },
      { label: "Lumen ID", value: "Maximized" },
    ],
    layout: "line-structure",
    lineSide: "right",
    serviceSlug: "contract-manufacturing",
    serviceName: "Contract Manufacturing",
    productsAnchor: "medical-devices",
    accent: "sky",
  },
  {
    id: "angiographic-catheter",
    name: "Angiographic Catheters",
    category: "Vascular Diagnostics & Imaging",
    headline: "See the vessel before you treat it",
    description:
      "Contrast delivery is only as good as the catheter carrying it. RMT angiographic catheters are tuned for torque response, pushability, and atraumatic tip geometry — giving interventional teams crisp imaging and confident navigation through challenging vasculature.",
    uniqueAngle:
      "Every tip configuration — straight, angled, pre-shaped — is validated for contrast flow dynamics, not just dimensional tolerance. Imaging clarity starts at the manufacturing line.",
    image: MANUFACTURING_IMAGES.angiographicCatheter,
    imageAlt: "RMT angiographic catheter for vascular contrast delivery",
    specs: ["5 & 6 Fr", "Soft atraumatic tip", "Multiple curve options", "Single-use sterile"],
    highlights: [
      { label: "Torque control", value: "Distal precision" },
      { label: "Tip options", value: "3+ configs" },
      { label: "Materials", value: "ISO 10993" },
    ],
    layout: "line-structure",
    lineSide: "left",
    serviceSlug: "product-development",
    serviceName: "Product Development",
    productsAnchor: "medical-devices",
    accent: "cyan",
  },
  {
    id: "microspheres",
    name: "Microspheres",
    category: "Biomaterials & Drug Delivery",
    headline: "Micron-scale precision that changes therapeutic outcomes",
    description:
      "Embolization and targeted drug delivery demand spheres with tight size distribution, predictable degradation, and batch-to-batch consistency. RMT microspheres are manufactured under controlled conditions — because a ±10 µm variance can mean the difference between targeted therapy and off-target embolization.",
    uniqueAngle:
      "Unlike commodity polymer beads, our microspheres are calibrated across multiple size ranges with documented batch release criteria — bridging biomaterial science with interventional clinical need.",
    image: MANUFACTURING_IMAGES.microspheres,
    imageAlt: "RMT biodegradable microspheres for embolization",
    specs: ["Tight size distribution", "Biodegradable matrix", "Multi-range sizing", "Delivery-system compatible"],
    highlights: [
      { label: "Size control", value: "± precision" },
      { label: "Matrix", value: "Bioresorbable" },
      { label: "Application", value: "Embolization" },
    ],
    layout: "line-structure",
    lineSide: "right",
    serviceSlug: "bmd",
    serviceName: "Biomaterials (BMD)",
    productsAnchor: "biomaterials",
    accent: "emerald",
  },
  {
    id: "cleanroom-manufacturing",
    name: "ISO-Classified Cleanroom Production",
    category: "Contract Manufacturing",
    headline: "Where sterile precision becomes commercial reality",
    description:
      "From ISO Class 05 critical zones to Class 08 supporting operations, our cleanroom infrastructure is purpose-built for Class I–III medical devices. Positive-pressure cascades, real-time environmental monitoring, and validated sanitization protocols — every square metre is designed for audit-readiness.",
    uniqueAngle:
      "Most manufacturers rent cleanroom space. RMT owns the full vertical stack — facility, process, quality system, and regulatory documentation — so your device doesn't pause between prototype and commercial batch.",
    image: MANUFACTURING_IMAGES.cleanroom1,
    imageAlt: "RMT ISO-classified medical device cleanroom",
    specs: ["ISO Class 05–08", "DRAP registered", "ISO 13485 QMS", "Class I–III devices"],
    highlights: [
      { label: "Environment", value: "ISO 5–8" },
      { label: "Coverage", value: "Class I–III" },
      { label: "Scale", value: "Pilot → commercial" },
    ],
    layout: "line-structure",
    lineSide: "left",
    serviceSlug: "contract-manufacturing",
    serviceName: "Contract Manufacturing",
    productsAnchor: "medical-devices",
    accent: "sky",
  },
  {
    id: "catheter-shaping-equipment",
    name: "Catheter Tubing Shaping & Forming Equipment",
    category: "Production Equipment Engineering",
    headline: "The machine that makes the machine possible",
    description:
      "High-precision catheter manufacturing doesn't happen on generic industrial lines. Our custom tipping, bonding, and forming equipment is engineered for sub-millimetre tolerances, cleanroom deployment, and validated thermal processes — built specifically for medical tube architectures.",
    uniqueAngle:
      "Purpose-built from URS through FAT/SAT and IQ/OQ/PQ — not retrofitted factory equipment. Every axis, heater, and fixture is designed around your catheter geometry and regulatory dossier.",
    image: MANUFACTURING_IMAGES.facility2,
    imageAlt: "RMT custom catheter shaping and forming production equipment",
    specs: ["Custom URS → FAT", "Cleanroom compatible", "IQ/OQ/PQ packages", "Catheter-specific tooling"],
    highlights: [
      { label: "Design", value: "Bespoke" },
      { label: "Validation", value: "IQ/OQ/PQ" },
      { label: "Tolerance", value: "Sub-mm" },
    ],
    layout: "line-structure",
    lineSide: "right",
    serviceSlug: "production-equipment-engineering",
    serviceName: "Medical Equipment Manufacturing",
    productsAnchor: "production-equipment",
    accent: "violet",
  },
  {
    id: "balloon-forming-equipment",
    name: "Balloon Forming & Bonding Equipment",
    category: "Production Equipment Engineering",
    headline: "Validated thermal processes for life-critical joints",
    description:
      "PTCA and PTA balloon catheters demand force-controlled bonding, precision annealing, and repeatable wall-thickness profiles. Our balloon forming stations integrate thermal profiling, real-time force monitoring, and SPC data capture — so every bond meets the acceptance criteria in your validation protocol.",
    uniqueAngle:
      "We don't just build the equipment — we understand balloon catheter physics. That process knowledge is embedded in every heater zone, clamp profile, and alarm threshold on the line.",
    image: MANUFACTURING_IMAGES.facility3,
    imageAlt: "RMT balloon forming and bonding manufacturing equipment",
    specs: ["Force-controlled bonding", "Thermal profiling", "SPC integration", "MES/QMS ready"],
    highlights: [
      { label: "Process", value: "Force + thermal" },
      { label: "Output", value: "SPC enabled" },
      { label: "Lifecycle", value: "URS → PQ" },
    ],
    layout: "line-structure",
    lineSide: "left",
    serviceSlug: "production-equipment-engineering",
    serviceName: "Medical Equipment Manufacturing",
    productsAnchor: "production-equipment",
    accent: "cyan",
  },
] as const;

/** Horizontal production-line stages shown above the product spine */
export const HOME_PRODUCTION_LINE = [
  { step: "01", label: "Concept", sub: "Feasibility & URS" },
  { step: "02", label: "Engineer", sub: "Design & prototype" },
  { step: "03", label: "Validate", sub: "Bench · biocompat · IQ/OQ" },
  { step: "04", label: "Manufacture", sub: "Cleanroom · scale-up" },
  { step: "05", label: "Deliver", sub: "Regulatory · market" },
] as const;

export const HOME_PRODUCT_HERO_SLIDES = [
  {
    src: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Medical laboratory setting with clinical equipment",
    label: "Clinical Lab",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1661963979841-82a90d9ffa08?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Medical professional in a clinical environment",
    label: "Clinical Care",
  },
  {
    src: "https://images.unsplash.com/photo-1745420052527-a75fcc6aba58?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Modern medical technology environment",
    label: "MedTech",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1682145087898-319a01ef61dc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Sterile medical work environment",
    label: "Sterile Workflow",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1661881879851-d55c96b9abe1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Healthcare and medical imaging setting",
    label: "Healthcare Imaging",
  },
] as const;
