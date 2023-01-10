import Link from "next/link";
import { projectQueries } from "../../core/api/projectQueries";
import PostCard from "../Card";

const List = () => {
  const { data: projectList } = projectQueries.useGetProjectList();

  return (
    <section className="xl:max-w-[1280px] my-20 justify-center items-center  mx-auto flex flex-wrap gap-6 p-2">
      {projectList?.map((pl, i) => (
        <Link href={`project/${pl.questId}`} key={pl.questId}>
          <PostCard key={pl.questId} pList={pl} />
        </Link>
      ))}
    </section>
  );
};

export default List;
