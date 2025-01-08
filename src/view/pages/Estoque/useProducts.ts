import ProductService from "@/app/services/ProductService";
import { useQuery } from "@tanstack/react-query";
import {
  ColumnFiltersState, SortingState,
  VisibilityState, getCoreRowModel,
  getFilteredRowModel, getPaginationRowModel,
  getSortedRowModel, useReactTable
} from "@tanstack/react-table";
import { useState } from "react";
import { columnsTableStock } from "./components/columnsTableStock";

export default function useProducts() {
  const { data, isPending } = useQuery({
    queryKey: ['products'],
    queryFn: ProductService.listAll,
  })

  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data: data ?? [],
    columns: columnsTableStock,
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
      columnVisibility,
      rowSelection,
    },
  });

  return {
    table,
    isPending,
  }
}
