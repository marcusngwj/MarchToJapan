import Box from "@mui/material/Box";

export default function Video({ src }: VideoProp) {
  return (
    <Box
      sx={{
        height: "70vh",
        width: "100vw",
        background: "black",
      }}
    >
      <video src={src} controls height="100%" width="100%" />
    </Box>
  );
}

type VideoProp = {
  src: string;
};
