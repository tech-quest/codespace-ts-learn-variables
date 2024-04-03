import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const createIncomes = async () => {
  await prisma.income.create({
    data: {
      user_id: 1,
      income_source_id: 1,
      amount: 300000,
      accrual_date: new Date("2022-01-25 11:00:00"),
      createdAt: new Date("2022-01-25 11:00:00"),
      updatedAt: new Date("2022-01-25 11:00:00"),
    },
  });
  await prisma.income.create({
    data: {
      user_id: 1,
      income_source_id: 2,
      amount: 50000,
      accrual_date: new Date("2022-01-28 11:00:00"),
      createdAt: new Date("2022-01-28 11:00:00"),
      updatedAt: new Date("2022-01-28 11:00:00"),
    },
  });
  await prisma.income.create({
    data: {
      user_id: 1,
      income_source_id: 1,
      amount: 300000,
      accrual_date: new Date("2022-02-25 11:00:00"),
      createdAt: new Date("2022-02-25 11:00:00"),
      updatedAt: new Date("2022-02-25 11:00:00"),
    },
  });
  await prisma.income.create({
    data: {
      user_id: 1,
      income_source_id: 2,
      amount: 48000,
      accrual_date: new Date("2022-02-28 11:00:00"),
      createdAt: new Date("2022-02-28 11:00:00"),
      updatedAt: new Date("2022-02-28 11:00:00"),
    },
  });
  await prisma.income.create({
    data: {
      user_id: 1,
      income_source_id: 1,
      amount: 300000,
      accrual_date: new Date("2022-03-25 11:00:00"),
      createdAt: new Date("2022-03-25 11:00:00"),
      updatedAt: new Date("2022-03-25 11:00:00"),
    },
  });
  await prisma.income.create({
    data: {
      user_id: 1,
      income_source_id: 2,
      amount: 53000,
      accrual_date: new Date("2022-03-28 11:00:00"),
      createdAt: new Date("2022-03-28 11:00:00"),
      updatedAt: new Date("2022-03-28 11:00:00"),
    },
  });
  await prisma.income.create({
    data: {
      user_id: 1,
      income_source_id: 1,
      amount: 300000,
      accrual_date: new Date("2022-04-25 11:00:00"),
      createdAt: new Date("2022-04-25 11:00:00"),
      updatedAt: new Date("2022-04-25 11:00:00"),
    },
  });
  await prisma.income.create({
    data: {
      user_id: 1,
      income_source_id: 2,
      amount: 55000,
      accrual_date: new Date("2022-04-28 11:00:00"),
      createdAt: new Date("2022-04-28 11:00:00"),
      updatedAt: new Date("2022-04-28 11:00:00"),
    },
  });
  await prisma.income.create({
    data: {
      user_id: 1,
      income_source_id: 1,
      amount: 300000,
      accrual_date: new Date("2022-05-25 11:00:00"),
      createdAt: new Date("2022-05-25 11:00:00"),
      updatedAt: new Date("2022-05-25 11:00:00"),
    },
  });
  await prisma.income.create({
    data: {
      user_id: 1,
      income_source_id: 2,
      amount: 50000,
      accrual_date: new Date("2022-05-28 11:00:00"),
      createdAt: new Date("2022-05-28 11:00:00"),
      updatedAt: new Date("2022-05-28 11:00:00"),
    },
  });
  await prisma.income.create({
    data: {
      user_id: 1,
      income_source_id: 1,
      amount: 300000,
      accrual_date: new Date("2022-06-25 11:00:00"),
      createdAt: new Date("2022-06-25 11:00:00"),
      updatedAt: new Date("2022-06-25 11:00:00"),
    },
  });
  await prisma.income.create({
    data: {
      user_id: 1,
      income_source_id: 2,
      amount: 40000,
      accrual_date: new Date("2022-06-28 11:00:00"),
      createdAt: new Date("2022-06-28 11:00:00"),
      updatedAt: new Date("2022-06-28 11:00:00"),
    },
  });
  await prisma.income.create({
    data: {
      user_id: 1,
      income_source_id: 1,
      amount: 300000,
      accrual_date: new Date("2022-07-25 11:00:00"),
      createdAt: new Date("2022-07-25 11:00:00"),
      updatedAt: new Date("2022-07-25 11:00:00"),
    },
  });
  await prisma.income.create({
    data: {
      user_id: 1,
      income_source_id: 2,
      amount: 43000,
      accrual_date: new Date("2022-07-28 11:00:00"),
      createdAt: new Date("2022-07-28 11:00:00"),
      updatedAt: new Date("2022-07-28 11:00:00"),
    },
  });
  await prisma.income.create({
    data: {
      user_id: 1,
      income_source_id: 1,
      amount: 300000,
      accrual_date: new Date("2022-08-25 11:00:00"),
      createdAt: new Date("2022-08-25 11:00:00"),
      updatedAt: new Date("2022-08-25 11:00:00"),
    },
  });
  await prisma.income.create({
    data: {
      user_id: 1,
      income_source_id: 2,
      amount: 56000,
      accrual_date: new Date("2022-08-28 11:00:00"),
      createdAt: new Date("2022-08-28 11:00:00"),
      updatedAt: new Date("2022-08-28 11:00:00"),
    },
  });
  await prisma.income.create({
    data: {
      user_id: 1,
      income_source_id: 1,
      amount: 300000,
      accrual_date: new Date("2022-09-25 11:00:00"),
      createdAt: new Date("2022-09-25 11:00:00"),
      updatedAt: new Date("2022-09-25 11:00:00"),
    },
  });
  await prisma.income.create({
    data: {
      user_id: 1,
      income_source_id: 2,
      amount: 38000,
      accrual_date: new Date("2022-09-28 11:00:00"),
      createdAt: new Date("2022-09-28 11:00:00"),
      updatedAt: new Date("2022-09-28 11:00:00"),
    },
  });
  await prisma.income.create({
    data: {
      user_id: 1,
      income_source_id: 1,
      amount: 300000,
      accrual_date: new Date("2022-10-25 11:00:00"),
      createdAt: new Date("2022-10-25 11:00:00"),
      updatedAt: new Date("2022-10-25 11:00:00"),
    },
  });
  await prisma.income.create({
    data: {
      user_id: 1,
      income_source_id: 2,
      amount: 66000,
      accrual_date: new Date("2022-10-28 11:00:00"),
      createdAt: new Date("2022-10-28 11:00:00"),
      updatedAt: new Date("2022-10-28 11:00:00"),
    },
  });
  await prisma.income.create({
    data: {
      user_id: 1,
      income_source_id: 1,
      amount: 300000,
      accrual_date: new Date("2022-11-25 11:00:00"),
      createdAt: new Date("2022-11-25 11:00:00"),
      updatedAt: new Date("2022-11-25 11:00:00"),
    },
  });
  await prisma.income.create({
    data: {
      user_id: 1,
      income_source_id: 2,
      amount: 54000,
      accrual_date: new Date("2022-11-28 11:00:00"),
      createdAt: new Date("2022-11-28 11:00:00"),
      updatedAt: new Date("2022-11-28 11:00:00"),
    },
  });
  await prisma.income.create({
    data: {
      user_id: 1,
      income_source_id: 1,
      amount: 300000,
      accrual_date: new Date("2022-12-25 11:00:00"),
      createdAt: new Date("2022-12-25 11:00:00"),
      updatedAt: new Date("2022-12-25 11:00:00"),
    },
  });
  await prisma.income.create({
    data: {
      user_id: 1,
      income_source_id: 2,
      amount: 50000,
      accrual_date: new Date("2022-12-28 11:00:00"),
      createdAt: new Date("2022-12-28 11:00:00"),
      updatedAt: new Date("2022-12-28 11:00:00"),
    },
  });
};
