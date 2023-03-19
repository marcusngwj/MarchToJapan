import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FlightIcon from "@mui/icons-material/Flight";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

export default function Divider() {
  return (
    <Box>
      <Typography
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <CircleOutlinedIcon fontSize="small" />
        <Dash />
        <FlightIcon sx={{ transform: "rotate(90deg)" }} />
        <Dash />
        <CircleOutlinedIcon fontSize="small" />
      </Typography>
    </Box>
  );
}

function Dash() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          height: "1px",
          borderRadius: "1px",
          backgroundColor: "transparent",
          backgroundImage:
            "linear-gradient(to right, black 50%, transparent 50%)",
          backgroundSize: "10px 1px",
          m: 0.5,
        }}
      />
    </Box>
  );
}
