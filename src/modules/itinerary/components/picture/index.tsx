import Image from "next/image";
import Box from "@mui/material/Box";

export default function Index({ src, description }: PictureProp) {
  return (
    <Box
      sx={{
        height: "50vh",
        width: "100%",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        src={src}
        alt={description}
        fill
        style={{
          height: "100%",
          maxWidth: "100%",
          objectFit: "contain",
        }}
      />
    </Box>
  );
}

type PictureProp = {
  src: string;
  description: string;
};
