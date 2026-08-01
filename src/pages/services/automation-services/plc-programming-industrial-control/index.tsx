import { SubServiceDetail } from "@/components/services/serviceTemplateShared";
export default function Page({ params }: { params: { slug: string; subSlug: string } }) {
  return <SubServiceDetail serviceSlug="automation-services" subSlug="plc-programming-industrial-control" params={params} />;
}
