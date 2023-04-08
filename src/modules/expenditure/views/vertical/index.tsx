import Box from "@mui/material/Box";
import { ViewProps } from "@/modules/expenditure/types/viewProps";
import Summary from "../../components/summary";

export default function View({ expenditure, cashback }: ViewProps) {
  const netExpenditure = Object.values(expenditure).reduce(
    (sum, value) => sum + value,
    0
  );
  const sumCashback = Object.values(cashback).reduce(
    (sum, value) => sum + value,
    0
  );

  const totalExpenditure = netExpenditure + sumCashback;

  return (
    <Box>
      <Summary
        netExpenditure={netExpenditure}
        totalExpenditure={totalExpenditure}
        cashback={sumCashback}
      />
    </Box>
  );
}
