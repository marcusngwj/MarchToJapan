import Image from "next/image";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Timestamp from "./timestamp";
import type { ItineraryItem } from "@/modules/itinerary/types/itineraryProps";
import { route } from "@/common/constants/route";

import Link from "next/link";

export default function Item({ item, day }: ItemProp) {
  return (
    <Box sx={{ display: "flex", flexGrow: 1 }}>
      <Timestamp time={item.time} />
      <Paper elevation={2} sx={{ margin: [1.5, 0, 1.5, 0.5], flexGrow: 1 }}>
        <Content
          day={day}
          item={item}
          canClick={item.activity ? true : false}
        />
      </Paper>
    </Box>
  );
}

function Content({ day, item, canClick }: ContentProp) {
  return canClick ? (
    <Box
      sx={{ display: "flex" }}
      component={Link}
      href={`${route.itinerary.path}?day=${day}&time=${item.time}`}
    >
      <Image src={item.thumbnail} alt="" width={100} height={100} />
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          alignItems: "center",
          justifyContent: "space-between",
          ml: 1,
          mr: 1,
        }}
      >
        <span>{item.name}</span>
        <NavigateNextIcon />
      </Box>
    </Box>
  ) : (
    <Box sx={{ display: "flex" }}>
      <Image src={item.thumbnail} alt="" width={100} height={100} />
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          alignItems: "center",
          justifyContent: "space-between",
          ml: 1,
          mr: 1,
        }}
      >
        <span>{item.name}</span>
      </Box>
    </Box>
  );
}

type ItemProp = {
  item: ItineraryItem;
  day: string;
};

type ContentProp = {
  day: string;
  item: ItineraryItem;
  canClick: boolean;
};
