import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Item from "./item";
import { images } from "@/common/constants/images";
import { route } from "@/common/constants/route";

export default function Navigation() {
  return (
    <Box>
      <Stack direction="row" spacing={2}>
        <Item title="Itinerary" route={route.itinerary} thumbnail=""/>
        <Box>Expenditure</Box>
        <Box>Preparation</Box>
        <Box>Frenzy</Box>
      </Stack>
    </Box>
  );
}
