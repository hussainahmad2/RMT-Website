import { SubServiceDetail } from "../../_shared";

type PageProps = { params: { slug: string; subSlug: string } };

/**
 * Qms Implementation â€?customize this screen in:
 * src/pages/services/regulatory-compliance/qms-implementation/index.tsx
 */
export default function QmsImplementationPage({ params }: PageProps) {
  return (
    <SubServiceDetail
      serviceSlug="regulatory-compliance"
      subSlug="qms-implementation"
      params={params}
    />
  );
}
