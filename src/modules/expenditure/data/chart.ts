import { ChartData } from "@/modules/expenditure/types/chart";
import { categorialNetExpenditure } from "./money";

export const netExpenditureChartData: ChartData = [
  {
    name: "Flight",
    value: categorialNetExpenditure.flight,
    color: "rgb(255, 99, 132)",
  },
  {
    name: "Accommodation",
    value: categorialNetExpenditure.accommodation,
    color: "rgb(54, 162, 235)",
  },
  {
    name: "Insurance",
    value: categorialNetExpenditure.insurance,
    color: "rgb(255, 206, 86)",
  },
  {
    name: "Travel",
    value: categorialNetExpenditure.travel,
    color: "rgb(75, 192, 192)",
  },
  {
    name: "Food",
    value: categorialNetExpenditure.food,
    color: "rgb(153, 102, 255)",
  },
  {
    name: "Entertainment",
    value: categorialNetExpenditure.entertainment,
    color: "rgb(255, 159, 64)",
  },
  {
    name: "Others",
    value: categorialNetExpenditure.others,
    color: "rgb(135, 206, 250)",
  },
];
