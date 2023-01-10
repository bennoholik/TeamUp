const Filter = () => {
  return (
    <div className="2xl:max-w-[1100px]  mx-auto">
      <div className="mx-10 my-10 flex justify-between">
        <h1 className="font-bold text-2xl">전체 &gt; </h1>
        <input />
      </div>
      <div className="flex justify-between px-10 max_sm:hidden">
        <div className="flex gap-x-4 max_sm:hidden">
          <span className="border px-6 py-1 border-gray-200 text-gray-800 rounded-md">
            스택 &gt;{" "}
          </span>
          <span className="border px-6 py-1 border-gray-200 text-gray-800 rounded-md">
            기간 &gt;{" "}
          </span>
        </div>
        <button className="border px-6 py-1 border-gray-200 text-gray-800 rounded-md">
          글쓰기
        </button>
      </div>
      <div className="flex overflow-x-auto gap-x-4 mt-6 mx-10 ">
        <span className="bg-blue-100 inline-block whitespace-nowrap px-4 py-1 rounded-3xl">
          Javascript
        </span>
        <span className="bg-blue-100 inline-block whitespace-nowrap px-4 py-1 rounded-3xl">
          Typescript
        </span>
        <span className="bg-blue-100 inline-block whitespace-nowrap px-4 py-1 rounded-3xl">
          Java
        </span>
        <span className="bg-blue-100 inline-block whitespace-nowrap px-4 py-1 rounded-3xl">
          React
        </span>
        <span className="bg-blue-100 inline-block whitespace-nowrap px-4 py-1 rounded-3xl">
          Spring
        </span>
      </div>
    </div>
  );
};

export default Filter;
