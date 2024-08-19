import { flexRender, HeaderGroup } from "@tanstack/react-table";
import { TableHead, TableHeader as ShadcnTableHeader, TableRow } from "@/components/ui/table";
import { ChevronUp, ChevronDown, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface TableHeaderProps<TData> {
  headerGroups: HeaderGroup<TData>[];
}

export function TableHeader<TData>({ headerGroups }: TableHeaderProps<TData>) {
  return (
    <ShadcnTableHeader>
      {headerGroups.map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <TableHead 
              key={header.id}
              style={{ width: `${header.column.columnDef.size}%` }}
            >
              {header.isPlaceholder ? null : (
                <div
                  className={cn(
                    "flex items-center space-x-2",
                    header.column.getCanSort()
                      ? "cursor-pointer select-none"
                      : ""
                  )}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  <div>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </div>
                  {header.column.id !== "action" &&
                    header.column.getCanSort() && (
                      <div>
                        {{
                          asc: <ChevronUp className="h-4 w-4" />,
                          desc: <ChevronDown className="h-4 w-4" />,
                        }[header.column.getIsSorted() as string] ?? (
                          <ChevronsUpDown className="h-4 w-4" />
                        )}
                      </div>
                    )}
                </div>
              )}
            </TableHead>
          ))}
        </TableRow>
      ))}
    </ShadcnTableHeader>
  );
}
