export type CitationTarget = {
  name: string;
  url: string;
  why: string;
  action: string;
};

/** Official NAP — use these exact strings on every directory / citation. */
export const CITATION_NAP = {
  legalName: "Revive Medical Technologies Inc.",
  shortName: "RMT",
  website: "https://rmt-usa.com",
  email: "info@rmt-usa.com",
  phone: "+92-51-8480117",
  usAddress: {
    street: "St. Cloud Edgewater Business Centre",
    city: "Sartell",
    region: "MN",
    postal: "56377",
    country: "United States",
    oneLine: "St. Cloud Edgewater Business Centre, Sartell, MN 56377, United States",
  },
  pkAddress: {
    street: "Building 2A, W1 Street, Rawat Industrial Estate",
    city: "Islamabad",
    postal: "46220",
    country: "Pakistan",
    oneLine: "Building 2A, W1 Street, Rawat Industrial Estate, Islamabad, 46220, Pakistan",
  },
  categories: [
    "Medical device manufacturer",
    "Contract manufacturing",
    "Medical device consulting",
    "Biotechnology company",
  ],
  boilerplate:
    "Revive Medical Technologies Inc. (RMT) provides ISO 13485 medical device manufacturing, medical device R&D, SaMD software, and regulatory compliance support for Class I–III devices — from concept and design transfer through cleanroom production and market submissions.",
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/revivemedicaltechnologies" },
    { label: "YouTube", href: "https://www.youtube.com/@ReviveMeditech" },
  ],
  moneyPages: [
    { label: "Contract Manufacturing", href: "https://rmt-usa.com/services/contract-manufacturing" },
    { label: "Medical Device R&D", href: "https://rmt-usa.com/services/engineering-product-development/research-development-engineering" },
    { label: "Product Development", href: "https://rmt-usa.com/services/product-development" },
    { label: "Software & AI (SaMD)", href: "https://rmt-usa.com/services/software-ai" },
    { label: "Regulatory Compliance", href: "https://rmt-usa.com/services/regulatory-compliance" },
  ],
} as const;

/** Priority directories and association listings to claim or request. */
export const BACKLINK_TARGETS: CitationTarget[] = [
  {
    name: "Google Business Profile",
    url: "https://business.google.com/",
    why: "Local pack + Maps visibility for Sartell / Minnesota searches.",
    action: "Claim or verify the US office listing. Use exact NAP above. Add website, phone, categories, and photos.",
  },
  {
    name: "LinkedIn Company Page",
    url: "https://www.linkedin.com/company/revivemedicaltechnologies",
    why: "Primary B2B sameAs signal and referral traffic.",
    action: "Confirm website is https://rmt-usa.com, post weekly, link money pages in Featured.",
  },
  {
    name: "Bing Places",
    url: "https://www.bingplaces.com/",
    why: "Bing / Copilot local discovery; IndexNow already notifies Bing of URLs.",
    action: "Create or claim listing with identical NAP and website.",
  },
  {
    name: "Crunchbase",
    url: "https://www.crunchbase.com/",
    why: "High-authority company citation; often scraped by other directories.",
    action: "Claim organization profile; set homepage and categories to medical devices / manufacturing.",
  },
  {
    name: "Clutch or similar B2B directories",
    url: "https://clutch.co/",
    why: "Service-firm backlinks and review signals for manufacturing / software.",
    action: "Create company profile; request client reviews; link to contract manufacturing and software-ai.",
  },
  {
    name: "Thomasnet / industry supplier directories",
    url: "https://www.thomasnet.com/",
    why: "Manufacturing buyer intent; strong for contract manufacturing keywords.",
    action: "Add ISO 13485 medical device manufacturing listing with Sartell + Islamabad facilities.",
  },
  {
    name: "MedTech / AAMI / local chamber memberships",
    url: "https://www.aami.org/",
    why: "Industry association member directories pass relevant topical links.",
    action: "Join or claim membership directory listings; request website link to rmt-usa.com.",
  },
  {
    name: "Minnesota / St. Cloud business directories",
    url: "https://www.stcloudareachamber.com/",
    why: "Local citation consistency for US HQ NAP.",
    action: "List headquarters with exact Sartell address and https://rmt-usa.com.",
  },
];

export const GSC_FOLLOWUPS = [
  "Search Console → Pages → open Not found (404) → Validate fix",
  "Search Console → Pages → open Blocked by robots.txt → Validate fix",
  "Search Console → Sitemaps → confirm /sitemap.xml still Success",
  "Performance → filter last 28 days → note queries for money pages and new insights",
] as const;
