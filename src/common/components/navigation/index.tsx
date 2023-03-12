import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import TopBar from "./topBar";
import BottomBar from "./bottomBar";
import Orientation from "../orientation";
import { route } from "@/common/constants/route";

export default function NavigationBar() {
  const router = useRouter();
  const { isReady } = router;
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTab, setSelectedTab] = useState<number>(0);

  useEffect(() => {
    console.log(router.pathname)
    if (isReady) {
      switch (router.pathname) {
        case route.home.path:
          setSelectedTab(route.home.index);
          break;
        case route.itinerary.path:
          setSelectedTab(route.itinerary.index);
          break;
        case route.expenditure.path:
          setSelectedTab(route.expenditure.index);
          break;
        case route.preparation.path:
          setSelectedTab(route.preparation.index);
          break;
        case route.frenzy.path:
          setSelectedTab(route.frenzy.index);
          break;
        default:
          setSelectedTab(route.home.index);
          break;
      }
      setIsLoading(false);
    }
  }, [isReady]);

  if (router.pathname === route.home.path) {
    return <></>;
  }

  return (
    <>
      {isReady && !isLoading && (
        <Orientation
          verticalView={
            <BottomBar
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
          }
          horizontalView={<TopBar />}
        />
      )}
    </>
  );
}
