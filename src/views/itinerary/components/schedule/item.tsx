import Image from "next/image";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Timestamp from "./timestamp"
import type { ItineraryItem } from "@/common/types/itinerary";

export default function Item({ item }: ItemProp) {
  return (
    <Box sx={{ display: "flex", flexGrow: 1 }}>
      <Timestamp time={item.time} />
      <Paper elevation={2} sx={{ margin: [1.5, 0, 1.5, 0.5], flexGrow: 1 }}>
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
            <NavigateNextIcon />
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

type ItemProp = {
  item: ItineraryItem;
};
