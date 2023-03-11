import Fab from "@mui/material/Fab";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

export default function Guide() {
  return (
    <Fab sx={{ position: "absolute", top: -25, right: 25 }}>
      <MapOutlinedIcon />
    </Fab>
  );
}
