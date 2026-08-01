import { SubServiceDetail } from "@/components/services/serviceTemplateShared";

type PageProps = { params: { slug: string; subSlug: string } };

/**
 * Simulation 閳?customize this screen in:
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
