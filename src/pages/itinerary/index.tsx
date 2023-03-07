import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import VerticalView from "@/views/itinerary/vertical";
import HorizontalView from "@/views/itinerary/horizontal";
import { itinerary } from "@/common/constants/itinerary";
import { getSingleFromUrlQuery } from "@/common/functions/urlQuery";
import { getDay } from "@/common/functions/itinerary";
import { useDispatch, useSelector } from "@/common/store";
import {
  getItineraryState,
  setDay,
  setTime,
} from "@/common/store/slices/itinerary";

export default function Index() {
  const router = useRouter();
  const { isReady } = router;
  const { day: queryDay, time: queryTime } = router.query;

  const [isLoading, setIsLoading] = useState(true);
  const { day, time } = useSelector(getItineraryState);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isReady) {
      console.log("Router IS READY");

      let validatedDay = getDay(getSingleFromUrlQuery(queryDay));
      dispatch(setDay(validatedDay));

      // if (validatedDay !== queryDay) {
      //   const urlWithoutQuery = window.location.pathname;
      //   history.replaceState(null, "", urlWithoutQuery);
      // }

      setIsLoading(false)
    }
  }, [isReady]);

  return (
    <>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        {isReady && !isLoading &&(
          <VerticalView itinerary={itinerary} day={day} time={time ?? "-"} />
        )}
      </Box>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        {isReady && !isLoading && (
          <HorizontalView itinerary={itinerary} day={day} time={time ?? "-"} />
        )}
      </Box>
    </>
  );
}
