import { SubServiceDetail } from "../../_shared";

type PageProps = { params: { slug: string; subSlug: string } };

export default function Page({ params }: PageProps) {
  return <SubServiceDetail serviceSlug="quality-testing" subSlug="sqa-samd-simd" params={params} />;
}
