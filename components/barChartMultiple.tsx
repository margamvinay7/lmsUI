"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

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
  { month: "January", live: 186, doubt: 80 },
  { month: "February", live: 305, doubt: 200 },
  { month: "March", live: 237, doubt: 120 },
  { month: "April", live: 73, doubt: 190 },
  { month: "May", live: 209, doubt: 130 },
  { month: "June", live: 214, doubt: 140 },
  { month: "July", live: 220, doubt: 140 },
  { month: "August", live: 225, doubt: 140 },
  { month: "September", live: 234, doubt: 140 },
  { month: "October", live: 224, doubt: 140 },
  { month: "November", live: 223, doubt: 140 },
  { month: "December", live: 212, doubt: 140 },
];

const chartConfig = {
  live: {
    label: "live",
    color: "hsl(var(--chart-1))",
  },
  doubt: {
    label: "doubt",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function Component() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Live and Recorded Participation</CardTitle>
        <CardDescription>January - December 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="live" fill="var(--color-live)" radius={4} />
            <Bar dataKey="doubt" fill="var(--color-doubt)" radius={4} />
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
