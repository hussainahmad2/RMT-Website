import { SubServiceDetail } from "../../_shared";

type PageProps = { params: { slug: string; subSlug: string } };

/**
 * Clinical Evaluation Report â€?customize this screen in:
 * src/pages/services/regulatory-compliance/clinical-evaluation-report/index.tsx
 */
export default function ClinicalEvaluationReportPage({ params }: PageProps) {
  return (
    <SubServiceDetail
      serviceSlug="regulatory-compliance"
      subSlug="clinical-evaluation-report"
      params={params}
    />
  );
}
