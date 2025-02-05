"use client"

import { ParallaxHeader } from "@/components/parallax-header"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useEffect, useState } from "react"

export default function TermsPage() {
  const [lastUpdated, setLastUpdated] = useState("")

  useEffect(() => {
    setLastUpdated(new Date().toLocaleDateString())
  }, [])

  return (
    <div className="min-h-screen">
      <ParallaxHeader
        title="Terms and Conditions"
        description="Please read these terms carefully before using our services"
        imageUrl="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2940"
        imageAlt="Legal document"
      />

      <section className="py-16 pl-10">
        <div className="container max-w-4xl">
          <Card>
            <CardContent className="p-6">
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-muted-foreground mb-6">
                  Last updated: {lastUpdated}
                </p>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="introduction">
                    <AccordionTrigger>1. Introduction</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">
                        Welcome to The Udyog. These Terms and Conditions govern your use of our website and services. By accessing or using our platform, you agree to be bound by these terms.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="job-listings">
                    <AccordionTrigger>2. Job Listings and Third-Party Content</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">
                        Our platform aggregates job listings from various sources, including Naukri.com. We want to clarify that:
                      </p>
                      <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Job listings may include content from publicly available Naukri.com links</li>
                        <li>We do not claim ownership of third-party job listings</li>
                        <li>Links to original job postings are provided where applicable</li>
                        <li>Users should verify job details on the original posting site</li>
                        <li>We are not responsible for the accuracy of third-party job listings</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="user-obligations">
                    <AccordionTrigger>3. User Obligations</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">Users agree to:</p>
                      <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Provide accurate information when creating profiles</li>
                        <li>Not misuse or manipulate job listings</li>
                        <li>Respect intellectual property rights</li>
                        <li>Not engage in fraudulent activities</li>
                        <li>Maintain the confidentiality of their account</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="intellectual-property">
                    <AccordionTrigger>4. Intellectual Property</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">
                        All original content on The Udyog is protected by intellectual property rights. Third-party content, including job listings from Naukri.com, remains the property of their respective owners.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="disclaimer">
                    <AccordionTrigger>5. Disclaimer of Warranties</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">
                        The Udyog provides its services &quot;as is&quot; and makes no warranties regarding:
                      </p>
                      <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Accuracy of third-party job listings</li>
                        <li>Availability of advertised positions</li>
                        <li>Success in job applications</li>
                        <li>Continuous availability of services</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="limitation">
                    <AccordionTrigger>6. Limitation of Liability</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">
                        The Udyog shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from:
                      </p>
                      <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Use or inability to use our services</li>
                        <li>Reliance on job listings</li>
                        <li>Actions taken based on website content</li>
                        <li>Third-party conduct or content</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="privacy">
                    <AccordionTrigger>7. Privacy and Data Protection</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">
                        Our Privacy Policy explains how we collect, use, and protect your personal information. By using our services, you consent to our data practices as described in the Privacy Policy.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="modifications">
                    <AccordionTrigger>8. Modifications to Terms</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">
                        We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the modified terms.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="termination">
                    <AccordionTrigger>9. Account Termination</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">
                        We reserve the right to terminate or suspend accounts that violate these terms or engage in fraudulent activities.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="contact">
                    <AccordionTrigger>10. Contact Information</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">
                        For questions about these terms, please contact us at:
                      </p>
                      <p className="text-muted-foreground">
                        Email: services.theudyog@gmail.com<br />
                        Address: West Venkatapuram, Secunderabad.
India
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}