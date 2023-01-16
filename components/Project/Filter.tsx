const Filter = () => {
  return (
    <div className="xl:max-w-[1200px]  mx-auto">
      <div className="mx-10 my-10 flex justify-between">
        <h1 className="font-bold text-2xl max_md:hidden">전체 &gt; </h1>
        <input className="border-2 rounded-2xl max_md:w-full h-8" />
      </div>
      <div className="flex justify-between px-10 max_md:hidden">
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
      <div className="px-10 flex justify-between md:hidden">
        <button>필터</button>
        <span>10건</span>
      </div>
      <div className="w-full">
        <ul className="flex overflow-x-scroll gap-x-4 mt-6 mx-10">
          <li className="bg-blue-100 inline-block whitespace-nowrap px-4 py-1 rounded-3xl">
            Javascript
          </li>
          <li className="bg-blue-100 inline-block whitespace-nowrap px-4 py-1 rounded-3xl">
            Typescript
          </li>
          <li className="bg-blue-100 inline-block whitespace-nowrap px-4 py-1 rounded-3xl">
            Java
          </li>
          <li className="bg-blue-100 inline-block whitespace-nowrap px-4 py-1 rounded-3xl">
            React
          </li>
          <li className="bg-blue-100 inline-block whitespace-nowrap px-4 py-1 rounded-3xl">
            Spring
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Filter;
