import Box from "@mui/material/Box";
import TabPanel from "@mui/lab/TabPanel";
import Timeline from "./timeline";
import type { Itinerary } from "@/common/types/itinerary";

export default function Schedule({itinerary}: ScheduleProp) {
  return (
    <Box sx={{ pb: "60px" }}>
      {Object.entries(itinerary).map(([dayId, day]) => {
        return (
          <TabPanel key={dayId} value={dayId}>
            <Timeline timeline={day.timeline} day={dayId}/>
          </TabPanel>
        );
      })}
    </Box>
  );
}

type ScheduleProp = {
  itinerary: Itinerary
}