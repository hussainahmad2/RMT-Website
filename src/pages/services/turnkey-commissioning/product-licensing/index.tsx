import { SubServiceDetail } from "@/components/services/serviceTemplateShared";

type PageProps = { params: { slug: string; subSlug: string } };

/**
 * Product Licensing 閳?customize this screen in:
 * src/pages/services/turnkey-commissioning/product-licensing/index.tsx
 */
export default function ProductLicensingPage({ params }: PageProps) {
  return (
    <SubServiceDetail
      serviceSlug="turnkey-commissioning"
      subSlug="product-licensing"
      params={params}
    />
  );
}
