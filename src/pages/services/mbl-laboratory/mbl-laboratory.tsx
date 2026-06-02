import { ServiceDetail } from "../_shared";

type PageProps = { params: { slug: string } };

export default function MblLaboratoryServicePage({ params }: PageProps) {
  return <ServiceDetail slug="mbl-laboratory" params={params} />;
}
