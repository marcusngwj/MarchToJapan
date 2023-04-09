import Link from "next/link";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useDispatch } from "@/common/store";
import { setNavigationIndex } from "@/common/store/slices/navigation";
import { route, Route } from "@/common/constants/route";

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

function Item({ title, route, thumbnail }: ItemProp) {
  const dispatch = useDispatch();
  return (
    <Button
      LinkComponent={Link}
      href={route.path}
      onClick={() => dispatch(setNavigationIndex(route.index))}
      sx={{ height: "75px", backgroundColor: "pink" }}
    >
      {title}
    </Button>
  );
}

type ItemProp = {
  title: string;
  route: Route;
  thumbnail: string;
};
