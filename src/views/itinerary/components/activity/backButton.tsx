import { useRouter } from "next/router";

import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function BackButton() {
  const router = useRouter();

  return (
    <IconButton aria-label="back" onClick={() => router.back()}>
      <ArrowBackIcon />
    </IconButton>
  );
}
