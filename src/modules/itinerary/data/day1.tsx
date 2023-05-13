import { ItineraryDay } from "../types/itineraryProps";
import Action from "../components/action";
import Picture from "../components/picture";
import { images, Image } from "@/common/constants/images";

export const dayOne: ItineraryDay = {
  name: "Day 1",
  date: "20 March 2023",
  timeline: [
    {
      time: "0600",
      name: "Narita International Airport",
      thumbnail: images.itinerary.naritaAirport,
      activity: {
        duration: "1 hour",
        narratives: [
          {
            title:
              "Narita or Haneda: Choosing the Perfect Airport for our Japan Adventure",
            content:
              "Choosing which airport to land in when travelling to Tokyo is an important decision. While Haneda airport may seem like the obvious choice due to its proximity to downtown Tokyo, there are other factors to consider.",
          },
          {
            content:
              "Cost was a crucial factor we took into consideration while deciding which airport to fly into. We looked out for any ongoing flight promotions to Narita or Haneda, and also factored in the transportation cost from the airport to Tokyo. We had several options, such as taking the express train, local train, bus, or taxi. Additionally, we considered whether buying a JR pass was worth it, as it covers train fares. However, we ultimately decided against buying the JR pass since we were heading in one direction from Tokyo and wouldn't be using the shinkansen, making the cost not justifiable.",
          },
          {
            content:
              "Time is of the essence, as we had a tight schedule to keep. We had to factor in the time of our flight's arrival and how long it would take us to clear customs, and make sure we had transportation available to take us to our hotel.",
          },
          {
            content:
              "In our case, we had our hearts set on landing in Haneda, but unfortunately, there weren't any flights available at the time of purchase. So, here we are, at Narita International Airport Terminal 1!",
          },
          {
            content: (
              <Picture
                src={Image.naritaAirportWithBro}
                description="Narita Airport with Brother"
              />
            ),
          },
          {
            title:
              "Navigating Japan's Covid Policy: Our Fast-Track Arrival Experience",
            content:
              "To ensure a smooth arrival in Japan during the COVID-19 pandemic, we followed a few steps to fast-track our entry process. Firstly, we registered for a Visit Japan Web account and submitted the necessary documents for pre-verification prior to our trip. This helped us avoid potential delays upon arrival.",
          },
          {
            content:
              "Once we landed in Japan, we presented the blue Visit Japan Web completion screen at various checkpoints on our way to immigration.",
          },
          {
            content: (
              <Picture src={Image.vjwReview} description="Review Completed" />
            ),
          },
          {
            content:
              "After showing our passport, disembarkation card, and completion screen to the immigration officer, we had our fingerprints and picture taken, and were able to quickly proceed to the luggage collection area.",
          },
          {
            content: (
              <Picture
                src={Image.vjwImmigration}
                description="Immigration QR Code"
              />
            ),
          },
          {
            content:
              "We completed the arrival process by registering our passport and QR code for customs declaration at a machine located near the baggage carousel area.",
          },
          {
            content: (
              <Picture
                src={Image.vjwCustoms}
                description="Customs Declaration QR Code"
              />
            ),
          },
          {
            content:
              "Thanks to the Visit Japan Web pre-registration, we were able to save a lot of time on verification and waiting. We highly recommend this step to anyone traveling to Japan during the pandemic. The only setback we encountered was a delay in baggage collection. Overall, the arrival process was a breeze, and we were able to start our adventure in Japan with ease.",
          },
          {
            title: "Suica Card: The Convenient Way to Travel in Japan",
            content:
              "Using a Suica card for transportation in Japan is a hassle-free option. The card can be easily reloaded at convenience stores and ticket vending machines located in subway stations, which have user-friendly interfaces available in English. Additionally, most of the places we planned to visit supported the use of Suica, except for the shinkansen and the romance car. While there is also another card called Pasmo, we decided to go with Suica because of the irresistible penguin design. In fact, we found the Suica vending machine located right next to the Narita Express train ticket machines in this terminal.",
          },
        ],
      },
    },
    {
      time: "0813",
      name: "Narita Express Train",
      thumbnail: images.itinerary.naritaExpress,
      activity: {
        duration: "1 hour 34 mins",
        narratives: [
          {
            content:
              "As first-time buyers of the N'EX tickets, we embarked on a new challenge. Thankfully, the signs guiding us to the N'EX ticketing machine were clear, making it easy for us to find our way.",
          },
          {
            content:
              "The real challenge began when we realized we needed to purchase a Limited Express Train Ticket in addition to the basic fare ticket. To add to the complexity, we also wanted to secure reserved seats. Although the ticketing machines provided English translations, we still felt uncertain about the process.",
          },
          {
            content:
              "To overcome our uncertainty, we decided to match the overall price with what we had found during our online research, which was around ¥3,250. Hoping for the best, we proceeded with the purchase, unsure of what to expect.",
          },
          {
            content:
              "Surprisingly, instead of receiving two physical tickets per person, the machine dispensed only one ticket for each of us. However, upon closer inspection, we discovered that the tickets contained all the information we had requested, including our destination, selected seats and price.",
          },
          {
            content: (
              <Picture
                src={Image.naritaExpressTicket}
                description="Narita Express Train Ticket"
              />
            ),
          },
          {
            content:
              "With our tickets in hand, we made our way to the platform. Being early, we had the luxury of some spare time before our train's arrival. We took advantage of this opportunity to soak in the atmosphere, hanging around the platform and observing our surroundings.",
          },
          {
            content:
              "As the train pulled in, we boarded it, stowed our luggage in the overhead compartments, and settled into our seats. We took advantage of the time on the train to clear our game dailies and charge our phones using a portable charger, ensuring our phones stayed powered up for the adventures ahead.",
          },
          {
            content: (
              <Picture
                src={Image.naritaExpressWithBro}
                description="Onboard Narita Express Train with Brother"
              />
            ),
          },
          {
            content:
              "While gazing through the train's windows, we found that some of the landscapes resembled picturesque scenes straight out of an anime, capturing our imagination and filling us with awe.",
          },
          {
            content: (
              <Picture
                src={Image.naritaExpressViewOutsideWindow}
                description="Scenic view outside window"
              />
            ),
          },
          {
            content:
              "And for a moment of tranquility, we closed our eyes and allowed ourselves to drift into a peaceful slumber, recharging our bodies for the long and exhilarating day that lay ahead.",
          },
        ],
      },
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
            content: (
              <Action
                thumbnail={images.itinerary.tripDotCom}
                thumbnailAlt="Trip.com"
                text="S$111/night"
                buttonLabel="Book"
                buttonUrl="https://sg.trip.com/hotels/tokyo-hotel-detail-994914/shinjuku-washington-hotels"
              />
            ),
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
    },
  ],
};
