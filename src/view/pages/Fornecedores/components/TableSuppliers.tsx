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
  { id: "1", razaoSocial: "Tech Innovate Ltda", cnpj: "12.345.678/0001-90", nomeFantasia: "TechInn", endereco: "Av. do Progresso, 200", uf: "SP", status: "Ativo", contato: "(11) 4000-1234" },
  { id: "2", razaoSocial: "Bio Solutions Brasil", cnpj: "23.456.789/0001-01", nomeFantasia: "BioSol", endereco: "Rua das Palmeiras, 45", uf: "RJ", status: "Inativo", contato: "(21) 3000-5678" },
  { id: "3", razaoSocial: "AquaTech Industrial", cnpj: "34.567.890/0001-12", nomeFantasia: "AquaInd", endereco: "Estrada do Mar, 400", uf: "SC", status: "Ativo", contato: "(47) 8000-4321" },
  { id: "4", razaoSocial: "Eco Vida Sustentável", cnpj: "45.678.901/0001-23", nomeFantasia: "EcoVida", endereco: "Alameda Verde, 305", uf: "MG", status: "Ativo", contato: "(31) 9000-8765" },
  { id: "5", razaoSocial: "Solar Agropecuária Ltda", cnpj: "56.789.012/0001-34", nomeFantasia: "SolAgro", endereco: "Rua da Colheita, 202", uf: "RS", status: "Inativo", contato: "(51) 7700-8899" },
  { id: "6", razaoSocial: "Nutri Flora Comércio", cnpj: "67.890.123/0001-45", nomeFantasia: "N-Flora", endereco: "Av. das Plantas, 67", uf: "PR", status: "Ativo", contato: "(41) 6600-7788" },
  { id: "7", razaoSocial: "Verde Campo Orgânicos", cnpj: "78.901.234/0001-56", nomeFantasia: "V-Campo", endereco: "Praça das Flores, 99", uf: "BA", status: "Ativo", contato: "(71) 5500-1122" },
  { id: "8", razaoSocial: "AgroPuro Ltda", cnpj: "89.012.345/0001-67", nomeFantasia: "AgroPuro", endereco: "Estrada do Milho, 55", uf: "GO", status: "Ativo", contato: "(62) 4900-3344" },
  { id: "9", razaoSocial: "PureTech Soluções", cnpj: "90.123.456/0001-78", nomeFantasia: "PureTech", endereco: "Rua do Futuro, 20", uf: "PE", status: "Inativo", contato: "(81) 4400-5566" },
  { id: "10", razaoSocial: "Green Solutions Ltda", cnpj: "01.234.567/0001-89", nomeFantasia: "GreenSol", endereco: "Av. Sustentável, 100", uf: "ES", status: "Ativo", contato: "(27) 3300-4455" },
  { id: "11", razaoSocial: "Terra Verde Distribuidora", cnpj: "12.345.678/0001-90", nomeFantasia: "TerraVerde", endereco: "Rua das Águas, 303", uf: "MS", status: "Inativo", contato: "(67) 5500-9900" },
  { id: "12", razaoSocial: "Agro Bio Ltda", cnpj: "23.456.789/0001-01", nomeFantasia: "AgroBio", endereco: "Rua da Agricultura, 47", uf: "SP", status: "Ativo", contato: "(11) 6100-6789" },
  { id: "13", razaoSocial: "Vita Verde Comércio", cnpj: "34.567.890/0001-12", nomeFantasia: "VitaVerde", endereco: "Av. das Árvores, 13", uf: "MT", status: "Ativo", contato: "(65) 7100-3344" },
  { id: "14", razaoSocial: "Farm Bio Produtos", cnpj: "45.678.901/0001-23", nomeFantasia: "FarmBio", endereco: "Rod. Campo Verde, 305", uf: "PR", status: "Inativo", contato: "(41) 9200-4455" }
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
        <h2 className="text-xl font-bold">Lista de Fornecedores</h2>
        <div className="relative max-w-lg w-full">
          <Input
            placeholder="Digitar nome do fornecedor"
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
