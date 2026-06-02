import { ServiceDetail } from "../_shared";

type PageProps = { params: { slug: string } };

export default function BmdServicePage({ params }: PageProps) {
  return <ServiceDetail slug="bmd" params={params} />;
}
