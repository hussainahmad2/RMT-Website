import { ServiceDetail } from "../_shared";

type PageProps = { params: { slug: string } };

/**
 * Turnkey Commissioning â€?customize this screen in:
 * src/pages/services/turnkey-commissioning/index.tsx
 */
export default function TurnkeyCommissioningServicePage({ params }: PageProps) {
  return <ServiceDetail slug="turnkey-commissioning" params={params} />;
}
