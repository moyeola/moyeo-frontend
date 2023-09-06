import { atom } from "recoil";

export type WriteInfoModeType = "title" | "date" | "notice" | "location";

export const writeInfoModeAtom = atom<WriteInfoModeType>({
    key: "writeInfoModeAtom",
    default: "title",
});
