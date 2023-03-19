import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function DateTimeDisplay({
  startDate,
  startTime,
  endDate,
  endTime,
}: DateTimeDisplayProp) {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Date value={startDate} />
        <Time value={startTime} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <Date value={endDate} />
        <Time value={endTime} />
      </Box>
    </Box>
  );
}

function Date({ value }: DateProp) {
  return <Typography>{value}</Typography>;
}

function Time({ value }: TimeProp) {
  return <Typography variant="h4" fontWeight="bold">{value}</Typography>;
}

type DateTimeDisplayProp = {
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
};

type DateProp = {
  value: string;
};

type TimeProp = {
  value: string;
};
