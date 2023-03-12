import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Orientation from "@/common/components/orientation";
import TopBar from "./topBar";
import BottomBar from "./bottomBar";
import { route } from "@/common/constants/route";
import { useDispatch, useSelector } from "@/common/store";
import {
  setNavigationIndex,
  getNavigationState,
} from "@/common/store/slices/navigation";

export default function NavigationBar() {
  const router = useRouter();
  const { isReady } = router;
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  const { currentIndex } = useSelector(getNavigationState);

  useEffect(() => {
    console.log(router.pathname);
    if (isReady) {
      switch (router.pathname) {
        case route.home.path:
          dispatch(setNavigationIndex(route.home.index));
          break;
        case route.itinerary.path:
          dispatch(setNavigationIndex(route.itinerary.index));
          break;
        case route.expenditure.path:
          dispatch(setNavigationIndex(route.expenditure.index));
          break;
        case route.preparation.path:
          dispatch(setNavigationIndex(route.preparation.index));
          break;
        case route.frenzy.path:
          dispatch(setNavigationIndex(route.frenzy.index));
          break;
        default:
          dispatch(setNavigationIndex(route.home.index));
          break;
      }
      setIsLoading(false);
    }
  }, [isReady]);

  if (
    router.pathname !== route.itinerary.path &&
    router.pathname !== route.expenditure.path &&
    router.pathname !== route.preparation.path &&
    router.pathname !== route.frenzy.path
  ) {
    return <></>;
  }

  return (
    <>
      {isReady && !isLoading && (
        <Orientation
          verticalView={<BottomBar selectedTab={currentIndex} />}
          horizontalView={<TopBar />}
        />
      )}
    </>
  );
}
