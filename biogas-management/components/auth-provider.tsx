"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

type UserRole = "farmer" | "subscriber" | "manager" | null

interface User {
  id: string
  name: string
  email: string
  role: UserRole
}

interface AuthContextType {
  user: User | null
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for session or token here
    const checkAuth = async () => {
      // In a real app, you'd verify the token with the server
      const token = localStorage.getItem("authToken")

      if (token) {
        // Mock user data based on persisted auth
        setUser({
          id: "1",
          name: "John Smith",
          email: "john@example.com",
          role: "farmer",
        })
      }

      setIsLoading(false)
    }

    checkAuth()
  }, [])

  const signIn = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      // In a real app, you'd call an API to authenticate
      // For demo, we'll set role based on email
      let role: UserRole = null
      let name = ""

      if (email.includes("farmer")) {
        role = "farmer"
        name = "John Smith"
      } else if (email.includes("subscriber")) {
        role = "subscriber"
        name = "Sarah Johnson"
      } else if (email.includes("manager")) {
        role = "manager"
        name = "Michael Brown"
      } else {
        role = "farmer" // Default role
        name = "John Smith"
      }

      // Mock successful auth
      const user = {
        id: "1",
        name,
        email,
        role,
      }

      setUser(user)
      localStorage.setItem("authToken", "mock-token-for-demo")
    } catch (error) {
      console.error("Authentication failed", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const signOut = () => {
    setUser(null)
    localStorage.removeItem("authToken")
  }

  return <AuthContext.Provider value={{ user, signIn, signOut, isLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

