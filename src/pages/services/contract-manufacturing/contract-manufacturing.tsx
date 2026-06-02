import { ServiceDetail } from "../_shared";

type PageProps = { params: { slug: string } };

/**
 * Contract Manufacturing â€?customize this screen in:
 * src/pages/services/contract-manufacturing/index.tsx
 */
export default function ContractManufacturingServicePage({ params }: PageProps) {
  return <ServiceDetail slug="contract-manufacturing" params={params} />;
}
