import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Banner from "./banner";
import Header from "./header";
import Guide from "./guide";
import Narrative from "./narrative";
import { ItineraryItemActivity } from "@/common/types/itinerary";
import BackButton from "./backButton";

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
        {location && <Guide />}
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
    </Box>
  );
}

type ActivityProp = ItineraryItemActivity & {
  name: string;
  thumbnail: string;
};
