import React, { FC } from "react";
import { AppProps } from "next/app";
import "../styles/index.css";
import Layout from "@/components/Layout";

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default App;
