import React, { useState } from "react";
import { Table } from "@tanstack/react-table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface TablePaginationProps<TData> {
  table: Table<TData>;
  pageSizes: number[];
}

export function TablePagination<TData>({
  table,
  pageSizes,
}: TablePaginationProps<TData>) {
  const [gotoPage, setGotoPage] = useState("");
  const currentPage = table.getState().pagination.pageIndex + 1;
  const totalPages = table.getPageCount();

  const renderPaginationItems = () => {
    const items = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        items.push(
          <PaginationItem key={i}>
            <PaginationLink
              onClick={() => table.setPageIndex(i - 1)}
              isActive={currentPage === i}
              className="cursor-pointer"
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
    } else {
      items.push(
        <PaginationItem key={1}>
          <PaginationLink
            onClick={() => table.setPageIndex(0)}
            isActive={currentPage === 1}
            className="cursor-pointer"
          >
            1
          </PaginationLink>
        </PaginationItem>
      );

      if (currentPage > 3) {
        items.push(<PaginationEllipsis key="ellipsis-start" />);
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(currentPage + 1, totalPages - 1);

      for (let i = start; i <= end; i++) {
        items.push(
          <PaginationItem key={i}>
            <PaginationLink
              onClick={() => table.setPageIndex(i - 1)}
              isActive={currentPage === i}
              className="cursor-pointer"
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }

      if (currentPage < totalPages - 2) {
        items.push(<PaginationEllipsis key="ellipsis-end" />);
      }

      items.push(
        <PaginationItem key={totalPages}>
          <PaginationLink
            onClick={() => table.setPageIndex(totalPages - 1)}
            isActive={currentPage === totalPages}
            className="cursor-pointer"
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return items;
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center  space-y-2 sm:space-y-0 sm:space-x-2 p-4">
      <Pagination className="w-auto mx-0">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => table.previousPage()}
              className={
                !table.getCanPreviousPage()
                  ? "pointer-events-none opacity-50"
                  : "cursor-pointer"
              }
            />
          </PaginationItem>
          {renderPaginationItems()}
          <PaginationItem>
            <PaginationNext
              onClick={() => table.nextPage()}
              className={
                !table.getCanNextPage()
                  ? "pointer-events-none opacity-50"
                  : "cursor-pointer"
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>

      <div className="flex items-center space-x-2">
        <span className="text-sm">Page</span>
        <strong className="text-sm">
          {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </strong>
      </div>

      <div className="flex items-center space-x-2">
        <span className="text-sm hidden sm:inline">Go to page:</span>
        <input
          type="number"
          value={gotoPage}
          onChange={(e) => {
            const page = parseInt(e.target.value);
            setGotoPage(e.target.value);
            if (page > 0 && page <= table.getPageCount()) {
              table.setPageIndex(page - 1);
            }
          }}
          onBlur={() => setGotoPage("")}
          className="w-16 p-1 text-sm border rounded"
        />
      </div>

      <Select
        value={table.getState().pagination.pageSize.toString()}
        onValueChange={(value) => {
          table.setPageSize(Number(value));
          table.setPageIndex(0);
        }}
      >
        <SelectTrigger className="w-[120px]">
          <SelectValue placeholder="Select page size" />
        </SelectTrigger>
        <SelectContent>
          {pageSizes.map((size) => (
            <SelectItem key={size} value={size.toString()}>
              Show {size}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

