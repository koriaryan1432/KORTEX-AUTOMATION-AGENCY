import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { contactFormSchema } from "@/lib/validations";
import { sendLeadNotification } from "@/lib/mail";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate with Zod
    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { error: "Validation failed", details: validationResult.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // Save lead to database
    const newLead = await prisma.lead.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        company: data.company || null,
        service: data.service,
        budget: data.budget,
        message: data.message,
        status: "NEW",
      },
    });

    // Send email notification
    await sendLeadNotification({
      name: newLead.name,
      email: newLead.email,
      phone: newLead.phone,
      company: newLead.company,
      service: newLead.service,
      budget: newLead.budget,
      message: newLead.message,
    });

    return NextResponse.json({ success: true, leadId: newLead.id });
  } catch (error: any) {
    console.error("❌ API Contact Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
