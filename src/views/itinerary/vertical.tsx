import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import Scroll, { ScrollItemProp } from "@/common/components/scroll";
import TimelinePanel from "./components/timeline";
import type { ViewProps, Itinerary } from "@/common/types/itinerary";

export default function View({ itinerary, day, time }: ViewProps) {
  return (
    <Box>
      <CssBaseline />
      <TabContext value={day}>
        <Scroll
          data={getDataForScroll(itinerary)}
          value={day}
        />
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

const getDataForScroll = (itinerary: Itinerary): ScrollItemProp[] => {
  const result: ScrollItemProp[] = [];

  Object.entries(itinerary).map(([key, value]) => {
    result.push({
      title: value.name,
      description: value.date,
    });
  });

  return result;
};
