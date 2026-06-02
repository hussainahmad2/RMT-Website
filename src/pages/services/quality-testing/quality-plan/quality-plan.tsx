import { SubServiceDetail } from "../../_shared";

type PageProps = { params: { slug: string; subSlug: string } };

/**
 * Quality Plan â€?customize this screen in:
 * src/pages/services/quality-testing/quality-plan/index.tsx
 */
export default function QualityPlanPage({ params }: PageProps) {
  return (
    <SubServiceDetail
      serviceSlug="quality-testing"
      subSlug="quality-plan"
      params={params}
    />
  );
}
