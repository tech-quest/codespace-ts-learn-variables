import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const createSpendings = async () => {
  await prisma.spending.create({
    data: {
      name: "家賃",
      user_id: 1,
      category_id: 1,
      amount: 63000,
      accrual_date: new Date("2022-01-20 11:00:00"),
      createdAt: new Date("2022-01-20 11:00:00"),
      updatedAt: new Date("2022-01-20 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "駐車場代",
      user_id: 1,
      category_id: 1,
      amount: 10000,
      accrual_date: new Date("2022-01-20 11:00:00"),
      createdAt: new Date("2022-01-20 11:00:00"),
      updatedAt: new Date("2022-01-20 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "水道代",
      user_id: 1,
      category_id: 2,
      amount: 2300,
      accrual_date: new Date("2022-01-20 11:00:00"),
      createdAt: new Date("2022-01-20 11:00:00"),
      updatedAt: new Date("2022-01-20 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "電気代",
      user_id: 1,
      category_id: 2,
      amount: 1800,
      accrual_date: new Date("2022-01-20 11:00:00"),
      createdAt: new Date("2022-01-20 11:00:00"),
      updatedAt: new Date("2022-01-20 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "ネット",
      user_id: 1,
      category_id: 3,
      amount: 4000,
      accrual_date: new Date("2022-01-15 11:00:00"),
      createdAt: new Date("2022-01-15 11:00:00"),
      updatedAt: new Date("2022-01-15 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "携帯",
      user_id: 1,
      category_id: 3,
      amount: 4500,
      accrual_date: new Date("2022-01-15 11:00:00"),
      createdAt: new Date("2022-01-15 11:00:00"),
      updatedAt: new Date("2022-01-15 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "飲み会",
      user_id: 1,
      category_id: 4,
      amount: 3000,
      accrual_date: new Date("2022-01-05 11:00:00"),
      createdAt: new Date("2022-01-05 11:00:00"),
      updatedAt: new Date("2022-01-05 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "誕生日会",
      user_id: 1,
      category_id: 4,
      amount: 5000,
      accrual_date: new Date("2022-01-15 11:00:00"),
      createdAt: new Date("2022-01-15 11:00:00"),
      updatedAt: new Date("2022-01-15 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "TDL",
      user_id: 1,
      category_id: 4,
      amount: 63000,
      accrual_date: new Date("2022-02-20 11:00:00"),
      createdAt: new Date("2022-02-20 11:00:00"),
      updatedAt: new Date("2022-02-20 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "駐車場代",
      user_id: 1,
      category_id: 1,
      amount: 10000,
      accrual_date: new Date("2022-02-20 11:00:00"),
      createdAt: new Date("2022-02-20 11:00:00"),
      updatedAt: new Date("2022-02-20 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "水道代",
      user_id: 1,
      category_id: 2,
      amount: 2400,
      accrual_date: new Date("2022-02-20 11:00:00"),
      createdAt: new Date("2022-02-20 11:00:00"),
      updatedAt: new Date("2022-02-20 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "電気代",
      user_id: 1,
      category_id: 2,
      amount: 1900,
      accrual_date: new Date("2022-02-20 11:00:00"),
      createdAt: new Date("2022-02-20 11:00:00"),
      updatedAt: new Date("2022-02-20 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "ネット",
      user_id: 1,
      category_id: 3,
      amount: 4000,
      accrual_date: new Date("2022-02-15 11:00:00"),
      createdAt: new Date("2022-02-15 11:00:00"),
      updatedAt: new Date("2022-02-15 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "携帯",
      user_id: 1,
      category_id: 3,
      amount: 4100,
      accrual_date: new Date("2022-02-15 11:00:00"),
      createdAt: new Date("2022-02-15 11:00:00"),
      updatedAt: new Date("2022-02-15 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "飲み会",
      user_id: 1,
      category_id: 4,
      amount: 3800,
      accrual_date: new Date("2022-02-05 11:00:00"),
      createdAt: new Date("2022-02-05 11:00:00"),
      updatedAt: new Date("2022-02-05 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "飲み会",
      user_id: 1,
      category_id: 4,
      amount: 5000,
      accrual_date: new Date("2022-02-15 11:00:00"),
      createdAt: new Date("2022-02-15 11:00:00"),
      updatedAt: new Date("2022-02-15 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "デート",
      user_id: 1,
      category_id: 4,
      amount: 10000,
      accrual_date: new Date("2022-02-19 11:00:00"),
      createdAt: new Date("2022-02-19 11:00:00"),
      updatedAt: new Date("2022-02-19 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "家賃",
      user_id: 1,
      category_id: 1,
      amount: 63000,
      accrual_date: new Date("2022-03-20 11:00:00"),
      createdAt: new Date("2022-03-20 11:00:00"),
      updatedAt: new Date("2022-03-20 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "駐車場代",
      user_id: 1,
      category_id: 1,
      amount: 10000,
      accrual_date: new Date("2022-03-20 11:00:00"),
      createdAt: new Date("2022-03-20 11:00:00"),
      updatedAt: new Date("2022-03-20 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "水道代",
      user_id: 1,
      category_id: 2,
      amount: 2300,
      accrual_date: new Date("2022-03-20 11:00:00"),
      createdAt: new Date("2022-03-20 11:00:00"),
      updatedAt: new Date("2022-03-20 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "電気代",
      user_id: 1,
      category_id: 2,
      amount: 1800,
      accrual_date: new Date("2022-03-20 11:00:00"),
      createdAt: new Date("2022-03-20 11:00:00"),
      updatedAt: new Date("2022-03-20 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "ネット",
      user_id: 1,
      category_id: 3,
      amount: 4000,
      accrual_date: new Date("2022-03-15 11:00:00"),
      createdAt: new Date("2022-03-15 11:00:00"),
      updatedAt: new Date("2022-03-15 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "携帯",
      user_id: 1,
      category_id: 3,
      amount: 4600,
      accrual_date: new Date("2022-03-15 11:00:00"),
      createdAt: new Date("2022-03-15 11:00:00"),
      updatedAt: new Date("2022-03-15 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "家賃",
      user_id: 1,
      category_id: 1,
      amount: 63000,
      accrual_date: new Date("2022-04-20 11:00:00"),
      createdAt: new Date("2022-04-20 11:00:00"),
      updatedAt: new Date("2022-04-20 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "駐車場代",
      user_id: 1,
      category_id: 1,
      amount: 10000,
      accrual_date: new Date("2022-04-20 11:00:00"),
      createdAt: new Date("2022-04-20 11:00:00"),
      updatedAt: new Date("2022-04-20 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "水道代",
      user_id: 1,
      category_id: 2,
      amount: 2800,
      accrual_date: new Date("2022-04-20 11:00:00"),
      createdAt: new Date("2022-04-20 11:00:00"),
      updatedAt: new Date("2022-04-20 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "電気代",
      user_id: 1,
      category_id: 2,
      amount: 1900,
      accrual_date: new Date("2022-04-20 11:00:00"),
      createdAt: new Date("2022-04-20 11:00:00"),
      updatedAt: new Date("2022-04-20 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "ネット",
      user_id: 1,
      category_id: 3,
      amount: 4000,
      accrual_date: new Date("2022-04-15 11:00:00"),
      createdAt: new Date("2022-04-15 11:00:00"),
      updatedAt: new Date("2022-04-15 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "携帯",
      user_id: 1,
      category_id: 3,
      amount: 3800,
      accrual_date: new Date("2022-04-15 11:00:00"),
      createdAt: new Date("2022-04-15 11:00:00"),
      updatedAt: new Date("2022-04-15 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "飲み会",
      user_id: 1,
      category_id: 4,
      amount: 3000,
      accrual_date: new Date("2022-04-05 11:00:00"),
      createdAt: new Date("2022-04-05 11:00:00"),
      updatedAt: new Date("2022-04-05 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "家賃",
      user_id: 1,
      category_id: 1,
      amount: 63000,
      accrual_date: new Date("2022-05-20 11:00:00"),
      createdAt: new Date("2022-05-20 11:00:00"),
      updatedAt: new Date("2022-05-20 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "駐車場代",
      user_id: 1,
      category_id: 1,
      amount: 10000,
      accrual_date: new Date("2022-05-20 11:00:00"),
      createdAt: new Date("2022-05-20 11:00:00"),
      updatedAt: new Date("2022-05-20 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "水道代",
      user_id: 1,
      category_id: 2,
      amount: 2000,
      accrual_date: new Date("2022-05-20 11:00:00"),
      createdAt: new Date("2022-05-20 11:00:00"),
      updatedAt: new Date("2022-05-20 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "電気代",
      user_id: 1,
      category_id: 2,
      amount: 1800,
      accrual_date: new Date("2022-05-20 11:00:00"),
      createdAt: new Date("2022-05-20 11:00:00"),
      updatedAt: new Date("2022-05-20 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "ネット",
      user_id: 1,
      category_id: 3,
      amount: 4000,
      accrual_date: new Date("2022-05-15 11:00:00"),
      createdAt: new Date("2022-05-15 11:00:00"),
      updatedAt: new Date("2022-05-15 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "携帯",
      user_id: 1,
      category_id: 3,
      amount: 4000,
      accrual_date: new Date("2022-05-15 11:00:00"),
      createdAt: new Date("2022-05-15 11:00:00"),
      updatedAt: new Date("2022-05-15 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "お花見",
      user_id: 1,
      category_id: 4,
      amount: 3500,
      accrual_date: new Date("2022-05-05 11:00:00"),
      createdAt: new Date("2022-05-05 11:00:00"),
      updatedAt: new Date("2022-05-05 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "家賃",
      user_id: 1,
      category_id: 1,
      amount: 63000,
      accrual_date: new Date("2022-06-20 11:00:00"),
      createdAt: new Date("2022-06-20 11:00:00"),
      updatedAt: new Date("2022-06-20 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "駐車場代",
      user_id: 1,
      category_id: 1,
      amount: 10000,
      accrual_date: new Date("2022-06-20 11:00:00"),
      createdAt: new Date("2022-06-20 11:00:00"),
      updatedAt: new Date("2022-06-20 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "水道代",
      user_id: 1,
      category_id: 2,
      amount: 2100,
      accrual_date: new Date("2022-06-20 11:00:00"),
      createdAt: new Date("2022-06-20 11:00:00"),
      updatedAt: new Date("2022-06-20 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "電気代",
      user_id: 1,
      category_id: 2,
      amount: 2300,
      accrual_date: new Date("2022-06-20 11:00:00"),
      createdAt: new Date("2022-06-20 11:00:00"),
      updatedAt: new Date("2022-06-20 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "ネット",
      user_id: 1,
      category_id: 3,
      amount: 4000,
      accrual_date: new Date("2022-06-15 11:00:00"),
      createdAt: new Date("2022-06-15 11:00:00"),
      updatedAt: new Date("2022-06-15 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "携帯",
      user_id: 1,
      category_id: 3,
      amount: 4600,
      accrual_date: new Date("2022-06-15 11:00:00"),
      createdAt: new Date("2022-06-15 11:00:00"),
      updatedAt: new Date("2022-06-15 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "飲み会",
      user_id: 1,
      category_id: 4,
      amount: 8000,
      accrual_date: new Date("2022-06-05 11:00:00"),
      createdAt: new Date("2022-06-05 11:00:00"),
      updatedAt: new Date("2022-06-05 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "家賃",
      user_id: 1,
      category_id: 1,
      amount: 63000,
      accrual_date: new Date("2022-07-20 11:00:00"),
      createdAt: new Date("2022-07-20 11:00:00"),
      updatedAt: new Date("2022-07-20 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "駐車場代",
      user_id: 1,
      category_id: 1,
      amount: 10000,
      accrual_date: new Date("2022-07-20 11:00:00"),
      createdAt: new Date("2022-07-20 11:00:00"),
      updatedAt: new Date("2022-07-20 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "水道代",
      user_id: 1,
      category_id: 2,
      amount: 2100,
      accrual_date: new Date("2022-07-20 11:00:00"),
      createdAt: new Date("2022-07-20 11:00:00"),
      updatedAt: new Date("2022-07-20 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "電気代",
      user_id: 1,
      category_id: 2,
      amount: 1600,
      accrual_date: new Date("2022-07-20 11:00:00"),
      createdAt: new Date("2022-07-20 11:00:00"),
      updatedAt: new Date("2022-07-20 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "ネット",
      user_id: 1,
      category_id: 3,
      amount: 4000,
      accrual_date: new Date("2022-07-15 11:00:00"),
      createdAt: new Date("2022-07-15 11:00:00"),
      updatedAt: new Date("2022-07-15 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "携帯",
      user_id: 1,
      category_id: 3,
      amount: 4500,
      accrual_date: new Date("2022-07-15 11:00:00"),
      createdAt: new Date("2022-07-15 11:00:00"),
      updatedAt: new Date("2022-07-15 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "家賃",
      user_id: 1,
      category_id: 1,
      amount: 63000,
      accrual_date: new Date("2022-08-20 11:00:00"),
      createdAt: new Date("2022-08-20 11:00:00"),
      updatedAt: new Date("2022-08-20 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "駐車場代",
      user_id: 1,
      category_id: 1,
      amount: 10000,
      accrual_date: new Date("2022-08-20 11:00:00"),
      createdAt: new Date("2022-08-20 11:00:00"),
      updatedAt: new Date("2022-08-20 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "水道代",
      user_id: 1,
      category_id: 2,
      amount: 2100,
      accrual_date: new Date("2022-08-20 11:00:00"),
      createdAt: new Date("2022-08-20 11:00:00"),
      updatedAt: new Date("2022-08-20 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "電気代",
      user_id: 1,
      category_id: 2,
      amount: 2300,
      accrual_date: new Date("2022-08-20 11:00:00"),
      createdAt: new Date("2022-08-20 11:00:00"),
      updatedAt: new Date("2022-08-20 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "ネット",
      user_id: 1,
      category_id: 3,
      amount: 4000,
      accrual_date: new Date("2022-08-15 11:00:00"),
      createdAt: new Date("2022-08-15 11:00:00"),
      updatedAt: new Date("2022-08-15 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "携帯",
      user_id: 1,
      category_id: 3,
      amount: 4600,
      accrual_date: new Date("2022-08-15 11:00:00"),
      createdAt: new Date("2022-08-15 11:00:00"),
      updatedAt: new Date("2022-08-15 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "飲み会",
      user_id: 1,
      category_id: 4,
      amount: 3000,
      accrual_date: new Date("2022-08-05 11:00:00"),
      createdAt: new Date("2022-08-05 11:00:00"),
      updatedAt: new Date("2022-08-05 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "キャンプ",
      user_id: 1,
      category_id: 4,
      amount: 13000,
      accrual_date: new Date("2022-08-15 11:00:00"),
      createdAt: new Date("2022-08-15 11:00:00"),
      updatedAt: new Date("2022-08-15 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "家賃",
      user_id: 1,
      category_id: 1,
      amount: 63000,
      accrual_date: new Date("2022-09-20 11:00:00"),
      createdAt: new Date("2022-09-20 11:00:00"),
      updatedAt: new Date("2022-09-20 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "駐車場代",
      user_id: 1,
      category_id: 1,
      amount: 10000,
      accrual_date: new Date("2022-09-20 11:00:00"),
      createdAt: new Date("2022-09-20 11:00:00"),
      updatedAt: new Date("2022-09-20 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "水道代",
      user_id: 1,
      category_id: 2,
      amount: 2300,
      accrual_date: new Date("2022-09-20 11:00:00"),
      createdAt: new Date("2022-09-20 11:00:00"),
      updatedAt: new Date("2022-09-20 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "電気代",
      user_id: 1,
      category_id: 2,
      amount: 1800,
      accrual_date: new Date("2022-09-20 11:00:00"),
      createdAt: new Date("2022-09-20 11:00:00"),
      updatedAt: new Date("2022-09-20 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "ネット",
      user_id: 1,
      category_id: 3,
      amount: 4000,
      accrual_date: new Date("2022-09-15 11:00:00"),
      createdAt: new Date("2022-09-15 11:00:00"),
      updatedAt: new Date("2022-09-15 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "携帯",
      user_id: 1,
      category_id: 3,
      amount: 4500,
      accrual_date: new Date("2022-09-15 11:00:00"),
      createdAt: new Date("2022-09-15 11:00:00"),
      updatedAt: new Date("2022-09-15 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "飲み会",
      user_id: 1,
      category_id: 4,
      amount: 3000,
      accrual_date: new Date("2022-09-05 11:00:00"),
      createdAt: new Date("2022-09-05 11:00:00"),
      updatedAt: new Date("2022-09-05 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "BBQ",
      user_id: 1,
      category_id: 4,
      amount: 5000,
      accrual_date: new Date("2022-09-15 11:00:00"),
      createdAt: new Date("2022-09-15 11:00:00"),
      updatedAt: new Date("2022-09-15 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "家賃",
      user_id: 1,
      category_id: 1,
      amount: 63000,
      accrual_date: new Date("2022-10-20 11:00:00"),
      createdAt: new Date("2022-10-20 11:00:00"),
      updatedAt: new Date("2022-10-20 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "駐車場代",
      user_id: 1,
      category_id: 1,
      amount: 10000,
      accrual_date: new Date("2022-10-20 11:00:00"),
      createdAt: new Date("2022-10-20 11:00:00"),
      updatedAt: new Date("2022-10-20 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "水道代",
      user_id: 1,
      category_id: 2,
      amount: 2200,
      accrual_date: new Date("2022-10-20 11:00:00"),
      createdAt: new Date("2022-10-20 11:00:00"),
      updatedAt: new Date("2022-10-20 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "電気代",
      user_id: 1,
      category_id: 2,
      amount: 2300,
      accrual_date: new Date("2022-10-20 11:00:00"),
      createdAt: new Date("2022-10-20 11:00:00"),
      updatedAt: new Date("2022-10-20 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "ネット",
      user_id: 1,
      category_id: 3,
      amount: 4000,
      accrual_date: new Date("2022-10-15 11:00:00"),
      createdAt: new Date("2022-10-15 11:00:00"),
      updatedAt: new Date("2022-10-15 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "携帯",
      user_id: 1,
      category_id: 3,
      amount: 4400,
      accrual_date: new Date("2022-10-15 11:00:00"),
      createdAt: new Date("2022-10-15 11:00:00"),
      updatedAt: new Date("2022-10-15 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "飲み会",
      user_id: 1,
      category_id: 4,
      amount: 3000,
      accrual_date: new Date("2022-10-05 11:00:00"),
      createdAt: new Date("2022-10-05 11:00:00"),
      updatedAt: new Date("2022-10-05 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "家賃",
      user_id: 1,
      category_id: 1,
      amount: 63000,
      accrual_date: new Date("2022-11-20 11:00:00"),
      createdAt: new Date("2022-11-20 11:00:00"),
      updatedAt: new Date("2022-11-20 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "駐車場代",
      user_id: 1,
      category_id: 1,
      amount: 10000,
      accrual_date: new Date("2022-11-20 11:00:00"),
      createdAt: new Date("2022-11-20 11:00:00"),
      updatedAt: new Date("2022-11-20 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "水道代",
      user_id: 1,
      category_id: 2,
      amount: 2300,
      accrual_date: new Date("2022-11-20 11:00:00"),
      createdAt: new Date("2022-11-20 11:00:00"),
      updatedAt: new Date("2022-11-20 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "電気代",
      user_id: 1,
      category_id: 2,
      amount: 2400,
      accrual_date: new Date("2022-11-20 11:00:00"),
      createdAt: new Date("2022-11-20 11:00:00"),
      updatedAt: new Date("2022-11-20 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "ネット",
      user_id: 1,
      category_id: 3,
      amount: 4000,
      accrual_date: new Date("2022-11-15 11:00:00"),
      createdAt: new Date("2022-11-15 11:00:00"),
      updatedAt: new Date("2022-11-15 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "携帯",
      user_id: 1,
      category_id: 3,
      amount: 4500,
      accrual_date: new Date("2022-11-15 11:00:00"),
      createdAt: new Date("2022-11-15 11:00:00"),
      updatedAt: new Date("2022-11-15 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "飲み会",
      user_id: 1,
      category_id: 4,
      amount: 6300,
      accrual_date: new Date("2022-11-05 11:00:00"),
      createdAt: new Date("2022-11-05 11:00:00"),
      updatedAt: new Date("2022-11-05 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "家賃",
      user_id: 1,
      category_id: 1,
      amount: 63000,
      accrual_date: new Date("2022-12-20 11:00:00"),
      createdAt: new Date("2022-12-20 11:00:00"),
      updatedAt: new Date("2022-12-20 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "駐車場代",
      user_id: 1,
      category_id: 1,
      amount: 10000,
      accrual_date: new Date("2022-12-20 11:00:00"),
      createdAt: new Date("2022-12-20 11:00:00"),
      updatedAt: new Date("2022-12-20 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "水道代",
      user_id: 1,
      category_id: 2,
      amount: 2300,
      accrual_date: new Date("2022-12-20 11:00:00"),
      createdAt: new Date("2022-12-20 11:00:00"),
      updatedAt: new Date("2022-12-20 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "電気代",
      user_id: 1,
      category_id: 2,
      amount: 1800,
      accrual_date: new Date("2022-12-20 11:00:00"),
      createdAt: new Date("2022-12-20 11:00:00"),
      updatedAt: new Date("2022-12-20 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "ネット",
      user_id: 1,
      category_id: 3,
      amount: 4000,
      accrual_date: new Date("2022-12-15 11:00:00"),
      createdAt: new Date("2022-12-15 11:00:00"),
      updatedAt: new Date("2022-12-15 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "携帯",
      user_id: 1,
      category_id: 3,
      amount: 4500,
      accrual_date: new Date("2022-12-15 11:00:00"),
      createdAt: new Date("2022-12-15 11:00:00"),
      updatedAt: new Date("2022-12-15 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "飲み会",
      user_id: 1,
      category_id: 4,
      amount: 3000,
      accrual_date: new Date("2022-12-05 11:00:00"),
      createdAt: new Date("2022-12-05 11:00:00"),
      updatedAt: new Date("2022-12-05 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "飲み会",
      user_id: 1,
      category_id: 4,
      amount: 5000,
      accrual_date: new Date("2022-12-16 11:00:00"),
      createdAt: new Date("2022-12-16 11:00:00"),
      updatedAt: new Date("2022-12-16 11:00:00"),
    },
  });
  await prisma.spending.create({
    data: {
      name: "忘年会",
      user_id: 1,
      category_id: 4,
      amount: 7000,
      accrual_date: new Date("2022-12-27 11:00:00"),
      createdAt: new Date("2022-12-27 11:00:00"),
      updatedAt: new Date("2022-12-27 11:00:00"),
    },
  });
};
