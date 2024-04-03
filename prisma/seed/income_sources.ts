import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const createIncomeSources = async () => {
  await prisma.incomeSource.create({
    data: {
      name: "本業",
      user_id: 1,
      createdAt: new Date("2022-01-25 11:00:00"),
      updatedAt: new Date("2022-01-25 11:00:00"),
    },
  });
  await prisma.incomeSource.create({
    data: {
      name: "副業",
      user_id: 1,
      createdAt: new Date("2022-01-25 11:00:00"),
      updatedAt: new Date("2022-01-25 11:00:00"),
    },
  });
};
