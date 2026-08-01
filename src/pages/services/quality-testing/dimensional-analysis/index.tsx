import { SubServiceDetail } from "@/components/services/serviceTemplateShared";

type PageProps = { params: { slug: string; subSlug: string } };

/**
 * Dimensional Analysis 閳?customize this screen in:
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
