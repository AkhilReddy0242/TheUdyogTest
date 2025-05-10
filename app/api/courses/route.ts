import { NextResponse } from 'next/server';
import {connectDB} from '@/lib/db';
import Course from '@/lib/models/course'

export async function POST(req: Request) {
  await connectDB();
  const { title, duration, syllabusLink, categoryId } = await req.json();
  const course = await Course.create({ title, duration, syllabusLink, categoryId });
  return NextResponse.json(course, { status: 201 });
}

export async function GET() {
  await connectDB();
  const courses = await Course.find().populate('categoryId');
  return NextResponse.json(courses);
}