/**
 * One-shot: reorganize src/ with clear folders + simple names (UTF-8 safe).
 * Run: node scripts/reorganize-src.mjs
 */
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function move(from, to) {
  const src = path.join(root, from);
  const dest = path.join(root, to);
  if (!fs.existsSync(src)) {
    console.warn("MISSING:", from);
    return;
  }
  ensureDir(path.dirname(dest));
  if (fs.existsSync(dest)) fs.rmSync(dest, { force: true });
  fs.renameSync(src, dest);
  console.log("MOVE", from, "->", to);
}

function read(file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

function write(file, text) {
  const full = path.join(root, file);
  ensureDir(path.dirname(full));
  fs.writeFileSync(full, text, "utf8");
}

function transform(text) {
  const pairs = [
    ["@/components/ThemeProvider", "@/components/layout/ThemeProvider"],
    ["@/components/Navbar", "@/components/layout/Navbar"],
    ["@/components/Footer", "@/components/layout/Footer"],
    ["@/components/ScrollToTop", "@/components/layout/ScrollToTop"],
    ["@/components/PageContainer", "@/components/layout/PageContainer"],
    ["@/components/HomeProductShowcase", "@/components/home/ProductShowcase"],
    ["@/components/HomeServicesSection", "@/components/home/ServicesSection"],
    ["@/components/HomeWhyRmtSection", "@/components/home/WhyRmtSection"],
    ["@/components/PartnerLogoCarousel", "@/components/home/PartnerLogos"],
    ["@/components/AnimatedSection", "@/components/shared/AnimatedSection"],
    ["@/components/AnimatedCounter", "@/components/shared/AnimatedCounter"],
    ["@/components/CinematicPageHero", "@/components/shared/PageHero"],
    ["@/components/HomeSection", "@/components/shared/PageSection"],
    ["@/components/LogoSpinner", "@/components/shared/LogoSpinner"],
    ["@/components/WorldMap", "@/components/shared/WorldMap"],
    ["@/components/RequestQuoteModal", "@/components/shared/RequestQuoteModal"],
    ["@/components/LeadershipCard", "@/components/shared/LeadershipCard"],
    ["@/components/TeamDepartmentSection", "@/components/shared/TeamSection"],
    ["@/data/revive-manufacturing-content", "@/data/manufacturing-content"],
    ["@/data/sqa-services-content", "@/data/software-qa-content"],
    ["@/data/insights-docx-map.json", "@/data/insights-images.json"],
    ['./revive-manufacturing-content"', './manufacturing-content"'],
    ["./revive-manufacturing-content'", "./manufacturing-content'"],
    ['./sqa-services-content"', './software-qa-content"'],
    ["./sqa-services-content'", "./software-qa-content'"],
    ["_shared/_shared", "_shared/ServiceTemplates"],
    ["./bmd-detail-visual", "./BmdVisuals"],
    ["./manufacturing-detail-visual", "./ManufacturingVisuals"],
    ["./production-equipment-detail-visual", "./ProductionEquipmentVisuals"],
    ["./service-extras-visual", "./ServiceExtrasVisual"],
    ["./quality-dept-detail-theme", "./QualityDeptTheme"],
    ['from "./_shared"', 'from "./ServiceTemplates"'],
  ];

  for (const [a, b] of pairs) text = text.split(a).join(b);

  // Symbol renames (word-ish)
  const symbols = [
    ["CinematicPageHero", "PageHero"],
    ["HomeSection", "PageSection"],
    ["HomeProductShowcase", "ProductShowcase"],
    ["HomeCapabilitiesSection", "CapabilitiesSection"],
    ["HomeServicesSection", "ServicesSection"],
    ["HomeWhyRmtSection", "WhyRmtSection"],
    ["PartnerLogoCarousel", "PartnerLogos"],
  ];
  for (const [a, b] of symbols) {
    text = text.replace(new RegExp(`\\b${a}\\b`, "g"), b);
  }
  return text;
}

function walk(dir, out = []) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const st = fs.statSync(full);
    if (st.isDirectory()) walk(full, out);
    else if (/\.(ts|tsx)$/.test(name)) out.push(full);
  }
  return out;
}

// --- Moves ---
const moves = [
  ["src/components/Navbar.tsx", "src/components/layout/Navbar.tsx"],
  ["src/components/Footer.tsx", "src/components/layout/Footer.tsx"],
  ["src/components/ScrollToTop.tsx", "src/components/layout/ScrollToTop.tsx"],
  ["src/components/ThemeProvider.tsx", "src/components/layout/ThemeProvider.tsx"],
  ["src/components/PageContainer.tsx", "src/components/layout/PageContainer.tsx"],
  ["src/components/HomeProductShowcase.tsx", "src/components/home/ProductShowcase.tsx"],
  ["src/components/HomeServicesSection.tsx", "src/components/home/ServicesSection.tsx"],
  ["src/components/HomeWhyRmtSection.tsx", "src/components/home/WhyRmtSection.tsx"],
  ["src/components/PartnerLogoCarousel.tsx", "src/components/home/PartnerLogos.tsx"],
  ["src/components/AnimatedSection.tsx", "src/components/shared/AnimatedSection.tsx"],
  ["src/components/AnimatedCounter.tsx", "src/components/shared/AnimatedCounter.tsx"],
  ["src/components/CinematicPageHero.tsx", "src/components/shared/PageHero.tsx"],
  ["src/components/HomeSection.tsx", "src/components/shared/PageSection.tsx"],
  ["src/components/LogoSpinner.tsx", "src/components/shared/LogoSpinner.tsx"],
  ["src/components/WorldMap.tsx", "src/components/shared/WorldMap.tsx"],
  ["src/components/RequestQuoteModal.tsx", "src/components/shared/RequestQuoteModal.tsx"],
  ["src/components/LeadershipCard.tsx", "src/components/shared/LeadershipCard.tsx"],
  ["src/components/TeamDepartmentSection.tsx", "src/components/shared/TeamSection.tsx"],
  ["src/pages/services/_shared/_shared.tsx", "src/pages/services/_shared/ServiceTemplates.tsx"],
  ["src/pages/services/_shared/bmd-detail-visual.tsx", "src/pages/services/_shared/BmdVisuals.tsx"],
  ["src/pages/services/_shared/manufacturing-detail-visual.tsx", "src/pages/services/_shared/ManufacturingVisuals.tsx"],
  ["src/pages/services/_shared/production-equipment-detail-visual.tsx", "src/pages/services/_shared/ProductionEquipmentVisuals.tsx"],
  ["src/pages/services/_shared/service-extras-visual.tsx", "src/pages/services/_shared/ServiceExtrasVisual.tsx"],
  ["src/pages/services/_shared/quality-dept-detail-theme.tsx", "src/pages/services/_shared/QualityDeptTheme.tsx"],
  ["src/data/revive-manufacturing-content.ts", "src/data/manufacturing-content.ts"],
  ["src/data/sqa-services-content.ts", "src/data/software-qa-content.ts"],
  ["src/data/insights-docx-map.json", "src/data/insights-images.json"],
];

for (const [from, to] of moves) move(from, to);

// Delete unused components
for (const f of [
  "src/components/InnovationCard.tsx",
  "src/components/PageTransition.tsx",
  "src/components/ServiceCard.tsx",
  "src/components/SkeletonCard.tsx",
]) {
  if (fs.existsSync(path.join(root, f))) {
    fs.rmSync(path.join(root, f));
    console.log("DELETE", f);
  }
}

// Patch all TS/TSX imports
let patched = 0;
for (const full of walk(path.join(root, "src"))) {
  const rel = path.relative(root, full).replace(/\\/g, "/");
  const before = fs.readFileSync(full, "utf8");
  const after = transform(before);
  if (after !== before) {
    fs.writeFileSync(full, after, "utf8");
    patched++;
    console.log("PATCH", rel);
  }
}

write(
  "src/pages/services/_shared/index.ts",
  `export {
  ServicesOverview,
  ServiceDetail,
  SubServiceDetail,
} from "./ServiceTemplates";
`
);

write(
  "src/pages/README.md",
  `# Pages folder structure

Each route has its own folder with a matching file (e.g. \`gallery/gallery.tsx\`).

## Top-level pages

| URL | File |
|-----|------|
| \`/\` | \`home/home.tsx\` |
| \`/about\` | \`about/about.tsx\` |
| \`/contact\` | \`contact/contact.tsx\` |
| \`/projects\` | \`projects/projects.tsx\` |
| \`/products\` | \`products/products.tsx\` |
| \`/testing\` | \`testing/testing.tsx\` |
| \`/training\` | \`training/training.tsx\` |
| \`/insights\` | \`insights/insights.tsx\` |
| \`/gallery\` | \`gallery/gallery.tsx\` |
| \`/careers\` | \`careers/careers.tsx\` |
| \`/testimonials\` | \`testimonials/testimonials.tsx\` |
| \`/pharmaceutical\` | \`pharmaceutical/pharmaceutical.tsx\` |
| \`/services\` | \`services/services.tsx\` |

## Services (folder name = URL slug — do not rename)

\`\`\`
services/<service-slug>/<service-slug>.tsx
services/<service-slug>/<sub-slug>/<sub-slug>.tsx
\`\`\`

Shared UI lives in \`services/_shared/\` (\`ServiceTemplates.tsx\`, detail pages, \`*Visuals.tsx\`).

## Components

\`\`\`
src/components/
  layout/   Navbar, Footer, ThemeProvider, PageContainer, ScrollToTop
  home/     ProductShowcase, ServicesSection, WhyRmtSection, PartnerLogos
  shared/   PageHero, PageSection, AnimatedSection, WorldMap, …
  ui/       shadcn primitives
\`\`\`
`
);

console.log(`\nDone. Patched ${patched} files.`);
