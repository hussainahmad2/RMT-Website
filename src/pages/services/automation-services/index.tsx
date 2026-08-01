import { ServiceDetail } from "@/components/services/serviceTemplateShared";

type PageProps = { params: { slug: string } };

export default function AutomationServicesPage({ params }: PageProps) {
  return <ServiceDetail slug="automation-services" params={params} />;
}
