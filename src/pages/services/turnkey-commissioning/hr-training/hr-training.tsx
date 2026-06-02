import { SubServiceDetail } from "../../_shared";

type PageProps = { params: { slug: string; subSlug: string } };

/**
 * Hr Training â€?customize this screen in:
 * src/pages/services/turnkey-commissioning/hr-training/index.tsx
 */
export default function HrTrainingPage({ params }: PageProps) {
  return (
    <SubServiceDetail
      serviceSlug="turnkey-commissioning"
      subSlug="hr-training"
      params={params}
    />
  );
}
