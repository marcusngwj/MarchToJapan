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
    tags: [Tag.image, Tag.changiLounge],
  },
  {
    thumbnail: Image.boardingPass,
    src: Image.boardingPass,
    name: "Our Boarding Pass",
    description:
      "Finally embarking on our long-awaited adventure together! Singapore to Tokyo, here we come!",
    tags: [Tag.image, Tag.wanderlust],
  },
  {
    thumbnail: Image.planeToNaritaWithBro,
    src: Image.planeToNaritaWithBro,
    name: "Take off",
    description:
      "Taking off into the night, ready for a new adventure! 🌙✈️ There's something about flying that brings a sense of freedom and excitement. The excitement of traveling to a new destination is always amplified when you have a companion by your side!",
    tags: [Tag.image, Tag.onPlane, Tag.brothers],
  },
  {
    thumbnail: Image.arrivalTemperature,
    src: Image.arrivalTemperature,
    name: "Cold Temperature",
    description:
      "Brrr! ❄️😬 It's a cold start to the day here at Narita Airport Terminal 1, with the temperature at 7.1°C.",
    tags: [Tag.image, Tag.naritaAirport],
  },
  {
    thumbnail: Image.naritaAirportWithBro,
    src: Image.naritaAirportWithBro,
    name: "Touch down safely",
    description:
      "Greetings from Narita Airport Terminal 1! Starting the day off with a chilly welcome ❄️😎. Sometimes you just have to embrace the cold and enjoy the journey! Who needs extra layers when you have the excitement of travel to keep you warm?",
    tags: [Tag.image, Tag.naritaAirport, Tag.brothers],
  },
  {
    thumbnail: Image.naritaExpressWithBro,
    src: Image.naritaExpressWithBro,
    name: "The Narita Express",
    description:
      "Off to explore Tokyo on the Narita Express!🚆 The city is calling, and we're excited to explore everything it has to offer. From the food to the sights, we're ready to immerse ourselves in the culture and create unforgettable memories.",
    tags: [Tag.image, Tag.naritaExpress, Tag.brothers],
  },
  {
    thumbnail: Image.dangoWithBro,
    src: Video.dango,
    name: "Dango by the Meguro River",
    description:
      "Nothing beats good food and great company, especially when surrounded by Tokyo's famous sakura blooms 🌸",
    tags: [
      Tag.video,
      Tag.meguroRiver,
      Tag.dango,
      Tag.cherryBlossoms,
      Tag.brothers,
    ],
  },
  {
    thumbnail: Image.gotembaCrepe,
    src: Image.gotembaCrepe,
    name: "Strawberry Crepe",
    description:
      "Sweet tooth, satisfied! 🍓😋 Can you imagine the sweet aroma and the luscious texture of the fresh strawberries and whipped cream inside? And the crispy thin crepe, baked to perfection? It's a heavenly combination! ",
    tags: [Tag.image, Tag.gotemba, Tag.sweetMarche, Tag.crepe],
  },
  {
    thumbnail: Image.placeholder,
    src: Video.templeRun,
    name: "Temple Run in real life",
    description:
      "Who needs Temple Run when you have Japan's stunning shrines and temples to explore? It's amazing how these ancient sites can still give us the same rush of adrenaline and excitement as a video game. 🏃‍♂️⛩️ The truth is, we were rushing to board the Hakone Sightseeing Cruise after our photo taking at the torii gate.",
    tags: [Tag.video, Tag.hakoneShrine, Tag.fushimiInari, Tag.templeRun],
  },
  {
    thumbnail: Image.iwatayamaTickets,
    src: Image.iwatayamaTickets,
    name: "Iwatayama Monkey Park Tickets",
    description:
      "Ready for some monkey business at Iwatayama Monkey Park! Just got our tickets and we can't wait to meet these curious creatures up close and personal.",
    tags: [Tag.image, Tag.iwatayamaMonkeyPark, Tag.ticket],
  },
  {
    thumbnail: Image.kotagaseWithPikachu,
    src: Image.kotagaseWithPikachu,
    name: "Pikachu at the Kotagase Tea House",
    description:
      "Take a break from the hustle and bustle of the city and join us for a peaceful meal by the river at Kotogase Team House! With a delicious spread of dango and oden, you won't want to leave this serene paradise anytime soon. Sometimes it's the simple things that bring us the most joy. It's moments like these that remind us to slow down, appreciate the beauty around us, and savor every bite of life.",
    tags: [Tag.image, Tag.kotagase, Tag.pikachu],
  },
];
