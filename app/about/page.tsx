"use client"

import Image from "next/image"
import { Heart, Lightbulb, Target, Users } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { ValueCard } from "@/components/value-card"
import { ParallaxHeader } from "@/components/parallax-header"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <ParallaxHeader
        title="About The Udyog"
        description="Bridging the gap between talent and opportunity through innovative solutions and dedicated service."
        imageUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop"
        imageAlt="Team collaboration"
      />

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            <StaggerChildren>
              <StaggerItem>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                  <p className="text-muted-foreground">
                    To eradicate unemployment by connecting individuals with meaningful career opportunities
                    through comprehensive training, strategic placement, and expert consultancy services.
                  </p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                  <p className="text-muted-foreground">
                    To be the catalyst in creating a future where every job seeker finds their true calling
                    and every organization builds their dream team.
                  </p>
                </div>
              </StaggerItem>
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <SectionHeader
            title="Our Core Values"
            description="The principles that guide everything we do"
          />
          <StaggerChildren>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <StaggerItem>
                <ValueCard
                  icon={Heart}
                  title="Integrity"
                  description="We maintain the highest standards of honesty and ethical conduct in all our dealings."
                />
              </StaggerItem>
              <StaggerItem>
                <ValueCard
                  icon={Users}
                  title="Collaboration"
                  description="We believe in the power of working together to achieve extraordinary results."
                />
              </StaggerItem>
              <StaggerItem>
                <ValueCard
                  icon={Target}
                  title="Excellence"
                  description="We strive for excellence in every aspect of our service delivery."
                />
              </StaggerItem>
              <StaggerItem>
                <ValueCard
                  icon={Lightbulb}
                  title="Innovation"
                  description="We continuously evolve and adapt to meet the changing needs of the market."
                />
              </StaggerItem>
            </div>
          </StaggerChildren>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-16">
        <div className="container">
          <SectionHeader
            title="Our Journey"
            description="From humble beginnings to industry leadership"
          />
          <div className="max-w-3xl mx-auto">
            <StaggerChildren>
              <div className="space-y-8">
                <StaggerItem>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">2020</h3>
                    <p className="text-muted-foreground">Founded with a vision to transform the employment landscape.</p>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">2021</h3>
                    <p className="text-muted-foreground">Expanded our services to include comprehensive training programs.</p>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">2022</h3>
                    <p className="text-muted-foreground">Launched innovative placement solutions for enterprises.</p>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">2023</h3>
                    <p className="text-muted-foreground">Achieved milestone of 1000+ successful placements.</p>
                  </div>
                </StaggerItem>
              </div>
            </StaggerChildren>
          </div>
        </div>
      </section>
    </div>
  )
}