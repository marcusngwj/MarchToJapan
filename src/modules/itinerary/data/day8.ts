import { images } from "@/common/constants/images";
import { ItineraryDay } from "../types/itineraryProps";

export const dayEight: ItineraryDay = {
  name: "Day 8",
  date: "27 March 2023",
  timeline: [
    {
      time: "0900",
      name: "Mishima Sky Walk",
      thumbnail: images.itinerary.placeholder,
    },
    {
      time: "1530",
      name: "Kyoto International Manga Museum",
      thumbnail: images.itinerary.placeholder,
    },
    {
      time: "1900",
      name: "Kichi Kichi Omurice",
      thumbnail: images.itinerary.placeholder,
    },
    {
      time: "2100",
      name: "Kyoto Tower",
      thumbnail: images.itinerary.placeholder,
    },
    {
      time: "2200",
      name: "Hotel Wing International Kyoto Shijo Karasuma",
      thumbnail: images.itinerary.placeholder,
    },
  ],
};
