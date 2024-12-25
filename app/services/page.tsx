import { Briefcase, Brain, MessageSquare, Users2 } from 'lucide-react'
import Link from "next/link"
import Image from 'next/image'

export default function ServicesPage() {
  const services = [
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Job Portal",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
      href: "/careers"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Skill Training",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
      href: "/services/training"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Interview Test",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
      href: "/services/interview-test"
    },
    {
      icon: <Users2 className="h-6 w-6" />,
      title: "Job Conseling",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
      href: "/services/placement"
    },
  ]
  const steps = [
    {
      number: "01",
      title: "Apply for the Jobs",
      description: "Integer pharetra lectus eget dui porttitor mattis. Etiam ut ante vestibulum nisl hendrerit gravida."
    },
    {
      number: "02",
      title: "Prepare for the Test & Interview",
      description: "Integer pharetra lectus eget dui porttitor mattis. Etiam ut ante vestibulum nisl hendrerit gravida."
    },
    {
      number: "03",
      title: "Get Your Dream Job",
      description: "Integer pharetra lectus eget dui porttitor mattis. Etiam ut ante vestibulum nisl hendrerit gravida."
    }
  ]

  return (
    <main className="container mx-auto px-4 py-8 min-h-screen">
      
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


      {/* Services Section */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="text-center">
          <h2 className="mb-16 text-4xl font-bold md:text-5xl">
            Right Connection and
            <br />
            Right Employee
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Link 
              key={index} 
              href={service.href}
              className="flex flex-col items-center rounded-lg border p-8 text-center transition-colors hover:border-white"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full ">
                {service.icon}
              </div>
              <h3 className="mb-4 text-xl font-semibold">{service.title}</h3>
              <p className="text-sm">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* How We Work Section */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Image Side */}
          <div className="relative border border-zinc-800">
            <Image
              src="https://www.instructionalsolutions.com/hubfs/email-signature-on-mobile-device-1.webp"
              alt="Professional using phone"
              fill
              className="rounded-lg"
            />
          </div>

          {/* Content Side */}
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-zinc-400">HOW WE WORK</p>
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              Learn How to Achieve
              <br />
              Your Goal
            </h2>
            <p className="mb-8 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consequat tempor turpis, quis egestas ligula efficitur et. Donec at diam at nisl consectetur.
            </p>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-zinc-800 text-white">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}