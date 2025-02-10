import { NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import { Course } from "@/lib/models/course"
import { uploadToDrive } from "@/lib/google-drive"
import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key"

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

    const formData = await req.formData()
    const title = formData.get("title") as string
    const description = formData.get("description") as string
    const topics = JSON.parse(formData.get("topics") as string)
    const image = formData.get("image") as File
    const resources = formData.getAll("resources") as File[]

    // Validate required fields
    if (!title || !description || !topics || !image) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Upload image to Google Drive
    const imageBuffer = Buffer.from(await image.arrayBuffer())
    const imageUpload = await uploadToDrive(
      imageBuffer,
      image.name,
      image.type
    )

    // Upload resources to Google Drive
    const uploadedResources = await Promise.all(
      resources.map(async (file) => {
        const buffer = Buffer.from(await file.arrayBuffer())
        const upload = await uploadToDrive(buffer, file.name, file.type)
        return {
          name: file.name,
          url: upload.webViewLink,
          type: file.name.endsWith(".pdf") ? "pdf" : "other"
        }
      })
    )

    // Create course in the database
    const course = await Course.create({
      title,
      description,
      topics,
      imageUrl: imageUpload.webViewLink,
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