"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

interface ParallaxHeaderProps {
  title: string
  description?: string
  imageUrl: string
  imageAlt: string
  children?: React.ReactNode
}

export function ParallaxHeader({ 
  title, 
  description, 
  imageUrl, 
  imageAlt,
  children 
}: ParallaxHeaderProps) {
  const headerRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    })

    tl.to(imageRef.current, {
      yPercent: 50,
      scale: 1.1,
      ease: "none"
    })

    tl.to(contentRef.current, {
      yPercent: -50,
      opacity: 0,
      ease: "none"
    }, 0)

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <section ref={headerRef} className="relative h-[400px] flex items-center justify-center overflow-hidden">
      <div ref={imageRef} className="absolute inset-0">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>
      <div ref={contentRef} className="container relative z-10">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
        {description && (
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  )
}