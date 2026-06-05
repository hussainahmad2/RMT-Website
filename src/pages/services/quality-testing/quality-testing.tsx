import { ServiceDetail } from "../_shared";

type PageProps = { params: { slug: string } };

export default function QualityTestingPage({ params }: PageProps) {
  return <ServiceDetail slug="quality-testing" params={params} />;
}
