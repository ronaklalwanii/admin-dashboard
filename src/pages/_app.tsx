import type { AppProps } from "next/app";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import { store } from "@/store";
import { Provider } from "react-redux";

import Layout from "@/components/layout";

import theme from "@/configs/mui-theme";

import "@/db";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}
