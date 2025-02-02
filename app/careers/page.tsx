"use client"

import { useState, useEffect } from "react"
// import Image from "next/image"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ParallaxHeader } from "@/components/parallax-header"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"
import testJobsData from "../data/testjob.json"


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
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 50;

  useEffect(() => {
    const filtered = testJobsData.jobs.filter(job => {
      const matchesSearch = job.Job_Title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.Company_Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.Skills_Required.toLowerCase().includes(searchTerm.toLowerCase()) 
      // setLocation(location === 'All Locations' ? '' : location)
      const matchesLocation = location === 'all'|| job.Location.toLowerCase().includes(location.toLowerCase())
      // const matchesType = !jobType || job.type === jobType
      // const matchesExperience = !experience || job.experience.includes(experience)

      // return matchesSearch && matchesLocation && matchesType && matchesExperience
      return matchesSearch && matchesLocation
    })

    setFilteredJobs(filtered)
    setCurrentPage(1); // Reset to first page on filter change
  }, [searchTerm, location, jobType, experience])

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const currentJobs = filteredJobs.slice((currentPage - 1) * jobsPerPage, currentPage * jobsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const toggleDescription = (jobId: string) => {
    setExpandedJobs(prev => ({
      ...prev,
      [jobId]: !prev[jobId]
    }));
  };

  return (
    <div className="min-h-screen overflow-hidden">
      <ParallaxHeader
        title="Career Opportunities"
        description="Find your next career move with The Udyog"
        imageUrl="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop"
        imageAlt="Career opportunities"
      />

      {/* Search Section */}
      <section className="py-16 px-4 md:pl-8 md:pr-8">
        <div className="container">
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search jobs by title, company, or keywords..."
                className="pl-10 w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            {/* Adjusted the select containers for responsiveness */}
            <div className="flex flex-col md:flex-row gap-4">
              <Select value={location} onValueChange={setLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="mumbai">Mumbai</SelectItem>
                  <SelectItem value="delhi">Delhi</SelectItem>
                  <SelectItem value="bangalore">Bangalore</SelectItem>
                  <SelectItem value="hyderabad">Hyderabad</SelectItem>
                </SelectContent>
              </Select>

              {/* <Select value={jobType} onValueChange={setJobType} className="w-full md:w-[200px]">
                <SelectTrigger>
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

              <Select value={experience} onValueChange={setExperience} className="w-full md:w-[200px]">
                <SelectTrigger>
                  <SelectValue placeholder="Experience Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Experience</SelectItem>
                  <SelectItem value="0-2">0-2 years</SelectItem>
                  <SelectItem value="2-5">2-5 years</SelectItem>
                  <SelectItem value="5+">5+ years</SelectItem>
                </SelectContent>
              </Select> */}
            </div>
          </div>

          <StaggerChildren className="mt-8">
            <div className="grid gap-6 grid-cols-1 ">
              <label> Available Jobs: {filteredJobs.length}</label>
              {currentJobs.length === 0 ? (
                <Card>
                  <CardContent className="py-8">
                    <p className="text-center text-muted-foreground">
                      No jobs found matching your criteria. Try adjusting your search filters.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                currentJobs.map((job) => (
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

          {/* Pagination Controls */}
          <div className="flex justify-between mt-4">
            <Button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</Button>
            <Button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</Button>
          </div>
        </div>
      </section>
    </div>
  )
}