/** FAQs for manufacturing / R&D money pages (schema + no-JS shell). */

export const MANUFACTURING_FAQS = [
  {
    question: "What ISO 13485 medical device manufacturing services does RMT offer?",
    answer:
      "ISO 13485 contract manufacturing in classified cleanrooms for Class I, II, and III medical devices, including design transfer, process validation, pilot builds, and commercial scale-up.",
  },
  {
    question: "Where does Revive Medical Technologies manufacture medical devices?",
    answer:
      "Headquarters are in Sartell, Minnesota, United States, with ISO-classified manufacturing and R&D operations in Rawat Industrial Estate, Islamabad, Pakistan.",
  },
  {
    question: "Can RMT support design transfer into manufacturing?",
    answer:
      "Yes. Teams handle process development, equipment qualification, quality documentation, and pilot-to-commercial production under an ISO 13485 quality management system.",
  },
] as const;

export const RD_FAQS = [
  {
    question: "Does RMT provide medical device research and development?",
    answer:
      "Yes. Medical device R&D covers prototype engineering, experimental systems, biomaterials, catheters, production equipment, and transfer into ISO 13485 manufacturing.",
  },
  {
    question: "What kinds of devices can RMT develop?",
    answer:
      "Programs span interventional and cardiovascular devices, biomaterials and coatings, electromechanical systems, and custom production equipment for regulated manufacturing.",
  },
  {
    question: "How does R&D connect to manufacturing at RMT?",
    answer:
      "The same organization runs concept, verification, design transfer, and cleanroom production so prototypes move into validated manufacturing with one partner.",
  },
] as const;

export const PRODUCT_DEVELOPMENT_FAQS = [
  {
    question: "What does medical device product development include at RMT?",
    answer:
      "Concept and feasibility, design and engineering, prototyping, verification and validation, regulatory consultancy, and design transfer into manufacturing.",
  },
  {
    question: "Does product development support FDA and EU MDR pathways?",
    answer:
      "Yes. Development work aligns with design controls, risk management, and technical documentation needed for FDA 510(k), EU MDR, and related submissions.",
  },
] as const;

export const SOFTWARE_AI_FAQS = [
  {
    question: "What medical device software and SaMD services does RMT offer?",
    answer:
      "Custom clinical applications, software as a medical device (SaMD), AI solutions, cloud and DevOps platforms, and IEC 62304-aligned software quality documentation.",
  },
  {
    question: "Can RMT support FDA registration for software as a medical device?",
    answer:
      "Yes. Teams align architecture, risk management, verification evidence, and submission-ready documentation with FDA SaMD expectations and related international pathways.",
  },
] as const;

export const REGULATORY_FAQS = [
  {
    question: "What regulatory compliance services does RMT provide?",
    answer:
      "FDA 510(k) and related US pathways, EU MDR support, quality management system implementation including ISO 13485, and technical documentation for Class I–III devices.",
  },
  {
    question: "Does RMT help with ISO 13485 quality management systems?",
    answer:
      "Yes. Regulatory and quality teams support QMS design, gap assessment, SOP development, and preparation for certification and ongoing compliance.",
  },
] as const;

export function faqsForPath(path: string): readonly { question: string; answer: string }[] | null {
  if (path === "/services/contract-manufacturing" || path.startsWith("/services/contract-manufacturing/")) {
    return MANUFACTURING_FAQS;
  }
  if (
    path === "/services/engineering-product-development/research-development-engineering" ||
    path === "/services/engineering-product-development"
  ) {
    return RD_FAQS;
  }
  if (path === "/services/product-development" || path.startsWith("/services/product-development/")) {
    return PRODUCT_DEVELOPMENT_FAQS;
  }
  if (path === "/services/software-ai" || path.startsWith("/services/software-ai/")) {
    return SOFTWARE_AI_FAQS;
  }
  if (path === "/services/regulatory-compliance" || path.startsWith("/services/regulatory-compliance/")) {
    return REGULATORY_FAQS;
  }
  return null;
}
