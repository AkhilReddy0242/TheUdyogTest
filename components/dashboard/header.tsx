"use client"

import { User } from "@/lib/auth"
import { Card } from "@/components/ui/card"

interface DashboardHeaderProps {
  user: User
}

export function DashboardHeader({ user }: DashboardHeaderProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Welcome back, {user.name}!</h1>
          <p className="text-muted-foreground mt-1">
            Here's what's happening with your job search
          </p>
        </div>
      </div>
    </Card>
  )
}