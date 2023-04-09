import Box from "@mui/material/Box";

export default function Headline() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Japan Trip</h1>
        <span>19 March 2023 - 2 April 2023</span>
      </Box>
    </Box>
  );
}