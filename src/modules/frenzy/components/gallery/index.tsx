import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { MediaCollection } from "../../types/media";

export default function Index({ data }: GalleryProp) {
  const rowHeight = 164;

  return (
    <ImageList sx={{ height: "100%", width: "100%" }} cols={3} rowHeight={rowHeight}>
      {data.map((item) => (
        <ImageListItem key={item.content.name}>
          <img
            src={`${item.thumbnail}?fit=crop&auto=format`}
            alt={item.content.name}
            loading="lazy"
            style={{
              objectFit: "cover",
              objectPosition: "center",
              height: rowHeight,
            }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

type GalleryProp = {
  data: MediaCollection;
};
