import { images } from "@/common/constants/images";
import { ItineraryDay } from "../types/itineraryProps";

export const dayTwelve: ItineraryDay = {
  name: "Day 12",
  date: "31 March 2023",
  timeline: [
    {
      time: "0915",
      name: "Ichiran",
      thumbnail: images.itinerary.placeholder,
      activity: {
        duration: "1 hour",
        narratives: []
      }
    },
    {
      time: "1140",
      name: "Osaka Maishima Seaside Park",
      thumbnail: images.itinerary.placeholder,
      activity: {
        duration: "10 mins",
        narratives: []
      }
    },
    {
      time: "1330",
      name: "Osaka Aquarium Kaiyukan",
      thumbnail: images.itinerary.placeholder,
      activity: {
        duration: "1 hour 45 mins",
        narratives: []
      }
    },
    {
      time: "1600",
      name: "Solaniwa Onsen",
      thumbnail: images.itinerary.placeholder,
      activity: {
        duration: "2 hour 15 mins",
        narratives: []
      }
    },
    {
      time: "1835",
      name: "Okonomiyaki Dinner",
      thumbnail: images.itinerary.placeholder,
      activity: {
        duration: "30 mins",
        narratives: []
      }
    },
  ],
};
