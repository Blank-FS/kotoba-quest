import prisma from "./db";
import { adjectives } from "./sample-data";

async function main() {
  const groups = await prisma.group.findMany();
  const types = await prisma.type.findMany();
  for (let i = 0; i < types.length; i++) {
    var temp = groups.filter((obj) => obj.type === types[i].type);
    for (var j = 0; j < temp.length; j++) {
      await prisma.group.update({
        where: {
          id: temp[j].id,
        },
        data: {
          typeId: types[i].id,
        },
      });
    }
  }
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
