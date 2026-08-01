import { SubServiceDetail } from "@/components/services/serviceTemplateShared";

type PageProps = { params: { slug: string; subSlug: string } };

/**
 * Oq Pq Qualification 閳?customize this screen in:
 * src/pages/services/turnkey-commissioning/oq-pq-qualification/index.tsx
 */
export default function OqPqQualificationPage({ params }: PageProps) {
  return (
    <SubServiceDetail
      serviceSlug="turnkey-commissioning"
      subSlug="oq-pq-qualification"
      params={params}
    />
  );
}
