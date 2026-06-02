import { SubServiceDetail } from "../../_shared";

type PageProps = { params: { slug: string; subSlug: string } };

/**
 * Physico Chemical Testing â€?customize this screen in:
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
