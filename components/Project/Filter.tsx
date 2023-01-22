import { useRouter } from "next/router";
import { useState } from "react";
import DurationModal from "./DurationModal";
import { DurationRange } from "./DurationRange";

const Filter = () => {
  const router = useRouter();

  const [duration, setduration] = useState(0);

  return (
    <div className="xl:max-w-[1200px]  mx-auto">
      <div className="mx-10 my-10 flex justify-between">
        <h1 className="font-bold text-2xl max_md:hidden">전체 &gt; </h1>
        <input className="border-2 rounded-2xl max_md:w-full h-8" />
      </div>
      <div className="flex justify-between px-10 max_md:hidden">
        <div className="flex gap-x-4 max_sm:hidden relative">
          <span className="border px-6 py-1 border-gray-200 text-gray-800 rounded-md">
            스택 &gt;{" "}
          </span>
          <span className="border px-6 py-1 border-gray-200 text-gray-800 rounded-md">
            기간 &gt;{" "}
          </span>
          <div className="bg-white w-[350px] h-[150px] absolute z-30 top-10 left-[108px] p-4 border rounded-md">
            기간
            <div className="w-[300px] mx-auto">
              <DurationRange duration={duration} setDuration={setduration} />
            </div>
          </div>
        </div>
        <button
          className="border px-6 py-1 border-gray-200 text-gray-800 rounded-md"
          onClick={() => router.push("/project/create")}
        >
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
