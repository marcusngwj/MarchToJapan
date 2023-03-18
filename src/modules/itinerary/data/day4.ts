import { images } from "@/common/constants/images";
import { ItineraryDay } from "../types/itineraryProps";

export const dayFour: ItineraryDay = {
  name: "Day 4",
  date: "23 March 2023",
  timeline: [
    {
      time: "0930",
      name: "Ueno Park",
      thumbnail: images.itinerary.uenoPark,
    },
    {
      time: "1100",
      name: "at-home cafe",
      thumbnail: images.itinerary.atHomeAkiba,
    },
    {
      time: "1200",
      name: "akihabara",
      thumbnail: images.itinerary.placeholder,
    },
    {
      time: "1430",
      name: "Tokyo Joypolis",
      thumbnail: images.itinerary.tokyoJoypolis,
    },
    {
      time: "1800",
      name: "Meguro River",
      thumbnail: images.itinerary.meguroRiver,
    },
    {
      time: "1930",
      name: "Shibuya Yokocho",
      thumbnail: images.itinerary.shibuyaYokocho,
    },
  ],
};
