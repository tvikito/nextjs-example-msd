import "~/styles/globals.css";
import CustomHead from "../components/CustomHead";
import { type AppProps } from "next/app";
import { type FC } from "react";
import Head from "next/head";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <CustomHead />
      </Head>

      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
