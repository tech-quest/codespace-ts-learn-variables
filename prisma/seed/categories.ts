import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createCategories = async () => {
  await prisma.category.create({
    data: {
      name: "住宅費",
      user_id: 1,
      createdAt: new Date("2024-03-01 11:00:00"),
      updatedAt: new Date("2023-03-01 11:00:00"),
    },
  });
  await prisma.category.create({
    data: {
      name: "水道光熱費",
      user_id: 1,
      createdAt: new Date("2024-03-01 11:00:00"),
      updatedAt: new Date("2023-03-01 11:00:00"),
    },
  });
  await prisma.category.create({
    data: {
      name: "通信料",
      user_id: 1,
      createdAt: new Date("2024-03-01 11:00:00"),
      updatedAt: new Date("2023-03-01 11:00:00"),
    },
  });
  await prisma.category.create({
    data: {
      name: "交際費",
      user_id: 1,
      createdAt: new Date("2024-03-01 11:00:00"),
      updatedAt: new Date("2023-03-01 11:00:00"),
    },
  });
};
