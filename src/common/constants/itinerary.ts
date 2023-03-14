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
        thumbnail: images.itinerary.changiAirport,
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
          location: {
            addressEn: "78 Airport Blvd., #01 - 304, Singapore 819666",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.69423502865!2d103.98794461449478!3d1.3601001990080244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da3ddea8a3b7d5%3A0xa01626cde3675803!2sChangi%20Lounge!5e0!3m2!1sen!2ssg!4v1678777964804!5m2!1sen!2ssg",
          },
          duration: "45 mins",
          rating: 4.5,
          url: "https://www.jewelchangiairport.com/en/changi-lounge.html",
          narratives: [
            {
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed felis dui, faucibus vel mattis nec, blandit nec neque. Curabitur sollicitudin tempus augue, in ullamcorper nibh feugiat sed. Maecenas eu quam pulvinar felis vulputate vehicula. Cras at posuere ante, non accumsan turpis. Aliquam erat volutpat. Curabitur id congue nibh. Quisque sodales tempus metus quis efficitur. Ut at diam efficitur nunc commodo pulvinar non ac massa. Proin id mauris at leo blandit imperdiet at nec nulla. Duis vitae erat nisl. Maecenas et ipsum leo.",
            },
            {
              title: "tia mo",
              content:
                "Donec finibus arcu sed ultrices tincidunt. Donec scelerisque tempus tempor. Duis ac nunc hendrerit, luctus sapien eget, tempor mauris. Curabitur sed velit vitae urna molestie molestie non vel odio. Sed dui neque, eleifend iaculis gravida id, posuere ac nunc. Morbi consectetur euismod mauris vel lacinia. In sed orci in sapien vulputate lobortis.",
            },
            {
              title: "Test",
              content:
                "Donec finibus arcu sed ultrices tincidunt. Donec scelerisque tempus tempor. Duis ac nunc hendrerit, luctus sapien eget, tempor mauris. Curabitur sed velit vitae urna molestie molestie non vel odio. Sed dui neque, eleifend iaculis gravida id, posuere ac nunc. Morbi consectetur euismod mauris vel lacinia. In sed orci in sapien vulputate lobortis.",
            },
            {
              title: "Again",
              content:
                "Donec finibus arcu sed ultrices tincidunt. Donec scelerisque tempus tempor. Duis ac nunc hendrerit, luctus sapien eget, tempor mauris. Curabitur sed velit vitae urna molestie molestie non vel odio. Sed dui neque, eleifend iaculis gravida id, posuere ac nunc. Morbi consectetur euismod mauris vel lacinia. In sed orci in sapien vulputate lobortis.",
            },
            {
              title: "More things",
              content:
                "Donec finibus arcu sed ultrices tincidunt. Donec scelerisque tempus tempor. Duis ac nunc hendrerit, luctus sapien eget, tempor mauris. Curabitur sed velit vitae urna molestie molestie non vel odio. Sed dui neque, eleifend iaculis gravida id, posuere ac nunc. Morbi consectetur euismod mauris vel lacinia. In sed orci in sapien vulputate lobortis.",
            },
            {
              title: "Some more things",
              content:
                "Donec finibus arcu sed ultrices tincidunt. Donec scelerisque tempus tempor. Duis ac nunc hendrerit, luctus sapien eget, tempor mauris. Curabitur sed velit vitae urna molestie molestie non vel odio. Sed dui neque, eleifend iaculis gravida id, posuere ac nunc. Morbi consectetur euismod mauris vel lacinia. In sed orci in sapien vulputate lobortis.",
            },
            {
              title: "What is more things",
              content:
                "Donec finibus arcu sed ultrices tincidunt. Donec scelerisque tempus tempor. Duis ac nunc hendrerit, luctus sapien eget, tempor mauris. Curabitur sed velit vitae urna molestie molestie non vel odio. Sed dui neque, eleifend iaculis gravida id, posuere ac nunc. Morbi consectetur euismod mauris vel lacinia. In sed orci in sapien vulputate lobortis.",
            },
            {
              title: "super a lot of things",
              content:
                "Donec finibus arcu sed ultrices tincidunt. Donec scelerisque tempus tempor. Duis ac nunc hendrerit, luctus sapien eget, tempor mauris. Curabitur sed velit vitae urna molestie molestie non vel odio. Sed dui neque, eleifend iaculis gravida id, posuere ac nunc. Morbi consectetur euismod mauris vel lacinia. In sed orci in sapien vulputate lobortis.",
            },
          ],
        },
      },
      {
        time: "2100",
        name: "Transit Area",
        thumbnail: images.itinerary.changiAirportTransitArea,
      },
      {
        time: "2220",
        name: "Onboard Scoot",
        thumbnail: images.itinerary.scootTakeOff,
      },
    ],
  },
  1: {
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
        time: "0830",
        name: "Narita Express Train",
        thumbnail: images.itinerary.naritaExpress,
        // To shinjuku
      },
      {
        time: "1100",
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
          duration: "1 hour",
          rating: 4.5,
          url: "https://www.gyukatsu-motomura.com/",
          narratives: [
            {
              content: "Shiok!",
            },
          ],
        },
      },
      {
        time: "1200",
        name: "Takeshita Street",
        thumbnail: images.itinerary.takeshitaStreet,
      },
      {
        time: "1430",
        name: "Yoyogi Park",
        thumbnail: images.itinerary.yoyogiPark,
      },
      {
        time: "1515",
        name: "Meiji Shrine",
        thumbnail: images.itinerary.meijiShrine,
        activity: {
          location: {
            addressEn:
              "1-1 Yoyogikamizonocho, Shibuya City, Tokyo 151-8557, Japan",
            addressJp: "〒151-8557 東京都渋谷区代々木神園町1-1",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.024548707187!2d139.6950987218368!3d35.67639752612453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cb79a4c26e5%3A0x8fca893849103f73!2sMeiji%20Jingu!5e0!3m2!1sen!2ssg!4v1678786190829!5m2!1sen!2ssg",
          },
          duration: "30 mins",
          url: "https://www.meijijingu.or.jp/",
          narratives: [
            {
              content: "Nice place",
            },
          ],
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
        time: "1930",
        name: "Hobo Shinjuku Norengai",
        thumbnail: images.itinerary.hoboShinjukuNorengai,
        activity: {
          location: {
            addressEn:
              "5 Chome-20-10 Sendagaya, Shibuya City, Tokyo 151-0051, Japan",
            addressJp: "〒151-0051 東京都渋谷区千駄ケ谷5丁目20-10",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.7626953687536!2d139.69911052183818!3d35.682844726118994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cc665d0fb99%3A0x2b05f979b7822fa4!2sHobo%20Shinjuku%20Norengai!5e0!3m2!1sen!2ssg!4v1678786852557!5m2!1sen!2ssg",
          },
          duration: "1 hour 30 mins",
          rating: 4,
          url: "http://www.hobo-shinjuku.com/",
          narratives: [
            {
              content: "Hungry!",
            },
          ],
        },
      },
      {
        time: "2130",
        name: "Shinjuku Washington Hotel",
        thumbnail: images.itinerary.shinjukuWashingtonHotel,
        activity: {
          location: {
            addressEn:
              "3 Chome-2-9 Nishishinjuku, Shinjuku City, Tokyo 160-0023, Japan",
            addressJp: "〒160-0023 東京都新宿区西新宿3丁目2-9",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.597112877247!2d139.69113091511832!3d35.68692108019289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cd3045b98f3%3A0x5f5f6283b8da0b62!2sShinjuku%20Washington%20Hotel!5e0!3m2!1sen!2ssg!4v1678787081907!5m2!1sen!2ssg",
          },
          duration: "4 days",
          rating: 4,
          url: "http://washington-hotels.jp/shinjuku/",
          narratives: [
            {
              content: "Goodnight",
            },
          ],
        },
      },
    ],
  },
  2: {
    name: "Day 2",
    date: "21 March 2023",
    timeline: [
      {
        time: "0930",
        name: "Tokyo Roastery | Starbucks Reserve®",
        thumbnail: images.itinerary.tokyoRoastery,
        activity: {
          location: {
            addressEn:
              "2 Chome-19-23 Aobadai, Meguro City, Tokyo 153-0042, Japan",
            addressJp: "〒153-0042 東京都目黒区青葉台2丁目19-23",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.1261210463967!2d139.69039665105169!3d35.64926418010459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b88b7d8f7ab%3A0x2133080e9923eaac!2sStarbucks%20Reserve%C2%AE%20Roastery%20Tokyo!5e0!3m2!1sen!2ssg!4v1678809002828!5m2!1sen!2ssg",
          },
          duration: "1 hour",
          rating: 5,
          url: "https://store.starbucks.co.jp/detail-2381/?utm_source=GMB&utm_medium=organic&utm_campaign=store&utm_content=2381",
          narratives: [
            {
              content: "Umai!"
            }
          ]
        },
      },
      // Then some shibuya street
      {
        time: "0930",
        name: "A Happy Pancake Omotesando",
        thumbnail: images.itinerary.placeholder,
        // Maybe not going since orchard road has
      },
      {
        time: "1230",
        name: "Shimokitazawa",
        thumbnail: images.itinerary.shimokitazawa,
      },
      {
        time: "1430",
        name: "Sunshine City",
        thumbnail: images.itinerary.sunshineCity,
        activity: {
          location: {
            addressEn: "3 Chome-1 Higashiikebukuro, Toshima City, Tokyo 170-8630, Japan",
            addressJp: "〒170-8630 東京都豊島区東池袋3丁目1",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.888082626774!2d139.71734745105366!3d35.72897088008598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d6f134fd653%3A0x51eb1d42c77222c2!2sSunshine%20City!5e0!3m2!1sen!2ssg!4v1678809164932!5m2!1sen!2ssg"
          },
          duration: "1 hour",
          rating: 4,
          url: "https://sunshinecity.jp/",
          narratives: [
            {
              content: "Shopping"
            }
          ]
        }
      },
      {
        time: "1530",
        name: "Animate Ikebukuro",
        thumbnail: images.itinerary.animateIkebukuro,
        activity: {
          location: {
            addressEn: "1 Chome-20-7 Higashiikebukuro, Toshima City, Tokyo 170-0013, Japan",
            addressJp: "〒170-0013 東京都豊島区東池袋1丁目20-7",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.7997016961954!2d139.7132651510536!3d35.7311442800854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d6f4361458b%3A0x503df2e68ddac61a!2sAnimate%20Ikebukuro!5e0!3m2!1sen!2ssg!4v1678809287584!5m2!1sen!2ssg"
          },
          duration: "2 hours",
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
        time: "1730",
        name: "Nakano Broadway",
        thumbnail: images.itinerary.nakanoBroadway,
        activity: {
          location: {
            addressEn: "5 Chome-52-15 Nakano, Nakano City, Tokyo 164-0001, Japan",
            addressJp: "〒164-0001 東京都中野区中野5丁目52-15",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.6899181690983!2d139.66345835105304!3d35.709247480090475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f290b2ddee83%3A0xe1b67e4ee0eff0be!2sNakano%20Broadway!5e0!3m2!1sen!2ssg!4v1678809390958!5m2!1sen!2ssg"
          },
          duration: "1 hour",
          rating: 4,
          url: "https://nakano-broadway.com/",
          narratives: [
            {
              content: "shopping"
            }
          ]
        }
      },
      {
        time: "1900",
        name: "Omoide Yokocho",
        thumbnail: images.itinerary.omoideYokocho,
        activity: {
          location: {
            addressEn: "1 Chome-2 Nishishinjuku, Shinjuku City, Tokyo 160-0023, Japan",
            addressJp: "〒160-0023 東京都新宿区西新宿1丁目2",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.351724269011!2d139.6973784510527!3d35.692961380094324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cd7058ad73f%3A0x908f55935cc13cd3!2sOmoide%20Yokoch%C5%8D!5e0!3m2!1sen!2ssg!4v1678809670671!5m2!1sen!2ssg"
          },
          duration: "1 hour 30 mins",
          rating: 4.5,
          url: "http://shinjuku-omoide.com/",
          narratives: [
            {
              content: "Eat"
            }
          ]
        }
      },
      {
        time: "2030",
        name: "Kabukicho",
        thumbnail: images.itinerary.kabukicho,
      },
    ],
  },
  3: {
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
  },
  4: {
    name: "Day 4",
    date: "23 March 2023",
    timeline: [
      {
        time: "0930",
        name: "Ueno Park",
        thumbnail: images.itinerary.uenoPark,
      },
      {
        time: "1100",
        name: "at-home cafe",
        thumbnail: images.itinerary.atHomeAkiba,
      },
      {
        time: "1200",
        name: "akihabara",
        thumbnail: images.itinerary.placeholder,
      },
      {
        time: "1430",
        name: "Tokyo Joypolis",
        thumbnail: images.itinerary.tokyoJoypolis,
      },
      {
        time: "1800",
        name: "Meguro River",
        thumbnail: images.itinerary.meguroRiver,
      },
      {
        time: "1930",
        name: "Shibuya Yokocho",
        thumbnail: images.itinerary.shibuyaYokocho,
      },
    ],
  },
  5: {
    name: "Day 5",
    date: "24 March 2023",
    timeline: [
      {
        time: "0930",
        name: "University of Tokyo",
        thumbnail: images.itinerary.placeholder,
      },
      {
        time: "1200",
        name: "Ameyoko Shopping Street",
        thumbnail: images.itinerary.placeholder,
      },
      {
        time: "1530",
        name: "Asakusa",
        thumbnail: images.itinerary.placeholder,
      },
      {
        time: "1800",
        name: "Tokyo Skytree",
        thumbnail: images.itinerary.placeholder,
      },
      {
        time: "2100",
        name: "Hailey Cafe",
        thumbnail: images.itinerary.placeholder,
      },
    ],
  },
  6: {
    name: "Day 6",
    date: "25 March 2023",
    timeline: [
      {
        time: "0900",
        name: "AnimeJapan",
        thumbnail: images.itinerary.placeholder,
      },
      {
        time: "1530",
        name: "Tokyo Station",
        thumbnail: images.itinerary.placeholder,
      },
      {
        time: "1830",
        name: "Hakone Kowakien Yunessun",
        thumbnail: images.itinerary.placeholder,
      },
      {
        time: "2000",
        name: "Wisterian Life Club Verde No Mori",
        thumbnail: images.itinerary.placeholder,
      },
    ],
  },
  7: {
    name: "Day 7",
    date: "26 March 2023",
    timeline: [
      {
        time: "0930",
        name: "Owakudani",
        thumbnail: images.itinerary.placeholder,
      },
      {
        time: "1200",
        name: "Hakone Sightseeing Cruise",
        thumbnail: images.itinerary.placeholder,
      },
      {
        time: "1245",
        name: "Hakone Shrine",
        thumbnail: images.itinerary.placeholder,
      },
      {
        time: "1430",
        name: "Gotemba Premium Outlet",
        thumbnail: images.itinerary.placeholder,
      },
      {
        time: "1830",
        name: "Hakone Kowakien Yunessun",
        thumbnail: images.itinerary.placeholder,
      },
    ],
  },
  8: {
    name: "Day 8",
    date: "27 March 2023",
    timeline: [
      {
        time: "0900",
        name: "Mishima Sky Walk",
        thumbnail: images.itinerary.placeholder,
      },
      {
        time: "1530",
        name: "Kyoto International Manga Museum",
        thumbnail: images.itinerary.placeholder,
      },
      {
        time: "1900",
        name: "Kichi Kichi Omurice",
        thumbnail: images.itinerary.placeholder,
      },
      {
        time: "2100",
        name: "Kyoto Tower",
        thumbnail: images.itinerary.placeholder,
      },
      {
        time: "2200",
        name: "Hotel Wing International Kyoto Shijo Karasuma",
        thumbnail: images.itinerary.placeholder,
      },
    ],
  },
  9: {
    name: "Day 9",
    date: "28 March 2023",
    timeline: [
      {
        time: "0800",
        name: "Arashiyama Bamboo Grove",
        thumbnail: images.itinerary.placeholder,
      },
      {
        time: "0930",
        name: "Iwatayama Monkey Forest",
        thumbnail: images.itinerary.placeholder,
      },
      {
        time: "1100",
        name: "Keage incline",
        thumbnail: images.itinerary.placeholder,
      },
      {
        time: "1230",
        name: "Higashiyama District",
        thumbnail: images.itinerary.placeholder,
      },
      {
        time: "1600",
        name: "Fushimi Inari Taisha",
        thumbnail: images.itinerary.placeholder,
      },
    ],
  },
  10: {
    name: "Day 10",
    date: "29 March 2023",
    timeline: [
      {
        time: "0900",
        name: "Philosopher Path",
        thumbnail: images.itinerary.placeholder,
      },
      {
        time: "1300",
        name: "Kyoto Station",
        thumbnail: images.itinerary.placeholder,
      },
      {
        time: "1430",
        name: "Nara Park",
        thumbnail: images.itinerary.placeholder,
      },
      {
        time: "1600",
        name: "Nara Station",
        thumbnail: images.itinerary.placeholder,
      },
      {
        time: "1830",
        name: "Dotonburi",
        thumbnail: images.itinerary.placeholder,
      },
      {
        time: "2000",
        name: "Round1 Arcade",
        thumbnail: images.itinerary.placeholder,
      },
      {
        time: "2000",
        name: "Kuromon Crystal Hotel",
        thumbnail: images.itinerary.placeholder,
      },
    ],
  },
  11: {
    name: "Day 11",
    date: "30 March 2023",
    timeline: [
      {
        time: "1030",
        name: "Kuromon Market",
        thumbnail: images.itinerary.placeholder,
      },
      {
        time: "1200",
        name: "Nipponbashi Denden Town",
        thumbnail: images.itinerary.placeholder,
      },
      {
        time: "1430",
        name: "Shinsekai",
        thumbnail: images.itinerary.placeholder,
      },
      {
        time: "1630",
        name: "Umeda Sky Building",
        thumbnail: images.itinerary.placeholder,
      },
      {
        time: "2100",
        name: "PC and Retro Bar Space Station",
        thumbnail: images.itinerary.placeholder,
      },
    ],
  },
  12: {
    name: "Day 12",
    date: "31 March 2023",
    timeline: [
      {
        time: "1030",
        name: "Osaka Maishima Seaside Park",
        thumbnail: images.itinerary.placeholder,
      },
      {
        time: "1200",
        name: "Osaka Takoyaki Museum",
        thumbnail: images.itinerary.placeholder,
      },
      {
        time: "1330",
        name: "Osaka Aquarium Kaiyukan",
        thumbnail: images.itinerary.placeholder,
      },
      {
        time: "1700",
        name: "Solaniwa Onsen",
        thumbnail: images.itinerary.placeholder,
      },
    ],
  },
  13: {
    name: "Day 13",
    date: "1 April 2023",
    timeline: [
      {
        time: "1000",
        name: "Shinsaibashi",
        thumbnail: images.itinerary.placeholder,
      },
      {
        time: "1200",
        name: "Amerika Mura",
        thumbnail: images.itinerary.placeholder,
      },
      {
        time: "1400",
        name: "Shinsaibashi-Suji Shopping Street",
        thumbnail: images.itinerary.placeholder,
      },
      {
        time: "1600",
        name: "Dotonburi",
        thumbnail: images.itinerary.placeholder,
      },
      {
        time: "2000",
        name: "teamlab Botanic Gardens",
        thumbnail: images.itinerary.placeholder,
      },
    ],
  },
  14: {
    name: "Day 14",
    date: "2 April 2023",
    timeline: [
      {
        time: "1300",
        name: "Namba Station",
        thumbnail: images.itinerary.placeholder,
      },
      {
        time: "1430",
        name: "Kansai International Airport",
        thumbnail: images.itinerary.placeholder,
      },
      {
        time: "2145",
        name: "Changi Airport",
        thumbnail: images.itinerary.changiAirport,
      },
    ],
  },
};

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
