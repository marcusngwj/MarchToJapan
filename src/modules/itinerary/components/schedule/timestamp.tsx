import Box from "@mui/material/Box"

export default function TimeIndicator({ time }: TimestampProp) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontSize: "24px",
      }}
    >
      <Box
        sx={{
          borderLeft: "2px solid black",
          height: "100%",
          left: "50%",
          top: 0,
          ml: "-1px",
          pt: "5px",
        }}
      ></Box>
      <Box sx={{ width: 100, display: "flex", justifyContent: "center" }}>
        {`${time.substring(0, 2)}:${time.substring(2)}`}
      </Box>
      <Box
        sx={{
          borderLeft: "2px solid black",
          height: "100%",
          left: "50%",
          top: 0,
          ml: "-1px",
          pt: "5px",
        }}
      ></Box>
    </Box>
  );
}

type TimestampProp = {
  time: string;
};
