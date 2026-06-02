import { SubServiceDetail } from "../../_shared";

type PageProps = { params: { slug: string; subSlug: string } };

/**
 * Packaging Integrity Testing â€?customize this screen in:
 * src/pages/services/quality-testing/packaging-integrity-testing/index.tsx
 */
export default function PackagingIntegrityTestingPage({ params }: PageProps) {
  return (
    <SubServiceDetail
      serviceSlug="quality-testing"
      subSlug="packaging-integrity-testing"
      params={params}
    />
  );
}
