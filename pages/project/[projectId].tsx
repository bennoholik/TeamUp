import { dehydrate, QueryClient } from "@tanstack/react-query";
import axios from "axios";
import Head from "next/head";
import CommentSection from "../../components/Project/Detail/Comment";
import ProjectDetail from "../../components/Project/Detail/Detail";
import { commentApi, projectApi } from "../../core/api/apis";
import { IProject } from "../../core/types/projectType";

const DetailPage = () => {
  return (
    <>
      <Head>
        <title>TeamUp | Projects</title>
        <meta name="description" content="Side Project Platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProjectDetail />
      <CommentSection />
    </>
  );
};

export async function getStaticPaths() {
  const projects = await projectApi.getProjectList();
  console.log(projects);

  const paths = projects.map((pj: IProject) => ({
    params: { projectId: pj.questId.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({
  params: projectId,
}: {
  params: string;
}) {
  // console.log(params);
  // const { projectId } = params;

  // const data = await fetch(`https://g10000.shop/api/quests/${projectId}`);
  // const projectDetail = await data.json();

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["project", projectId], () => {
    return projectApi.getProjectDetail(projectId);
  });

  await queryClient.prefetchQuery(["comment", projectId], () => {
    return commentApi.getCommentList(projectId);
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default DetailPage;
