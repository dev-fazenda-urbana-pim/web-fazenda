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
  useReactTable
} from "@tanstack/react-table";
import { MoreHorizontal, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
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
import { ModalRegisterSupplier } from "./ModalRegisterSupplier";

const data: Supplier[] = [
  { id: "1", nome: "João Silva", telefone: "(11) 98877-1234", dataVencimento: "15/08/2024", valor: "R$ 1,200.00" },
  { id: "2", nome: "Maria Souza", telefone: "(21) 95566-7890", dataVencimento: "22/08/2024", valor: "R$ 3,500.00" },
  { id: "3", nome: "Carlos Lima", telefone: "(31) 99888-4321", dataVencimento: "23/08/2024", valor: "R$ 750.00" },
  { id: "4", nome: "Ana Oliveira", telefone: "(41) 97777-6655", dataVencimento: "23/09/2024", valor: "R$ 2,300.00" },
  { id: "5", nome: "Bruno Costa", telefone: "(51) 91111-2233", dataVencimento: "12/10/2024", valor: "R$ 1,050.00" },
];


export type Supplier = {
  id: string;
  nome: string;
  telefone: string;
  dataVencimento: string;
  valor: string;
};

export const columns: ColumnDef<Supplier>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
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
  { accessorKey: "nome", header: "Nome" },
  { accessorKey: "telefone", header: "Telefone" },
  { accessorKey: "dataVencimento", header: "Data de Vencimento" },
  { accessorKey: "valor", header: "Valor R$" },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const supplier = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Ações</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(supplier.id)}>Editar</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Ativar/Desativar</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export function TableSuppliers() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const [isOpen, setIsOpen] = useState(false);

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
    state: { sorting, columnFilters, columnVisibility, rowSelection },
  });

  return (
    <div className="w-full px-5">
      <header className="flex items-center justify-between py-4">
        <h2 className="text-xl font-bold">Futuros Lançamentos 🚀</h2>
        <div className="relative max-w-lg w-full">
          <Input
            placeholder="Digitar nome do devedor"
            value={(table.getColumn("nome")?.getFilterValue() as string) ?? ""}
            onChange={(event) => table.getColumn("nome")?.setFilterValue(event.target.value)}
            className="pl-10"
          />
          <Search className="absolute left-3 top-2 text-muted-foreground" />
        </div>
        <ModalRegisterSupplier isOpen={isOpen} setIsOpen={setIsOpen} />
      </header>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
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
