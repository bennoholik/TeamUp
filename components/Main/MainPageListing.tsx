import PostCard from "../Card";

const MainPageListing = ({ popularList, recentList }) => {
  const data = [1, 2, 3];

  return (
    <>
      <div className="flex justify-center items-center my-20 flex-col">
        <h2 className="font-bold text-2xl">지금 가장 인기있는 프로젝트</h2>

        <div className="flex flex-wrap gap-10 mt-20 justify-center items-center">
          {popularList.map((pl) => (
            <PostCard key={pl.mainQuetId} pList={pl} />
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center my-20 flex-col">
        <h2 className="font-bold text-2xl">최근에 등록된 프로젝트</h2>

        <div className="flex flex-wrap gap-10 mt-20 justify-center items-center">
          {recentList.map((rl) => (
            <PostCard key={rl.recentQuetId} pList={rl} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MainPageListing;
