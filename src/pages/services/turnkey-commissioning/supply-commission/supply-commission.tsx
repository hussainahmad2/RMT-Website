import { SubServiceDetail } from "../../_shared";

type PageProps = { params: { slug: string; subSlug: string } };

/**
 * Supply Commission â€?customize this screen in:
 * src/pages/services/turnkey-commissioning/supply-commission/index.tsx
 */
export default function SupplyCommissionPage({ params }: PageProps) {
  return (
    <SubServiceDetail
      serviceSlug="turnkey-commissioning"
      subSlug="supply-commission"
      params={params}
    />
  );
}
