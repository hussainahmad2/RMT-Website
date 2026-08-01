import { SubServiceDetail } from "@/components/services/serviceTemplateShared";

type PageProps = { params: { slug: string; subSlug: string } };

export default function ProcessAutomationPage({ params }: PageProps) {
  return (
    <SubServiceDetail
      serviceSlug="production-equipment-engineering"
      subSlug="process-automation"
      params={params}
    />
  );
}
