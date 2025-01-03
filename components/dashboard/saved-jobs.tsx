"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function SavedJobs() {
  const savedJobs = [
    {
      company: "Analytics Pro",
      position: "Data Scientist",
      location: "Hyderabad",
      salary: "₹15-22 LPA",
    },
    {
      company: "Tech Solutions",
      position: "Frontend Developer",
      location: "Bangalore",
      salary: "₹18-25 LPA",
    },
    {
      company: "Innovation Labs",
      position: "Product Designer",
      location: "Mumbai",
      salary: "₹12-18 LPA",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Saved Jobs</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {savedJobs.map((job, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b last:border-0 pb-4 last:pb-0"
            >
              <div>
                <p className="font-medium">{job.position}</p>
                <p className="text-sm text-muted-foreground">
                  {job.company} • {job.location}
                </p>
                <p className="text-sm text-muted-foreground">{job.salary}</p>
              </div>
              <Button size="sm">Apply Now</Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}