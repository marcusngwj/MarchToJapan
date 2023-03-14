import { MouseEventHandler } from "react";
import Fab from "@mui/material/Fab";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

export default function GuideButton({ onClick }: GuideButtonProp) {
  return (
    <Fab sx={{ position: "absolute", top: -25, right: 25 }} onClick={onClick}>
      <MapOutlinedIcon />
    </Fab>
  );
}

type GuideButtonProp = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};
