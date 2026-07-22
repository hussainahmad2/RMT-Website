import { INSIGHT_ARTICLES } from "@/data/insights-content";
import docxMap from "@/data/insights-images.json";

type DocxArticle = {
  index: number;
  images: string[];
  title: string;
  paras: string[];
};

type InsightPostDetail = {
  heroImage: string;
  galleryImages: string[];
  body: string[];
  tags: string[];
  links: string[];
  sourceTitle: string;
};

const DOCX_ARTICLES = docxMap as DocxArticle[];

const DOCX_INDEX_BY_ID: Record<string, number> = {
  "22-rpm-ecosystem": 16,
  "22-rpm-google-play": 11,
  "fda-small-business-waiver": 2,
  "ace-pump": 1,
  "biomaterial-scaffolds": 3,
  "microspheres-milestone": 15,
  "scttm-catheter-testing": 10,
  "vision-awareness-device": 8,
  "product-development-lifecycle": 9,
  "comprehensive-testing": 14,
  "bath-shaker": 7,
  "tensura-stretching": 20,
  "aquelis-coating": 22,
  "rmt-biomaterials-legacy": 19,
};

const FALLBACK_IMAGE_BY_ID: Record<string, string> = {
  "eu-mdr-cybersecurity": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=85",
  "hl7-vs-fhir": "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=1600&q=85",
};

const FALLBACK_BODY_BY_ID: Record<string, string[]> = {
  "eu-mdr-cybersecurity": [
    "A practical guide to aligning software and device cybersecurity expectations with the EU MDR framework.",
    "It covers technical documentation, secure development controls, and the evidence reviewers expect to see in a submission-ready package.",
  ],
  "hl7-vs-fhir": [
    "A clear comparison of healthcare interoperability standards and where each one fits in a modern healthcare platform.",
    "The goal is to help teams make an implementation choice that balances compatibility, speed, and long-term maintainability.",
  ],
};

const pickDocxArticle = (id: string): DocxArticle | undefined => {
  const index = DOCX_INDEX_BY_ID[id];
  if (!index) return undefined;
  return DOCX_ARTICLES.find((article) => article.index === index);
};

const imagePath = (relativePath: string) => `/insights/posts/${relativePath.split("/").pop()}`;

const TAG_PATTERN = /#([A-Za-z0-9_]+)/g;
const URL_PATTERN = /https?:\/\/[^\s)]+/g;
const IGNORED_PREFIXES = [
  "already okay",
  "new",
  "fix tags",
  "add tags",
  "make sure that the tags are not in post but in tags",
];

const cleanSourceTitle = (raw: string) =>
  raw
    .replace(/^(Already okay|Fix tags|Add tags)\s*/i, "")
    .replace(/\s*\|\s*Revive Medical Technologies Inc\.?$/i, "")
    .trim();

const extractTags = (text: string) => {
  const tags = [];
  for (const match of text.matchAll(TAG_PATTERN)) {
    const normalized = match[1].trim();
    if (normalized) tags.push(normalized);
  }
  return tags;
};

const extractUrls = (text: string) => {
  const urls = [];
  for (const match of text.matchAll(URL_PATTERN)) {
    urls.push(match[0]);
  }
  return urls;
};

const shouldIgnoreParagraph = (text: string) => {
  const lower = text.trim().toLowerCase();
  return IGNORED_PREFIXES.some((prefix) => lower.startsWith(prefix));
};

const cleanBodyParagraph = (text: string) => {
  let output = text.trim();
  output = output.replace(URL_PATTERN, "").trim();
  output = output.replace(TAG_PATTERN, "").trim();
  output = output.replace(/\s{2,}/g, " ").trim();
  return output;
};

export function getInsightPostDetail(id: string): InsightPostDetail | null {
  const article = INSIGHT_ARTICLES.find((item) => item.id === id);
  if (!article) return null;

  const docxArticle = pickDocxArticle(id);
  if (docxArticle) {
    const tags = new Set<string>();
    const links = new Set<string>();
    const body: string[] = [];

    docxArticle.paras.forEach((para, index) => {
      if (!para) return;

      extractTags(para).forEach((tag) => tags.add(tag));
      extractUrls(para).forEach((url) => links.add(url));

      if (index === 0) return;
      if (shouldIgnoreParagraph(para)) return;
      if (/^(phone:|email:|website:)\s*/i.test(para)) return;
      if (/^#/.test(para.trim())) return;

      const cleaned = cleanBodyParagraph(para);
      if (cleaned) {
        body.push(cleaned);
      }
    });

    return {
      heroImage: imagePath(docxArticle.images[0]),
      galleryImages: docxArticle.images.slice(1).map(imagePath),
      body: body.length ? body : [article.excerpt],
      tags: Array.from(tags),
      links: Array.from(links),
      sourceTitle: cleanSourceTitle(docxArticle.title) || article.title,
    };
  }

  return {
    heroImage: FALLBACK_IMAGE_BY_ID[id] ?? article.image,
    galleryImages: [],
    body: FALLBACK_BODY_BY_ID[id] ?? [article.excerpt],
    tags: article.tags ?? [],
    links: [],
    sourceTitle: article.title,
  };
}
