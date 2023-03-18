import Box from "@mui/material/Box";

export default function Item({ title, description }: ItemProp) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <div>{title}</div>
      <span>{description}</span>
    </Box>
  );
}

type ItemProp = {
  title: string;
  description: string;
};
