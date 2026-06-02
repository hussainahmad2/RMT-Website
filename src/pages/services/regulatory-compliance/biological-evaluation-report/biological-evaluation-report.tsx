import { SubServiceDetail } from "../../_shared";

type PageProps = { params: { slug: string; subSlug: string } };

/**
 * Biological Evaluation Report â€?customize this screen in:
 * src/pages/services/regulatory-compliance/biological-evaluation-report/index.tsx
 */
export default function BiologicalEvaluationReportPage({ params }: PageProps) {
  return (
    <SubServiceDetail
      serviceSlug="regulatory-compliance"
      subSlug="biological-evaluation-report"
      params={params}
    />
  );
}
