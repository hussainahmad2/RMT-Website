import { SubServiceDetail } from "@/components/services/serviceTemplateShared";

type PageProps = { params: { slug: string; subSlug: string } };

export default function CleanroomEquipmentEngineeringPage({ params }: PageProps) {
  return (
    <SubServiceDetail
      serviceSlug="production-equipment-engineering"
      subSlug="cleanroom-equipment-engineering"
      params={params}
    />
  );
}
