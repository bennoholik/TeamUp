import { atom } from "recoil";

export const LoginState = atom<boolean>({
  key: "LoginState",
  default: false,
});

export const loginInfoState = atom({
  key: "loginInfoState",
  default: {
    id: 0,
    folioTitle: "",
    followCnt: 0,
    nickname: "",
    profileImage: "",
    stacks: [],
    className: "",
  },
});
