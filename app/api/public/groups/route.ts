import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/db";

// GET REQUEST
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const type = searchParams ? searchParams.get("type") : null;
    let arr;
    // No Query Parameters
    if (type === null) {
      arr = await prisma.group.findMany();
    } else {
      arr = await prisma.group.findMany({
        where: { Type: { type: type ? type : "" } },
        orderBy: {
          category: "asc",
        },
        select: {
          id: true,
          Type: true,
          category: true,
        },
      });
    }
    return NextResponse.json({ arr });
  } catch (error) {
    console.error("Error getting data:", error);
    return NextResponse.json({ error });
  }
}
