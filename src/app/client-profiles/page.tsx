"use client";

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { ClientProfilesTable } from "@/components/Tables/client-profiles";
import Link from "next/link";
import { useState } from "react";

export default function ClientProfilesPage() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Breadcrumb pageName="Client Profiles" />

      {/* Search bar + action button */}
      <div className="mb-6 border-b border-stroke pb-4 dark:border-strokedark">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="relative w-full max-w-lg">
            <svg
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-body"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M21 21l-4.35-4.35"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>

            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search clients by name..."
              className="w-full rounded-md border border-stroke bg-white py-2 pl-10 pr-3 text-sm outline-none transition focus:border-primary dark:border-strokedark dark:bg-boxdark dark:text-white"
            />
          </div>

          <Link
            href="/client-profiles/new"
            className="inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-primary/90"
          >
            + Add Client
          </Link>
        </div>
      </div>

      <div className="space-y-10">
        <ClientProfilesTable search={search} />
      </div>
    </>
  );
}
