import Link from "next/link";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { route } from "@/common/constants/route"

export default function Scroll({ data, value }: ScrollProp) {
  return (
    <Tabs
      variant="scrollable"
      allowScrollButtonsMobile
      value={value}
    >
      {data.map((item, index) => (
        <Tab
          aria-label={item.title}
          key={index}
          label={
            <ScrollItem title={item.title} description={item.description} />
          }
          component={Link}
          href={`${route.itinerary.path}?day=${index}`}
          value={index.toString()}
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
};

export type ScrollItemProp = {
  title: string;
  description: string;
};
