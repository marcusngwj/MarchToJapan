import Box from "@mui/material/Box";

import { ItineraryItemActivityNarrative } from "@/modules/itinerary/types/itineraryProps";

export default function Narrative({
  title,
  content,
}: ItineraryItemActivityNarrative) {
  return (
    <Box>
      {title && <Box sx={{ mb: 1 }}>{title}</Box>}
      {content}
    </Box>
  );
}
