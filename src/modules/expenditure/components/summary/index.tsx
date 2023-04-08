import Box from "@mui/material/Box";
import Net from "./net";
import Cashflow from "./cashflow";
import { Money } from "@/modules/expenditure/types/money";

export default function Summary({ netExpenditure, totalExpenditure, cashback }: SummaryProp) {
  return (
    <Box>
      <Net amount={netExpenditure} />
      <Cashflow expenditure={totalExpenditure} cashback={cashback} />
    </Box>
  );
}

type SummaryProp = {
  netExpenditure: Money;
  totalExpenditure: Money;
  cashback: Money;
};
