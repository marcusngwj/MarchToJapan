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
            title: "Comparing Prices",
            content:
              "We wanted to travel to Japan, so we looked at a bunch of different websites to find the best prices for flights. We compared prices from Singapore Airlines, Trip.com, Expedia, and All Nippon Airways (ANA), but it turned out that buying directly from Scoot was the cheapest for the dates we wanted.",
          },
          {
            content:
              "After looking at the places we wanted to go, we decided it would be better to get a multi-city flight instead of a JR pass, so we could explore different cities without worrying about transportation costs.",
          },
          {
            content:
              "We figured out that Tokyo was the best place to start our trip, because we wanted to see the cherry blossoms. We wanted to arrive in the morning, so we looked for a night flight that would get us there without wasting any time.",
          },
          {
            content:
              "We didn't have a lot of stuff to bring with us, so we just got the 20kg checked luggage allowance.",
          },
          {
            content:
              "Our flight schedule changed once, so we had to adjust our plans a bit, but it wasn't a big deal. We still got to Tokyo around the same time as we planned.",
          },
          {
            title: "Check-in",
            content:
              "When we got to the airport, we checked in at the Scoot counter. They open the counters three hours before the flight and close them 60 minutes before, so we made sure to get there at least 90 minutes before our departure time. We did web check-in, but it didn't really make a difference on our way to Japan. However, when we were coming back, we noticed that there was a separate, faster line for people who had already checked in online.",
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
                  alignItems: "center"
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
