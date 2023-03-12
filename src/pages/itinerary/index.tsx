import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import VerticalView from "@/views/itinerary/vertical";
import HorizontalView from "@/views/itinerary/horizontal";
import Orientation from "@/common/components/orientation";
import { itinerary } from "@/common/constants/itinerary";
import { getSingleFromUrlQuery } from "@/common/functions/urlQuery";
import { getDay, getTime } from "@/common/functions/itinerary";

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
