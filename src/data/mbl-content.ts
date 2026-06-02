/** Extended content from MBL Website data.docx — Microbiology Laboratory Testing service page */

export const MBL_EQUIPMENT = [
  "Laboratory Hot Incubator",
  "Laboratory Drying Oven",
  "Laboratory Cool Incubator",
  "Autoclave",
  "RO Filtration Plant",
  "Multi-Position Filtration Assembly",
  "Bio-Safety Cabinet",
  "Laminar Flow Cabinet",
];

export const MBL_STERILITY_METHODS: { name: string; description: string }[] = [
  {
    name: "Membrane Filtration Sterility Test",
    description:
      "Product is filtered through a sterile membrane that retains microorganisms, followed by incubation in growth media.",
  },
  {
    name: "Direct Inoculation Sterility Test",
    description:
      "The sample is directly added into sterile culture media and incubated to detect microbial growth.",
  },
  {
    name: "Product Flush Method",
    description:
      "Sterile fluid is flushed through a device to recover microorganisms for sterility evaluation.",
  },
  {
    name: "Immersion Sterility Method",
    description:
      "The entire device or implant is submerged in culture media and incubated for contamination detection.",
  },
  {
    name: "Rapid Sterility Testing",
    description:
      "Advanced technologies such as ATP bioluminescence or PCR rapidly detect microbial contamination.",
  },
];

export const MBL_BET_METHODS: { name: string; description: string }[] = [
  {
    name: "Gel Clot BET Method",
    description: "Endotoxins react with LAL reagent to form a visible gel clot indicating a positive result.",
  },
  {
    name: "Endpoint Turbidimetric BET",
    description:
      "Endotoxin concentration is determined by measuring final turbidity produced in the LAL reaction.",
  },
  {
    name: "Kinetic Turbidimetric BET",
    description: "Endotoxin level is quantified by monitoring the rate of turbidity development over time.",
  },
  {
    name: "Endpoint Chromogenic BET",
    description:
      "Endotoxin activates an enzymatic reaction producing measurable color intensity at the endpoint.",
  },
  {
    name: "Kinetic Chromogenic BET",
    description:
      "Endotoxin concentration is determined from the rate of color development during the chromogenic reaction.",
  },
  {
    name: "Recombinant Factor C (rFC) BET",
    description:
      "Recombinant Factor C protein specifically detects endotoxins without using horseshoe crab-derived LAL.",
  },
];

export const MBL_SPECIFIC_PATHOGENS = [
  "Escherichia coli Test",
  "Salmonella Test",
  "Staphylococcus aureus Test",
  "Pseudomonas aeruginosa Test",
  "Candida albicans Test",
  "Clostridium Test",
  "Bile-Tolerant Gram-Negative Bacteria (BTGN) Test",
  "Enterobacteria Test",
];
