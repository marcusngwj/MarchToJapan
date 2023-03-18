import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Orientation from "@/common/components/orientation";
import VerticalView from "./views/vertical";
import HorizontalView from "./views/horizontal";
import { itinerary } from "./data";
import { getSingleFromUrlQuery } from "@/common/functions/urlQuery";
import { getDay } from "./functions/day";
import { getTime } from "./functions/time";

export default function Index() {
  const router = useRouter();
  const { isReady } = router;
  const { day: queryDay, time: queryTime } = router.query;

  const [isLoading, setIsLoading] = useState(true);
  const [day, setDay] = useState(getDay(getSingleFromUrlQuery(queryDay)));
  const [time, setTime] = useState<string>();

  useEffect(() => {
    if (isReady) {
      console.log("Router IS READY");

      let validatedDay = getDay(getSingleFromUrlQuery(queryDay));
      let validatedTime = getTime(
        validatedDay,
        getSingleFromUrlQuery(queryTime)
      );

      // if (validatedDay !== queryDay) {
      //   const urlWithoutQuery = window.location.pathname;
      //   history.replaceState(null, "", urlWithoutQuery);
      // }

      setDay(validatedDay);
      setTime(validatedTime);
      setIsLoading(false);
    }
  }, [isReady, queryDay, day, queryTime, time]);

  return (
    <>
      {isReady && !isLoading && (
        <Orientation
          v={<VerticalView itinerary={itinerary} day={day} time={time} />}
          h={<HorizontalView itinerary={itinerary} day={day} time={time} />}
        />
      )}
    </>
  );
}
