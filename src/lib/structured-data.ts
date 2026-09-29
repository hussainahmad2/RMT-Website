import { SITE_EMAIL, SITE_NAME, SITE_PHONE, SITE_URL, US_POSTAL_CODE } from "./site-config";

export function organizationJsonLd() {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: ["RMT", "RMT USA", "Revive Medical Technologies"],
    url: `${SITE_URL}/`,
    email: SITE_EMAIL,
    telephone: SITE_PHONE,
    description:
      "ISO 13485 medical device manufacturing, research and development, and SaMD software solutions for regulated healthcare products.",
    logo: `${SITE_URL}/rmt-icon.png`,
    knowsAbout: [
      "ISO 13485",
      "medical device manufacturing",
      "medical device contract manufacturing",
      "medical device research and development",
      "medical device R&D",
      "cleanroom manufacturing",
      "SaMD",
      "FDA 510(k)",
      "EU MDR",
    ],
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "St. Cloud Edgewater Business Centre",
        addressLocality: "Sartell",
        addressRegion: "MN",
        postalCode: US_POSTAL_CODE,
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
    founder: { "@id": `${SITE_URL}/#ceo` },
    employee: { "@id": `${SITE_URL}/#ceo` },
    sameAs: [
      "https://www.linkedin.com/company/revivemedicaltechnologies",
      "https://www.youtube.com/@ReviveMeditech",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: SITE_PHONE,
        email: SITE_EMAIL,
        availableLanguage: ["English"],
        areaServed: ["US", "PK", "Worldwide"],
      },
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
    email: SITE_EMAIL,
    telephone: SITE_PHONE,
    image: `${SITE_URL}/opengraph.jpg`,
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
    address: {
      "@type": "PostalAddress",
      streetAddress: "St. Cloud Edgewater Business Centre",
      addressLocality: "Sartell",
      addressRegion: "MN",
      postalCode: US_POSTAL_CODE,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 45.6216,
      longitude: -94.2069,
    },
    areaServed: ["US", "Worldwide"],
    priceRange: "$$",
    knowsAbout: [
      "ISO 13485 medical device manufacturing",
      "medical device R&D",
      "contract manufacturing",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: SITE_PHONE,
        email: SITE_EMAIL,
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

export function personJsonLd() {
  return {
    "@type": "Person",
    "@id": `${SITE_URL}/#ceo`,
    name: "Dr. Murtaza Najabat Ali",
    jobTitle: "Chief Executive Officer",
    description:
      "Founder and CEO of Revive Medical Technologies. Biomedical engineer with a PhD from the University of Sheffield; leads ISO 13485 medical device manufacturing, R&D, and SaMD programs.",
    worksFor: { "@id": `${SITE_URL}/#organization` },
    url: `${SITE_URL}/about`,
    image: `${SITE_URL}/team/c-level/ceo.webp`,
    sameAs: ["https://www.linkedin.com/company/revivemedicaltechnologies"],
    knowsAbout: [
      "medical device manufacturing",
      "medical device R&D",
      "ISO 13485",
      "biomaterials",
      "regulatory strategy",
    ],
  };
}

export function graphJsonLd(nodes: Record<string, unknown>[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}
