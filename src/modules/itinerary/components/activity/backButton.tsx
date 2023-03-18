import { useRouter } from "next/router";

import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function BackButton() {
  const router = useRouter();

  return (
    <IconButton
      aria-label="back"
      onClick={() => router.back()}
      sx={{ position: "absolute", zIndex: 2, m: 0.5 }}
    >
      <ArrowBackIcon />
    </IconButton>
  );
}
