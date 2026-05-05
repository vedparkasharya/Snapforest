import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { contacts } from "@/lib/schema";

export async function GET() {
  try {
    const all = db.select().from(contacts).all();
    return NextResponse.json({ success: true, data: all });
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = db
      .insert(contacts)
      .values({
        name: body.name,
        email: body.email,
        subject: body.subject,
        message: body.message,
      })
      .returning()
      .get();

    return NextResponse.json({ success: true, data: result }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}
