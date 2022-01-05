import type { AppProps } from "next/app";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Stephen M. Resume</title>
        <link rel="icon" href="/head.png" />
        <meta name="viewport" content="width=device-width"/>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
