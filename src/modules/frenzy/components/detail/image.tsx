import BaseImage from "next/image";
import Box from "@mui/material/Box";

export default function Image({ src, name }: ImageProp) {
  return (
    <Box
      sx={{
        height: "70vh",
        width: "100vw",
        position: "relative",
        backgroundColor: "black",
      }}
    >
      <BaseImage
        src={src}
        alt={name}
        fill
        style={{ height: "100%", maxWidth: "100%", objectFit: "contain" }}
      />
    </Box>
  );
}

type ImageProp = {
  src: string;
  name: string;
};
