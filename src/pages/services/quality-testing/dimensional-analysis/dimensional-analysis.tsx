import { SubServiceDetail } from "../../_shared";

type PageProps = { params: { slug: string; subSlug: string } };

/**
 * Dimensional Analysis â€?customize this screen in:
 * src/pages/services/quality-testing/dimensional-analysis/index.tsx
 */
export default function DimensionalAnalysisPage({ params }: PageProps) {
  return (
    <SubServiceDetail
      serviceSlug="quality-testing"
      subSlug="dimensional-analysis"
      params={params}
    />
  );
}
