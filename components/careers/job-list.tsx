"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Job } from "@/lib/jobs"

interface JobListProps {
  jobs: Job[]
  isLoading: boolean
}

export function JobList({ jobs, isLoading }: JobListProps) {
  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <Card key={i}>
            <CardHeader>
              <Skeleton className="h-6 w-2/3" />
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-4 w-1/3" />
                <Skeleton className="h-4 w-1/4" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  if (jobs.length === 0) {
    return (
      <Card>
        <CardContent className="py-8 text-center">
          <p className="text-muted-foreground">No jobs found. Try adjusting your search criteria.</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <Card key={job.id}>
          <CardHeader>
            <CardTitle>{job.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2">
              <p className="text-muted-foreground">
                <strong>Company:</strong> {job.company}
              </p>
              <p className="text-muted-foreground">
                <strong>Location:</strong> {job.location}
              </p>
              <p className="text-muted-foreground">
                <strong>Experience:</strong> {job.experience}
              </p>
              <p className="text-muted-foreground">
                <strong>Salary:</strong> {job.salary}
              </p>
              <p className="text-muted-foreground">
                <strong>Posted:</strong> {new Date(job.postedAt).toLocaleDateString()}
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button>Apply Now</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}