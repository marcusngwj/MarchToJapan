import { Graphic } from "../types/media";
import { Tag } from "./tag";
import { videos } from "@/common/constants/video";

export const media: Graphic[] = [
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/marchtojapan.appspot.com/o/ChilliCrabMantou.jpg?alt=media&token=25e32103-46ba-4925-8e32-a37b922c1e57",
    src: "https://firebasestorage.googleapis.com/v0/b/marchtojapan.appspot.com/o/ChilliCrabMantou.jpg?alt=media&token=25e32103-46ba-4925-8e32-a37b922c1e57",
    name: "Chilli Crab with Mantou",
    description: "Chilli Crab with Mantou",
    tags: [Tag.image],
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/marchtojapan.appspot.com/o/BeefLasagne.jpg?alt=media&token=f80b9eb9-a7ff-48dd-be0e-6f8eb28357f3",
    src: "https://firebasestorage.googleapis.com/v0/b/marchtojapan.appspot.com/o/BeefLasagne.jpg?alt=media&token=f80b9eb9-a7ff-48dd-be0e-6f8eb28357f3",
    name: "Beef Lasagne",
    description: "Placeholder",
    tags: [Tag.image],
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/marchtojapan.appspot.com/o/Dango.jpg?alt=media&token=86c11897-3eb2-4e96-985d-b6071cddcf4c",
    src: videos.dango,
    name: "Dango at Meguro River",
    description: "Placeholder",
    tags: [Tag.video, Tag.meguroRiver, Tag.dango],
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/marchtojapan.appspot.com/o/20230118224158.png?alt=media&token=14f0f867-0caf-4bce-909a-2ac2eb639a1a",
    src: "https://firebasestorage.googleapis.com/v0/b/marchtojapan.appspot.com/o/20230118224158.png?alt=media&token=14f0f867-0caf-4bce-909a-2ac2eb639a1a",
    name: "Placeholder4",
    description: "Placeholder",
    tags: [Tag.image],
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/marchtojapan.appspot.com/o/20230118224158.png?alt=media&token=14f0f867-0caf-4bce-909a-2ac2eb639a1a",
    src: "https://firebasestorage.googleapis.com/v0/b/marchtojapan.appspot.com/o/20230118224158.png?alt=media&token=14f0f867-0caf-4bce-909a-2ac2eb639a1a",
    name: "Placeholder5",
    description: "Placeholder",
    tags: [Tag.image],
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/marchtojapan.appspot.com/o/20230118224158.png?alt=media&token=14f0f867-0caf-4bce-909a-2ac2eb639a1a",
    src: "https://firebasestorage.googleapis.com/v0/b/marchtojapan.appspot.com/o/20230118224158.png?alt=media&token=14f0f867-0caf-4bce-909a-2ac2eb639a1a",
    name: "Placeholder6",
    description: "Placeholder",
    tags: [Tag.image],
  },
];
