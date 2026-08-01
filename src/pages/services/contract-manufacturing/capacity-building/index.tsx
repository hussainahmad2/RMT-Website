import { SubServiceDetail } from "@/components/services/serviceTemplateShared";

type PageProps = { params: { slug: string; subSlug: string } };

export default function CapacityBuildingPage({ params }: PageProps) {
  return (
    <SubServiceDetail
      serviceSlug="contract-manufacturing"
      subSlug="capacity-building"
      params={params}
    />
  );
}
