import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { newsletterSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate with Zod
    const validationResult = newsletterSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { error: "Please provide a valid email address.", details: validationResult.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { email } = validationResult.data;

    // Check if email already exists
    const existing = await prisma.newsletter.findUnique({
      where: { email },
    });

    if (existing) {
      return NextResponse.json(
        { error: "This email is already subscribed to our newsletter." },
        { status: 400 }
      );
    }

    // Save to database
    const subscription = await prisma.newsletter.create({
      data: { email },
    });

    return NextResponse.json({ success: true, id: subscription.id });
  } catch (error: any) {
    console.error("❌ API Newsletter Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
