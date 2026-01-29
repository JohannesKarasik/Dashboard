import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TopProducts from "@/components/Tables/top-products";

export default function TopProductsPage() {
  return (
    <>
      <Breadcrumb pageName="Top Products" />

      <div className="space-y-6">
        <TopProducts />
      </div>
    </>
  );
}
