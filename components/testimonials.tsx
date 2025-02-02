"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { RotatingBorder } from "./rotating-border"

interface Testimonial {
  id: number
  name: string
  image: string
  duration: string
  text: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Max Makina",
    image: "/a.png?height=96&width=96",
    duration: "One Year With Us",
    text: "I am incredibly grateful to The Udyog for their exceptional training and support that helped me secure my dream job."
  },
  {
    id: 2,
    name: "Makima Smith",
    image: "/b.png?height=96&width=96",
    duration: "One Year With Us",
    text: "Thank you, The Udyog, for providing me with the skills and opportunities that led to my successful placement."
  },
  {
    id: 3,
    name: "Akhil Reddy",
    image: "/c.png?height=96&width=96",
    duration: "One Year With Us",
    text: "I appreciate The Udyog for their invaluable training and guidance that made my career transition smooth and successful."
  },
  {
    id: 4,
    name: "Sarah Johnson",
    image: "/d.png?height=96&width=96",
    duration: "One Year With Us",
    text: "A heartfelt thank you to The Udyog for their unwavering support and training that helped me land my job."
  },
  {
    id: 5,
    name: "Devaraj",
    image: "/e.png?height=96&width=96",
    duration: "One Year With Us",
    text: "I owe my success to The Udyog for their excellent training programs and placement assistance."
  },
  {
    id: 6,
    name: "Emma Wilson",
    image: "/f.png?height=96&width=96",
    duration: "One Year With Us",
    text: "Thank you, The Udyog, for equipping me with the skills and confidence to excel in my career."
  }
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000)
    return () => clearInterval(timer)
  }, [nextSlide])

  const visibleTestimonials: Testimonial[] = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ]

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-12">
          <h2 className=" mb-4">Clients Testimonials</h2>
          <h1 className="text-4xl font-bold mb-6">What A Job Holder Says About Us</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            There are many variations of passages of available, but the majority have suffered some form, by injected humour,
            or look even slightly believable.
          </p>
        </div>

        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="overflow-hidden px-4">
            <div className="flex transition-all duration-500 ease-in-out">
              {visibleTestimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.id}-${index}`}
                  className="w-full min-w-full md:w-1/3 md:min-w-[33.333%] px-4"
                >
                  <div className="border border-gray-700 rounded-lg p-8 relative h-full">
                    <div className="mb-6">
                      <div className="w-24 h-24 mx-auto mb-4">
                        <RotatingBorder>
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={96}
                            height={96}
                            className="rounded-full object-cover"
                          />
                        </RotatingBorder>
                      </div>
                      <h3 className="text-xl font-semibold mb-1">{testimonial.name}</h3>
                      <p className=" text-sm">{testimonial.duration}</p>
                    </div>
                    <div className="relative">
                      <span className=" text-5xl absolute -top-4 left-0 opacity-20">&quot;</span>
                      <p className="text-gray-600 relative z-10">{testimonial.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={nextSlide}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  )
}