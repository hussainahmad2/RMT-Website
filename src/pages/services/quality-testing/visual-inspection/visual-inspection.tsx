import { SubServiceDetail } from "../../_shared";

type PageProps = { params: { slug: string; subSlug: string } };

/**
 * Visual Inspection â€?customize this screen in:
 * src/pages/services/quality-testing/visual-inspection/index.tsx
 */
export default function VisualInspectionPage({ params }: PageProps) {
  return (
    <SubServiceDetail
      serviceSlug="quality-testing"
      subSlug="visual-inspection"
      params={params}
    />
  );
}
