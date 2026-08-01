import { ServiceDetail } from "@/components/services/serviceTemplateShared";

type PageProps = { params: { slug: string } };

export default function ProductDevelopmentPage({ params }: PageProps) {
  return <ServiceDetail slug="product-development" params={params} />;
}
