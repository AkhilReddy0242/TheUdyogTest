import Image from "next/image"
import { Briefcase, GraduationCap, Users } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2940&auto=format&fit=crop"
          alt="Professional services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        <div className="container relative z-10">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Our Services</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Comprehensive solutions for career development and workforce management
          </p>
        </div>
      </section>

      {/* Training Section */}
      <section id="training" className="py-16">
        <div className="container">
          <SectionHeader
            title="Training Programs"
            description="Enhance your skills with our expert-led training programs"
          />
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <GraduationCap className="h-8 w-8 mb-4" />
                <CardTitle>Technical Training</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Advanced Programming Languages</li>
                  <li>Web Development</li>
                  <li>Cloud Computing</li>
                  <li>AI and Machine Learning</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Users className="h-8 w-8 mb-4" />
                <CardTitle>Soft Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Communication Skills</li>
                  <li>Leadership Development</li>
                  <li>Team Management</li>
                  <li>Time Management</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Briefcase className="h-8 w-8 mb-4" />
                <CardTitle>Career Preparation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Resume Building</li>
                  <li>Interview Preparation</li>
                  <li>Personal Branding</li>
                  <li>Career Guidance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Placement Section */}
      <section id="placement" className="py-16 bg-muted/50">
        <div className="container">
          <SectionHeader
            title="Placement Services"
            description="End-to-end placement support for career success"
          />
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold mb-4">For Job Seekers</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li>Profile Enhancement</li>
                <li>Job Matching</li>
                <li>Interview Scheduling</li>
                <li>Offer Negotiation</li>
                <li>Post-placement Support</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">For Employers</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li>Candidate Sourcing</li>
                <li>Skill Assessment</li>
                <li>Background Verification</li>
                <li>Onboarding Support</li>
                <li>Retention Strategies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Consultancy Section */}
      <section id="consultancy" className="py-16">
        <div className="container">
          <SectionHeader
            title="Consultancy Services"
            description="Strategic workforce planning and management solutions"
          />
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>HR Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Develop effective HR strategies aligned with your business goals
                  and organizational culture.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Talent Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Create and implement comprehensive talent management programs
                  for sustainable growth.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Process Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Streamline your HR processes and systems for maximum efficiency
                  and effectiveness.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}