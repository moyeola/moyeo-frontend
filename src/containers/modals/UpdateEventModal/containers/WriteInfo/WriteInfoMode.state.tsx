import { atom } from "recoil";

export type WriteInfoModeType = "title" | "date" | "notice" | "location";

export const updateEventWriteInfoModeAtom = atom<WriteInfoModeType>({
    key: "updateEventWriteInfoModeAtom",
    default: "title",
});
