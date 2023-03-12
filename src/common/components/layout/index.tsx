import { ReactElement } from "react";
import Orientation from "../orientation";
import NavigationBar from "../navigation";

export default function Layout({ children }: LayoutProp) {
  return (
    <>
      <Orientation
        verticalView={
          <>
            {children}
            <NavigationBar />
          </>
        }
        horizontalView={
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
