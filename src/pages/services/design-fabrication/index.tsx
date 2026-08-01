import { ServiceDetail } from "@/components/services/serviceTemplateShared";

type PageProps = { params: { slug: string } };

export default function DesignFabricationServicePage({ params }: PageProps) {
  return <ServiceDetail slug="design-fabrication" params={params} />;
}
