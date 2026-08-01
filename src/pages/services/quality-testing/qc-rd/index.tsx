import { SubServiceDetail } from "@/components/services/serviceTemplateShared";

type PageProps = { params: { slug: string; subSlug: string } };

/** @deprecated Use /services/quality-testing/quality-control */
export default function QcRdPage({ params }: PageProps) {
  return <SubServiceDetail serviceSlug="quality-testing" subSlug="quality-control" params={params} />;
}
