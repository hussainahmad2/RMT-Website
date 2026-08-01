import { SubServiceDetail } from "@/components/services/serviceTemplateShared";

type PageProps = { params: { slug: string; subSlug: string } };

export default function MaintenanceCalibrationSupportPage({ params }: PageProps) {
  return (
    <SubServiceDetail
      serviceSlug="production-equipment-engineering"
      subSlug="maintenance-calibration-support"
      params={params}
    />
  );
}
