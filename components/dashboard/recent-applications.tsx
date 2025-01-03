"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function RecentApplications() {
  const applications = [
    {
      company: "Tech Innovators Ltd",
      position: "Senior Software Engineer",
      status: "Under Review",
      date: "2024-03-15",
    },
    {
      company: "Digital Solutions Inc",
      position: "Product Manager",
      status: "Interview Scheduled",
      date: "2024-03-12",
    },
    {
      company: "Creative Tech",
      position: "UX Designer",
      status: "Applied",
      date: "2024-03-10",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Applications</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {applications.map((application, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b last:border-0 pb-4 last:pb-0"
            >
              <div>
                <p className="font-medium">{application.position}</p>
                <p className="text-sm text-muted-foreground">
                  {application.company}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">{application.status}</p>
                <p className="text-sm text-muted-foreground">
                  {new Date(application.date).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}