import { SubServiceDetail } from "../../_shared";

type PageProps = { params: { slug: string; subSlug: string } };

export default function SoftwareCompliancePage({ params }: PageProps) {
  return (
    <SubServiceDetail
      serviceSlug="software-ai"
      subSlug="software-compliance"
      params={params}
    />
  );
}
