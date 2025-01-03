"use client"

import { Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function UpcomingInterviews() {
  const interviews = [
    {
      company: "Tech Innovators Ltd",
      position: "Senior Software Engineer",
      date: "2024-03-20",
      time: "10:00 AM",
      type: "Technical Round",
    },
    {
      company: "Digital Solutions Inc",
      position: "Product Manager",
      date: "2024-03-22",
      time: "2:30 PM",
      type: "HR Round",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Interviews</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {interviews.map((interview, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 border-b last:border-0 pb-4 last:pb-0"
            >
              <Calendar className="h-8 w-8 text-muted-foreground" />
              <div>
                <p className="font-medium">{interview.position}</p>
                <p className="text-sm text-muted-foreground">
                  {interview.company} • {interview.type}
                </p>
                <p className="text-sm text-muted-foreground">
                  {new Date(interview.date).toLocaleDateString()} at {interview.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}