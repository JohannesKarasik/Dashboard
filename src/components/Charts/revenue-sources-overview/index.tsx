import { PeriodPicker } from "@/components/period-picker";
import { cn } from "@/lib/utils";
import { getPaymentsOverviewData } from "@/services/charts.services";
import { RevenueSourcesOverviewChart } from "./chart";

type PropsType = {
  timeFrame?: string;
  className?: string;
};

export async function RevenueSourcesOverview({
  timeFrame = "monthly",
  className,
}: PropsType) {
  const data = await getPaymentsOverviewData(timeFrame);

  // total revenue across period
  const totalRevenue =
    data.received.reduce((acc, { y }) => acc + y, 0) +
    data.due.reduce((acc, { y }) => acc + y, 0);

  // TEMP distribution (replace with real backend data later)
  const sources = [
    { label: "Treatments", percent: 55 },
    { label: "Products", percent: 25 },
    { label: "Memberships", percent: 20 },
  ];

  return (
    <div
      className={cn(
        "grid gap-2 rounded-[10px] bg-white px-7.5 pb-6 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card",
        className,
      )}
    >
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-body-2xlg font-bold text-dark dark:text-white">
          Revenue Source Trends
        </h2>

        <PeriodPicker
          defaultValue={timeFrame}
          sectionKey="revenue_sources_overview"
        />
      </div>

      {/* Chart */}
      <RevenueSourcesOverviewChart data={data} />

      {/* Bottom percentages */}
      <dl className="grid divide-stroke text-center dark:divide-dark-3 sm:grid-cols-3 sm:divide-x [&>div]:flex [&>div]:flex-col-reverse [&>div]:gap-1">
        {sources.map((source) => (
          <div key={source.label}>
            <dt className="text-xl font-bold text-dark dark:text-white">
              {source.percent}%
            </dt>
            <dd className="font-medium dark:text-dark-6">
              {source.label}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}