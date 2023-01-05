import Head from "next/head";
import Image from "next/image";
import InfoSlider from "../components/Main/InfoSlider";
import MainPageListing from "../components/Main/MainPageListing";

export default function Home() {
  return (
    <>
      <Head>
        <title>TeamUp</title>
        <meta name="description" content="Side Project Platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InfoSlider />
      <MainPageListing />
      <MainPageListing />
    </>
  );
}
