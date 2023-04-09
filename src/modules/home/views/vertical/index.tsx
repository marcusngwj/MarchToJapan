import Box from "@mui/material/Box";
import Banner from "./banner";
import Navigation from "./navigation";

export default function Index() {
  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <Banner />
      <Navigation />
    </Box>
  );
}
