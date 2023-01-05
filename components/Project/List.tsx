import PostCard from "../Card";

const List = () => {
  const data = [
    1, 1, 1, 1, 1, 2, 3, 12, 31, 231, 1, 2, 2, 1234, 5, 1, 3, 5, 1, 2,
  ];
  return (
    <section className="2xl:max-w-[1280px] justify-center items-center bg-green-300 mx-auto flex flex-wrap gap-6 p-2">
      {data.map((d, i) => (
        <PostCard key={i} />
      ))}
    </section>
  );
};

export default List;
