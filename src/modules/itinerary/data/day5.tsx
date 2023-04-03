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
      activity: {
        duration: "45 mins",
        narratives: []
      }
    },
    {
      time: "1100",
      name: "J.Chicken",
      thumbnail: images.itinerary.placeholder,
      activity: {
        duration: "25 mins",
        narratives: []
      }
    },
    {
      time: "1130",
      name: "Ameyoko Shopping Street",
      thumbnail: images.itinerary.placeholder,
      activity: {
        duration: "30 mins",
        narratives: []
      }
    },
    {
      time: "1215",
      name: "Akihabara",
      thumbnail: images.itinerary.placeholder,
      activity: {
        duration: "3 hours 45 mins",
        narratives: []
      }
    },
    {
      time: "1700",
      name: "Asakusa Batting",
      thumbnail: images.itinerary.placeholder,
      activity: {
        duration: "30 mins",
        narratives: []
      }
    },
    {
      time: "1800",
      name: "Tokyo Skytree",
      thumbnail: images.itinerary.placeholder,
      activity: {
        duration: "45 mins",
        narratives: []
      }
    },
    {
      time: "1900",
      name: "Grill Cardinal",
      thumbnail: images.itinerary.placeholder,
      activity: {
        duration: "15 mins",
        narratives: []
      }
    },
    {
      time: "2100",
      name: "Hailey Cafe",
      thumbnail: images.itinerary.placeholder,
    },
  ],
};
