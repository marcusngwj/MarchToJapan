import Box from "@mui/material/Box";
import { images } from "@/common/constants/images";
import Headline from "./headline";

export default function Banner() {
  return (
    <Box sx={{ height: "30vh", width: "100%" }}>
      <Box
        sx={{
          background: `url(${images.home.verticalBanner}) no-repeat center`,
          backgroundSize: "cover",
          height: "100%",
          borderBottomLeftRadius: 35,
          borderBottomRightRadius: 35,
        }}
      >
        <Headline />
      </Box>
    </Box>
  );
}