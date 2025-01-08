import { Input } from "@/components/ui/input";

import { TableSkeleton } from "@/components/TableSkeleton";
import { Search } from "lucide-react";
import { DataTable } from "./components/DataTable";
import { ModalRegisterSupplier } from "./components/ModalRegisterSupplier";
import useSuppliers from "./useSuppliers";

export default function Fornecedores() {
  const { suppliers, isPending } = useSuppliers()

  return (
    <div className="w-full px-5">
      <header className="flex flex-wrap items-center justify-between py-4 gap-4">
        <h2 className="text-lg font-bold">Lista de Fornecedores</h2>
        <div className="relative w-full sm:w-auto flex-1 sm:flex-none min-w-[300px] max-w-[400px]">
          <Input
            placeholder="Digitar nome do fornecedor"
            className="pl-10"
          />
          <Search className="absolute left-3 top-2 text-muted-foreground" />
        </div>

        <ModalRegisterSupplier />
      </header>

      {isPending ? <TableSkeleton /> : <DataTable suppliers={suppliers} />}
    </div>
  );
}
