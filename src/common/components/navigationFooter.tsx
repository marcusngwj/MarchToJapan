import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from '@mui/material/Paper';

import * as React from "react";
import HomeIcon from '@mui/icons-material/Home';
import TimelineIcon from '@mui/icons-material/Timeline';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ListAltIcon from '@mui/icons-material/ListAlt';
import CollectionsIcon from '@mui/icons-material/Collections';

export default function NavigationFooter() {
  const [value, setValue] = React.useState(0);
  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction label="Itinerary" icon={<TimelineIcon />} />
          <BottomNavigationAction label="Expenditure" icon={<AttachMoneyIcon />} />
          <BottomNavigationAction label="Preparation" icon={<ListAltIcon />} />
          <BottomNavigationAction label="Frenzy" icon={<CollectionsIcon />} />
        </BottomNavigation>
      </Paper>
  );
}
