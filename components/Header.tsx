"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { userInfoQueries } from "../core/api/userinfoQueries";
import { loginInfoState, LoginState } from "../core/recoil/atoms/loginAtoms";
import { getCookieToken } from "../core/utils/cookie";
import SignInModal from "./Auth/SignInModal";
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
    <nav className="w-full bg-white fixed top-0 z-10">
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
              onClick={() => setDropdownState(!dropdownState)}
            />
          </div>
        ) : (
          <button onClick={() => setModalState(true)}>로그인</button>
        )}
        {dropdownState ? (
          <div className="z-10 absolute top-16 right-0 bg-white divide-y divide-gray-100 rounded shadow-md w-44 ">
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
        ) : null}
      </div>

      {modalState ? <SignInModal setModalState={setModalState} /> : null}
    </nav>
  );
};

export default Header;
