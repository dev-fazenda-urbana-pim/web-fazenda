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
import { ArrowUpDown, MoreHorizontal, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuContent
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
  { id: "1", razaoSocial: "AppleFarms", cnpj: "02.370.284/0001-33", nomeFantasia: "Apple", endereco: "Av. das Nações, 500", uf: "SP", status: "Ativo", contato: "(11) 5555-1234" },
  { id: "2", razaoSocial: "AquaPure Solutions", cnpj: "02.370.284/0001-33", nomeFantasia: "AquaPure", endereco: "Rua Verde, 35", uf: "RJ", status: "Inativo", contato: "(21) 5555-5678" },
  { id: "3", razaoSocial: "AquaTech", cnpj: "02.370.284/0001-33", nomeFantasia: "AquaT", endereco: "Rua do Porto, 44", uf: "MG", status: "Ativo", contato: "(31) 5555-8765" },
  { id: "4", razaoSocial: "Sementes VerdeVida", cnpj: "02.370.284/0001-33", nomeFantasia: "VerdeVida", endereco: "Rua Esperança, 120", uf: "SP", status: "Ativo", contato: "(11) 5555-6543" },
  { id: "5", razaoSocial: "AquaLife", cnpj: "02.370.284/0001-33", nomeFantasia: "AquaLife", endereco: "Av. Central, 140", uf: "RS", status: "Ativo", contato: "(51) 5555-4321" },
  { id: "6", razaoSocial: "Green Farm", cnpj: "11.222.333/0001-44", nomeFantasia: "G-Farm", endereco: "Av. das Flores, 76", uf: "SP", status: "Ativo", contato: "(11) 9876-5432" },
  { id: "7", razaoSocial: "Sol Agro", cnpj: "33.222.111/0001-55", nomeFantasia: "Sol Agro", endereco: "Rua da Colheita, 202", uf: "PR", status: "Inativo", contato: "(41) 5566-7788" },
  { id: "8", razaoSocial: "Fresh Veggies", cnpj: "44.555.666/0001-66", nomeFantasia: "F-Veggies", endereco: "Av. Plantação, 300", uf: "BA", status: "Ativo", contato: "(71) 5555-1010" },
  { id: "9", razaoSocial: "Organic Roots", cnpj: "55.444.333/0001-77", nomeFantasia: "O-Roots", endereco: "Rua das Árvores, 55", uf: "RS", status: "Ativo", contato: "(51) 3344-5566" },
  { id: "10", razaoSocial: "AgroVale", cnpj: "66.555.444/0001-88", nomeFantasia: "Vale Agro", endereco: "Av. Rio Branco, 150", uf: "RJ", status: "Inativo", contato: "(21) 3232-4545" },
  { id: "11", razaoSocial: "Eco Planta", cnpj: "77.666.555/0001-99", nomeFantasia: "EcoPlanta", endereco: "Rua Flor do Campo, 99", uf: "GO", status: "Ativo", contato: "(62) 5555-9292" },
  { id: "12", razaoSocial: "Nature Pure", cnpj: "88.777.666/0001-00", nomeFantasia: "NatPure", endereco: "Av. Verde, 400", uf: "SC", status: "Ativo", contato: "(47) 5555-8080" },
  { id: "13", razaoSocial: "Horta Viva", cnpj: "99.888.777/0001-11", nomeFantasia: "HViva", endereco: "Rua da Safra, 44", uf: "MG", status: "Inativo", contato: "(31) 9999-2233" },
  { id: "14", razaoSocial: "Plant Vida", cnpj: "00.111.222/0001-22", nomeFantasia: "PlantV", endereco: "Av. Vida, 330", uf: "SP", status: "Ativo", contato: "(11) 9988-7766" },
];

export type Supplier = {
  id: string;
  razaoSocial: string;
  cnpj: string;
  nomeFantasia: string;
  endereco: string;
  uf: string;
  status: string;
  contato: string;
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
  { accessorKey: "razaoSocial", header: "Razão Social" },
  { accessorKey: "cnpj", header: "CNPJ" },
  { accessorKey: "nomeFantasia", header: "Nome Fantasia" },
  { accessorKey: "endereco", header: "Endereço" },
  { accessorKey: "uf", header: "UF" },
  { accessorKey: "status", header: "Status" },
  { accessorKey: "contato", header: "Contato" },
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
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(supplier.id)}>Copy Supplier ID</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View details</DropdownMenuItem>
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
        <h2 className="text-xl font-bold">Lista de Clientes</h2>
        <div className="relative max-w-lg w-full">
          <Input
            placeholder="Digitar nome do cliente"
            value={(table.getColumn("razaoSocial")?.getFilterValue() as string) ?? ""}
            onChange={(event) => table.getColumn("razaoSocial")?.setFilterValue(event.target.value)}
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
            Previous
          </Button>
          <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
            Next
          </Button>
        </div>

        <div className="text-sm text-muted-foreground">
          Resultados {table.getFilteredSelectedRowModel().rows.length} de {table.getFilteredRowModel().rows.length} páginas.
        </div>
      </footer>
    </div>
  );
}
