import { images } from "@/common/constants/images";
import { ItineraryDay } from "../types/itineraryProps";

export const dayFive: ItineraryDay = {
  name: "Day 5",
  date: "24 March 2023",
  timeline: [
    {
      time: "0930",
      name: "University of Tokyo",
      thumbnail: images.itinerary.placeholder,
    },
    {
      time: "1200",
      name: "Ameyoko Shopping Street",
      thumbnail: images.itinerary.placeholder,
    },
    {
      time: "1530",
      name: "Asakusa",
      thumbnail: images.itinerary.placeholder,
    },
    {
      time: "1800",
      name: "Tokyo Skytree",
      thumbnail: images.itinerary.placeholder,
    },
    {
      time: "2100",
      name: "Hailey Cafe",
      thumbnail: images.itinerary.placeholder,
    },
  ],
};
