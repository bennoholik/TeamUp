import PostCard from "../Card";

const MainPageListing = () => {
  const data = [1, 2, 3];

  return (
    <div className="flex justify-center items-center my-20 flex-col">
      <h2 className="font-bold text-2xl">지금 가장 인기있는 프로젝트</h2>

      <div className="flex flex-wrap gap-10 mt-20 justify-center items-center">
        {data.map((d) => (
          <PostCard key={d} />
        ))}
      </div>
    </div>
  );
};

export default MainPageListing;
