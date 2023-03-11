import Box from "@mui/material/Box";

export default function Banner({ thumbnail }: BannerProp) {
  return (
    <Box
      sx={{
        height: "35vh",
        width: "100%",
        zIndex: -1,
        background: `url(${thumbnail})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "fixed",
      }}
    />
  );
}

type BannerProp = {
  thumbnail: string;
};
