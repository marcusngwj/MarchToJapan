import { images } from "@/common/constants/images";
import { ItineraryDay } from "../types/itineraryProps";
import Flight from "../components/flight";

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
            content: "Let's go!"
          }
        ],
      },
    },
  ],
};
