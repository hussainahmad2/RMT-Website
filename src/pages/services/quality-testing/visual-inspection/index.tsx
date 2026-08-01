import { SubServiceDetail } from "@/components/services/serviceTemplateShared";

type PageProps = { params: { slug: string; subSlug: string } };

/**
 * Visual Inspection 閳?customize this screen in:
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
