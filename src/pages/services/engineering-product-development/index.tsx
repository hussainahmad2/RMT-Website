import { ServiceDetail } from "@/components/services/serviceTemplateShared";

type PageProps = { params: { slug: string } };

export default function EngineeringProductDevelopmentPage({ params }: PageProps) {
  return <ServiceDetail slug="engineering-product-development" params={params} />;
}
