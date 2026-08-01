import { SubServiceDetail } from "@/components/services/serviceTemplateShared";

type PageProps = { params: { slug: string; subSlug: string } };

export default function DevelopmentJourneyPage({ params }: PageProps) {
  return (
    <SubServiceDetail
      serviceSlug="contract-manufacturing"
      subSlug="development-journey"
      params={params}
    />
  );
}
