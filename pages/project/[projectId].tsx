import Head from "next/head";
import ProjectDetail from "../../components/Project/Detail/Detail";

const DetailPage = () => {
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

export default DetailPage;
