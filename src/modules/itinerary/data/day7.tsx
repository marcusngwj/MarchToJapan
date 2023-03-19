import { images } from "@/common/constants/images";
import { ItineraryDay } from "../types/itineraryProps";

export const daySeven: ItineraryDay = {
  name: "Day 7",
  date: "26 March 2023",
  timeline: [
    {
      time: "0930",
      name: "Owakudani",
      thumbnail: images.itinerary.placeholder,
    },
    {
      time: "1200",
      name: "Hakone Sightseeing Cruise",
      thumbnail: images.itinerary.placeholder,
    },
    {
      time: "1245",
      name: "Hakone Shrine",
      thumbnail: images.itinerary.placeholder,
    },
    {
      time: "1430",
      name: "Gotemba Premium Outlet",
      thumbnail: images.itinerary.placeholder,
    },
    {
      time: "1830",
      name: "Hakone Kowakien Yunessun",
      thumbnail: images.itinerary.placeholder,
    },
  ],
};
