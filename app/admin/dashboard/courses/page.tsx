"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Plus, Upload, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

const courseSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  topics: z.array(z.string()).min(1, "At least one topic is required"),
  image: z.any()
    .refine((file) => file instanceof File, "Image is required")
    .refine((file) => file?.size <= MAX_FILE_SIZE, "Max file size is 5MB"),
  resources: z.array(z.any())
    .refine((files) => files.every(file => file instanceof File), "Invalid file type")
    .refine((files) => files.every(file => file.size <= MAX_FILE_SIZE), "Max file size is 5MB")
    .optional(),
})

export default function AdminCoursesPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [topics, setTopics] = useState<string[]>([])
  const [newTopic, setNewTopic] = useState("")

  const form = useForm<z.infer<typeof courseSchema>>({
    resolver: zodResolver(courseSchema),
    defaultValues: {
      title: "",
      description: "",
      topics: [],
    },
  })

  const addTopic = () => {
    if (newTopic.trim()) {
      setTopics([...topics, newTopic.trim()])
      setNewTopic("")
      // Update form topics field
      form.setValue("topics", [...topics, newTopic.trim()], { shouldValidate: true })
    }
  }

  const removeTopic = (index: number) => {
    const newTopics = topics.filter((_, i) => i !== index)
    setTopics(newTopics)
    // Update form topics field
    form.setValue("topics", newTopics, { shouldValidate: true })
  }

  async function onSubmit(values: z.infer<typeof courseSchema>) {
    try {
      setIsLoading(true)
      console.log("Form values:", values)

      if (topics.length === 0) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Please add at least one topic",
        })
        return
      }

      const formData = new FormData()
      formData.append("title", values.title)
      formData.append("description", values.description)
      formData.append("topics", JSON.stringify(topics))
      formData.append("image", values.image)
      
      if (values.resources && values.resources.length > 0) {
        Array.from(values.resources).forEach(file => {
          formData.append("resources", file)
        })
      }

      const token = localStorage.getItem("adminToken")
      if (!token) {
        throw new Error("Not authenticated")
      }

      const response = await fetch("/api/courses", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || "Failed to create course")
      }

      toast({
        title: "Success",
        description: "Course created successfully",
      })

      // Reset form and topics
      form.reset()
      setTopics([])
      router.refresh()
    } catch (error) {
      console.error("Error submitting form:", error)
      toast({
        variant: "destructive",
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to create course",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container py-8">
      <Card>
        <CardHeader>
          <CardTitle>Add New Course</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Course Title</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Full Stack Development" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Course description..."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="space-y-2">
                <FormLabel>Topics</FormLabel>
                <div className="flex gap-2">
                  <Input
                    value={newTopic}
                    onChange={(e) => setNewTopic(e.target.value)}
                    placeholder="Add a topic"
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault()
                        addTopic()
                      }
                    }}
                  />
                  <Button type="button" onClick={addTopic}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {topics.map((topic, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-1 bg-secondary px-2 py-1 rounded-md"
                    >
                      <span>{topic}</span>
                      <button
                        type="button"
                        onClick={() => removeTopic(index)}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
                {topics.length === 0 && (
                  <p className="text-sm text-destructive">At least one topic is required</p>
                )}
              </div>

              <FormField
                control={form.control}
                name="image"
                render={({ field: { onChange, value, ...field } }) => (
                  <FormItem>
                    <FormLabel>Course Image</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={(e) => onChange(e.target.files?.[0])}
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Maximum file size: 5MB
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="resources"
                render={({ field: { onChange, value, ...field } }) => (
                  <FormItem>
                    <FormLabel>Resources (PDFs, PPTx)</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        accept=".pdf,.pptx"
                        multiple
                        onChange={(e) => onChange(Array.from(e.target.files || []))}
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Maximum file size per file: 5MB
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? (
                  <>
                    <Upload className="mr-2 h-4 w-4 animate-spin" />
                    Creating Course...
                  </>
                ) : (
                  "Create Course"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}