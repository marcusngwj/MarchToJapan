import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Item from "./item"
import type { ItineraryItem } from "@/common/types/itinerary";

export default function Timeline({ timeline }: TimelineProp) {
  return (
    <List>
      {timeline.map((item, index) => (
        <ListItem key={index} sx={{ padding: 0 }}>
          <Item item={item} />
        </ListItem>
      ))}
    </List>
  );
}

type TimelineProp = {
  timeline: ItineraryItem[];
};