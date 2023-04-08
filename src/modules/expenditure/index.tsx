import VerticalView from "./views/vertical";
import HorizontalView from "./views/horizontal";
import Orientation from "@/common/components/orientation";
import { expenditure } from "./data/expenditure";
import { cashback } from "./data/cashback";

export default function Index() {
  return (
    <Orientation
      v={<VerticalView expenditure={expenditure} cashback={cashback} />}
      h={<HorizontalView />}
    />
  );
}
