import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import { cn } from "@/lib/utils";
  
  async function getClientProfiles() {
    await new Promise((r) => setTimeout(r, 300));
  
    return [
      { name: "Emma Johnson", visits: 12, spend: 1840, lastVisit: "2024-01-18", status: "Active" },
      { name: "Michael Chen", visits: 5, spend: 620, lastVisit: "2023-12-04", status: "Inactive" },
      { name: "Sofia Martinez", visits: 9, spend: 1320, lastVisit: "2024-01-10", status: "Active" },
      { name: "Daniel Novak", visits: 3, spend: 410, lastVisit: "2023-11-22", status: "New" },
    ];
  }
  
  type Props = {
    className?: string;
    search?: string;
  };
  
  export async function ClientProfilesTable({ className, search = "" }: Props) {
    const clients = await getClientProfiles();
  
    const filtered = clients.filter((client) =>
      client.name.toLowerCase().includes(search.toLowerCase())
    );
  
    return (
      <div
        className={cn(
          "rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card",
          className
        )}
      >
        <h2 className="mb-4 text-body-2xlg font-bold text-dark dark:text-white">
          Client Profiles
        </h2>
  
        <Table>
          <TableHeader>
            <TableRow className="border-none uppercase [&>th]:text-center">
              <TableHead className="!text-left">Client</TableHead>
              <TableHead>Visits</TableHead>
              <TableHead className="!text-right">Total Spend</TableHead>
              <TableHead>Last Visit</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
  
          <TableBody>
            {filtered.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} className="py-6 text-center text-body">
                  No clients found
                </TableCell>
              </TableRow>
            )}
  
            {filtered.map((client) => (
              <TableRow key={client.name} className="text-center text-base font-medium">
                <TableCell className="!text-left">{client.name}</TableCell>
                <TableCell>{client.visits}</TableCell>
                <TableCell className="!text-right">
                  ${client.spend.toLocaleString()}
                </TableCell>
                <TableCell>{client.lastVisit}</TableCell>
                <TableCell>{client.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
  