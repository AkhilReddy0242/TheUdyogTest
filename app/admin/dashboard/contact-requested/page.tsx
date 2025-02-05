"use client"

import { useEffect, useState } from "react"
import { format } from "date-fns"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

interface ContactRequest {
  _id: string
  name: string
  email: string
  subject: string
  message: string
  status: "new" | "inProgress" | "resolved"
  createdAt: string
}

export default function ContactRequestsPage() {
  const { toast } = useToast()
  const [requests, setRequests] = useState<ContactRequest[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchRequests() {
      try {
        const response = await fetch("/api/contact", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
          },
        })

        if (!response.ok) {
          throw new Error("Failed to fetch contact requests")
        }

        const data = await response.json()
        setRequests(data.contacts)
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to fetch contact requests",
        })
      } finally {
        setIsLoading(false)
      }
    }

    fetchRequests()
  }, [toast])

  const getStatusBadge = (status: string) => {
    const variants = {
      new: "default",
      inProgress: "warning",
      resolved: "success",
    } as const

    return <Badge>{status}</Badge>
  }

  if (isLoading) {
    return <div className="container py-8">Loading...</div>
  }

  return (
    <div className="container py-8">
      <h1 className="text-2xl font-bold mb-8">Contact Requests</h1>
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead>Message</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {requests.map((request) => (
              <TableRow key={request._id}>
                <TableCell>
                  {format(new Date(request.createdAt), "MMM d, yyyy")}
                </TableCell>
                <TableCell>{request.name}</TableCell>
                <TableCell>{request.email}</TableCell>
                <TableCell>{request.subject}</TableCell>
                <TableCell className="max-w-xs truncate">
                  {request.message}
                </TableCell>
                <TableCell>{getStatusBadge(request.status)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  )
}