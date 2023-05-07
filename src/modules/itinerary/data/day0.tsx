import { ItineraryDay } from "../types/itineraryProps";
import Flight from "../components/flight";
import Picture from "../components/picture";
import { images, Image } from "@/common/constants/images";

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
            content:
              "The long-awaited journey to Japan was finally happening! Despite the numerous obstacles and setbacks that had come our way, we were determined to make the most of this graduation trip that we had been eagerly planning for months. Our initial plans to travel in May 2020 had been cancelled due to the Covid-19 pandemic, forcing us to cancel all our bookings and put our dreams of exploring Japan on hold. However, after much persistence and patiently waiting for Covid-19 measures to dissipate, we finally managed to find a common time to take annual leave from work and embark on our much-anticipated adventure.",
          },
          {
            title: "A Stress-free Check-in Experience",
            content:
              "Knowing that Scoot opens their counters three hours before the flight and closes them 60 minutes before, we made sure to arrive at least 90 minutes early for our departure time. Upon arrival at the airport, we headed straight to the Automated Check-in Kiosk to obtain our baggage tags for check-in. It had been a while since we last flew, and we had a funny moment where one of our Baggage Identification Tag was accidentally covered while attaching the main tag to the luggage. This tag contained important information about the owner and the main tag, which we could use to enquire with the airline in case our baggage went missing.",
          },
          {
            content: (
              <Picture
                src={Image.baggageIdTag}
                description="Baggage Identification Tag"
              />
            ),
          },
          {
            content:
              "After obtaining our baggage tags, we proceeded to the Automated Bag-Drop Machine to drop off our bags. We realized that we had not attached the bag tag to the side handle, which caused one of our bags to be undetected by the machine. We quickly rectified the situation by taking the tag off slowly and reattaching it to the side handle.",
          },
          {
            title: "Quality Time with Family and Friends",
            content:
              "Having some extra time before our flight, we decided to take a leisurely stroll around the airport and soak up the delightful atmosphere of the Disney100 anniversary celebrations at the renowned Shiseido Forest Valley. As we walked through the Disney100 archway, we were captivated by the enchanting surroundings and couldn't resist taking some photos with the magnificent 4m-tall platinum statue of the legendary Mickey Mouse.",
          },
          {
            content: (
              <Picture
                src={Image.shiseidoForestValleyWithFamily}
                description="Shiseido Forest Valley with family"
              />
            ),
          },
          {
            content:
              "When our friend who came to send us off arrived, we bid farewell to our family and headed to Pizzamaru for dinner. While munching on pizza, we caught up with each other's recent travels - she shared her trip to Taiwan while we talked about our upcoming plans for Japan.",
          },
          {
            content:
              "After dinner, we headed over to Sourbombe to satisfy our sweet tooth with some delicious dessert. We managed to video call another friend who unfortunately couldn't join us because she was getting ready for work. However, the background noise was quite loud, so we had difficulty hearing her. We tried to guess what she was saying and replied accordingly, which resulted in some hilarious moments where our responses didn't match her questions. Despite the communication challenges, we were grateful for the opportunity to catch up with her virtually. Before parting ways, we took a group photo and headed off to try out the Changi Jewel Lounge.",
          },
          {
            content: (
              <Picture
                src={Image.sourbombeWithFriends}
                description="Sourbombe with friends"
              />
            ),
          },
        ],
      },
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
              <Picture
                src={Image.planeToNaritaWithBro}
                description="Plane from Singapore to Tokyo"
              />
            ),
          },
        ],
      },
    },
  ],
};
