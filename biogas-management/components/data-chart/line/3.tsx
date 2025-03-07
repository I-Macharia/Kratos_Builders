"use client"

import { Line, LineChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { ChartTooltip } from "@/components/ui/chart"

// Mock data for biogas usage
const data = [
  { day: "1", usage: 5.2 },
  { day: "2", usage: 4.8 },
  { day: "3", usage: 5.5 },
  { day: "4", usage: 6.2 },
  { day: "5", usage: 5.7 },
  { day: "6", usage: 4.9 },
  { day: "7", usage: 5.1 },
  { day: "8", usage: 5.3 },
  { day: "9", usage: 5.8 },
  { day: "10", usage: 6.0 },
  { day: "11", usage: 5.5 },
  { day: "12", usage: 5.2 },
  { day: "13", usage: 4.9 },
  { day: "14", usage: 5.0 },
  { day: "15", usage: 5.5 },
  { day: "16", usage: 5.7 },
  { day: "17", usage: 5.9 },
  { day: "18", usage: 6.3 },
  { day: "19", usage: 5.8 },
  { day: "20", usage: 5.6 },
  { day: "21", usage: 5.2 },
  { day: "22", usage: 5.0 },
  { day: "23", usage: 4.8 },
  { day: "24", usage: 5.1 },
  { day: "25", usage: 5.4 },
  { day: "26", usage: 5.6 },
  { day: "27", usage: 5.8 },
  { day: "28", usage: 6.1 },
  { day: "29", usage: 5.9 },
  { day: "30", usage: 5.5 },
]

export default function BiogasUsageChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <defs>
          <linearGradient id="colorUsage" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8} />
            <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "hsl(var(--muted-foreground))" }}
          label={{ value: "Day of Month", position: "insideBottom", offset: -10 }}
        />
        <YAxis axisLine={false} tickLine={false} tick={{ fill: "hsl(var(--muted-foreground))" }} unit=" m³" />
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <ChartTooltip>
                  <div className="flex flex-col gap-2">
                    <div className="font-medium">Day {payload[0].payload.day}</div>
                    <div className="text-lg font-bold">{payload[0].value} m³</div>
                  </div>
                </ChartTooltip>
              )
            }
            return null
          }}
        />
        <Line
          type="monotone"
          dataKey="usage"
          stroke="hsl(var(--primary))"
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 6 }}
          fill="url(#colorUsage)"
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

