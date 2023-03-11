import Link from "next/link";
import Box from "@mui/material/Box";

export default function Index() {
  return (
    <Link href="/itinerary?day=3">
      <Box>click me</Box>
    </Link>
  );
}
