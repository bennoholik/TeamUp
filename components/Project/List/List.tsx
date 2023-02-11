import Link from "next/link";
import React from "react";
import { useRecoilValue } from "recoil";
import { projectQueries } from "../../../core/api/projectQueries";
import { filterState } from "../../../core/recoil/atoms/filterAtoms";
import PostCard from "../../Card";

const List = () => {
  const { data: projectList } = projectQueries.useGetProjectList();

  const filter = useRecoilValue(filterState);
  console.log(filter);

  const {
    data: infiniteList,
    status,
    fetchNextPage,
    isFetchingNextPage,
  } = projectQueries.useGetInfiniteList("");

  return (
    <section className="xl:max-w-[1180px] my-20 px-6 mx-auto sm:grid gap-6 grid-cols-3 max_lg:grid-cols-2 max_sm:grid-cols-1">
      {/* {projectList?.map((pl, i) => (
        <Link href={`project/${pl.questId}`} key={pl.questId}>
          <PostCard key={pl.questId} pList={pl} />
        </Link>
      ))} */}
      {status === "loading" ? (
        <p>Loading~</p>
      ) : status === "error" ? (
        <p>error</p>
      ) : (
        infiniteList?.pages.map((page) => (
          <React.Fragment key={page.nextPage}>
            {page.content.map((pl) => (
              <Link href={`project/${pl.questId}`} key={pl.questId}>
                <PostCard key={pl.questId} pList={pl} />
              </Link>
            ))}
          </React.Fragment>
        ))
      )}
    </section>
  );
};

export default List;
// justify-center  mx-auto flex flex-wrap gap-6 p-2
