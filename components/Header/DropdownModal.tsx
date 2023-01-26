import Link from "next/link";
import { useRef } from "react";
import { useModal } from "../../core/hooks/useModal";
import ModalPortal from "../MordalPortal";

const DropdownModal = ({ loginInfo, tg, setTg }: any) => {
  const node = useRef<null | HTMLDivElement>(null);

  useModal({ node, tg, setTg });
  return (
    <div
      className="z-10 absolute top-16 right-0 bg-white divide-y divide-gray-100 rounded shadow-md w-44"
      ref={node}
    >
      <div className="px-4 py-3 text-sm text-gray-900 ">
        <div>
          <p>안녕하세요, </p>
          <p className="font-bold">{loginInfo.nickname}님</p>
        </div>
      </div>
      <ul className="py-1 text-sm text-gray-800">
        <li>
          <Link href="#" className="block px-4 py-2 hover:bg-gray-100 ">
            마이페이지
          </Link>
        </li>
      </ul>
      <div className="py-1">
        <button className="w-full block px-4 py-2 text-sm text-left text-gray-800 hover:bg-gray-100 ">
          로그아웃
        </button>
      </div>
    </div>
  );
};

export default DropdownModal;
