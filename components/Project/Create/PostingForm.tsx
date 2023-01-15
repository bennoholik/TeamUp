import { useState } from "react";
import { DurationRange } from "../DurationRange";
import { StackListDropdwon } from "../StackListDropDown";

const Postingform = () => {
  const [duration, setDuration] = useState(0);
  const [stacks, setStacks] = useState<string[]>([]);

  return (
    <div className="max-w-[700px] w-full mx-auto py-8 px-6 flex flex-col gap-y-10">
      <div className="flex flex-col gap-y-8">
        <h1 className="text-3xl max_sm:text-xl font-bold">
          1. 프로젝트의 정보를 입력해주세요.
        </h1>
        <hr />

        <div className="">
          <h2 className="text-xl max_sm:text-lg font-semibold">
            직군별 모집인원<span className="text-red-500">*</span>
          </h2>
          <div className="grid md:grid-cols-2 mt-6 gap-4 bg-gray-50 p-4 rounded-md">
            <div className="flex justify-between">
              <label>프론트엔드 </label>
              <input
                type="number"
                className="border rounded-md p-1"
                min={0}
                defaultValue={0}
              />
            </div>
            <div className="flex justify-between">
              <label>백엔드 </label>
              <input
                type="number"
                className="border rounded-md p-1"
                min={0}
                defaultValue={0}
              />
            </div>
            <div className="flex justify-between">
              <label>디자이너 </label>
              <input
                type="number"
                className="border rounded-md p-1"
                min={0}
                defaultValue={0}
              />
            </div>
            <div className="flex justify-between">
              <label>풀스택 </label>
              <input
                type="number"
                className="border rounded-md p-1"
                min={0}
                defaultValue={0}
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl max_sm:text-lg font-semibold">필요 스택</h2>
          <StackListDropdwon stacks={stacks} setStacks={setStacks} />
        </div>
        <div>
          <h2 className="text-xl max_sm:text-lg font-semibold">기간</h2>
          <div className="px-2">
            <DurationRange duration={duration} setDuration={setDuration} />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-6">
        <h1 className="text-3xl font-bold max_sm:text-xl">
          2. 프로젝트에 대해 소개 해주세요.
        </h1>
        <hr />
        <div className="w-full">
          <label>
            제목<span className="text-red-500">*</span>
          </label>
          <input
            className="block p-2.5 mt-3 w-full text-sm text-gray-900 rounded-lg border-2 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="제목을 입력해주세요."
            maxLength={255}
          />
        </div>

        <div>
          <label>
            내용<span className="text-red-500">*</span>
          </label>
          <textarea
            rows={15}
            className="block p-2.5 mt-3 w-full text-sm text-gray-900 rounded-lg border-2 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="프로젝트 내용을 입력해주세요."
            style={{ resize: "none" }}
          />
        </div>
      </div>
      <div className="flex justify-end">
        <button className="bg-gray-700 px-4 py-2 text-white rounded-md">
          등록하기
        </button>
      </div>
    </div>
  );
};

export default Postingform;
