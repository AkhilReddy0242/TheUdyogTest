"use client"

import Image from "next/image"
import { SectionHeader } from "@/components/section-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ParallaxHeader } from "@/components/parallax-header"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"

const jobs = [
  {
    title: "Senior Software Engineer",
    company: "Tech Innovators Ltd",
    location: "Mumbai, India",
    type: "Full-time",
    experience: "5+ years",
    salary: "₹18-25 LPA",
  },
  {
    title: "Product Manager",
    company: "Digital Solutions Inc",
    location: "Bangalore, India",
    type: "Full-time",
    experience: "4+ years",
    salary: "₹20-30 LPA",
  },
  {
    title: "UX Designer",
    company: "Creative Tech",
    location: "Delhi, India",
    type: "Full-time",
    experience: "3+ years",
    salary: "₹12-18 LPA",
  },
  {
    title: "Data Scientist",
    company: "Analytics Pro",
    location: "Hyderabad, India",
    type: "Full-time",
    experience: "2+ years",
    salary: "₹15-22 LPA",
  },
]

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      <ParallaxHeader
        title="Career Opportunities"
        description="Find your next career move with The Udyog"
        imageUrl="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop"
        imageAlt="Career opportunities"
      />

      {/* Job Search Section */}
      <section className="py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <Select>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mumbai">Mumbai</SelectItem>
                <SelectItem value="delhi">Delhi</SelectItem>
                <SelectItem value="bangalore">Bangalore</SelectItem>
                <SelectItem value="hyderabad">Hyderabad</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Job Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="full-time">Full Time</SelectItem>
                <SelectItem value="part-time">Part Time</SelectItem>
                <SelectItem value="contract">Contract</SelectItem>
                <SelectItem value="internship">Internship</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Experience Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="entry">Entry Level</SelectItem>
                <SelectItem value="mid">Mid Level</SelectItem>
                <SelectItem value="senior">Senior Level</SelectItem>
                <SelectItem value="lead">Lead</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <StaggerChildren>
            <div className="grid gap-6">
              {jobs.map((job, index) => (
                <StaggerItem key={index}>
                  <Card>
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
                          <strong>Type:</strong> {job.type}
                        </p>
                        <p className="text-muted-foreground">
                          <strong>Experience:</strong> {job.experience}
                        </p>
                        <p className="text-muted-foreground">
                          <strong>Salary:</strong> {job.salary}
                        </p>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button>Apply Now</Button>
                    </CardFooter>
                  </Card>
                </StaggerItem>
              ))}
            </div>
          </StaggerChildren>
        </div>
      </section>

      {/* For Employers Section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <SectionHeader
            title="For Employers"
            description="Find the right talent for your organization"
          />
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-muted-foreground mb-8">
              Post your job openings and connect with qualified candidates.
              Our team will help you throughout the hiring process.
            </p>
            <Button size="lg">Post a Job</Button>
          </div>
        </div>
      </section>
    </div>
  )
}