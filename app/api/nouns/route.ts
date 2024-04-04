import { NextResponse } from "next/server";
import prisma from "@/prisma/db";

// GET REQUEST
export async function GET() {
  try {
    const data = await prisma.noun.findMany();
    return NextResponse.json({ data });
  } catch (error) {
    console.error("Error getting nouns:", error);
  }
}

// POST REQUEST
export async function POST(request: Request) {
  const data = await request.json();
  try {
    const createdNoun = await prisma.noun.create({
      data: {
        noun: data.noun,
        meaning: data.meaning,
        kanji: data.kanji,
        category: data.category,
      },
    });
  } catch (error) {
    console.error("Error creating noun:", error);
  }
  return NextResponse.json({ data });
}

// PUT REQUEST
export async function PUT(request: Request) {
  const data = await request.json();
  try {
    const editedNoun = await prisma.noun.update({
      where: {
        id: data.id,
      },
      data: {
        noun: data.noun,
        meaning: data.meaning,
        kanji: data.kanji,
        category: data.category,
        updatedAt: new Date(),
      },
    });
  } catch (error) {
    console.error("Error editing noun:", error);
  }
  return NextResponse.json({ data });
}
