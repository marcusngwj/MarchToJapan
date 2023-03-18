import { images } from "@/common/constants/images";
import { ItineraryDay } from "../types/itineraryProps";

export const dayTwo: ItineraryDay = {
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
};
