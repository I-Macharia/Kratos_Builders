"use client"

import { Line, LineChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { ChartTooltip } from "@/components/ui/chart"

// Mock data for system performance metrics
const data = [
  { day: "Mon", waste: 180, biogas: 120, efficiency: 67 },
  { day: "Tue", waste: 200, biogas: 140, efficiency: 70 },
  { day: "Wed", waste: 190, biogas: 135, efficiency: 71 },
  { day: "Thu", waste: 210, biogas: 150, efficiency: 71 },
  { day: "Fri", waste: 220, biogas: 160, efficiency: 73 },
  { day: "Sat", waste: 200, biogas: 145, efficiency: 72 },
  { day: "Sun", waste: 180, biogas: 130, efficiency: 72 },
]

export default function SystemPerformanceChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
        <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: "hsl(var(--muted-foreground))" }} />
        <YAxis yAxisId="left" axisLine={false} tickLine={false} tick={{ fill: "hsl(var(--muted-foreground))" }} />
        <YAxis
          yAxisId="right"
          orientation="right"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "hsl(var(--muted-foreground))" }}
          unit="%"
        />
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <ChartTooltip>
                  <div className="flex flex-col gap-2">
                    <div className="font-medium">{payload[0].payload.day}</div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <div>Waste: {payload[0].value} kg</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-blue-500" />
                      <div>Biogas: {payload[1].value} m³</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-amber-500" />
                      <div>Efficiency: {payload[2].value}%</div>
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
          dataKey="waste"
          name="Waste Input"
          stroke="hsl(var(--primary))"
          strokeWidth={2}
          dot={{ r: 4, fill: "hsl(var(--primary))" }}
        />
        <Line
          yAxisId="left"
          type="monotone"
          dataKey="biogas"
          name="Biogas Output"
          stroke="hsl(210, 100%, 50%)"
          strokeWidth={2}
          dot={{ r: 4, fill: "hsl(210, 100%, 50%)" }}
        />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="efficiency"
          name="Efficiency"
          stroke="hsl(45, 100%, 50%)"
          strokeWidth={2}
          dot={{ r: 4, fill: "hsl(45, 100%, 50%)" }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

