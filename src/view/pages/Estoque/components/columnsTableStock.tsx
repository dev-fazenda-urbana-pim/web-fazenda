import { Product } from "@/app/types/Product";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { formatPrice } from "../../../../app/utils/formatPrice";

export const columnsTableStock: ColumnDef<Product>[] = [
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
    accessorKey: "imagem",
    header: "Imagem",
    cell: ({ row }) => (
      <div className="capitalize">
        <img
          src={row.getValue("imagem")}
          alt={row.getValue("nome")}
          className="w-10 h-10 rounded-md"
        />
      </div>
    ),
  },
  {
    accessorKey: "nome",
    header: "Nome",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("nome")}</div>
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
    accessorKey: "peso",
    header: () => <div className="text-right">Peso (Kg)</div>,
    cell: ({ row }) => {
      return (
        <div className="text-right font-medium">{row.getValue("peso")}</div>
      );
    },
  },
  {
    accessorKey: "preco",
    header: () => <div className="text-right">Preço</div>,
    cell: ({ row }) => {
      return (
        <div className="text-right font-medium">{formatPrice(row.getValue("preco"))}</div>
      );
    },
  },
  {
    accessorKey: "qtd",
    header: () => <div className="text-right">Quantidade</div>,
    cell: ({ row }) => {
      return (
        <div className="text-right font-medium">{row.getValue("qtd")}</div>
      );
    },
  },
];
