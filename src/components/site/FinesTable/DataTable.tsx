import * as React from "react";
import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { TotalFines } from "@/shared/types";
import AddFinesDrawer from "../AddFinesDrawer/AddFinesDrawer";
import AddPlayerDrawer from "../AddPlayerDrawer/AddPlayerDrawer";

type Props = {
  data: TotalFines[];
  isAdmin?: boolean;
};

function DataTable({ data, isAdmin }: Props) {
  const columns: ColumnDef<TotalFines>[] = [
    {
      accessorKey: "isPeanut",
      header: "",
      cell: ({ row }) => (row.getValue("isPeanut") ? <p>🥜</p> : <p>&nbsp;</p>),
      enableSorting: false,
    },
    {
      accessorKey: "playerId",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="text-lg"
          >
            ID
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="text-lg p-4">{row.getValue("playerId")}</div>
      ),
    },
    {
      accessorKey: "name",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="text-lg text-left"
          >
            Name
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="capitalize text-lg p-4">{row.getValue("name")}</div>
      ),
      meta: {
        className: "sticky left-0 bg-gray-50",
      },
    },
    {
      accessorKey: "amountFined",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="text-lg"
          >
            Fines
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => {
        const amountFined = parseFloat(row.getValue("amountFined"));

        // Format the amount as a dollar amount
        const formatted = new Intl.NumberFormat("en-au", {
          style: "currency",
          currency: "AUD",
        }).format(amountFined);

        return <div className="text-right font-medium p-4">{formatted}</div>;
      },
    },
    {
      accessorKey: "amountPaid",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="text-lg"
          >
            Paid
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => {
        const amountPaid = parseFloat(row.getValue("amountPaid"));

        // Format the amount as a dollar amount
        const formatted = new Intl.NumberFormat("en-au", {
          style: "currency",
          currency: "AUD",
        }).format(amountPaid);

        return <div className="text-right font-medium p-4">{formatted}</div>;
      },
    },
    {
      id: "edit",
      header: "",

      cell: ({ row }) => {
        return (
          <div className="flex justify-center items-center">
            <AddFinesDrawer
              playerName={row.getValue("name")}
              playerId={row.getValue("playerId")}
            />
          </div>
        );
      },
    },
  ];

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility: {
        edit: isAdmin ? true : false,
        playerId: false,
      },
      rowSelection,
    },
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: 12,
      },
      columnVisibility: {
        edit: false,
      },
    },
  });

  return (
    <div className="w-full max-w-3xl mx-auto py-36 text-xl">
      <div className="flex items-center py-4 text-xl">
        <Input
          placeholder="Filter by name"
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="w-full text-xl"
        />
        {isAdmin ? <AddPlayerDrawer /> : null}
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader className="text-lg">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="text-lg">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                  {isAdmin ? <AddPlayerDrawer /> : null}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="space-x-2">
          <Button
            variant="outline"
            size="lg"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DataTable;
