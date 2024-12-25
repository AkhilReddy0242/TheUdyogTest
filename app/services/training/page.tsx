import { MonitorSmartphone, Smartphone, Palette, TestTubes, LineChart, Users, BookOpen, Briefcase, Brain, Megaphone, Presentation, Users2,Check, Code, Apple, Radio, Watch, Tv } from 'lucide-react'
import Image from 'next/image'

interface Service {
  icon: React.ComponentType
  title: string
  description: string
}

const itServices: Service[] = [
  {
    icon: MonitorSmartphone,
    title: "Web Development",
    description: "We carry more than just good coding skills. Our experience makes us stand out from other web development."
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Create complex enterprise software, ensure reliable software integration, modernise your legacy system."
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Build the product you need on time with an experienced team that uses a clear and effective design process."
  },
  {
    icon: TestTubes,
    title: "QA & Testing",
    description: "Turn to our experts to perform comprehensive, multi-stage testing and auditing of your software."
  },
  {
    icon: LineChart,
    title: "IT Counsultancy",
    description: "Trust our top minds to eliminate workflow pain points, implement new tech, and consolidate app portfolios."
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Over the past decade, our customers succeeded by leveraging Intellectsoft's process of building, motivating."
  }
]

const nonITTraining: Service[] = [
  {
    icon: BookOpen,
    title: "Leadership Development",
    description: "Empower your leaders with essential skills to drive team success and organizational growth."
  },
  {
    icon: Briefcase,
    title: "Project Management",
    description: "Master the art of project execution, from planning to delivery, ensuring optimal resource utilization."
  },
  {
    icon: Brain,
    title: "Critical Thinking",
    description: "Enhance problem-solving abilities and decision-making skills crucial for any professional role."
  },
  {
    icon: Megaphone,
    title: "Communication Skills",
    description: "Improve interpersonal and presentation skills to effectively convey ideas and collaborate with teams."
  },
  {
    icon: Presentation,
    title: "Business Strategy",
    description: "Learn to develop and implement effective strategies to drive business growth and competitive advantage."
  },
  {
    icon: Users2,
    title: "Team Building",
    description: "Foster a collaborative work environment and improve team dynamics for increased productivity."
  }
]

const technologies = [
  { icon: Code, name: 'Artificial Intelligence' },
  { icon: Smartphone, name: 'Machine Learning' },
  { icon: Apple, name: 'Blockchain' },
  { icon: Radio, name: 'IOT' },
  { icon: Watch, name: 'Augmented Reality' },
  { icon: Tv, name: 'Virtual Reality' }
]

const capabilities = [
  'Application Development',
  'BI Consulting and Implementation',
  'Machine and Deep Learning',
  'Data Quality Management'
]

function ServiceSection({ title, services }: { title: string, services: Service[] }) {
  return (
    <section className="mb-16">
      <div className="mb-12">
        <h2 className="text-4xl font-bold leading-tight">
          {title}
        </h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="w-12 h-12 text-white flex-shrink-0">
              <div className="w-full h-full">
                <service.icon aria-hidden="true" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-zinc-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function ServicesPage() {
  return (
    <main className="container mx-auto px-4 py-8 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <section className="mb-16 text-center">
          <h1 className="text-5xl font-bold leading-tight mb-4">Training</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer a wide range of IT trainings and non-IT trainings to help you to grow and succeed.
          </p>
        </section>
        <ServiceSection title="IT Training" services={itServices} />
        <ServiceSection title="Non-IT Training" services={nonITTraining} />
      </div>

      {/* Technology Index Section */}
      <section className="bg-black py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                Improve and Innovate with the Tech Trends
              </h2>
              <p className="text-gray-400 text-lg">
                Our team can assist you in transforming you through latest tech capabilities to stay ahead of the curve.
              </p>
              <ul className="space-y-4">
                {capabilities.map((capability, index) => (
                  <li key={index} className="flex items-center gap-3 text-white">
                    <Check className="h-5 w-5 text-zinc-400 flex-shrink-0" />
                    <span>{capability}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.map((tech, index) => (
                <div 
                  key={index}
                  className="aspect-square border border-gray-700 rounded-lg flex flex-col items-center justify-center p-6 hover:border-zinc-400 transition-colors"
                >
                  <tech.icon className="h-8 w-8 mb-3" />
                  <p className="text-white text-sm font-medium">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Why Choose Our Training?</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="border border-zinc-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl text-center font-semibold mb-4">Industry-Relevant Curriculum</h3>
            <p className='text-center'>Our courses are designed in collaboration with industry experts to ensure you learn the most in-demand skills.</p>
          </div>
          <div className="border border-zinc-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl text-center font-semibold mb-4">Hands-On Learning</h3>
            <p className='text-center'>Gain practical experience through real-world projects, case studies, and simulations.</p>
          </div>
          <div className="border border-zinc-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl text-center font-semibold mb-4">Expert Instructors</h3>
            <p className='text-center'>Learn from experienced professionals who bring real-world insights to the classroom.</p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Supplementary Resources
              </h2>
              
              <p className="text-zinc-400 text-lg">
              Beyond classroom learning, we provide access to extensive learning materials to support your ongoing development.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full border border-zinc-500 flex items-center justify-center flex-shrink-0">
                      <Check className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="font-medium">Training Videos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full border border-zinc-500 flex items-center justify-center flex-shrink-0">
                      <Check className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="font-medium ">Extended Learning Materials</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full border border-zinc-500 flex items-center justify-center flex-shrink-0">
                      <Check className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="font-medium ">Certification Opportunities</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative border border-zinc-500">
              <Image
                src="/logowithouttext.png?height=600&width=800"
                alt="Team collaboration"
                width={800}
                height={600}
                className="rounded-2xl"
              />
              <div className="absolute -bottom-7 -left-6 border border-zinc-500 p-4 rounded-xl shadow-lg">
                <Image
                  src="/logowithouttext.png?height=200&width=300"
                  alt="Company growth chart"
                  width={250}
                  height={180}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}