import { createCategories } from "./categories";
import { createIncomeSources } from "./income_sources";
import { createIncomes } from "./incomes";
import { createSpendings } from "./spendings";

const seed = async () => {
  await createCategories();
  await createIncomes();
  await createIncomeSources();
  await createSpendings();
};

seed();
