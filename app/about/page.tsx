import Image from "next/image"
import { Heart, Lightbulb, Target, Users } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { ValueCard } from "@/components/value-card"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop"
          alt="Team collaboration"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        <div className="container relative z-10">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About The Udyog</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Bridging the gap between talent and opportunity through innovative solutions and dedicated service.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground">
                To eradicate unemployment by connecting individuals with meaningful career opportunities
                through comprehensive training, strategic placement, and expert consultancy services.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground">
                To be the catalyst in creating a future where every job seeker finds their true calling
                and every organization builds their dream team.
              </p>
            </div>
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
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <ValueCard
              icon={Heart}
              title="Integrity"
              description="We maintain the highest standards of honesty and ethical conduct in all our dealings."
            />
            <ValueCard
              icon={Users}
              title="Collaboration"
              description="We believe in the power of working together to achieve extraordinary results."
            />
            <ValueCard
              icon={Target}
              title="Excellence"
              description="We strive for excellence in every aspect of our service delivery."
            />
            <ValueCard
              icon={Lightbulb}
              title="Innovation"
              description="We continuously evolve and adapt to meet the changing needs of the market."
            />
          </div>
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
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">2020</h3>
                <p className="text-muted-foreground">Founded with a vision to transform the employment landscape.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">2021</h3>
                <p className="text-muted-foreground">Expanded our services to include comprehensive training programs.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">2022</h3>
                <p className="text-muted-foreground">Launched innovative placement solutions for enterprises.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">2023</h3>
                <p className="text-muted-foreground">Achieved milestone of 1000+ successful placements.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}