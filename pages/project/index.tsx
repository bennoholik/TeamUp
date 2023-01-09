import { dehydrate, QueryClient } from "@tanstack/react-query";
import Head from "next/head";
import InfoSlider from "../../components/Main/InfoSlider";
import CreateBtn from "../../components/Project/Create/CreateBtn";
import Filter from "../../components/Project/Filter";
import List from "../../components/Project/List";
import { mainpageApi, projectApi } from "../../core/api/apis";

export default function ProjectList() {
  return (
    <>
      <Head>
        <title>TeamUp | Projects</title>
        <meta name="description" content="Side Project Platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InfoSlider />
      <Filter />
      <List />
      <CreateBtn />
    </>
  );
}

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["projectList"], () =>
    projectApi.getProjectList()
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
