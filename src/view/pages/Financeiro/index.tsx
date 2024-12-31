import { InfoBox } from "@/components/InfoBox";
import { DashboardVendas } from "./components/DashboardVendas";

export default function Financeiro() {
  return (
    <div className="w-full h-screen flex flex-col">

      <div className="flex flex-1 overflow-hidden">

        <div className="flex-1 overflow-auto p-4">
          <div className="flex flex-wrap justify-between mb-6 gap-4">
            <InfoBox
              icon="🐷"
              label="Saldo total"
              value={11986.62}
              color="#2196F3"
            />
            <InfoBox
              icon="+💵"
              label="Total a receber (Mensal)"
              value={5546.65}
              color="#4CAF50"
            />
            <InfoBox
              icon="-💵"
              label="Total a pagar (Mensal)"
              value={2452.53}
              color="#F44336"
            />
          </div>
          <DashboardVendas />
        </div>
      </div>
    </div>
  );
}
