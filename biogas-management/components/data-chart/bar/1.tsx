"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { ChartTooltip } from "@/components/ui/chart"

// Mock data for waste to biogas conversion
const data = [
  { name: "Week 1", waste: 180, biogas: 120 },
  { name: "Week 2", waste: 200, biogas: 140 },
  { name: "Week 3", waste: 190, biogas: 135 },
  { name: "Week 4", waste: 210, biogas: 150 },
]

export default function WasteToBiogasChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "hsl(var(--muted-foreground))" }} />
        <YAxis axisLine={false} tickLine={false} tick={{ fill: "hsl(var(--muted-foreground))" }} />
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <ChartTooltip>
                  <div className="flex flex-col gap-2">
                    <div className="font-medium">{payload[0].payload.name}</div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <div>Waste: {payload[0].value} kg</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-blue-500" />
                      <div>Biogas: {payload[1].value} m³</div>
                    </div>
                  </div>
                </ChartTooltip>
              )
            }
            return null
          }}
        />
        <Legend />
        <Bar dataKey="waste" name="Waste Input (kg)" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} maxBarSize={40} />
        <Bar
          dataKey="biogas"
          name="Biogas Output (m³)"
          fill="hsl(210, 100%, 50%)"
          radius={[4, 4, 0, 0]}
          maxBarSize={40}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

