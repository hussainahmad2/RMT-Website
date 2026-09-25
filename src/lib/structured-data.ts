import { SITE_NAME, SITE_URL } from "./site-config";

export function organizationJsonLd() {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    email: "info@rmt-usa.com",
    description:
      "Medical device manufacturing, research and development, and software solutions for regulated healthcare products.",
    address: [
      {
        "@type": "PostalAddress",
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
