import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

// Authentication helper using custom header
function checkAuth(request: Request) {
  const adminPassword = request.headers.get("x-admin-password");
  return adminPassword === "admin123";
}

export async function GET(request: Request) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Fetch all records, sorted by date desc
    const leads = await prisma.lead.findMany({
      orderBy: { createdAt: "desc" },
    });

    const bookings = await prisma.booking.findMany({
      orderBy: { createdAt: "desc" },
    });

    const newsletter = await prisma.newsletter.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({
      success: true,
      data: {
        leads,
        bookings,
        newsletter,
      },
    });
  } catch (error: any) {
    console.error("❌ API Admin GET Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
