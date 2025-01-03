export interface Job {
  id: string
  title: string
  company: string
  location: string
  experience: string
  salary: string
  description: string
  requirements: string[]
  postedAt: string
}

export interface JobSearchParams {
  location?: string
  role?: string
  experience?: string
}

// Simulated API call - Replace with actual API endpoint
export async function searchJobs(params: JobSearchParams): Promise<Job[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000))

  // Sample data - Replace with actual API call
  const jobs: Job[] = [
    {
      id: "1",
      title: "Senior Software Engineer",
      company: "Tech Innovators Ltd",
      location: "Mumbai",
      experience: "5+ years",
      salary: "₹18-25 LPA",
      description: "We are looking for a Senior Software Engineer...",
      requirements: ["React", "Node.js", "TypeScript"],
      postedAt: new Date().toISOString(),
    },
    {
      id: "2",
      title: "UX Designer",
      company: "Creative Tech",
      location: "Bangalore",
      experience: "3+ years",
      salary: "₹12-18 LPA",
      description: "Join our design team...",
      requirements: ["Figma", "UI/UX", "Design Systems"],
      postedAt: new Date().toISOString(),
    },
  ]

  // Filter jobs based on search params
  return jobs.filter(job => {
    const locationMatch = !params.location || job.location.toLowerCase().includes(params.location.toLowerCase())
    const roleMatch = !params.role || job.title.toLowerCase().includes(params.role.toLowerCase())
    const experienceMatch = !params.experience || job.experience.toLowerCase().includes(params.experience.toLowerCase())
    
    return locationMatch && roleMatch && experienceMatch
  })
}