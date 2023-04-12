import BaseImage from "next/image";
import Box from "@mui/material/Box";

export default function Image({ src, name }: ImageProp) {
  return (
    <Box sx={{ width: "100vw", height: "30vh", position: "relative" }}>
      <BaseImage
        src={src}
        alt={name}
        fill
        style={{ height: "100%", width: "100%" }}
      />
    </Box>
  );
}

type ImageProp = {
  src: string;
  name: string;
};
