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
    thumbnail: Image.gyukatsuMotomuraEntranceWithBro,
    src: Image.gyukatsuMotomuraEntranceWithBro,
    name: "Gyukatsu Motomura Harajuku Entrance",
    description: "",
    tags: [Tag.gyukatsuMotomura, Tag.brothers, Tag.image],
  },
  {
    thumbnail: Image.gyukatsuMotomuraMenu,
    src: Image.gyukatsuMotomuraMenu,
    name: "Gyukatsu Motomura Harajuku Menu",
    description: "",
    tags: [Tag.gyukatsuMotomura, Tag.food, Tag.image],
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
    thumbnail: Image.gyukatsuMotomuraMealWithBro,
    src: Image.gyukatsuMotomuraMealWithBro,
    name: "2 Cutlet Set Meal Served",
    description: "",
    tags: [Tag.gyukatsuMotomura, Tag.food, Tag.brothers, Tag.image],
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
    thumbnail: Image.shibuyaSkyNightCityscape,
    src: Image.shibuyaSkyNightCityscape,
    name: "Night Citycape from Shibuya Sky",
    description:
      "Lost in the glittering city lights ✨ Shibuya Sky offers a stunning bird's eye view of Tokyo's vibrant cityscape at night. From up here, you can see the iconic Shibuya Crossing, pulsating with energy and life. The bustling streets below are a testament to the endless possibilities that Tokyo has to offer. Every corner tells a story, every light a different hue. It's a mesmerizing sight that leaves you breathless.",
    tags: [Tag.shibuyaSky, Tag.image],
  },
  {
    thumbnail: Image.meguroRiverFigLeafPose,
    src: Image.meguroRiverFigLeafPose,
    name: "Sitting by the Serene Meguro River",
    description:
      "Good morning, Tokyo! The Meguro River is a perfect place to start the day with a serene and peaceful atmosphere.",
    tags: [Tag.meguroRiver, Tag.image],
  },
  {
    thumbnail: Image.meguroRiverPocketPose,
    src: Image.meguroRiverPocketPose,
    name: "Relaxing on Meguro River Bridge",
    description:
      "Rise and shine, Tokyo! What better way to start the day than with a peaceful morning stroll by the Meguro River. The beautiful scenery and peaceful atmosphere make it a great moment of tranquility before heading to the nearby Starbucks.",
    tags: [Tag.meguroRiver, Tag.image],
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
      Tag.food,
      Tag.brothers,
      Tag.video,
    ],
  },
  {
    thumbnail: Image.shibuyaHachiko,
    src: Image.shibuyaHachiko,
    name: "Hachiko",
    description:
      "It was an honor to stand next to the legendary Hachiko statue in Shibuya. As a symbol of loyalty and devotion, Hachiko has captured the hearts of people from all over the world. The bustling energy of Shibuya and the inspiring story of Hachiko truly make this a special place to visit.",
    tags: [Tag.hachiko, Tag.image],
  },
  {
    thumbnail: Image.shibuyaHachikoWithBro,
    src: Image.shibuyaHachiko,
    name: "Hachiko Together!",
    description:
      "Despite the hustle and bustle of the city around us, standing there with Hachiko reminded us to slow down and appreciate the simple things in life. It was a humbling experience to be in the presence of such a revered symbol of loyalty and devotion.",
    tags: [Tag.hachiko, Tag.brothers, Tag.image],
  },
  {
    thumbnail: Image.donkiHachiko,
    src: Image.donkiHachiko,
    name: "Hachiko in Mega Donki!",
    description:
      "We were pleasantly surprised to spot a Hachiko statue inside MEGA Don Quijote Shibuya Honten! Who needs to fight the crowds at Shibuya Crossing for a photo op with Hachiko when you can find him here in the comfort of the store? Of course, we had to take a moment to show some love and give Hachiko a quick pat on the head.",
    tags: [Tag.donki, Tag.hachiko, Tag.image],
  },
  {
    thumbnail: Image.tenYenPancake,
    src: Image.tenYenPancake,
    name: "10 Yen Pancake",
    description:
      "Indulging in the latest food craze in Tokyo - the 10 yen pancake! Although the name suggests otherwise, this sweet treat costs 500 yen. But don't let the price tag deter you - made fresh right in front of you, this little delicacy is the perfect treat to satisfy your sweet tooth.",
    tags: [Tag.donki, Tag.pankcake, Tag.food, Tag.image],
  },
  {
    thumbnail: Image.donkiTenYenWithDog,
    src: Image.donkiTenYenWithDog,
    name: "Eating 10 Yen Pancake in front of an Akita",
    description:
      "We stumbled upon the shop while looking around Mega Donki in Shibuya and decided to queue up for a taste. Despite the hype, we opted for just one so we could save room for our lunch plans later on.",
    tags: [Tag.donki, Tag.pankcake, Tag.food, Tag.image],
  },
  {
    thumbnail: Image.magnetShibuyaWithShanks,
    src: Image.magnetShibuyaWithShanks,
    name: "The Great Pirate",
    description: "",
    tags: [Tag.magnetShibuya, Tag.onePiece, Tag.image],
  },
  {
    thumbnail: Image.shibuyaParcoMeasureHeight,
    src: Image.shibuyaParcoMeasureHeight,
    name: "Same Height",
    description: "",
    tags: [Tag.shibuyaParco, Tag.onePiece, Tag.image],
  },
  {
    thumbnail: Image.shibuyaParcoWithMewtwo,
    src: Image.shibuyaParcoWithMewtwo,
    name: "Mewtwo",
    description: "",
    tags: [Tag.shibuyaParco, Tag.pokemon, Tag.image],
  },
  {
    thumbnail: Image.animateIkebukuroSelfieWithMarin,
    src: Image.animateIkebukuroSelfieWithMarin,
    name: "Selfie with Marin",
    description: "",
    tags: [Tag.animateIkebukuro, Tag.marin, Tag.image],
  },
  {
    thumbnail: Image.animateIkebukuroMarinRoom,
    src: Image.animateIkebukuroMarinRoom,
    name: "Marin's room",
    description: "",
    tags: [Tag.animateIkebukuro, Tag.marin, Tag.image],
  },
  {
    thumbnail: Image.dawnCafeWithMoon,
    src: Image.dawnCafeWithMoon,
    name: "Lunch with Moon",
    description: "",
    tags: [Tag.dawnCafe, Tag.food, Tag.image],
  },
  {
    thumbnail: Image.dawnCafeWithGroup,
    src: Image.dawnCafeWithGroup,
    name: "Group photo with Dawn Cafe's waitresses",
    description: "",
    tags: [Tag.dawnCafe, Tag.food, Tag.image],
  },
  {
    thumbnail: Image.redTowerDay,
    src: Image.redTowerDay,
    name: "Red Tower Day Photo",
    description: "",
    tags: [Tag.redTower, Tag.image],
  },
  {
    thumbnail: Image.redTowerPeacePose,
    src: Image.redTowerPeacePose,
    name: "Red Tower, Peace!",
    description: "",
    tags: [Tag.redTower, Tag.image],
  },
  {
    thumbnail: Image.redTowerNight,
    src: Image.redTowerNight,
    name: "Red Tower Night Photo",
    description: "",
    tags: [Tag.redTower, Tag.image],
  },
  {
    thumbnail: Image.atHomeCafeMain,
    src: Image.atHomeCafeMain,
    name: "at-home Cafe Mains",
    description: "",
    tags: [Tag.atHomeCafe, Tag.maidCafe, Tag.food, Tag.image],
  },
  {
    thumbnail: Image.atHomeCafeDrink,
    src: Image.atHomeCafeDrink,
    name: "at-home Cafe Drinks",
    description: "",
    tags: [Tag.atHomeCafe, Tag.maidCafe, Tag.food, Tag.image],
  },
  {
    thumbnail: Image.atHomeCafeDessert,
    src: Image.atHomeCafeDessert,
    name: "at-home Cafe Desserts",
    description: "",
    tags: [Tag.atHomeCafe, Tag.maidCafe, Tag.food, Tag.image],
  },
  {
    thumbnail: Image.tokyoSkytreeWithBro,
    src: Image.tokyoSkytreeWithBro,
    name: "Selfie with mascot of Tokyo Skytree",
    description: "",
    tags: [Tag.tokyoSkytree, Tag.brothers, Tag.image],
  },
  {
    thumbnail: Image.haileyCafeComputer,
    src: Image.haileyCafeComputer,
    name: "Anime Night at Hailey'5 Cafe",
    description: "",
    tags: [Tag.haileyCafe, Tag.anime, Tag.manga, Tag.image],
  },
  {
    thumbnail: Image.haileyCafeReadManga,
    src: Image.haileyCafeReadManga,
    name: "Reading Manga at Hailey'5 Cafe",
    description: "",
    tags: [Tag.haileyCafe, Tag.manga, Tag.image],
  },
  {
    thumbnail: Image.animeJapanPeacePose,
    src: Image.animeJapanPeacePose,
    name: "AnimeJapan 2023!",
    description: "",
    tags: [Tag.animeJapan, Tag.image],
  },
  {
    thumbnail: Image.animeJapanWithMiku,
    src: Image.animeJapanWithMiku,
    name: "Surrounded by The Quintessential Quintuplets",
    description: "",
    tags: [Tag.animeJapan, Tag.quintessentialQuintuplets, Tag.image],
  },
  {
    thumbnail: Image.animeJapanWithMikuAndBro,
    src: Image.animeJapanWithMikuAndBro,
    name: "The Quintessential Quintuplets at AnimeJapan",
    description: "",
    tags: [
      Tag.animeJapan,
      Tag.quintessentialQuintuplets,
      Tag.brothers,
      Tag.image,
    ],
  },
  {
    thumbnail: Image.gotembaCrepe,
    src: Image.gotembaCrepe,
    name: "Strawberry Crepe",
    description:
      "Sweet tooth, satisfied! 🍓😋 Can you imagine the sweet aroma and the luscious texture of the fresh strawberries and whipped cream inside? And the crispy thin crepe, baked to perfection? It's a heavenly combination!",
    tags: [Tag.gotemba, Tag.sweetMarche, Tag.crepe, Tag.food, Tag.image],
  },
  {
    thumbnail: Image.gotembaPikachu,
    src: Image.gotembaPikachu,
    name: "Gotemba Premium Outlet Pokemon Center",
    description: "",
    tags: [Tag.gotemba, Tag.pokemon, Tag.pikachu, Tag.image],
  },
  {
    thumbnail: Image.gotembaBusWithBro,
    src: Image.gotembaBusWithBro,
    name: "No Mount Fuji",
    description: "",
    tags: [Tag.gotemba, Tag.image],
  },
  {
    thumbnail: Image.gotembaBusStopWithBro,
    src: Image.gotembaBusStopWithBro,
    name: "No Mount Fuji in sight",
    description: "",
    tags: [Tag.gotemba, Tag.image],
  },
  {
    thumbnail: Image.hakoneToriiWithBro,
    src: Image.hakoneToriiWithBro,
    name: "Hakone's Torii",
    description: "",
    tags: [Tag.hakoneShrine, Tag.brothers, Tag.image],
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
    thumbnail: Image.mishimaSkywalkPeripheral,
    src: Image.mishimaSkywalkPeripheral,
    name: "Mishima Skywalk Peripheral View",
    description:
      "Take a deep breath and soak in the awe-inspiring views from the top of the Mishima Skywalk! This incredible suspension bridge stretches over 400 meters long and offers panoramic vistas of the surrounding nature, including the stunning Mt. Fuji in the distance, which unfortunately we couldn't see due to the weather conditions. Nonetheless, walking across this engineering marvel is a thrilling experience, with the gentle sway of the bridge adding to the excitement.",
    tags: [Tag.mishimaSkywalk, Tag.image],
  },
  {
    thumbnail: Image.shinkansenWithBro,
    src: Image.shinkansenWithBro,
    name: "Shinkansen",
    description: "",
    tags: [Tag.shinkansen, Tag.brothers, Tag.image],
  },
  {
    thumbnail: Image.kyotoMangaMuseumWithBro,
    src: Image.kyotoMangaMuseumWithBro,
    name: "Kyoto International Manga Museum",
    description: "",
    tags: [Tag.kyotoMangaMuseum, Tag.manga, Tag.brothers, Tag.image],
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
    thumbnail: Image.kotagaseCloseUpWithBro,
    src: Image.kotagaseCloseUpWithBro,
    name: "Kotagase Tea House Close Up",
    description: "",
    tags: [Tag.kotagase, Tag.food, Tag.brothers, Tag.image],
  },
  {
    thumbnail: Image.kotagaseWithBro,
    src: Image.kotagaseWithBro,
    name: "Enjoying the scenery at Kotagase Tea House",
    description: "",
    tags: [Tag.kotagase, Tag.food, Tag.brothers, Tag.image],
  },
  {
    thumbnail: Image.arashiyamaBambooGroveWithBro,
    src: Image.arashiyamaBambooGroveWithBro,
    name: "Background full of bamboos",
    description: "",
    tags: [Tag.arashiyamaBambooGrove, Tag.brothers, Tag.image],
  },
  {
    thumbnail: Image.fier,
    src: Video.tetoteConnect,
    name: "Tetote X Connect",
    description:
      "Ready, set, connect! Tetote x Connect is the ultimate arcade experience that's taking Japan by storm! This innovative game combines strategy, skill, and a little bit of luck, as you race against the clock to connect as many Tetote balls as possible and groove along to the funky beats with your partner! 💃🕺 It's a thrilling challenge that will have you hooked from the first play, and the bright colors, flashing lights, and pumping music make it an immersive sensory experience like no other! This game is the perfect way to unwind and have some fun after a long day of sightseeing",
    tags: [Tag.tetoteConnect, Tag.arcade, Tag.video],
  },
];
