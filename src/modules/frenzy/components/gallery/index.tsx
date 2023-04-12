import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Graphic } from "../../types/media";
import Button from "@mui/material/Button";
import Link from "next/link";
import { route } from "@/common/constants/route";

export default function Index({ data }: GalleryProp) {
  const rowHeight = 164;

  return (
    <ImageList
      sx={{ height: "100%", width: "100%" }}
      cols={3}
      rowHeight={rowHeight}
    >
      {data.map((item) => (
        <Button key={item.name}
          LinkComponent={Link}
          href={`${route.frenzy.path}?name=${item.name}`}
        >
          <ImageListItem key={item.name}>
            <img
              src={`${item.thumbnail}?fit=crop&auto=format`}
              alt={item.name}
              loading="lazy"
              style={{
                objectFit: "cover",
                objectPosition: "center",
                height: rowHeight,
              }}
            />
          </ImageListItem>
        </Button>
      ))}
    </ImageList>
  );
}

type GalleryProp = {
  data: Graphic[];
};
