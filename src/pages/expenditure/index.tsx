import Head from "next/head";
import Expenditure from "@/modules/expenditure"
import { appName } from "@/common/constants/meta";

export default function Index() {
  return (
    <>
      <Head>
        <title>Expenditure | {appName}</title>
      </Head>
      <Expenditure />
    </>
  );
}
