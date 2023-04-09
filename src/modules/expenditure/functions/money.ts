import { Expenditure, Cashback } from "@/modules/expenditure/types/money";

export const SumNetExpenditure = (categorialNetExpenditure: Expenditure) => {
  return Object.values(categorialNetExpenditure).reduce(
    (sum, value) => sum + value,
    0
  );
};

export const SumCashback = (categorialCashback: Cashback) => {
  return Object.values(categorialCashback).reduce(
    (sum, value) => sum + value,
    0
  );
};
