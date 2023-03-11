import Link from "next/link";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import ScheduleIcon from "@mui/icons-material/Schedule";
import LinkIcon from "@mui/icons-material/Link";

export default function Header({ title, duration, rating, url }: HeaderProp) {
  const iconMarginRight = 1;

  return (
    <Box>
      <Box sx={{ fontSize: 30, mb: 1 }}>{title}</Box>

      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <ScheduleIcon sx={{ mr: iconMarginRight }} />
          {duration}
        </Box>
        {rating && <Rating defaultValue={rating} precision={0.5} readOnly />}
      </Box>

      {url && (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <LinkIcon sx={{ mr: iconMarginRight }} />
          <Link href={url} rel="noopener noreferrer" target="_blank">
            Official Website
          </Link>
        </Box>
      )}
    </Box>
  );
}

type HeaderProp = {
  title: string;
  duration: string;
  rating?: number;
  url?: string;
};
