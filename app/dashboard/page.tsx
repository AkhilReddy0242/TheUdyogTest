"use client"

import { useAuth } from "@/lib/auth"
import { useRouter } from "next/navigation"
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardMetrics } from "@/components/dashboard/metrics"
import { RecentApplications } from "@/components/dashboard/recent-applications"
import { SavedJobs } from "@/components/dashboard/saved-jobs"
import { UpcomingInterviews } from "@/components/dashboard/upcoming-interviews"

export default function DashboardPage() {
  const router = useRouter()
  const { user } = useAuth()

  if (!user) {
    router.push("/login")
    return null
  }

  return (
    <div className="container py-8">
      <DashboardHeader user={user} />
      <div className="mt-8">
        <DashboardMetrics />
      </div>
      <div className="grid gap-8 mt-8 md:grid-cols-2">
        <RecentApplications />
        <SavedJobs />
      </div>
      <div className="mt-8">
        <UpcomingInterviews />
      </div>
    </div>
  )
}