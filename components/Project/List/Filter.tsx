import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { filterState } from "../../../core/recoil/atoms/filterAtoms";
import DurationModal from "./DurationModal";
import StacksModal from "./StacksModal";

const Filter = () => {
  const router = useRouter();

  const [stackModalTg, setStackModalTg] = useState(false);
  const [durationModalTg, setDurationModalTg] = useState(false);

  const filter = useRecoilValue(filterState);

  return (
    <div className="xl:max-w-[1200px]  mx-auto  px-10 pb-10">
      <div className="my-10 flex justify-between">
        <h1 className="font-bold text-2xl ">전체 &gt; </h1>
        <input className="border-2 rounded-2xl  h-8 p-2" />
      </div>
      <div className="flex justify-between  ">
        <div className="flex gap-x-4 relative">
          <button
            className="border px-6 py-1 border-gray-200 text-gray-800 rounded-md"
            onClick={() => setStackModalTg(true)}
          >
            스택 &gt;{" "}
          </button>
          <button
            className="border px-6 py-1 border-gray-200 text-gray-800 rounded-md"
            onClick={() => setDurationModalTg(true)}
          >
            기간 &gt;{" "}
          </button>
          {stackModalTg ? (
            <StacksModal tg={stackModalTg} setTg={setStackModalTg} />
          ) : null}
          {durationModalTg ? (
            <DurationModal tg={durationModalTg} setTg={setDurationModalTg} />
          ) : null}
        </div>
        <button
          className="border px-6 py-1 border-gray-200 text-gray-800 rounded-md "
          onClick={() => router.push("/project/create")}
        >
          글쓰기
        </button>
      </div>

      <div className="w-full relative mt-6 flex">
        {/* <button className="md:hidden whitespace-nowrap px-2">필터</button> */}

        <ul className="flex overflow-x-scroll gap-x-4">
          {filter.stack.map((st) => (
            <li
              key={st}
              className="bg-green-200 inline-block whitespace-nowrap px-4 py-1 rounded-3xl"
            >
              {st}
            </li>
          ))}
        </ul>
        {/* <div className="absolute top-0 right-0 bg-white px-2 py-1 opacity-90">
          <p>10건 </p>
        </div> */}
      </div>
    </div>
  );
};

export default Filter;
