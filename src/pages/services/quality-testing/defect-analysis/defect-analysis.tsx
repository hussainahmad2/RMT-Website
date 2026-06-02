import { SubServiceDetail } from "../../_shared";

type PageProps = { params: { slug: string; subSlug: string } };

/**
 * Defect Analysis â€?customize this screen in:
 * src/pages/services/quality-testing/defect-analysis/index.tsx
 */
export default function DefectAnalysisPage({ params }: PageProps) {
  return (
    <SubServiceDetail
      serviceSlug="quality-testing"
      subSlug="defect-analysis"
      params={params}
    />
  );
}
