import { ReactElement } from "react";
import Orientation from "../orientation";
import NavigationBar from "../navigation";

export default function Index({ children }: LayoutProp) {
  return (
    <>
      <Orientation
        v={
          <>
            {children}
            <NavigationBar />
          </>
        }
        h={
          <>
            <NavigationBar />
            {children}
          </>
        }
      />
    </>
  );
}

type LayoutProp = {
  children: ReactElement;
};
