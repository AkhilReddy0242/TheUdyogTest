import { NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import { Course } from "@/lib/models/course"
import jwt from "jsonwebtoken"
import { writeFile } from "fs/promises"
import { join } from "path"
import { mkdir } from "fs/promises"

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key"
const UPLOADS_DIR = "/tmp/uploads"

async function ensureUploadsDirectory() {
  try {
    await mkdir(UPLOADS_DIR, { recursive: true })
  } catch (error) {
    console.error("Error creating uploads directory:", error)
  }
}

export async function GET() {
  try {
    await connectDB()
    const courses = await Course.find().sort({ createdAt: -1 })
    
    return NextResponse.json({ courses })
  } catch (error) {
    console.error("Error fetching courses:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

export async function POST(req: Request) {
  try {
    const authHeader = req.headers.get("authorization")
    if (!authHeader?.startsWith("Bearer ")) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      )
    }

    const token = authHeader.split(" ")[1]
    const decoded = jwt.verify(token, JWT_SECRET) as { role: string }

    if (decoded.role !== "admin") {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      )
    }

    await connectDB()
    await ensureUploadsDirectory()

    const formData = await req.formData()
    const title = formData.get("title") as string
    const description = formData.get("description") as string
    const topics = JSON.parse(formData.get("topics") as string)
    const image = formData.get("image") as File
    const resources = formData.getAll("resources") as File[]

    if (!title || !description || !topics || !image) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Handle image upload
    const imageExt = image.name.split(".").pop()
    const imageFileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${imageExt}`
    const imagePath = join(UPLOADS_DIR, imageFileName)
    await writeFile(imagePath, new Uint8Array(await image.arrayBuffer()))
    const imageUrl = `/uploads/${imageFileName}`

    // Handle resource uploads
    const uploadedResources = await Promise.all(
      resources.map(async (file) => {
        const ext = file.name.split(".").pop()
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${ext}`
        const filePath = join(UPLOADS_DIR, fileName)
        await writeFile(filePath, new Uint8Array(await image.arrayBuffer()))
        return {
          name: file.name,
          url: `/uploads/${fileName}`,
          type: file.name.endsWith(".pdf") ? "pdf" : "other"
        }
      })
    )

    const course = await Course.create({
      title,
      description,
      topics,
      imageUrl,
      resources: uploadedResources
    })

    return NextResponse.json({ course })
  } catch (error) {
    console.error("Error creating course:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}