import { images } from "@/common/constants/images";
import { ItineraryDay } from "../types/itineraryProps";

export const daySeven: ItineraryDay = {
  name: "Day 7",
  date: "26 March 2023",
  timeline: [
    {
      time: "1030",
      name: "Gotemba Premium Outlet",
      thumbnail: images.itinerary.placeholder,
      activity: {
        duration: "2 hours",
        narratives: []
      }
    },
    {
      time: "1425",
      name: "Hakone Sightseeing Cruise",
      thumbnail: images.itinerary.placeholder,
      activity: {
        duration: "40 mins",
        narratives: []
      }
    },
    {
      time: "1530",
      name: "Hakone Shrine",
      thumbnail: images.itinerary.placeholder,
      activity: {
        duration: "45 mins",
        narratives: []
      }
    },
    {
      time: "2015",
      name: "Public Bath",
      thumbnail: images.itinerary.placeholder,
    },
  ],
};
