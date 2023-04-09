import Link from "next/link";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Item from "./item";
import type { Itinerary } from "@/modules/itinerary/types/itineraryProps";
import { route } from "@/common/constants/route";

export default function Index({ itinerary, selectedDay }: SelectorProp) {
  return (
    <Tabs variant="scrollable" allowScrollButtonsMobile value={selectedDay}>
      {Object.entries(itinerary).map(([dayId, day]) => (
        <Tab
          aria-label={day.name}
          key={dayId}
          label={<Item title={day.name} description={day.date} />}
          component={Link}
          href={`${route.itinerary.path}?day=${dayId}`}
          value={dayId.toString()}
        />
      ))}
    </Tabs>
  );
}

type SelectorProp = {
  itinerary: Itinerary;
  selectedDay: string;
};
