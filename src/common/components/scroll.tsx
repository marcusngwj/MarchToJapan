import { SyntheticEvent } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function Scroll({ data, value, onChange }: ScrollProp) {
  return (
    <Tabs
      variant="scrollable"
      allowScrollButtonsMobile
      value={value}
      onChange={onChange}
    >
      {data.map((item, index) => (
        <Tab
          aria-label={item.title}
          key={index}
          value={index.toString()}
          label={
            <ScrollItem title={item.title} description={item.description} />
          }
        />
      ))}
    </Tabs>
  );
}

function ScrollItem({ title, description }: ScrollItemProp) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <div>{title}</div>
      <span>{description}</span>
    </Box>
  );
}

type ScrollProp = {
  data: ScrollItemProp[];
  value: string;
  onChange: (event: SyntheticEvent, newValue: any) => void;
};

export type ScrollItemProp = {
  title: string;
  description: string;
};
