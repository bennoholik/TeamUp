import { useReducer } from "react";
import { instance } from "../core/utils/axios";
import { setAccessToken } from "../core/utils/cookie";
import Router from "next/router";

const SignIn = () => {
  const [input, updateInput] = useReducer(
    (prev, next) => {
      const newInput = { ...prev, ...next };

      const emailRegex =
        /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
      if (newInput.email && emailRegex.test(newInput.email)) {
        newInput.emailValid = (
          <p className="mt-2 text-sm text-blue-600">올바른 이메일 형식입니다</p>
        );
      } else if (newInput.email.length === 0) {
        newInput.emailValid = "";
      } else {
        newInput.emailValid = (
          <p className="mt-2 text-sm text-red-600">
            {" "}
            올바르지 않은 이메일 형식입니다
          </p>
        );
      }

      if (newInput.password.length > 7) {
        newInput.passwordValid = (
          <p className="mt-2 text-sm text-blue-600">
            올바른 비밀번호 형식입니다
          </p>
        );
      } else if (newInput.password.length === 0) {
        newInput.passwordValid = "";
      } else {
        newInput.passwordValid = (
          <p className="mt-2 text-sm text-red-600">
            {" "}
            올바르지 않은 비밀번호 형식입니다
          </p>
        );
      }
      if (
        newInput.password.length > 7 &&
        newInput.email &&
        emailRegex.test(newInput.email)
      ) {
        newInput.validation = true;
      } else {
        newInput.validation = false;
      }

      return newInput;
    },
    {
      email: "",
      password: "",
      emailValid: "",
      passwordValid: "",
      validation: false,
    }
  );

  const onSignIn = async () => {
    if (input.validation === true) {
      const { email, password } = input;
      try {
        const data = await instance.post("api/members/login", {
          email,
          password,
        });
        console.log(data);
        setAccessToken(data.headers.authorization);
        Router.push("/"); //next js에서 페이지이동 방식중 하나.
        // window.location.replace("/");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="w-full h-[calc(100vh-88px)] bg-green-300 flex flex-row flex-wrap">
      <div className="mx-auto flex justify-center items-center w-[400px]">
        TeamUp
      </div>
      <div className="mx-auto flex justify-center items-center">
        <div className="flex flex-col gap-y-3 ">
          <input
            type="email"
            value={input.email}
            onChange={(e) => updateInput({ email: e.target.value })}
            className="text-gray-900 text-sm bg-[#f1f2f5] h-[52px] rounded-lg focus:ring-blue-500 focus:border-blue-500 w-[350px] p-2.5"
            placeholder="이메일을 입력해주세요"
          />
          {input.emailValid}
          <input
            type="password"
            value={input.password}
            onChange={(e) => updateInput({ password: e.target.value })}
            className="text-gray-900 text-sm bg-[#f1f2f5] h-[52px] rounded-lg focus:ring-blue-500 focus:border-blue-500 w-[350px] p-2.5"
            placeholder="비밀번호를 입력해주세요"
          />
          {input.passwordValid}
          <button
            className={
              "text-white w-full h-[57px] bg-black font-bold rounded-lg text-lg px-5 py-2.5 mr-2 mb-[58px] focus:outline-none "
            }
            onClick={onSignIn}
          >
            로그인
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
