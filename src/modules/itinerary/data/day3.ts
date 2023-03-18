import { images } from "@/common/constants/images";
import { ItineraryDay } from "../types/itineraryProps";

export const dayThree: ItineraryDay = {
  name: "Day 3",
  date: "22 March 2023",
  timeline: [
    {
      time: "1000",
      name: "Ryogoku Kokugikan",
      thumbnail: images.itinerary.ryogokuKokugikan,
    },
    {
      time: "1130",
      name: "DAWN Avatar Robot Café",
      thumbnail: images.itinerary.dawnAvatarRobotCafe,
    },
    {
      time: "1230",
      name: "Akihabara",
      thumbnail: images.itinerary.placeholder,
    },
    {
      time: "1500",
      name: "Yurakucho",
      thumbnail: images.itinerary.yurakucho,
    },
    {
      time: "1700",
      name: "RED° TOKYO TOWER",
      thumbnail: images.itinerary.redTokyoTower,
    },
    {
      time: "2000",
      name: "Ryu no Miyako Inshokugai Shinjuku Higashiguchi Yokocho",
      thumbnail: images.itinerary.ryuNoMiyakoInshokugai,
    },
  ],
};
