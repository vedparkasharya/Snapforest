import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { bookings } from "@/lib/schema";
import { desc } from "drizzle-orm";

export async function GET() {
  try {
    const all = db.select().from(bookings).orderBy(desc(bookings.createdAt)).all();
    return NextResponse.json({ success: true, data: all });
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = db
      .insert(bookings)
      .values({
        name: body.name,
        email: body.email,
        phone: body.phone,
        roomId: body.room,
        date: body.date,
        time: body.time,
        duration: Number(body.duration) || 2,
        message: body.message || null,
      })
      .returning()
      .get();

    return NextResponse.json({ success: true, data: result }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}
