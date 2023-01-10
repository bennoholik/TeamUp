import { dehydrate, QueryClient } from "@tanstack/react-query";
import Head from "next/head";
import InfoSlider from "../components/Main/InfoSlider";
import MainPageListing from "../components/Main/MainPageListing";
import QutoesGreeting from "../components/Main/QuotesGreeting";
import { mainpageApi } from "../core/api/apis";

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
      <QutoesGreeting />
    </>
  );
}

export async function getStaticProps() {
  // const { data: popularList } = await mainpageApi.getPopularList();
  // const { data: recentList } = await mainpageApi.getRecentList();

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["popular"], () =>
    mainpageApi.getPopularList()
  );
  await queryClient.prefetchQuery(["recent"], () =>
    mainpageApi.getRecentList()
  );

  // const popularList = await popularProject.json();
  // const recentList = await recentProject.json();
  // console.log("re", recentList);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
