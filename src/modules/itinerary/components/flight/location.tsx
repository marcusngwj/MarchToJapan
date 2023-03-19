import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function LocationDisplay({
  startName,
  startCode,
  endName,
  endCode,
}: LocationDisplayProp) {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Name value={startName} />
        <Code value={startCode} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <Name value={endName} />
        <Code value={endCode} />
      </Box>
    </Box>
  );
}

function Name({ value }: NameProp) {
  return <Typography fontWeight="bold">{value}</Typography>;
}

function Code({ value }: CodeProp) {
  return <Typography>{value}</Typography>;
}

type LocationDisplayProp = {
  startName: string;
  startCode: string;
  endName: string;
  endCode: string;
};

type NameProp = {
  value: string;
};

type CodeProp = {
  value: string;
};
