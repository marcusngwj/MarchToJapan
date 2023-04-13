import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Gallery from "../../components/gallery";
import Detail from "../../components/detail";
import { ViewProps } from "../../types/viewProps";
import { Graphic } from "../../types/media";

export default function Index({ media }: ViewProps) {
  const router = useRouter();
  const { isReady } = router;
  const { name } = router.query;

  const [isLoading, setIsLoading] = useState(true);
  const [content, setContent] = useState<Graphic>();

  useEffect(() => {
    if (isReady) {
      const mediaContent = media.find((item) => item.name === name);
      setContent(mediaContent);

      setIsLoading(false);
    }
  }, [isReady, name]);

  return (
    <>
      {isReady &&
        !isLoading &&
        (content ? <Detail content={content} /> : <Gallery data={media} />)}
    </>
  );
}
