import { SubServiceDetail } from "@/components/services/serviceTemplateShared";

type PageProps = { params: { slug: string; subSlug: string } };

/**
 * Hr Training 閳?customize this screen in:
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
