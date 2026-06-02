import { SubServiceDetail } from "../../_shared";

type PageProps = { params: { slug: string; subSlug: string } };

/**
 * Iso 13485 Certification â€?customize this screen in:
 * src/pages/services/regulatory-compliance/iso-13485-certification/index.tsx
 */
export default function Iso13485CertificationPage({ params }: PageProps) {
  return (
    <SubServiceDetail
      serviceSlug="regulatory-compliance"
      subSlug="iso-13485-certification"
      params={params}
    />
  );
}
