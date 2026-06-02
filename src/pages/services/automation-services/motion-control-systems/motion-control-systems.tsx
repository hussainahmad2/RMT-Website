import { SubServiceDetail } from "../../_shared";
export default function Page({ params }: { params: { slug: string; subSlug: string } }) {
  return <SubServiceDetail serviceSlug="automation-services" subSlug="motion-control-systems" params={params} />;
}
