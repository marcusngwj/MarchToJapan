import Box from "@mui/material/Box";
import Net from "./net";
import Cashflow from "./cashflow";
import { Money } from "@/modules/expenditure/types/money";

export default function Summary({ netExpenditure, totalExpenditure, totalCashback }: SummaryProp) {
  return (
    <Box>
      <Net amount={netExpenditure} />
      <Cashflow expenditure={totalExpenditure} cashback={totalCashback} />
    </Box>
  );
}

type SummaryProp = {
  netExpenditure: Money;
  totalExpenditure: Money;
  totalCashback: Money;
};
