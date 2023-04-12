import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Gallery from "../../components/gallery";
import { ViewProps } from "../../types/viewProps";
import { Graphic } from "../../types/media";
import Detail from "../../components/detail";

export default function Index({ media }: ViewProps) {
  const router = useRouter();
  const { isReady } = router;
  const { name } = router.query;

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isReady) {
      console.log("Router IS READY");

      setIsLoading(false);
    }
  }, [isReady]);

  return (
    <>
      {isReady &&
        !isLoading &&
        (name ? (
          <>
            <Detail
              content={
                media.find((item) => item.name === name) ??
                temp
              }
            />
          </>
        ) : (
          <Gallery data={media} />
        ))}
    </>
  );
}

const temp: Graphic = {
  thumbnail: "",
  src: "",
  name: "",
  description: "",
};
