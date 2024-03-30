import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/db";
import { wordPset } from "@/lib/pset-generators/word-pset";

// GET REQUEST
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const amount = searchParams.get("amount");
    const type = searchParams.get("type");
    //Getting data
    let data;
    type
      ? (data = await prisma.word.findMany({
          where: { Group: { type: type } },
        }))
      : (data = await prisma.word.findMany());
    // Creating pset
    let pset;
    amount
      ? (pset = wordPset(parseInt(amount, 10), data))
      : (pset = wordPset(1, data));
    return NextResponse.json({ pset });
  } catch (error) {
    console.error("Error getting pset:", error);
  }
}
