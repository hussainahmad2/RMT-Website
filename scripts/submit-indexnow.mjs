#!/usr/bin/env node
/**
 * Submit canonical URLs to IndexNow (Bing / Yandex / etc.).
 * Usage: node scripts/submit-indexnow.mjs [url...]
 * Defaults to homepage + money pages when no URLs are passed.
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

function loadKey() {
  const siteConfig = readFileSync(join(root, "src/lib/site-config.ts"), "utf8");
  const match = siteConfig.match(/INDEXNOW_KEY\s*=\s*"([^"]+)"/);
  if (!match) throw new Error("INDEXNOW_KEY not found in site-config.ts");
  return match[1];
}

const key = loadKey();
const host = "rmt-usa.com";
const keyLocation = `https://${host}/${key}.txt`;

const defaultUrls = [
  "https://rmt-usa.com/",
  "https://rmt-usa.com/services/contract-manufacturing",
  "https://rmt-usa.com/services/engineering-product-development/research-development-engineering",
  "https://rmt-usa.com/services/product-development",
  "https://rmt-usa.com/services/software-ai",
  "https://rmt-usa.com/services/regulatory-compliance",
  "https://rmt-usa.com/about",
  "https://rmt-usa.com/contact",
  "https://rmt-usa.com/media",
  "https://rmt-usa.com/projects",
  "https://rmt-usa.com/insights/iso-13485-contract-manufacturing-guide",
  "https://rmt-usa.com/insights/samd-iec-62304-development-path",
  "https://rmt-usa.com/insights/fda-510k-eu-mdr-pathway",
  "https://rmt-usa.com/insights/medical-device-product-development-roadmap",
  "https://rmt-usa.com/projects/class-iii-cardiac-monitor-ce-mark",
  "https://rmt-usa.com/projects/ai-diagnostic-imaging-samd",
  "https://rmt-usa.com/projects/poc-biosensor-manufacturing-scale-up",
  "https://rmt-usa.com/projects/iso-13485-qms-medtech-startup",
  "https://rmt-usa.com/projects/orthopaedic-implant-contract-manufacturing",
  "https://rmt-usa.com/sitemap.xml",
];

const urlList = process.argv.slice(2).length ? process.argv.slice(2) : defaultUrls;

const body = {
  host,
  key,
  keyLocation,
  urlList,
};

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(body),
});

const text = await res.text();
console.log(`IndexNow ${res.status}: ${text || "(empty body)"}`);
if (!res.ok && res.status !== 202) process.exit(1);
