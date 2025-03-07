import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { CardContent, Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ChevronRight, LeafyGreen, Droplets, PowerCircle } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Droplets className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">BioCycle</span>
          </div>
          <nav className="flex items-center gap-4">
            <Link href="/login" className={buttonVariants({ variant: "outline" })}>
              Log in
            </Link>
            <Link href="/register" className={buttonVariants()}>
              Register
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <div className="flex items-center gap-2 rounded-full border bg-muted px-4 py-1.5 text-sm font-medium">
              <PowerCircle className="h-4 w-4" />
              <span>Sustainable Energy Solutions</span>
            </div>
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
              Transforming Waste into <span className="text-primary">Renewable Energy</span>
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              BioCycle connects farmers, subscribers, and facility managers in a sustainable ecosystem that turns
              organic waste into clean biogas energy.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/register" className={buttonVariants({ size: "lg" })}>
                Get Started
              </Link>
              <Link href="#learn-more" className={buttonVariants({ variant: "outline", size: "lg" })}>
                Learn More
              </Link>
            </div>
          </div>
        </section>
        <section id="learn-more" className="container space-y-6 bg-muted/40 py-8 md:py-12 lg:py-24">
          <div className="mx-auto max-w-[58rem] space-y-4">
            <h2 className="text-center text-3xl font-bold leading-[1.1] md:text-4xl">
              Connecting the Biogas Ecosystem
            </h2>
            <p className="text-center text-muted-foreground sm:text-lg">
              Our platform serves all stakeholders in the sustainable energy cycle.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <LeafyGreen className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>For Farmers</CardTitle>
                  <CardDescription>Contribute waste and earn rewards</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <ChevronRight className="mr-2 h-4 w-4 text-primary" /> Log waste contributions
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="mr-2 h-4 w-4 text-primary" /> View your environmental impact
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="mr-2 h-4 w-4 text-primary" /> Earn rewards and incentives
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <PowerCircle className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>For Subscribers</CardTitle>
                  <CardDescription>Access clean, sustainable energy</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <ChevronRight className="mr-2 h-4 w-4 text-primary" /> Manage your energy subscription
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="mr-2 h-4 w-4 text-primary" /> Make online payments
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="mr-2 h-4 w-4 text-primary" /> Monitor your biogas usage
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <Droplets className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>For Facility Managers</CardTitle>
                  <CardDescription>Optimize system performance</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <ChevronRight className="mr-2 h-4 w-4 text-primary" /> Monitor waste input and biogas output
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="mr-2 h-4 w-4 text-primary" /> Track system health and maintenance
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="mr-2 h-4 w-4 text-primary" /> Access real-time analytics and reporting
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <footer className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Droplets className="h-5 w-5 text-primary" />
            <p className="text-sm text-muted-foreground">© 2025 BioCycle. All rights reserved.</p>
          </div>
          <nav className="flex gap-4 text-sm text-muted-foreground">
            <Link href="#" className="hover:underline">
              Terms
            </Link>
            <Link href="#" className="hover:underline">
              Privacy
            </Link>
            <Link href="#" className="hover:underline">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

