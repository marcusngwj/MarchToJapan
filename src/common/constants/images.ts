const imageBasePath = "/images";
const homeBasePath = `${imageBasePath}/home`;
const itineraryBasePath = `${imageBasePath}/itinerary`;

export const images: ImageDictionary = {
  home: {
    itineraryTab: `${homeBasePath}/tab1.png`,
    preparationTab: `${homeBasePath}/tab2.jpg`,
    frenzyTab: `${homeBasePath}/tab3.jpg`,
    expenditureTab: `${homeBasePath}/tab4.webp`,
    verticalBanner: `${homeBasePath}/verticalBanner.jpg`,
    horizontalLeft: `${homeBasePath}/horizontalLeft.jpg`,
    horizontalRight: `${homeBasePath}/horizontalRight.png`,
  },
  itinerary: {
    placeholder: `${imageBasePath}/placeholder.png`,
    tripDotCom: `${itineraryBasePath}/tripDotCom.png`,
    ameyoko: `${itineraryBasePath}/ameyoko.jpg`,
    animateIkebukuro: `${itineraryBasePath}/animateIkebukuro.jpg`,
    asakusaBattingStadium: `${itineraryBasePath}/asakusaBattingStadium.jpg`,
    atHomeCafe: `${itineraryBasePath}/atHomeCafe.jpg`,
    changiAirport: `${itineraryBasePath}/changiAirport.jpg`,
    changiAirportLounge: `${itineraryBasePath}/changiAirportLounge.jpeg`,
    dawnAvatarRobotCafe: `${itineraryBasePath}/dawnAvatarRobotCafe.jpg`,
    donQuijote: `${itineraryBasePath}/donQuijote.jpg`,
    genrokuzushi: `${itineraryBasePath}/genrokuzushi.webp`,
    grillCardinal: `${itineraryBasePath}/grillCardinal.jpg`,
    gyukatsuMotomura: `${itineraryBasePath}/gyukatsuMotomura.jpg`,
    haileyCafe: `${itineraryBasePath}/haileyCafe.jpg`,
    hoboShinjukuNorengai: `${itineraryBasePath}/hoboShinjukuNorengai.jpg`,
    katsuCurry: `${itineraryBasePath}/katsuCurry.jpg`,
    kotogase: `${itineraryBasePath}/kotogase.jpg`,
    mangaMuseum: `${itineraryBasePath}/kyotoMangaMuseum.jpg`,
    meguroRiver: `${itineraryBasePath}/meguroRiver.jpg`,
    meijiShrine: `${itineraryBasePath}/meijiShrine.jpg`,
    mishimaSkywalk: `${itineraryBasePath}/mishimaSkywalk.webp`,
    nadaiFujisoba: `${itineraryBasePath}/nadaiFujisoba.jpg`,
    naritaAirport: `${itineraryBasePath}/naritaAirport.jpg`,
    naritaExpress: `${itineraryBasePath}/naritaExpress.jpg`,
    osakaAquarium: `${itineraryBasePath}/osakaAquarium.jpg`,
    redTokyoTower: `${itineraryBasePath}/redTokyoTower.jpg`,
    scootTakeOff: `${itineraryBasePath}/scootTakeOff.jpg`,
    shibuyaSky: `${itineraryBasePath}/shibuyaSky.jpg`,
    shinjukuWashingtonHotel: `${itineraryBasePath}/shinjukuWashingtonHotel.webp`,
    sightseeingCruise: `${itineraryBasePath}/hakoneSightseeingCruise.jpg`,
    solaniwa: `${itineraryBasePath}/solaniwa.jpg`,
    soupNoodleRamen: `${itineraryBasePath}/soupNoodleRamen.jpg`,
    sunshineCity: `${itineraryBasePath}/sunshineCity.jpg`,
    takeshitaStreet: `${itineraryBasePath}/takeshitaStreet.jpg`,
    tokyoJoypolis: `${itineraryBasePath}/tokyoJoypolis.jpg`,
    tokyoRoastery: `${itineraryBasePath}/tokyoRoastery.jpg`,
    tokyoSkytree: `${itineraryBasePath}/tokyoSkytree.jpg`,
    tokyoUniversity: `${itineraryBasePath}/tokyoUniversity.jpg`,
    uenoPark: `${itineraryBasePath}/uenoPark.jpg`,
    yoyogiPark: `${itineraryBasePath}/yoyogiPark.jpg`,
  },
};

type ImageDictionary = {
  [type: string]: {
    [item: string]: string;
  };
};

export enum Image {
  placeholder = "https://firebasestorage.googleapis.com/v0/b/marchtojapan.appspot.com/o/20230118224158.png?alt=media&token=14f0f867-0caf-4bce-909a-2ac2eb639a1a",
  arrivalTemperature = "https://firebasestorage.googleapis.com/v0/b/marchtojapan.appspot.com/o/ArrivalTemperature.jpg?alt=media&token=dde31888-4844-4e7b-ad88-075aed17dfab",
  beefLasagne = "https://firebasestorage.googleapis.com/v0/b/marchtojapan.appspot.com/o/BeefLasagne.jpg?alt=media&token=f80b9eb9-a7ff-48dd-be0e-6f8eb28357f3",
  boardingPass = "https://firebasestorage.googleapis.com/v0/b/marchtojapan.appspot.com/o/BoardingPass.jpg?alt=media&token=3a848f8d-2e27-43e1-9077-c93cdac1a054",
  chilliCrabWithMantou = "https://firebasestorage.googleapis.com/v0/b/marchtojapan.appspot.com/o/ChilliCrabMantou.jpg?alt=media&token=25e32103-46ba-4925-8e32-a37b922c1e57",
  dangoWithBro = "https://firebasestorage.googleapis.com/v0/b/marchtojapan.appspot.com/o/DangoWithBro.jpg?alt=media&token=622a8aab-b83f-4f05-8341-a60e5381ca2a",
  fushimiInariWagyuSkewer = "https://firebasestorage.googleapis.com/v0/b/marchtojapan.appspot.com/o/FushimiInariWagyuSkewer.jpg?alt=media&token=50da46f0-ec86-47d8-8c42-41f9f6af2766",
  gotembaCrepe = "https://firebasestorage.googleapis.com/v0/b/marchtojapan.appspot.com/o/GotembaCrepe.jpg?alt=media&token=26cf8679-d8ff-4d7e-bea8-ba6a34273ad7",
  gyukatsuMotomuraSetMeal = "https://firebasestorage.googleapis.com/v0/b/marchtojapan.appspot.com/o/GyukatsuMotomuraSetMeal.jpg?alt=media&token=5911ee58-3474-4143-9ca5-28530222efd7",
  kotagaseWithPikachu = "https://firebasestorage.googleapis.com/v0/b/marchtojapan.appspot.com/o/KotagaseWithPikachu.jpg?alt=media&token=b9555b03-0a2d-4b4a-8ff3-d03574c07fe7",
  iwatayamaTickets = "https://firebasestorage.googleapis.com/v0/b/marchtojapan.appspot.com/o/IwatayamaTickets.jpg?alt=media&token=70160394-3e74-4fff-89c8-e7043fae7ad6",
  loungeCoffeeMaking = "https://firebasestorage.googleapis.com/v0/b/marchtojapan.appspot.com/o/LoungeCoffeeMaking.jpg?alt=media&token=946b8727-ff92-4d04-911c-710b7163c424",
  meijiShrineWithBro = "https://firebasestorage.googleapis.com/v0/b/marchtojapan.appspot.com/o/MeijiShrineWithBro.jpg?alt=media&token=35324995-b42a-4b13-8d31-bac0b0022138",
  meijiShrineWish = "https://firebasestorage.googleapis.com/v0/b/marchtojapan.appspot.com/o/MeijiShrineWish.jpg?alt=media&token=8ee0c85e-e3a4-470e-8d80-68f4a4795e62",
  mishimaSkywalkPeripheral = "https://firebasestorage.googleapis.com/v0/b/marchtojapan.appspot.com/o/SkywalkPeripheral.jpg?alt=media&token=2fb0246e-fce7-480c-8c94-eef969ce9644",
  naritaAirportWithBro = "https://firebasestorage.googleapis.com/v0/b/marchtojapan.appspot.com/o/NaritaAirportWithBro.jpg?alt=media&token=422180f2-cd8f-410a-9d74-0a81d1a9949e",
  naritaExpressWithBro = "https://firebasestorage.googleapis.com/v0/b/marchtojapan.appspot.com/o/NaritaExpressWithBro.jpg?alt=media&token=c8156c9c-e744-46d4-aa78-132c65314c77",
  planeToNaritaWithBro = "https://firebasestorage.googleapis.com/v0/b/marchtojapan.appspot.com/o/PlaneToNaritaWithBro.jpg?alt=media&token=ca623d4e-e2b2-4c99-a651-9e27b369d0df",
  shinjukuHotelWithBro = "https://firebasestorage.googleapis.com/v0/b/marchtojapan.appspot.com/o/ShinjukuHotelWithBro.jpg?alt=media&token=c24087b3-576d-423e-b447-8d0b97346e63",
  takeshitaWithBro = "https://firebasestorage.googleapis.com/v0/b/marchtojapan.appspot.com/o/TakeshitaWithBro.jpg?alt=media&token=2925442a-8313-4efb-942d-9b66fb157f3d",
  yoyogiParkTransparentToilet = "https://firebasestorage.googleapis.com/v0/b/marchtojapan.appspot.com/o/YoyogiParkTransparentToilet.jpg?alt=media&token=7179e2a7-204e-4ea4-bad4-ab064c474ea7",
}
