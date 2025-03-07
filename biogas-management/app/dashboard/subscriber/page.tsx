"use client"

import { useState, useEffect } from "react"
import { Activity, Calendar, CreditCard, DollarSign, Download, Flame, HelpCircle, LifeBuoy } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import Chart from "@/components/data-chart/line/3"
import Chart2 from "@/components/data-chart/pie/1"
import { ChartWrapper } from "@/components/data-chart/wrapper"

// Mock data for the dashboard
const mockData = {
  currentPlan: "Standard",
  nextBilling: "April 15, 2025",
  monthlyUsage: 78,
  billingAmount: 85,
  recentPayments: [
    { date: "Mar 15", amount: "$85.00", status: "Paid" },
    { date: "Feb 15", amount: "$85.00", status: "Paid" },
    { date: "Jan 15", amount: "$80.00", status: "Paid" },
  ],
  usageStats: [
    { month: "Jan", usage: 70 },
    { month: "Feb", usage: 75 },
    { month: "Mar", usage: 78 },
  ],
}

export default function SubscriberDashboard() {
  const [usage, setUsage] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setUsage(78), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Subscriber Dashboard</h1>
        <Button>
          <Download className="mr-2 h-4 w-4" />
          Download Statement
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Plan</CardTitle>
            <LifeBuoy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockData.currentPlan}</div>
            <p className="text-xs text-muted-foreground">Next billing: {mockData.nextBilling}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Usage</CardTitle>
            <Flame className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockData.monthlyUsage}%</div>
            <Progress value={usage} className="mt-2" />
            <p className="mt-2 text-xs text-muted-foreground">Of your monthly allocation</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Bill</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${mockData.billingAmount}</div>
            <p className="text-xs text-muted-foreground">Due on {mockData.nextBilling}</p>
          </CardContent>
        </Card>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Biogas Usage</CardTitle>
              <CardDescription>Your biogas usage for the past 3 months</CardDescription>
            </CardHeader>
            <CardContent className="h-80 w-full">
              <ChartWrapper content={Chart} title="Monthly biogas usage" />
            </CardContent>
          </Card>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Payment Information</CardTitle>
                <CardDescription>Manage your payment methods</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <CreditCard className="h-10 w-10 text-primary" />
                  <div>
                    <p className="text-lg font-medium">Visa ending in 4242</p>
                    <p className="text-sm text-muted-foreground">Expires 12/2028</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">
                  Update Payment Method
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
                <CardDescription>Contact our support team</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="h-5 w-5 text-primary" />
                    <span>FAQ and Knowledge Base</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span>Schedule a service visit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-primary" />
                    <span>Report an issue</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button size="sm">Contact Support</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="usage">
          <Card>
            <CardHeader>
              <CardTitle>Detailed Usage Metrics</CardTitle>
              <CardDescription>Breakdown of your biogas consumption</CardDescription>
            </CardHeader>
            <CardContent className="h-96 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <ChartWrapper content={Chart2} title="Usage by application" />
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Usage by Time of Day</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Morning (6AM - 12PM)</span>
                      <span className="font-medium">25%</span>
                    </div>
                    <Progress value={25} />
                    <div className="flex justify-between">
                      <span>Afternoon (12PM - 6PM)</span>
                      <span className="font-medium">15%</span>
                    </div>
                    <Progress value={15} />
                    <div className="flex justify-between">
                      <span>Evening (6PM - 12AM)</span>
                      <span className="font-medium">45%</span>
                    </div>
                    <Progress value={45} />
                    <div className="flex justify-between">
                      <span>Night (12AM - 6AM)</span>
                      <span className="font-medium">15%</span>
                    </div>
                    <Progress value={15} />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Energy Efficiency Tips</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• Use energy-efficient appliances to optimize biogas usage</li>
                    <li>• Schedule high-consumption activities during off-peak hours</li>
                    <li>• Regular maintenance of equipment ensures optimal performance</li>
                    <li>• Consider upgrading to a smart meter for real-time monitoring</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="billing">
          <Card>
            <CardHeader>
              <CardTitle>Billing History</CardTitle>
              <CardDescription>View your payment history and download invoices</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockData.recentPayments.map((payment, index) => (
                  <div key={index} className="flex items-center justify-between border-b pb-2 last:border-0">
                    <div>
                      <p className="font-medium">Monthly Subscription</p>
                      <p className="text-sm text-muted-foreground">{payment.date}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium">{payment.amount}</p>
                      <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                        {payment.status}
                      </span>
                      <Button variant="ghost" size="icon">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">View All Transactions</Button>
              <Button>Make a Payment</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

