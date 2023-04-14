import Link from "next/link";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Button from "@mui/material/Button";
import ImageListItem from "@mui/material/ImageListItem";
import { route } from "@/common/constants/route";

export default function Item({name, thumbnail, height}: ItemProp) {
  return (
    <Button
      key={name}
      LinkComponent={Link}
      href={`${route.frenzy.path}?name=${name}`}
      sx={{ p: 0 }}
    >
      <ImageListItem key={name} sx={{ width: "100%" }}>
        <LazyLoadImage
          src={`${thumbnail}?fit=crop&auto=format`}
          alt={name}
          loading="lazy"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            height: height,
          }}
        />
      </ImageListItem>
    </Button>
  );
}

type ItemProp = {
  name: string
  thumbnail: string
  height: number
}