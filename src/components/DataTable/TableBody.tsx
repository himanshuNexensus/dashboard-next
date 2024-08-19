import React, { useState } from "react";
import { flexRender, Row } from "@tanstack/react-table";
import {
  TableBody as ShadcnTableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { ExpandedRowDetails } from "./ExpandedRowDetails";

interface TableBodyProps<TData> {
  rows: Row<TData>[];
  columns: any[];
  actionColumn?: {
    key: string;
    hrefTemplate: string;
  };
  isClickable?: boolean;
  onRowClick?: (row: TData) => void;
}

export function TableBody<TData>({
  rows,
  columns,
  actionColumn,
  isClickable = false,
  onRowClick,
}: TableBodyProps<TData>) {
  const [expandedRows, setExpandedRows] = useState<Record<string, boolean>>({});

  const toggleRowExpansion = (rowId: string) => {
    if (isClickable) {
      setExpandedRows((prev) => ({
        ...prev,
        [rowId]: !prev[rowId],
      }));
    }
  };

  if (rows.length === 0) {
    return (
      <ShadcnTableBody>
        <TableRow>
          <TableCell colSpan={columns.length} className="h-24 text-center">
            No data available
          </TableCell>
        </TableRow>
      </ShadcnTableBody>
    );
  }

  return (
    <ShadcnTableBody>
      {rows.map((row) => (
        <React.Fragment key={row.id}>
          <TableRow
            data-state={row.getIsSelected() && "selected"}
            onClick={() => {
              if (isClickable) {
                toggleRowExpansion(row.id);
                onRowClick && onRowClick(row.original);
              }
            }}
            className={isClickable ? "cursor-pointer hover:bg-gray-100" : ""}
          >
            {row.getVisibleCells().map((cell) => (
              <TableCell
                key={cell.id}
                style={{ width: `${cell.column.columnDef.size}%` }}
              >
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
          {isClickable && expandedRows[row.id] && (
            <TableRow>
              <TableCell colSpan={columns.length}>
                <ExpandedRowDetails data={row.original} />
              </TableCell>
            </TableRow>
          )}
        </React.Fragment>
      ))}
    </ShadcnTableBody>
  );
}
