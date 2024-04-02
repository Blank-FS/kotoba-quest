import prisma from "./db";
import { verbs } from "./sample-data";

async function main() {
  for (const verb of verbs) {
    const createdVerb = await prisma.word.create({ data: verb });
  }
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
