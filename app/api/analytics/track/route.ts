import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { Analytics } from '@/lib/models/analytics';

export async function POST(req: Request) {
  try {
    const { userId } = await req.json();
    
    if (!userId) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      );
    }

    await connectDB();

    // Get today's date (midnight)
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Update or create analytics for today
    const analytics = await Analytics.findOneAndUpdate(
      { date: today },
      {
        $inc: { userCount: 1 },
        $push: {
          newUsers: {
            userId,
            timestamp: new Date(),
          },
        },
      },
      { upsert: true, new: true }
    );

    return NextResponse.json({ success: true, analytics });
  } catch (error) {
    console.error('Analytics tracking error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  try {
    await connectDB();

    // Get date range from query params
    const url = new URL(req.url);
    const start = url.searchParams.get('start');
    const end = url.searchParams.get('end');

    const query: any = {};
    if (start || end) {
      query.date = {};
      if (start) query.date.$gte = new Date(start);
      if (end) query.date.$lte = new Date(end);
    }

    const analytics = await Analytics.find(query)
      .sort({ date: -1 })
      .limit(30); // Last 30 days by default

    return NextResponse.json({ analytics });
  } catch (error) {
    console.error('Analytics fetch error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}