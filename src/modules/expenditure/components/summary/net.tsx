import Box from "@mui/material/Box";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Money } from "@/modules/expenditure/types/money";

export default function Net({ amount }: NetProp) {
  const dollars = Math.floor(amount).toLocaleString();
  const cents = (amount % 1).toFixed(2).slice(2);

  return (
    <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <Box sx={{ display: "flex" }}>
        <Box>$</Box>
        <Box sx={{ fontSize: 35, fontWeight: "bold" }}>{dollars}</Box>
        <Box sx={{display: "flex", flexDirection:"column", justifyContent: "flex-end" }}>.{cents}</Box>
      </Box>
      <Box>
        Net Expenditure
        <InfoOutlinedIcon />
      </Box>
    </Box>
  );
}

type NetProp = {
  amount: Money;
};
