import { ServiceDetail } from "../_shared";

type PageProps = { params: { slug: string } };

/**
 * Quality Testing â€?customize this screen in:
 * src/pages/services/quality-testing/index.tsx
 */
export default function QualityTestingServicePage({ params }: PageProps) {
  return <ServiceDetail slug="quality-testing" params={params} />;
}
