import { lazy, Suspense, type ComponentType, type LazyExoticComponent } from "react";

const modules = import.meta.glob<{ default: ComponentType<{ params: { slug: string } }> }>(
  "./*/*.tsx"
);

const ServiceDetail = lazy(() =>
  import("./_shared").then((m) => ({ default: m.ServiceDetail }))
);

const lazyCache = new Map<string, LazyExoticComponent<ComponentType<{ params: { slug: string } }>>>();

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

type ServiceRouteProps = { params: { slug: string } };

/**
 * Resolves /services/:slug to src/pages/services/:slug/:slug.tsx when present,
 * otherwise falls back to the shared ServiceDetail template.
 */
export function ServiceRoute({ params }: ServiceRouteProps) {
  const key = `./${params.slug}/${params.slug}.tsx`;
  const Custom = getCustomPage(key);

  return (
    <Suspense fallback={null}>
      {Custom ? (
        <Custom params={params} />
      ) : (
        <ServiceDetail params={params} slug={params.slug} />
      )}
    </Suspense>
  );
}
