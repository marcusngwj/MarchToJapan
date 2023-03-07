import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from '@mui/material/Paper';

import * as React from "react";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

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
          <BottomNavigationAction label="Home" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Itinerary" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Expenditure" icon={<LocationOnIcon />} />
          <BottomNavigationAction label="Preparation" icon={<LocationOnIcon />} />
          <BottomNavigationAction label="Frenzy" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </Paper>
  );
}
