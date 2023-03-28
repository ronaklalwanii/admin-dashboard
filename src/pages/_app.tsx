import type { AppProps } from "next/app";

import CssBaseline from "@mui/material/CssBaseline";

import Layout from "@/components/layout";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
