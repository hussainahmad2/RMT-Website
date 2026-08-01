import { SubServiceDetail } from "@/components/services/serviceTemplateShared";

type PageProps = { params: { slug: string; subSlug: string } };

export default function CleanroomInfrastructurePage({ params }: PageProps) {
  return (
    <SubServiceDetail
      serviceSlug="contract-manufacturing"
      subSlug="cleanroom-infrastructure"
      params={params}
    />
  );
}
