export type SqaServiceCard = {
  title: string;
  description: string;
};

export type SqaServiceSection = {
  label: string;
  intro?: string;
  cards: SqaServiceCard[];
};

export const SQA_OVERVIEW = [
  "At RMT Medical Technologies, we provide comprehensive Software Quality Assurance (SQA) services to ensure software products are reliable, secure, compliant, and aligned with business and regulatory requirements.",
  "Our QA professionals work throughout the Software Development Life Cycle (SDLC) to identify defects early, mitigate risks, and deliver high-quality software solutions that meet industry standards and customer expectations.",
] as const;

export const SQA_TAGLINE =
  "Reliable, secure, and compliant software — validated across the full SDLC with manual, automated, and regulatory testing expertise.";

export const SQA_KEY_HIGHLIGHTS = [
  "Manual & functional testing",
  "Automation, API & integration testing",
  "Performance, usability & defect management",
  "Healthcare compliance — ONC, HIPAA & IEC 62304",
  "Agile Scrum QA & test documentation",
  "IT operational quality assurance",
] as const;

export const SQA_DELIVERABLES = [
  "Test strategy documents",
  "Test plans",
  "Test cases & test scenarios",
  "Requirement traceability matrix (RTM)",
  "Verification & validation documentation",
  "Defect reports",
  "Test execution reports",
  "Test summary reports",
  "Risk assessment support documentation",
  "Compliance and audit support documentation",
] as const;

export const SQA_STANDARDS = [
  "IEC 62304",
  "ISO 13485",
  "ISO 14971",
  "FDA Software Validation Guidance",
  "ONC Health IT Certification",
  "HIPAA Compliance",
  "WCAG 2.1 / 2.2",
  "ISTQB Best Practices",
  "IEEE 829 / IEEE 29119",
] as const;

export const SQA_WHY_CHOOSE = [
  { title: "SQA & Regulatory Compliance Expertise", description: "Deep software quality assurance knowledge combined with healthcare regulatory requirements." },
  { title: "Healthcare & Medical Software", description: "Specialized experience validating EHR, RPM, SaMD, and clinical software platforms." },
  { title: "ONC Certification Testing", description: "Comprehensive EHR testing and validation support for ONC certification requirements." },
  { title: "HIPAA Compliance for RPM", description: "Quality assurance for Remote Patient Monitoring platforms — privacy, security, and confidentiality." },
  { title: "IEC 62304 & Medical Standards", description: "Lifecycle and testing processes aligned with IEC 62304 and medical device software standards." },
  { title: "Manual & Automated Testing", description: "Full-spectrum testing capabilities from structured manual execution to CI/CD automation." },
  { title: "Agile Scrum QA Processes", description: "Embedded QA in sprint planning, backlog refinement, reviews, and continuous testing." },
  { title: "Reliability, Security & UX Focus", description: "Quality embedded across functionality, security, compliance, and user experience." },
  { title: "Documentation & Validation Support", description: "Comprehensive test documentation, traceability, and regulatory validation deliverables." },
] as const;

export const SQA_CLOSING_NOTE =
  "At RMT Medical Technologies, quality is embedded into every phase of the development lifecycle. Our goal is to help organizations deliver secure, compliant, reliable, and user-centric software solutions that meet both industry standards and customer expectations.";

export const SQA_SERVICE_SECTIONS: SqaServiceSection[] = [
  {
    label: "Manual Testing",
    intro:
      "Comprehensive validation of software functionality through structured test execution to ensure applications meet business and user requirements.",
    cards: [
      {
        title: "Functional Testing",
        description:
          "Verification of features, workflows, and business processes to ensure the software performs according to defined specifications.",
      },
      {
        title: "UI/UX Testing",
        description:
          "Evaluation of user interfaces and user experiences to ensure applications are intuitive, visually consistent, user-friendly, and easy to navigate.",
      },
      {
        title: "WCAG Accessibility Testing",
        description:
          "Assessment of applications against Web Content Accessibility Guidelines (WCAG) to ensure accessibility for all users, including individuals with disabilities.",
      },
      {
        title: "Regression Testing",
        description:
          "Validation of existing functionality after enhancements, bug fixes, or system updates to ensure previously working features remain unaffected.",
      },
    ],
  },
  {
    label: "Automation Testing",
    intro:
      "Implementation of automated test solutions to improve efficiency, increase test coverage, reduce repetitive manual effort, and support continuous integration and delivery practices.",
    cards: [
      {
        title: "API Testing",
        description:
          "Verification of API functionality, security, performance, and data integrity to ensure seamless communication between integrated systems and services.",
      },
      {
        title: "Integration Testing",
        description:
          "Testing interactions between software modules, third-party applications, and external systems to ensure accurate data flow and interoperability.",
      },
      {
        title: "System Testing",
        description:
          "End-to-end testing of complete applications to validate overall functionality, reliability, and system behavior.",
      },
      {
        title: "User Acceptance Testing (UAT) Support",
        description:
          "Support for business stakeholders and end users during acceptance testing to ensure the solution meets business needs and expectations.",
      },
    ],
  },
  {
    label: "Performance & Quality Management",
    cards: [
      {
        title: "Performance Testing",
        description:
          "Evaluation of application responsiveness, stability, scalability, and reliability under different workload conditions.",
      },
      {
        title: "Usability Testing",
        description:
          "Assessment of user interactions to identify opportunities for improving efficiency, satisfaction, and overall user experience.",
      },
      {
        title: "Defect Management & Reporting",
        description:
          "Systematic tracking, prioritization, reporting, and verification of defects throughout the software lifecycle.",
      },
      {
        title: "Test Planning & Documentation",
        description:
          "Development of test plans, test cases, test scenarios, traceability matrices, test reports, and other quality-related documentation.",
      },
      {
        title: "Agile Scrum QA Support",
        description:
          "Active participation in Agile Scrum processes, including sprint planning, backlog refinement, sprint reviews, and continuous testing activities.",
      },
    ],
  },
  {
    label: "Healthcare & Regulatory Compliance Expertise",
    cards: [
      {
        title: "ONC Certification Testing for EHR Systems",
        description:
          "Comprehensive testing and validation support for Electronic Health Record (EHR) systems to help organizations achieve and maintain ONC certification requirements, ensuring compliance, interoperability, and quality standards.",
      },
      {
        title: "HIPAA Compliance Testing for RPM Solutions",
        description:
          "Quality assurance and validation of Remote Patient Monitoring (RPM) platforms to support HIPAA compliance requirements, ensuring patient data privacy, security, confidentiality, and regulatory adherence.",
      },
      {
        title: "Medical Software Validation",
        description:
          "Validation of healthcare applications and medical software systems to ensure they meet intended use, regulatory expectations, and quality requirements.",
      },
      {
        title: "IEC 62304 Compliance Support",
        description:
          "Support for software development lifecycle activities and testing processes aligned with IEC 62304 requirements for medical device software.",
      },
      {
        title: "Risk-Based Testing",
        description:
          "Application of risk-based testing methodologies focused on patient safety, critical functionalities, and regulatory compliance.",
      },
      {
        title: "Regulatory Documentation Support",
        description:
          "Assistance in preparing and reviewing quality and compliance documentation required for healthcare and medical software projects.",
      },
    ],
  },
  {
    label: "IT Support & Operational Quality Assurance",
    cards: [
      {
        title: "Daily Routine Testing for IT Support Systems",
        description:
          "Continuous validation and monitoring of internal and customer-facing IT support systems to ensure system stability, functionality, availability, and uninterrupted business operations — including routine verification of workflows, issue tracking systems, support portals, integrations, and operational processes.",
      },
    ],
  },
];

/** Maps SQA sections to quality-department card format */
export function sqaSectionsToQualityCards() {
  return SQA_SERVICE_SECTIONS.map((section) => ({
    label: section.label,
    cards: section.cards.map((card) => ({
      title: card.title,
      items: [card.description],
    })),
  }));
}
