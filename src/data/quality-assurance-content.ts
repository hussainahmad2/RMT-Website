export const QA_STANDARDS = [
  "ISO 13485:2016",
  "QMSR (FDA 21 CFR 820)",
  "ISO 14971:2019",
  "DRAP Compliance",
] as const;

export const QA_APPROACH = [
  {
    step: "01",
    title: "Understand",
    desc: "We assess your current quality processes, documentation, and compliance status.",
  },
  {
    step: "02",
    title: "Design",
    desc: "We develop scalable quality solutions tailored to your organization and regulatory needs.",
  },
  {
    step: "03",
    title: "Implement",
    desc: "We work alongside your team to establish effective quality processes and documentation.",
  },
  {
    step: "04",
    title: "Improve",
    desc: "We support continuous improvement through audits, CAPA management, training, and ongoing quality oversight.",
  },
] as const;

export const QA_ACHIEVEMENTS = [
  {
    label: "Successfully established and maintained an ISO 13485-certified Quality Management System",
    value: "Certified",
  },
  {
    label: "Successfully completed regulatory audits and inspections",
    value: "Audited",
  },
  {
    label: "Comprehensive quality processes covering design, manufacturing, documentation, and other support activities",
    value: "Full Scope",
  },
  {
    label: "Structured CAPA, document control, and change management systems",
    value: "Structured",
  },
  {
    label: "Commitment to continuous improvement and regulatory compliance",
    value: "Continuous",
  },
] as const;

export const QA_CAPABILITIES = [
  "ISO 13485 QMS & Audit Readiness",
  "Production Quality & Process Controls",
  "Design Controls & Verification Support",
  "Risk Management & Compliance",
  "Production & Testing Support",
] as const;

export const QA_CLOSING_NOTE =
  "Our QA services are designed to help organizations build robust quality systems, achieve regulatory compliance, improve operational performance, and maintain high standards of product quality and safety. We partner with clients to provide practical, efficient, and reliable quality assurance solutions tailored to their business needs.";

export const SQA_APPROACH = [
  {
    step: "01",
    title: "Assess",
    desc: "Understand requirements, intended use, regulatory pathway, and quality objectives across the SDLC.",
  },
  {
    step: "02",
    title: "Plan",
    desc: "Develop test strategy, plans, traceability matrices, and risk-based testing approaches.",
  },
  {
    step: "03",
    title: "Execute",
    desc: "Manual, automated, performance, and compliance testing integrated with Agile Scrum delivery.",
  },
  {
    step: "04",
    title: "Assure",
    desc: "Defect management, validation documentation, and continuous quality improvement through release.",
  },
] as const;
