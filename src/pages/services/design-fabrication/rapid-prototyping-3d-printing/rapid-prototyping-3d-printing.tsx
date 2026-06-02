import { SubServiceDetail } from "../../_shared";

type PageProps = { params: { slug: string; subSlug: string } };

export default function RapidPrototyping3dPrintingPage({ params }: PageProps) {
  return (
    <SubServiceDetail
      serviceSlug="design-fabrication"
      subSlug="rapid-prototyping-3d-printing"
      params={params}
    />
  );
}
