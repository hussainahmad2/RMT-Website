import { SubServiceDetail } from "../../_shared";

type PageProps = { params: { slug: string; subSlug: string } };

/**
 * Iso 14971 Risk Management â€?customize this screen in:
 * src/pages/services/regulatory-compliance/iso-14971-risk-management/index.tsx
 */
export default function Iso14971RiskManagementPage({ params }: PageProps) {
  return (
    <SubServiceDetail
      serviceSlug="regulatory-compliance"
      subSlug="iso-14971-risk-management"
      params={params}
    />
  );
}
