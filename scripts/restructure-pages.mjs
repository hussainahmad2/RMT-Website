import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const pagesDir = path.join(root, "src", "pages");
const servicesDir = path.join(pagesDir, "services");
const sharedDir = path.join(servicesDir, "_shared");

// 1. Create services/_shared from Services.tsx
const servicesSrc = path.join(pagesDir, "Services.tsx");
const sharedPages = path.join(sharedDir, "service-pages.tsx");

if (!fs.existsSync(sharedDir)) fs.mkdirSync(sharedDir, { recursive: true });

let content = fs.readFileSync(servicesSrc, "utf8");

// Allow slug override on detail pages for per-folder customization
content = content.replace(
  "export function ServiceDetail({ params }: { params: { slug: string } }) {\n  const service = ALL_SERVICES.find((s) => s.slug === params.slug);",
  `export function ServiceDetail({
  params,
  slug: slugProp,
}: {
  params?: { slug: string };
  slug?: string;
}) {
  const slug = slugProp ?? params?.slug ?? "";
  const service = ALL_SERVICES.find((s) => s.slug === slug);`
);

content = content.replace(
  "export function SubServiceDetail({ params }: { params: { slug: string; subSlug: string } }) {\n  const service = ALL_SERVICES.find((s) => s.slug === params.slug);\n  const subService = service?.subServices.find((ss) => ss.slug === params.subSlug);",
  `export function SubServiceDetail({
  params,
  serviceSlug: serviceSlugProp,
  subSlug: subSlugProp,
}: {
  params?: { slug: string; subSlug: string };
  serviceSlug?: string;
  subSlug?: string;
}) {
  const serviceSlug = serviceSlugProp ?? params?.slug ?? "";
  const subSlug = subSlugProp ?? params?.subSlug ?? "";
  const service = ALL_SERVICES.find((s) => s.slug === serviceSlug);
  const subService = service?.subServices.find((ss) => ss.slug === subSlug);`
);

fs.writeFileSync(sharedPages, content);

// _shared/index.ts
fs.writeFileSync(
  path.join(sharedDir, "index.ts"),
  `export {
  ServicesOverview,
  ServiceDetail,
  SubServiceDetail,
} from "./service-pages";
`
);

// 2. services/index.tsx (overview)
fs.writeFileSync(
  path.join(servicesDir, "index.tsx"),
  `import { ServicesOverview } from "./_shared";

/** Services listing — edit at src/pages/services/index.tsx */
export default ServicesOverview;
`
);

// 3. Route resolvers
fs.writeFileSync(
  path.join(servicesDir, "ServiceRoute.tsx"),
  `import type { ComponentType } from "react";
import { ServiceDetail } from "./_shared";

const customPages = import.meta.glob<{ default: ComponentType<{ params: { slug: string } }> }>(
  "./*/index.tsx",
  { eager: true }
);

type ServiceRouteProps = { params: { slug: string } };

/**
 * Resolves /services/:slug to src/pages/services/:slug/index.tsx when present,
 * otherwise falls back to the shared ServiceDetail template.
 */
export function ServiceRoute({ params }: ServiceRouteProps) {
  const key = \`./\${params.slug}/index.tsx\`;
  const Custom = customPages[key]?.default;
  if (Custom) return <Custom params={params} />;
  return <ServiceDetail params={params} slug={params.slug} />;
}
`
);

fs.writeFileSync(
  path.join(servicesDir, "SubServiceRoute.tsx"),
  `import type { ComponentType } from "react";
import { SubServiceDetail } from "./_shared";

const customPages = import.meta.glob<{
  default: ComponentType<{ params: { slug: string; subSlug: string } }>;
}>("./*/*/index.tsx", { eager: true });

type SubServiceRouteProps = { params: { slug: string; subSlug: string } };

/**
 * Resolves /services/:slug/:subSlug to src/pages/services/:slug/:subSlug/index.tsx
 */
export function SubServiceRoute({ params }: SubServiceRouteProps) {
  const key = \`./\${params.slug}/\${params.subSlug}/index.tsx\`;
  const Custom = customPages[key]?.default;
  if (Custom) return <Custom params={params} />;
  return (
    <SubServiceDetail
      params={params}
      serviceSlug={params.slug}
      subSlug={params.subSlug}
    />
  );
}
`
);

// 4. Parse services data for slugs
const dataPath = path.join(root, "src", "data", "services.ts");
const data = fs.readFileSync(dataPath, "utf8");
const services = [];
let current = null;
for (const line of data.split("\n")) {
  const svc = line.match(/^\s+slug: "([^"]+)",\s*$/);
  if (svc && line.includes('slug:') && !line.includes("shortName")) {
    const indent = line.match(/^(\s+)/)[1].length;
    if (indent <= 4) {
      current = { slug: svc[1], subs: [] };
      services.push(current);
    } else if (indent >= 8 && current) {
      current.subs.push(svc[1]);
    }
  }
}

// Better parse: top-level slug at 4 spaces, sub at 8
const services2 = [];
const slugRe = /slug: "([^"]+)"/g;
let inService = false;
let depth = 0;
// use ALL_SERVICES export - simpler regex on service blocks
const blocks = data.split(/slug: "/).slice(1);
// fallback manual list from grep
const manual = [
  ["product-design", ["3d-design-modelling", "pcb-design", "additive-manufacturing", "subtractive-manufacturing", "pcb-manufacturing"]],
  ["regulatory-compliance", ["technical-file-fda-ce", "clinical-evaluation-report", "biological-evaluation-report", "qms-implementation", "iso-13485-certification", "iso-14971-risk-management", "samd-regulatory"]],
  ["software-ai", ["ai-machine-learning", "devops-cloud", "application-development", "ui-ux-development", "software-quality-assurance", "sdlc", "stlc", "samd-software"]],
  ["quality-testing", ["quality-plan", "bench-testing", "physico-chemical-testing", "visual-inspection", "dimensional-analysis", "defect-analysis", "packaging-integrity-testing", "simulation"]],
  ["electronics-firmware", ["firmware-design-development", "electronics-design-development", "design-verification-validation"]],
  ["turnkey-commissioning", ["supply-commission", "installation-training", "commissioning-validation", "hr-training", "oq-pq-qualification", "iso-13485-implementation", "product-licensing"]],
  ["pharmaceutical", ["pharmaceutical-formulation-coating", "drug-development-delivery", "otc-pharmaceutical-formulation", "plant-based-pharmaceutical", "polymer-drug-encapsulation", "recipe-verification"]],
  ["bmd-laboratory-testing", ["microbiology-testing", "analytical-testing", "material-characterization", "mechanical-physical-testing", "biocompatibility-testing"]],
  ["bmd-biomaterials-rd", ["biomaterials-tissue-engineering", "coatings-surface-engineering", "device-prototyping-fabrication", "advanced-manufacturing-support", "laboratory-setup-consulting"]],
  ["contract-manufacturing", ["active-medical-devices", "non-active-medical-devices", "injectables", "wearables", "implantable-devices", "biosensors", "specialized-biomaterials"]],
];

for (const [slug, subs] of manual) {
  const svcDir = path.join(servicesDir, slug);
  fs.mkdirSync(svcDir, { recursive: true });

  const svcName = slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  fs.writeFileSync(
    path.join(svcDir, "index.tsx"),
    `import { ServiceDetail } from "../_shared";

type PageProps = { params: { slug: string } };

/**
 * ${svcName} — customize this screen in:
 * src/pages/services/${slug}/index.tsx
 */
export default function ${toPascal(slug)}ServicePage({ params }: PageProps) {
  return <ServiceDetail slug="${slug}" params={params} />;
}
`
  );

  for (const sub of subs) {
    const subDir = path.join(svcDir, sub);
    fs.mkdirSync(subDir, { recursive: true });
    const subName = sub.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    fs.writeFileSync(
      path.join(subDir, "index.tsx"),
      `import { SubServiceDetail } from "../../_shared";

type PageProps = { params: { slug: string; subSlug: string } };

/**
 * ${subName} — customize this screen in:
 * src/pages/services/${slug}/${sub}/index.tsx
 */
export default function ${toPascal(sub)}Page({ params }: PageProps) {
  return (
    <SubServiceDetail
      serviceSlug="${slug}"
      subSlug="${sub}"
      params={params}
    />
  );
}
`
    );
  }
}

function toPascal(slug) {
  return slug
    .split("-")
    .map((s) => s.replace(/^\d/, (d) => d) && s.charAt(0).toUpperCase() + s.slice(1))
    .join("")
    .replace(/[^a-zA-Z0-9]/g, "");
}

// 5. Move flat pages to folder/index.tsx
const flatPages = [
  ["Home", "home"],
  ["About", "about"],
  ["Contact", "contact"],
  ["Projects", "projects"],
  ["Testing", "testing"],
  ["Training", "training"],
  ["Insights", "insights"],
  ["Gallery", "gallery"],
  ["Careers", "careers"],
  ["not-found", "not-found"],
];

for (const [file, folder] of flatPages) {
  const srcFile = path.join(pagesDir, `${file}.tsx`);
  const destDir = path.join(pagesDir, folder);
  const destFile = path.join(destDir, "index.tsx");
  if (!fs.existsSync(srcFile)) continue;
  fs.mkdirSync(destDir, { recursive: true });
  let pageContent = fs.readFileSync(srcFile, "utf8");
  if (!pageContent.includes("export default")) {
    const compName = file === "not-found" ? "NotFound" : file;
    pageContent += `\n\nexport default ${compName};\n`;
  }
  fs.writeFileSync(destFile, pageContent);
}

// 6. Back-compat re-exports at old paths
fs.writeFileSync(
  path.join(pagesDir, "Services.tsx"),
  `/** @deprecated Import from @/pages/services instead */
export { ServicesOverview, ServiceDetail, SubServiceDetail } from "./services/_shared";
export { default as ServicesOverviewDefault } from "./services";
`
);

for (const [file, folder] of flatPages) {
  const reexport = `/** @deprecated Import from @/pages/${folder} instead */\nexport { default } from "./${folder}";\nexport { default as ${file === "not-found" ? "NotFound" : file} } from "./${folder}";\n`;
  fs.writeFileSync(path.join(pagesDir, `${file}.tsx`), reexport);
}

console.log("Done. Services:", manual.length, "folders created.");
