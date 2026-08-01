import { SubServiceDetail } from "@/components/services/serviceTemplateShared";

type PageProps = { params: { slug: string; subSlug: string } };

/**
 * Commissioning Validation 閳?customize this screen in:
 * src/pages/services/turnkey-commissioning/commissioning-validation/index.tsx
 */
export default function CommissioningValidationPage({ params }: PageProps) {
  return (
    <SubServiceDetail
      serviceSlug="turnkey-commissioning"
      subSlug="commissioning-validation"
      params={params}
    />
  );
}
