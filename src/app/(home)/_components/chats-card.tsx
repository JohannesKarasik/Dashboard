"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

/* Same data as notifications */
const purchases = [
  {
    title: "Sarah Thompson purchased Hydrafacial",
    subTitle: "Treatment purchase • Just now",
  },
  {
    title: "Anna Müller bought Skin Revival Membership",
    subTitle: "Membership purchase • 5 minutes ago",
  },
  {
    title: "Michael Chen booked Microneedling",
    subTitle: "Treatment booking • 18 minutes ago",
  },
  {
    title: "Emma Johnson purchased Botox",
    subTitle: "Treatment purchase • 1 hour ago",
  },
  {
    title: "Sofia Martinez upgraded membership",
    subTitle: "Gold → Platinum • Today",
  },
];

/* Same highlighting logic as notifications */
function renderPurchaseTitle(title: string) {
  const verbs = ["purchased", "bought", "booked", "upgraded"];
  const verb = verbs.find((v) => title.includes(v));

  if (!verb) {
    return (
      <span className="text-sm font-medium text-dark dark:text-white">
        {title}
      </span>
    );
  }

  const [name, rest] = title.split(` ${verb} `);

  return (
    <span className="text-sm font-medium text-dark dark:text-white">
      <span className="font-semibold text-primary">{name}</span>{" "}
      <span>{verb}</span>{" "}
      <span className="text-primary">{rest}</span>
    </span>
  );
}

export function ChatsCard() {
  return (
    <div className="col-span-12 rounded-[10px] bg-white py-6 shadow-1 dark:bg-gray-dark dark:shadow-card xl:col-span-4">
      <h2 className="mb-5.5 px-7.5 text-body-2xlg font-bold text-dark dark:text-white">
        Recent Purchases
      </h2>

      <ul>
        {purchases.map((item, index) => (
          <li key={index}>
            <Link
              href="#"
              className="block px-7.5 py-3 outline-none hover:bg-gray-2 focus-visible:bg-gray-2 dark:hover:bg-dark-2 dark:focus-visible:bg-dark-2"
            >
              {renderPurchaseTitle(item.title)}

              <div className="mt-0.5 text-sm font-medium text-dark-5 dark:text-dark-6">
                {item.subTitle}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}