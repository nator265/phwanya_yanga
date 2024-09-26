"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

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
	ChartLegend,
	ChartLegendContent,
} from "@/components/ui/chart";

export const description = "A donut chart with text";

const chartData = [
	{ status: "delivered", orders: 275, fill: "var(--color-delivered)" },
	{ status: "processing", orders: 200, fill: "var(--color-processing)" },
	{ status: "hold", orders: 287, fill: "var(--color-hold)" },
	{ status: "returned", orders: 173, fill: "var(--color-returned)" },
	{ status: "cancelled", orders: 190, fill: "var(--color-cancelled)" },
];

const chartConfig = {
	orders: {
		label: "orders",
	},
	delivered: {
		label: "Delivered",
		color: "hsl(var(--chart-1))",
	},
	processing: {
		label: "Processing",
		color: "hsl(var(--chart-2))",
	},
	hold: {
		label: "Hold",
		color: "hsl(var(--chart-3))",
	},
	returned: {
		label: "Returned",
		color: "hsl(var(--chart-4))",
	},
	cancelled: {
		label: "Cancelled",
		color: "hsl(var(--chart-5))",
	},
} satisfies ChartConfig;

export function OrderStats() {
	const totalorders = React.useMemo(() => {
		return chartData.reduce((acc, curr) => acc + curr.orders, 0);
	}, []);

	return (
		<Card className='flex flex-col'>
			<CardHeader className='items-center pb-0'>
				<CardTitle>Order Stats</CardTitle>
				<CardDescription>January - June 2024</CardDescription>
			</CardHeader>
			<CardContent className='flex-1 pb-0'>
				<ChartContainer
					config={chartConfig}
					className='mx-auto aspect-square max-h-[250px]'>
					<PieChart>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent hideLabel />}
						/>
						<Pie
							data={chartData}
							dataKey='orders'
							nameKey='status'
							innerRadius={60}
							strokeWidth={5}>
							<Label
								content={({ viewBox }) => {
									if (viewBox && "cx" in viewBox && "cy" in viewBox) {
										return (
											<text
												x={viewBox.cx}
												y={viewBox.cy}
												textAnchor='middle'
												dominantBaseline='middle'>
												<tspan
													x={viewBox.cx}
													y={viewBox.cy}
													className='fill-foreground text-3xl font-bold'>
													{totalorders.toLocaleString()}
												</tspan>
												<tspan
													x={viewBox.cx}
													y={(viewBox.cy || 0) + 24}
													className='fill-muted-foreground'>
													Orders
												</tspan>
											</text>
										);
									}
								}}
							/>
						</Pie>
						<ChartLegend
							content={<ChartLegendContent nameKey='status' />}
							className='-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center'
						/>
					</PieChart>
				</ChartContainer>
			</CardContent>
			<CardFooter className='flex-col gap-2 text-sm'>
				<div className='flex items-center gap-2 font-medium leading-none'>
					Trending up by 5.2% this month <TrendingUp className='h-4 w-4' />
				</div>
				<div className='leading-none text-muted-foreground'>
					Showing total orders for the last 6 months
				</div>
			</CardFooter>
		</Card>
	);
}
