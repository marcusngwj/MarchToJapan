import VerticalView from "./vertical";
import HorizontalView from "./horizontal";
import Orientation from "@/common/components/orientation";
import { packingList } from "../../data/packing";

export default function Index() {
  return (
    <Orientation
      v={<VerticalView list={packingList} />}
      h={<HorizontalView />}
    />
  );
}
