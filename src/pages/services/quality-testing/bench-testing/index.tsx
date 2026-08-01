import { SubServiceDetail } from "@/components/services/serviceTemplateShared";

type PageProps = { params: { slug: string; subSlug: string } };

/**
 * Bench Testing 閳?customize this screen in:
 * src/pages/services/quality-testing/bench-testing/index.tsx
 */
export default function BenchTestingPage({ params }: PageProps) {
  return (
    <SubServiceDetail
      serviceSlug="quality-testing"
      subSlug="bench-testing"
      params={params}
    />
  );
}
