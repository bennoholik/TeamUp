import Link from "next/link";
import { mainPageQueries } from "../../core/api/mainPageQueries";
import PostCard from "../Card";

const MainPageListing = () => {
  const { data: popularList } = mainPageQueries.useGetPopularList();
  const { data: recentList } = mainPageQueries.useGetRecentList();

  return (
    <>
      <div className="flex justify-center items-center my-20 flex-col">
        <h2 className="font-bold text-2xl">지금 가장 인기있는 프로젝트</h2>

        <div className="flex flex-wrap gap-10 mt-20 justify-center items-center">
          {popularList?.map((pl) => (
            <Link href={`project/${pl.mainQuestId}`} key={pl.mainQuestId}>
              <PostCard key={pl.mainQuestId} pList={pl} />
            </Link>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center my-20 flex-col">
        <h2 className="font-bold text-2xl">최근에 등록된 프로젝트</h2>

        <div className="flex flex-wrap gap-10 mt-20 justify-center items-center">
          {recentList?.map((rl) => (
            <Link href={`project/${rl.recentQuestId}`} key={rl.mainQuestId}>
              <PostCard key={rl.recentQuestId} pList={rl} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default MainPageListing;
