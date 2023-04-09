import { images } from "@/common/constants/images";
import Box from "@mui/material/Box";
import Navigation from "./navigation";

export default function Index() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Box
        sx={{
          background: `url(${images.home.horizontalRight}) no-repeat center`,
          backgroundSize: "cover",
          height: "75vh",
        }}
      />
      <Navigation />
    </Box>
  );
}
