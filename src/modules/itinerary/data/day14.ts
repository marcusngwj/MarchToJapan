import { images } from "@/common/constants/images";
import { ItineraryDay } from "../types/itineraryProps";

export const dayFourteen: ItineraryDay = {
  name: "Day 14",
  date: "2 April 2023",
  timeline: [
    {
      time: "1300",
      name: "Namba Station",
      thumbnail: images.itinerary.placeholder,
    },
    {
      time: "1430",
      name: "Kansai International Airport",
      thumbnail: images.itinerary.placeholder,
    },
    {
      time: "2145",
      name: "Changi Airport",
      thumbnail: images.itinerary.changiAirport,
    },
  ],
};
