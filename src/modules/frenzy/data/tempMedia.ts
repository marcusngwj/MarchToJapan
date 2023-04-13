import { Graphic } from "../types/media";
import { Tag } from "./tag";
import { videos } from "@/common/constants/video";
import { images } from "@/common/constants/images";

export const media: Graphic[] = [
  {
    thumbnail: images.itinerary.animateIkebukuro,
    src: images.itinerary.animateIkebukuro,
    name: "[Test] Animate Ikebukuro",
    description: "For Testing",
    tags: [Tag.image],
  },
  {
    thumbnail: images.itinerary.asakusaBattingStadium,
    src: images.itinerary.asakusaBattingStadium,
    name: "[Test] Asakusa Batting Stadium",
    description: "For Testing",
    tags: [Tag.image],
  },
  {
    thumbnail: images.itinerary.meguroRiver,
    src: "/video/Dango.mp4",
    name: "Dango at Meguro River",
    description: "Placeholder",
    tags: [Tag.video, Tag.meguroRiver, Tag.dango],
  },
  {
    thumbnail: images.itinerary.osakaAquarium,
    src: images.itinerary.osakaAquarium,
    name: "[Test] Aquarium",
    description: "For Testing",
    tags: [Tag.image],
  },
  {
    thumbnail: images.itinerary.hoboShinjukuNorengai,
    src: images.itinerary.hoboShinjukuNorengai,
    name: "[Test] Hobo",
    description: "For Testing",
    tags: [Tag.image],
  },
  {
    thumbnail: images.itinerary.dawnAvatarRobotCafe,
    src: images.itinerary.dawnAvatarRobotCafe,
    name: "[Test] Dawn Cafe",
    description: "For Testing",
    tags: [Tag.image],
  },
];
