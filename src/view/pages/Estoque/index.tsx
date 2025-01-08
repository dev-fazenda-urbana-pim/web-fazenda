import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { TableSkeleton } from "../../../components/TableSkeleton";
import { ModalRegisterStock } from "./components/ModalRegisterStock";
import { TableStock } from "./components/TableStock";
import useProducts from "./useProducts";

export default function Estoque() {
  const { table, isPending } = useProducts();

  return (
    <div className="w-full px-5">
      <header className="flex flex-wrap items-center justify-between py-4 gap-4">
        <h2 className="text-lg font-semibold">Lista de Produtos</h2> {/* Título da Tabela */}
        <div className="relative max-w-lg w-full">
          <Search className="absolute left-2 h-5 w-5 top-1/2 transform -translate-y-1/2" />
          <Input
            placeholder="Digite o nome do produto"
            className="pl-10" // Adiciona padding à esquerda para espaço da lupa
          />
        </div>

        <ModalRegisterStock />
      </header>

      {/* Tabela de Produtos */}
      {isPending ? <TableSkeleton /> : <TableStock table={table} />}
    </div>
  );
}
