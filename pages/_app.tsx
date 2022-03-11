import type { AppProps } from "next/app";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
      <!-- Global site tag (gtag.js) - Google Analytics -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-BMPSWY9L1J"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-BMPSWY9L1J');
      </script>
        <title>Stephen M. Resume</title>
        <link rel="icon" href="/head.png" />
        <meta name="viewport" content="width=device-width"/>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
