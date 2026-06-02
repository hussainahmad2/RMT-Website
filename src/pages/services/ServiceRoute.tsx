import type { ComponentType } from "react";
import { ServiceDetail } from "./_shared";

const customPages = import.meta.glob<{ default: ComponentType<{ params: { slug: string } }> }>(
  "./*/*.tsx",
  { eager: true }
);

type ServiceRouteProps = { params: { slug: string } };

/**
 * Resolves /services/:slug to src/pages/services/:slug/:slug.tsx when present,
 * otherwise falls back to the shared ServiceDetail template.
 */
export function ServiceRoute({ params }: ServiceRouteProps) {
  const key = `./${params.slug}/${params.slug}.tsx`;
  const Custom = customPages[key]?.default;
  if (Custom) return <Custom params={params} />;
  return <ServiceDetail params={params} slug={params.slug} />;
}
