import type { AppProps } from "next/app";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Stephen M. Resume</title>
        <link rel="icon" href="/head.png" />
        <link rel="image" href="/w1.jpg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
