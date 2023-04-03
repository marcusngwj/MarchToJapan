import { images } from "@/common/constants/images";
import { ItineraryDay } from "../types/itineraryProps";

export const dayEight: ItineraryDay = {
  name: "Day 8",
  date: "27 March 2023",
  timeline: [
    {
      time: "0945",
      name: "Mishima Sky Walk",
      thumbnail: images.itinerary.placeholder,
      activity: {
        duration: "2 hours 15 mins",
        narratives: []
      }
    },
    {
      time: "1630",
      name: "Kyoto International Manga Museum",
      thumbnail: images.itinerary.placeholder,
      activity: {
        duration: "1 hour",
        narratives: []
      }
    },
    {
      time: "1800",
      name: "Dinner",
      thumbnail: images.itinerary.placeholder,
    },
    {
      time: "1900",
      name: "Hotel Wing International Kyoto Shijo Karasuma",
      thumbnail: images.itinerary.placeholder,
    },
  ],
};
