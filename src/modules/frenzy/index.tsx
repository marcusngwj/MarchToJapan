import Orientation from "@/common/components/orientation";
import VerticalView from "./views/vertical";
import HorizontalView from "./views/horizontal";
import { media } from "./data/media";
// import { media } from "./data/tempMedia";

export default function Index() {
  return (
    <Orientation v={<VerticalView media={media} />} h={<HorizontalView />} />
  );
}
