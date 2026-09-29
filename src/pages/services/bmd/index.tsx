import { ALL_SERVICES } from "@/data/services";
import { getRouteSeo } from "@/lib/route-seo";
import { servicePath } from "@/lib/service-seo";
import { useSEO } from "@/lib/seo";
import { BmdServiceDetail } from "@/components/services/BmdServiceDetail";

const SERVICE = ALL_SERVICES.find((s) => s.slug === "bmd")!;

type PageProps = { params: { slug: string } };

export default function BmdServicePage({ params }: PageProps) {
  useSEO(getRouteSeo(servicePath(SERVICE.slug)));
  return <BmdServiceDetail service={SERVICE} />;
}
