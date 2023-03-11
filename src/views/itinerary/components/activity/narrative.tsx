import Box from "@mui/material/Box";

import { ItineraryItemActivityNarrative } from "@/common/types/itinerary";

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
