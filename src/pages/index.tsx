import Head from "next/head";
import Box from "@mui/material/Box";
import VerticalView from "@/views/home/vertical";
import HorizontalView from "@/views/home/horizontal";
import Orientation from "@/common/components/orientation";

export default function Index() {
  return (
    <Orientation
      v={<VerticalView />}
      h={<HorizontalView />}
    />
  );
}
