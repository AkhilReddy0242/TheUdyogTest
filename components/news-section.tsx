"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'
import { NewsArticle } from "@/types/news"
import { NewsCard } from "./news-card"

const sampleNews: NewsArticle[] = [
  {
    id: "1",
    title: "How to Land Your First Java Job: 10 Essential Tips",
    date: "2024-12-12",
    image: "https://plus.unsplash.com/premium_photo-1661274103356-8a6b390c6ac7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Java"],
    link: "#",
  },
  {
    id: "2",
    title: "Golang – Noa Recruitment Newsletter – December 2024",
    date: "2024-12-02",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Recruitment"],
    link: "#",
  },
  {
    id: "3",
    title: "Python: Essential Tips for Navigating the Tech Job Market",
    date: "2024-11-13",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Python"],
    link: "#",
  },
  {
    id: "4",
    title: "How to Improve Your JavaScript Developer CV",
    date: "2024-10-24",
    image: "https://images.unsplash.com/photo-1667372393086-9d4001d51cf1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["JavaScript"],
    link: "#",
  },
  {
    id: "5",
    title: "Java Developer Career Guide: 10 Essential Tips to Succeed",
    date: "2024-09-30",
    image: "https://plus.unsplash.com/premium_photo-1661274103356-8a6b390c6ac7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Java"],
    link: "#",
  },
  {
    id: "6",
    title: "Java Developer Career Guide: 10 Essential Tips to Succeed",
    date: "2024-09-30",
    image: "https://plus.unsplash.com/premium_photo-1661274103356-8a6b390c6ac7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Java"],
    link: "#",
  },
  {
    id: "7",
    title: "Java Developer Career Guide: 10 Essential Tips to Succeed",
    date: "2024-09-30",
    image: "https://plus.unsplash.com/premium_photo-1661274103356-8a6b390c6ac7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Java"],
    link: "#",
  },
  {
    id: "8",
    title: "Java Developer Career Guide: 10 Essential Tips to Succeed",
    date: "2024-09-30",
    image: "https://source.unsplash.com/random/300x200?career",
    tags: ["Java"],
    link: "#",
  },
  {
    id: "9",
    title: "Java Developer Career Guide: 10 Essential Tips to Succeed",
    date: "2024-09-30",
    image: "https://source.unsplash.com/random/300x200?career",
    tags: ["Java"],
    link: "#",
  },
  {
    id: "10",
    title: "Java Developer Career Guide: 10 Essential Tips to Succeed",
    date: "2024-09-30",
    image: "https://source.unsplash.com/random/300x200?career",
    tags: ["Java"],
    link: "#",
  },
]

export function NewsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100
      setScrollProgress(progress)
    }
  }

  return (
    <section className="py-12">
      <div className="container">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-4xl font-bold">Latest News</h2>
          <Link
            href="/blog"
            className="flex items-center gap-2 text-sm hover:underline"
          >
            View all news
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="hide-scrollbar flex gap-6 overflow-x-auto scroll-smooth pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {sampleNews.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>

        <div className="relative h-1 mt-4">
          <div className="absolute inset-x-0 h-full rounded-full bg-muted" />
          <div
            className="absolute inset-y-0 left-0 h-full rounded-full bg-primary transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </div>
    </section>
  )
}

