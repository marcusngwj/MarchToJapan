import Head from "next/head";
import PackingList from "@/modules/preparation/views/packing"
import { appName } from "@/common/constants/meta";

export default function Index() {
  return (
    <>
      <Head>
        <title>Preparation | {appName}</title>
      </Head>
      <PackingList />
    </>
  );
}
