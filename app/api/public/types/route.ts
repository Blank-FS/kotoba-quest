import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/db";

// GET REQUEST
export async function GET(req: NextRequest) {
  try {
    const arr = await prisma.type.findMany();
    return NextResponse.json({ arr });
  } catch (error) {
    console.error("Error getting data:", error);
  }
}
