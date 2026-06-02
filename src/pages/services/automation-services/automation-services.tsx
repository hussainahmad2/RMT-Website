import { ServiceDetail } from "../_shared";

type PageProps = { params: { slug: string } };

export default function AutomationServicesPage({ params }: PageProps) {
  return <ServiceDetail slug="automation-services" params={params} />;
}
