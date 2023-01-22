import { useState } from "react";
import ModalPortal from "../MordalPortal";
import { DurationRange } from "./DurationRange";

const DurationModal = ({ setModalState }: any) => {
  const [duration, setDuration] = useState(0);
  return (
    <ModalPortal selector="#portal">
      <div className="bg-white absolute">
        <DurationRange duration={duration} setDuration={setDuration} />
      </div>
    </ModalPortal>
  );
};

export default DurationModal;
