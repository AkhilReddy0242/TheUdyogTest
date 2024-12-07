import Image from "next/image"
import Link from "next/link"
import { CalendarDays } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeader } from "@/components/section-header"

const blogPosts = [
  {
    title: "The Future of Work: AI and Human Collaboration",
    excerpt: "Exploring how artificial intelligence is reshaping the workplace and creating new opportunities for human-AI collaboration.",
    date: "2024-03-15",
    author: "Dr. Sarah Johnson",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2940",
    category: "Technology"
  },
  {
    title: "Essential Skills for 2024's Job Market",
    excerpt: "A comprehensive guide to the most in-demand skills employers are looking for in today's rapidly evolving job market.",
    date: "2024-03-10",
    author: "Michael Chen",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2940",
    category: "Career Development"
  },
  {
    title: "Building a Strong Company Culture",
    excerpt: "How to create and maintain a positive workplace culture that attracts and retains top talent.",
    date: "2024-03-05",
    author: "Priya Patel",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940",
    category: "Leadership"
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2940"
          alt="Blog and Insights"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        <div className="container relative z-10">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Blog & Insights</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Stay updated with the latest trends, insights, and success stories in the world of employment
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="container">
          <SectionHeader
            title="Latest Articles"
            description="Expert insights and industry trends"
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <CalendarDays className="h-4 w-4" />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </time>
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      By {post.author}
                    </span>
                    <span className="text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}