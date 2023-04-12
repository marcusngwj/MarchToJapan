import BackButton from "@/common/components/backButton";
import Video from "./video";
import Image from "./image";
import { Graphic } from "../../types/media";
import { isVideoFile } from "../../functions/video";
import Share from "./share";

export default function Index({ content }: DetailProp) {
  return (
    <>
      <BackButton />
      {isVideoFile(content.tags) ? (
        <Video src={content.src} />
      ) : (
        <Image src={content.src} name={content.name} />
      )}
      <Share url=""/>
    </>
  );
}

type DetailProp = {
  content: Graphic;
};
