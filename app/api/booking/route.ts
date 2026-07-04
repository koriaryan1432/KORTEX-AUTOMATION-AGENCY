import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { bookingFormSchema } from "@/lib/validations";
import { sendBookingNotification } from "@/lib/mail";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate with Zod
    const validationResult = bookingFormSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { error: "Validation failed", details: validationResult.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // Convert date string to Date object
    const bookingDate = new Date(data.preferredDate);
    if (isNaN(bookingDate.getTime())) {
      return NextResponse.json({ error: "Invalid date format" }, { status: 400 });
    }

    // Save booking to database
    const newBooking = await prisma.booking.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        preferredDate: bookingDate,
        preferredTime: data.preferredTime,
        businessType: data.businessType,
        message: data.message || null,
        status: "PENDING",
      },
    });

    // Send email notification
    await sendBookingNotification({
      name: newBooking.name,
      email: newBooking.email,
      phone: newBooking.phone,
      preferredDate: data.preferredDate,
      preferredTime: newBooking.preferredTime,
      businessType: newBooking.businessType,
      message: newBooking.message,
    });

    return NextResponse.json({ success: true, bookingId: newBooking.id });
  } catch (error: any) {
    console.error("❌ API Booking Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
