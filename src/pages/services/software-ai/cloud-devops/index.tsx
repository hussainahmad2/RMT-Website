import { SubServiceDetail } from "@/components/services/serviceTemplateShared";

type PageProps = { params: { slug: string; subSlug: string } };

export default function CloudDevopsPage({ params }: PageProps) {
  return (
    <SubServiceDetail
      serviceSlug="software-ai"
      subSlug="cloud-devops"
      params={params}
    />
  );
}
