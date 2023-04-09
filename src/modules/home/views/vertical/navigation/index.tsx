import Grid from "@mui/material/Unstable_Grid2";
import NavigationButton from "../../../components/navigationButton"
import { route } from "@/common/constants/route";
import { images } from "@/common/constants/images";

export default function Navigation() {
  return (
    <Grid container spacing={0} sx={{ flexGrow: 1 }}>
      <Grid
        xs
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          pt: 2,
          pr: 1,
          pb: 2,
          pl: 2,
        }}
      >
        <NavigationButton
          name="Itinerary"
          route={route.itinerary}
          sx={{
            backgroundImage: `url(${images.home.itineraryTab})`,
            width: "100%",
            flexGrow: 1,
            mb: 2,
          }}
        />
        <NavigationButton
          name="Preparation"
          route={route.preparation}
          sx={{
            backgroundImage: `url(${images.home.preparationTab})`,
            height: "30%",
            width: "100%",
          }}
        />
      </Grid>
      <Grid
        xs
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          pt: 2,
          pr: 2,
          pb: 2,
          pl: 1,
        }}
      >
        <NavigationButton
          name="Frenzy"
          route={route.frenzy}
          sx={{
            backgroundImage: `url(${images.home.frenzyTab})`,
            height: "30%",
            width: "100%",
            mb: 2,
          }}
        />
        <NavigationButton
          name="Expenditure"
          route={route.expenditure}
          sx={{
            backgroundImage: `url(${images.home.expenditureTab})`,
            width: "100%",
            flexGrow: 1,
          }}
        />
      </Grid>
    </Grid>
  );
}
