import { images } from "@/common/constants/images";
import { ItineraryDay } from "../types/itineraryProps";
import Flight from "../components/flight";

import ImageComponent from "next/image";
import Box from "@mui/material/Box";
import { Image } from "@/common/constants/images";

export const dayZero: ItineraryDay = {
  name: "Day 0",
  date: "19 March 2023",
  timeline: [
    {
      time: "1900",
      name: "Changi Airport",
      thumbnail: images.itinerary.changiAirport,
      activity: {
        duration: "",
        narratives: [
          {
            title: "Check-in",
            content:
              "As we had learned that they open the counters three hours before the flight and close them 60 minutes before, we made sure to arrive at least 90 minutes early for our departure time. When we arrived at the airport, we scanned our printed boarding pass to obtain the luggage tag for check in. then we proceed to use the auto check in to push our luggage into the plan.",
          },
        ],
      },
      // Dinner + luggage Check-in
    },
    {
      time: "2030",
      name: "Changi Lounge",
      thumbnail: images.itinerary.changiAirportLounge,
      activity: {
        location: {
          addressEn: "78 Airport Blvd., #01 - 304, Singapore 819666",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.69423502865!2d103.98794461449478!3d1.3601001990080244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da3ddea8a3b7d5%3A0xa01626cde3675803!2sChangi%20Lounge!5e0!3m2!1sen!2ssg!4v1678777964804!5m2!1sen!2ssg",
        },
        duration: "45 mins",
        rating: 4.5,
        url: "https://www.jewelchangiairport.com/en/changi-lounge.html",
        narratives: [
          {
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed felis dui, faucibus vel mattis nec, blandit nec neque. Curabitur sollicitudin tempus augue, in ullamcorper nibh feugiat sed. Maecenas eu quam pulvinar felis vulputate vehicula. Cras at posuere ante, non accumsan turpis. Aliquam erat volutpat. Curabitur id congue nibh. Quisque sodales tempus metus quis efficitur. Ut at diam efficitur nunc commodo pulvinar non ac massa. Proin id mauris at leo blandit imperdiet at nec nulla. Duis vitae erat nisl. Maecenas et ipsum leo.",
          },
          {
            title: "tia mo",
            content:
              "Donec finibus arcu sed ultrices tincidunt. Donec scelerisque tempus tempor. Duis ac nunc hendrerit, luctus sapien eget, tempor mauris. Curabitur sed velit vitae urna molestie molestie non vel odio. Sed dui neque, eleifend iaculis gravida id, posuere ac nunc. Morbi consectetur euismod mauris vel lacinia. In sed orci in sapien vulputate lobortis.",
          },
          {
            title: "Test",
            content:
              "Donec finibus arcu sed ultrices tincidunt. Donec scelerisque tempus tempor. Duis ac nunc hendrerit, luctus sapien eget, tempor mauris. Curabitur sed velit vitae urna molestie molestie non vel odio. Sed dui neque, eleifend iaculis gravida id, posuere ac nunc. Morbi consectetur euismod mauris vel lacinia. In sed orci in sapien vulputate lobortis.",
          },
          {
            title: "Again",
            content:
              "Donec finibus arcu sed ultrices tincidunt. Donec scelerisque tempus tempor. Duis ac nunc hendrerit, luctus sapien eget, tempor mauris. Curabitur sed velit vitae urna molestie molestie non vel odio. Sed dui neque, eleifend iaculis gravida id, posuere ac nunc. Morbi consectetur euismod mauris vel lacinia. In sed orci in sapien vulputate lobortis.",
          },
          {
            title: "More things",
            content:
              "Donec finibus arcu sed ultrices tincidunt. Donec scelerisque tempus tempor. Duis ac nunc hendrerit, luctus sapien eget, tempor mauris. Curabitur sed velit vitae urna molestie molestie non vel odio. Sed dui neque, eleifend iaculis gravida id, posuere ac nunc. Morbi consectetur euismod mauris vel lacinia. In sed orci in sapien vulputate lobortis.",
          },
          {
            title: "Some more things",
            content:
              "Donec finibus arcu sed ultrices tincidunt. Donec scelerisque tempus tempor. Duis ac nunc hendrerit, luctus sapien eget, tempor mauris. Curabitur sed velit vitae urna molestie molestie non vel odio. Sed dui neque, eleifend iaculis gravida id, posuere ac nunc. Morbi consectetur euismod mauris vel lacinia. In sed orci in sapien vulputate lobortis.",
          },
          {
            title: "What is more things",
            content:
              "Donec finibus arcu sed ultrices tincidunt. Donec scelerisque tempus tempor. Duis ac nunc hendrerit, luctus sapien eget, tempor mauris. Curabitur sed velit vitae urna molestie molestie non vel odio. Sed dui neque, eleifend iaculis gravida id, posuere ac nunc. Morbi consectetur euismod mauris vel lacinia. In sed orci in sapien vulputate lobortis.",
          },
          {
            title: "super a lot of things",
            content:
              "Donec finibus arcu sed ultrices tincidunt. Donec scelerisque tempus tempor. Duis ac nunc hendrerit, luctus sapien eget, tempor mauris. Curabitur sed velit vitae urna molestie molestie non vel odio. Sed dui neque, eleifend iaculis gravida id, posuere ac nunc. Morbi consectetur euismod mauris vel lacinia. In sed orci in sapien vulputate lobortis.",
          },
        ],
      },
    },
    {
      time: "2220",
      name: "Onboard Scoot (TR808)",
      thumbnail: images.itinerary.scootTakeOff,
      activity: {
        duration: "7 hours 40 mins",
        narratives: [
          {
            content: (
              <Flight
                departureDate="19 Mar"
                departureTime="22:20"
                departureCity="Singapore"
                departureCityCode="SIN"
                arrivalDate="20 Mar"
                arrivalTime="06:00"
                arrivalCity="Tokyo"
                arrivalCityCode="NRT"
                terminal="1"
                gate="D37"
              />
            ),
          },
          {
            content:
              "Japan has always been on our bucket list, especially during the cherry blossom season. But we didn't want to break the bank, so we scoured the internet to find the best deals on flights. Buying directly from Scoot was the cheapest and most convenient way to fly to Japan.",
          },
          {
            title: "Round-trip or Multi-city?",
            content:
              "Taking into consideration the places we wanted to visit, we decided that booking a multi-city flight was the most reasonable option in terms of both time and money. To fully experience the cherry blossom season, we opted to start our journey in Tokyo and gradually make our way down to Hakone, Kyoto, and Nara before flying out of Osaka. Since the sakura trees usually begin blooming in Tokyo first, it made perfect sense to start our adventure there.",
          },
          {
            title: "Strategic Flight Timing",
            content:
              "To maximize our time for the trip, we agreed to take a night flight, which would allow us to arrive at our destination well-rested and ready for our adventure. Another advantage of flying at night was that we didn't have to rush to the airport in the morning, giving us ample time for last-minute packing or even some rest if needed. Although our flight schedule changed once, we were able to adjust our plans without any hassle.",
          },
          {
            title: "Baggage",
            content:
              "Our tickets included a 20kg checked luggage allowance, which was perfect for our outbound flight. However, we knew that we would be shopping a lot during our stay in Japan, so we decided to upgrade our return flight package to 25kg. We were excited at the prospect of bringing back unique souvenirs and goodies, and we wanted to make sure we had enough space to fit everything in.",
          },
          {
            title: "The Scoot Experience",
            content:
              "We had an amazing experience flying with Scoot on the Boeing 787 Dreamliner. From the moment we boarded the flight, we were greeted with friendly smiles and excellent service. We were thrilled to find that we had been assigned the seats we had chosen during the booking process, and we had plenty of legroom to stretch out and relax during the flight. The comfortable seats made it easy to get some much-needed rest. All in all, we were very satisfied with our Scoot experience and can't wait to fly with them again in the future. Japan, here we come!",
          },
          {
            content: (
              <Box
                sx={{
                  height: "50vh",
                  width: "100%",
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ImageComponent
                  src={Image.planeToNaritaWithBro}
                  alt="Plane from Singapore to Tokyo"
                  fill
                  style={{
                    height: "100%",
                    maxWidth: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>
            ),
          },
        ],
      },
    },
  ],
};
