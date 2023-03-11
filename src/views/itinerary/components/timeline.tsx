import Image from "next/image";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import type { ItineraryItem } from "@/common/types/itinerary";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

export default function TimelinePanel({ timeline }: TimelinePanelProp) {
  return (
    <List>
      {timeline.map((item, index) => (
        <ListItem key={index} sx={{ padding: 0 }}>
          <TimelineItem item={item} />
        </ListItem>
      ))}
    </List>
  );
}

function TimelineItem({ item }: TimelineItemProp) {
  return (
    <Box sx={{ display: "flex", flexGrow: 1 }}>
      <TimeIndicator time={item.time} />
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

function TimeIndicator({ time }: TimeIndicatorProp) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontSize: "24px",
      }}
    >
      <Box
        sx={{
          borderLeft: "2px solid black",
          height: "100%",
          left: "50%",
          top: 0,
          ml: "-1px",
          pt: "5px",
        }}
      ></Box>
      <Box sx={{ width: 100, display: "flex", justifyContent: "center" }}>
        {time}
      </Box>
      <Box
        sx={{
          borderLeft: "2px solid black",
          height: "100%",
          left: "50%",
          top: 0,
          ml: "-1px",
          pt: "5px",
        }}
      ></Box>
    </Box>
  );
}

export type TimelinePanelProp = {
  timeline: ItineraryItem[];
};

type TimelineItemProp = {
  item: ItineraryItem;
};

type TimeIndicatorProp = {
  time: string;
};
