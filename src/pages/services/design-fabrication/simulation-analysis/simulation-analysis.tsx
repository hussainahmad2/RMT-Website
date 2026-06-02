import { SubServiceDetail } from "../../_shared";

type PageProps = { params: { slug: string; subSlug: string } };

export default function SimulationAnalysisPage({ params }: PageProps) {
  return (
    <SubServiceDetail
      serviceSlug="design-fabrication"
      subSlug="simulation-analysis"
      params={params}
    />
  );
}
