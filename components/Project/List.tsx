import Link from "next/link";
import PostCard from "../Card";

const List = ({ projectList }) => {
  console.log(projectList);

  return (
    <section className="2xl:max-w-[1280px] my-20 justify-center items-center  mx-auto flex flex-wrap gap-6 p-2">
      {projectList.map((pl, i) => (
        <Link href={`project/${pl.questId}`} key={i}>
          <PostCard key={pl.questId} pList={pl} />
        </Link>
      ))}
    </section>
  );
};

export default List;
