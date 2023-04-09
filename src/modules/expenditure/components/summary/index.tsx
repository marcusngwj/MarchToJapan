import Box from "@mui/material/Box";
import Net from "./net";
import Cashflow from "./cashflow";
import { Money } from "@/modules/expenditure/types/money";

export default function Index({
  netExpenditure,
  totalExpenditure,
  totalCashback,
}: SummaryProp) {
  return (
    <Box>
      <Net amount={netExpenditure} />
      <Box sx={{mt: 2}}>
        <Cashflow expenditure={totalExpenditure} cashback={totalCashback} />
      </Box>
    </Box>
  );
}

type SummaryProp = {
  netExpenditure: Money;
  totalExpenditure: Money;
  totalCashback: Money;
};
