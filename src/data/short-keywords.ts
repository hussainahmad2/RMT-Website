/**
 * Short-head keyword → primary URL map for Google indexing / on-page SEO.
 * Use these URLs in Search Console → URL Inspection → Request indexing.
 */
export type ShortKeywordTarget = {
  keyword: string;
  url: string;
  pageLabel: string;
};

export const SHORT_KEYWORD_TARGETS: ShortKeywordTarget[] = [
  // User-requested
  { keyword: "OEM manufacturing", url: "/services/contract-manufacturing/manufacturing-capabilities", pageLabel: "OEM & device manufacturing capabilities" },
  { keyword: "medical device manufacturing", url: "/services/contract-manufacturing", pageLabel: "Medical device manufacturing hub" },
  { keyword: "healthcare solution", url: "/services/software-ai", pageLabel: "Software & healthcare solutions" },
  { keyword: "AI solution", url: "/services/software-ai/ai-solutions", pageLabel: "AI solutions" },
  { keyword: "ONC certification", url: "/services/software-ai/software-compliance", pageLabel: "ONC & software compliance" },
  { keyword: "CCM PCM implementation", url: "/services/software-ai/custom-medical-software", pageLabel: "CCM / PCM software implementation" },
  { keyword: "medical device R&D", url: "/services/engineering-product-development/research-development-engineering", pageLabel: "Medical device R&D" },
  { keyword: "manufacturing R&D", url: "/services/engineering-product-development", pageLabel: "Engineering & manufacturing R&D" },

  // Short heads — manufacturing / OEM
  { keyword: "device manufacturing", url: "/services/contract-manufacturing", pageLabel: "Device manufacturing" },
  { keyword: "contract manufacturing", url: "/services/contract-manufacturing", pageLabel: "Contract manufacturing" },
  { keyword: "OEM medical device", url: "/services/contract-manufacturing/manufacturing-capabilities", pageLabel: "OEM medical device manufacturing" },
  { keyword: "cleanroom manufacturing", url: "/services/contract-manufacturing/cleanroom-infrastructure", pageLabel: "Cleanroom manufacturing" },
  { keyword: "ISO 13485 manufacturing", url: "/services/contract-manufacturing", pageLabel: "ISO 13485 manufacturing" },
  { keyword: "catheter manufacturing", url: "/services/contract-manufacturing", pageLabel: "Catheter / device manufacturing" },
  { keyword: "machine manufacturing", url: "/services/production-equipment-engineering", pageLabel: "Machine manufacturing" },
  { keyword: "production equipment", url: "/services/production-equipment-engineering", pageLabel: "Production equipment" },

  // Short heads — regulatory
  { keyword: "regulatory compliance", url: "/services/regulatory-compliance", pageLabel: "Regulatory compliance" },
  { keyword: "FDA compliance", url: "/services/regulatory-compliance/fda-compliance", pageLabel: "FDA compliance" },
  { keyword: "EU MDR", url: "/services/regulatory-compliance/eu-mdr-compliance", pageLabel: "EU MDR" },
  { keyword: "510k", url: "/services/regulatory-compliance/fda-compliance", pageLabel: "FDA 510(k)" },
  { keyword: "ISO 13485 QMS", url: "/services/regulatory-compliance/quality-management-system", pageLabel: "ISO 13485 QMS" },
  { keyword: "CE marking", url: "/services/regulatory-compliance/eu-mdr-compliance", pageLabel: "CE marking / EU MDR" },

  // Short heads — software / healthcare / AI
  { keyword: "software services", url: "/services/software-ai", pageLabel: "Software services" },
  { keyword: "medical software", url: "/services/software-ai/custom-medical-software", pageLabel: "Medical software" },
  { keyword: "SaMD", url: "/services/software-ai", pageLabel: "SaMD software" },
  { keyword: "healthcare software", url: "/services/software-ai", pageLabel: "Healthcare software" },
  { keyword: "healthcare AI", url: "/services/software-ai/ai-solutions", pageLabel: "Healthcare AI" },
  { keyword: "clinical decision support", url: "/services/software-ai/ai-solutions", pageLabel: "Clinical decision support AI" },
  { keyword: "RPM software", url: "/services/software-ai/custom-medical-software", pageLabel: "RPM software" },
  { keyword: "CCM software", url: "/services/software-ai/custom-medical-software", pageLabel: "CCM software" },
  { keyword: "PCM software", url: "/services/software-ai/custom-medical-software", pageLabel: "PCM software" },
  { keyword: "EHR integration", url: "/services/software-ai/custom-medical-software", pageLabel: "EHR integration" },
  { keyword: "HIPAA compliance software", url: "/services/software-ai/software-compliance", pageLabel: "HIPAA software compliance" },
  { keyword: "IEC 62304", url: "/services/software-ai/software-compliance", pageLabel: "IEC 62304" },

  // Short heads — R&D / product
  { keyword: "medical device engineering", url: "/services/engineering-product-development", pageLabel: "Medical device engineering" },
  { keyword: "product development", url: "/services/product-development", pageLabel: "Product development" },
  { keyword: "prototype development", url: "/services/engineering-product-development/research-development-engineering", pageLabel: "Prototype / R&D" },
  { keyword: "design transfer", url: "/services/product-development", pageLabel: "Design transfer" },
  { keyword: "biomaterials R&D", url: "/services/bmd", pageLabel: "Biomaterials R&D" },

  // Short heads — testing / quality
  { keyword: "medical device testing", url: "/testing", pageLabel: "Medical device testing" },
  { keyword: "sterility testing", url: "/services/mbl-laboratory/sterility-testing", pageLabel: "Sterility testing" },
  { keyword: "quality control medical device", url: "/services/quality-testing", pageLabel: "Quality control" },
];

/** Unique absolute paths to request indexing (priority order). */
export function getShortKeywordIndexUrls(origin = "https://rmt-usa.com"): string[] {
  const seen = new Set<string>();
  const urls: string[] = [];
  for (const row of SHORT_KEYWORD_TARGETS) {
    if (seen.has(row.url)) continue;
    seen.add(row.url);
    urls.push(`${origin}${row.url}`);
  }
  return urls;
}
