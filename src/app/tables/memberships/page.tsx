import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { TopChannels } from "@/components/Tables/top-channels";
import { TopChannelsSkeleton } from "@/components/Tables/top-channels/skeleton";

import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Tables",
};

const NAV_ITEMS = [
    { label: "Treatments", href: "/tables/treatments" },

  { label: "Offers", href: "/tables/offers" },
  { label: "Products", href: "/tables/products" },
  { label: "Memberships", href: "/tables/memberships" },
  { label: "Rewards", href: "/tables/rewards" },
];

const TablesPage = () => {
  return (
    <>
      <Breadcrumb pageName="Tables" />

      {/* Top menu */}
      <div className="mb-6 border-b border-stroke pb-4 dark:border-strokedark">
  <div className="flex flex-wrap items-center justify-between gap-4">
    {/* Left: nav pills */}
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

    {/* Right: action pill */}
    <Link
      href="/tables/treatments/new"
      className="inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-1.5 text-sm font-medium text-white transition hover:bg-primary/90"
    >
      + Create Membership
    </Link>
  </div>
</div>


      <div className="space-y-10">
        <Suspense fallback={<TopChannelsSkeleton />}>
        <TopChannels
            title="Memberships"
            columns={["Plan", "Active Members", "New This Month", "Monthly Revenue", "Churn"]}
            />
        </Suspense>
      </div>
    </>
  );
};

export default TablesPage;
