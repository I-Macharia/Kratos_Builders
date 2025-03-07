"use client"

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"
import { ChartTooltip } from "@/components/ui/chart"

// Mock data for usage by application
const data = [
  { name: "Cooking", value: 45 },
  { name: "Heating", value: 30 },
  { name: "Hot Water", value: 20 },
  { name: "Other", value: 5 },
]

const COLORS = ["hsl(var(--primary))", "hsl(210, 100%, 50%)", "hsl(45, 100%, 50%)", "hsl(0, 0%, 70%)"]

export default function UsageByApplicationChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={100}
          paddingAngle={2}
          dataKey="value"
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          labelLine={false}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <ChartTooltip>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <div
                        className="h-3 w-3 rounded-full"
                        style={{ backgroundColor: COLORS[payload[0].payload.index % COLORS.length] }}
                      />
                      <div className="font-medium">{payload[0].name}</div>
                    </div>
                    <div className="text-lg font-bold">{payload[0].value}%</div>
                  </div>
                </ChartTooltip>
              )
            }
            return null
          }}
        />
      </PieChart>
    </ResponsiveContainer>
  )
}

