import { SubServiceDetail } from "@/components/services/serviceTemplateShared";

type PageProps = { params: { slug: string; subSlug: string } };

export default function CustomMedicalSoftwarePage({ params }: PageProps) {
  return (
    <SubServiceDetail
      serviceSlug="software-ai"
      subSlug="custom-medical-software"
      params={params}
    />
  );
}
