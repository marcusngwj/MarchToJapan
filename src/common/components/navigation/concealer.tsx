import { ReactElement } from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";

export default function Concealer({ children, direction }: ConcealerProp) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction={direction} in={!trigger}>
      {children}
    </Slide>
  );
}

type ConcealerProp = {
  children: ReactElement;
  direction: "up" | "down";
};
