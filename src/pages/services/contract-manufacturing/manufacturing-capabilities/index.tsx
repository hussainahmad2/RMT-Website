import { SubServiceDetail } from "@/components/services/serviceTemplateShared";

type PageProps = { params: { slug: string; subSlug: string } };

export default function ManufacturingCapabilitiesPage({ params }: PageProps) {
  return (
    <SubServiceDetail
      serviceSlug="contract-manufacturing"
      subSlug="manufacturing-capabilities"
      params={params}
    />
  );
}
