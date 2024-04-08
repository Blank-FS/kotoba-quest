"use server";
import prisma from "@/prisma/db";

export const getGroupsByType = async (type: string) => {
  try {
    const arr = await prisma.group.findMany({
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
    return arr;
  } catch (error) {
    console.error("Error getting group data:", error);
    return [];
  }
};
