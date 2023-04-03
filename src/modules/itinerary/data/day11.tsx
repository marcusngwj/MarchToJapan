import { images } from "@/common/constants/images";
import { ItineraryDay } from "../types/itineraryProps";

export const dayEleven: ItineraryDay = {
  name: "Day 11",
  date: "30 March 2023",
  timeline: [
    {
      time: "0945",
      name: "Kuromon Market",
      thumbnail: images.itinerary.placeholder,
      activity: {
        duration: "1 hour 15 mins",
        narratives: []
      }
    },
    {
      time: "1300",
      name: "Nipponbashi Denden Town",
      thumbnail: images.itinerary.placeholder,
      activity: {
        duration: "3 hours",
        narratives: []
      }
    },
    {
      time: "1730",
      name: "Umeda Sky Building",
      thumbnail: images.itinerary.placeholder,
      activity: {
        duration: "1 hour",
        narratives: []
      }
    },
    {
      time: "1930",
      name: "Kura sushi Dinner",
      thumbnail: images.itinerary.placeholder,
      activity: {
        duration: "30 mins",
        narratives: []
      }
    },
  ],
};
