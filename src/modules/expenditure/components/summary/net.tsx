import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Money } from "@/modules/expenditure/types/money";

export default function Net({ amount }: NetProp) {
  const dollars = Math.floor(amount).toLocaleString();
  const cents = (amount % 1).toFixed(2).slice(2);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ fontSize: "3rem", fontWeight: "bold" }}>
        <sup
          style={{ fontSize: "1rem", color: "grey", marginRight: "0.25rem" }}
        >
          $
        </sup>
        {dollars}
        <span style={{ fontSize: "1rem", color: "grey" }}>.{cents}</span>
      </Box>
      <Box sx={{ fontSize: "0.75rem", color: "grey", mt: "0.5rem" }}>
        Net Expenditure
        <Tooltip
          title="Net Expenditure = Total Expenditure - Cashback"
          placement="right"
        >
          <InfoOutlinedIcon sx={{ fontSize: "0.75rem", ml: "0.15rem" }} />
        </Tooltip>
      </Box>
    </Box>
  );
}

type NetProp = {
  amount: Money;
};
