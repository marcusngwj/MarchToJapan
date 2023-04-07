const imageBasePath = "/images";
const homeBasePath = `${imageBasePath}/home`;
const itineraryBasePath = `${imageBasePath}/itinerary`

export const images: ImageDictionary = {
  home: {
    itineraryTab: `${homeBasePath}/tab1.png`,
    preparationTab: `${homeBasePath}/tab2.jpg`,
    frenzyTab: `${homeBasePath}/tab3.jpg`,
    expenditureTab: `${homeBasePath}/tab4.webp`,
    verticalBanner: `${homeBasePath}/verticalBanner.jpg`,
    horizontalLeft: `${homeBasePath}/horizontalLeft.jpg`,
    horizontalRight: `${homeBasePath}/horizontalRight.png`
  },
  itinerary: {
    placeholder: `${imageBasePath}/placeholder.png`,
    tripDotCom: `${itineraryBasePath}/tripDotCom.png`,
    animateIkebukuro: `${itineraryBasePath}/animateIkebukuro.jpg`,
    atHomeAkiba: `${itineraryBasePath}/atHomeAkiba.jpg`,
    changiAirport: `${itineraryBasePath}/changiAirport.jpg`,
    changiAirportCheckIn: `${itineraryBasePath}/changiAirportCheckIn.jpg`,
    changiAirportLounge: `${itineraryBasePath}/changiAirportLounge.jpeg`,
    changiAirportTransitArea: `${itineraryBasePath}/changiAirportTransitArea.webp`,
    dawnAvatarRobotCafe: `${itineraryBasePath}/dawnAvatarRobotCafe.jpg`,
    gyukatsuMotomura: `${itineraryBasePath}/gyukatsuMotomuraLogo.jpg`,
    hoboShinjukuNorengai: `${itineraryBasePath}/hoboShinjukuNorengai.jpg`,
    kabukicho: `${itineraryBasePath}/kabukicho.jpg`,
    meguroRiver: `${itineraryBasePath}/meguroRiver.jpeg`,
    meijiShrine: `${itineraryBasePath}/meijiShrine.jpg`,
    nakanoBroadway: `${itineraryBasePath}/nakanoBroadway.jpg`,
    naritaAirport: `${itineraryBasePath}/naritaAirport.jpg`,
    naritaExpress: `${itineraryBasePath}/naritaExpress.jpg`,
    omoideYokocho: `${itineraryBasePath}/omoideYokocho.webp`,
    redTokyoTower: `${itineraryBasePath}/redTokyoTower.jpg`,
    ryogokuKokugikan: `${itineraryBasePath}/ryogokuKokugikan.jpg`,
    ryuNoMiyakoInshokugai: `${itineraryBasePath}/ryuNoMiyakoInshokugai.jpg`,
    scootTakeOff: `${itineraryBasePath}/scootTakeOff.jpg`,
    shibuyaSky: `${itineraryBasePath}/shibuyaSky.jpg`,
    shibuyaYokocho: `${itineraryBasePath}/shibuyaYokocho.webp`,
    shinjukuWashingtonHotel: `${itineraryBasePath}/shinjukuWashingtonHotel.webp`,
    shimokitazawa: `${itineraryBasePath}/shimokitazawa.jpg`,
    sunshineCity: `${itineraryBasePath}/sunshineCity.jpg`,
    takeshitaStreet: `${itineraryBasePath}/takeshitaStreet.jpg`,
    tokyoJoypolis: `${itineraryBasePath}/tokyoJoypolis.jpg`,
    tokyoRoastery: `${itineraryBasePath}/tokyoRoastery.jpg`,
    uenoPark: `${itineraryBasePath}/uenoPark.jpg`,
    yoyogiPark: `${itineraryBasePath}/yoyogiPark.jpg`,
    yurakucho: `${itineraryBasePath}/yurakucho.jpg`,
  }
};

type ImageDictionary = { 
  [type: string]: {
    [item: string]: string
  } 
};
