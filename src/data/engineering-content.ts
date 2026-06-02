/** Engineering, automation & design-fabrication content */

export interface EngineeringMethodologyStep {
  step: string;
  title: string;
  description: string;
  activities: string[];
}

export const ENGINEERING_METHODOLOGY: EngineeringMethodologyStep[] = [
  {
    step: "01",
    title: "Requirement Analysis",
    description:
      "We analyze operational requirements, project goals, safety standards, and technical constraints to establish a strong project foundation.",
    activities: [
      "Requirement gathering",
      "Process analysis",
      "Feasibility study",
      "Safety assessment",
      "Project planning",
    ],
  },
  {
    step: "02",
    title: "System Architecture & Design",
    description:
      "We develop optimized system architectures for automation, mechanical systems.",
    activities: [
      "Electrical architecture design",
      "Mechanical CAD modeling",
      "Embedded hardware design",
      "Software flow development",
      "Thermal & structural simulations",
    ],
  },
  {
    step: "03",
    title: "Development & Integration",
    description:
      "Our engineering team develops and integrates complete systems using industrial-grade technologies and rapid prototyping tools.",
    activities: [
      "PLC & HMI programming",
      "Embedded firmware development",
      "PCB integration",
      "Mechanical fabrication",
      "FDM & SLA 3D printing",
      "Sensor and actuator integration",
    ],
  },
  {
    step: "04",
    title: "Testing & Validation",
    description:
      "Every system undergoes comprehensive testing to ensure stable, accurate, and reliable performance.",
    activities: [
      "Functional testing",
      "Thermal testing",
      "Mechanical validation",
      "Communication testing",
      "Prototype evaluation",
      "System optimization",
    ],
  },
  {
    step: "05",
    title: "Deployment & Support",
    description:
      "We provide deployment assistance, technical documentation, and long-term engineering support.",
    activities: [
      "System commissioning",
      "Operator training",
      "Technical documentation",
      "Maintenance support",
      "Future scalability planning",
    ],
  },
];

export const ENGINEERING_DELIVERABLES = {
  designDocumentation: [
    "2D Engineering Drawings (Manufacturing Ready)",
    "3D CAD Models (SOLIDWORKS Files)",
    "Electrical Schematics",
    "PCB Design Files",
    "BOM (Bill of Materials)",
    "Wiring Diagrams",
    "System Architecture Diagrams",
    "Technical Documentation & User Manuals",
  ],
  softwareControl: [
    "PLC Program Files",
    "HMI Interface Projects (Weintek)",
    "SCADA Configuration Files",
    "Embedded Firmware (STM32 / ESP32 / Arduino)",
    "Control Logic Flowcharts",
    "IoT Dashboard Integration (if required)",
  ],
  physicalPrototype: [
    "Functional Mechanical Prototypes",
    "3D Printed Components (FDM / SLA)",
    "Assembled Systems or Subsystems",
    "Sensor Integrated Modules",
    "Fully Tested Control Systems",
  ],
};

export const ENGINEERING_SPECIALIZED_AREAS = {
  biomedical: [
    "Biomedical Automation",
    "Precision Temperature Control",
    "Medical Device Prototyping",
    "Controlled Thermal Systems",
    "Syringe Heating Systems",
    "Biomedical Process Control",
    "Precision Thermal Regulation",
    "Prototype Biomedical Equipment Development",
  ],
  researchDevelopment: [
    "Prototype Engineering",
    "Experimental System Design",
    "Rapid Development Solutions",
    "Custom Engineering Projects",
    "Advanced Technology Integration",
  ],
  industrialSafety: [
    "Emergency Stop Systems",
    "Protection Interlocks",
    "Alarm Systems",
    "Industrial Safety Logic",
    "Fault Detection Systems",
  ],
};

export const ENGINEERING_OTHER_PRODUCT_DESIGN = {
  mechanical: [
    "Machine Design & Development",
    "Enclosure Design (Industrial & Medical)",
    "Sheet Metal Design",
    "Precision Mechanical Assemblies",
    "Ergonomic Product Design",
  ],
  thermalControl: [
    "Heater-Based Systems (Band Heaters, Cartridge Heaters)",
    "Temperature Control Systems (Up to 350°C+ Applications)",
    "Thermal Optimization Systems",
    "Precision Heating Modules",
  ],
  automationProducts: [
    "PLC-Based Machines",
    "Automated Sorting Systems",
    "Industrial Process Control Machines",
    "Conveyor & Motion Systems",
    "Safety Interlock Systems",
  ],
  biomedicalProducts: [
    "Controlled Thermal Biomedical Devices",
    "Laboratory Automation Equipment",
    "Experimental Medical Prototypes",
  ],
};

export const DESIGN_FABRICATION_PRINTERS = {
  fdm: ["Bambu Lab X1 Carbon (X1C)", "Creality K1 Max", "Artillery Sidewinder X4 Pro"],
  sla: ["Phrozen Mighty 8K"],
};
