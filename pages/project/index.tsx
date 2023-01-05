import Head from "next/head";
import InfoSlider from "../../components/Main/InfoSlider";
import Filter from "../../components/Project/Filter";
import List from "../../components/Project/List";

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
    </>
  );
}
