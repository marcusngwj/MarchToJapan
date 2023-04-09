import { images } from "@/common/constants/images";
import Grid from "@mui/material/Unstable_Grid2";
import DateSection from "./date";

export default function LeftPanel() {
  return (
    <Grid
      container
      direction="column"
      sx={{
        background: `url(${images.home.horizontalLeft}) no-repeat center`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <Grid xs />
      <Grid
        xs
        container
        direction="column"
        sx={{ backgroundColor: "transparent", padding: 2 }}
      >
        <Grid xs />
        <Grid
          xs
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <h1>Japan Trip</h1>
        </Grid>
        <Grid xs>
          <DateSection />
        </Grid>
      </Grid>
    </Grid>
  );
}
