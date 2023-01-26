import Link from "next/link";
import { projectQueries } from "../../../core/api/projectQueries";
import PostCard from "../../Card";

const List = () => {
  const { data: projectList } = projectQueries.useGetProjectList();

  return (
    <section className="xl:max-w-[1180px] my-20 px-6 mx-auto sm:grid gap-6 grid-cols-3 max_lg:grid-cols-2 max_sm:grid-cols-1">
      {projectList?.map((pl, i) => (
        <Link href={`project/${pl.questId}`} key={pl.questId}>
          <PostCard key={pl.questId} pList={pl} />
        </Link>
      ))}
    </section>
  );
};

export default List;
// justify-center  mx-auto flex flex-wrap gap-6 p-2
