import Orientation from "@/common/components/orientation";
import VerticalView from "./views/vertical";
import HorizontalView from "./views/horizontal";

export default function Index() {
  return (
    <Orientation
      v={<VerticalView />}
      h={<HorizontalView />}
    />
  );
}
