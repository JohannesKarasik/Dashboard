"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { useEffect, useMemo, useState } from "react";

/**
 * Temporary mock data
 * Replace later with real API / DB data
 */
async function getClientProfiles() {
  // fake delay
  await new Promise((r) => setTimeout(r, 800));

  return [
    {
      name: "Emma Johnson",
      visits: 12,
      spend: 1840,
    },
    {
      name: "Michael Chen",
      visits: 5,
      spend: 620,
    },
    {
      name: "Sofia Martinez",
      visits: 9,
      spend: 1320,
    },
    {
      name: "Daniel Novak",
      visits: 3,
      spend: 410,
    },
  ];
}

type Client = Awaited<ReturnType<typeof getClientProfiles>>[number];

type ClientProfilesTableProps = {
  className?: string;
  search?: string;
};

export function ClientProfilesTable({
  className,
  search = "",
}: ClientProfilesTableProps) {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      const data = await getClientProfiles();
      if (!cancelled) {
        setClients(data);
        setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const filteredClients = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return clients;
    return clients.filter((c) => c.name.toLowerCase().includes(q));
  }, [clients, search]);

  return (
    <div
      className={cn(
        "rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card",
        className,
      )}
    >
      <h2 className="mb-4 text-body-2xlg font-bold text-dark dark:text-white">
        Client Profiles
      </h2>

      <Table>
        <TableHeader>
          <TableRow className="border-none uppercase [&>th]:text-center">
            <TableHead className="!text-left min-w-[200px]">Client</TableHead>
            <TableHead>Visits</TableHead>
            <TableHead className="!text-right">Total Spend</TableHead>
            <TableHead className="!text-right">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {/* Loading state */}
          {loading && (
            <TableRow>
              <TableCell colSpan={4} className="py-6 text-center text-body">
                Loading clients...
              </TableCell>
            </TableRow>
          )}

          {/* Empty search state */}
          {!loading && filteredClients.length === 0 && (
            <TableRow>
              <TableCell colSpan={4} className="py-6 text-center text-body">
                No clients found
              </TableCell>
            </TableRow>
          )}

          {!loading &&
            filteredClients.map((client, i) => (
              <TableRow
                key={client.name + i}
                className="text-center text-base font-medium text-dark dark:text-white"
              >
                <TableCell className="!text-left">{client.name}</TableCell>

                <TableCell>{client.visits}</TableCell>

                <TableCell className="!text-right">
                  ${client.spend.toLocaleString()}
                </TableCell>

                <TableCell className="!text-right">
                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-primary/90"
                    aria-label={`Scan treatment for ${client.name}`}
                  >
                    Scan Treatment
                  </button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
