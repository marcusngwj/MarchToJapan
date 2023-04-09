import { Money } from "./money";
import { ChartData } from "./chart";

export type ViewProps = {
  netExpenditure: Money;
  totalExpenditure: Money;
  totalCashback: Money;
  chartData: ChartData;
};
