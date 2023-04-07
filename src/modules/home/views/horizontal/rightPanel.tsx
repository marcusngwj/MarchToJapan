import { images } from "@/common/constants/images";
import Box from "@mui/material/Box";

export default function RightPanel() {
  return (
    <Box
      sx={{
        background: `url(${images.home.horizontalRight}) no-repeat center`,
        backgroundSize: "cover",
        height: "75vh",
      }}
    ></Box>
  );
}
