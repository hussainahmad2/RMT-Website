import { SITE_NAME, SITE_URL } from "./site-config";

export function organizationJsonLd() {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: ["RMT", "RMT USA", "Revive Medical Technologies"],
    url: `${SITE_URL}/`,
    email: "info@rmt-usa.com",
    description:
      "ISO 13485 medical device manufacturing, research and development, and SaMD software solutions for regulated healthcare products.",
    logo: `${SITE_URL}/rmt-icon.png`,
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "St. Cloud Edgewater Business Centre",
        addressLocality: "Sartell",
        addressRegion: "MN",
        addressCountry: "US",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "Building 2A, W1 Street, Rawat Industrial Estate",
        addressLocality: "Islamabad",
        postalCode: "46220",
        addressCountry: "PK",
      },
    ],
    areaServed: ["US", "PK", "Worldwide"],
    sameAs: [
      "https://www.linkedin.com/company/revivemedicaltechnologies",
      "https://www.youtube.com/@ReviveMeditech",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: SITE_NAME,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-US",
  };
}

export function localBusinessJsonLd() {
  return {
    "@type": "MedicalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    email: "info@rmt-usa.com",
    image: `${SITE_URL}/rmt-icon.png`,
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
    address: {
      "@type": "PostalAddress",
      streetAddress: "St. Cloud Edgewater Business Centre",
      addressLocality: "Sartell",
      addressRegion: "MN",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 45.6216,
      longitude: -94.2069,
    },
    areaServed: ["US", "Worldwide"],
    priceRange: "$$",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "info@rmt-usa.com",
        availableLanguage: ["English"],
      },
    ],
  };
}

export function faqJsonLd(faqs: readonly { question: string; answer: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function graphJsonLd(nodes: Record<string, unknown>[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}
