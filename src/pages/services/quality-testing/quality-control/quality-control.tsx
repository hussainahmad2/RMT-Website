import { SubServiceDetail } from "../../_shared";

type PageProps = { params: { slug: string; subSlug: string } };

export default function QualityControlPage({ params }: PageProps) {
  return <SubServiceDetail serviceSlug="quality-testing" subSlug="quality-control" params={params} />;
}
