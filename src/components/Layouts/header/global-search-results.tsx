"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  query: string;
};

/**
 * Temporary static search index
 * Later: replace with API / DB / Fuse.js
 */
const SEARCH_ITEMS = [
  // Clients
  {
    type: "Client",
    label: "Emma Johnson",
    href: "/client-profiles",
  },
  {
    type: "Client",
    label: "Michael Chen",
    href: "/client-profiles",
  },
  {
    type: "Client",
    label: "Sofia Martinez",
    href: "/client-profiles",
  },

  // Treatments
  {
    type: "Treatment",
    label: "Hydrafacial",
    href: "/tables/treatments",
  },
  {
    type: "Treatment",
    label: "Microneedling",
    href: "/tables/treatments",
  },
  {
    type: "Treatment",
    label: "Botox",
    href: "/tables/treatments",
  },

  // Memberships
  {
    type: "Membership",
    label: "Skin Revival Membership",
    href: "/tables/memberships",
  },
  {
    type: "Membership",
    label: "Gold Membership",
    href: "/tables/memberships",
  },
];

export function GlobalSearchResults({ query }: Props) {
  const q = query.trim().toLowerCase();

  if (!q) return null;

  const results = SEARCH_ITEMS.filter((item) =>
    item.label.toLowerCase().includes(q),
  ).slice(0, 6); // limit results

  return (
    <div
      className="
        absolute
        left-0
        top-[110%]
        z-50
        w-full
        overflow-hidden
        rounded-xl
        border
        border-stroke
        bg-white
        shadow-lg
        dark:border-dark-3
        dark:bg-gray-dark
      "
    >
      {results.length === 0 ? (
        <div className="px-4 py-3 text-sm text-dark-5 dark:text-dark-6">
          No results found
        </div>
      ) : (
        <ul className="divide-y divide-stroke dark:divide-dark-3">
          {results.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="
                  flex
                  items-center
                  justify-between
                  px-4
                  py-3
                  text-sm
                  transition
                  hover:bg-gray-2
                  dark:hover:bg-dark-3
                "
              >
                <div>
                  <div className="font-medium text-dark dark:text-white">
                    {item.label}
                  </div>
                  <div className="text-xs text-dark-5 dark:text-dark-6">
                    {item.type}
                  </div>
                </div>

                <span
                  className={cn(
                    "rounded-full px-2 py-0.5 text-xs font-medium",
                    item.type === "Client" &&
                      "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
                    item.type === "Treatment" &&
                      "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
                    item.type === "Membership" &&
                      "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
                  )}
                >
                  {item.type}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
