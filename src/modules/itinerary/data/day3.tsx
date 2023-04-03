import { images } from "@/common/constants/images";
import { ItineraryDay } from "../types/itineraryProps";

export const dayThree: ItineraryDay = {
  name: "Day 3",
  date: "22 March 2023",
  timeline: [
    {
      time: "0800",
      name: "Tokyo Roastery | Starbucks Reserve®",
      thumbnail: images.itinerary.tokyoRoastery,
      activity: {
        location: {
          addressEn:
            "2 Chome-19-23 Aobadai, Meguro City, Tokyo 153-0042, Japan",
          addressJp: "〒153-0042 東京都目黒区青葉台2丁目19-23",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.1261210463967!2d139.69039665105169!3d35.64926418010459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b88b7d8f7ab%3A0x2133080e9923eaac!2sStarbucks%20Reserve%C2%AE%20Roastery%20Tokyo!5e0!3m2!1sen!2ssg!4v1678809002828!5m2!1sen!2ssg",
        },
        duration: "2 hours 15 mins",
        rating: 5,
        url: "https://store.starbucks.co.jp/detail-2381/?utm_source=GMB&utm_medium=organic&utm_campaign=store&utm_content=2381",
        narratives: [
          {
            content: "Umai!"
          }
        ]
      },
    },
    {
      time: "1130",
      name: "DAWN Avatar Robot Café",
      thumbnail: images.itinerary.dawnAvatarRobotCafe,
      activity: {
        duration: "45 mins",
        narratives: []
      }
    },
    {
      time: "1230",
      name: "Akihabara",
      thumbnail: images.itinerary.placeholder,
      activity: {
        duration: "4 hours",
        narratives: []
      }
    },
    {
      time: "1645",
      name: "Meal",
      thumbnail: images.itinerary.placeholder,
    },
    {
      time: "1730",
      name: "RED° TOKYO TOWER",
      thumbnail: images.itinerary.redTokyoTower,
      activity: {
        duration: "2 hours 45 mins",
        narratives: []
      }
    },
    {
      time: "2100",
      name: "Dinner",
      thumbnail: images.itinerary.placeholder,
    },
  ],
};
