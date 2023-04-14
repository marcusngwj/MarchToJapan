import ImageList from "@mui/material/ImageList";
import { Graphic } from "../../types/media";
import Item from "./item";

export default function Index({ data }: GalleryProp) {
  const rowHeight = 164;

  return (
    <ImageList
      sx={{ height: "100%", width: "100%" }}
      cols={3}
      rowHeight={rowHeight}
    >
      {data.map((item) => (
        <Item name={item.name} thumbnail={item.thumbnail} height={rowHeight} />
      ))}
    </ImageList>
  );
}

type GalleryProp = {
  data: Graphic[];
};
