import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import Selector from "../components/selector";
import Schedule from "../components/schedule";
import type { ViewProps } from "@/common/types/itinerary";

export default function View({ itinerary, day, time }: ViewProps) {
  return (
    <Box>
      <CssBaseline />
      <TabContext value={day}>
        <Selector itinerary={itinerary} selectedDay={day} />
        <Schedule itinerary={itinerary}/>
      </TabContext>
    </Box>
  );
}
