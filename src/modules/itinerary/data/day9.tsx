import { images } from "@/common/constants/images";
import { ItineraryDay } from "../types/itineraryProps";

export const dayNine: ItineraryDay = {
  name: "Day 9",
  date: "28 March 2023",
  timeline: [
    {
      time: "0930",
      name: "Some park near Iwatayama Monkey Forest",
      thumbnail: images.itinerary.placeholder,
      activity: {
        duration: "25 mins",
        narratives: []
      }
    },
    {
      time: "0955",
      name: "Iwatayama Monkey Forest",
      thumbnail: images.itinerary.placeholder,
      activity: {
        duration: "45 mins",
        narratives: []
      }
    },
    {
      time: "1045",
      name: "Kotogase Tea House",
      thumbnail: images.itinerary.placeholder,
      activity: {
        duration: "25 mins",
        narratives: [] // Lunch
      }
    },
    {
      time: "1130",
      name: "Arashiyama Bamboo Grove",
      thumbnail: images.itinerary.placeholder,
      activity: {
        duration: "25 mins",
        narratives: []
      }
    },
    {
      time: "1330",
      name: "Higashiyama District",
      thumbnail: images.itinerary.placeholder,
      activity: {
        duration: "2 hours",
        narratives: []
      }
    },
    {
      time: "1615",
      name: "Fushimi Inari Taisha",
      thumbnail: images.itinerary.placeholder,
      activity: {
        duration: "2 hours 15 mins",
        narratives: []
      }
    },
    {
      time: "1900",
      name: "Katsu Curry",
      thumbnail: images.itinerary.placeholder,
      activity: {
        duration: "25 mins",
        narratives: []
      }
    },
  ],
};
