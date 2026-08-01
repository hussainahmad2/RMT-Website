import { SubServiceDetail } from "@/components/services/serviceTemplateShared";

type PageProps = { params: { slug: string; subSlug: string } };

export default function TestingValidationPage({ params }: PageProps) {
  return (
    <SubServiceDetail
      serviceSlug="contract-manufacturing"
      subSlug="testing-validation"
      params={params}
    />
  );
}
