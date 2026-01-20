import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { InvoiceTable } from "@/components/Tables/invoice-table";
import { TopChannels } from "@/components/Tables/top-channels";
import { TopChannelsSkeleton } from "@/components/Tables/top-channels/skeleton";
import { TopProducts } from "@/components/Tables/top-products";
import { TopProductsSkeleton } from "@/components/Tables/top-products/skeleton";

import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Tables",
};

const NAV_ITEMS = [
  { label: "Offers", href: "/offers" },
  { label: "Products", href: "/products" },
  { label: "Memberships", href: "/memberships" },
  { label: "Rewards", href: "/rewards" },
  { label: "Settings", href: "/pages/settings" },
];

const TablesPage = () => {
  return (
    <>
      <Breadcrumb pageName="Tables" />

      {/* Top menu */}
      <div className="mb-6 border-b border-stroke pb-4 dark:border-strokedark">
        <nav className="flex flex-wrap gap-2">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex items-center rounded-md border border-stroke bg-white px-3 py-1.5 text-sm font-medium text-black transition hover:bg-gray-2 dark:border-strokedark dark:bg-boxdark dark:text-white dark:hover:bg-meta-4"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="space-y-10">
        <Suspense fallback={<TopChannelsSkeleton />}>
          <TopChannels />
        </Suspense>

        <Suspense fallback={<TopProductsSkeleton />}>
          <TopProducts />
        </Suspense>

        <InvoiceTable />
      </div>
    </>
  );
};

export default TablesPage;