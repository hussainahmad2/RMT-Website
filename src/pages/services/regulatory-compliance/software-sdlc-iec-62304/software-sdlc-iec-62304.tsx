import { SubServiceDetail } from "../../_shared";

type PageProps = { params: { slug: string; subSlug: string } };

export default function SoftwareSdlcIec62304Page({ params }: PageProps) {
  return (
    <SubServiceDetail
      serviceSlug="regulatory-compliance"
      subSlug="software-sdlc-iec-62304"
      params={params}
    />
  );
}
