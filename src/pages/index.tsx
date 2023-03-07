import Head from 'next/head'
import Box from "@mui/material/Box";
import VerticalView from "@/views/home/vertical";
import HorizontalView from "@/views/home/horizontal";

export default function Index() {
  return (
    <>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <VerticalView />
      </Box>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <HorizontalView />
      </Box>
    </>
  )
}
