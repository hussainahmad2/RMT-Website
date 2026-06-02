import { SubServiceDetail } from "../../_shared";

type PageProps = { params: { slug: string; subSlug: string } };

export default function Page({ params }: PageProps) {
  return <SubServiceDetail serviceSlug="mbl-laboratory" subSlug="sterility-testing" params={params} />;
}
