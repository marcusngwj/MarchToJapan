import { images } from "@/common/constants/images";
import { ItineraryDay } from "../types/itineraryProps";

export const daySix: ItineraryDay = {
  name: "Day 6",
  date: "25 March 2023",
  timeline: [
    {
      time: "0930",
      name: "AnimeJapan",
      thumbnail: images.itinerary.placeholder,
      activity: {
        duration: "15 mins",
        narratives: []
      }
    },
    {
      time: "1345",
      name: "Tokyo Station",
      thumbnail: images.itinerary.placeholder,
      activity: {
        duration: "4 hours 15 mins",
        narratives: []
      }
    },
    {
      time: "2015",
      name: "Wisterian Life Club Verde No Mori",
      thumbnail: images.itinerary.placeholder,
    },
  ],
};
