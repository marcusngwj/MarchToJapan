import Box from "@mui/material/Box";
import Button from "@/common/components/button";
import Grid from "@mui/material/Unstable_Grid2";
import { images } from "@/common/constants/images";
import { useDispatch } from "@/common/store";
import { setNavigationIndex } from "@/common/store/slices/navigation";
import { route } from "@/common/constants/route";

export default function View() {
  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <Banner />
      <Navigation />
    </Box>
  );
}

function Banner() {
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
        <BannerHeadline />
      </Box>
    </Box>
  );
}

function BannerHeadline() {
  return (
    <Box>
      <Box
        sx={{
          // backgroundColor: "pink",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Japan Trip</h1>
        <span>19 March 2023 - 2 April 2023</span>
      </Box>
    </Box>
  );
}

function Navigation() {
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
        <Itinerary />
        <Preparation />
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
        <Frenzy />
        <Expenditure />
      </Grid>
    </Grid>
  );
}

function Itinerary() {
  const dispatch = useDispatch();
  return (
    <Button
      onclick={() => dispatch(setNavigationIndex(route.itinerary.index))}
      to={{ pathname: route.itinerary.path }}
      sx={{
        backgroundImage: `url(${images.home.itineraryTab})`,
        width: "100%",
        flexGrow: 1,
        mb: 2,
      }}
    >
      Itinerary
    </Button>
  );
}

// Insurance, packing list etc
function Preparation() {
  const dispatch = useDispatch();
  return (
    <Button
      onclick={() => dispatch(setNavigationIndex(route.preparation.index))}
      to={{ pathname: route.preparation.path }}
      sx={{
        backgroundImage: `url(${images.home.preparationTab})`,
        height: "30%",
        width: "100%",
      }}
    >
      Preparation
    </Button>
  );
}

function Frenzy() {
  const dispatch = useDispatch();
  return (
    <Button
      onclick={() => dispatch(setNavigationIndex(route.frenzy.index))}
      to={{ pathname: route.frenzy.path }}
      sx={{
        backgroundImage: `url(${images.home.frenzyTab})`,
        height: "30%",
        width: "100%",
        mb: 2,
      }}
    >
      Frenzy
    </Button>
  );
}

function Expenditure() {
  const dispatch = useDispatch();
  return (
    <Button
      onclick={() => dispatch(setNavigationIndex(route.expenditure.index))}
      to={{ pathname: route.expenditure.path }}
      sx={{
        backgroundImage: `url(${images.home.expenditureTab})`,
        width: "100%",
        flexGrow: 1,
      }}
    >
      Expenditure
    </Button>
  );
}
