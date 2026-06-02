import { ServiceDetail } from "../_shared";

type PageProps = { params: { slug: string } };

/**
 * Regulatory Compliance â€?customize this screen in:
 * src/pages/services/regulatory-compliance/index.tsx
 */
export default function RegulatoryComplianceServicePage({ params }: PageProps) {
  return <ServiceDetail slug="regulatory-compliance" params={params} />;
}
