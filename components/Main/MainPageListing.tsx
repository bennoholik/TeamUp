import Link from "next/link";
import { mainPageQueries } from "../../core/api/mainPageQueries";
import PostCard from "../Card";

const MainPageListing = () => {
  const { data: popularList } = mainPageQueries.useGetPopularList();
  const { data: recentList } = mainPageQueries.useGetRecentList();

  return (
    <>
      <div className=" my-20 flex-col">
        <h2 className="font-bold text-2xl text-center">
          지금 가장 인기있는 프로젝트
        </h2>

        <div className="xl:max-w-[1180px] my-20 px-10 mx-auto sm:grid gap-6 grid-cols-3 max_lg:grid-cols-1">
          {popularList?.map((pl) => (
            <Link href={`project/${pl.mainQuestId}`} key={pl.mainQuestId}>
              <PostCard key={pl.mainQuestId} pList={pl} />
            </Link>
          ))}
        </div>
      </div>
      <div className=" my-20 flex-col">
        <h2 className="font-bold text-2xl text-center">
          최근에 등록된 프로젝트
        </h2>

        <div className="xl:max-w-[1180px] my-20 px-10 mx-auto sm:grid gap-6 grid-cols-3 max_lg:grid-cols-1">
          {recentList?.map((rl) => (
            <Link href={`project/${rl.recentQuestId}`} key={rl.recentQuestId}>
              <PostCard key={rl.recentQuestId} pList={rl} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default MainPageListing;
