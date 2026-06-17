import { ServiceDetail } from "../_shared";

type PageProps = { params: { slug: string } };

export default function ProductionEquipmentEngineeringPage({ params }: PageProps) {
  return <ServiceDetail slug="production-equipment-engineering" params={params} />;
}
