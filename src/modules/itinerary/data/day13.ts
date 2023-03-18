import { images } from "@/common/constants/images";
import { ItineraryDay } from "../types/itineraryProps";

export const dayThirteen: ItineraryDay = {
  name: "Day 13",
  date: "1 April 2023",
  timeline: [
    {
      time: "1000",
      name: "Shinsaibashi",
      thumbnail: images.itinerary.placeholder,
    },
    {
      time: "1200",
      name: "Amerika Mura",
      thumbnail: images.itinerary.placeholder,
    },
    {
      time: "1400",
      name: "Shinsaibashi-Suji Shopping Street",
      thumbnail: images.itinerary.placeholder,
    },
    {
      time: "1600",
      name: "Dotonburi",
      thumbnail: images.itinerary.placeholder,
    },
    {
      time: "2000",
      name: "teamlab Botanic Gardens",
      thumbnail: images.itinerary.placeholder,
    },
  ],
};
