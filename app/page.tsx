import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Building, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeIn } from "@/components/animations/fade-in"
import { SlideIn } from "@/components/animations/slide-in"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"
import { Testimonials } from "@/components/testimonials"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2940&auto=format&fit=crop"
          alt="Professional workplace"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        <div className="container relative z-10 mx-auto px-4 sm:px-8">
          <div className="max-w-3xl">
            <SlideIn direction="up">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Work is Worship.
                <br />
                Build Your Future with <i>The Udyog.</i>
              </h1>
            </SlideIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-lg text-muted-foreground">
                Connect with opportunities through our comprehensive training, placement, and consultancy services.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/careers">
                    Explore Jobs <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Partner with Us</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50 p-6">
        <div className="container">
          <StaggerChildren>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              <StaggerItem>
                <Card>
                  <CardHeader className="flex flex-row items-center space-y-0">
                    <Users className="h-6 w-6 mr-4" />
                    <CardTitle>100+</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Successful Placements</p>
                  </CardContent>
                </Card>
              </StaggerItem>
              <StaggerItem>
                <Card>
                  <CardHeader className="flex flex-row items-center space-y-0">
                    <Building className="h-6 w-6 mr-4" />
                    <CardTitle>50+</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Partner Companies</p>
                  </CardContent>
                </Card>
              </StaggerItem>
              <StaggerItem>
                <Card>
                  <CardHeader className="flex flex-row items-center space-y-0">
                    <Award className="h-6 w-6 mr-4" />
                    <CardTitle>98%</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Satisfaction Rate</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            </div>
          </StaggerChildren>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 p-6">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight">Our Services</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Comprehensive solutions for your career growth
              </p>
            </div>
          </FadeIn>
          <StaggerChildren delay={0.2}>
            <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2">
              <StaggerItem>
                <Card className="flex flex-col h-full">
                  <CardHeader>
                    <CardTitle>Training</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">
                      Expert-led training programs in IT and non-IT fields, including advanced technologies like AI, ML, and blockchain.
                    </p>
                    <Button variant="link" asChild className="mt-4 p-0">
                      <Link href="/services#training">Learn more →</Link>
                    </Button>
                  </CardContent>
                </Card>
              </StaggerItem>
              <StaggerItem>
                <Card className="flex flex-col h-full">
                  <CardHeader>
                    <CardTitle>Placement</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">
                      End-to-end placement support including profiling, matching, and successful onboarding with top companies.
                    </p>
                    <Button variant="link" asChild className="mt-4 p-0">
                      <Link href="/services/placement">Learn more →</Link>
                    </Button>
                  </CardContent>
                </Card>
              </StaggerItem>
              <StaggerItem>
                <Card className="flex flex-col h-full">
                  <CardHeader>
                    <CardTitle>Consultancy</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">
                      Strategic workforce planning and recruitment solutions for businesses of all sizes.
                    </p>
                    <Button variant="link" asChild className="mt-4 p-0">
                      <Link href="/services#consultancy">Learn more →</Link>
                    </Button>
                  </CardContent>
                </Card>
              </StaggerItem>
            </div>
          </StaggerChildren>
        </div>
      </section>

      <Testimonials/>
    </>
  )
}