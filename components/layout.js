import Head from "next/head";

import {siteName} from "./constants"

export default function Layout({ children, pageTitle, description }) {
  return (
    <>
      <Head>
        <title>{siteName}</title>
      </Head>
      <main>
        {children}
      </main>
    </>
  );
}