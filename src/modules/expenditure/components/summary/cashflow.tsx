import Box from "@mui/material/Box";
import { Money } from "@/modules/expenditure/types/money";

export default function Cashflow({expenditure, cashback}: CashflowProp) {
  const expenditureDisplay = expenditure.toFixed(2).toLocaleString();
  const cashbackDisplay = cashback.toFixed(2).toLocaleString();

  return (
    <Box sx={{display: "flex"}}>
      <Box>
        <Box>${expenditureDisplay}</Box>
        <Box>Total Expenditure</Box>
      </Box>
      <Box>
        <Box>${cashbackDisplay}</Box>
        <Box>Cashback</Box>
      </Box>
    </Box>
  )
}

type CashflowProp = {
  expenditure: Money
  cashback: Money
}