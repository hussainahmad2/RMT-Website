import { SubServiceDetail } from "@/components/services/serviceTemplateShared";

type PageProps = { params: { slug: string; subSlug: string } };

export default function EquipmentQualificationValidationPage({ params }: PageProps) {
  return (
    <SubServiceDetail
      serviceSlug="production-equipment-engineering"
      subSlug="equipment-qualification-validation"
      params={params}
    />
  );
}
