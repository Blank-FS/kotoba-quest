// AWS RDS unsubscribed, no put, delete, or post requests
/*
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/db";

// POST REQUEST
export async function POST(req: NextRequest) {
  const data = await req.json();
  try {
    const group = await prisma.group.findFirst({
      where: {
        category: data.category,
        Type: { type: data.type },
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
        Type: { type: data.type },
        category: data.category,
      },
      select: {
        id: true,
      },
    });
    if (group) {
      const editedWord = await prisma.word.update({
        where: {
          id: data.id,
        },
        data: {
          word: data.word,
          meaning: data.meaning,
          kanji: data.kanji,
          groupId: group.id,
          updatedAt: new Date(),
        },
      });
    }
  } catch (error) {
    console.error("Error editing word:", error);
  }
  return NextResponse.json({ data });
}

// PUT REQUEST
export async function DELETE(req: Request) {
  const data = await req.json();
  try {
    const deleteWord = await prisma.word.delete({
      where: {
        id: data.id,
      },
    });
  } catch (error) {
    console.error("Error deleting word:", error);
  }
  return NextResponse.json({ data });
}
  */
