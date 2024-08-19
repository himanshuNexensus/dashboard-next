"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { useDebounce } from "use-debounce";
import 'jspdf-autotable';

import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  ColumnDef,
  SortingState,
  ColumnResizeMode,
} from "@tanstack/react-table";
import {
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  ChevronsUpDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { exportToCSV } from "./exportToCSV";
import { exportToPDF } from "./exportToPDF";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  mData: TData[];
  tableTitle?: string;
  cellKey?: string;
  showPagination?: boolean;
  showFilter?: boolean;
  initialSort?: { id: string; desc: boolean }[];
  paginationSizes?: number[];
  actionColumn?: {
    header: string;
    key: string;
    hrefTemplate: string;
  };
  isLoading?: boolean;
  error?: string;
}

const DataTable = <TData, TValue>({
  columns,
  mData,
  tableTitle = "Data Table",
  showFilter = false,
  showPagination = false,
  initialSort,
  paginationSizes = [5, 10, 50, 100],
  actionColumn,
  isLoading = false,
  error,
}: DataTableProps<TData, TValue>) => {
  const [sorting, setSorting] = useState<SortingState>(initialSort || []);
  const [filtering, setFiltering] = useState("");
  const [debouncedFiltering] = useDebounce(filtering, 300);
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [gotoPage, setGotoPage] = useState("");
  const [columnVisibility, setColumnVisibility] = useState({});

  const data = useMemo(() => mData, [mData]);

  const tableConfig = useMemo(
    () => ({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      state: {
        sorting,
        globalFilter: debouncedFiltering,
        pagination: {
          pageIndex,
          pageSize,
        },
        columnVisibility,
      },
      onSortingChange: setSorting,
      onGlobalFilterChange: setFiltering,
      onColumnVisibilityChange: setColumnVisibility,
      enableColumnResizing: true,
      columnResizeMode: "onChange" as ColumnResizeMode,
    }),
    [
      data,
      columns,
      sorting,
      filtering,
      pageIndex,
      pageSize,
      debouncedFiltering,
      columnVisibility,
    ]
  );

  const table = useReactTable(tableConfig);

  if (isLoading) {
    return <div className="text-center p-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center p-4 text-red-500">{error}</div>;
  }

  return (
    <div className="rounded-md border">
      {/* show table title if passed */}
      {tableTitle && (
        <div className="flex justify-between items-center px-4 py-2 border-b">
          <h2 className="text-lg font-semibold tracking-tight">{tableTitle}</h2>

          {/* show filter if passed */}
          {showFilter && (
            <div className="p-2">
              <input
                value={filtering}
                onChange={(e) => setFiltering(e.target.value)}
                placeholder="Filter all columns..."
                className="p-2 font-lg shadow border border-block"
              />
            </div>
          )}

          {/*dropdown menu -column filtering  */}
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-auto">
                  Columns
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {table
                  .getAllColumns()
                  .filter((column) => column.getCanHide())
                  .map((column) => {
                    return (
                      <DropdownMenuCheckboxItem
                        key={column.id}
                        className="capitalize"
                        checked={column.getIsVisible()}
                        onCheckedChange={(value) =>
                          column.toggleVisibility(!!value)
                        }
                      >
                        {column.id}
                      </DropdownMenuCheckboxItem>
                    );
                  })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Show CSV Button */}
          <Button onClick={() => exportToCSV(data, "table-data.csv")}>
            CSV
          </Button>

          <Button onClick={() => exportToPDF(data, "table-data.pdf")}>
            PDF
          </Button>
        </div>
      )}

      <Table aria-label={tableTitle || "Data Table"}>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
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
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {cell.column.id === "action" ? (
                      <Link
                        href={
                          actionColumn
                            ? actionColumn.hrefTemplate.replace(
                                ":id",
                                (row?.original as any)?.id
                              )
                            : ("" as any)
                        }
                      >
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs">
                          {actionColumn?.key}
                        </button>
                      </Link>
                    ) : (cell.column.columnDef as any).cellType === "date" ? (
                      new Date(cell.getValue() as string).toDateString()
                    ) : (
                      flexRender(cell.column.columnDef.cell, cell.getContext())
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* show pagination if passed */}
      {showPagination && (
        <div className="flex items-center justify-end space-x-2 p-4">
          <div className="text-sm mr-2">
            Page {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPageIndex((old) => Math.max(0, old - 1))}
            disabled={!table.getCanPreviousPage()}
            className="w-24"
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPageIndex((old) => old + 1)}
            disabled={!table.getCanNextPage()}
            className="w-24"
          >
            Next
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>

          {/* Goto page component */}
          <div className="flex items-center space-x-2">
            <span className="text-sm">Go to page:</span>
            <input
              type="number"
              value={gotoPage}
              onChange={(e) => {
                const page = parseInt(e.target.value);
                setGotoPage(e.target.value);
                if (page > 0 && page <= table.getPageCount()) {
                  setPageIndex(page - 1);
                }
              }}
              onBlur={() => setGotoPage("")}
              className="w-16 p-1 text-sm border rounded"
            />
          </div>

          <Select
            value={pageSize.toString()}
            onValueChange={(value) => {
              const newPageSize = Number(value);
              setPageSize(newPageSize);
              setPageIndex(0); // Reset to the first page when changing page size
            }}
          >
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Select page size" />
            </SelectTrigger>
            <SelectContent>
              {paginationSizes.map((size) => (
                <SelectItem key={size} value={size.toString()}>
                  Show {size}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}
    </div>
  );
};

export default DataTable;
