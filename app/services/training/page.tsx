"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Download, FileText, GraduationCap } from "lucide-react"
import { ParallaxHeader } from "@/components/parallax-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Course } from "@/lib/types"

export default function TrainingPage() {
  const [courses, setCourses] = useState<Course[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchCourses() {
      try {
        const response = await fetch('/api/courses')
        const data = await response.json()
        setCourses(data.courses)
      } catch (error) {
        console.error('Error fetching courses:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCourses()
  }, [])

  return (
    <div className="min-h-screen">
      <ParallaxHeader
        title="Training Programs"
        description="Enhance your skills with our comprehensive training programs"
        imageUrl="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2940"
        imageAlt="Training and development"
      />

      <section className="py-8 md:py-16">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="grid gap-4 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <Card key={`loading-${i}`} className="animate-pulse">
                  <div className="h-48 bg-muted" />
                  <CardHeader>
                    <div className="h-6 w-2/3 bg-muted rounded" />
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="h-4 bg-muted rounded" />
                      <div className="h-4 bg-muted rounded w-5/6" />
                      <div className="h-4 bg-muted rounded w-4/6" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid gap-4 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {courses.map((course, index) => (
                <Card key={`${course.id}-${index}`} className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src={course.imageUrl}
                      alt={course.title}
                      fill
                      className="w-full h-full"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5" />
                      {course.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-2 md:mb-4">
                      {course.description}
                    </p>
                    <div className="space-y-2 md:space-y-4">
                      <div>
                        <h4 className="font-medium mb-1 md:mb-2">Key Topics:</h4>
                        <ul className="list-disc list-inside text-muted-foreground">
                          {course.topics.map((topic, index) => (
                            <li key={`${course.id}-topic-${index}`}>{topic}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1 md:mb-2">Resources:</h4>
                        <div className="space-y-2">
                          {course.resources.map((resource, index) => (
                            <Button
                              key={`${course.id}-resource-${index}`}
                              variant="outline"
                              className="w-full justify-start"
                              asChild
                            >
                              <Link href={resource.url} target="_blank">
                                {resource.type === 'pdf' ? (
                                  <FileText className="h-4 w-4 mr-2" />
                                ) : (
                                  <Download className="h-4 w-4 mr-2" />
                                )}
                                {resource.name}
                              </Link>
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}