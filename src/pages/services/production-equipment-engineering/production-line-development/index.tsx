import { SubServiceDetail } from "@/components/services/serviceTemplateShared";

type PageProps = { params: { slug: string; subSlug: string } };

export default function ProductionLineDevelopmentPage({ params }: PageProps) {
  return (
    <SubServiceDetail
      serviceSlug="production-equipment-engineering"
      subSlug="production-line-development"
      params={params}
    />
  );
}
