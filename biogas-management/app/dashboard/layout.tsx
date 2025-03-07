"use client"

import type React from "react"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { Bell, Gauge, LeafyGreen, LogOut, Menu, PowerCircle, Settings, User, Droplets } from "lucide-react"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface SidebarOption {
  title: string
  icon: React.ElementType
  href: string
  role: string
}

const sidebarOptions: SidebarOption[] = [
  {
    title: "Dashboard",
    icon: Gauge,
    href: "/dashboard/farmer",
    role: "farmer",
  },
  {
    title: "Waste Logs",
    icon: LeafyGreen,
    href: "/dashboard/farmer/waste-logs",
    role: "farmer",
  },
  {
    title: "Rewards",
    icon: PowerCircle,
    href: "/dashboard/farmer/rewards",
    role: "farmer",
  },
  {
    title: "Dashboard",
    icon: Gauge,
    href: "/dashboard/subscriber",
    role: "subscriber",
  },
  {
    title: "Subscription",
    icon: PowerCircle,
    href: "/dashboard/subscriber/subscription",
    role: "subscriber",
  },
  {
    title: "Usage",
    icon: Droplets,
    href: "/dashboard/subscriber/usage",
    role: "subscriber",
  },
  {
    title: "Dashboard",
    icon: Gauge,
    href: "/dashboard/manager",
    role: "manager",
  },
  {
    title: "System Health",
    icon: Droplets,
    href: "/dashboard/manager/health",
    role: "manager",
  },
  {
    title: "Analytics",
    icon: PowerCircle,
    href: "/dashboard/manager/analytics",
    role: "manager",
  },
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const [userRole, setUserRole] = useState<string>("farmer")
  const [userName, setUserName] = useState<string>("John Smith")

  // Determine user role from pathname
  useEffect(() => {
    if (pathname.includes("/farmer")) {
      setUserRole("farmer")
      setUserName("John Smith")
    } else if (pathname.includes("/subscriber")) {
      setUserRole("subscriber")
      setUserName("Sarah Johnson")
    } else if (pathname.includes("/manager")) {
      setUserRole("manager")
      setUserName("Michael Brown")
    }
  }, [pathname])

  const filteredOptions = sidebarOptions.filter((option) => option.role === userRole)

  const handleLogout = () => {
    router.push("/login")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2 md:gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-56 p-0">
                <nav className="flex flex-col gap-4 p-4">
                  <div className="flex items-center gap-2 border-b pb-4">
                    <Droplets className="h-5 w-5 text-primary" />
                    <span className="text-lg font-bold">BioCycle</span>
                  </div>
                  {filteredOptions.map((option) => (
                    <Link
                      key={option.href}
                      href={option.href}
                      className={cn(
                        "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium",
                        pathname === option.href
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground",
                      )}
                    >
                      <option.icon className="h-4 w-4" />
                      {option.title}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            <Link href="/" className="flex items-center gap-2">
              <Droplets className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">BioCycle</span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-user.jpg" alt={userName} />
                    <AvatarFallback>
                      {userName
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{userName}</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {userRole.charAt(0).toUpperCase() + userRole.slice(1)}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="hidden w-56 flex-col border-r md:flex">
          <nav className="flex flex-col gap-4 p-4">
            {filteredOptions.map((option) => (
              <Link
                key={option.href}
                href={option.href}
                className={cn(
                  "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium",
                  pathname === option.href
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                <option.icon className="h-4 w-4" />
                {option.title}
              </Link>
            ))}
          </nav>
        </aside>
        <main className="flex-1 overflow-auto p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}

