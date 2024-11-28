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

const data = [
  { id: "1", codigoEntrega: "E001", codigoProduto: "P123", cliente: "João Silva", cepEntrega: "12345-678", veiculoEntrega: "Furgão", placaVeiculo: "ABC-1234", statusPedido: "Em andamento" },
  { id: "2", codigoEntrega: "E002", codigoProduto: "P456", cliente: "Maria Souza", cepEntrega: "23456-789", veiculoEntrega: "Caminhão", placaVeiculo: "DEF-5678", statusPedido: "Entregue" },
  { id: "3", codigoEntrega: "E003", codigoProduto: "P789", cliente: "Carlos Lima", cepEntrega: "34567-890", veiculoEntrega: "Van", placaVeiculo: "GHI-9012", statusPedido: "Cancelado" },
  { id: "4", codigoEntrega: "E004", codigoProduto: "P012", cliente: "Ana Oliveira", cepEntrega: "45678-901", veiculoEntrega: "Caminhonete", placaVeiculo: "JKL-3456", statusPedido: "Em andamento" },
  { id: "5", codigoEntrega: "E005", codigoProduto: "P345", cliente: "Bruno Costa", cepEntrega: "56789-012", veiculoEntrega: "Furgão", placaVeiculo: "MNO-7890", statusPedido: "Entregue" }
];

export const columns: ColumnDef<typeof data[0]>[] = [
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
  { accessorKey: "codigoEntrega", header: "Código de Entrega" },
  { accessorKey: "codigoProduto", header: "Código Produto" },
  { accessorKey: "cliente", header: "Cliente" },
  { accessorKey: "cepEntrega", header: "CEP Entrega" },
  { accessorKey: "veiculoEntrega", header: "Veículo de Entrega" },
  { accessorKey: "placaVeiculo", header: "Placa Veículo" },
  { accessorKey: "statusPedido", header: "Status Pedido" },
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
      <header className="flex flex-wrap items-center justify-between py-4 gap-4">
        <h2 className="text-lg font-bold">Entregas</h2>
        <div className="relative w-full sm:w-auto flex-1 sm:flex-none min-w-[300px] max-w-[400px]">
          <Input
            placeholder="Digitar nome do cliente"
            value={(table.getColumn("cliente")?.getFilterValue() as string) ?? ""}
            onChange={(event) => table.getColumn("cliente")?.setFilterValue(event.target.value)}
            className="pl-10"
          />
          <Search className="absolute left-3 top-2 text-muted-foreground" />
        </div>
        <ModalRegisterSupplier isOpen={isOpen} setIsOpen={setIsOpen} />
      </header>

      <div className="overflow-x-auto rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} className="text-sm">
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
                    <TableCell key={cell.id} className="text-sm whitespace-nowrap">
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

      <footer className="flex flex-wrap items-center justify-between space-x-2 py-4 gap-4">
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
