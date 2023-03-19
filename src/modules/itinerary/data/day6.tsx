import { images } from "@/common/constants/images";
import { ItineraryDay } from "../types/itineraryProps";

export const daySix: ItineraryDay = {
  name: "Day 6",
  date: "25 March 2023",
  timeline: [
    {
      time: "0900",
      name: "AnimeJapan",
      thumbnail: images.itinerary.placeholder,
    },
    {
      time: "1530",
      name: "Tokyo Station",
      thumbnail: images.itinerary.placeholder,
    },
    {
      time: "1830",
      name: "Hakone Kowakien Yunessun",
      thumbnail: images.itinerary.placeholder,
    },
    {
      time: "2000",
      name: "Wisterian Life Club Verde No Mori",
      thumbnail: images.itinerary.placeholder,
    },
  ],
};
