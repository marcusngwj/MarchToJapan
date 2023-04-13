import Box from "@mui/material/Box";
import BackButton from "@/common/components/backButton";
import ShareButton from "@/common/components/shareButton";
import Video from "./video";
import Image from "./image";
import { Graphic } from "../../types/media";
import { isVideoFile } from "../../functions/video";

export default function Index({ content }: DetailProp) {
  return (
    <>
      <BackButton />

      {isVideoFile(content.tags) ? (
        <Video src={content.src} />
      ) : (
        <Image src={content.src} name={content.name} />
      )}

      <Box sx={{ fontWeight: "bold" }}>{content.name}</Box>
      <Box sx={{ mt: 1 }}>{content.description}</Box>

      <Box sx={{ display: "flex", justifyContent: "center", my: 3 }}>
        <Box sx={{ width: "75vw" }}>
          <ShareButton />
        </Box>
      </Box>
    </>
  );
}

type DetailProp = {
  content: Graphic;
};
