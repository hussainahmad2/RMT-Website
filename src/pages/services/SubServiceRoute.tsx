import { lazy, type ComponentType, type LazyExoticComponent } from "react";

const modules = import.meta.glob<{
  default: ComponentType<{ params: { slug: string; subSlug: string } }>;
}>("./*/*/*.tsx");

const SubServiceDetail = lazy(() =>
  import("./_shared").then((m) => ({ default: m.SubServiceDetail }))
);

type SubParams = { params: { slug: string; subSlug: string } };

const lazyCache = new Map<string, LazyExoticComponent<ComponentType<SubParams>>>();

function getCustomPage(key: string) {
  const loader = modules[key];
  if (!loader) return null;
  let Comp = lazyCache.get(key);
  if (!Comp) {
    Comp = lazy(loader);
    lazyCache.set(key, Comp);
  }
  return Comp;
}

type SubServiceRouteProps = { params: { slug: string; subSlug: string } };

/**
 * Resolves /services/:slug/:subSlug to src/pages/services/:slug/:subSlug/:subSlug.tsx
 */
export function SubServiceRoute({ params }: SubServiceRouteProps) {
  const key = `./${params.slug}/${params.subSlug}/${params.subSlug}.tsx`;
  const Custom = getCustomPage(key);

  return Custom ? (
    <Custom params={params} />
  ) : (
    <SubServiceDetail
      params={params}
      serviceSlug={params.slug}
      subSlug={params.subSlug}
    />
  );
}
