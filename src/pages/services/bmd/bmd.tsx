import { useMemo } from "react";
import { ALL_SERVICES } from "@/data/services";
import { buildBreadcrumbJsonLd, buildServiceJsonLd, servicePath } from "@/lib/service-seo";
import { useSEO } from "@/lib/seo";
import { BmdServiceDetail } from "../_shared/BmdServiceDetail";

const SERVICE = ALL_SERVICES.find((s) => s.slug === "bmd")!;

type PageProps = { params: { slug: string } };

export default function BmdServicePage({ params }: PageProps) {
  const jsonLd = useMemo(
    () => [
      buildServiceJsonLd(SERVICE),
      buildBreadcrumbJsonLd([
        { name: "Services", path: "/services" },
        { name: SERVICE.name, path: servicePath(SERVICE.slug) },
      ]),
    ],
    []
  );

  useSEO({
    title: SERVICE.name,
    description: SERVICE.description,
    keywords: SERVICE.keywords,
    path: servicePath(SERVICE.slug),
    ogImage: SERVICE.heroImage,
    jsonLd,
  });

  return <BmdServiceDetail service={SERVICE} />;
}
