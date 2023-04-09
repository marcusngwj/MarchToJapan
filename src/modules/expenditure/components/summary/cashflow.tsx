import Box from "@mui/material/Box";
import { Money } from "@/modules/expenditure/types/money";

export default function Cashflow({ expenditure, cashback }: CashflowProp) {
  const expenditureDisplay = expenditure.toFixed(2).toLocaleString();
  const cashbackDisplay = cashback.toFixed(2).toLocaleString();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Item name="Total Expenditure" value={expenditureDisplay} />
      <Item name="Cashback" value={cashbackDisplay} />
    </Box>
  );
}

function Item({ name, value }: ItemProp) {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>${value}</Box>
      <Box sx={{ fontSize: "0.75rem", color: "grey", mt: "0.5rem" }}>
        {name}
      </Box>
    </Box>
  );
}

type CashflowProp = {
  expenditure: Money;
  cashback: Money;
};

type ItemProp = {
  name: string;
  value: string;
};
