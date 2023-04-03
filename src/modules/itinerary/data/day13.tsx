import { images } from "@/common/constants/images";
import { ItineraryDay } from "../types/itineraryProps";

export const dayThirteen: ItineraryDay = {
  name: "Day 13",
  date: "1 April 2023",
  timeline: [
    {
      time: "1115",
      name: "Nipponbashi Denden Town",
      thumbnail: images.itinerary.placeholder,
      activity: {
        duration: "2 hours 15 mins",
        narratives: []
      }
    },
    {
      time: "1345",
      name: "Sushi Lunch",
      thumbnail: images.itinerary.placeholder,
      activity: {
        duration: "30 mins",
        narratives: []
      }
    },
    {
      time: "1400",
      name: "Free Time",
      thumbnail: images.itinerary.placeholder,
    },
    {
      time: "1945",
      name: "teamlab Botanic Gardens",
      thumbnail: images.itinerary.placeholder,
      activity: {
        duration: "30 mins",
        narratives: []
      }
    },
  ],
};
