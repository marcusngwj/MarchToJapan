import Box from "@mui/material/Box";
import Summary from "../../components/summary";
import Donut from "../../components/donut";
import { ViewProps } from "@/modules/expenditure/types/viewProps";

export default function Index({
  netExpenditure,
  totalExpenditure,
  totalCashback,
  chartData,
}: ViewProps) {
  return (
    <>
      <Box sx={{ mt: "2.5vh", mb: "5vh" }}>
        <Summary
          netExpenditure={netExpenditure}
          totalExpenditure={totalExpenditure}
          totalCashback={totalCashback}
        />
      </Box>
      <Box sx={{ height: "50vh", display: "flex", justifyContent: "center" }}>
        <Donut chartData={chartData} />
      </Box>
    </>
  );
}
