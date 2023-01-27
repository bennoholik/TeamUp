import { useRef, useState } from "react";
import { useModal } from "../../../core/hooks/useModal";
import { DurationRange } from "../DurationRange";

const DurationModal = ({ tg, setTg }: any) => {
  const [duration, setduration] = useState(0);

  const node = useRef<null | HTMLDivElement>(null);

  useModal({ node, tg, setTg });
  return (
    <div
      className="bg-white w-[350px] h-[150px] absolute z-30 top-10 left-[108px] p-4 border rounded-md shadow-xl"
      ref={node}
    >
      기간
      <div className="w-[300px] mx-auto">
        <DurationRange duration={duration} setDuration={setduration} />
      </div>
    </div>
  );
};

export default DurationModal;
