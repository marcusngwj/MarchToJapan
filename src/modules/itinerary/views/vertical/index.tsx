import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import Selector from "../../components/selector";
import Schedule from "../../components/schedule";
import Activity from "../../components/activity";
import type { ViewProps } from "@/modules/itinerary/types/viewProps";
import { defaultTime } from "@/common/constants/itinerary";

export default function View({ itinerary, day, time }: ViewProps) {
  const dayId = parseInt(day);
  const item = itinerary[dayId].timeline.find((item) => item.time === time);
  let activity = item?.activity;
  return (
    <>
      {time !== defaultTime && item && activity ? (
        <Activity
          name={item.name}
          thumbnail={item.thumbnail}
          location={activity.location}
          duration={activity.duration}
          rating={activity.rating}
          url={activity.url}
          narratives={activity.narratives}
        />
      ) : (
        <Box>
          <CssBaseline />
          <TabContext value={day}>
            <Selector itinerary={itinerary} selectedDay={day} />
            <Schedule itinerary={itinerary} />
          </TabContext>
        </Box>
      )}
    </>
  );
}
