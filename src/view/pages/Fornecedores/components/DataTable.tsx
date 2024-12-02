import { SupplierResponse } from "@/app/types/Supplier";
import { formatCNPJ } from "@/app/utils/formatCnpj";
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

interface DataTableProps {
  suppliers: SupplierResponse[] | undefined;
}

export function DataTable({ suppliers }: DataTableProps) {
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
            <TableCell className="text-right">{supplier.status}</TableCell>
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
