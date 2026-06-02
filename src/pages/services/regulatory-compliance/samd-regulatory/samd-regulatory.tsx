import { SubServiceDetail } from "../../_shared";

type PageProps = { params: { slug: string; subSlug: string } };

/**
 * Samd Regulatory â€?customize this screen in:
 * src/pages/services/regulatory-compliance/samd-regulatory/index.tsx
 */
export default function SamdRegulatoryPage({ params }: PageProps) {
  return (
    <SubServiceDetail
      serviceSlug="regulatory-compliance"
      subSlug="samd-regulatory"
      params={params}
    />
  );
}
