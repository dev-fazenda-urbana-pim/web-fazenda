import { Skeleton } from "./ui/skeleton";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";

export function TableSkeleton() {
  return (
    <Table>
      <TableCaption>Carregando fornecedores...</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Razão Social</TableHead>
          <TableHead>CNPJ</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">UF</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[...Array(5)].map((_, index) => (
          <TableRow key={index}>
            <TableCell><Skeleton className="w-[150px] h-[20px] rounded-full" /></TableCell>
            <TableCell><Skeleton className="w-[150px] h-[20px] rounded-full" /></TableCell>
            <TableCell><Skeleton className="w-[100px] h-[20px] rounded-full" /></TableCell>
            <TableCell className="text-right"><Skeleton className="w-[50px] h-[20px] rounded-full" /></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
