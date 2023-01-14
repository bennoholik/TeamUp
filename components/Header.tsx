"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { userInfoQueries } from "../core/api/userinfoQueries";
import { getCookieToken } from "../core/utils/cookie";
import SignInModal from "./Auth/SignInModal";
import ModalPortal from "./MordalPortal";

const Header = () => {
  const [modalState, setModalState] = useState(false);
  const [tokenCheck, setTokenCheck] = useState(false);
  // const { data: userinfo, isSuccess } = userInfoQueries.useGetUserinfo();

  // useEffect(() => {
  //   if (isSuccess) {
  //     alert("hello");
  //   }
  // }, [isSuccess, userinfo]);

  useEffect(() => {
    if (getCookieToken()) {
      setTokenCheck(true);
    }
  }, []);

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
        {tokenCheck ? null : (
          <button onClick={() => setModalState(true)}>로그인</button>
        )}
      </div>
      {modalState ? <SignInModal setModalState={setModalState} /> : null}
    </nav>
  );
};

export default Header;
