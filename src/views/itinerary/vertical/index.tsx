import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import Selector from "../components/selector";
import TimelinePanel from "../components/timeline";
import type { ViewProps } from "@/common/types/itinerary";

export default function View({ itinerary, day, time }: ViewProps) {
  return (
    <Box>
      <CssBaseline />
      <TabContext value={day}>
        <Selector itinerary={itinerary} selectedDay={day} />
        <Box sx={{ pb: "60px" }}>
          {Object.entries(itinerary).map(([key, value]) => {
            return (
              <TabPanel key={key} value={key}>
                <TimelinePanel timeline={value.timeline} />
              </TabPanel>
            );
          })}
        </Box>
      </TabContext>
    </Box>
  );
}
