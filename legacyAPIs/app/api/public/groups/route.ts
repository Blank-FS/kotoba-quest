// AWS RDS unsubscribed
/*
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/db";

// GET REQUEST
export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  try {
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
    if (type === "verb") console.log(arr);
    return NextResponse.json({ arr });
  } catch (error) {
    console.error("Error getting data:", error);
    return NextResponse.json({ error });
  }
}
  */
