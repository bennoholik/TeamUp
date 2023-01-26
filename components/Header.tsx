"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { userInfoQueries } from "../core/api/userinfoQueries";
import { loginInfoState, LoginState } from "../core/recoil/atoms/loginAtoms";
import { getCookieToken } from "../core/utils/cookie";
import SignInModal from "./Header/SignInModal";
import DropdownModal from "./Header/DropdownModal";
import ModalPortal from "./MordalPortal";

const Header = () => {
  const [modalState, setModalState] = useState(false);
  const [dropdownState, setDropdownState] = useState(false);

  const [tokenCheck, setTokenCheck] = useState(false);
  const { data: userinfo, isSuccess } = userInfoQueries.useGetUserinfo();

  const loginStatus = useRecoilValue(LoginState);

  const [loginInfo, setLoginInfo] = useRecoilState(loginInfoState);

  useEffect(() => {
    if (isSuccess) {
      setLoginInfo(userinfo);
    }
  }, [isSuccess, setLoginInfo, userinfo]);

  useEffect(() => {
    if (getCookieToken() || loginStatus === true) {
      setTokenCheck(true);
    }
  }, [loginStatus]);

  return (
    <nav className="w-full bg-white fixed top-0 z-10 border-b">
      <div className="xl:max-w-[1130px] relative flex justify-between mx-auto py-8 px-4">
        <div className="flex gap-x-3">
          <Link href={"/"} className="font-bold">
            <Image
              alt="temaup logo"
              src="/TeamUp.png"
              className="w-[90px] h-[25px]"
              width={135}
              height={38}
            />
          </Link>
          <div className="flex gap-x-4 max_md:hidden">
            <Link href={"/project"}>프로젝트</Link>
            <p>매거진</p>
          </div>
        </div>

        {tokenCheck && loginInfo ? (
          <div className="flex gap-x-4">
            <p>채팅</p>
            <p>알림</p>
            <Image
              src={loginInfo.profileImage}
              alt="profileImg"
              className="w-[27px] h-[27px] rounded-full bg-gray-300"
              width={27}
              height={27}
              onClick={() => setDropdownState(true)}
            />
          </div>
        ) : (
          <button onClick={() => setModalState(true)}>로그인</button>
        )}
        {dropdownState ? (
          <DropdownModal
            loginInfo={loginInfo}
            tg={dropdownState}
            setTg={setDropdownState}
          />
        ) : null}
      </div>

      {modalState ? <SignInModal setModalState={setModalState} /> : null}
    </nav>
  );
};

export default Header;
