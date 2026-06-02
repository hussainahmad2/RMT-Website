import { SubServiceDetail } from "../../_shared";
export default function Page({ params }: { params: { slug: string; subSlug: string } }) {
  return <SubServiceDetail serviceSlug="engineering-product-development" subSlug="biomedical-systems-engineering" params={params} />;
}
