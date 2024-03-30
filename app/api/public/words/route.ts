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
        where: { Group: { type: type ? type : "" } },
        orderBy: {
          meaning: "asc",
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
  }
}

// POST REQUEST
export async function POST(req: NextRequest) {
  const data = await req.json();
  try {
    const group = await prisma.group.findFirst({
      where: {
        category: data.category,
        type: data.type,
      },
      select: {
        id: true,
      },
    });
    if (group) {
      const createdWord = await prisma.word.create({
        data: {
          word: data.word,
          meaning: data.meaning,
          kanji: data.kanji,
          groupId: group.id,
        },
      });
    }
  } catch (error) {
    console.error("Error creating word:", error);
  }
  return NextResponse.json({ data });
}

// PUT REQUEST
export async function PUT(req: Request) {
  const data = await req.json();
  try {
    const group = await prisma.group.findFirst({
      where: {
        type: data.type,
        category: data.category,
      },
      select: {
        id: true,
      },
    });
    const editedWord = await prisma.word.update({
      where: {
        id: data.id,
      },
      data: {
        word: data.word,
        meaning: data.meaning,
        kanji: data.kanji,
        groupId: group?.id,
        updatedAt: new Date(),
      },
    });
  } catch (error) {
    console.error("Error editing word:", error);
  }
  return NextResponse.json({ data });
}
