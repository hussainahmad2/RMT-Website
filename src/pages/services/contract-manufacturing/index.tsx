import { ServiceDetail } from "@/components/services/serviceTemplateShared";

type PageProps = { params: { slug: string } };

export default function ContractManufacturingPage({ params }: PageProps) {
  return <ServiceDetail slug="contract-manufacturing" params={params} />;
}
