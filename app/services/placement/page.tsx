'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import  { Button }  from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Briefcase, TrendingUp, FileQuestion, BookOpen, Mail, Video, Sun, Moon, FileCheck, GraduationCap, Handshake, MessageCircle, Send, MessageSquare, Code } from 'lucide-react'

const placementProcess = [
  { 
    title: "Profile Creation", 
    description: "We create a comprehensive profile highlighting your skills and career goals.",
    icon: FileCheck,
    color: "bg-zinc-800"
  },
  { 
    title: "Job Matching", 
    description: "Our AI-powered system matches your profile with suitable job openings.",
    icon: Users,
    color: "bg-zinc-800"
  },
  { 
    title: "Interview Preparation", 
    description: "We provide thorough interview coaching and mock interview sessions.",
    icon: Briefcase,
    color: "bg-zinc-800"
  },
  { 
    title: "Placement Support", 
    description: "Our team assists you throughout the hiring process, from application to offer negotiation.",
    icon: GraduationCap,
    color: "bg-zinc-800"
  },
  { 
    title: "Post-Placement Guidance", 
    description: "We offer continued support to ensure a smooth transition into your new role.",
    icon: Handshake,
    color: "bg-zinc-800"
  }
]

const placementServices = [
  {
    title: "Prime Preparation",
    description: "200+ Courses for Complete Placement Preparation",
    icon: BookOpen,
    details: "Access comprehensive placement preparation courses, including technical skills, aptitude, and soft skills training."
  },
  {
    title: "Top 100 Programs",
    description: "Daily coding practice with 450,000+ students",
    icon: FileCheck,
    details: "Practice top 100 coding questions, DSA problems, and interview puzzles that are frequently asked in interviews."
  },
  {
    title: "Company Cheatsheets",
    description: "Detailed preparation guides for top companies",
    icon: FileQuestion,
    details: "Access comprehensive cheatsheets for companies like Accenture, Cognizant, and Capgemini, including FAQs and exam patterns."
  },
  {
    title: "Interview Preparation",
    description: "Company-specific interview preparation",
    icon: Video,
    details: "Get detailed guidance on how to prepare for specific companies like TCS NQT, Cognizant Gen C, and Capgemini."
  }
]

const successStories = [
  {
    name: "Priya S.",
    role: "Software Developer",
    company: "TechGiant Inc.",
    quote: "The Udyog's placement services were instrumental in helping me land my dream job at a leading tech company. Their personalized approach and interview preparation made all the difference."
  },
  {
    name: "Rahul M.",
    role: "Marketing Manager",
    company: "Global Brands Co.",
    quote: "I was amazed by the range of opportunities The Udyog presented to me. Their team's support throughout the hiring process was invaluable, and I'm now thriving in my new role."
  },
  {
    name: "Anita K.",
    role: "Data Scientist",
    company: "AI Innovations Ltd.",
    quote: "The mock interviews and technical assessment support provided by The Udyog were crucial in helping me secure a position at a top AI research firm. I'm grateful for their expert guidance."
  }
]

export default function PlacementContent() {
  const [mounted, setMounted] = useState(false)
  const [activeStep, setActiveStep] = useState<number | null>(null)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <main className="min-h-screen dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              Elevate Your Career
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Unlock your potential with our expert placement services. We connect talent with opportunity.
            </p>
            <Button size="lg" className="bg-zinc-800 hover:bg-zinc-700">
              Get Started
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Placement Process */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Placement Process</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-zinc-800"></div>
            {placementProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative mb-8 ${index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'} md:w-1/2`}
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
              >
                <Card className={`relative ${activeStep === index ? 'scale-105' : ''} transition-all duration-300 bg-white/80 dark:bg-black backdrop-blur-sm border border-zinc-600 shadow-lg`}>
                  <div className={`absolute top-4 ${index % 2 === 0 ? 'left-0 -translate-x-1/2' : 'right-0 translate-x-1/2'} w-8 h-8 rounded-full ${step.color} flex items-center justify-center text-white`}>
                    <step.icon size={20} />
                  </div>
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit mb-2">Step {index + 1}</Badge>
                    <CardTitle>{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{step.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Services */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Services</h3>
          <Tabs defaultValue={placementServices[0].title.toLowerCase().replace(/\s+/g, '-')}>
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
              {placementServices.map((service, index) => (
                <TabsTrigger key={index} value={service.title.toLowerCase().replace(/\s+/g, '-')}>
                  <service.icon className="mr-2" />
                  {service.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {placementServices.map((service, index) => (
              <TabsContent key={index} value={service.title.toLowerCase().replace(/\s+/g, '-')}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="bg-black/50 dark:bg-zinc-900/50 rounded-lg border border-zinc-900 backdrop-blur-lg shadow-lg">
                      <CardHeader>
                        <CardTitle>{service.title}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>{service.details}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </AnimatePresence>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 text-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Choose Our Placement Services?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Users size={48} className="mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Extensive Network</h4>
              <p>Access to a wide range of job opportunities across various industries and locations.</p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Briefcase size={48} className="mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Personalized Approach</h4>
              <p>Tailored job recommendations based on your skills, experience, and career goals.</p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <TrendingUp size={48} className="mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Career Growth</h4>
              <p>Guidance on career progression and skill development to help you achieve your long-term goals.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">Success Stories</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="h-full bg-white/50 dark:bg-black backdrop-blur-lg border border-zinc-500 shadow-lg">
                  <CardHeader>
                    <CardTitle>{story.name}</CardTitle>
                    <CardDescription>{story.role}</CardDescription>
                    <Badge variant="secondary">{story.company}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="italic">"{story.quote}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Career Journey?</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let us help you find the perfect job opportunity and guide you towards a successful career.
            </p>
            <Button size="lg" className="bg-zinc-800 hover:bg-zinc-700 text-white">
              Contact Us Today
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}