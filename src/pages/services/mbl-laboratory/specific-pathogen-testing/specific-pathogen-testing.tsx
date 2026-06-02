import { SubServiceDetail } from "../../_shared";

type PageProps = { params: { slug: string; subSlug: string } };

export default function Page({ params }: PageProps) {
  return <SubServiceDetail serviceSlug="mbl-laboratory" subSlug="specific-pathogen-testing" params={params} />;
}
