export interface SoftwareProduct {
  name: string;
  description: string;
  image: string;
  tags: string[];
  features: string[];
  tag: string;
  spec: string;
}

export const SOFTWARE_DEPARTMENT_PRODUCTS: SoftwareProduct[] = [
  {
    name: "LegendEHR",
    description:
      "Electronic health record platform with clinician workflows, patient charting, and FHIR-based interoperability for ambulatory and specialty care.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=85",
    tags: ["EHR", "FHIR", "Web"],
    features: ["Clinician charting & orders", "FHIR R4 interoperability", "Role-based access & audit trails", "HIPAA-aligned data flows"],
    tag: "SaMD",
    spec: "IEC 62304",
  },
  {
    name: "e-Vitals",
    description:
      "Digital vitals capture and clinical dashboard for connected monitoring, care-team visibility, and remote patient programmes.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=900&q=85",
    tags: ["RPM", "Mobile", "Cloud"],
    features: ["Device pairing & vitals ingestion", "Clinical alerting rules", "Care-team dashboards", "AWS / Azure deployment"],
    tag: "RPM",
    spec: "HIPAA",
  },
  {
    name: "Cardio",
    description:
      "Cardiology-focused software for cardiac data review, structured reporting, and device-integrated clinical workflows.",
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=900&q=85",
    tags: ["Cardiology", "SaMD", "Analytics"],
    features: ["ECG & hemodynamic data review", "Structured clinical reporting", "Device data integration", "Analytics & trend views"],
    tag: "SaMD",
    spec: "FDA SaMD",
  },
  {
    name: "22-RPM",
    description:
      "Remote patient monitoring programme with device pairing, alerts, and chronic care coordination for CCM billing workflows.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=85",
    tags: ["RPM", "CCM", "HIPAA"],
    features: ["RPM & CCM programme support", "Patient engagement tools", "Billing-ready documentation", "Multi-device connectivity"],
    tag: "Digital Health",
    spec: "ONC Ready",
  },
  {
    name: "Infuzamed",
    description:
      "Infusion therapy management platform supporting clinical documentation, inventory tracking, and compliance-ready operations.",
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=900&q=85",
    tags: ["Infusion", "Clinical", "IEC 62304"],
    features: ["Infusion session documentation", "Inventory & lot traceability", "Clinical workflow automation", "Regulatory documentation package"],
    tag: "Clinical",
    spec: "IEC 62304",
  },
  {
    name: "AI Clinical Decision Support",
    description:
      "Validated AI/ML module for clinical decision support, disease prediction, and intelligent care pathway recommendations.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=85",
    tags: ["AI/ML", "CDSS", "Analytics"],
    features: ["Model validation & explainability", "Clinical decision support rules", "Bias assessment documentation", "FDA AI/ML change protocol"],
    tag: "AI",
    spec: "SaMD Class II",
  },
  {
    name: "HealthCloud Platform",
    description:
      "HIPAA-aligned cloud infrastructure template for telemetry, analytics, OTA updates, and multi-tenant health applications.",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=900&q=85",
    tags: ["Cloud", "DevOps", "AWS"],
    features: ["AWS / Azure / GCP architectures", "CI/CD with IEC 62304 change control", "Infrastructure-as-code", "Monitoring & incident runbooks"],
    tag: "Platform",
    spec: "ISO 27001",
  },
  {
    name: "Compliance Hub",
    description:
      "Software compliance toolkit covering HIPAA, IEC 62304, ISO 13485 alignment, FHIR/HL7 interoperability, and audit evidence.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&q=85",
    tags: ["Compliance", "FHIR", "Security"],
    features: ["Gap assessment workflows", "Traceability matrices", "Security & privacy controls", "Interoperability test evidence"],
    tag: "Compliance",
    spec: "IEC 62304",
  },
];

export const SOFTWARE_BANNER_IMAGE =
  "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1600&q=85";
