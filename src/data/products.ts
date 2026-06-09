import { BMD_PRODUCTS } from "@/data/bmd-content";
import { MANUFACTURING_PRODUCTS } from "@/data/revive-manufacturing-content";
import { ENGINEERING_OTHER_PRODUCT_DESIGN } from "@/data/engineering-content";
import { SOFTWARE_BANNER_IMAGE, SOFTWARE_DEPARTMENT_PRODUCTS } from "@/data/software-products";

export interface ProductItem {
  name: string;
  description?: string;
  features?: readonly string[];
  image?: string;
  tag?: string;
  spec?: string;
  tags?: string[];
}

export interface ProductCategory {
  id: string;
  title: string;
  description: string;
  serviceSlug: string;
  serviceName: string;
  bannerImage: string;
  products: ProductItem[];
}

const PRODUCT_IMAGES = {
  catheter: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=900&q=85",
  angiography: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=900&q=85",
  microspheres: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=900&q=85",
  cleanroom: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=900&q=85",
  inflation: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=900&q=85",
  skincare: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=900&q=85",
  serum: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=900&q=85",
  biomaterial: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=900&q=85",
  stent: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=900&q=85",
  engineering: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&q=85",
  automation: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c9?w=900&q=85",
  thermal: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=85",
  mechanical: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=85",
  biomedical: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=85",
  default: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=900&q=85",
};

const BMD_IMAGE_MAP: Record<string, string> = {
  "Hyaluronic Acid Serum": PRODUCT_IMAGES.serum,
  "Retinol Serum": PRODUCT_IMAGES.serum,
  "Glycolic Acid Serum": PRODUCT_IMAGES.skincare,
  "Moisturising Sunscreen (All Skin Types)": PRODUCT_IMAGES.skincare,
  "Vitamin C Serum": PRODUCT_IMAGES.serum,
  "Hair Growth Serum (Minoxidil-Based)": PRODUCT_IMAGES.serum,
  "Microspheres": PRODUCT_IMAGES.microspheres,
  "Bioresorbable Vascular Scaffold": PRODUCT_IMAGES.stent,
  "Drug Coating for 3rd Generation Drug Eluting Stent": PRODUCT_IMAGES.stent,
};

function bmdProduct(name: string): ProductItem {
  return {
    name,
    image: BMD_IMAGE_MAP[name] ?? PRODUCT_IMAGES.biomaterial,
    tag: "BMD",
    description: "Developed and validated through RMT's biomaterials research and formulation pipeline.",
    spec: "ISO 10993 aligned",
  };
}

function engProduct(name: string, image: string): ProductItem {
  return {
    name,
    image,
    tag: "Engineering",
    description: "Precision-engineered solution from RMT's multidisciplinary product development teams.",
    spec: "Custom build",
  };
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: "medical-devices",
    title: "Medical Devices & Manufacturing",
    description: "ISO cleanroom-manufactured devices and validated production capabilities from our contract manufacturing division.",
    serviceSlug: "contract-manufacturing",
    serviceName: "Contract Manufacturing",
    bannerImage: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=1600&q=85",
    products: MANUFACTURING_PRODUCTS.map((p, i) => ({
      name: p.name,
      description: p.description,
      features: p.features,
      image: [PRODUCT_IMAGES.catheter, PRODUCT_IMAGES.angiography, PRODUCT_IMAGES.microspheres, PRODUCT_IMAGES.cleanroom, PRODUCT_IMAGES.inflation][i],
      tag: "Class II",
      spec: "ISO 13485",
    })),
  },
  {
    id: "biomaterials",
    title: "Biomaterials & Pharmaceuticals",
    description: "Skincare, haircare, and innovative biomaterial products developed through our Biomaterials Department.",
    serviceSlug: "bmd",
    serviceName: "Biomaterials (BMD)",
    bannerImage: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1600&q=85",
    products: [
      ...BMD_PRODUCTS.skincare.map(bmdProduct),
      ...BMD_PRODUCTS.haircare.map(bmdProduct),
      ...BMD_PRODUCTS.innovative.map(bmdProduct),
    ],
  },
  {
    id: "engineering",
    title: "Engineering & Automation Products",
    description: "Mechanical, thermal, automation, and biomedical products from our engineering and design teams.",
    serviceSlug: "engineering-product-development",
    serviceName: "Engineering & Product Development",
    bannerImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1600&q=85",
    products: [
      ...ENGINEERING_OTHER_PRODUCT_DESIGN.mechanical.map((n) => engProduct(n, PRODUCT_IMAGES.mechanical)),
      ...ENGINEERING_OTHER_PRODUCT_DESIGN.thermalControl.map((n) => engProduct(n, PRODUCT_IMAGES.thermal)),
      ...ENGINEERING_OTHER_PRODUCT_DESIGN.automationProducts.map((n) => engProduct(n, PRODUCT_IMAGES.automation)),
      ...ENGINEERING_OTHER_PRODUCT_DESIGN.biomedicalProducts.map((n) => engProduct(n, PRODUCT_IMAGES.biomedical)),
    ],
  },
  {
    id: "software-ai",
    title: "Software Department Products",
    description:
      "Regulated health software, SaMD platforms, AI clinical tools, and cloud-native digital health products from RMT's Software & AI department.",
    serviceSlug: "software-ai",
    serviceName: "Software & AI",
    bannerImage: SOFTWARE_BANNER_IMAGE,
    products: SOFTWARE_DEPARTMENT_PRODUCTS.map((p) => ({
      name: p.name,
      description: p.description,
      features: p.features,
      image: p.image,
      tag: p.tag,
      spec: p.spec,
      tags: p.tags,
    })),
  },
];

export const PRODUCT_HIGHLIGHTS = [
  { value: "30+", label: "Product Lines" },
  { value: "ISO 13485", label: "Quality Certified" },
  { value: "Class I–III", label: "Device Coverage" },
  { value: "360°", label: "Lifecycle Support" },
] as const;

export const PRODUCTS_HERO_IMAGE =
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1920&q=85";
