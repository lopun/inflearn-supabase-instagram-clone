import { atom } from "recoil";

export const searchState = atom({
  key: "searchState",
  default: "",
});

export const selectedIndexState = atom({
  key: "selectedIndexState",
  default: null,
});
