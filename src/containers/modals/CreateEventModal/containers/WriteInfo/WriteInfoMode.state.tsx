import { atom } from "recoil";

export type WriteInfoModeType = "title" | "date" | "notice" | "location";

export const createEventWriteInfoModeAtom = atom<WriteInfoModeType>({
    key: "createEventWriteInfoModeAtom",
    default: "title",
});
