"use server";
import prisma from "@/prisma/db";

export const getWordsByType = async (type: string) => {
  try {
    const arr = await prisma.word.findMany({
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
    return arr;
  } catch (error) {
    console.error("Error getting word data:", error);
    return [];
  }
};
