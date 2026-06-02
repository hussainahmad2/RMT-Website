import { ServiceDetail } from "../_shared";

type PageProps = { params: { slug: string } };

/**
 * Software Ai â€?customize this screen in:
 * src/pages/services/software-ai/index.tsx
 */
export default function SoftwareAiServicePage({ params }: PageProps) {
  return <ServiceDetail slug="software-ai" params={params} />;
}
