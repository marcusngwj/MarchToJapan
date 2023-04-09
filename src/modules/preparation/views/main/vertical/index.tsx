import Link from "next/link";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { route } from "@/common/constants/route";

export default function Index() {
  return (
    <Stack>
      <Button LinkComponent={Link} href={route.preparation.subRoute?.packing}>
        Packing List
      </Button>
    </Stack>
  );
}
