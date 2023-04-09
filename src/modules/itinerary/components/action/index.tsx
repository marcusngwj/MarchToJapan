import Image from "next/image";
import Link from "next/link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button"

export default function Index({thumbnail, thumbnailAlt, text, buttonLabel, buttonUrl}: ActionProp) {
  return (
    <Box sx={{display: "flex", justifyContent: "space-between"}}>
      <Image src={thumbnail} alt={thumbnailAlt} width={100} height={25} />
      <Box>{text}</Box>
      <Button LinkComponent={Link} href={buttonUrl} rel="noopener noreferrer" target="_blank">{buttonLabel}</Button>
    </Box>
  );
}

type ActionProp = {
  thumbnail: string;
  thumbnailAlt: string
  text: string;
  buttonLabel: string;
  buttonUrl: string;
};
