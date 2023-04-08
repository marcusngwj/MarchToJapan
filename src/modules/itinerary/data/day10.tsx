import { images } from "@/common/constants/images";
import { ItineraryDay } from "../types/itineraryProps";

export const dayTen: ItineraryDay = {
  name: "Day 10",
  date: "29 March 2023",
  timeline: [
    {
      time: "1200",
      name: "Nara Park",
      thumbnail: images.itinerary.placeholder,
      activity: {
        duration: "1 hour 30 mins",
        narratives: []
      }
    },
    {
      time: "1445",
      name: "Kuromon Crystal Hotel",
      thumbnail: images.itinerary.placeholder,
    },
    {
      time: "1545",
      name: "Genrokuzushi",
      thumbnail: images.itinerary.genrokuzushi,
      activity: {
        duration: "20 mins",
        narratives: [] // Lunch
      }
    },
    {
      time: "1615",
      name: "Round 1 Stadium",
      thumbnail: images.itinerary.placeholder,
      activity: {
        duration: "2 hours 45 mins",
        narratives: []
      }
    },
    {
      time: "1930",
      name: "Shinsaibashi Suji",
      thumbnail: images.itinerary.placeholder,
      activity: {
        duration: "30 mins",
        narratives: []
      }
    },
    {
      time: "2030",
      name: "Dinner",
      thumbnail: images.itinerary.placeholder,
      activity: {
        duration: "30 mins",
        narratives: []
      }
    },
  ],
};
