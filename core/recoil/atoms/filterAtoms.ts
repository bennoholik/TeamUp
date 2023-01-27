import { atom } from "recoil";
import { IFilter } from "../../types/filterType";

export const stacksState = atom<string[]>({
  key: "stacksState",
  default: [],
});

export const filterState = atom<IFilter>({
  key: "filterState",
  default: {
    classType: [],
    stack: [],
    duration: 20,
    title: "",
  },
});