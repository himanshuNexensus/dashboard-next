import React from 'react';
import { Table } from "@tanstack/react-table";

interface TableFilterProps<TData> {
  table: Table<TData>;
}

export function TableFilter<TData>({ table }: TableFilterProps<TData>) {
  return (
    <div className="p-2">
      <input
        value={(table.getState().globalFilter as string) || ""}
        onChange={(e) => table.setGlobalFilter(e.target.value)}
        placeholder="Filter all columns..."
        className="p-2 font-lg shadow border border-block"
      />
    </div>
  );
}