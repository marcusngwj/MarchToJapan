import Link from "next/link";
import { SxProps, Theme } from "@mui/material";
import Button from "@mui/material/Button";
import { useDispatch } from "@/common/store";
import { setNavigationIndex } from "@/common/store/slices/navigation";
import { Route } from "@/common/constants/route";

export default function Index({ name, route, sx }: NavigationButtonProp) {
  const dispatch = useDispatch();
  return (
    <Button
      LinkComponent={Link}
      href={route.path}
      onClick={() => dispatch(setNavigationIndex(route.index))}
      sx={sx}
    >
      {name}
    </Button>
  );
}

type NavigationButtonProp = {
  name: string;
  route: Route;
  sx?: SxProps<Theme>;
};
