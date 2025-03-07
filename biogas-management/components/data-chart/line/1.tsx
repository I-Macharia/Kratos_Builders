"use client"

import { Line, LineChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { ChartTooltip } from "@/components/ui/chart"

// Mock data for environmental impact over time
const data = [
  { month: "Jan", co2: 65, water: 400 },
  { month: "Feb", co2: 75, water: 500 },
  { month: "Mar", co2: 85, water: 750 },
  { month: "Apr", co2: 90, water: 800 },
  { month: "May", co2: 100, water: 900 },
  { month: "Jun", co2: 110, water: 1000 },
]

export default function EnvironmentalImpactChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
        <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "hsl(var(--muted-foreground))" }} />
        <YAxis
          yAxisId="left"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "hsl(var(--muted-foreground))" }}
          unit=" kg"
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "hsl(var(--muted-foreground))" }}
          unit=" L"
        />
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <ChartTooltip>
                  <div className="flex flex-col gap-2">
                    <div className="font-medium">{payload[0].payload.month}</div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <div>CO2 Reduced: {payload[0].value} kg</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-blue-500" />
                      <div>Water Saved: {payload[1].value} L</div>
                    </div>
                  </div>
                </ChartTooltip>
              )
            }
            return null
          }}
        />
        <Line
          yAxisId="left"
          type="monotone"
          dataKey="co2"
          name="CO2 Reduction"
          stroke="hsl(var(--primary))"
          strokeWidth={2}
          dot={{ r: 4, fill: "hsl(var(--primary))" }}
          activeDot={{ r: 6 }}
        />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="water"
          name="Water Conservation"
          stroke="hsl(210, 100%, 50%)"
          strokeWidth={2}
          dot={{ r: 4, fill: "hsl(210, 100%, 50%)" }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

