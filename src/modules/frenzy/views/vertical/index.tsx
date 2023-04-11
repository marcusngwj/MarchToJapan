import Box from "@mui/material/Box";
import Gallery from "../../components/gallery"
import { ViewProps } from "../../types/viewProps";

export default function Index({ media}: ViewProps) {
  return (
    <Box>
      <Gallery data={media}/>
    </Box>
  );
}