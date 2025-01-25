"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ParallaxHeader } from "@/components/careers/parallax-header"
import { JobSearch } from "@/components/careers/job-search"
import { JobList } from "@/components/careers/job-list"
import { useToast } from "@/hooks/use-toast"
import { JobSearchParams, searchJobs, Job } from "@/lib/jobs"

export default function PremiumCareersPage() {
  const router = useRouter()
  const { toast } = useToast()
  const temp: Job[] = []
  const [jobs, setJobs] = useState(temp)
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = async (params: JobSearchParams) => {
    try {
      setIsLoading(true)
      const results: Job[] = await searchJobs(params)
      setJobs(results)
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to fetch jobs. Please try again.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen">
      <ParallaxHeader
        title="Premium Job Search"
        description="Access exclusive job opportunities tailored to your skills"
        imageUrl="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940"
        imageAlt="Premium careers"
      />

      <div className="container py-16">
        <JobSearch onSearch={handleSearch} isLoading={isLoading} />
        <JobList jobs={jobs} isLoading={isLoading} />
      </div>
    </div>
  )
}