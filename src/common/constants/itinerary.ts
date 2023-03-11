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
        name: "Changi Airport",
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
        name: "Changi Lounge",
        thumbnail: images.itinerary.changiAirportLounge,
        activity: {
          location: "78 Airport Blvd., Singapore 819666",
          duration: "45 mins",
          rating: 4.5,
          url: "https://www.jewelchangiairport.com/en/changi-lounge.html",
          narratives: [
            {
              content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed felis dui, faucibus vel mattis nec, blandit nec neque. Curabitur sollicitudin tempus augue, in ullamcorper nibh feugiat sed. Maecenas eu quam pulvinar felis vulputate vehicula. Cras at posuere ante, non accumsan turpis. Aliquam erat volutpat. Curabitur id congue nibh. Quisque sodales tempus metus quis efficitur. Ut at diam efficitur nunc commodo pulvinar non ac massa. Proin id mauris at leo blandit imperdiet at nec nulla. Duis vitae erat nisl. Maecenas et ipsum leo."
            },
            {
              title:"tia mo",
              content: "Donec finibus arcu sed ultrices tincidunt. Donec scelerisque tempus tempor. Duis ac nunc hendrerit, luctus sapien eget, tempor mauris. Curabitur sed velit vitae urna molestie molestie non vel odio. Sed dui neque, eleifend iaculis gravida id, posuere ac nunc. Morbi consectetur euismod mauris vel lacinia. In sed orci in sapien vulputate lobortis."
            },
            {
              title:"Test",
              content: "Donec finibus arcu sed ultrices tincidunt. Donec scelerisque tempus tempor. Duis ac nunc hendrerit, luctus sapien eget, tempor mauris. Curabitur sed velit vitae urna molestie molestie non vel odio. Sed dui neque, eleifend iaculis gravida id, posuere ac nunc. Morbi consectetur euismod mauris vel lacinia. In sed orci in sapien vulputate lobortis."
            },
            {
              title:"Again",
              content: "Donec finibus arcu sed ultrices tincidunt. Donec scelerisque tempus tempor. Duis ac nunc hendrerit, luctus sapien eget, tempor mauris. Curabitur sed velit vitae urna molestie molestie non vel odio. Sed dui neque, eleifend iaculis gravida id, posuere ac nunc. Morbi consectetur euismod mauris vel lacinia. In sed orci in sapien vulputate lobortis."
            },
            {
              title:"More things",
              content: "Donec finibus arcu sed ultrices tincidunt. Donec scelerisque tempus tempor. Duis ac nunc hendrerit, luctus sapien eget, tempor mauris. Curabitur sed velit vitae urna molestie molestie non vel odio. Sed dui neque, eleifend iaculis gravida id, posuere ac nunc. Morbi consectetur euismod mauris vel lacinia. In sed orci in sapien vulputate lobortis."
            },
            {
              title:"Some more things",
              content: "Donec finibus arcu sed ultrices tincidunt. Donec scelerisque tempus tempor. Duis ac nunc hendrerit, luctus sapien eget, tempor mauris. Curabitur sed velit vitae urna molestie molestie non vel odio. Sed dui neque, eleifend iaculis gravida id, posuere ac nunc. Morbi consectetur euismod mauris vel lacinia. In sed orci in sapien vulputate lobortis."
            },
            {
              title:"What is more things",
              content: "Donec finibus arcu sed ultrices tincidunt. Donec scelerisque tempus tempor. Duis ac nunc hendrerit, luctus sapien eget, tempor mauris. Curabitur sed velit vitae urna molestie molestie non vel odio. Sed dui neque, eleifend iaculis gravida id, posuere ac nunc. Morbi consectetur euismod mauris vel lacinia. In sed orci in sapien vulputate lobortis."
            },
            {
              title:"super a lot of things",
              content: "Donec finibus arcu sed ultrices tincidunt. Donec scelerisque tempus tempor. Duis ac nunc hendrerit, luctus sapien eget, tempor mauris. Curabitur sed velit vitae urna molestie molestie non vel odio. Sed dui neque, eleifend iaculis gravida id, posuere ac nunc. Morbi consectetur euismod mauris vel lacinia. In sed orci in sapien vulputate lobortis."
            }
          ]
        }
      },
      {
        time: "2100",
        name: "Transit Area",
        thumbnail: images.itinerary.changiAirportTransitArea
      },
      {
        time: "2220",
        name: "Onboard Scoot",
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
        name: "Narita International Airport",
        thumbnail: images.itinerary.naritaAirport
        // Breakfast
        // Welcome Suica card
        // settle train tix
      },
      {
        time: "0830",
        name: "Narita Express Train",
        thumbnail: images.itinerary.naritaExpress
        // To shinjuku
      },
      {
        time: "1100",
        name: "Gyukatsu Motomura",
        thumbnail: images.itinerary.gyukatsuMotomura
      },
      {
        time: "1200",
        name: "Takeshita Street",
        thumbnail: images.itinerary.takeshitaStreet
      },
      {
        time: "1430",
        name: "Yoyogi Park",
        thumbnail: images.itinerary.yoyogiPark
      },
      {
        time: "1515",
        name: "Meiji Shrine",
        thumbnail: images.itinerary.meijiShrine
      },
      {
        time: "1640",
        name: "Shibuya Sky",
        thumbnail: images.itinerary.shibuyaSky
      },
      {
        time: "1930",
        name: "Hobo Shinjuku Norengai",
        thumbnail: images.itinerary.hoboShinjukuNorengai
      },
      {
        time: "2130",
        name: "Shinjuku Washington Hotel",
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
        name: "Tokyo Roastery | Starbucks Reserve",
        thumbnail: images.itinerary.tokyoRoastery
      },
      // Then some shibuya street
      {
        time: "0930",
        name: "A Happy Pancake Omotesando",
        thumbnail: images.itinerary.placeholder
        // Maybe not going since orchard road has
      },
      {
        time: "1230",
        name: "Shimokitazawa",
        thumbnail: images.itinerary.shimokitazawa
      },
      {
        time: "1430",
        name: "Sunshine City",
        thumbnail: images.itinerary.sunshineCity
      },
      {
        time: "1530",
        name: "Animate Ikebukuro",
        thumbnail: images.itinerary.animateIkebukuro
      },
      {
        time: "1730",
        name: "Nakano Broadway",
        thumbnail: images.itinerary.nakanoBroadway
      },
      {
        time: "1900",
        name: "Omoide Yokocho",
        thumbnail: images.itinerary.omoideYokocho
      },
      {
        time: "2030",
        name: "Kabukicho",
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
        name: "Ryogoku Kokugikan",
        thumbnail: images.itinerary.ryogokuKokugikan
      },
      {
        time: "1130",
        name: "DAWN Avatar Robot Café",
        thumbnail: images.itinerary.dawnAvatarRobotCafe
      },
      {
        time: "1230",
        name: "Akihabara",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "1500",
        name: "Yurakucho",
        thumbnail: images.itinerary.yurakucho
      },
      {
        time: "1700",
        name: "RED° TOKYO TOWER",
        thumbnail: images.itinerary.redTokyoTower
      },
      {
        time: "2000",
        name: "Ryu no Miyako Inshokugai Shinjuku Higashiguchi Yokocho",
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
        name: "Ueno Park",
        thumbnail: images.itinerary.uenoPark
      },
      {
        time: "1100",
        name: "at-home cafe",
        thumbnail: images.itinerary.atHomeAkiba
      },
      {
        time: "1200",
        name: "akihabara",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "1430",
        name: "Tokyo Joypolis",
        thumbnail: images.itinerary.tokyoJoypolis
      },
      {
        time: "1800",
        name: "Meguro River",
        thumbnail: images.itinerary.meguroRiver
      },
      {
        time: "1930",
        name: "Shibuya Yokocho",
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
        name: "University of Tokyo",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "1200",
        name: "Ameyoko Shopping Street",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "1530",
        name: "Asakusa",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "1800",
        name: "Tokyo Skytree",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "2100",
        name: "Hailey Cafe",
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
        name: "AnimeJapan",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "1530",
        name: "Tokyo Station",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "1830",
        name: "Hakone Kowakien Yunessun",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "2000",
        name: "Wisterian Life Club Verde No Mori",
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
        name: "Owakudani",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "1200",
        name: "Hakone Sightseeing Cruise",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "1245",
        name: "Hakone Shrine",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "1430",
        name: "Gotemba Premium Outlet",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "1830",
        name: "Hakone Kowakien Yunessun",
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
        name: "Mishima Sky Walk",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "1530",
        name: "Kyoto International Manga Museum",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "1900",
        name: "Kichi Kichi Omurice",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "2100",
        name: "Kyoto Tower",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "2200",
        name: "Hotel Wing International Kyoto Shijo Karasuma",
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
        name: "Arashiyama Bamboo Grove",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "0930",
        name: "Iwatayama Monkey Forest",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "1100",
        name: "Keage incline",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "1230",
        name: "Higashiyama District",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "1600",
        name: "Fushimi Inari Taisha",
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
        name: "Philosopher Path",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "1300",
        name: "Kyoto Station",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "1430",
        name: "Nara Park",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "1600",
        name: "Nara Station",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "1830",
        name: "Dotonburi",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "2000",
        name: "Round1 Arcade",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "2000",
        name: "Kuromon Crystal Hotel",
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
        name: "Kuromon Market",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "1200",
        name: "Nipponbashi Denden Town",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "1430",
        name: "Shinsekai",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "1630",
        name: "Umeda Sky Building",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "2100",
        name: "PC and Retro Bar Space Station",
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
        name: "Osaka Maishima Seaside Park",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "1200",
        name: "Osaka Takoyaki Museum",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "1330",
        name: "Osaka Aquarium Kaiyukan",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "1700",
        name: "Solaniwa Onsen",
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
        name: "Shinsaibashi",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "1200",
        name: "Amerika Mura",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "1400",
        name: "Shinsaibashi-Suji Shopping Street",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "1600",
        name: "Dotonburi",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "2000",
        name: "teamlab Botanic Gardens",
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
        name: "Namba Station",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "1430",
        name: "Kansai International Airport",
        thumbnail: images.itinerary.placeholder
      },
      {
        time: "2145",
        name: "Changi Airport",
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
