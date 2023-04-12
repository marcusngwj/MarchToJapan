import Box from "@mui/material/Box";

export default function Video({ src }: VideoProp) {
  return (
    <Box sx={{height: "50vh"}} >
      <video src={src} controls height="100%"/>
    </Box>
  );
}

type VideoProp = {
  src: string;
};
