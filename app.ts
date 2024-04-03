import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/records", async (req, res) => {
  const records = await prisma.category.findMany();
  console.log(records);
  res.json(records);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
