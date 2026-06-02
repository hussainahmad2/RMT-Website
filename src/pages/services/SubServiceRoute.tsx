import type { ComponentType } from "react";
import { SubServiceDetail } from "./_shared";

const customPages = import.meta.glob<{
  default: ComponentType<{ params: { slug: string; subSlug: string } }>;
}>("./*/*/*.tsx", { eager: true });

type SubServiceRouteProps = { params: { slug: string; subSlug: string } };

/**
 * Resolves /services/:slug/:subSlug to src/pages/services/:slug/:subSlug/:subSlug.tsx
 */
export function SubServiceRoute({ params }: SubServiceRouteProps) {
  const key = `./${params.slug}/${params.subSlug}/${params.subSlug}.tsx`;
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
