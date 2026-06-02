import { SubServiceDetail } from "../../_shared";

type PageProps = { params: { slug: string; subSlug: string } };

/**
 * Iso 13485 Implementation â€?customize this screen in:
 * src/pages/services/turnkey-commissioning/iso-13485-implementation/index.tsx
 */
export default function Iso13485ImplementationPage({ params }: PageProps) {
  return (
    <SubServiceDetail
      serviceSlug="turnkey-commissioning"
      subSlug="iso-13485-implementation"
      params={params}
    />
  );
}
