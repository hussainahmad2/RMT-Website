import { SubServiceDetail } from "../../_shared";

type PageProps = { params: { slug: string; subSlug: string } };

/**
 * Technical File Fda Ce â€?customize this screen in:
 * src/pages/services/regulatory-compliance/technical-file-fda-ce/index.tsx
 */
export default function TechnicalFileFdaCePage({ params }: PageProps) {
  return (
    <SubServiceDetail
      serviceSlug="regulatory-compliance"
      subSlug="technical-file-fda-ce"
      params={params}
    />
  );
}
