"use client"

import Image from "next/image"
import { Heart, Lightbulb, Target, Users,Facebook, Twitter, Instagram } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { ValueCard } from "@/components/value-card"
import { ParallaxHeader } from "@/components/parallax-header"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"
import Link from "next/link"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Anreddy Karthik Reddy",
      role: "UI Designer",
      image: "/profile pic.png"
    },
    {
      name: "Anreddy Akhil Reddy",
      role: "Product Designer",
      image: "/b.png"
    },
    {
      name: "Padma Devaraj",
      role: "App Developer",
      image: "/e.png"
    },
    {
      name: "Rohith Reddy",
      role: "Content Writer",
      image: "/profile pic.png"
    }
  ]
  return (
    <div className="min-h-screen">
      <ParallaxHeader
        title="About The Udyog"
        description="Bridging the gap between talent and opportunity through innovative solutions and dedicated service."
        imageUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop"
        imageAlt="Team collaboration"
      />

      {/* Mission & Vision */}
      <section className="py-16 px-8">
        <div className="container ">
          <div className="grid gap-12">
            <StaggerChildren>
                <SectionHeader
                title="Our Mission"
                description=""
              />
              <div className="max-w-3xl mx-auto pb-12">
              <StaggerItem>
                  <div>
                    <p className="text-muted-foreground">
                        At The Udyog, we believe that work is more than a necessity - it is a form of worship and a stepping stone to a brighter future. Founded with the mission to tackle one of India’s most
                        pressing challenges - unemployment - we are dedicated to creating opportunities for job seekers
                        and empowering individuals to build meaningful careers. <br/>
                        Our approach is simple yet impactful: we connect the right talent with the right opportunities.
                        From entry-level roles to executive leadership positions, our goal is to bridge the gap between
                        job seekers and employers. By fostering strong relationships with individuals, companies, and HR
                        departments, we ensure a seamless recruitment process that benefits all parties involved.
                  </p>
                  </div>
                </StaggerItem>
              </div>
              <SectionHeader
                title="Our Vision"
                description=""
              />
              <div className="max-w-3xl mx-auto">
              <StaggerItem>
                  <div>
                  <p className="text-muted-foreground px-4">
                      At The Udyog, we aspire to eliminate unemployment across India by
                      providing individuals with meaningful career opportunities that match
                      their talents and ambitions. Our goal is to help people unlock their true
                      potential through employment that fosters both personal and
                      professional growth. By focusing on empowering individuals, we aim to
                      create a future where work is not just a means of livelihood, but a
                      pathway to purpose and lasting success, contributing to the overall
                      development of society and the economy.

                  </p>
                  </div>
                </StaggerItem>
              </div>
              <StaggerItem>
                <div className="text-2xl font-bold mb-4 pt-8 text-center">
                  <b> ‘Work is Worship’</b>
                </div>
              </StaggerItem>
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-muted/50 p-6">
        <div className="container">
          <SectionHeader
            title="Our Core Values"
            description="The principles that guide everything we do"
          />
          <StaggerChildren>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 h-full">
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
                  description="We strive for excellence in every aspect of our service delivery.&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;"
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
      <section className="py-16 px-8">
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
                    <h3 className="text-xl font-semibold mb-2">2024</h3>
                    <p className="text-muted-foreground">Founded with a vision to transform the employment landscape.</p>
                    <p className="text-muted-foreground">Expanded our services to include comprehensive training programs.</p>
                    <p className="text-muted-foreground">Achieved milestone of 50+ successful placements.</p>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">2025</h3>
                    <p className="text-muted-foreground">Achieved milestone of 50+ successful placements.</p>
                  </div>
                </StaggerItem>
              </div>
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <div className="text-primary mb-2">Our Team</div>
        <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div 
            key={index} 
            className="group relative rounded-lg p-6 text-center overflow-hidden
                       hover:transform hover:scale-[1.005] hover:-translate-y-1
                       transition-all duration-300 ease-out h-[321px] w-full
                       hover:shadow-[0_24px_36px_rgba(0,0,0,0.11),0_24px_46px_rgba(206,178,252,0.48)]"
          >
            <div className="relative w-[131px] h-[131px] mx-auto mb-4">
              {/* Animated overlay - positioned relative to the wrapper */}
              <div className="absolute w-[118px] h-[118px] bg-gray-500 rounded-full 
                            left-[6.5px] top-[6.5px] -z-10
                            transition-transform duration-300 ease-out origin-center
                            group-hover:scale-[5]" />

              {/* Profile image wrapper */}
              <div className="absolute inset-0
                            rounded-full border-2 border-gray-500
                            transition-all duration-300 ease-out
                            group-hover:border-white group-hover:bg-white">
                <div className="absolute left-[6.5px] top-[6.5px]
                              w-[118px] h-[118px] rounded-full overflow-hidden
                              after:content-[''] after:absolute after:inset-0 
                              after:bg-white after:opacity-0 after:z-20
                              group-hover:after:opacity-30 after:transition-opacity">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-2 relative z-10
                         transition-colors duration-300 group-hover:text-white">
              {member.name}
            </h3>
            <p className="text-gray-600 mb-4 relative z-10
                       transition-colors duration-300 group-hover:text-white">
              {member.role}
            </p>
            
            <div className="flex justify-center gap-4 relative z-10">
              <Link href="#" className="text-gray-400 transition-colors
                                      group-hover:text-white/80 hover:text-primary
                                      group-hover:hover:text-white">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 transition-colors
                                      group-hover:text-white/80 hover:text-primary
                                      group-hover:hover:text-white">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 transition-colors
                                      group-hover:text-white/80 hover:text-primary
                                      group-hover:hover:text-white">
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  )
}