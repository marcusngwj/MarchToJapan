import Button from "@mui/material/Button";
import ShareIcon from "@mui/icons-material/Share";
import { shareCurrentUrl } from "./click";

export default function Share() {
  return (
    <Button
      variant="outlined"
      startIcon={<ShareIcon />}
      onClick={shareCurrentUrl}
      sx={{ width: "100%" }}
    >
      Share
    </Button>
  );
}
