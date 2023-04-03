import { images } from "@/common/constants/images";
import { ItineraryDay } from "../types/itineraryProps";

export const dayFour: ItineraryDay = {
  name: "Day 4",
  date: "23 March 2023",
  timeline: [
    {
      time: "0945",
      name: "Ueno Park",
      thumbnail: images.itinerary.uenoPark,
      activity: {
        duration: "45 mins",
        narratives: []
      }
    },
    {
      time: "1100",
      name: "at-home cafe",
      thumbnail: images.itinerary.atHomeAkiba,
      activity: {
        duration: "1 hour 15 mins",
        narratives: []
      }
    },
    {
      time: "1230",
      name: "Akihabara",
      thumbnail: images.itinerary.placeholder,
      activity: {
        duration: "2 hours 45 mins",
        narratives: []
      }
    },
    {
      time: "1615",
      name: "Tokyo Joypolis",
      thumbnail: images.itinerary.tokyoJoypolis,
      activity: {
        duration: "2 hours 15 mins",
        narratives: []
      }
    },
    {
      time: "1900",
      name: "Takoyaki Museum",
      thumbnail: images.itinerary.placeholder,
      activity: {
        duration: "30 mins",
        narratives: [] //dinner
      }
    },
    {
      time: "2030",
      name: "Lotteria",
      thumbnail: images.itinerary.placeholder,
      activity: {
        duration: "30 mins",
        narratives: [] //dinner
      }
    },
  ],
};
