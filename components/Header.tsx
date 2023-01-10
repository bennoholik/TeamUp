"use client";

import Link from "next/link";

const Header = () => {
  return (
    <nav className="xl:max-w-[1130px] w-full flex justify-between mx-auto py-8 px-4 ">
      <div className="flex gap-x-3">
        <Link href={"/"} className="font-bold">
          TeamUp
        </Link>
        <Link href={"/project"}>프로젝트</Link>
        <p>매거진</p>
      </div>

      <div className="flex">
        <p>로그인</p>
      </div>
    </nav>
  );
};

export default Header;
