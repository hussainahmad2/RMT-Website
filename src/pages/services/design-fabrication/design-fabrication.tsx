import { ServiceDetail } from "../_shared";

type PageProps = { params: { slug: string } };

export default function DesignFabricationServicePage({ params }: PageProps) {
  return <ServiceDetail slug="design-fabrication" params={params} />;
}
