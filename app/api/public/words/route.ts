import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/db";

// GET REQUEST
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const type = searchParams ? searchParams.get("type") : null;
    let arr;
    if (type === null) {
      arr = await prisma.word.findMany();
    } else {
      arr = await prisma.word.findMany({
        where: { Group: { Type: { type: type ? type : "" } } },
        orderBy: {
          word: "asc",
        },
        select: {
          id: true,
          word: true,
          meaning: true,
          kanji: true,
          groupId: true,
        },
      });
    }
    return NextResponse.json({ arr });
  } catch (error) {
    console.error("Error getting data:", error);
    return NextResponse.json({ error });
  }
}
