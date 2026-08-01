import { SubServiceDetail } from "@/components/services/serviceTemplateShared";

type PageProps = { params: { slug: string; subSlug: string } };

/**
 * Quality Plan 閳?customize this screen in:
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
