import { SubServiceDetail } from "../../_shared";

type PageProps = { params: { slug: string; subSlug: string } };

export default function Page({ params }: PageProps) {
  return <SubServiceDetail serviceSlug="bmd" subSlug="laboratory-setup-compliance" params={params} />;
}
