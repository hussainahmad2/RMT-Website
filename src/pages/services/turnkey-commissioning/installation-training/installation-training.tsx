import { SubServiceDetail } from "../../_shared";

type PageProps = { params: { slug: string; subSlug: string } };

/**
 * Installation Training â€?customize this screen in:
 * src/pages/services/turnkey-commissioning/installation-training/index.tsx
 */
export default function InstallationTrainingPage({ params }: PageProps) {
  return (
    <SubServiceDetail
      serviceSlug="turnkey-commissioning"
      subSlug="installation-training"
      params={params}
    />
  );
}
