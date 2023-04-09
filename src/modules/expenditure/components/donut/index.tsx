import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { ChartData } from "../../types/chart";
import { options } from "./options";
import { getData } from "./data";

export default function Index({ chartData }: DonutProp) {
  Chart.register(ArcElement, Tooltip, Legend, ChartDataLabels);

  const data = getData(chartData);

  return <Doughnut data={data} options={options} />;
}

type DonutProp = {
  chartData: ChartData;
};
