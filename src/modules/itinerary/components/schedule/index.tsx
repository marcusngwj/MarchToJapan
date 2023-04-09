import Box from "@mui/material/Box";
import TabPanel from "@mui/lab/TabPanel";
import Timeline from "./timeline";
import type { Itinerary } from "@/modules/itinerary/types/itineraryProps";

export default function Index({itinerary}: ScheduleProp) {
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