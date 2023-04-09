import VerticalView from "./vertical";
import HorizontalView from "./horizontal";
import Orientation from "@/common/components/orientation";

export default function Index() {
  return <Orientation v={<VerticalView />} h={<HorizontalView />} />;
}
