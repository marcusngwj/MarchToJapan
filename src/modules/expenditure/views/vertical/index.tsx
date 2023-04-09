import Box from "@mui/material/Box";
import Summary from "../../components/summary";
import Donut from "../../components/donut";
import { ViewProps } from "@/modules/expenditure/types/viewProps";

export default function View({
  netExpenditure,
  totalExpenditure,
  totalCashback,
  chartData,
}: ViewProps) {
  return (
    <Box>
      <Summary
        netExpenditure={netExpenditure}
        totalExpenditure={totalExpenditure}
        totalCashback={totalCashback}
      />
      <Box sx={{height: "50vh", display: "flex", justifyContent: "center"}}>
        <Donut chartData={chartData} />
      </Box>
    </Box>
  );
}
