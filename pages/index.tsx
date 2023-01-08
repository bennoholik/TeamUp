import Head from "next/head";
import Image from "next/image";
import InfoSlider from "../components/Main/InfoSlider";
import MainPageListing from "../components/Main/MainPageListing";

export default function Home({ popularList, recentList }) {
  return (
    <>
      <Head>
        <title>TeamUp</title>
        <meta name="description" content="Side Project Platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InfoSlider />
      <MainPageListing popularList={popularList} recentList={recentList} />
      {/* <MainPageListing pList={recentList} /> */}
    </>
  );
}

export async function getStaticProps() {
  const popularProject = await fetch("https://g10000.shop/api/quests/main");
  const recentProject = await fetch("https://g10000.shop/api/quests/recent");
  const popularList = await popularProject.json();
  const recentList = await recentProject.json();
  console.log("re", recentList);
  return {
    props: {
      popularList,
      recentList,
    },
  };
}
