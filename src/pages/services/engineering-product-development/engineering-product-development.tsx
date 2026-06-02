import { ServiceDetail } from "../_shared";

type PageProps = { params: { slug: string } };

export default function EngineeringProductDevelopmentPage({ params }: PageProps) {
  return <ServiceDetail slug="engineering-product-development" params={params} />;
}
