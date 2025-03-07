"use client"

import { useState, useEffect } from "react"
import { Leaf, Recycle, Truck, TrendingUp, Wind } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import Chart from "@/components/data-chart/bar/2"
import Chart2 from "@/components/data-chart/line/1"
import { ChartWrapper } from "@/components/data-chart/wrapper"

// Mock data for the dashboard
const mockData = {
  totalWasteContributed: 1250,
  totalImpact: 85,
  rewardsEarned: 320,
  recentActivity: [
    { date: "Mar 05", type: "Waste Deposit", amount: "25kg", status: "Processed" },
    { date: "Feb 28", type: "Waste Deposit", amount: "30kg", status: "Processed" },
    { date: "Feb 22", type: "Rewards Claimed", amount: "$15", status: "Completed" },
    { date: "Feb 15", type: "Waste Deposit", amount: "28kg", status: "Processed" },
  ],
  monthlySubmissions: [
    { month: "Jan", amount: 85 },
    { month: "Feb", amount: 100 },
    { month: "Mar", amount: 120 },
  ],
}

export default function FarmerDashboard() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(85), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Farmer Dashboard</h1>
        <Button>Log New Waste</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Waste Contributed</CardTitle>
            <Recycle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockData.totalWasteContributed} kg</div>
            <p className="text-xs text-muted-foreground">+12.5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Environmental Impact</CardTitle>
            <Leaf className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockData.totalImpact}%</div>
            <Progress value={progress} className="mt-2" />
            <p className="mt-2 text-xs text-muted-foreground">Carbon reduction progress</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Rewards Earned</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${mockData.rewardsEarned}</div>
            <p className="text-xs text-muted-foreground">Redeem rewards for local services</p>
          </CardContent>
        </Card>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="activity">Recent Activity</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Waste Contributions</CardTitle>
              <CardDescription>Your monthly waste contributions for the past 3 months</CardDescription>
            </CardHeader>
            <CardContent className="h-80 w-full">
              <ChartWrapper content={Chart} title="Monthly waste contributions" />
            </CardContent>
          </Card>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Next Pickup</CardTitle>
                <CardDescription>Schedule for your next waste collection</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <Truck className="h-10 w-10 text-primary" />
                  <div>
                    <p className="text-lg font-medium">Tomorrow, 10:00 AM</p>
                    <p className="text-sm text-muted-foreground">Estimated pickup window: 9:30 AM - 11:30 AM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Impact Statistics</CardTitle>
                <CardDescription>Environmental benefits of your contributions</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Wind className="h-5 w-5 text-primary" />
                    <span>125 kWh of clean energy generated</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Leaf className="h-5 w-5 text-primary" />
                    <span>85 kg CO2 emissions prevented</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Recycle className="h-5 w-5 text-primary" />
                    <span>750 liters of water conserved</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="activity">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your recent waste deposits and reward claims</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockData.recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between border-b pb-2 last:border-0">
                    <div>
                      <p className="font-medium">{activity.type}</p>
                      <p className="text-sm text-muted-foreground">{activity.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{activity.amount}</p>
                      <p className="text-sm text-muted-foreground">{activity.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>Environmental Impact Metrics</CardTitle>
              <CardDescription>Detailed analysis of your contributions' environmental impact</CardDescription>
            </CardHeader>
            <CardContent className="h-96 w-full">
              <ChartWrapper content={Chart2} title="Environmental impact over time" />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

