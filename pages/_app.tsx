import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NextProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
  <Layout>
    <NextProgress startPosition={0.3} stopDelayMs={200} height={4} showOnShallow={false} ></NextProgress>
    <Component {...pageProps} /> 
  </Layout>
  </>
 );
}
