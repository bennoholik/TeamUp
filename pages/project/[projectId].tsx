import axios from "axios";
import Head from "next/head";
import ProjectDetail from "../../components/Project/Detail/Detail";

const DetailPage = ({ projectDetail }) => {
  console.log(projectDetail);
  return (
    <>
      <Head>
        <title>TeamUp | Projects</title>
        <meta name="description" content="Side Project Platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>NICE TO MEET YOU</div>
      <ProjectDetail />
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch("https://g10000.shop/api/quests");
  const projects = await res.json();

  const paths = projects.map((pj) => ({
    params: { projectId: pj.questId.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps() {
  const data = await fetch("https://g10000.shop/api/quests/112");
  const projectDetail = await data.json();
  return {
    props: {
      projectDetail,
    },
  };
}

export default DetailPage;
