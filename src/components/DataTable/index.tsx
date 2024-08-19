"use client";
import React, { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  ColumnDef,
} from "@tanstack/react-table";

import { Table } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

import { TableHeader } from "./TableHeader";
import { TableBody } from "./TableBody";
import { TablePagination } from "./TablePagination";
import { TableFilter } from "./TableFilter";
import { ColumnVisibilityDropdown } from "./ColumnVisibilityDropdown";

import { exportToCSV } from "./exportToCSV";
import { exportToPDF } from "./exportToPDF";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  tableTitle?: string;
  showPagination?: boolean;
  showFilter?: boolean;
  initialSort?: { id: string; desc: boolean }[];
  paginationSizes?: number[];
  actionColumn?: {
    header: string;
    key: string;
    hrefTemplate: string;
  };
  isClickable?: boolean;
  onRowClick?: (row: TData) => void;
}

function DataTable<TData, TValue>({
  columns,
  data,
  tableTitle = "Data Table",
  showFilter = false,
  showPagination = false,
  initialSort,
  paginationSizes = [5, 10, 50, 100],
  actionColumn,
  isClickable = false,
  onRowClick,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState(initialSort || []);
  const [globalFilter, setGlobalFilter] = useState("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      globalFilter,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
  });

  return (
    <div className="rounded-md border">
      <div className="flex justify-between items-center px-4 py-2 border-b">
        <h2 className="text-lg font-semibold tracking-tight">{tableTitle}</h2>
        {showFilter && <TableFilter table={table} />}
        <div className="flex gap-2">
          <ColumnVisibilityDropdown table={table} />
          <Button onClick={() => exportToCSV(data, "table-data.csv")}>
            CSV
          </Button>
          <Button onClick={() => exportToPDF(data, "table-data.pdf")}>
            PDF
          </Button>
        </div>
      </div>

      <Table>
        <TableHeader headerGroups={table.getHeaderGroups()} />
        <TableBody
          rows={table.getRowModel().rows || []}
          columns={columns}
          actionColumn={actionColumn}
          isClickable={isClickable}
          onRowClick={onRowClick}
        />
      </Table>

      {showPagination && (
        <TablePagination table={table} pageSizes={paginationSizes} />
      )}
    </div>
  );
}

export default DataTable;
