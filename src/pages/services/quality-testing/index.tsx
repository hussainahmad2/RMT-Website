import { ServiceDetail } from "@/components/services/serviceTemplateShared";

type PageProps = { params: { slug: string } };

export default function QualityTestingPage({ params }: PageProps) {
  return <ServiceDetail slug="quality-testing" params={params} />;
}
