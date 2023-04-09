import { ChartData as InputData } from "../../types/chart";
import { ChartData, Point, BubbleDataPoint } from "chart.js";

export const getData = (input: InputData) => {
  const labels: string[] = []
  const values: number[] = []
  const colors: string[] = []

  input.forEach((item) => {
    labels.push(item.name);
    values.push(item.value);
    colors.push(item.color);
  });

  const data: ChartData<"doughnut", (number | [number, number] | Point | BubbleDataPoint | null)[], unknown> = {
    labels: [...labels],
    datasets: [
      {
        data: [...values],
        backgroundColor: [...colors],
      },
    ],
  };

  return data;
};
