import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { User } from '@/lib/models/user';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { mkdir } from 'fs/promises';

// Ensure uploads directory exists
const UPLOADS_DIR = "/tmp/uploads"

async function ensureUploadsDirectory() {
  try {
    await mkdir(UPLOADS_DIR, { recursive: true });
  } catch (error) {
    console.error('Error creating uploads directory:', error);
  }
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const name = formData.get('name') as string;
    const role = formData.get('role') as string;
    const mobile = formData.get('mobile') as string | null;
    const resume = formData.get('resume') as File | null;

    // Basic validation
    if (!email || !password || !name || !role) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    await connectDB();

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 400 }
      );
    }

    // Handle resume upload for job seekers
    let resumeUrl = undefined;
    if (role === 'jobseeker' && resume) {
      await ensureUploadsDirectory();
      
      // Generate unique filename
      const fileExt = resume.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = join(UPLOADS_DIR, fileName);

      // Write file
      const buffer = Buffer.from(await resume.arrayBuffer());
      await writeFile(filePath, new Uint8Array(buffer));

      // Store the public URL
      resumeUrl = `/tmp/uploads/${fileName}`;
    }

    // Create user
    const user = await User.create({
      email,
      password,
      name,
      role,
      mobile: mobile || undefined,
      resumeUrl,
    });

    return NextResponse.json({
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        role: user.role,
        mobile: user.mobile,
        resumeUrl: user.resumeUrl,
      },
    });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function OPTIONS(req: Request) {
  return new NextResponse(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}