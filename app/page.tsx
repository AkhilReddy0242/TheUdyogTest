import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Building, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Testimonials } from "@/components/testimonials"
import FAQSection from "@/components/Faq"
import { NewsSection } from "@/components/news-section"
import StatsSection from "@/components/StatsSection"

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
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Work is Worship.
              <br />
              Build Your Future with The Udyog.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Connect with opportunities through our comprehensive training, placement, and consultancy services.
            </p>
            <div className="mt-10 flex gap-4">
              <Button size="lg" asChild>
                <Link href="/careers">
                  Explore Jobs <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Partner with Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Services Section */}
      <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Our Services</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Comprehensive solutions for your career growth
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { title: "Training", description: "Expert-led training programs in IT and non-IT fields, including advanced technologies like AI, ML, and blockchain." },
            { title: "Placement", description: "End-to-end placement support including profiling, matching, and successful onboarding with top companies." },
            { title: "Consultancy", description: "Strategic workforce planning and recruitment solutions for businesses of all sizes." }
          ].map((service, index) => (
            <Card key={service.title} className="h-[12em] w-full rounded-[1em] overflow-hidden relative group p-6 z-0">
              <div className="circle absolute h-[7.5em] w-[7.5em] -top-[3.75em] -right-[3.75em] rounded-full bg-gray-500 group-hover:scale-[800%] duration-500 z-[-1]"></div>
              <CardHeader className="p-0">
                <CardTitle className="z-20 font-bold font-Poppin group-hover:text-white duration-500 text-[1.4em]">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 mt-4">
                <p className="text-muted-foreground group-hover:text-white/90 duration-500">
                  {service.description}
                </p>
                <Button variant="link" asChild className="absolute bottom-2 left-6 p-0">
                  <Link 
                    href={`/services#${service.title.toLowerCase()}`} 
                    className="text-[0.8em]  group-hover:text-white duration-500"
                  >
                    <span className="relative before:h-[0.16em] before:absolute before:w-full before:content-[''] before:bg-black group-hover:before:bg-white duration-300 before:bottom-0 before:left-0">
                      Learn more
                    </span>
                    <span className="ml-1">→</span>
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>


      <Testimonials />
      <NewsSection />
      <FAQSection />
    </>
  )
}