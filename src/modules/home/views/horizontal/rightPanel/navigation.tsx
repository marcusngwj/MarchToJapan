import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import NavigationButton from "../../../components/navigationButton";
import { route, Route } from "@/common/constants/route";
import { images } from "@/common/constants/images";

export default function Navigation() {
  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent="space-evenly"
      flexGrow={1}
      paddingX={2}
      paddingBottom={3}
    >
      <Item
        title="Itinerary"
        route={route.itinerary}
        thumbnail={images.home.itineraryTab}
      />
      <Item
        title="Expenditure"
        route={route.expenditure}
        thumbnail={images.home.expenditureTab}
      />
      <Item
        title="Preparation"
        route={route.preparation}
        thumbnail={images.home.preparationTab}
      />
      <Item
        title="Frenzy"
        route={route.frenzy}
        thumbnail={images.home.frenzyTab}
      />
    </Stack>
  );
}

function Item({ title, route, thumbnail }: ItemProp) {
  return (
    <NavigationButton
      name={title}
      route={route}
      sx={{ backgroundImage: `url(${thumbnail})`, flexGrow: 1 }}
    />
  );
}

type ItemProp = {
  title: string;
  route: Route;
  thumbnail: string;
};
