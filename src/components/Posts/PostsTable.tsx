"use client";
import DataTable from "../DataTable";
import posts from "@/data/posts";
import { cn } from "@/lib/utils";

const actionColumn = {
  header: "Action",
  key: "Edit",
  hrefTemplate: "/posts/edit/:id",
};

const columns = [
  {
    accessorKey: "author",
    header: "Author",
    size:15,
  },
  {
    accessorKey: "title",
    header: "Title",
    size:25,
  },
  {
    accessorKey: "body",
    header: "Introduction",
    size:45,
  },
  {
    accessorKey: "date",
    header: "Date",
    cellType: "date",
    size:10,
  },
  {
    id: "action",
    header: actionColumn.header,
    size:5,
  },
];

type PostsTableProps = {
  className?: string;
};

const PostsTable = ({ className }: PostsTableProps) => {
  const handleRowClick = (rowData: any) => {
    console.log("Clicked row data:", rowData);
    // You can add more logic here, like opening a modal or navigating to a details page
  };

  return (
    <div className={cn("", className)}>
      <DataTable
        columns={columns}
        data={posts}
        actionColumn={actionColumn}
        tableTitle="Posts"
        showFilter={true}
        showPagination={true}
        initialSort={[
          // { id: "date", desc: true },
          { id: "title", desc: false },
        ]}
        isClickable={true}
        onRowClick={handleRowClick}
      />
    </div>
  );
};

export default PostsTable;
