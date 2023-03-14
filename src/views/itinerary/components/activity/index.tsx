import { MouseEventHandler, useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Banner from "./banner";
import Header from "./header";
import GuideButton from "./guideButton";
import Narrative from "./narrative";
import BackButton from "./backButton";
import Guide from "./guide";
import { ItineraryItemActivity } from "@/common/types/itinerary";

export default function Index({
  name,
  thumbnail,
  location,
  duration,
  rating,
  url,
  narratives,
  images,
}: ActivityProp) {
  const padding = 3;

  const [isGuideOpen, setOpenGuide] = useState(false);
  const handleOpenGuide = () => setOpenGuide(true);
  const handleCloseGuide = () => setOpenGuide(false);

  return (
    <Box>
      <Banner thumbnail={thumbnail} />
      <BackButton />
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          top: "30vh",
          backgroundColor: "white",
          borderRadius: 10,
          p: padding,
        }}
      >
        <GuideButton onClick={handleOpenGuide} />
        <Stack spacing={3}>
          <Header title={name} duration={duration} rating={rating} url={url} />
          {narratives?.length > 0 &&
            narratives.map((section, index) => (
              <Narrative
                key={index}
                title={section.title}
                content={section.content}
              />
            ))}
        </Stack>
      </Box>
      <Guide open={isGuideOpen} onClose={handleCloseGuide} map={location.map} address={location.address}/>
    </Box>
  );
}

type ActivityProp = ItineraryItemActivity & {
  name: string;
  thumbnail: string;
};
