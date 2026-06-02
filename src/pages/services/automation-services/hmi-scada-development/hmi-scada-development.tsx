import { SubServiceDetail } from "../../_shared";
export default function Page({ params }: { params: { slug: string; subSlug: string } }) {
  return <SubServiceDetail serviceSlug="automation-services" subSlug="hmi-scada-development" params={params} />;
}
