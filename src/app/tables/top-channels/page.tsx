import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TopChannels from "@/components/Tables/top-channels";

export default function TopChannelsPage() {
  return (
    <>
      <Breadcrumb pageName="Top Channels" />

      <div className="space-y-6">
        <TopChannels />
      </div>
    </>
  );
}
