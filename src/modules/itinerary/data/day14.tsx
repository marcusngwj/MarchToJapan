import { images } from "@/common/constants/images";
import { ItineraryDay } from "../types/itineraryProps";
import Flight from "../components/flight";

export const dayFourteen: ItineraryDay = {
  name: "Day 14",
  date: "2 April 2023",
  timeline: [
    {
      time: "130",
      name: "Namba Station",
      thumbnail: images.itinerary.placeholder,
      // Take Rapit Train
    },
    {
      time: "1345",
      name: "Kansai International Airport",
      thumbnail: images.itinerary.placeholder,
    },
    {
      time: "1645",
      name: "Onboard Scoot (TR819)",
      thumbnail: images.itinerary.scootTakeOff,
      activity: {
        duration: "5 hours",
        narratives: [
          {
            content: (
              <Flight
                departureDate="02 Apr"
                departureTime="16:45"
                departureCity="Osaka"
                departureCityCode="KIX"
                arrivalDate="02 Apr"
                arrivalTime="21:45"
                arrivalCity="Singapore"
                arrivalCityCode="SIN"
                terminal="1"
                gate="11"
              />
            ),
          }
        ],
      },
    },
    {
      time: "2145",
      name: "Home Sweet Home",
      thumbnail: images.itinerary.changiAirport,
    },
  ],
};
