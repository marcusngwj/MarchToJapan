import { Graphic } from "../types/media";
import { Tag } from "./tag";
import { Image } from "@/common/constants/images";
import { Video } from "@/common/constants/video";

export const media: Graphic[] = [
  {
    thumbnail: Image.loungeCoffeeMaking,
    src: Image.loungeCoffeeMaking,
    name: "Coffee Making",
    description:
      "Who needs a barista when you've got a coffee-making pro? ☕️👨‍🍳 There's nothing like a freshly brewed cup of coffee while waiting for our night flight at Changi Lounge.",
    tags: [Tag.changiLounge, Tag.food, Tag.image],
  },
  {
    thumbnail: Image.boardingPass,
    src: Image.boardingPass,
    name: "Our Boarding Pass",
    description:
      "Finally embarking on our long-awaited adventure together! Singapore to Tokyo, here we come!",
    tags: [Tag.wanderlust, Tag.image],
  },
  {
    thumbnail: Image.planeToNaritaWithBro,
    src: Image.planeToNaritaWithBro,
    name: "Take off",
    description:
      "Taking off into the night, ready for a new adventure! 🌙✈️ There's something about flying that brings a sense of freedom and excitement. The excitement of traveling to a new destination is always amplified when you have a companion by your side!",
    tags: [Tag.onPlane, Tag.brothers, Tag.image],
  },
  {
    thumbnail: Image.arrivalTemperature,
    src: Image.arrivalTemperature,
    name: "Cold Temperature",
    description:
      "Brrr! ❄️😬 It's a cold start to the day here at Narita Airport Terminal 1, with the temperature at 7.1°C.",
    tags: [Tag.naritaAirport, Tag.image],
  },
  {
    thumbnail: Image.naritaAirportWithBro,
    src: Image.naritaAirportWithBro,
    name: "Touch down safely",
    description:
      "Greetings from Narita Airport Terminal 1! Starting the day off with a chilly welcome ❄️😎. Sometimes you just have to embrace the cold and enjoy the journey! Who needs extra layers when you have the excitement of travel to keep you warm?",
    tags: [Tag.naritaAirport, Tag.brothers, Tag.image],
  },
  {
    thumbnail: Image.naritaExpressWithBro,
    src: Image.naritaExpressWithBro,
    name: "The Narita Express",
    description:
      "Off to explore Tokyo on the Narita Express!🚆 The city is calling, and we're excited to explore everything it has to offer. From the food to the sights, we're ready to immerse ourselves in the culture and create unforgettable memories.",
    tags: [Tag.naritaExpress, Tag.brothers, Tag.image],
  },
  {
    thumbnail: Image.shinjukuHotelWithBro,
    src: Image.shinjukuHotelWithBro,
    name: "Shinjuku Washington Hotel",
    description:
      "Tokyo, here we come! Our adventure starts at the iconic Shinjuku Washington Hotel, our first home in this bustling city. After dropping off our luggage with the friendly hotel staff, we're ready to explore all that Tokyo has to offer! So here's to new beginnings, unforgettable adventures, and the magic of Tokyo!",
    tags: [Tag.shinjukuHotel, Tag.brothers, Tag.image],
  },
  {
    thumbnail: Image.gyukatsuMotomuraSetMeal,
    src: Image.gyukatsuMotomuraSetMeal,
    name: "2 Cutlet Set Meal at Gyukatsu Motomura Harajuku",
    description:
      "Craving some delicious Japanese cuisine? Look no further than Gyukatsu Motomura Harajuku! The crispy golden crust of the beef cutlet is simply divine, while the juicy tender meat inside melts in your mouth. One bite and we were in foodie heaven, with every subsequent bite setting the bar higher and higher for any other meal we'll have in Japan.",
    tags: [Tag.gyukatsuMotomura, Tag.food, Tag.image],
  },
  {
    thumbnail: Image.takeshitaWithBro,
    src: Image.takeshitaWithBro,
    name: "Crowded Takeshita Street",
    description:
      "Captured the hustle and bustle of Tokyo's famous Takeshita Street. This vibrant street in the heart of Harajuku is known for its unique fashion boutiques, colorful crepe stands, and buzzing energy.",
    tags: [Tag.takeshita, Tag.brothers, Tag.image],
  },
  {
    thumbnail: Image.meijiShrineWithBro,
    src: Image.meijiShrineWithBro,
    name: "Meiji Shrine",
    description:
      "Captivated by the beauty of Meiji Shrine's torii gate. We took a moment to reflect and pay our respects at the torii gate, a symbol of the Shinto religion and a reminder of the deep spiritual roots of Japan.",
    tags: [Tag.meijiShrine, Tag.brothers, Tag.image],
  },
  {
    thumbnail: Image.meijiShrineWish,
    src: Image.meijiShrineWish,
    name: "Meiji Shrine Wish Writing",
    description:
      "The shrine offers a special place for visitors to write their wishes. While we didn't write any wishes ourselves, it's still a meaningful and unique tradition to witness and capture in a photo.",
    tags: [Tag.meijiShrine, Tag.image],
  },
  {
    thumbnail: Image.yoyogiParkTransparentToilet,
    src: Image.yoyogiParkTransparentToilet,
    name: "Transparent Toilet at Yoyogi Park",
    description:
      "Checking out the innovative transparent toilet in Yoyogi Park! While the concept of a see-through restroom may seem strange at first, we were fascinated by the unique design and the potential for increased safety and cleanliness. There's a sign that explains it's currently in a non-transparent state, but you can still use it as usual.",
    tags: [Tag.yoyogiPark, Tag.image],
  },
  {
    thumbnail: Image.dangoWithBro,
    src: Video.dango,
    name: "Dango by the Meguro River",
    description:
      "Nothing beats good food and great company, especially when surrounded by Tokyo's famous sakura blooms 🌸",
    tags: [
      Tag.meguroRiver,
      Tag.dango,
      Tag.cherryBlossoms,
      Tag.brothers,
      Tag.food,
      Tag.video,
    ],
  },
  {
    thumbnail: Image.gotembaCrepe,
    src: Image.gotembaCrepe,
    name: "Strawberry Crepe",
    description:
      "Sweet tooth, satisfied! 🍓😋 Can you imagine the sweet aroma and the luscious texture of the fresh strawberries and whipped cream inside? And the crispy thin crepe, baked to perfection? It's a heavenly combination! ",
    tags: [Tag.gotemba, Tag.sweetMarche, Tag.crepe, Tag.food, Tag.image],
  },
  {
    thumbnail: Image.mishimaSkywalkPeripheral,
    src: Image.mishimaSkywalkPeripheral,
    name: "Mishima Skywalk Peripheral View",
    description:
      "Take a deep breath and soak in the awe-inspiring views from the top of the Mishima Skywalk! This incredible suspension bridge stretches over 400 meters long and offers panoramic vistas of the surrounding nature, including the stunning Mt. Fuji in the distance, which unfortunately we couldn't see due to the weather conditions. Nonetheless, walking across this engineering marvel is a thrilling experience, with the gentle sway of the bridge adding to the excitement.",
    tags: [Tag.mishimaSkywalk, Tag.image],
  },
  {
    thumbnail: Image.placeholder,
    src: Video.templeRun,
    name: "Temple Run in real life",
    description:
      "Who needs Temple Run when you have Japan's stunning shrines and temples to explore? It's amazing how these ancient sites can still give us the same rush of adrenaline and excitement as a video game. 🏃‍♂️⛩️ The truth is, we were rushing to board the Hakone Sightseeing Cruise after our photo taking at the torii gate.",
    tags: [
      Tag.hakoneShrine,
      Tag.fushimiInari,
      Tag.iwatayamaMonkeyPark,
      Tag.templeRun,
      Tag.video,
    ],
  },
  {
    thumbnail: Image.fushimiInariWagyuSkewer,
    src: Image.fushimiInariWagyuSkewer,
    name: "Wagyu Skewer near Fushimi Inari Taisha",
    description:
      "Savouring the moment!🤤 The succulent meat was grilled to perfection, and the aroma was simply irresistible! The contrast between the savory meat and the vibrant colors of the gate was a feast for the eyes and the taste buds! The best part? It only cost ¥1000! Such a steal for such a premium delicacy. 😋",
    tags: [Tag.fushimiInari, Tag.food, Tag.image],
  },
  {
    thumbnail: Image.iwatayamaTickets,
    src: Image.iwatayamaTickets,
    name: "Iwatayama Monkey Park Tickets",
    description:
      "Ready for some monkey business at Iwatayama Monkey Park! Just got our tickets and we can't wait to meet these curious creatures up close and personal.",
    tags: [Tag.iwatayamaMonkeyPark, Tag.ticket, Tag.image],
  },
  {
    thumbnail: Image.kotagaseWithPikachu,
    src: Image.kotagaseWithPikachu,
    name: "Pikachu at the Kotagase Tea House",
    description:
      "Take a break from the hustle and bustle of the city and join us for a peaceful meal by the river at Kotogase Team House! With a delicious spread of dango and oden, you won't want to leave this serene paradise anytime soon. Sometimes it's the simple things that bring us the most joy. It's moments like these that remind us to slow down, appreciate the beauty around us, and savor every bite of life.",
    tags: [Tag.kotagase, Tag.pikachu, Tag.food, Tag.image],
  },
  {
    thumbnail: Image.placeholder,
    src: Video.tetoteConnect,
    name: "Tetote X Connect",
    description:
      "Ready, set, connect! Tetote x Connect is the ultimate arcade experience that's taking Japan by storm! This innovative game combines strategy, skill, and a little bit of luck, as you race against the clock to connect as many Tetote balls as possible and groove along to the funky beats with your partner! 💃🕺 It's a thrilling challenge that will have you hooked from the first play, and the bright colors, flashing lights, and pumping music make it an immersive sensory experience like no other! This game is the perfect way to unwind and have some fun after a long day of sightseeing",
    tags: [Tag.tetoteConnect, Tag.arcade, Tag.video],
  },
];
