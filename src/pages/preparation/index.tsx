import Head from "next/head";
import Preparation from "@/modules/preparation"
import { appName } from "@/common/constants/meta";

export default function Index() {
  return (
    <>
      <Head>
        <title>Preparation | {appName}</title>
      </Head>
      <Preparation />
    </>
  );
}
