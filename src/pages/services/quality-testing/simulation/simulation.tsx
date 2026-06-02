import { SubServiceDetail } from "../../_shared";

type PageProps = { params: { slug: string; subSlug: string } };

/**
 * Simulation â€?customize this screen in:
 * src/pages/services/quality-testing/simulation/index.tsx
 */
export default function SimulationPage({ params }: PageProps) {
  return (
    <SubServiceDetail
      serviceSlug="quality-testing"
      subSlug="simulation"
      params={params}
    />
  );
}
