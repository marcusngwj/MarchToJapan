import { images } from "@/common/constants/images";
import type { Itinerary } from "../types/itinerary";

export const defaultDay = "0";
export const defaultTime = "-";

export const itinerary: Itinerary = {
  0: {
    name: "Day 0",
    date: "19 March 2023",
    timeline: [
      {
        time: "1900",
        title: "Changi Airport",
        thumbnail: images.itinerary.changiAirport
        // Dinner + luggage Check-in
      },
      // {
      //   time: "2000",
      //   title: "Luggage Check-in",
      //   thumbnail: images.itinerary.changiAirportCheckIn
      // },
      {
        time: "2030",
        title: "Changi Lounge",
        thumbnail: images.itinerary.changiAirportLounge
      },
      {
        time: "2100",
        title: "Transit Area",
        thumbnail: images.itinerary.changiAirportTransitArea
      },
      {
        time: "2220",
        title: "Onboard Scoot",
        thumbnail: images.itinerary.scootTakeOff
      }
    ]
  },
  1: {
    name: "Day 1",
    date: "20 March 2023",
    timeline: [
      {
        time: "0600",
        title: "Narita International Airport",
        thumbnail: images.itinerary.naritaAirport
        // Breakfast
        // Welcome Suica card
        // settle train tix
      },
      {
        time: "0830",
        title: "Narita Express Train",
        thumbnail: images.itinerary.naritaExpress
        // To shinjuku
      },
      {
        time: "1100",
        title: "Gyukatsu Motomura",
        thumbnail: images.itinerary.gyukatsuMotomura
      },
      {
        time: "1200",
        title: "Takeshita Street",
        thumbnail: images.itinerary.takeshitaStreet
      },
      {
        time: "1430",
        title: "Yoyogi Park",
        thumbnail: images.itinerary.yoyogiPark
      },
      {
        time: "1515",
        title: "Meiji Shrine",
        thumbnail: images.itinerary.meijiShrine
      },
      {
        time: "1640",
        title: "Shibuya Sky",
        thumbnail: images.itinerary.shibuyaSky
      },
      {
        time: "1930",
        title: "Hobo Shinjuku Norengai",
        thumbnail: images.itinerary.hoboShinjukuNorengai
      },
      {
        time: "2130",
        title: "Shinjuku Washington Hotel",
        thumbnail: images.itinerary.shinjukuWashingtonHotel
      }
    ]
  },
  2: {
    name: "Day 2",
    date: "21 March 2023",
    timeline: [
      {
        time: "0930",
        title: "Tokyo Roastery | Starbucks Reserve",
        thumbnail: images.itinerary.tokyoRoastery
      },
      // Then some shibuya street
      {
        time: "0930",
        title: "A Happy Pancake Omotesando",
        thumbnail: images.itinerary.placeholder
        // Maybe not going since orchard road has
      },
      {
        time: "1230",
        title: "Shimokitazawa",
        thumbnail: images.itinerary.shimokitazawa
      },
      {
        time: "1430",
        title: "Sunshine City",
        thumbnail: images.itinerary.sunshineCity
      },
      {
        time: "1530",
        title: "Animate Ikebukuro",
        thumbnail: images.itinerary.animateIkebukuro
      },
      {
        time: "1730",
        title: "Nakano Broadway",
        thumbnail: images.itinerary.nakanoBroadway
      },
      {
        time: "1900",
        title: "Omoide Yokocho",
        thumbnail: images.itinerary.omoideYokocho
      },
      {
        time: "2030",
        title: "Kabukicho",
        thumbnail: images.itinerary.kabukicho
      }
    ]
  },
  3: {
    name: "Day 3",
    date: "22 March 2023",
    timeline: [
      {
        time: "1000",
        title: "Ryogoku Kokugikan",
        thumbnail: images.itinerary.ryogokuKokugikan
      },
      {
        time: "1130",
        title: "DAWN Avatar Robot Café",
        thumbnail: images.itinerary.dawnAvatarRobotCafe
      },
      {
        time: "1230",
        title: "Akihabara",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "1500",
        title: "Yurakucho",
        thumbnail: images.itinerary.yurakucho
      },
      {
        time: "1700",
        title: "RED° TOKYO TOWER",
        thumbnail: images.itinerary.redTokyoTower
      },
      {
        time: "2000",
        title: "Ryu no Miyako Inshokugai Shinjuku Higashiguchi Yokocho",
        thumbnail: images.itinerary.ryuNoMiyakoInshokugai
      }
    ]
  },
  4: {
    name: "Day 4",
    date: "23 March 2023",
    timeline: [
      {
        time: "0930",
        title: "Ueno Park",
        thumbnail: images.itinerary.uenoPark
      },
      {
        time: "1100",
        title: "at-home cafe",
        thumbnail: images.itinerary.atHomeAkiba
      },
      {
        time: "1200",
        title: "akihabara",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "1430",
        title: "Tokyo Joypolis",
        thumbnail: images.itinerary.tokyoJoypolis
      },
      {
        time: "1800",
        title: "Meguro River",
        thumbnail: images.itinerary.meguroRiver
      },
      {
        time: "1930",
        title: "Shibuya Yokocho",
        thumbnail: images.itinerary.shibuyaYokocho
      }
    ]
  },
  5: {
    name: "Day 5",
    date: "24 March 2023",
    timeline: [
      {
        time: "0930",
        title: "University of Tokyo",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "1200",
        title: "Ameyoko Shopping Street",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "1530",
        title: "Asakusa",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "1800",
        title: "Tokyo Skytree",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "2100",
        title: "Hailey Cafe",
        thumbnail: images.itinerary.placeholder
      }
    ]
  },
  6: {
    name: "Day 6",
    date: "25 March 2023",
    timeline: [
      {
        time: "0900",
        title: "AnimeJapan",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "1530",
        title: "Tokyo Station",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "1830",
        title: "Hakone Kowakien Yunessun",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "2000",
        title: "Wisterian Life Club Verde No Mori",
        thumbnail: images.itinerary.placeholder
      }
    ]
  },
  7: {
    name: "Day 7",
    date: "26 March 2023",
    timeline: [
      {
        time: "0930",
        title: "Owakudani",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "1200",
        title: "Hakone Sightseeing Cruise",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "1245",
        title: "Hakone Shrine",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "1430",
        title: "Gotemba Premium Outlet",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "1830",
        title: "Hakone Kowakien Yunessun",
        thumbnail: images.itinerary.placeholder
      },
    ]
  },
  8: {
    name: "Day 8",
    date: "27 March 2023",
    timeline: [
      {
        time: "0900",
        title: "Mishima Sky Walk",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "1530",
        title: "Kyoto International Manga Museum",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "1900",
        title: "Kichi Kichi Omurice",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "2100",
        title: "Kyoto Tower",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "2200",
        title: "Hotel Wing International Kyoto Shijo Karasuma",
        thumbnail: images.itinerary.placeholder
      }
    ]
  },
  9: {
    name: "Day 9",
    date: "28 March 2023",
    timeline: [
      {
        time: "0800",
        title: "Arashiyama Bamboo Grove",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "0930",
        title: "Iwatayama Monkey Forest",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "1100",
        title: "Keage incline",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "1230",
        title: "Higashiyama District",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "1600",
        title: "Fushimi Inari Taisha",
        thumbnail: images.itinerary.placeholder
      }
    ]
  },
  10: {
    name: "Day 10",
    date: "29 March 2023",
    timeline: [
      {
        time: "0900",
        title: "Philosopher Path",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "1300",
        title: "Kyoto Station",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "1430",
        title: "Nara Park",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "1600",
        title: "Nara Station",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "1830",
        title: "Dotonburi",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "2000",
        title: "Round1 Arcade",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "2000",
        title: "Kuromon Crystal Hotel",
        thumbnail: images.itinerary.placeholder
      }
    ]
  },
  11: {
    name: "Day 11",
    date: "30 March 2023",
    timeline: [
      {
        time: "1030",
        title: "Kuromon Market",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "1200",
        title: "Nipponbashi Denden Town",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "1430",
        title: "Shinsekai",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "1630",
        title: "Umeda Sky Building",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "2100",
        title: "PC and Retro Bar Space Station",
        thumbnail: images.itinerary.placeholder
      }
    ]
  },
  12: {
    name: "Day 12",
    date: "31 March 2023",
    timeline: [
      {
        time: "1030",
        title: "Osaka Maishima Seaside Park",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "1200",
        title: "Osaka Takoyaki Museum",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "1330",
        title: "Osaka Aquarium Kaiyukan",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "1700",
        title: "Solaniwa Onsen",
        thumbnail: images.itinerary.placeholder
      }
    ]
  },
  13: {
    name: "Day 13",
    date: "1 April 2023",
    timeline: [
      {
        time: "1000",
        title: "Shinsaibashi",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "1200",
        title: "Amerika Mura",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "1400",
        title: "Shinsaibashi-Suji Shopping Street",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "1600",
        title: "Dotonburi",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "2000",
        title: "teamlab Botanic Gardens",
        thumbnail: images.itinerary.placeholder
      }
    ]
  },
  14: {
    name: "Day 14",
    date: "2 April 2023",
    timeline: [
      {
        time: "1300",
        title: "Namba Station",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "1430",
        title: "Kansai International Airport",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "2145",
        title: "Changi Airport",
        thumbnail: images.itinerary.changiAirport
      }
    ]
  }
}

// export type Itinerary = {
//   [day: number]: ItineraryDay
// }

// type ItineraryDay = {
//   name: string,
//   date: string,
//   timeline: Timeline[]
// }

// export type Timeline = {
//   time: string,
//   title: string,
//   thumbnail: string
// }
