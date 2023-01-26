import { useRef, useState } from "react";
import { useModal } from "../../../core/hooks/useModal";
import { StackListDropdown } from "../StackListDropDown";

const StacksModal = ({ tg, setTg }: any) => {
  const [stacks, setStacks] = useState<string[]>([]);

  const node = useRef<null | HTMLDivElement>(null);

  useModal({ node, tg, setTg });
  return (
    <div
      className="bg-white w-[350px]  absolute z-30 top-10 p-4 border rounded-md shadow-xl"
      ref={node}
    >
      스택
      <div className="w-[300px] mx-auto">
        <StackListDropdown stacks={stacks} setStacks={setStacks} />
      </div>
    </div>
  );
};

export default StacksModal;
