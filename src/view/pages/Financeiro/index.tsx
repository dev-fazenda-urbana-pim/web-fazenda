import Header from "@/components/Header";
import { Navbar } from "@/components/Navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { TableSuppliers } from "@/view/pages/Financeiro/components/TableSuppliers";
import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";


interface InfoBoxProps {
  icon: string;
  label: string;
  value: string;
  color: string;
}

function InfoBox({ icon, label, value, color }: InfoBoxProps) {
  return (
    <div className="flex items-center border rounded-lg shadow-sm p-4 gap-4 w-full sm:w-[30%]" style={{ borderColor: color }}>
      <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: color }}>
        {icon}
      </div>
      <div>
        <div className="text-sm text-gray-500">{label}</div>
        <div className="text-lg font-semibold">{value}</div>
      </div>
    </div>
  );
}

export default function Financeiro() {
  return (
    <div className="w-full h-screen flex flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Navbar />
        <div className="flex-1 overflow-auto p-4">
          <div className="flex flex-wrap justify-between mb-6 gap-4">
            <InfoBox
              icon="🐷"
              label="Saldo total"
              value="R$ 11.986,62"
              color="#2196F3"
            />
            <InfoBox
              icon="+💵"
              label="Total a receber (Mensal)"
              value="R$ 5.546,65"
              color="#4CAF50"
            />
            <InfoBox
              icon="-💵"
              label="Total a pagar (Mensal)"
              value="R$ 2.452,53"
              color="#F44336"
            />
          </div>
          <Component />
        </div>
      </div>
    </div>
  );
}

export const description = "An area chart with gradient fill";

const chartData = [
  { month: "Janeiro", desktop: 6422.91, mobile: 2567.56 },
  { month: "Fevereiro", desktop: 5055.22, mobile: 3009.86 },
  { month: "Marco", desktop: 3998.54, mobile: 3095.32 },
  { month: "Abril", desktop: 7323.21, mobile: 4752.43 },
  { month: "Mai", desktop: 7432.24, mobile: 3652.53 },
  { month: "June", desktop: 5546.65, mobile: 2452.53 },
];

const chartConfig = {
  desktop: {
    label: "Entradas",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Saídas",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function Component() {
  return (
    <>
      <Card className="w-full h-full border border-gray-300">
        <CardHeader>
          <CardTitle>Entradas e Saídas</CardTitle>
          <CardDescription>Vendas do mês</CardDescription>
        </CardHeader>
        <CardContent className="w-full h-full p-0">
          <ChartContainer config={chartConfig} className="w-full h-full">
            <AreaChart
              width={window.innerWidth / 2} // Reduz a largura pela metade
              height={window.innerHeight / 4} // Reduz a altura pela metade
              data={chartData}
              margin={{
                top: 10,
                left: 9,
                right: 9,
                bottom: 75,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <defs>
                <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="#4CAF50"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="#4CAF50"
                    stopOpacity={0.1}
                  />
                </linearGradient>
                <linearGradient id="fillMobile" x1="0" y1="0" x2="3" y2="1">
                  <stop
                    offset="5%"
                    stopColor="#FF5722"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="#FF5722"
                    stopOpacity={0.1}
                  />
                </linearGradient>
              </defs>
              <Area
                dataKey="mobile"
                type="natural"
                fill="url(#fillMobile)"
                fillOpacity={0.4}
                stroke="#FF5722"
                stackId="a"
              />
              <Area
                dataKey="desktop"
                type="natural"
                fill="url(#fillDesktop)"
                fillOpacity={0.4}
                stroke="#4CAF50"
                stackId="a"
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
        <CardFooter>
          <div className="flex w-full items-start gap-2 text-sm">
            <div className="grid gap-2">
              <div className="flex items-center gap-2 font-medium leading-none">
                Vendas aumentaram 7.5% nesse semestre <TrendingUp className="h-4 w-4" />
              </div>
              <div className="flex items-center gap-2 leading-none text-muted-foreground">
                Janeiro - Julho 2024
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
      <div style={{ marginTop: '10rem' }}>
        <hr />
      </div>

      <div style={{ marginTop: '5rem' }}>
        <TableSuppliers />
      </div>
    </>
  );
}
