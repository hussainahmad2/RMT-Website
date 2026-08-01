import { ServiceDetail } from "@/components/services/serviceTemplateShared";

type PageProps = { params: { slug: string } };

export default function ProductionEquipmentEngineeringPage({ params }: PageProps) {
  return <ServiceDetail slug="production-equipment-engineering" params={params} />;
}
