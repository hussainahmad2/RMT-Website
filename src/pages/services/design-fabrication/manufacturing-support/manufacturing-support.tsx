import { SubServiceDetail } from "../../_shared";

type PageProps = { params: { slug: string; subSlug: string } };

export default function ManufacturingSupportPage({ params }: PageProps) {
  return (
    <SubServiceDetail
      serviceSlug="design-fabrication"
      subSlug="manufacturing-support"
      params={params}
    />
  );
}
