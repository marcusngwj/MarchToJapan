import Head from "next/head";
import Frenzy from "@/modules/frenzy"
import { appName } from "@/common/constants/meta";

export default function Index() {
  return (
    <>
      <Head>
        <title>Frenzy | {appName}</title>
      </Head>
      <Frenzy />
    </>
  );
}
