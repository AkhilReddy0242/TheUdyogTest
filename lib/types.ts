export interface Course {
  id: string
  title: string
  description: string
  topics: string[]
  imageUrl: string
  resources: {
    name: string
    url: string
    type: "pdf" | "other"
  }[]
  createdAt: string
  updatedAt: string
}