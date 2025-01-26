"use client"

import { useState, useEffect } from "react"
// import Image from "next/image"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"
import { ParallaxHeader } from "@/components/parallax-header"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"
import jobsData from "../data/jobs.json"
import testJobsData from "../data/testjob.json"

interface Job {
  id: string
  title: string
  company: string
  location: string
  type: string
  experience: string
  salary: string
  skills: string[]
  description: string
}

interface JobsForSearch {
  Job_ID: string,
  Job_Title: string,
  Company_Name: string,
  Location: string,
  Salary: string,
  Skills_Required: string,
  Job_Description: string,
  URL: string,
  Job_Posted_On: string
}

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [location, setLocation] = useState("")
  const [jobType, setJobType] = useState("")
  const [experience, setExperience] = useState("")
  const [filteredJobs, setFilteredJobs] = useState<JobsForSearch[]>(testJobsData.jobs)
  const [expandedJobs, setExpandedJobs] = useState<{ [key: string]: boolean }>({})

  useEffect(() => {
    const filtered = testJobsData.jobs.filter(job => {
      const matchesSearch = job.Job_Title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.Company_Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.Skills_Required.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.Job_Description.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesLocation = !location || job.Location.toLowerCase().includes(location.toLowerCase())
      // const matchesType = !jobType || job.type === jobType
      // const matchesExperience = !experience || job.experience.includes(experience)

      // return matchesSearch && matchesLocation && matchesType && matchesExperience
      return matchesSearch && matchesLocation
    })

    setFilteredJobs(filtered)
  }, [searchTerm, location, jobType, experience])

  const toggleDescription = (jobId: string) => {
    setExpandedJobs(prev => ({
      ...prev,
      [jobId]: !prev[jobId]
    }));
  };

  return (
    <div className="min-h-screen">
      <ParallaxHeader
        title="Career Opportunities"
        description="Find your next career move with The Udyog"
        imageUrl="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop"
        imageAlt="Career opportunities"
      />

      {/* Search Section */}
      <section className="py-16 pl-8 pr-8">
        <div className="container">
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search jobs by title, company, or keywords..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            {/* <div className="flex flex-col md:flex-row gap-4">
              <Select value={location} onValueChange={setLocation}>
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="location">All Locations</SelectItem>
                  <SelectItem value="mumbai">Mumbai</SelectItem>
                  <SelectItem value="delhi">Delhi</SelectItem>
                  <SelectItem value="bangalore">Bangalore</SelectItem>
                  <SelectItem value="hyderabad">Hyderabad</SelectItem>
                </SelectContent>
              </Select>

              <Select value={jobType} onValueChange={setJobType}>
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="Job Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All-Types">All Types</SelectItem>
                  <SelectItem value="Full-time">Full Time</SelectItem>
                  <SelectItem value="Part-time">Part Time</SelectItem>
                  <SelectItem value="Contract">Contract</SelectItem>
                  <SelectItem value="Internship">Internship</SelectItem>
                </SelectContent>
              </Select>

              <Select value={experience} onValueChange={setExperience}>
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="Experience Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Experience</SelectItem>
                  <SelectItem value="0-2">0-2 years</SelectItem>
                  <SelectItem value="2-5">2-5 years</SelectItem>
                  <SelectItem value="5+">5+ years</SelectItem>
                </SelectContent>
              </Select>
            </div> */}
          </div>

          <StaggerChildren className="mt-8">
            <div className="grid gap-6">
              {filteredJobs.length === 0 ? (
                <Card>
                  <CardContent className="py-8">
                    <p className="text-center text-muted-foreground">
                      No jobs found matching your criteria. Try adjusting your search filters.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                filteredJobs.map((job) => (
                  <StaggerItem key={job.Job_ID}>
                    <Card>
                      <CardHeader>
                        <CardTitle>{job.Job_Title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid gap-2">
                          <p className="text-muted-foreground">
                            <strong>Company:</strong> {job.Company_Name}
                          </p>
                          <p className="text-muted-foreground">
                            <strong>Location:</strong> {job.Location}
                          </p>
                          {/* <p className="text-muted-foreground">
                            <strong>Type:</strong> {job.type}
                          </p>
                          <p className="text-muted-foreground">
                            <strong>Experience:</strong> {job.experience}
                          </p> */}
                          <p className="text-muted-foreground">
                            <strong>Salary:</strong> {job.Salary}
                          </p>
                          <p className="text-muted-foreground">
                            <strong>Skills:</strong> {job.Skills_Required}
                          </p>
                          <p className="text-muted-foreground">
                            {expandedJobs[job.Job_ID] 
                              ? job.Job_Description 
                              : job.Job_Description.slice(0, 200) + "..."}
                            <Button 
                              variant="link" 
                              className="p-0 h-auto font-semibold" 
                              onClick={() => toggleDescription(job.Job_ID)}
                            >
                              {expandedJobs[job.Job_ID] ? "Show Less" : "Show More"}
                            </Button>
                          </p>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button onClick={() => window.open(job.URL, '_blank')}>Apply Now</Button>
                      </CardFooter>
                    </Card>
                  </StaggerItem>
                ))
              )}
            </div>
          </StaggerChildren>
        </div>
      </section>
    </div>
  )
}