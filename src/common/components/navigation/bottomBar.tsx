import Link from "next/link";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import HomeIcon from "@mui/icons-material/Home";
import TimelineIcon from "@mui/icons-material/Timeline";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ListAltIcon from "@mui/icons-material/ListAlt";
import CollectionsIcon from "@mui/icons-material/Collections";
import Concealer from "./concealer";
import { route } from "@/common/constants/route";
import { useDispatch } from "@/common/store";
import { setNavigationIndex } from "@/common/store/slices/navigation";

export default function BottomBar({
  selectedTab,
}: BottomBarProp) {
  const dispatch = useDispatch();

  return (
    <Concealer direction="up">
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={selectedTab}
          onChange={(event, newValue) => {
            dispatch(setNavigationIndex(newValue));
          }}
        >
          <BottomNavigationAction
            label="Home"
            icon={<HomeIcon />}
            LinkComponent={Link}
            href={route.home.path}
          />
          <BottomNavigationAction
            label="Itinerary"
            icon={<TimelineIcon />}
            LinkComponent={Link}
            href={route.itinerary.path}
          />
          <BottomNavigationAction
            label="Expenditure"
            icon={<AttachMoneyIcon />}
            LinkComponent={Link}
            href={route.expenditure.path}
          />
          <BottomNavigationAction
            label="Preparation"
            icon={<ListAltIcon />}
            LinkComponent={Link}
            href={route.preparation.path}
          />
          <BottomNavigationAction
            label="Frenzy"
            icon={<CollectionsIcon />}
            LinkComponent={Link}
            href={route.frenzy.path}
          />
        </BottomNavigation>
      </Paper>
    </Concealer>
  );
}

type BottomBarProp = {
  selectedTab: number;
};
