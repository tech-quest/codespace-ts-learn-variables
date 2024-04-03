import { PrismaClient } from '@prisma/client';
import express from 'express';

const prisma = new PrismaClient();
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(
    '<p>Hello World!!</p><p>[<a href="/records">http://localhost:3000/records</a>] にアクセスしてデータベースの値を表示してみよう！</p>'
  );
});

app.get('/records', async (req, res) => {
  const records = await prisma.category.findMany();
  console.log(records);
  res.json(records);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
