import { images } from "@/common/constants/images";
import { ItineraryDay } from "../types/itineraryProps";

export const dayTen: ItineraryDay = {
  name: "Day 10",
  date: "29 March 2023",
  timeline: [
    {
      time: "0900",
      name: "Philosopher Path",
      thumbnail: images.itinerary.placeholder,
    },
    {
      time: "1300",
      name: "Kyoto Station",
      thumbnail: images.itinerary.placeholder,
    },
    {
      time: "1430",
      name: "Nara Park",
      thumbnail: images.itinerary.placeholder,
    },
    {
      time: "1600",
      name: "Nara Station",
      thumbnail: images.itinerary.placeholder,
    },
    {
      time: "1830",
      name: "Dotonburi",
      thumbnail: images.itinerary.placeholder,
    },
    {
      time: "2000",
      name: "Round1 Arcade",
      thumbnail: images.itinerary.placeholder,
    },
    {
      time: "2000",
      name: "Kuromon Crystal Hotel",
      thumbnail: images.itinerary.placeholder,
    },
  ],
};
