import { useState, SyntheticEvent } from "react";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import Scroll, { ScrollItemProp } from "@/common/components/scroll";
import ScheduleDisplay from "./components/schedule";
import NavigationFooter from "@/common/components/navigationFooter";
import CssBaseline from "@mui/material/CssBaseline";
import type { ViewProps, Itinerary } from "@/common/types/itinerary";

import { useDispatch } from "@/common/store";
import { setDay } from "@/common/store/slices/itinerary";
import { useRouter } from 'next/router';

export default function View({ itinerary, day, time }: ViewProps) {
  const [value, setValue] = useState(day);
  const router = useRouter();

  const dispatch = useDispatch();

  const handleTabChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
    dispatch(setDay(newValue));
    router.push({
      pathname: router.pathname,
      query: { day: newValue }
    });
  };

  return (
    <Box>
      <CssBaseline />
      <TabContext value={value}>
        <Scroll
          data={getDataForScroll(itinerary)}
          value={value}
          onChange={handleTabChange}
        />
        <Box sx={{ pb: "60px" }}>
          <ScheduleDisplay itinerary={itinerary} />
        </Box>
      </TabContext>
      <NavigationFooter />
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
