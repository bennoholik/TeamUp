import Head from "next/head";
import InfoSlider from "../../components/Main/InfoSlider";
import CreateBtn from "../../components/Project/Create/CreateBtn";
import Filter from "../../components/Project/Filter";
import List from "../../components/Project/List";

export default function ProjectList({ projectList }) {
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
      <List projectList={projectList} />
      <CreateBtn />
    </>
  );
}

export async function getStaticProps() {
  const data = await fetch("https://g10000.shop/api/quests");
  const projectList = await data.json();
  console.log(projectList);
  return {
    props: {
      projectList,
    },
  };
}
