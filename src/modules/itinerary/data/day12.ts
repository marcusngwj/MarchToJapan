import { images } from "@/common/constants/images";
import { ItineraryDay } from "../types/itineraryProps";

export const dayTwelve: ItineraryDay = {
  name: "Day 12",
  date: "31 March 2023",
  timeline: [
    {
      time: "1030",
      name: "Osaka Maishima Seaside Park",
      thumbnail: images.itinerary.placeholder,
    },
    {
      time: "1200",
      name: "Osaka Takoyaki Museum",
      thumbnail: images.itinerary.placeholder,
    },
    {
      time: "1330",
      name: "Osaka Aquarium Kaiyukan",
      thumbnail: images.itinerary.placeholder,
    },
    {
      time: "1700",
      name: "Solaniwa Onsen",
      thumbnail: images.itinerary.placeholder,
    },
  ],
};
