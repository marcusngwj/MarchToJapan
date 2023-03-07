import Box from "@mui/material/Box";
import TabPanel from "@mui/lab/TabPanel";
import TimelinePanel from "./timeline";
import type { Itinerary } from "@/common/types/itinerary";

export default function ScheduleDisplay({ itinerary }: ScheduleDisplayProp) {
  return (
    <Box>
      {Object.entries(itinerary).map(([key, value]) => {
        return (
          <TabPanel key={key} value={key}>
            <TimelinePanel timeline={value.timeline}/>
          </TabPanel>
        );
      })}
    </Box>
  );
}

type ScheduleDisplayProp = {
  itinerary: Itinerary;
};
