import { SubServiceDetail } from "@/components/services/serviceTemplateShared";

type PageProps = { params: { slug: string; subSlug: string } };

/**
 * Iso 13485 Implementation 閳?customize this screen in:
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
