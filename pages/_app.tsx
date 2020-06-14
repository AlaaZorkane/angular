import React, { FC } from "react";
import { AppProps } from "next/app";
import { config } from "@fortawesome/fontawesome-svg-core";
import "../styles/index.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Layout from "@/components/Layout";
import { DefaultSeo } from "next-seo";
import SEO from "@/next-seo.config";

config.autoAddCss = false;

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <DefaultSeo {...SEO} />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
);

export default App;
