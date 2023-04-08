import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import Box from "@mui/material/Box";
import { data } from "./data";
import { options } from "./options";

export default function Index() {
  Chart.register(ArcElement, Tooltip, Legend, ChartDataLabels);

  return (
    <Box sx={{ height: "100%" }}>
      <Doughnut data={data} options={options} />
    </Box>
  );
}

// Commands:
// npm i react-chartjs-2 chart.js chartjs-plugin-datalabels

// Reference:
// - Chatjs: https://www.chartjs.org/docs/latest/
// - DataLabels: https://chartjs-plugin-datalabels.netlify.app/samples/charts/doughnut.html
