import { atom } from "recoil";

type Step = "writeInfo";

export const updateEventModalStateAtom = atom<{
    step: Step;
}>({
    key: "updateEventModalStateAtom",
    default: {
        step: "writeInfo",
    },
});
