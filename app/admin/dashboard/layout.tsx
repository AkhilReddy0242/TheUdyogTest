"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { AdminNav } from "@/components/auth/admin-nav"
import Link from "next/link"

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const [admin, setAdmin] = useState<{ name: string; email: string } | null>(null)

  useEffect(() => {
    const token = localStorage.getItem("adminToken")
    if (!token) {
      router.push("/admin/login")
      return
    }

    // Decode JWT token to get admin info
    try {
      const payload = JSON.parse(atob(token.split(".")[1]))
      setAdmin({
        name: payload.name || "Admin",
        email: payload.email
      })
    } catch (error) {
      console.error("Error decoding token:", error)
      localStorage.removeItem("adminToken")
      router.push("/admin/login")
    }
  }, [router])

  if (!admin) {
    return null
  }

  return (
    <div>
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between">
          <h2 className="text-lg font-semibold">Admin Dashboard</h2>
          <Link
                key='/admin/dashboard/courses'
                href='/admin/dashboard/courses'
                className="transition-colors hover:text-foreground/80"
              >
                Add a new courses
              </Link>
              <Link
                key='/admin/dashboard/contact-requested'
                href='/admin/dashboard/contact-requested'
                className="transition-colors hover:text-foreground/80"
              >
                Contact-Requested
              </Link>
          <AdminNav admin={admin} />
        </div>
      </header>
      <main>{children}</main>
    </div>
  )
}