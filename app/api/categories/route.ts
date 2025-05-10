import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import Category from '@/lib/models/Category';

export async function GET() {
  await connectDB();
  const categories = await Category.find();
  return NextResponse.json(categories);
}

export async function POST(req: Request) {
  await connectDB();
  const { name } = await req.json();
  const category = await Category.create({ name });
  return NextResponse.json(category, { status: 201 });
}
