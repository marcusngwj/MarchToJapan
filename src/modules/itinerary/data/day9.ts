import { images } from "@/common/constants/images";
import { ItineraryDay } from "../types/itineraryProps";

export const dayNine: ItineraryDay = {
  name: "Day 9",
  date: "28 March 2023",
  timeline: [
    {
      time: "0800",
      name: "Arashiyama Bamboo Grove",
      thumbnail: images.itinerary.placeholder,
    },
    {
      time: "0930",
      name: "Iwatayama Monkey Forest",
      thumbnail: images.itinerary.placeholder,
    },
    {
      time: "1100",
      name: "Keage incline",
      thumbnail: images.itinerary.placeholder,
    },
    {
      time: "1230",
      name: "Higashiyama District",
      thumbnail: images.itinerary.placeholder,
    },
    {
      time: "1600",
      name: "Fushimi Inari Taisha",
      thumbnail: images.itinerary.placeholder,
    },
  ],
};
