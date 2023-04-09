import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import DateTimeDisplay from "./datetime";
import Divider from "./divider";
import LocationDisplay from "./location";

export default function Index({
  departureDate,
  departureTime,
  departureCity,
  departureCityCode,
  arrivalDate,
  arrivalTime,
  arrivalCity,
  arrivalCityCode,
  terminal,
  gate,
}: FlightProp) {
  return (
    <>
      <Paper sx={{ p: 2.25 }}>
        <DateTimeDisplay
          startDate={departureDate}
          startTime={departureTime}
          endDate={arrivalDate}
          endTime={arrivalTime}
        />
        <Box sx={{ my: 1.5 }}>
          <Divider />
        </Box>
        <LocationDisplay
          startName={departureCity}
          startCode={departureCityCode}
          endName={arrivalCity}
          endCode={arrivalCityCode}
        />
      </Paper>
      <Paper
        sx={{
          mt: 1.5,
          p: 2.25,
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography>Terminal</Typography>
          <Typography variant="h4" fontWeight="bold">
            {terminal}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography>Gate</Typography>
          <Typography variant="h4" fontWeight="bold">
            {gate}
          </Typography>
        </Box>
      </Paper>
    </>
  );
}

type FlightProp = {
  departureDate: string;
  departureTime: string;
  departureCity: string;
  departureCityCode: string;
  arrivalDate: string;
  arrivalTime: string;
  arrivalCity: string;
  arrivalCityCode: string;
  terminal: string;
  gate: string;
};
