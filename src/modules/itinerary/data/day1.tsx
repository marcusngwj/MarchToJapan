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
                description="Narita Airport with brother"
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
                description="Onboard Narita Express Train with brother"
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
        rating: 3.5,
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
            title: "Hotel Review",
            content:
              "The room at the hotel was on the smaller side, with minimal walking space and limited room to open our luggage. However, despite the compact size, the service staff were incredibly friendly, approachable, and always willing to assist us. During check-in, the staff suggested that we join their membership program, which would entitle us to four complimentary bottles of mineral water. It was a thoughtful gesture that added value to our stay. Checking out was a breeze, thanks to the easy self-checkout process provided by the hotel. It made our departure hassle-free and convenient.",
          },
          {
            content:
              "While we were aware of an underpass walkway connecting the station to the hotel, we had difficulty locating it. Even when we managed to find it, the challenge arose when we returned to the hotel at night using different train lines and exits. Each time, it took us some time to navigate our way back to the underpass walkway and eventually find our way home.",
          },
          {
            title: "Navigating Our Way to the Hotel",
            content:
              "After a long flight and train journey, we finally arrived at Shinjuku Station. As soon as we stepped off the train, we made a beeline for the restroom to relieve ourselves. Having not eaten anything since our meal at Changi Lounge, we were feeling famished, cold, and light-headed. To remedy the situation, we quickly grabbed a blueberry sandwich from a nearby shop inside the station.",
          },
          {
            content:
              "Using Google Maps, we tried to locate our hotel, but the locator kept jumping across streets, leading us to walk detours. It took us a while, but eventually, it stabilized and we managed to find our way.",
          },
          {
            content:
              "As we walked towards our hotel, we were delighted to notice that the sakura trees nearby were already in bloom. It was our first sight of cherry blossoms and we hoped to encounter more beautifully bloomed trees during our journey ahead.",
          },
          {
            content: (
              <Picture
                src={Image.bunkaGakuenSakura}
                description="Sakura Trees outside Bunka Gakuen University"
              />
            ),
          },
          {
            content:
              "As planned, we arrived at our hotel before the check-in time and left our luggage with the hotel personnel. They stored it in a designated storage area, and we headed off to have our first meal in Japan!",
          },
          {
            content: (
              <Picture
                src={Image.shinjukuHotelWithBro}
                description="At Shinjuku Washington Hotel with brother"
              />
            ),
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
            content:
              "With countless positive comments circulating online about this restaurant, we couldn't help but approach it with a hint of skepticism. We wondered if the reviews were exaggerating the experience, creating unrealistic expectations and leading us into a typical tourist trap. However, our curiosity and desire to uncover the truth led us to give it a try.",
          },
          {
            content:
              "As we approached the restaurant, families and groups of people were already patiently waiting in the open, with a representative holding their spot in line. The sight of the long queue, stretching from the basement entrance to the street level, served as a clear testament to the restaurant's immense popularity.",
          },
          {
            content: (
              <Picture
                src={Image.gyukatsuMotomuraEntranceWithBro}
                description="Entrance of Gyukatsu Motomura With brother"
              />
            ),
          },
          {
            content:
              "The menu had three options, varying by the amount of beef cutlet served, with an option to upgrade the set to include a soft drink or alcohol. ",
          },
          {
            content: (
              <Picture src={Image.gyukatsuMotomuraMenu} description="Menu" />
            ),
          },
          {
            content:
              "While waiting in the queue, we had the pleasure of encountering a delightful waitress. We were impressed by her multilingual skills, as she effortlessly conversed in Japanese, English, and Korean. With a friendly demeanor, she patiently took our orders and even asked if we would like any drinks to accompany our meal. We requested black oolong tea and inquired about the availability of a warm version. With a polite smile, she regretfully informed us that only the cold version was available.",
          },
          {
            content:
              "When our turn finally came, we were guided to the counter seats where we could see the kitchen in action. To our delight, each table was equipped with a personal stone grill, creating an interactive dining experience. Having placed our orders while waiting in the queue, our set meals arrived promptly after we settled down. We had opted for the two cutlet set each. As the restaurant served delicious roasted tea, we decided to save our bottles of oolong tea for later, appreciating the complementary beverage provided.",
          },
          {
            content: (
              <Picture
                src={Image.gyukatsuMotomuraSetMeal}
                description="2 Cutlet Set Meal"
              />
            ),
          },
          {
            content:
              "Initially, we were hugging our bags until the waitress came to tell us that there was a compartment beneath the table to place our belongings. In Singlish terms, we were very swaku.",
          },
          {
            content:
              "Grilling the beef cutlets was quite fun, and we could customize them to our preferred level of doneness since the duration of grilling was up to us.",
          },
          {
            content: (
              <Picture
                src={Image.gyukatsuMotomuraSelfService}
                description="Grilling Cutlet"
              />
            ),
          },
          {
            content:
              "We had no regrets and highly recommend to visit this restaurant. The value for money surpassed our expectations, despite the cozy size of the establishment. We were so impressed that we vowed to return in the future. Little did we know, this first meal in Japan had set the bar incredibly high for all the meals to come.",
          },
          {
            content: (
              <Picture
                src={Image.gyukatsuMotomuraMealWithBro}
                description="Wefie"
              />
            ),
          },
        ],
      },
    },
    {
      time: "1315",
      name: "Takeshita Street",
      thumbnail: images.itinerary.takeshitaStreet,
      activity: {
        duration: "30 mins",
        narratives: [
          {
            content:
              "After indulging in a satisfying meal at Gyukatsu Motomura, we decided to explore the vibrant Takeshita Street nearby. This lively street in Harajuku is famous for its quirky shops, bursting with colorful and unconventional clothing and accessories. It's a haven for those with a sweet tooth, as it offers a plethora of crepe stores.",
          },
          {
            content:
              "As soon as we set foot on Takeshita Street, we couldn't miss the numerous crepe shops lining the way. However, each one had an incredibly long queue of eager customers. With our tight schedule in mind, we reluctantly decided to forgo the crepes this time.",
          },
          {
            content: (
              <Picture
                src={Image.takeshitaCrepeMenu}
                description="Menu of one of the Crepe Shops in Takeshita Street"
              />
            ),
          },
          {
            content:
              "Aside from the crepe shops, we also noticed a few gachapon stores along the street. Curiosity piqued, we stepped into one to take a look. However, most of the items inside didn't catch our interest. We had anticipated more anime-related goodies in the capsules, but it turned out that many of them were animal figurines and other collector's items that didn't resonate with us. So, we decided it wouldn't bring us much joy to try our luck with them.",
          },
          {
            content: (
              <Picture
                src={Image.takeshitaCapsuleShopEntrance}
                description="Entrance of capsule toy shop"
              />
            ),
          },
          {
            content:
              "The street was bustling with crowds, and truth be told, many of the shops and food options didn't capture our attention. We didn't linger for too long, simply passing through to check off this item from our itinerary. Our main goal was to witness and experience Takeshita Street at least once, even if it didn't hold much allure for us personally.",
          },
          {
            content: (
              <Picture
                src={Image.takeshitaWithBro}
                description="Takeshita Street main gate with brother"
              />
            ),
          },
        ],
      },
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
            content:
              "During the planning of our trip, due to our tight schedule, we had to choose only one shrine to visit, and we settled on Meiji Shrine. Initially, after passing through Takeshita Street, we intended to head towards Yoyogi Park, but somehow ended up walking towards Meiji Shrine instead.",
          },
          {
            content: (
              <Picture
                src={Image.meijiShrineWithPikachu}
                description="Meiji Shrine Torii with brother"
              />
            ),
          },
          {
            content:
              "Honoring the legacy of Emperor Meiji and Empress Shōken, whose influential roles shaped Japan's development, this iconic landmark stands as a symbolic tribute, serving as a cherished reminder of their historical significance.",
          },
          {
            content:
              "As we approached the shrine, we noticed that the area is nestled within a peaceful forest. Despite the vibrant and bustling atmosphere outside, the surroundings were surprisingly serene and green. We walked along the side as we passed through the torii gate, understanding that the center space is reserved for the gods to pass through.",
          },
          {
            content: (
              <Picture
                src={Image.meijiShrineWithBro}
                description="Meiji Shrine Torii with brother"
              />
            ),
          },
          {
            content:
              "During our walk, we encountered a display of sake and wine barrels along the approach. There were more than 200 traditional sake barrels donated to the shrine by famous breweries across the country as a sacred offering to Emperor Meiji.",
          },
          {
            content: (
              <Picture
                src={Image.meijiShrineBarrels}
                description="Sake barrels"
              />
            ),
          },
          {
            content:
              "After about a 10-minute walk, we reached the main buildings of Meiji Shrine. We made offerings and offered our prayers, following the customs of Shinto worshippers. Many visitors wrote their prayers or wishes on Ema, small wooden plaques, which are left hanging at the shrine for the spirits or gods to receive.",
          },
          {
            content: <Picture src={Image.meijiShrineEma} description="Ema" />,
          },
          {
            content:
              "Another common practice is to write wishes on a piece of paper and place it in an envelope along with some money as a token offering. These written wishes and prayers are then placed before the shrine's altar during a ritual ceremony.",
          },
          {
            content: (
              <Picture
                src={Image.meijiShrineWish}
                description="Wish Offering"
              />
            ),
          },
          {
            content:
              "Before leaving the shrine, we came across a shop selling charms. There was a wide variety of charms available at different prices. These intricately crafted charms held diverse blessings, ranging from health and wealth to happiness and more. We paused for a while, contemplating whether it would be appropriate to buy them as thoughtful gifts for our loved ones. After careful consideration, we chose to forgo the opportunity, as we wanted to avoid any potential clash in religious beliefs.",
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
        narratives: [
          {
            content:
              "After our visit to Meiji Shrine, we just turned the corner and found ourselves at Yoyogi Park. Initially, we hadn't planned to catch cherry blossoms here. Our main intention was to visit the transparent toilet installation that we had heard about.",
          },
          {
            content:
              "To our surprise, the park was adorned with blooming sakura trees. As we walked further in, we came across a beautiful stretch of road lined with cherry blossoms on both sides. The park was buzzing with activity, as many people had come prepared with picnic mats and food. Locals and tourists alike gathered here, enjoying the festive atmosphere. We even spotted a group of students sitting on a large mat, eating and playing games. It was the perfect opportunity to capture our first official photo with the sakura trees.",
          },
          {
            content: (
              <Picture
                src={Image.yoyogiParkWithBro}
                description="Cherry Blossoms in Yoyogi Park with brother"
              />
            ),
          },
          {
            content:
              "Although we had brought a picnic mat with us, originally intended for Ueno Park, we didn't expect that it could be used here. Unfortunately, we had left it back at the hotel, and with our tight schedule, we couldn't stay long. We had to make our way to Shibuya Sky to catch the sunset.",
          },
          {
            content:
              "We continued our quest to find the transparent toilet, which was said to be somewhere in the park. We had been fascinated by this unique installation while researching it online. Designed by the renowned architect Shigeru Ban, the glass walls of the toilet cubicles turned opaque when locked. This toilet was part of the Tokyo Toilet Project, an initiative by The Nippon Foundation and leading creators to renovate public toilets in Shibuya.",
          },
          {
            content:
              "However, we soon realized that finding the toilet wasn't as straightforward as we had hoped. It turned out to be quite out of the way, and when we finally reached it, we were disappointed to discover a notice stating that the toilet was currently in an opaque state at all times. Despite the letdown, we decided to use the toilet and take a look inside. It was relatively clean and modern, considering it was a public toilet in the middle of a park. There was even a touch of an infinity mirror, which added to the interesting experience. Overall, though, it didn't quite live up to our initial excitement.",
          },
          {
            content: (
              <Picture
                src={Image.yoyogiParkTransparentToilet}
                description="Transparent Toilet"
              />
            ),
          },
          {
            content:
              "After using the toilet, we tried to make our way back to the train station to continue our journey to Shibuya Sky. Unfortunately, our reliance on Google Maps led us in a big roundabout detour, and we ended up back at Meiji Shrine once again. We couldn't help but wonder if it was a result of not purchasing the good luck charm from the shrine's shop earlier. Along the way, we stumbled upon a lovely open field and decided to take some photos with the sun in the background before finally heading in the correct direction towards the train station.",
          },
          {
            content: (
              <Picture
                src={Image.meijiShrineVicinityWithBro}
                description="Park in the vicinity of Meiji Shrine with brother"
              />
            ),
          },
        ],
      },
    },
    {
      time: "1630",
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
        duration: "2 hours",
        rating: 5,
        url: "https://www.shibuya-scramble-square.com/sky/",
        narratives: [
          {
            content:
              "Shibuya Sky was the highlight of our day, offering us a stunning experience from day to night. We specifically chose this timing to capture the golden hour and witness the transition from daytime to sunset, followed by the illuminated Tokyo skyline.",
          },
          {
            content:
              "To save some money, we purchased our tickets online as advised on their website. We opted to use Klook and took advantage of our UOB Absolute Cashback Card to earn a 1.7% cashback.",
          },
          {
            content:
              "Finding our way to Shibuya Scramble Square took a bit of effort due to ongoing construction blocking our view, but we managed to make it on time. There was a short queue for the lift that would take us to the entrance of Shibuya Sky on the 14th floor, but the wait wasn't too long.",
          },
          {
            content:
              "Since we had digital copies of our tickets, we could immediately join the elevator queue to reach the 45th floor. As the doors closed, a captivating presentation played on the ceiling, taking us on a virtual journey through space and time.",
          },
          {
            content: (
              <Picture
                src={Image.shibuyaSkyElevatorDisplay}
                description="Shibuya Sky Elevator Display"
              />
            ),
          },
          {
            content:
              "After exiting the elevator, we headed to the locker room to store our belongings. We had a moment of uncertainty about whether we should also store our waist pouches and small sling bags containing our valuables. After some contemplation, we decided to trust the integrity of the lockers and stored everything, fortunately having a 100 yen coin handy for the purpose.",
          },
          {
            content: (
              <Picture
                src={Image.shibuyaSkyPathToLocker}
                description="Towards Shibuya Sky Locker Room"
              />
            ),
          },
          {
            content:
              "Once we left the locker room, we reached the outside area where a popular photo spot awaited us. However, seeing the long line of eager visitors, we decided to bide our time and soak in the beauty of the surroundings instead. Eventually, though, with a tinge of sadness, we had to give it a miss and move on to the next level.",
          },
          {
            content: (
              <Picture
                src={Image.shibuyaSkyEscalatorWithBro}
                description="Shibuya Sky Escalator with brother"
              />
            ),
          },
          {
            content:
              "In this wide-open space, we were greeted with an unobstructed view of the sky, as there's no roof overhead to limit our vision. The entire area boasts 360-degree fully transparent glass, allowing you to immerse yourself in the breathtaking scenery. With the wind sweeping through and the weather cooperating beautifully, the view from here was simply spectacular.",
          },
          {
            content: (
              <Picture
                src={Image.shibuyaSkyRoof}
                description="Shibuya Sky Elevator Display"
              />
            ),
          },
          {
            content:
              "The top of Shibuya Sky provided a breathtaking view, complete with a spacious helipad. It was the perfect place to take a break and soak in the scenic view and pleasant weather. Although the hammock area was fully occupied, we didn't let that dampen our spirits.",
          },
          {
            content: (
              <Picture
                src={Image.shibuyaSkyHelipad}
                description="Shibuya Sky Helipad"
              />
            ),
          },
          {
            content:
              "After a leisurely walk around, we made our way to the main highlight of our visit—the renowned and heavily promoted Shibuya Edge. To our dismay, a substantial queue stretched out before us. As we approached the end of the line, a staff member stood there, holding a sign displaying estimated waiting times in multiple languages, revealing that we could expect to wait for approximately an hour. Furthermore, we learned that each group would only have 30 seconds to capture their desired photos once their turn arrived. Without hesitation, we wholeheartedly agreed to the terms and eagerly joined the queue, knowing that the experience would be worth the wait.",
          },
          {
            content: (
              <Picture
                src={Image.shibuyaSkyQueueWithBro}
                description="Queueing for Shibuya Sky Edge with brother"
              />
            ),
          },
          {
            content:
              "As we waited, we noticed the sun beginning to set, causing a bit of concern that we might miss the opportunity to take daytime photos. As we got closer, we saw others in the queue taking photos near the edge. Although it wasn't the iconic corner photo with the vast landscape in the background, we still managed to capture some good shots.",
          },
          {
            content: (
              <div>
                <Picture
                  src={Image.shibuyaSkyQueueBernard}
                  description="Photo of Bernard while queueing for Shibuya Sky Edge"
                />
                <Picture
                  src={Image.shibuyaSkyQueueMarcus}
                  description="Photo of Marcus while queueing for Shibuya Sky Edge"
                />
              </div>
            ),
          },
          {
            content:
              "As we inched closer to our turn, we quickly planned our poses, fully aware of the fleeting 30-second time limit. We agreed to adopt a relaxed posture with our arms resting against the ledge.",
          },
          {
            content:
              "Due to the prevailing Covid regulations, seeking assistance from strangers to take photos was not permitted. Instead, the staff on site would capture official photos with their own camera, which could be purchased afterwards. However, these staff members were not permitted to handle our personal phones or devices.",
          },
          {
            content:
              "Nevertheless, as we observed those ahead of us, we noticed a heartwarming trend emerging. Many visitors were forming instant connections and forging new 'friendships'. Recognizing this clever workaround within the regulations, we decided to embrace the spirit of this trend. Just in front of us stood a young Taiwanese woman, patiently awaiting her boyfriend's arrival. Recognizing an opportunity, we kindly offered our assistance, and to our delight, they graciously returned the favour.",
          },
          {
            content:
              "Finally, it was our moment. Fortunately, the sky hadn't turned completely dark yet. We quickly got into position, but being somewhat awkward with photos, our agreed-upon relaxed position somehow turned into a playful punch. Surprisingly, it turned out to be a great photo with a plane flying by in the background.",
          },
          {
            content: (
              <div>
                <Picture
                  src={Image.shibuyaSkyEdgeRestWithBro}
                  description="Resting Photo of us at Shibuya Sky Edge"
                />
                <Picture
                  src={Image.shibuyaSkyEdgeFistWithBro}
                  description="Brofist at Shibuya Sky Edge"
                />
              </div>
            ),
          },
          {
            content:
              "By this time, the sun had almost set, and the temperature had dropped, making us shiver. Despite the chill in the air, our spirits remained high, and we energetically explored every corner of the elevated vantage point in search of new photo opportunities. The freezing conditions failed to dampen our enthusiasm as we braved the cold, determined to capture as many memorable moments as possible before the day's end.",
          },
          {
            content: (
              <Picture
                src={Image.shibuyaSkyCompassWithBro}
                description="Shibuya Sky Compass"
              />
            ),
          },
          {
            content:
              "Once we had our fill of the cold, we descended and returned indoors. Just as we reached the lower level, the sun had fully set, revealing a beautiful dark sky. Through the glass, we could still enjoy the stunning Tokyo skyline.",
          },
          {
            content: (
              <Picture
                src={Image.shibuyaSkyNightCityscape}
                description="Tokyo Night Cityscape"
              />
            ),
          },
          {
            content:
              "Perched at such a height, we were granted an awe-inspiring view that encompassed the renowned Shibuya Crossing. As we gazed down upon the bustling intersection, the people below appeared as minuscule specks in the grand tapestry of the city. The perspective from above offered a unique and mesmerizing viewpoint, allowing us to marvel at the orchestrated chaos of the crossing that seemed to defy the constraints of time and space.",
          },
          {
            content: (
              <Picture
                src={Image.shibuyaSkyCrossing}
                description="Shibuya Crossing"
              />
            ),
          },
          {
            content:
              "After spending a considerable amount of time at Shibuya Sky, hunger started to set in. Considering the late hour, we decided it was time to head to our first dinner location.",
          },
          {
            content: (
              <Picture
                src={Image.shibuyaSkyIndoorWithBro}
                description="Shibuya Night Skyline in the background"
              />
            ),
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
            content:
              "Hobo Shinjuku Norengai, the area's latest izakaya complex, recently transformed an old warehouse into a new addition, turning it into a yokocho food alley with seven new restaurants. We were thrilled to explore this new addition to Tokyo since the pandemic, as it provided an opportunity to try out an izakaya experience.",
          },
          {
            content: (
              <Picture
                src={Image.hoboShinjukuNorengaiWithBro}
                description="Hobo Shinjuku Norengai with brother"
              />
            ),
          },
          {
            content:
              "As we walked around the complex, we couldn't find any English menus. After entering and exiting a few times, we realized that there might not be any other options and decided to settle for a shop called Newstar. As expected, the menu was entirely in Japanese.",
          },
          {
            content: (
              <Picture
                src={Image.hoboShinjukuNorengaiMenu}
                description="Newstar Menu"
              />
            ),
          },
          {
            content:
              "Since our command of the Japanese language was limited, perusing the menu would be a time-consuming task, especially if we had to rely on Google Translate for each item. The staff informed us that we could use LINE to view the menu with images, but we didn't have the app installed. Thankfully, the kind staff offered to show us the menu on his own phone via LINE. Surprisingly, he recommended the Siew Mai to us, which caught us off guard as it wasn't a Japanese dish. The app seemed to have fewer options than the physical paper menu. In the end, we played it safe and ordered Neapolitan spaghetti and fried rice. We also decided to have a mega oolong tea each since neither of us drinks alcohol.",
          },
          {
            content: (
              <Picture
                src={Image.hoboShinjukuNorengaiFood}
                description="Food we ordered at Newstar"
              />
            ),
          },
          {
            content:
              "When it was time to pay the bill, the staff accidentally gave us the wrong bill but quickly rectified the mistake and presented us with the correct one. Initially, we were confused as to why we were charged for two appetizers, but we decided to go ahead and pay for it.",
          },
          {
            content: (
              <Picture
                src={Image.hoboShinjukuNorengaiReceipt}
                description="Newstar Receipt"
              />
            ),
          },
          {
            content:
              "Overall, we realized that we couldn't fully appreciate such eateries until we improved our understanding of the Japanese language and became familiar with the names of different food. For the remainder of our trip, we tried to avoid restaurants that only had Japanese menus and always opted for places with English menus.",
          },
          {
            content:
              "Since we still felt a bit hungry, on our way back to the hotel, we stopped by a 7-11 and bought a small curry bread for only 160 yen. It was delicious, especially when it was still hot.",
          },
        ],
      },
    },
  ],
};
