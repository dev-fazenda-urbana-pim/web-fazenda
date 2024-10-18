import { TrendingUp } from "lucide-react";
import { Bar, BarChart, XAxis, YAxis, Label } from "recharts";
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
import Header from "@/components/Header";

const chartData = [
  { month: "Tomate", desktop: 25 },
  { month: "Alface", desktop: 25 },
  { month: "Agriao", desktop: 20 },
  { month: "Acelga", desktop: 15 },
  { month: "Chicoria", desktop: 15 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export default function Producao() {
  return (
    <>
      <Header />
    <>
    <Navbar />
      <Card>
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle>Produção De Insumos</CardTitle>
          <CardDescription>termo de contagem de estoque</CardDescription>
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
                label={<Label value="Produtos" angle={-90} position="insideLeft" />} // Adiciona o label
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar dataKey="desktop" fill="var(--color-desktop)" radius={5} />
            </BarChart>
          </ChartContainer>
        </CardContent>

        <CardFooter className="flex-col justify-center items-start gap-2 text-sm">
          <div className="leading-none text-muted-foreground border border-green-pistachio p-4 rounded">
            Fontes e insumos para o cultivo urbano sustentável
          </div>
        </CardFooter>
      </Card>
      </>
    </>
  );
}
