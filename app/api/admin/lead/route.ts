import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

function checkAuth(request: Request) {
  const adminPassword = request.headers.get("x-admin-password");
  return adminPassword === "admin123";
}

export async function PUT(request: Request) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { id, status, notes } = body;

    if (!id) {
      return NextResponse.json({ error: "Missing lead ID" }, { status: 400 });
    }

    // Update lead in database
    const updatedLead = await prisma.lead.update({
      where: { id },
      data: {
        status: status !== undefined ? status : undefined,
        notes: notes !== undefined ? notes : undefined,
      },
    });

    return NextResponse.json({ success: true, lead: updatedLead });
  } catch (error: any) {
    console.error("❌ API Admin Lead Update Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
