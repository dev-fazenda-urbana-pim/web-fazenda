import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";

const data: Payment[] = [
  {
    id: "m5gr84i9",
    Código: "02.370.284/0001-33",
    Fornecedor: "AppleFarms",
    Itens: "Sementes A",
    Peso: 1.5,
    Status: "sem estoque",
  },
  {
    id: "3u1reuv4",
    Código: "02.370.284/0001-34",
    Fornecedor: "AquaPure Solutios",
    Itens: "Sementes B",
    Peso: 2.0,
    Status: "Alto",
  },
  {
    id: "derv1ws0",
    Código: "02.370.284/0001-35",
    Fornecedor: "AquaTech",
    Itens: "Sementes C",
    Peso: 1.2,
    Status: "Baixo",
  },
  {
    id: "5kma53ae",
    Código: "02.370.284/0001-36",
    Fornecedor: "Sementes VerdeVida",
    Itens: "Sementes D",
    Peso: 3.0,
    Status: "sem estoque",
  },
  {
    id: "bhqecj4p",
    Código: "02.370.284/0001-37",
    Fornecedor: "AquaLife",
    Itens: "Sementes E",
    Peso: 1.8,
    Status: "Alto",
  },
  {
    id: "k2d1g8n0",
    Código: "02.370.284/0001-38",
    Fornecedor: "Nature Seeds",
    Itens: "Sementes F",
    Peso: 1.6,
    Status: "Baixo",
  },
  {
    id: "p5w3t2z1",
    Código: "02.370.284/0001-39",
    Fornecedor: "Plant Power",
    Itens: "Sementes G",
    Peso: 2.5,
    Status: "sem estoque",
  },
  {
    id: "u9g2h8j3",
    Código: "02.370.284/0001-40",
    Fornecedor: "Greenhouse Co.",
    Itens: "Sementes H",
    Peso: 4.0,
    Status: "Alto",
  },
  {
    id: "y1u3r6t8",
    Código: "02.370.284/0001-41",
    Fornecedor: "Eco Seeds",
    Itens: "Sementes I",
    Peso: 2.3,
    Status: "Baixo",
  },
  {
    id: "t6v9h4k2",
    Código: "02.370.284/0001-42",
    Fornecedor: "Seed Bank",
    Itens: "Sementes J",
    Peso: 1.1,
    Status: "sem estoque",
  },
  {
    id: "a2e4v6q8",
    Código: "02.370.284/0001-43",
    Fornecedor: "Flora Seeds",
    Itens: "Sementes K",
    Peso: 2.4,
    Status: "Alto",
  },
  {
    id: "h5f2b8r7",
    Código: "02.370.284/0001-44",
    Fornecedor: "Nature's Best",
    Itens: "Sementes L",
    Peso: 3.2,
    Status: "Baixo",
  },
  {
    id: "j8r3w6m2",
    Código: "02.370.284/0001-45",
    Fornecedor: "Harvest Seeds",
    Itens: "Sementes M",
    Peso: 2.0,
    Status: "sem estoque",
  },
  {
    id: "z2h8g9n1",
    Código: "02.370.284/0001-46",
    Fornecedor: "Green Thumb",
    Itens: "Sementes N",
    Peso: 1.7,
    Status: "Alto",
  },
];

export type Payment = {
  id: string;
  Código: string;
  Fornecedor: string;
  Itens: string;
  Peso: number;
  Status: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "Código",
    header: "Código",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("Código")}</div>
    ),
  },
  {
    accessorKey: "Fornecedor",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Fornecedor
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("Fornecedor")}</div>
    ),
  },
  {
    accessorKey: "Itens",
    header: () => <div className="text-right">Itens</div>,
    cell: ({ row }) => (
      <div className="text-right font-medium">{row.getValue("Itens") as React.ReactNode}</div>
    ),
  },
  {
    accessorKey: "Peso",
    header: () => <div className="text-right">Peso (Kg)</div>,
    cell: ({ row }) => {
      const peso = row.getValue("Peso");
      return (
        <div className="text-right font-medium">{peso as React.ReactNode}</div>
      );
    },
  },
  {
    accessorKey: "Status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("Status");
      const statusStyles = {
        "sem estoque": "text-red-500",
        "Alto": "text-green-500",
        "Baixo": "text-gray-500",
      };
      return (
        <div className={statusStyles[status as keyof typeof statusStyles]}>
          {status as React.ReactNode}
        </div>
      );
    },
  },
];

export function TableStock() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

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
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full px-5">
      <header className="flex justify-center py-4">
        <div className="relative max-w-lg w-full">
          <Search className="absolute left-2 h-5 w-5 top-1/2 transform -translate-y-1/2" />
          <Input
            placeholder="Digite o nome do produto"
            className="pl-10" // Adiciona padding à esquerda para espaço da lupa
          />
        </div>
      </header>

      <h2 className="text-lg font-semibold mb-4">Lista de Produtos</h2> {/* Título da Tabela */}

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"} className="h-10">
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
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
      </div>

      <footer className="flex items-center justify-between space-x-2 py-4">
        <div className="space-x-2">
          <Button variant="outline" size="sm" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
            Anterior
          </Button>
          <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
            Próxima
          </Button>
        </div>

        <div className="text-sm text-muted-foreground">
          Resultados {table.getFilteredSelectedRowModel().rows.length} de {table.getFilteredRowModel().rows.length} páginas.
        </div>
      </footer>
    </div>
  );
}
