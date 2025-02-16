"use client";

import * as React from "react";
import { Bar, BarChart as BChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  views: {
    label: "Page Views",
  },
} satisfies ChartConfig;

interface PopulationBarChartProps {
  data: { name: string; population: number }[];
}

export function PopulationBarChart({ data }: PopulationBarChartProps) {
  const total = React.useMemo(
    () => data.reduce((acc, curr) => acc + Number(curr.population), 0),
    [data]
  );

  console.log(data);

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Bar Chart - Population</CardTitle>
          <CardDescription>Showing total population by region</CardDescription>
        </div>
        <div className="flex">
          <div className="flex content-center flex-wrap flex-col justify-center px-6 py-5 sm:py-6">
            <span className="text-xs text-muted-foreground">
              Total Population
            </span>
            <span className="text-lg font-bold leading-none sm:text-3xl">
              {total.toLocaleString()}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BChart
            accessibilityLayer
            data={data}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="name"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[170px]"
                  nameKey="population"
                />
              }
            />
            <Bar dataKey={"population"} fill={`hsl(var(--chart-3))`} />
          </BChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
