import Box from "@mui/material/Box";
import TabPanel from "@mui/lab/TabPanel";
import Timeline from "./timeline";
import type { Itinerary } from "@/common/types/itinerary";

export default function Schedule({itinerary}: ScheduleProp) {
  return (
    <Box sx={{ pb: "60px" }}>
      {Object.entries(itinerary).map(([key, value]) => {
        return (
          <TabPanel key={key} value={key}>
            <Timeline timeline={value.timeline} />
          </TabPanel>
        );
      })}
    </Box>
  );
}

type ScheduleProp = {
  itinerary: Itinerary
}