"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

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
  { browser: "AI", visitors: 275, fill: "var(--color-AI)" },
  { browser: "Mern", visitors: 200, fill: "var(--color-Mern)" },
  { browser: "Android", visitors: 187, fill: "var(--color-Android)" },
  { browser: "Blockchain", visitors: 173, fill: "var(--color-Blockchain)" },
  { browser: "AGI", visitors: 90, fill: "var(--color-AGI)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  AI: {
    label: "AI",
    color: "hsl(var(--chart-1))",
  },
  Mern: {
    label: "Mern",
    color: "hsl(var(--chart-2))",
  },
  Android: {
    label: "Android",
    color: "hsl(var(--chart-3))",
  },
  Blockchain: {
    label: "Blockchain",
    color: "hsl(var(--chart-4))",
  },
  AGI: {
    label: "AGI",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function Component() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Coruse Wise Sales</CardTitle>
        <CardDescription>January - December 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 0,
            }}
          >
            <YAxis
              dataKey="browser"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <XAxis dataKey="visitors" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="visitors" layout="vertical" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 12 months
        </div>
      </CardFooter>
    </Card>
  );
}
