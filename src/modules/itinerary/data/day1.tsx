import { images } from "@/common/constants/images";
import Action from "../components/action";
import { ItineraryDay } from "../types/itineraryProps";

export const dayOne: ItineraryDay = {
  name: "Day 1",
  date: "20 March 2023",
  timeline: [
    {
      time: "0600",
      name: "Narita International Airport",
      thumbnail: images.itinerary.naritaAirport,
      // Breakfast
      // Welcome Suica card
      // settle train tix
    },
    {
      time: "0813",
      name: "Narita Express Train",
      thumbnail: images.itinerary.naritaExpress,
      activity: {
        duration: "1 hour 34 mins",
        narratives: []
      }
    },
    {
      time: "1045",
      name: "Shinjuku Washington Hotel",
      thumbnail: images.itinerary.shinjukuWashingtonHotel,
      activity: {
        location: {
          addressEn:
            "3 Chome-2-9 Nishishinjuku, Shinjuku City, Tokyo 160-0023, Japan",
          addressJp: "〒160-0023 東京都新宿区西新宿3丁目2-9",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.597112877247!2d139.69113091511832!3d35.68692108019289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cd3045b98f3%3A0x5f5f6283b8da0b62!2sShinjuku%20Washington%20Hotel!5e0!3m2!1sen!2ssg!4v1678787081907!5m2!1sen!2ssg",
        },
        duration: "4 nights",
        rating: 4,
        url: "http://washington-hotels.jp/shinjuku/",
        narratives: [
          {
            content: <Action thumbnail={images.itinerary.tripDotCom} thumbnailAlt="Trip.com" text="S$111/night" buttonLabel="Book" buttonUrl="https://sg.trip.com/hotels/tokyo-hotel-detail-994914/shinjuku-washington-hotels"/>
          },
          {
            content: "Goodnight",
          },
        ],
      },
    },
    {
      time: "1145",
      name: "Gyukatsu Motomura",
      thumbnail: images.itinerary.gyukatsuMotomura,
      activity: {
        location: {
          addressEn:
            "Japan, 〒150-0001 Tokyo, Shibuya City, Jingumae, 3 Chome-23-2 地下１階 エヌエスビル",
          addressJp:
            "〒150-0001 東京都渋谷区神宮前3丁目23-2 地下１階 エヌエスビル",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.2586453289155!2d139.70500311511793!3d35.67063288019677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ca34344b32b%3A0xb1421ed29d7fe639!2sGyukatsu%20Motomura%20Harajuku!5e0!3m2!1sen!2ssg!4v1678786003522!5m2!1sen!2ssg",
        },
        duration: "1 hour 15 mins",
        rating: 5,
        url: "https://www.gyukatsu-motomura.com/",
        narratives: [
          {
            content: "Shiok! Must try! Long Queue",
          },
        ],
      },
    },
    {
      time: "1315",
      name: "Takeshita Street",
      thumbnail: images.itinerary.takeshitaStreet,
    },
    {
      time: "1400",
      name: "Meiji Shrine",
      thumbnail: images.itinerary.meijiShrine,
      activity: {
        location: {
          addressEn:
            "1-1 Yoyogikamizonocho, Shibuya City, Tokyo 151-8557, Japan",
          addressJp: "〒151-8557 東京都渋谷区代々木神園町1-1",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.024548707187!2d139.6950987218368!3d35.67639752612453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cb79a4c26e5%3A0x8fca893849103f73!2sMeiji%20Jingu!5e0!3m2!1sen!2ssg!4v1678786190829!5m2!1sen!2ssg",
        },
        duration: "45 mins",
        url: "https://www.meijijingu.or.jp/",
        narratives: [
          {
            content: "Nice place",
          },
        ],
      },
    },
    {
      time: "1515",
      name: "Yoyogi Park",
      thumbnail: images.itinerary.yoyogiPark,
      activity: {
        duration: "1 hour",
        narratives: [],
      },
    },
    {
      time: "1640",
      name: "Shibuya Sky",
      thumbnail: images.itinerary.shibuyaSky,
      activity: {
        location: {
          addressEn:
            "Shibuya Scramble Square, 2 Chome-24-12 Shibuya, Shibuya City, Tokyo 150-6145, Japan",
          addressJp:
            "〒150-6145 東京都渋谷区渋谷2丁目24-12, Shibuya Scramble Square",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7527128133547!2d139.70007341511757!3d35.658463780199654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b6825f61ae1%3A0x6ff47ee61e522473!2sShibuya%20Sky!5e0!3m2!1sen!2ssg!4v1678786437815!5m2!1sen!2ssg",
        },
        duration: "1 hour 30 mins",
        rating: 5,
        url: "https://www.shibuya-scramble-square.com/sky/",
        narratives: [
          {
            content: "Comfortable place",
          },
        ],
      },
    },
    {
      time: "1845",
      name: "Hobo Shinjuku Norengai",
      thumbnail: images.itinerary.hoboShinjukuNorengai,
      activity: {
        location: {
          addressEn:
            "5 Chome-20-10 Sendagaya, Shibuya City, Tokyo 151-0051, Japan",
          addressJp: "〒151-0051 東京都渋谷区千駄ケ谷5丁目20-10",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.7626953687536!2d139.69911052183818!3d35.682844726118994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cc665d0fb99%3A0x2b05f979b7822fa4!2sHobo%20Shinjuku%20Norengai!5e0!3m2!1sen!2ssg!4v1678786852557!5m2!1sen!2ssg",
        },
        duration: "1 hour",
        rating: 3,
        url: "http://www.hobo-shinjuku.com/",
        narratives: [
          {
            content: "Hungry!",
          },
        ],
      },
    }
  ],
};
