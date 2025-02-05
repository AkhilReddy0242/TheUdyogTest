import { NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import { User } from "@/lib/models/user"
import { z } from "zod"

const registerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8),
  adminCode: z.string(),
})

const ADMIN_REGISTRATION_CODE = process.env.ADMIN_REGISTRATION_CODE || "secret-admin-code"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const validation = registerSchema.safeParse(body)
    
    if (!validation.success) {
      return NextResponse.json(
        { error: "Invalid input data" },
        { status: 400 }
      )
    }

    if (body.adminCode !== ADMIN_REGISTRATION_CODE) {
      return NextResponse.json(
        { error: "Invalid admin registration code" },
        { status: 403 }
      )
    }

    await connectDB()

    const existingUser = await User.findOne({ email: body.email })
    if (existingUser) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 400 }
      )
    }

    const user = await User.create({
      email: body.email,
      password: body.password,
      name: body.name,
      role: "admin",
    })

    return NextResponse.json({
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    })
  } catch (error) {
    console.error("Admin registration error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}