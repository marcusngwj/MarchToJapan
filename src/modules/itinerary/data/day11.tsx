import { images } from "@/common/constants/images";
import { ItineraryDay } from "../types/itineraryProps";

export const dayEleven: ItineraryDay = {
  name: "Day 11",
  date: "30 March 2023",
  timeline: [
    {
      time: "1030",
      name: "Kuromon Market",
      thumbnail: images.itinerary.placeholder,
    },
    {
      time: "1200",
      name: "Nipponbashi Denden Town",
      thumbnail: images.itinerary.placeholder,
    },
    {
      time: "1430",
      name: "Shinsekai",
      thumbnail: images.itinerary.placeholder,
    },
    {
      time: "1630",
      name: "Umeda Sky Building",
      thumbnail: images.itinerary.placeholder,
    },
    {
      time: "2100",
      name: "PC and Retro Bar Space Station",
      thumbnail: images.itinerary.placeholder,
    },
  ],
};
