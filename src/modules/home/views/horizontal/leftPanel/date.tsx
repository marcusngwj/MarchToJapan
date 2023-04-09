import Grid from "@mui/material/Unstable_Grid2";

export default function DateSection() {
  return (
    <Grid
      container
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        height: 100,
        paddingX: "2rem",
        paddingY: "1rem",
      }}
    >
      <DateItem label={"Start Date"} date={"19 March 2023"} />
      <DateItem label={"End Date"} date={"2 April 2023"} />
    </Grid>
  );
}

function DateItem({ label, date }: DateItemProp) {
  return (
    <Grid
      xs
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <span>{label}</span>
      <span>{date}</span>
    </Grid>
  );
}

type DateItemProp = {
  label: string;
  date: string;
};
