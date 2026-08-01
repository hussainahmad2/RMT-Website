import { SubServiceDetail } from "@/components/services/serviceTemplateShared";

type PageProps = { params: { slug: string; subSlug: string } };

/**
 * Defect Analysis 閳?customize this screen in:
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
