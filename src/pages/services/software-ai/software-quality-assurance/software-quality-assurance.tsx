import { SubServiceDetail } from "../../_shared";

type PageProps = { params: { slug: string; subSlug: string } };

export default function SoftwareQualityAssurancePage({ params }: PageProps) {
  return (
    <SubServiceDetail
      serviceSlug="software-ai"
      subSlug="software-quality-assurance"
      params={params}
    />
  );
}
