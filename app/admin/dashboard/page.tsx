"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Switch } from "@/components/ui/switch"
import { useToast } from "@/hooks/use-toast"
import { Card } from "@/components/ui/card"

interface User {
  id: string
  name: string
  email: string
  role: string
  isPremium: boolean
}

export default function AdminDashboardPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [users, setUsers] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchUsers()
  }, [])

  async function fetchUsers() {
    try {
      const response = await fetch("/api/admin/users", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
        },
      })

      if (!response.ok) {
        throw new Error("Failed to fetch users")
      }

      const data = await response.json()
      setUsers(data.users)
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to fetch users",
      })
    } finally {
      setIsLoading(false)
    }
  }

  async function togglePremium(userId: string, isPremium: boolean) {
    try {
      const response = await fetch(`/api/admin/users/${userId}/premium`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
        },
        body: JSON.stringify({ isPremium: isPremium }),
      })

      if (!response.ok) {
        throw new Error("Failed to update premium status")
      }

      setUsers(users.map(user => 
        user.id === userId ? { ...user, isPremium } : user
      ))

      toast({
        title: "Success",
        description: `Premium status updated for ${users.find(u => u.id === userId)?.email}`,
      })
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to update premium status",
      })
    }
  }

  if (isLoading) {
    return <div className="container py-8">Loading...</div>
  }

  return (
    <div className="container py-8">
      <Card className="p-6">
        <h1 className="text-2xl font-bold mb-6">User Management</h1>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Premium Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell className="capitalize">{user.role}</TableCell>
                <TableCell>
                  <Switch
                    checked={user.isPremium}
                    onCheckedChange={(checked) => togglePremium(user.id, checked)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  )
}