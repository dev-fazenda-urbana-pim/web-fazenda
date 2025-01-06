import { SupplierResponse } from "@/app/types/Supplier";
import { formatCNPJ } from "@/app/utils/formatCnpj";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent,
  DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoreHorizontal } from "lucide-react";
import useUpdateStatusSupplier from "../useUpdateStatusSupplier";

interface DataTableProps {
  suppliers: SupplierResponse[] | undefined;
}

export function DataTable({ suppliers }: DataTableProps) {
  const { updateStatus } = useUpdateStatusSupplier();

  if (!suppliers || suppliers.length === 0) {
    return null;
  }

  return (
    <Table>
      <TableCaption>Uma lista dos seus fornecedores</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Razão Social</TableHead>
          <TableHead>CNPJ</TableHead>
          <TableHead>UF</TableHead>
          <TableHead className="text-right">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {suppliers.map((supplier) => (
          <TableRow key={supplier.id}>
            <TableCell className="font-medium">{supplier.razao_social}</TableCell>
            <TableCell>{formatCNPJ(supplier.cnpj)}</TableCell>
            <TableCell>{supplier.uf}</TableCell>
            <TableCell className="text-right">
              {supplier.status === "ATIVO" && (
                <Badge variant="outline" className="bg-green-dark text-white">
                  {supplier.status}
                </Badge>
              )}

              {supplier.status === "INATIVO" && <Badge variant="destructive">{supplier.status}</Badge>}
            </TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Ações</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem
                    checked={supplier.status === "ATIVO"}
                    disabled={supplier.status === "ATIVO"}
                    onCheckedChange={() => updateStatus(supplier, "ATIVO")}
                  >
                    Ativar
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={supplier.status === "INATIVO"}
                    disabled={supplier.status === "INATIVO"}
                    onCheckedChange={() => updateStatus(supplier, "INATIVO")}
                  >
                    Inativar
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>{suppliers.length} resultados</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
