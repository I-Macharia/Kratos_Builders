"use client"

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { ChartTooltip } from "@/components/ui/chart"

// Mock data for waste contributions
const data = [
  { month: "Jan", amount: 85 },
  { month: "Feb", amount: 100 },
  { month: "Mar", amount: 120 },
]

export default function WasteContributionsChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <defs>
          <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8} />
            <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.4} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
        <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "hsl(var(--muted-foreground))" }} />
        <YAxis axisLine={false} tickLine={false} tick={{ fill: "hsl(var(--muted-foreground))" }} unit=" kg" />
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <ChartTooltip>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <div className="font-medium">{payload[0].payload.month}</div>
                    </div>
                    <div className="text-lg font-bold">{payload[0].value} kg</div>
                  </div>
                </ChartTooltip>
              )
            }
            return null
          }}
        />
        <Bar dataKey="amount" fill="url(#colorAmount)" radius={[4, 4, 0, 0]} maxBarSize={60} />
      </BarChart>
    </ResponsiveContainer>
  )
}

