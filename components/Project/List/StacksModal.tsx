import { useRef, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useModal } from "../../../core/hooks/useModal";
import {
  filterState,
  stacksState,
} from "../../../core/recoil/atoms/filterAtoms";
import { StackListDropdown } from "../StackListDropDown";

const StacksModal = ({ tg, setTg }: any) => {
  //const [stacks, setStacks] = useState<string[]>([]);

  const [stacks, setStacks] = useRecoilState(stacksState);
  const setFilter = useSetRecoilState(filterState);
  const node = useRef<null | HTMLDivElement>(null);

  console.log(stacks);

  const onSubmitFilter = () => {
    console.log(stacks);
    setFilter((prev) => ({
      ...prev,
      stack: stacks,
    }));
    setTg(false);
  };

  useModal({ node, tg, setTg });
  return (
    <div
      className="bg-white w-[350px]  absolute z-20 top-10 p-4 border rounded-md shadow-xl"
      ref={node}
    >
      <span className="font-bold">스택</span>
      <div className="w-[300px] mx-auto border-b">
        <StackListDropdown stacks={stacks} setStacks={setStacks} />
      </div>
      <button
        className="float-right mt-2 mx-2 text-green-500 rounded-lg"
        onClick={onSubmitFilter}
      >
        적용하기
      </button>
    </div>
  );
};

export default StacksModal;
