import VerticalView from "./views/vertical";
import HorizontalView from "./views/horizontal";
import Orientation from "@/common/components/orientation";
import { categorialNetExpenditure, categorialCashback } from "./data/money";
import { netExpenditureChartData } from "./data/chart";
import { SumCashback, SumNetExpenditure } from "./functions/money";

export default function Index() {
  const netExpenditure = SumNetExpenditure(categorialNetExpenditure);
  const totalCashback = SumCashback(categorialCashback);

  const totalExpenditure = netExpenditure + totalCashback;

  return (
    <Orientation
      v={
        <VerticalView
          netExpenditure={netExpenditure}
          totalExpenditure={totalExpenditure}
          totalCashback={totalCashback}
          chartData={netExpenditureChartData}
        />
      }
      h={<HorizontalView />}
    />
  );
}
