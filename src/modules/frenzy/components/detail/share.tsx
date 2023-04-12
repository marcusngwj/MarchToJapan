import Button from "@mui/material/Button";
import ShareIcon from "@mui/icons-material/Share";

export default function Share({ url }: ShareProp) {
  return (
    <Button variant="outlined" startIcon={<ShareIcon />}>
      Share
    </Button>
  );
}

type ShareProp = {
  url: string;
};
