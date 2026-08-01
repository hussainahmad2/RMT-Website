import { SubServiceDetail } from "@/components/services/serviceTemplateShared";

type PageProps = { params: { slug: string; subSlug: string } };

export default function AiSolutionsPage({ params }: PageProps) {
  return (
    <SubServiceDetail
      serviceSlug="software-ai"
      subSlug="ai-solutions"
      params={params}
    />
  );
}
