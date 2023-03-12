import { ReactElement } from "react";
import Box from "@mui/material/Box";

export default function Orientation({
  v: verticalView,
  h: horizontalView,
}: OrientationProp) {
  return (
    <>
      <Box sx={{ display: { xs: "block", md: "none" } }}>{verticalView}</Box>
      <Box sx={{ display: { xs: "none", md: "block" } }}>{horizontalView}</Box>
    </>
  );
}

type OrientationProp = {
  v: ReactElement;
  h: ReactElement;
};
