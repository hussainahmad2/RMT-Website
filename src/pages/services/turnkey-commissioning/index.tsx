import { ServiceDetail } from "@/components/services/serviceTemplateShared";

type PageProps = { params: { slug: string } };

/**
 * Turnkey Commissioning 閳?customize this screen in:
 * src/pages/services/turnkey-commissioning/index.tsx
 */
export default function TurnkeyCommissioningServicePage({ params }: PageProps) {
  return <ServiceDetail slug="turnkey-commissioning" params={params} />;
}
