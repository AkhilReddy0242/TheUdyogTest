import Image from "next/image"
import { Heart, Lightbulb, Target, Users,Facebook, Twitter, Instagram } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { ValueCard } from "@/components/value-card"
import Link from "next/link"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Adveen Desuza",
      role: "UI Designer",
      image: "/profile pic.png"
    },
    {
      name: "Jezmin uniya",
      role: "Product Designer",
      image: "/profile pic.png"
    },
    {
      name: "Andrieo Gloree",
      role: "App Developer",
      image: "/profile pic.png"
    },
    {
      name: "Jackie Sanders",
      role: "Content Writer",
      image: "/profile pic.png"
    }
  ]
  return (//container mx-auto px-4 py-8 min-h-screen
    <main className=" min-h-screen">
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

      {/* Main Content Section */}
      <section className="container mx-auto pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold leading-tight">
              A future where every job seeker finds their true calling.
            </h2>
            <p className="text-gray-600">
            At The Udyog, our core values—Collaboration, Empowerment, Integrity, and
            Excellence—form the foundation of everything we do. These values not only
            guide our approach to connecting talent with opportunities but also reflect our
            commitment to addressing unemployment and creating meaningful careers.
            </p>
            <p className="text-gray-600">
              The main thrust is to focus on educating attendees on how to best protect highly vulnerable business applications with interactive panel.
            </p>
            
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <Image
                src="/teamwork.jpg"
                alt="Team working"
                width={400}
                height={300}
                className="rounded-lg object-cover w-full border border-zinc-800"
              />
              <div className="p-6 rounded-lg text-center">
                <div className="text-5xl font-bold">04</div>
                <div className="mt-2">
                  <div className="text-sm">We have</div>
                  <div>Years of experience</div>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <Image
                src="/office.jpg"
                alt="Office setup"
                width={400}
                height={300}
                className="rounded-lg object-cover w-full border border-zinc-800"
              />
            </div>
          </div>
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
      <section className="py-16">
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
    </main>
  )
}