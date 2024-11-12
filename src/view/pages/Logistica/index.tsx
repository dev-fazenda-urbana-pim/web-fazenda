import Header from "@/components/Header";
import { TableSuppliers } from "@/view/pages/Logistica/components log/TableSuppliers";
import { Navbar } from "@/components/Navbar";

function InfoBox({ icon, label, value, color }) {
  return (
    <div className="flex items-center border rounded-lg shadow-sm p-4 gap-4" style={{ borderColor: color }}>
      <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: color }}>
        {icon}
      </div>
      <div>
        <div className="text-sm text-gray-500">{label}</div>
        <div className="text-lg font-semibold">{value}</div>
      </div>
    </div>
  );
}

export default function Logistica() {
  return (
    <div className="w-full h-screen flex flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Navbar />
        <div className="flex-1 overflow-auto p-4">
          {/* Adicionando as caixas de informações financeiras */}
          <div className="flex justify-around mb-6">
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
              value="4  "
              color="#FFD700"
            />
          </div>
          {/* Tabela de fornecedores */}
          <TableSuppliers />
        </div>
      </div>
    </div>
  );
}
