"use client"

import { useState, useEffect } from "react"
import {
  AlertCircle,
  BarChart4,
  Droplets,
  FileText,
  GaugeCircle,
  LifeBuoy,
  RefreshCw,
  Thermometer,
  Users,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import Chart from "@/components/data-chart/line/2"
import Chart2 from "@/components/data-chart/bar/1"
import { ChartWrapper } from "@/components/data-chart/wrapper"

// Mock data for the dashboard
const mockData = {
  systemHealth: 92,
  wasteInput: 1250,
  biogasOutput: 850,
  activeUsers: 125,
  recentAlerts: [
    { date: "Mar 05, 10:23 AM", message: "Temperature above normal range (Tank 2)", severity: "warning" },
    { date: "Mar 03, 2:15 PM", message: "Pressure drop detected (Pipe System B)", severity: "warning" },
    { date: "Feb 28, 8:30 AM", message: "Maintenance required (Filter System)", severity: "info" },
    { date: "Feb 25, 11:47 AM", message: "Emergency shutdown triggered", severity: "critical" },
  ],
  tankLevels: [
    { name: "Tank 1", level: 85 },
    { name: "Tank 2", level: 72 },
    { name: "Tank 3", level: 94 },
  ],
}

export default function ManagerDashboard() {
  const [health, setHealth] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setHealth(92), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Facility Manager Dashboard</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <FileText className="mr-2 h-4 w-4" />
            Generate Report
          </Button>
          <Button>
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh Data
          </Button>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">System Health</CardTitle>
            <GaugeCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockData.systemHealth}%</div>
            <Progress value={health} className="mt-2" />
            <p className="mt-2 text-xs text-muted-foreground">Overall system performance</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Waste Input</CardTitle>
            <Droplets className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockData.wasteInput} kg</div>
            <p className="text-xs text-muted-foreground">+5.2% from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Biogas Output</CardTitle>
            <LifeBuoy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockData.biogasOutput} m³</div>
            <p className="text-xs text-muted-foreground">+3.8% from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockData.activeUsers}</div>
            <p className="text-xs text-muted-foreground">
              {mockData.activeUsers - 5} farmers, {30} subscribers
            </p>
          </CardContent>
        </Card>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="production">Production</TabsTrigger>
          <TabsTrigger value="alerts">System Alerts</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>System Performance</CardTitle>
              <CardDescription>Waste processing and biogas production metrics</CardDescription>
            </CardHeader>
            <CardContent className="h-80 w-full">
              <ChartWrapper content={Chart} title="System performance metrics" />
            </CardContent>
          </Card>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Tank Levels</CardTitle>
                <CardDescription>Current digester tank capacity levels</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockData.tankLevels.map((tank, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span>{tank.name}</span>
                        <span className="font-medium">{tank.level}%</span>
                      </div>
                      <Progress value={tank.level} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>System Metrics</CardTitle>
                <CardDescription>Key operational parameters</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b pb-2">
                    <div className="flex items-center gap-2">
                      <Thermometer className="h-5 w-5 text-amber-500" />
                      <span>Temperature</span>
                    </div>
                    <span className="font-medium">38.5°C</span>
                  </div>
                  <div className="flex items-center justify-between border-b pb-2">
                    <div className="flex items-center gap-2">
                      <GaugeCircle className="h-5 w-5 text-blue-500" />
                      <span>Pressure</span>
                    </div>
                    <span className="font-medium">1.2 bar</span>
                  </div>
                  <div className="flex items-center justify-between border-b pb-2">
                    <div className="flex items-center gap-2">
                      <Droplets className="h-5 w-5 text-green-500" />
                      <span>pH Level</span>
                    </div>
                    <span className="font-medium">7.2</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <BarChart4 className="h-5 w-5 text-purple-500" />
                      <span>Methane Content</span>
                    </div>
                    <span className="font-medium">65%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="production">
          <Card>
            <CardHeader>
              <CardTitle>Production Analytics</CardTitle>
              <CardDescription>Detailed breakdown of waste processing and biogas production</CardDescription>
            </CardHeader>
            <CardContent className="h-96 w-full">
              <ChartWrapper content={Chart2} title="Waste to biogas conversion" />
              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="rounded-lg border bg-card p-4">
                  <div className="text-sm font-medium text-muted-foreground">Conversion Efficiency</div>
                  <div className="mt-1 text-2xl font-bold">72.4%</div>
                  <div className="text-xs text-muted-foreground">+2.1% from last month</div>
                </div>
                <div className="rounded-lg border bg-card p-4">
                  <div className="text-sm font-medium text-muted-foreground">Waste Processing Rate</div>
                  <div className="mt-1 text-2xl font-bold">185 kg/day</div>
                  <div className="text-xs text-muted-foreground">+5.3% from last month</div>
                </div>
                <div className="rounded-lg border bg-card p-4">
                  <div className="text-sm font-medium text-muted-foreground">Biogas Production Rate</div>
                  <div className="mt-1 text-2xl font-bold">125 m³/day</div>
                  <div className="text-xs text-muted-foreground">+3.8% from last month</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="alerts">
          <Card>
            <CardHeader>
              <CardTitle>System Alerts</CardTitle>
              <CardDescription>Recent alerts and system notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockData.recentAlerts.map((alert, index) => (
                  <div
                    key={index}
                    className={`flex items-start justify-between rounded-lg border p-4 ${
                      alert.severity === "critical"
                        ? "border-red-500 bg-red-50 text-red-800"
                        : alert.severity === "warning"
                          ? "border-amber-500 bg-amber-50 text-amber-800"
                          : "border-blue-500 bg-blue-50 text-blue-800"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <AlertCircle className="h-5 w-5" />
                      <div>
                        <p className="font-medium">{alert.message}</p>
                        <p className="text-sm opacity-80">{alert.date}</p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`${
                        alert.severity === "critical"
                          ? "hover:bg-red-100"
                          : alert.severity === "warning"
                            ? "hover:bg-amber-100"
                            : "hover:bg-blue-100"
                      }`}
                    >
                      Resolve
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

