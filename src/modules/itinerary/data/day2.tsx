import { images } from "@/common/constants/images";
import { ItineraryDay } from "../types/itineraryProps";

export const dayTwo: ItineraryDay = {
  name: "Day 2",
  date: "21 March 2023",
  timeline: [
    {
      time: "0930",
      name: "Meguro River",
      thumbnail: images.itinerary.meguroRiver,
      activity: {
        duration: "1 hour",
        narratives: []
        // Get QR code for Starbucks
      },
    },
    {
      time: "1100",
      name: "Hachiko Square",
      thumbnail: images.itinerary.hachikoSquare,
      activity: {
        duration: "10 mins",
        narratives: []
      }
    },
    {
      time: "1110",
      name: "MEGA Don Quijote Shibuya Honten",
      thumbnail: images.itinerary.donQuijote,
      activity: {
        duration: "2 hours",
        narratives: []
      }
    },
    {
      time: "1330",
      name: "One Piece Mugiwara Store",
      thumbnail: images.itinerary.placeholder,
      activity: {
        //location: MAGNET by SHIBUYA 109
        duration: "45 mins",
        narratives: []
      }
    },
    {
      time: "1430",
      name: "Soup Noodle Ramen",
      thumbnail: images.itinerary.soupNoodleRamen,
      activity: {
        duration: "30 mins",
        rating: 3.5,
        narratives: [
          {
            content: "Lunch"
          }
        ]
      }
    },
    {
      time: "1500",
      name: "Shibuya Parco",
      thumbnail: images.itinerary.placeholder,
      activity: {
        duration: "40 mins",
        narratives: []
      }
    },
    {
      time: "1730",
      name: "Animate Ikebukuro",
      thumbnail: images.itinerary.animateIkebukuro,
      activity: {
        location: {
          addressEn: "1 Chome-20-7 Higashiikebukuro, Toshima City, Tokyo 170-0013, Japan",
          addressJp: "〒170-0013 東京都豊島区東池袋1丁目20-7",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.7997016961954!2d139.7132651510536!3d35.7311442800854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d6f4361458b%3A0x503df2e68ddac61a!2sAnimate%20Ikebukuro!5e0!3m2!1sen!2ssg!4v1678809287584!5m2!1sen!2ssg"
        },
        duration: "2 hours 45 mins",
        rating: 5,
        url: "https://www.animate.co.jp/shop/ikebukuro/",
        narratives: [
          {
            content: "New place!"
          }
        ]
      }
    },
    {
      time: "2040",
      name: "Nadai Fujisoba",
      thumbnail: images.itinerary.nadaiFujisoba,
      activity: {
        duration: "30 mins",
        rating: 4.5,
        narratives: [] //dinner
      }
    }
  ],
};
