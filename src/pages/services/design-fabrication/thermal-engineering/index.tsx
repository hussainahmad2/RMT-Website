import { SubServiceDetail } from "@/components/services/serviceTemplateShared";

type PageProps = { params: { slug: string; subSlug: string } };

export default function ThermalEngineeringPage({ params }: PageProps) {
  return (
    <SubServiceDetail
      serviceSlug="design-fabrication"
      subSlug="thermal-engineering"
      params={params}
    />
  );
}
