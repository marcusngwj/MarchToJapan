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
  gotembaCrepe = "https://firebasestorage.googleapis.com/v0/b/marchtojapan.appspot.com/o/GotembaCrepe.jpg?alt=media&token=26cf8679-d8ff-4d7e-bea8-ba6a34273ad7",
  kotagaseWithPikachu = "https://firebasestorage.googleapis.com/v0/b/marchtojapan.appspot.com/o/KotagaseWithPikachu.jpg?alt=media&token=b9555b03-0a2d-4b4a-8ff3-d03574c07fe7",
  iwatayamaTickets = "https://firebasestorage.googleapis.com/v0/b/marchtojapan.appspot.com/o/IwatayamaTickets.jpg?alt=media&token=70160394-3e74-4fff-89c8-e7043fae7ad6",
  loungeCoffeeMaking = "https://firebasestorage.googleapis.com/v0/b/marchtojapan.appspot.com/o/LoungeCoffeeMaking.jpg?alt=media&token=946b8727-ff92-4d04-911c-710b7163c424",
  naritaAirportWithBro = "https://firebasestorage.googleapis.com/v0/b/marchtojapan.appspot.com/o/NaritaAirportWithBro.jpg?alt=media&token=422180f2-cd8f-410a-9d74-0a81d1a9949e",
  naritaExpressWithBro = "https://firebasestorage.googleapis.com/v0/b/marchtojapan.appspot.com/o/NaritaExpressWithBro.jpg?alt=media&token=c8156c9c-e744-46d4-aa78-132c65314c77",
  planeToNaritaWithBro = "https://firebasestorage.googleapis.com/v0/b/marchtojapan.appspot.com/o/PlaneToNaritaWithBro.jpg?alt=media&token=ca623d4e-e2b2-4c99-a651-9e27b369d0df",
}
