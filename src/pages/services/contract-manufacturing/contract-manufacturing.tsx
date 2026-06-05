import { ServiceDetail } from "../_shared";

type PageProps = { params: { slug: string } };

export default function ContractManufacturingPage({ params }: PageProps) {
  return <ServiceDetail slug="contract-manufacturing" params={params} />;
}
