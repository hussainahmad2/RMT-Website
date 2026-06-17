import { SubServiceDetail } from "../../_shared";

type PageProps = { params: { slug: string; subSlug: string } };

/** @deprecated Use /services/quality-testing/quality-control */
export default function QcProductionPage({ params }: PageProps) {
  return <SubServiceDetail serviceSlug="quality-testing" subSlug="quality-control" params={params} />;
}
