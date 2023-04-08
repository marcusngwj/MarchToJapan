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
