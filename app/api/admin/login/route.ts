import { NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import { User } from "@/lib/models/user"
import jwt from "jsonwebtoken"
import { z } from "zod"

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const validation = loginSchema.safeParse(body)
    
    if (!validation.success) {
      return NextResponse.json(
        { error: "Invalid input data" },
        { status: 400 }
      )
    }

    await connectDB()

    const user = await User.findOne({ 
      email: body.email,
      role: "admin"
    })

    if (!user) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      )
    }

    const isValidPassword = await user.comparePassword(body.password)
    if (!isValidPassword) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      )
    }

    const token = jwt.sign(
      { 
        userId: user._id, 
        email: user.email, 
        name: user.name,
        role: "admin" 
      },
      JWT_SECRET,
      { expiresIn: "24h" }
    )

    return NextResponse.json({ token })
  } catch (error) {
    console.error("Admin login error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}