import Link from "next/link";
import Button from "@mui/material/Button";
import { useDispatch } from "@/common/store";
import { setNavigationIndex } from "@/common/store/slices/navigation";
import { route, Route } from "@/common/constants/route";

export default function Item({ title, route, thumbnail }: ItemProp) {
  const dispatch = useDispatch();
  return (
    <Button
      LinkComponent={Link}
      href={route.path}
      onClick={() => dispatch(setNavigationIndex(route.index))}
      sx={{ height: "75px", backgroundColor: "pink" }}
    >
      {title}
    </Button>
  );
}

type ItemProp = {
  title: string;
  route: Route;
  thumbnail: string;
};
