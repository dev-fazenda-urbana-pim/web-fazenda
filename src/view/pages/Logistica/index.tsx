import { InfoBox } from "@/components/InfoBox";
import { TableLogistic } from "@/view/pages/Logistica/components/TableLogistic";

export default function Logistica() {
  return (
    <div className="w-full h-screen flex flex-col">

      <div className="flex flex-1 overflow-hidden">

        <div className="flex-1 overflow-auto p-4">
          {/* Adicionando as caixas de informações financeiras */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <InfoBox
              icon="📦"
              label="Quantidade de entrega"
              value="7"
              color="#2196F3"
            />
            <InfoBox
              icon="✅"
              label="Pedidos entregues (Hoje)"
              value="1"
              color="#4CAF50"
            />
            <InfoBox
              icon="🚚"
              label="Pedidos a serem entregues (Hoje)"
              value="4"
              color="#FFD700"
            />
          </div>

          <TableLogistic />
        </div>
      </div>
    </div>
  );
}
