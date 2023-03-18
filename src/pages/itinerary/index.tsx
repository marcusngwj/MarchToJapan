import Head from "next/head";
import Itinerary from "@/modules/itinerary";
import { appName } from "@/common/constants/meta";

export default function Index() {
  return (
    <>
      <Head>
        <title>Itinerary | {appName}</title>
      </Head>
      <Itinerary />
    </>
  );
}
