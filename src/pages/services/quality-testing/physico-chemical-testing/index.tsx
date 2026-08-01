import { SubServiceDetail } from "@/components/services/serviceTemplateShared";

type PageProps = { params: { slug: string; subSlug: string } };

/**
 * Physico Chemical Testing 閳?customize this screen in:
 * src/pages/services/quality-testing/physico-chemical-testing/index.tsx
 */
export default function PhysicoChemicalTestingPage({ params }: PageProps) {
  return (
    <SubServiceDetail
      serviceSlug="quality-testing"
      subSlug="physico-chemical-testing"
      params={params}
    />
  );
}
