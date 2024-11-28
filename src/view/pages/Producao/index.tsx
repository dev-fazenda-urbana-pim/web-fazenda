import { Navbar } from "@/components/Navbar";
import { Bar, BarChart, Label, LabelList, XAxis, YAxis } from "recharts";

import Header from "@/components/Header";
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

const chartData = [
  { month: "Tomate", desktop: 50 },
  { month: "Alface", desktop: 25 },
  { month: "Agriao", desktop: 30 },
  { month: "Acelga", desktop: 42 },
  { month: "Chicoria", desktop: 12 },
];

const chartConfig = {
  desktop: {
    label: "Quantidade",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export default function Producao() {
  return (
    <>
      <Header />
      <div className="flex">
        <Navbar />
        <main className="flex-1 p-4">
          <Card>
            <CardHeader className="flex flex-row justify-between items-center">
              <CardTitle>Produção De Insumos</CardTitle>
              <CardDescription>Termo de contagem de estoque</CardDescription>
            </CardHeader>

            <CardContent className="">
              <h1 className="text-center text-lg font-bold mb-4">Sementes e mudas</h1>
              <ChartContainer config={chartConfig}>
                <BarChart
                  accessibilityLayer
                  data={chartData}
                  layout="vertical"
                  margin={{
                    left: -20,
                  }}
                >
                  <XAxis type="number" dataKey="desktop" hide />
                  <YAxis
                    dataKey="month"
                    type="category"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    width={100} // Ajuste a largura do eixo Y
                    label={<Label value="Produtos" angle={-90} position="insideLeft" />} // Adiciona o label
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Bar dataKey="desktop" fill="#4CAF50" radius={5}> {/* Cor ajustada */}
                    <LabelList dataKey="desktop" position="inside" fill="#FFFFF" /> {/* Adiciona os rótulos dentro das barras */}
                  </Bar>
                </BarChart>
              </ChartContainer>
            </CardContent>

            <CardFooter className="flex-col justify-center items-start gap-2 text-sm">
              <div className="leading-none text-muted-foreground border border-green-pistachio p-4 rounded">
                Fontes e insumos para o cultivo urbano sustentável
              </div>
            </CardFooter>
          </Card>
        </main>
      </div>
    </>
  );
}
