import { SubServiceDetail } from "../../_shared";

type PageProps = { params: { slug: string; subSlug: string } };

export default function MechanicalDesignPage({ params }: PageProps) {
  return (
    <SubServiceDetail
      serviceSlug="design-fabrication"
      subSlug="mechanical-design"
      params={params}
    />
  );
}
